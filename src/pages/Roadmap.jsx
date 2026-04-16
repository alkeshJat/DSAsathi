import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Roadmap Data ────────────────────────────────────────────────────────────
const PHASES = [
  {
    id: 'foundations',
    phase: '01',
    level: 'BEGINNER',
    title: 'Foundations & Big-O',
    subtitle: 'Build the mental model before you write a line of DSA code.',
    duration: '2 weeks',
    color: '#6B7280',
    levelColor: 'emerald',
    topics: [
      { title: 'Big-O Notation', desc: 'Time & space complexity — learn to measure and compare algorithms.', time: '3 hrs' },
      { title: 'Recursion', desc: 'The backbone of most algorithms. Think recursively before iteratively.', time: '4 hrs' },
      { title: 'Math Essentials', desc: 'Modulo, primes, GCD, LCM, logs. The math DSA actually uses.', time: '2 hrs' },
      { title: 'Bit Manipulation', desc: 'AND, OR, XOR, left/right shifts. Essential for optimization tricks.', time: '2 hrs' },
    ],
    milestone: 'Explain O(n), O(log n), and O(n²) out loud. Write recursive Fibonacci with memoization.',
    problems: ['Fibonacci (recursive + memo)', 'Power of Two', 'Count Set Bits', 'Reverse Bits'],
    resources: [
      { label: 'CS50 — Intro to CS', url: 'https://cs50.harvard.edu/x/', type: 'course', icon: '🎓' },
      { label: 'Big-O Cheat Sheet', url: 'https://www.bigocheatsheet.com/', type: 'article', icon: '📄' },
      { label: 'Abdul Bari — Recursion Series', url: 'https://www.youtube.com/playlist?list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr', type: 'video', icon: '📺' },
      { label: 'mycodeschool — Recursion', url: 'https://www.youtube.com/watch?v=KEEKn7Me-ms', type: 'video', icon: '📺' },
      { label: 'GFG — Bit Manipulation', url: 'https://www.geeksforgeeks.org/bit-manipulation-tricks/', type: 'article', icon: '📄' },
    ],
    internalLinks: [{ label: 'Visualizer →', link: '/visualizer' }, { label: 'Cheat Sheet →', link: '/cheatsheet' }],
  },
  {
    id: 'arrays',
    phase: '02',
    level: 'BEGINNER',
    title: 'Arrays & Strings',
    subtitle: 'The most tested topic in technical interviews. Master this and you\'re halfway there.',
    duration: '2 weeks',
    color: '#10B981',
    levelColor: 'emerald',
    topics: [
      { title: 'Array Basics', desc: 'Indexing, traversal, multi-dimensional arrays, in-place operations.', time: '3 hrs' },
      { title: 'Two Pointers', desc: 'Shrink O(n²) to O(n) — one of the most frequently asked patterns.', time: '4 hrs' },
      { title: 'Sliding Window', desc: 'Solve subarray/substring problems with a moving window.', time: '4 hrs' },
      { title: 'String Manipulation', desc: 'Palindromes, anagrams, subsequences, prefix/suffix patterns.', time: '3 hrs' },
      { title: 'Prefix Sums', desc: 'Precompute sums for O(1) range queries instead of O(n).', time: '2 hrs' },
    ],
    milestone: 'Solve 20 Easy array/string problems. Two Sum, Valid Palindrome, Best Time to Buy Stock.',
    problems: ['Two Sum', 'Valid Palindrome', 'Best Time to Buy Stock', 'Longest Substring Without Repeating', 'Container with Most Water'],
    resources: [
      { label: 'NeetCode — Arrays & Hashing', url: 'https://neetcode.io/roadmap', type: 'course', icon: '🎓' },
      { label: 'GFG — Sliding Window Technique', url: 'https://www.geeksforgeeks.org/window-sliding-technique/', type: 'article', icon: '📄' },
      { label: 'Abdul Bari — Two Pointer Technique', url: 'https://www.youtube.com/watch?v=-gjxg6Pln50', type: 'video', icon: '📺' },
      { label: 'freeCodeCamp — String Algorithms', url: 'https://www.freecodecamp.org/news/string-algorithms/', type: 'article', icon: '📄' },
      { label: 'GFG — Prefix Sum Array', url: 'https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/', type: 'article', icon: '📄' },
    ],
    internalLinks: [{ label: 'Learn: Arrays →', link: '/learn' }, { label: 'Practice →', link: '/ds-problems' }],
  },
  {
    id: 'linkedlists',
    phase: '03',
    level: 'BEGINNER',
    title: 'Linked Lists',
    subtitle: 'Pointers and references — learn to think in chains.',
    duration: '1 week',
    color: '#3B82F6',
    levelColor: 'emerald',
    topics: [
      { title: 'Singly & Doubly Linked Lists', desc: 'Nodes, head/tail, next/prev pointers.', time: '3 hrs' },
      { title: 'List Operations', desc: 'Insert, delete, reverse, merge, detect cycles.', time: '3 hrs' },
      { title: 'Fast & Slow Pointers', desc: "Floyd's cycle detection, find middle, kth from end.", time: '3 hrs' },
    ],
    milestone: 'Reverse a linked list in-place. Detect and find the start of a cycle.',
    problems: ['Reverse Linked List', 'Linked List Cycle', 'Merge Two Sorted Lists', 'LRU Cache'],
    resources: [
      { label: 'mycodeschool — Linked List Playlist', url: 'https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P', type: 'video', icon: '📺' },
      { label: 'GFG — Linked List Complete Guide', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/', type: 'article', icon: '📄' },
      { label: "William Fiset — Floyd's Cycle Detection", url: 'https://www.youtube.com/watch?v=-YiQZi3mLq0', type: 'video', icon: '📺' },
      { label: 'NeetCode — Linked List', url: 'https://neetcode.io/roadmap', type: 'course', icon: '🎓' },
    ],
    internalLinks: [{ label: 'Learn: Linked Lists →', link: '/learn' }, { label: 'Visualizer →', link: '/visualizer' }],
  },
  {
    id: 'stacks',
    phase: '04',
    level: 'BEGINNER',
    title: 'Stacks & Queues',
    subtitle: 'LIFO and FIFO — foundational for parsing, scheduling, and graph algorithms.',
    duration: '1 week',
    color: '#8B5CF6',
    levelColor: 'emerald',
    topics: [
      { title: 'Stack', desc: 'Push, pop, peek. Used for undo, expression evaluation, DFS.', time: '2 hrs' },
      { title: 'Queue & Deque', desc: 'Enqueue, dequeue. Used in BFS, sliding window max.', time: '2 hrs' },
      { title: 'Monotonic Stack', desc: 'A powerful technique for "next greater element" class of problems.', time: '3 hrs' },
    ],
    milestone: 'Implement a stack using queues. Solve "Daily Temperatures" using monotonic stack.',
    problems: ['Valid Parentheses', 'Daily Temperatures', 'Min Stack', 'Largest Rectangle in Histogram'],
    resources: [
      { label: 'CS50 — Stacks & Queues', url: 'https://cs50.harvard.edu/x/2024/weeks/5/', type: 'course', icon: '🎓' },
      { label: 'GFG — Stack Data Structure', url: 'https://www.geeksforgeeks.org/stack-data-structure/', type: 'article', icon: '📄' },
      { label: 'Monotonic Stack — LeetCode Patterns', url: 'https://leetcode.com/discuss/study-guide/2347639/A-comprehensive-guide-and-template-for-monotonic-stack-based-problems', type: 'article', icon: '📄' },
      { label: 'NeetCode — Stack Problems', url: 'https://neetcode.io/roadmap', type: 'course', icon: '🎓' },
    ],
    internalLinks: [{ label: 'Visualize: Stack →', link: '/visualizer' }, { label: 'Learn →', link: '/learn' }],
  },
  {
    id: 'trees',
    phase: '05',
    level: 'INTERMEDIATE',
    title: 'Trees & Binary Search Trees',
    subtitle: 'The most interview-popular data structure. Trees are everywhere.',
    duration: '2–3 weeks',
    color: '#D4AF37',
    levelColor: 'gold',
    topics: [
      { title: 'Binary Tree Basics', desc: 'Nodes, traversals (inorder, preorder, postorder), height, depth.', time: '4 hrs' },
      { title: 'Tree BFS', desc: 'Level-order traversal using a queue. Essential for path/level problems.', time: '3 hrs' },
      { title: 'Tree DFS', desc: 'Path sum, diameter, max depth, lowest common ancestor.', time: '4 hrs' },
      { title: 'Binary Search Trees', desc: 'Sorted property, search, insert, delete, validate BST.', time: '4 hrs' },
    ],
    milestone: 'Implement all 4 traversals from memory. Solve "Maximum Depth" and "Path Sum".',
    problems: ['Invert Binary Tree', 'Maximum Depth', 'Level Order Traversal', 'Lowest Common Ancestor', 'Validate BST'],
    resources: [
      { label: 'William Fiset — Tree Algorithms', url: 'https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P', type: 'video', icon: '📺' },
      { label: 'VisuAlgo — Binary Search Tree', url: 'https://visualgo.net/en/bst', type: 'tool', icon: '🛠️' },
      { label: 'GFG — Binary Tree Complete Guide', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/', type: 'article', icon: '📄' },
      { label: 'MIT OCW — Trees Lecture', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/', type: 'course', icon: '🎓' },
      { label: 'NeetCode — Trees Roadmap', url: 'https://neetcode.io/roadmap', type: 'course', icon: '🎓' },
    ],
    internalLinks: [{ label: 'Visualize: BFS/DFS →', link: '/visualizer' }, { label: 'Learn: Trees →', link: '/learn' }],
  },
  {
    id: 'heaps',
    phase: '06',
    level: 'INTERMEDIATE',
    title: 'Heaps & Priority Queues',
    subtitle: 'The ultimate tool for "find K largest/smallest" and streaming problems.',
    duration: '1 week',
    color: '#F59E0B',
    levelColor: 'gold',
    topics: [
      { title: 'Min/Max Heap', desc: 'Heap property, heapify, insert, extract-min/max in O(log n).', time: '3 hrs' },
      { title: 'Priority Queue Patterns', desc: 'K-closest, kth largest, merge K sorted, sliding window max.', time: '4 hrs' },
      { title: 'Two-Heap Technique', desc: 'Find median of a data stream using min-heap + max-heap.', time: '2 hrs' },
    ],
    milestone: 'Find K largest elements in O(n log k). Implement "Median from Data Stream".',
    problems: ['Kth Largest Element', 'K Closest Points to Origin', 'Merge K Sorted Lists', 'Find Median from Data Stream'],
    resources: [
      { label: 'Abdul Bari — Heaps', url: 'https://www.youtube.com/watch?v=HqPJF2L5h9U', type: 'video', icon: '📺' },
      { label: 'GFG — Heap Data Structure', url: 'https://www.geeksforgeeks.org/heap-data-structure/', type: 'article', icon: '📄' },
      { label: 'VisuAlgo — Heap', url: 'https://visualgo.net/en/heap', type: 'tool', icon: '🛠️' },
      { label: 'Priority Queue — CP Algorithms', url: 'https://cp-algorithms.com/data_structures/heap.html', type: 'article', icon: '📄' },
    ],
    internalLinks: [{ label: 'Learn: Heaps →', link: '/learn' }, { label: 'Patterns →', link: '/patterns' }],
  },
  {
    id: 'sorting',
    phase: '07',
    level: 'INTERMEDIATE',
    title: 'Sorting & Binary Search',
    subtitle: 'Fundamental algorithms that power databases, compilers, and search engines.',
    duration: '1–2 weeks',
    color: '#EC4899',
    levelColor: 'gold',
    topics: [
      { title: 'Sorting Algorithms', desc: 'Bubble, Selection, Insertion, Merge, Quick, Heap, Counting, Radix.', time: '4 hrs' },
      { title: 'Binary Search', desc: 'Classic and 5+ variations on rotated/modified arrays.', time: '5 hrs' },
      { title: 'Binary Search on Answers', desc: "Minimize max, maximize min — search the answer space, not the array.", time: '3 hrs' },
    ],
    milestone: 'Implement Merge Sort from scratch. Solve "Search in Rotated Sorted Array" first try.',
    problems: ['Binary Search', 'Search Rotated Array', 'Find Minimum in Rotated', 'Koko Eating Bananas', 'Median of Two Sorted Arrays'],
    resources: [
      { label: 'VisuAlgo — Sorting Algorithms', url: 'https://visualgo.net/en/sorting', type: 'tool', icon: '🛠️' },
      { label: 'CS50 — Algorithms Week', url: 'https://cs50.harvard.edu/x/2024/weeks/3/', type: 'course', icon: '🎓' },
      { label: 'Abdul Bari — Sorting Algorithms', url: 'https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKLclsET5_9Y47xb8EhPP', type: 'video', icon: '📺' },
      { label: 'Binary Search — LeetCode Patterns', url: 'https://leetcode.com/discuss/study-guide/786126/Python-Powerful-Ultimate-Binary-Search-Template.-Solved-many-problems', type: 'article', icon: '📄' },
    ],
    internalLinks: [{ label: 'Visualize: Sorting →', link: '/visualizer' }, { label: 'Cheat Sheet →', link: '/cheatsheet' }],
  },
  {
    id: 'graphs',
    phase: '08',
    level: 'INTERMEDIATE',
    title: 'Graphs',
    subtitle: 'From social networks to GPS — graphs model the real world.',
    duration: '2–3 weeks',
    color: '#14B8A6',
    levelColor: 'gold',
    topics: [
      { title: 'Graph Representation', desc: 'Adjacency list vs matrix. Directed vs undirected. Weighted edges.', time: '2 hrs' },
      { title: 'BFS & DFS', desc: 'Traversal extended to general graphs. Cycle detection included.', time: '4 hrs' },
      { title: 'Shortest Paths', desc: 'Dijkstra (weighted), BFS (unweighted), Bellman-Ford (negative edges).', time: '5 hrs' },
      { title: 'Topological Sort', desc: "Kahn's algorithm and DFS approach. Course scheduling problems.", time: '3 hrs' },
      { title: 'Union Find (DSU)', desc: "Efficiently check connectivity. Kruskal's MST algorithm.", time: '3 hrs' },
    ],
    milestone: 'Solve "Number of Islands" with DFS and "Course Schedule" with topological sort.',
    problems: ['Number of Islands', 'Course Schedule', 'Clone Graph', 'Word Ladder', 'Cheapest Flights Within K Stops'],
    resources: [
      { label: 'William Fiset — Graph Theory', url: 'https://www.youtube.com/playlist?list=PLDV1Zeh2NRsDGO4--qE8yH72HFL1Km93P', type: 'video', icon: '📺' },
      { label: 'CP-Algorithms — Graphs', url: 'https://cp-algorithms.com/graph/breadth-first-search.html', type: 'article', icon: '📄' },
      { label: 'VisuAlgo — Graph Traversal', url: 'https://visualgo.net/en/graphds', type: 'tool', icon: '🛠️' },
      { label: 'GFG — Dijkstra Algorithm', url: 'https://www.geeksforgeeks.org/dijkstras-shortest-path-algorithm-greedy-algo-7/', type: 'article', icon: '📄' },
      { label: 'NeetCode — Graph Roadmap', url: 'https://neetcode.io/roadmap', type: 'course', icon: '🎓' },
    ],
    internalLinks: [{ label: 'Visualize: BFS/DFS →', link: '/visualizer' }, { label: 'Patterns →', link: '/patterns' }],
  },
  {
    id: 'dp',
    phase: '09',
    level: 'ADVANCED',
    title: 'Dynamic Programming',
    subtitle: 'The most feared topic in DSA. Master it and you stand out from 90% of candidates.',
    duration: '3–4 weeks',
    color: '#EF4444',
    levelColor: 'red',
    topics: [
      { title: '1D DP', desc: 'Fibonacci, climbing stairs, house robber, coin change — the classics.', time: '5 hrs' },
      { title: '2D DP', desc: 'Grid paths, longest common subsequence, edit distance.', time: '6 hrs' },
      { title: 'Knapsack Variants', desc: '0/1 Knapsack, unbounded, subset sum, partition equal subset.', time: '5 hrs' },
      { title: 'String DP', desc: 'Palindrome partitioning, palindromic subsequence, regex matching.', time: '4 hrs' },
      { title: 'DP on Trees', desc: 'Binary tree cameras, house robber III, diameter via DP.', time: '3 hrs' },
    ],
    milestone: 'Solve 20+ DP problems. Implement coin change both top-down and bottom-up.',
    problems: ['Climbing Stairs', 'Coin Change', 'Longest Common Subsequence', 'Edit Distance', 'Burst Balloons'],
    resources: [
      { label: 'Aditya Verma — DP Series (Best!)', url: 'https://www.youtube.com/playlist?list=PL_z_8CaSLPWekqhdCPmFohncHwz8TY2Go', type: 'video', icon: '📺' },
      { label: 'Errichto — DP Tutorial', url: 'https://www.youtube.com/watch?v=YBSt1jYwVfU', type: 'video', icon: '📺' },
      { label: 'GFG — Dynamic Programming', url: 'https://www.geeksforgeeks.org/dynamic-programming/', type: 'article', icon: '📄' },
      { label: 'MIT OCW — DP Lectures', url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/', type: 'course', icon: '🎓' },
      { label: 'NeetCode — DP Roadmap', url: 'https://neetcode.io/roadmap', type: 'course', icon: '🎓' },
    ],
    internalLinks: [{ label: 'Patterns: DP →', link: '/patterns' }, { label: 'Practice: Hard →', link: '/ds-problems' }],
  },
  {
    id: 'backtracking',
    phase: '10',
    level: 'ADVANCED',
    title: 'Backtracking & Greedy',
    subtitle: 'Explore all possibilities elegantly, or make locally optimal choices.',
    duration: '2 weeks',
    color: '#F97316',
    levelColor: 'red',
    topics: [
      { title: 'Backtracking Template', desc: 'The universal pattern: choose → explore → unchoose.', time: '4 hrs' },
      { title: 'Combinations & Permutations', desc: 'Subsets, permutations, combination sum, phone number letters.', time: '4 hrs' },
      { title: 'Constraint Satisfaction', desc: 'N-Queens, Sudoku solver, word search in 2D grid.', time: '3 hrs' },
      { title: 'Greedy Algorithms', desc: 'Activity selection, jump game, interval scheduling, Huffman coding.', time: '4 hrs' },
    ],
    milestone: 'Solve "Subsets", "Permutations", and "N-Queens". Solve "Jump Game II" with greedy.',
    problems: ['Subsets', 'Permutations', 'N-Queens', 'Jump Game II', 'Interval Scheduling Maximization'],
    resources: [
      { label: 'Abdul Bari — Backtracking', url: 'https://www.youtube.com/playlist?list=PLdo5W4Nhv31bZSiqiOL5ta39vSnBxpOPT', type: 'video', icon: '📺' },
      { label: 'NeetCode — Backtracking', url: 'https://neetcode.io/roadmap', type: 'course', icon: '🎓' },
      { label: 'GFG — Greedy Algorithms', url: 'https://www.geeksforgeeks.org/greedy-algorithms/', type: 'article', icon: '📄' },
      { label: 'Backtracking Template — LeetCode', url: 'https://leetcode.com/discuss/study-guide/1308595/Comprehensive-Backtracking-Templates', type: 'article', icon: '📄' },
    ],
    internalLinks: [{ label: 'Patterns →', link: '/patterns' }, { label: 'Cheat Sheet →', link: '/cheatsheet' }],
  },
  {
    id: 'advanced-ds',
    phase: '11',
    level: 'ADVANCED',
    title: 'Advanced Data Structures',
    subtitle: 'Unlock O(log n) solutions for interval, prefix, and string problems.',
    duration: '2 weeks',
    color: '#A855F7',
    levelColor: 'red',
    topics: [
      { title: 'Trie', desc: 'Prefix trees for fast string search. Autocomplete, word dictionaries.', time: '4 hrs' },
      { title: 'Segment Tree', desc: 'Range queries (min, max, sum) in O(log n). Point and range updates.', time: '5 hrs' },
      { title: 'Binary Indexed Tree', desc: 'Fenwick tree for prefix sums with updates in O(log n).', time: '3 hrs' },
      { title: 'String Algorithms', desc: 'KMP, Rabin-Karp, Z-algorithm. Pattern matching in O(n).', time: '4 hrs' },
    ],
    milestone: 'Implement Trie with insert/search/startsWith. Solve "Range Sum Query - Mutable".',
    problems: ['Implement Trie', 'Word Search II', 'Range Sum Query - Mutable', 'Count of Smaller Numbers After Self'],
    resources: [
      { label: 'William Fiset — Segment Trees', url: 'https://www.youtube.com/watch?v=ZBHKZF5w4YU', type: 'video', icon: '📺' },
      { label: 'CP-Algorithms — Trie', url: 'https://cp-algorithms.com/string/aho_corasick.html', type: 'article', icon: '📄' },
      { label: 'GFG — Trie Data Structure', url: 'https://www.geeksforgeeks.org/trie-insert-and-search/', type: 'article', icon: '📄' },
      { label: 'Fenwick Tree — Visualization', url: 'https://visualgo.net/en/fenwicktree', type: 'tool', icon: '🛠️' },
      { label: 'KMP Algorithm — Abdul Bari', url: 'https://www.youtube.com/watch?v=V5-7GzOfADQ', type: 'video', icon: '📺' },
    ],
    internalLinks: [{ label: 'Learn →', link: '/learn' }, { label: 'Practice: Hard →', link: '/ds-problems' }],
  },
  {
    id: 'mastery',
    phase: '12',
    level: 'ADVANCED',
    title: 'Interview Mastery',
    subtitle: 'Connect all the dots. Practice under real interview conditions.',
    duration: '2 weeks',
    color: '#D4AF37',
    levelColor: 'gold',
    topics: [
      { title: 'Problem Recognition', desc: 'Pattern matching: hear the problem, know the technique instantly.', time: '4 hrs' },
      { title: 'Interview Communication', desc: 'Clarifying questions, thinking aloud, trade-off explanations.', time: '2 hrs' },
      { title: 'Timed Mock Sessions', desc: '10+ timed problems across all difficulty levels. Simulate real pressure.', time: '10 hrs' },
      { title: 'Company-Specific Prep', desc: 'FAANG patterns, common question pools, edge case awareness.', time: '5 hrs' },
    ],
    milestone: 'Complete 5 full timed mocks (45 min each). Aim for clean solutions on all Easy, 60%+ Medium.',
    problems: ['5 × Timed Mock (Easy)', '3 × Timed Mock (Medium)', '1 × Full-Length Interview Sim', 'System Design: URL Shortener'],
    resources: [
      { label: 'NeetCode — Blind 75 Roadmap', url: 'https://neetcode.io/roadmap', type: 'course', icon: '🎓' },
      { label: 'Blind 75 LeetCode List', url: 'https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions', type: 'article', icon: '📄' },
      { label: 'Tech Interview Handbook', url: 'https://www.techinterviewhandbook.org/', type: 'article', icon: '📄' },
      { label: 'Pramp — Free Mock Interviews', url: 'https://www.pramp.com/', type: 'tool', icon: '🛠️' },
      { label: 'InterviewBit — FAANG Prep', url: 'https://www.interviewbit.com/', type: 'course', icon: '🎓' },
    ],
    internalLinks: [{ label: 'AI Tutor →', link: '/ai-tutor' }, { label: 'Cheat Sheet →', link: '/cheatsheet' }],
  },
];

const LEVEL_STYLES = {
  emerald: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  gold:    { bg: 'bg-amber-500/10',   text: 'text-amber-400',   border: 'border-amber-500/20' },
  red:     { bg: 'bg-red-500/10',     text: 'text-red-400',     border: 'border-red-500/20' },
};

const RESOURCE_TYPE_COLORS = {
  video:   { bg: 'bg-red-500/10',     text: 'text-red-400',     border: 'border-red-500/20' },
  article: { bg: 'bg-blue-500/10',    text: 'text-blue-400',    border: 'border-blue-500/20' },
  course:  { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  tool:    { bg: 'bg-purple-500/10',  text: 'text-purple-400',  border: 'border-purple-500/20' },
};

const STORAGE_KEY = 'dsasathi-roadmap-progress';

// ─── Component ────────────────────────────────────────────────────────────────
export default function Roadmap() {
  const [expanded, setExpanded] = useState(null);
  const [completed, setCompleted] = useState(() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch { return []; }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completed));
  }, [completed]);

  const toggle = (id) => {
    setCompleted(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  };

  const completedCount = completed.length;
  const totalPhases = PHASES.length;
  const progressPct = Math.round((completedCount / totalPhases) * 100);

  const currentPhaseIdx = PHASES.findIndex(p => !completed.includes(p.id));
  const currentPhase = currentPhaseIdx >= 0 ? PHASES[currentPhaseIdx] : PHASES[totalPhases - 1];

  const totalWeeks = '17–20';

  return (
    <div className="min-h-screen bg-navy-900 pt-16">
      {/* ── Header ── */}
      <div className="border-b border-white/[0.05] bg-black/40">
        <div className="max-w-5xl mx-auto px-4 py-10 md:py-14">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <span className="section-label">STRUCTURED LEARNING PATH</span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight mb-4 leading-tight">
              From Zero to<br />
              <span className="gradient-text">Interview-Ready.</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mb-8">
              12 phases. {totalWeeks} weeks. Built for complete beginners — no prior CS knowledge assumed.
              Follow in order, mark phases as done, and watch your confidence grow.
            </p>

            {/* Progress bar */}
            <div className="flex items-center gap-4 mb-2">
              <div className="flex-1 h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPct}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #D4AF37, #E8C54A)' }}
                />
              </div>
              <span className="font-mono text-xs text-amber-400 flex-shrink-0 whitespace-nowrap">{completedCount}/{totalPhases} phases</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 font-mono">
              <span>{progressPct}% complete</span>
              {completedCount > 0 && completedCount < totalPhases && (
                <span>Currently: <span className="text-amber-400">Phase {currentPhase.phase} — {currentPhase.title}</span></span>
              )}
              {completedCount === 0 && <span>Start with Phase 01 below ↓</span>}
              {completedCount === totalPhases && <span className="text-amber-400">🎉 All phases complete!</span>}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Timeline ── */}
      <div className="max-w-5xl mx-auto px-4 py-8 md:py-12">

        {/* Level legend */}
        <div className="flex flex-wrap gap-3 mb-8">
          {[
            { label: 'BEGINNER', ...LEVEL_STYLES.emerald },
            { label: 'INTERMEDIATE', ...LEVEL_STYLES.gold },
            { label: 'ADVANCED', ...LEVEL_STYLES.red },
          ].map((l, i) => (
            <span key={i} className={`text-[10px] font-mono px-3 py-1.5 rounded-sm border ${l.bg} ${l.text} ${l.border}`}>
              {l.label}
            </span>
          ))}
          <span className="text-[10px] font-mono text-gray-600 self-center ml-2 hidden sm:inline">Click any phase to expand</span>
        </div>

        <div className="relative pl-7 sm:pl-12">
          {/* Gold vertical line */}
          <div className="absolute left-2.5 sm:left-4 top-0 bottom-0 w-px opacity-20"
            style={{ background: 'linear-gradient(to bottom, transparent 0%, #D4AF37 8%, #D4AF37 92%, transparent 100%)' }} />

          <div className="space-y-3">
            {PHASES.map((phase, i) => {
              const isDone = completed.includes(phase.id);
              const isOpen = expanded === phase.id;
              const lvl = LEVEL_STYLES[phase.levelColor];

              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 sm:left-1 mt-5 w-5 h-5 rounded-full flex items-center justify-center border flex-shrink-0"
                    style={{
                      borderColor: isDone ? '#D4AF37' : 'rgba(255,255,255,0.1)',
                      background: isDone ? 'rgba(212,175,55,0.15)' : 'rgba(20,20,20,0.8)',
                    }}>
                    {isDone
                      ? <span className="text-amber-400 text-xs">✓</span>
                      : <span className="h-1.5 w-1.5 rounded-full" style={{ background: phase.color, opacity: 0.6 }} />}
                  </div>

                  {/* Phase card */}
                  <div className={`border transition-all duration-200 ${
                    isDone ? 'border-amber-500/20 bg-amber-500/[0.03]' : 'border-white/[0.06] bg-navy-800/30 hover:border-white/[0.12]'
                  } ${isOpen ? 'border-white/[0.15]' : ''}`}>

                    {/* Header button */}
                    <button
                      onClick={() => setExpanded(isOpen ? null : phase.id)}
                      className="w-full px-4 sm:px-6 md:px-7 py-4 sm:py-5 flex items-start gap-3 sm:gap-4 text-left"
                    >
                      {/* Phase number */}
                      <span className="font-mono text-lg sm:text-2xl font-bold flex-shrink-0 mt-0.5"
                        style={{ color: isDone ? '#D4AF37' : 'rgba(255,255,255,0.15)' }}>
                        {phase.phase}
                      </span>

                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1">
                          <span className={`text-[10px] font-mono px-2 py-0.5 rounded-sm border ${lvl.bg} ${lvl.text} ${lvl.border}`}>
                            {phase.level}
                          </span>
                          <span className="font-mono text-[10px] text-gray-600">{phase.duration}</span>
                        </div>
                        <h3 className={`text-sm sm:text-base md:text-lg font-bold ${isDone ? 'text-amber-400' : 'text-white'}`}>
                          {phase.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1 leading-relaxed hidden sm:block">{phase.subtitle}</p>
                      </div>

                      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 mt-1">
                        <button
                          onClick={(e) => { e.stopPropagation(); toggle(phase.id); }}
                          className={`text-xs px-2 sm:px-3 py-1 sm:py-1.5 rounded-sm border font-mono transition-all whitespace-nowrap ${
                            isDone
                              ? 'border-amber-500/30 text-amber-500 bg-amber-500/10 hover:bg-amber-500/5'
                              : 'border-white/10 text-gray-500 hover:border-amber-500/30 hover:text-amber-400'
                          }`}
                        >
                          {isDone ? '✓ Done' : 'Mark done'}
                        </button>
                        <span className="text-gray-600 text-sm">{isOpen ? '▲' : '▼'}</span>
                      </div>
                    </button>

                    {/* Expanded content */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="border-t border-white/[0.05] px-4 sm:px-6 md:px-7 py-6 space-y-8">

                            {/* Topics */}
                            <div>
                              <span className="section-label">WHAT YOU'LL STUDY</span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {phase.topics.map((t, ti) => (
                                  <div key={ti} className="flex gap-3 p-3 sm:p-4 border border-white/[0.05] hover:border-white/[0.1] transition-colors">
                                    <span className="font-mono text-xs text-amber-600/40 mt-0.5 flex-shrink-0">{String(ti + 1).padStart(2, '0')}</span>
                                    <div className="min-w-0">
                                      <div className="flex items-baseline justify-between gap-2">
                                        <p className="text-sm font-semibold text-white">{t.title}</p>
                                        <span className="font-mono text-[10px] text-gray-600 flex-shrink-0">{t.time}</span>
                                      </div>
                                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{t.desc}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Milestone */}
                            <div className="border-l-2 border-amber-500/40 pl-4">
                              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest mb-1 block">MILESTONE</span>
                              <p className="text-sm text-gray-300">{phase.milestone}</p>
                            </div>

                            {/* Practice problems */}
                            <div>
                              <span className="section-label">PROBLEMS TO SOLVE</span>
                              <div className="flex flex-wrap gap-2">
                                {phase.problems.map((p, pi) => (
                                  <span key={pi} className="font-mono text-xs px-3 py-1.5 border border-white/[0.08] text-gray-400 hover:border-amber-500/20 hover:text-amber-300 transition-colors cursor-default">
                                    {p}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* External Resources */}
                            <div>
                              <span className="section-label">LEARNING RESOURCES</span>
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                                {phase.resources.map((r, ri) => {
                                  const typeStyle = RESOURCE_TYPE_COLORS[r.type] || RESOURCE_TYPE_COLORS.article;
                                  return (
                                    <a
                                      key={ri}
                                      href={r.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`flex items-center gap-2.5 px-3 py-2.5 border rounded-sm transition-all group hover:scale-[1.01] active:scale-[0.99] ${typeStyle.border} ${typeStyle.bg} hover:opacity-90`}
                                    >
                                      <span className="text-base flex-shrink-0">{r.icon}</span>
                                      <span className={`text-xs font-medium flex-1 min-w-0 truncate ${typeStyle.text}`}>{r.label}</span>
                                      <span className="text-[10px] text-gray-600 flex-shrink-0 group-hover:text-gray-400 transition-colors">↗</span>
                                    </a>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Internal links + action */}
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/[0.05]">
                              <div className="flex flex-wrap gap-3">
                                {phase.internalLinks.map((r, ri) => (
                                  <Link key={ri} to={r.link} className="text-xs font-mono text-amber-500 hover:text-amber-300 transition-colors uppercase tracking-wider">
                                    {r.label}
                                  </Link>
                                ))}
                                <Link to="/ai-tutor" className="text-xs font-mono text-gray-500 hover:text-amber-400 transition-colors uppercase tracking-wider">
                                  Ask AI Tutor →
                                </Link>
                              </div>
                              <button
                                onClick={() => toggle(phase.id)}
                                className={`text-sm px-5 sm:px-6 py-2.5 rounded-sm font-semibold transition-all self-start sm:self-auto ${
                                  isDone
                                    ? 'bg-amber-500/10 text-amber-500 border border-amber-500/30 hover:bg-amber-500/20'
                                    : 'btn-primary'
                                }`}
                              >
                                {isDone ? '✓ Completed' : 'Mark as Complete'}
                              </button>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border border-amber-500/15 p-6 sm:p-8 text-center bg-amber-500/[0.02]"
        >
          <h3 className="text-xl sm:text-2xl font-black mb-3">Stuck on something?</h3>
          <p className="text-gray-500 text-sm mb-6 max-w-lg mx-auto">
            The AI Tutor is available 24/7 to explain any concept, debug your code, or suggest the right pattern.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/ai-tutor" className="btn-primary px-6 sm:px-8 py-3">Open AI Tutor →</Link>
            <Link to="/cheatsheet" className="btn-secondary px-6 sm:px-8 py-3">View Cheat Sheet</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
