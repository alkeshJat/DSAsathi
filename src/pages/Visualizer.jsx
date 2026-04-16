import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ALGORITHMS = [
  { id: 'bubble', name: 'Bubble Sort', category: 'Sorting' },
  { id: 'merge', name: 'Merge Sort', category: 'Sorting' },
  { id: 'quick', name: 'Quick Sort', category: 'Sorting' },
  { id: 'insertion', name: 'Insertion Sort', category: 'Sorting' },
  { id: 'bfs', name: 'BFS Traversal', category: 'Tree' },
  { id: 'dfs', name: 'DFS Traversal', category: 'Tree' },
  { id: 'stack', name: 'Stack Operations', category: 'Data Structure' },
  { id: 'queue', name: 'Queue Operations', category: 'Data Structure' },
];

const ALGO_COMPLEXITY = {
  bubble: { time: 'O(n²)', best: 'O(n)', space: 'O(1)' },
  merge: { time: 'O(n log n)', best: 'O(n log n)', space: 'O(n)' },
  quick: { time: 'O(n log n)', best: 'O(n log n)', space: 'O(log n)' },
  insertion: { time: 'O(n²)', best: 'O(n)', space: 'O(1)' },
  bfs: { time: 'O(V+E)', best: 'O(V+E)', space: 'O(V)' },
  dfs: { time: 'O(V+E)', best: 'O(V+E)', space: 'O(V)' },
  stack: { time: 'O(1) push/pop', best: 'O(1)', space: 'O(n)' },
  queue: { time: 'O(1) enq/deq', best: 'O(1)', space: 'O(n)' },
};

function generateArray(size = 20) {
  return Array.from({ length: size }, () => Math.floor(Math.random() * 80) + 10);
}

// Bubble sort step generator
function* bubbleSortSteps(arr) {
  const a = [...arr];
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      yield { array: [...a], comparing: [j, j + 1], swapped: [], message: `Comparing ${a[j]} and ${a[j + 1]}` };
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        yield { array: [...a], comparing: [], swapped: [j, j + 1], message: `Swapped ${a[j + 1]} and ${a[j]}` };
      }
    }
    yield { array: [...a], comparing: [], swapped: [], sorted: [n - 1 - i], message: `Element ${a[n - 1 - i]} is in its final position` };
  }
  yield { array: [...a], comparing: [], swapped: [], done: true, message: 'Array is sorted! ✅' };
}

function* insertionSortSteps(arr) {
  const a = [...arr];
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    yield { array: [...a], comparing: [i], swapped: [], message: `Picking element ${key} to insert` };
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      yield { array: [...a], comparing: [j, j + 1], swapped: [j + 1], message: `Shifting ${a[j]} right` };
      j--;
    }
    a[j + 1] = key;
    yield { array: [...a], comparing: [], swapped: [j + 1], message: `Inserted ${key} at position ${j + 1}` };
  }
  yield { array: [...a], comparing: [], swapped: [], done: true, message: 'Array is sorted! ✅' };
}

function* mergeSortSteps(arr) {
  const a = [...arr];
  const aux = [...arr];

  function* mergeHelper(left, right) {
    if (right - left <= 0) return;
    const mid = Math.floor((left + right) / 2);
    yield* mergeHelper(left, mid);
    yield* mergeHelper(mid + 1, right);

    // Merge step
    let i = left, j = mid + 1, k = left;
    const temp = [];
    while (i <= mid && j <= right) {
      yield { array: [...a], comparing: [i, j], swapped: [], message: `Comparing a[${i}]=${a[i]} and a[${j}]=${a[j]}` };
      if (a[i] <= a[j]) temp.push(a[i++]);
      else temp.push(a[j++]);
    }
    while (i <= mid) temp.push(a[i++]);
    while (j <= right) temp.push(a[j++]);
    for (let x = 0; x < temp.length; x++) {
      a[left + x] = temp[x];
      yield { array: [...a], comparing: [], swapped: [left + x], message: `Placing ${temp[x]} at position ${left + x}` };
    }
  }

  yield* mergeHelper(0, a.length - 1);
  yield { array: [...a], comparing: [], swapped: [], done: true, message: 'Array is sorted! ✅' };
}

// BFS tree data
const TREE_NODES = [
  { id: 0, value: 1, children: [1, 2] },
  { id: 1, value: 2, children: [3, 4] },
  { id: 2, value: 3, children: [5, 6] },
  { id: 3, value: 4, children: [] },
  { id: 4, value: 5, children: [] },
  { id: 5, value: 6, children: [] },
  { id: 6, value: 7, children: [] },
];

function* bfsSteps() {
  const queue = [0];
  const visited = new Set();
  let step = 0;
  while (queue.length > 0) {
    const nodeId = queue.shift();
    if (visited.has(nodeId)) continue;
    visited.add(nodeId);
    const node = TREE_NODES[nodeId];
    yield { visited: [...visited], current: nodeId, queue: [...queue], message: `Visiting node ${node.value} — Level order traversal`, step: ++step };
    for (const child of node.children) {
      if (!visited.has(child)) {
        queue.push(child);
      }
    }
  }
  yield { visited: [...visited], current: -1, queue: [], message: 'BFS complete! All nodes visited ✅', done: true };
}

function* dfsSteps() {
  const stack = [0];
  const visited = new Set();
  let step = 0;
  while (stack.length > 0) {
    const nodeId = stack.pop();
    if (visited.has(nodeId)) continue;
    visited.add(nodeId);
    const node = TREE_NODES[nodeId];
    yield { visited: [...visited], current: nodeId, stack: [...stack], message: `Visiting node ${node.value} — Depth first traversal`, step: ++step };
    for (const child of [...node.children].reverse()) {
      if (!visited.has(child)) stack.push(child);
    }
  }
  yield { visited: [...visited], current: -1, stack: [], message: 'DFS complete! All nodes visited ✅', done: true };
}

function* quickSortSteps(arr) {
  const a = [...arr];
  
  function* partition(low, high) {
    const pivot = a[high];
    yield { array: [...a], comparing: [high], swapped: [], message: `Pivot is ${pivot}` };
    let i = low - 1;
    for (let j = low; j < high; j++) {
      yield { array: [...a], comparing: [j, high], swapped: [], message: `Comparing ${a[j]} with pivot ${pivot}` };
      if (a[j] < pivot) {
        i++;
        [a[i], a[j]] = [a[j], a[i]];
        yield { array: [...a], comparing: [], swapped: [i, j], message: `Swapped ${a[j]} and ${a[i]}` };
      }
    }
    [a[i + 1], a[high]] = [a[high], a[i + 1]];
    yield { array: [...a], comparing: [], swapped: [i + 1, high], message: `Placed pivot ${pivot} at position ${i + 1}` };
    return i + 1;
  }

  function* quickSort(low, high) {
    if (low < high) {
      const gen = partition(low, high);
      let result;
      while (true) {
        result = gen.next();
        if (result.done) break;
        yield result.value;
      }
      const pi = result.value;
      yield* quickSort(low, pi - 1);
      yield* quickSort(pi + 1, high);
    }
  }

  yield* quickSort(0, a.length - 1);
  yield { array: [...a], comparing: [], swapped: [], done: true, message: 'Array is sorted! ✅' };
}

// Stack/Queue visualizer data
function* stackSteps() {
  const stack = [];
  const ops = [
    { op: 'push', val: 42 }, { op: 'push', val: 17 }, { op: 'push', val: 85 },
    { op: 'peek', val: null }, { op: 'pop', val: null }, { op: 'push', val: 23 },
    { op: 'pop', val: null }, { op: 'pop', val: null },
  ];
  for (const { op, val } of ops) {
    if (op === 'push') {
      stack.push(val);
      yield { stack: [...stack], highlight: stack.length - 1, message: `push(${val}) — Added ${val} to top` };
    } else if (op === 'pop') {
      const popped = stack.pop();
      yield { stack: [...stack], highlight: -1, message: `pop() — Removed ${popped} from top` };
    } else if (op === 'peek') {
      yield { stack: [...stack], highlight: stack.length - 1, message: `peek() — Top element is ${stack[stack.length - 1]}` };
    }
  }
  yield { stack: [...stack], highlight: -1, done: true, message: 'Stack operations complete! ✅' };
}

export default function Visualizer() {
  const [selectedAlgo, setSelectedAlgo] = useState('bubble');
  const [array, setArray] = useState(generateArray);
  const [currentStep, setCurrentStep] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(200);
  const [stepNum, setStepNum] = useState(0);
  const [history, setHistory] = useState([]);
  const stepGenRef = useRef(null);
  const timerRef = useRef(null);
  const isStackType = selectedAlgo === 'stack' || selectedAlgo === 'queue';
  const isTreeType = selectedAlgo === 'bfs' || selectedAlgo === 'dfs';
  const categories = [...new Set(ALGORITHMS.map(a => a.category))];

  const getStepGenerator = useCallback((algo, arr) => {
    switch (algo) {
      case 'bubble': return bubbleSortSteps(arr);
      case 'merge': return mergeSortSteps(arr);
      case 'insertion': return insertionSortSteps(arr);
      case 'quick': return quickSortSteps(arr);
      case 'bfs': return bfsSteps();
      case 'dfs': return dfsSteps();
      case 'stack': return stackSteps();
      case 'queue': return stackSteps();
      default: return bubbleSortSteps(arr);
    }
  }, []);

  const reset = useCallback(() => {
    clearInterval(timerRef.current);
    const newArray = generateArray();
    setArray(newArray);
    setCurrentStep(null);
    setIsPlaying(false);
    setStepNum(0);
    setHistory([]);
    stepGenRef.current = null;
  }, []);

  const stepForward = useCallback(() => {
    if (!stepGenRef.current) {
      stepGenRef.current = getStepGenerator(selectedAlgo, array);
    }
    const next = stepGenRef.current.next();
    if (!next.done) {
      setCurrentStep(next.value);
      setHistory(prev => [...prev, next.value]);
      setStepNum(prev => prev + 1);
      if (next.value.done) {
        setIsPlaying(false);
        clearInterval(timerRef.current);
      }
    } else {
      setIsPlaying(false);
      clearInterval(timerRef.current);
    }
  }, [array, selectedAlgo, getStepGenerator]);

  const stepBackward = useCallback(() => {
    if (history.length > 1) {
      const newHistory = history.slice(0, -1);
      setHistory(newHistory);
      setCurrentStep(newHistory[newHistory.length - 1]);
      setStepNum(prev => prev - 1);
    } else if (history.length === 1) {
      setHistory([]);
      setCurrentStep(null);
      setStepNum(0);
    }
  }, [history]);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      clearInterval(timerRef.current);
      setIsPlaying(false);
    } else {
      if (!stepGenRef.current) {
        stepGenRef.current = getStepGenerator(selectedAlgo, array);
      }
      setIsPlaying(true);
    }
  }, [isPlaying, selectedAlgo, array, getStepGenerator]);

  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(stepForward, speed);
    }
    return () => clearInterval(timerRef.current);
  }, [isPlaying, speed, stepForward]);

  useEffect(() => {
    reset();
  }, [selectedAlgo]);

  const displayArray = currentStep?.array || array;
  const comparing = currentStep?.comparing || [];
  const swapped = currentStep?.swapped || [];

  return (
    <div className="min-h-screen pt-20 px-4 pb-12">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-3xl font-bold mb-2">📊 Algorithm Visualizer</h1>
          <p className="text-gray-400">Watch algorithms come alive with step-by-step animations.</p>
        </motion.div>

        {/* Algorithm selector grouped by category */}
        <div className="mb-6 space-y-3">
          {categories.map(cat => (
            <div key={cat}>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">{cat}</p>
              <div className="flex flex-wrap gap-2">
                {ALGORITHMS.filter(a => a.category === cat).map(algo => (
                  <button
                    key={algo.id}
                    onClick={() => setSelectedAlgo(algo.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                      selectedAlgo === algo.id
                        ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shadow-md shadow-indigo-500/10'
                        : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {algo.name}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Complexity Info */}
        {ALGO_COMPLEXITY[selectedAlgo] && (
          <div className="flex flex-wrap gap-3 mb-4">
            {Object.entries(ALGO_COMPLEXITY[selectedAlgo]).map(([key, val]) => (
              <div key={key} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs">
                <span className="text-gray-500 capitalize">{key === 'time' ? '⏱ Avg Time' : key === 'best' ? '✨ Best' : '💾 Space'}: </span>
                <span className="font-mono text-indigo-400">{val}</span>
              </div>
            ))}
          </div>
        )}

        {/* Visualization Area */}
        <div className="glass-card p-6 mb-6">
          {/* Step message */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-mono">
                Step {stepNum}
              </span>
              <span className="text-sm text-gray-300">
                {currentStep?.message || 'Press Play to start'}
              </span>
            </div>
            {currentStep?.done && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs">Complete</span>
            )}
          </div>

          {/* Array bars visualization */}
          {isTreeType ? (
            // Tree visualization
            <div className="flex flex-col items-center h-72 mb-4">
              <p className="text-xs text-gray-500 mb-4">Binary Tree — {selectedAlgo.toUpperCase()} Traversal Order</p>
              <div className="relative w-full max-w-sm">
                {/* Row 1 */}
                <div className="flex justify-center mb-8">
                  {[TREE_NODES[0]].map(node => (
                    <motion.div key={node.id} animate={{ scale: currentStep?.current === node.id ? 1.2 : 1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                        currentStep?.current === node.id ? 'bg-yellow-500 border-yellow-400 text-white shadow-lg shadow-yellow-500/40' :
                        (currentStep?.visited || []).includes(node.id) ? 'bg-indigo-500 border-indigo-400 text-white' :
                        'bg-white/10 border-white/20 text-gray-300'
                      }`}>
                      {node.value}
                    </motion.div>
                  ))}
                </div>
                {/* Row 2 */}
                <div className="flex justify-around mb-8 px-8">
                  {[TREE_NODES[1], TREE_NODES[2]].map(node => (
                    <motion.div key={node.id} animate={{ scale: currentStep?.current === node.id ? 1.2 : 1 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold border-2 transition-all ${
                        currentStep?.current === node.id ? 'bg-yellow-500 border-yellow-400 text-white shadow-lg shadow-yellow-500/40' :
                        (currentStep?.visited || []).includes(node.id) ? 'bg-indigo-500 border-indigo-400 text-white' :
                        'bg-white/10 border-white/20 text-gray-300'
                      }`}>
                      {node.value}
                    </motion.div>
                  ))}
                </div>
                {/* Row 3 */}
                <div className="flex justify-around">
                  {[TREE_NODES[3], TREE_NODES[4], TREE_NODES[5], TREE_NODES[6]].map(node => (
                    <motion.div key={node.id} animate={{ scale: currentStep?.current === node.id ? 1.2 : 1 }}
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 text-sm transition-all ${
                        currentStep?.current === node.id ? 'bg-yellow-500 border-yellow-400 text-white shadow-lg shadow-yellow-500/40' :
                        (currentStep?.visited || []).includes(node.id) ? 'bg-indigo-500 border-indigo-400 text-white' :
                        'bg-white/10 border-white/20 text-gray-300'
                      }`}>
                      {node.value}
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4 mt-4 text-xs text-gray-500">
                <span className="flex items-center space-x-1"><span className="w-3 h-3 rounded-full bg-yellow-500 inline-block"/><span>Current</span></span>
                <span className="flex items-center space-x-1"><span className="w-3 h-3 rounded-full bg-indigo-500 inline-block"/><span>Visited</span></span>
                <span className="flex items-center space-x-1"><span className="w-3 h-3 rounded-full bg-white/20 inline-block"/><span>Unvisited</span></span>
              </div>
            </div>
          ) : !isStackType ? (
            <div className="flex items-end justify-center space-x-1 h-64 mb-4">
              {displayArray.map((val, i) => (
                <motion.div
                  key={i}
                  layout
                  className="relative flex-1 max-w-[40px] rounded-t-lg transition-colors duration-200"
                  style={{
                    height: `${(val / 100) * 100}%`,
                    backgroundColor: comparing.includes(i)
                      ? '#fbbf24'
                      : swapped.includes(i)
                        ? '#ef4444'
                        : currentStep?.done
                          ? '#10b981'
                          : '#6366f1',
                    boxShadow: comparing.includes(i)
                      ? '0 0 15px rgba(251,191,36,0.4)'
                      : swapped.includes(i)
                        ? '0 0 15px rgba(239,68,68,0.4)'
                        : 'none',
                  }}
                >
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] text-gray-400 font-mono">
                    {val}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Stack visualization */
            <div className="flex flex-col items-center h-64 mb-4">
              <div className="w-48 flex flex-col-reverse items-center border-l-2 border-r-2 border-b-2 border-white/10 rounded-b-xl p-2 min-h-[200px]">
                {(currentStep?.stack || []).map((val, i) => (
                  <motion.div
                    key={`${val}-${i}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`w-full py-3 text-center rounded-lg mb-1 font-mono text-sm transition-colors ${
                      currentStep?.highlight === i
                        ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30'
                        : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {val}
                  </motion.div>
                ))}
                {(currentStep?.stack || []).length === 0 && (
                  <p className="text-gray-600 text-sm py-8">Stack is empty</p>
                )}
              </div>
              <p className="text-xs text-gray-500 mt-2">↑ Top</p>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="glass-card p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-2">
              <button onClick={reset} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm" title="Reset">
                🔄
              </button>
              <button onClick={stepBackward} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm" title="Step Back"
                disabled={stepNum === 0}>
                ⏪
              </button>
              <button onClick={togglePlay}
                className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  isPlaying
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30 hover:bg-red-500/30'
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/30'
                }`}>
                {isPlaying ? '⏸ Pause' : '▶ Play'}
              </button>
              <button onClick={stepForward} className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm" title="Step Forward">
                ⏩
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-500">Speed:</span>
              <input
                type="range"
                min="50"
                max="1000"
                step="50"
                value={1050 - speed}
                onChange={e => setSpeed(1050 - parseInt(e.target.value))}
                className="w-32 accent-indigo-500"
              />
              <span className="text-xs text-gray-400 w-16">{speed}ms</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
