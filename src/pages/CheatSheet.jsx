import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  { id: 'bigO', label: '📊 Big-O Guide', icon: '📊' },
  { id: 'sorting', label: '↕️ Sorting', icon: '↕️' },
  { id: 'ds', label: '🗄️ Data Structures', icon: '🗄️' },
  { id: 'patterns', label: '🧩 Patterns', icon: '🧩' },
  { id: 'tips', label: '💡 Interview Tips', icon: '💡' },
];

const BIG_O_CLASSES = [
  { notation: 'O(1)', name: 'Constant', color: '#10b981', examples: 'Array access, Hash lookup, Stack push/pop', bar: 5 },
  { notation: 'O(log n)', name: 'Logarithmic', color: '#6366f1', examples: 'Binary search, Balanced BST ops', bar: 15 },
  { notation: 'O(n)', name: 'Linear', color: '#3b82f6', examples: 'Linear search, Array traversal', bar: 35 },
  { notation: 'O(n log n)', name: 'Linearithmic', color: '#f59e0b', examples: 'Merge sort, Heap sort, Quick sort (avg)', bar: 55 },
  { notation: 'O(n²)', name: 'Quadratic', color: '#ef4444', examples: 'Bubble/Selection/Insertion sort, Nested loops', bar: 75 },
  { notation: 'O(2ⁿ)', name: 'Exponential', color: '#dc2626', examples: 'Recursive Fibonacci, Power set, Backtracking', bar: 90 },
  { notation: 'O(n!)', name: 'Factorial', color: '#7f1d1d', examples: 'Permutations, Traveling Salesman (brute force)', bar: 100 },
];

const SORTING_ALGOS = [
  { name: 'Bubble Sort', best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, notes: 'Simple but inefficient. Good for nearly sorted data.' },
  { name: 'Selection Sort', best: 'O(n²)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: false, notes: 'Always O(n²). Minimal memory writes.' },
  { name: 'Insertion Sort', best: 'O(n)', avg: 'O(n²)', worst: 'O(n²)', space: 'O(1)', stable: true, notes: 'Excellent for small or nearly sorted arrays.' },
  { name: 'Merge Sort', best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(n)', stable: true, notes: 'Consistent performance. Best for linked lists.' },
  { name: 'Quick Sort', best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n²)', space: 'O(log n)', stable: false, notes: 'Usually fastest in practice. Worst case avoidable.' },
  { name: 'Heap Sort', best: 'O(n log n)', avg: 'O(n log n)', worst: 'O(n log n)', space: 'O(1)', stable: false, notes: 'In-place with consistent performance.' },
  { name: 'Counting Sort', best: 'O(n+k)', avg: 'O(n+k)', worst: 'O(n+k)', space: 'O(k)', stable: true, notes: 'Linear time! Only for small integer keys.' },
  { name: 'Radix Sort', best: 'O(nk)', avg: 'O(nk)', worst: 'O(nk)', space: 'O(n+k)', stable: true, notes: 'Linear for fixed-length integers or strings.' },
];

const DS_OPS = [
  { name: 'Array', access: 'O(1)', search: 'O(n)', insert: 'O(n)', delete: 'O(n)', space: 'O(n)', notes: 'Index-based. Cache friendly.' },
  { name: 'Linked List', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)', space: 'O(n)', notes: 'Insert/delete at head is O(1).' },
  { name: 'Stack', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)', space: 'O(n)', notes: 'LIFO. Push/pop at top only.' },
  { name: 'Queue', access: 'O(n)', search: 'O(n)', insert: 'O(1)', delete: 'O(1)', space: 'O(n)', notes: 'FIFO. Enqueue/dequeue.' },
  { name: 'Hash Table', access: 'O(1)*', search: 'O(1)*', insert: 'O(1)*', delete: 'O(1)*', space: 'O(n)', notes: '*Average case. O(n) worst.' },
  { name: 'Binary Search Tree', access: 'O(log n)*', search: 'O(log n)*', insert: 'O(log n)*', delete: 'O(log n)*', space: 'O(n)', notes: '*Avg. O(n) worst (unbalanced).' },
  { name: 'AVL / Red-Black Tree', access: 'O(log n)', search: 'O(log n)', insert: 'O(log n)', delete: 'O(log n)', space: 'O(n)', notes: 'Always balanced. Guaranteed log n.' },
  { name: 'Heap (Binary)', access: 'O(n)', search: 'O(n)', insert: 'O(log n)', delete: 'O(log n)', space: 'O(n)', notes: 'Min/Max in O(1). Used in Priority Queue.' },
  { name: 'Trie', access: 'O(k)', search: 'O(k)', insert: 'O(k)', delete: 'O(k)', space: 'O(n*k)', notes: 'k = key length. Great for prefix matching.' },
  { name: 'Graph (Adj. List)', access: 'O(V+E)', search: 'O(V+E)', insert: 'O(1)', delete: 'O(E)', space: 'O(V+E)', notes: 'V = vertices, E = edges.' },
];

const PATTERNS = [
  { name: 'Sliding Window', icon: '🪟', when: 'Contiguous subarray/substring problems', approach: 'Maintain a window with two pointers, expand/shrink as needed', examples: 'Max subarray sum k, Longest substring no repeat, Min window substring', complexity: 'O(n) time, O(1)-O(k) space' },
  { name: 'Two Pointers', icon: '👈👉', when: 'Sorted arrays, finding pairs with target sum', approach: 'Start from both ends and move toward center based on condition', examples: 'Two sum sorted, Remove duplicates, Container with most water', complexity: 'O(n) time, O(1) space' },
  { name: 'Fast & Slow Pointers', icon: '🐢🐇', when: 'Cycle detection in linked lists or arrays', approach: 'Fast moves 2x speed, when they meet → cycle exists', examples: 'Linked list cycle, Find cycle start, Middle of linked list', complexity: 'O(n) time, O(1) space' },
  { name: 'Merge Intervals', icon: '🔀', when: 'Overlapping intervals problems', approach: 'Sort by start, merge when intervals overlap', examples: 'Merge intervals, Insert interval, Meeting rooms', complexity: 'O(n log n) time, O(n) space' },
  { name: 'Binary Search', icon: '🔍', when: 'Searching in sorted data or monotonic functions', approach: 'Eliminate half the search space each iteration', examples: 'Search rotated array, Find first/last position, Koko eating bananas', complexity: 'O(log n) time, O(1) space' },
  { name: 'BFS', icon: '🌊', when: 'Level-order traversal, shortest path (unweighted)', approach: 'Use queue, explore all neighbors before going deeper', examples: 'Word ladder, Rotting oranges, Binary tree level order', complexity: 'O(V+E) time, O(V) space' },
  { name: 'DFS / Backtracking', icon: '🌲', when: 'Explore all paths, combinations, permutations', approach: 'Recurse deeper, undo choice when backtracking', examples: 'Subsets, Permutations, N-Queens, Sudoku solver', complexity: 'O(2ⁿ) to O(n!) time' },
  { name: 'Dynamic Programming', icon: '📦', when: 'Optimal substructure + overlapping subproblems', approach: 'Memoize recursive results or build bottom-up table', examples: 'Fibonacci, Coin change, LCS, Knapsack', complexity: 'O(n²) or O(n*m) typical' },
  { name: 'Greedy', icon: '💰', when: 'Locally optimal choices lead to global optimum', approach: 'Always pick the best option at each step', examples: 'Activity selection, Huffman coding, Jump game', complexity: 'Usually O(n log n)' },
  { name: 'Monotonic Stack', icon: '📚', when: 'Next greater/smaller element, span problems', approach: 'Maintain stack in increasing/decreasing order', examples: 'Daily temperatures, Largest rectangle in histogram', complexity: 'O(n) time, O(n) space' },
  { name: 'Heap / Priority Queue', icon: '⛏️', when: 'Kth largest/smallest, streaming median', approach: 'Min-heap or max-heap maintains sorted order efficiently', examples: 'K closest points, Merge K sorted lists, Median data stream', complexity: 'O(n log k) time' },
  { name: 'Topological Sort', icon: '🔗', when: 'Dependency ordering, course scheduling', approach: 'BFS with in-degree tracking (Kahn\'s) or DFS post-order', examples: 'Course schedule, Alien dictionary, Task ordering', complexity: 'O(V+E)' },
];

const INTERVIEW_TIPS = [
  { category: '🎯 Before Coding', tips: [
    'Repeat the problem back in your own words to confirm understanding',
    'Ask clarifying questions: input range, edge cases, sorted/unsorted?',
    'Discuss your approach BEFORE writing code — interviewers want to see thinking',
    'Think aloud. Say "I\'m considering X approach because..."',
    'Write examples (2-3 test cases) to validate your understanding',
  ]},
  { category: '💻 While Coding', tips: [
    'Start with a brute-force solution and state its complexity',
    'Optimize only after you have a working solution',
    'Name variables clearly — avoid single letters except loop indices',
    'Modularize: extract helper functions when logic gets complex',
    'Trace through your code with a test case before claiming it works',
  ]},
  { category: '📊 Complexity Analysis', tips: [
    'Always state both time AND space complexity for every solution',
    'Simplify: O(2n) = O(n), O(n + m) stays O(n + m) if independent',
    'Recursive algorithms: draw the recursion tree to find depth and branching',
    'Amortized analysis: dynamic array push is O(1) amortized despite occasional O(n)',
    'Know when O(n log n) is the best possible (sorting, comparisons)',
  ]},
  { category: '🧠 Problem Recognition', tips: [
    '"Find kth largest" → Heap (O(n log k)) or QuickSelect (O(n) avg)',
    '"Shortest path unweighted" → BFS',
    '"All combinations/permutations" → DFS/Backtracking',
    '"Overlapping subproblems" → DP',
    '"Contiguous subarray" → Sliding window',
    '"Sorted array + O(log n)" → Binary search',
    '"Tree/Graph traversal order" → BFS for levels, DFS for paths',
  ]},
  { category: '⚡ Quick Wins', tips: [
    'Use a HashMap to trade space for time (O(n) vs O(n²))',
    'Sort the input when order of elements matters',
    'Prefix sums for range sum queries in O(1)',
    'Two stacks can simulate a queue (amortized O(1))',
    'Dummy/sentinel nodes simplify edge cases in linked list problems',
    'In-place reversal: XOR swap or 3-pointer technique',
  ]},
];

function getComplexityColor(notation) {
  if (notation === 'O(1)' || notation === 'O(1)*') return 'text-emerald-400';
  if (notation.includes('log n')) return 'text-indigo-400';
  if (notation === 'O(n)') return 'text-blue-400';
  if (notation.includes('n log n') || notation.includes('nk') || notation.includes('n+k')) return 'text-yellow-400';
  if (notation.includes('n²') || notation.includes('n*')) return 'text-orange-400';
  if (notation.includes('V+E') || notation.includes('V') || notation.includes('k')) return 'text-purple-400';
  return 'text-gray-400';
}

export default function CheatSheet() {
  const [activeTab, setActiveTab] = useState('bigO');
  const [expandedPattern, setExpandedPattern] = useState(null);
  const [expandedTip, setExpandedTip] = useState(null);
  const [copied, setCopied] = useState(null);

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="min-h-screen pt-20 px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-10">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-sm text-indigo-300">Developer Reference</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3">
            DSA <span className="gradient-text">Cheat Sheet</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Your complete reference for complexities, patterns, and interview tips. Bookmark this page!
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 shadow-md shadow-indigo-500/10'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>

            {/* Big-O Guide */}
            {activeTab === 'bigO' && (
              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h2 className="text-xl font-bold mb-6">Complexity Growth Rates</h2>
                  <div className="space-y-4">
                    {BIG_O_CLASSES.map((item, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                        className="flex items-center space-x-4">
                        <div className="w-28 flex-shrink-0">
                          <code className="text-sm font-mono font-bold" style={{ color: item.color }}>{item.notation}</code>
                          <p className="text-[10px] text-gray-500">{item.name}</p>
                        </div>
                        <div className="flex-1 h-6 bg-white/5 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${item.bar}%` }}
                            transition={{ delay: i * 0.05 + 0.2, duration: 0.8, ease: 'easeOut' }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: item.color + 'aa' }}
                          />
                        </div>
                        <p className="text-xs text-gray-400 w-64 hidden md:block flex-shrink-0">{item.examples}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { title: '✅ Usually Acceptable', items: ['O(1)', 'O(log n)', 'O(n)', 'O(n log n)'], color: 'emerald' },
                    { title: '⚠️ Sometimes OK', items: ['O(n²) — small n only', 'O(n · m) — matrix ops'], color: 'yellow' },
                    { title: '❌ Usually Too Slow', items: ['O(2ⁿ)', 'O(n!)', 'O(n³)'], color: 'red' },
                  ].map((card, i) => (
                    <div key={i} className="glass-card p-5">
                      <h3 className="font-semibold mb-3 text-sm">{card.title}</h3>
                      <ul className="space-y-1.5">
                        {card.items.map((item, j) => (
                          <li key={j} className="text-sm text-gray-400 flex items-center space-x-2">
                            <span className={`w-1.5 h-1.5 rounded-full bg-${card.color}-500`} />
                            <code className="font-mono">{item}</code>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="glass-card p-5 border border-indigo-500/20 bg-indigo-500/5">
                  <h3 className="font-semibold text-indigo-400 mb-3">🔑 Key Rules</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-300">
                    {[
                      'Drop constants: O(3n) → O(n)',
                      'Drop lower-order terms: O(n² + n) → O(n²)',
                      'Different inputs → different variables: O(a + b), not O(n)',
                      'Nested loops multiply: two loops over n → O(n²)',
                      'Recursive calls: T(n) = 2T(n/2) + n → O(n log n)',
                      'Master theorem for divide-and-conquer recurrences',
                    ].map((rule, i) => (
                      <div key={i} className="flex items-start space-x-2">
                        <span className="text-indigo-400 mt-0.5">→</span>
                        <span>{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Sorting Tab */}
            {activeTab === 'sorting' && (
              <div className="glass-card overflow-hidden">
                <div className="p-4 border-b border-white/5 flex items-center justify-between">
                  <h2 className="font-semibold">Sorting Algorithms Reference</h2>
                  <p className="text-xs text-gray-500">* = amortized</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-xs text-gray-500 uppercase">
                        <th className="p-4 text-left font-medium">Algorithm</th>
                        <th className="p-4 text-center font-medium">Best</th>
                        <th className="p-4 text-center font-medium">Average</th>
                        <th className="p-4 text-center font-medium">Worst</th>
                        <th className="p-4 text-center font-medium">Space</th>
                        <th className="p-4 text-center font-medium">Stable?</th>
                        <th className="p-4 text-left font-medium hidden lg:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {SORTING_ALGOS.map((algo, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-4 font-semibold text-white">{algo.name}</td>
                          <td className="p-4 text-center font-mono"><span className={getComplexityColor(algo.best)}>{algo.best}</span></td>
                          <td className="p-4 text-center font-mono"><span className={getComplexityColor(algo.avg)}>{algo.avg}</span></td>
                          <td className="p-4 text-center font-mono"><span className={getComplexityColor(algo.worst)}>{algo.worst}</span></td>
                          <td className="p-4 text-center font-mono"><span className={getComplexityColor(algo.space)}>{algo.space}</span></td>
                          <td className="p-4 text-center">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${algo.stable ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'}`}>
                              {algo.stable ? 'Yes' : 'No'}
                            </span>
                          </td>
                          <td className="p-4 text-gray-400 text-xs hidden lg:table-cell">{algo.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Data Structures Tab */}
            {activeTab === 'ds' && (
              <div className="glass-card overflow-hidden">
                <div className="p-4 border-b border-white/5">
                  <h2 className="font-semibold">Data Structure Operations</h2>
                  <p className="text-xs text-gray-500 mt-1">* = average case</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 text-xs text-gray-500 uppercase">
                        <th className="p-4 text-left font-medium">Structure</th>
                        <th className="p-4 text-center font-medium">Access</th>
                        <th className="p-4 text-center font-medium">Search</th>
                        <th className="p-4 text-center font-medium">Insert</th>
                        <th className="p-4 text-center font-medium">Delete</th>
                        <th className="p-4 text-center font-medium">Space</th>
                        <th className="p-4 text-left font-medium hidden lg:table-cell">Notes</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DS_OPS.map((ds, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                          <td className="p-4 font-semibold text-white">{ds.name}</td>
                          <td className="p-4 text-center font-mono"><span className={getComplexityColor(ds.access)}>{ds.access}</span></td>
                          <td className="p-4 text-center font-mono"><span className={getComplexityColor(ds.search)}>{ds.search}</span></td>
                          <td className="p-4 text-center font-mono"><span className={getComplexityColor(ds.insert)}>{ds.insert}</span></td>
                          <td className="p-4 text-center font-mono"><span className={getComplexityColor(ds.delete)}>{ds.delete}</span></td>
                          <td className="p-4 text-center font-mono text-gray-400">{ds.space}</td>
                          <td className="p-4 text-gray-400 text-xs hidden lg:table-cell">{ds.notes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Patterns Tab */}
            {activeTab === 'patterns' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {PATTERNS.map((pattern, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.04 }}
                    className="glass-card overflow-hidden cursor-pointer"
                    onClick={() => setExpandedPattern(expandedPattern === i ? null : i)}>
                    <div className="p-5 flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{pattern.icon}</span>
                        <div>
                          <h3 className="font-semibold text-white">{pattern.name}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">{pattern.complexity}</p>
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">{expandedPattern === i ? '▲' : '▼'}</span>
                    </div>
                    <AnimatePresence>
                      {expandedPattern === i && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                          <div className="px-5 pb-5 space-y-3 border-t border-white/5 pt-4">
                            <div>
                              <p className="text-xs text-indigo-400 uppercase mb-1">When to use</p>
                              <p className="text-sm text-gray-300">{pattern.when}</p>
                            </div>
                            <div>
                              <p className="text-xs text-violet-400 uppercase mb-1">Approach</p>
                              <p className="text-sm text-gray-300">{pattern.approach}</p>
                            </div>
                            <div>
                              <p className="text-xs text-emerald-400 uppercase mb-1">Classic Examples</p>
                              <p className="text-sm text-gray-400">{pattern.examples}</p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Interview Tips Tab */}
            {activeTab === 'tips' && (
              <div className="space-y-4">
                {INTERVIEW_TIPS.map((section, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                    className="glass-card overflow-hidden">
                    <button
                      className="w-full p-5 flex items-center justify-between hover:bg-white/5 transition-colors"
                      onClick={() => setExpandedTip(expandedTip === i ? null : i)}
                    >
                      <h3 className="font-semibold text-lg">{section.category}</h3>
                      <span className="text-gray-400">{expandedTip === i ? '▲' : '▼'}</span>
                    </button>
                    <AnimatePresence>
                      {expandedTip === i && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                          <ul className="px-6 pb-5 space-y-3 border-t border-white/5 pt-4">
                            {section.tips.map((tip, j) => (
                              <li key={j} className="flex items-start space-x-3">
                                <span className="text-indigo-400 mt-1 flex-shrink-0">✓</span>
                                <span className="text-sm text-gray-300 leading-relaxed">{tip}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
                <div className="glass-card p-6 border border-emerald-500/20 bg-emerald-500/5">
                  <h3 className="font-semibold text-emerald-400 mb-3">🎯 The Golden Rule</h3>
                  <p className="text-gray-300">
                    Interviewers care more about <em>how you think</em> than perfect code. 
                    Think out loud, take hints gracefully, and demonstrate your problem-solving process clearly.
                    A communicative candidate with an imperfect solution often beats a silent candidate with perfect code.
                  </p>
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
