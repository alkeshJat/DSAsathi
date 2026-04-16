export const curriculum = [
  {
    id: 'arrays',
    title: 'Arrays',
    icon: '📊',
    description: 'The foundation of all data structures — contiguous memory storage.',
    topics: [
      {
        id: 'arrays-intro',
        title: 'Introduction to Arrays (From Scratch)',
        duration: '15 min',
        content: {
          intro: `**What is an Array?**\nImagine a row of lockers in a hallway. Each locker has a specific number written on it, and you can store exactly one item inside. If you know the locker number, you can go straight to it and grab what is inside immediately.\n\nAn array is exactly like this in programming. It is a collection of items stored at **contiguous (adjacent) memory locations**. Because they are stored side-by-side in your computer's RAM, the computer can instantly access any element if it knows its "locker number" (which we call an **index**).\n\n**Zero-Based Indexing**\nIn almost all modern programming languages (Java, C++, Python, JavaScript), the locker numbers start at \`0\`, not \`1\`. So the first element is at index 0, the second at index 1, and so on. Why? Because the index represents the "offset" from the start. The first element is 0 steps away from the start!\n\n**Pros and Cons**\n- **Fast Lookups:** Accessing an element by index takes O(1) time. It is instant.\n- **Slow Insertions:** Imagine you have a full row of 10 people sitting in chairs. If someone wants to sit between the 2nd and 3rd person, everyone from the 3rd person onwards has to shift one seat to the right. Therefore, inserting or deleting an element in the middle of an array takes O(n) time.\n- **Fixed Size (Sometimes):** In languages like C++ or Java, basic arrays have a fixed size. If you need more space, you have to create a brand new, bigger array and copy everything over. (JavaScript and Python handle this automatically).`,
          code: `// --- JavaScript Arrays ---\nconst arr = [10, 20, 30, 40, 50];\n\n// 1. Instant Access O(1)\nconsole.log(arr[2]); // 30\n\n// 2. Insert at the end O(1)\narr.push(60); \n\n// 3. Insert in the middle O(n)\n// (Must shift everything after index 2)\narr.splice(2, 0, 25); \n\n// 4. Delete from the middle O(n)\narr.splice(3, 1);`,
          complexity: { access: 'O(1)', search: 'O(n)', insert: 'O(n)', delete: 'O(n)', space: 'O(n)' }
        }
      },
      {
        id: 'arrays-two-pointers',
        title: 'The Two Pointers Technique',
        duration: '20 min',
        content: {
          intro: `**What is Two Pointers?**\nWhen you are solving Array problems, you often need to compare elements, reverse elements, or find a pair of items. A brute force approach usually involves nested loops (which is slow, O(n²)). \n\nThe **Two Pointers** technique is a clever strategy where you use two variables (usually called \`left\` and \`right\`) pointing to different indices of the array simultaneously. By moving them towards each other, you can solve complex problems in a single pass (O(n)).\n\n**Common Scenarios for Two Pointers:**\n1. **Sorted Arrays:** If an array is sorted, you can put one pointer at the start and one at the end. If the sum of the pair is too high, move the right pointer left. If it's too low, move the left pointer right.\n2. **Reversing:** Swap the elements at the left and right pointers, then move them inward.\n3. **Fast & Slow Pointers:** One pointer moves 2 steps at a time, the other moves 1 step. Useful for finding the middle of a list or detecting cycles.`,
          code: `// Example: Reversing an array using Two Pointers\nfunction reverseArray(arr) {\n  let left = 0;\n  let right = arr.length - 1;\n  \n  while (left < right) {\n    // Swap the elements\n    let temp = arr[left];\n    arr[left] = arr[right];\n    arr[right] = temp;\n    \n    // Move pointers inward\n    left++;\n    right--;\n  }\n  return arr;\n}`,
          complexity: { time: 'O(n)', space: 'O(1)' }
        }
      },
      {
        id: 'arrays-sliding-window',
        title: 'The Sliding Window Pattern',
        duration: '25 min',
        content: {
          intro: `**What is Sliding Window?**\nThe Sliding Window pattern is used to perform operations on a specific window (subset) of a given array or string, such as finding the longest subarray, the maximum sum subarray, or the shortest continuous chunk.\n\n**How it works:**\nInstead of creating a new window (looping from scratch) every time we move forward, we imagine a "window" of elements. When the window slides forward by one step, we simply **remove the effect of the element that fell out** of the back of the window, and **add the effect of the new element** that entered the front.\n\n**Why use it?**\nIt typically turns an O(n²) nested loop into an O(n) single loop. It's incredibly powerful for problems involving "contiguous subarrays or substrings".`,
          code: `// Example: Max sum of any contiguous subarray of size K\n// Brute Force: Check every size K chunk (O(n*K))\n// Sliding Window: O(n)\n\nfunction maxSumSubarray(arr, k) {\n  let maxSum = 0;\n  let windowSum = 0;\n  \n  // Create the first window of size K\n  for(let i = 0; i < k; i++) {\n    windowSum += arr[i];\n  }\n  maxSum = windowSum;\n  \n  // Slide the window forward\n  for(let i = k; i < arr.length; i++) {\n    // Add the next element, subtract the element left behind\n    windowSum = windowSum - arr[i - k] + arr[i];\n    maxSum = Math.max(maxSum, windowSum);\n  }\n  \n  return maxSum;\n}`,
          complexity: { time: 'O(n)', space: 'O(1)' }
        }
      }
    ]
  },
  {
    id: 'hashing',
    title: 'Hash Maps & Sets',
    icon: '🗄️',
    description: 'Constant time lookups and mapping logic.',
    topics: [
      {
        id: 'hashing-intro',
        title: 'Hash Maps Explained',
        duration: '20 min',
        content: {
          intro: `**What is a Hash Map?**\nA Hash Map (called an Object/Map in JavaScript, Dictionary in Python) is arguably the most powerful data structure you will use in coding interviews.\n\nUnlike Arrays which use numbered indices (0, 1, 2) to store data, Hash Maps use **Key-Value Pairs**. You can define *anything* as a key (like a string "username") and map it to a value (like "alkesh").\n\n**How Does Magic O(1) Lookup Work?**\nUnder the hood, a Hash Map uses an Array. When you assign a key like "apple", it passes the word "apple" through a **Hashing Function**. This function instantly converts the text "apple" into a math integer, say 42. It then stores your value at array index [42].\nWhen you ask the Hash Map "what is the value of apple?", it instantly hashes it back to 42, and grabs the value. That's why retrieving data using a key is O(1) instantaneous!\n\n**Hash Sets**\nA Set is just a Hash Map that ONLY stores Keys, with no values. It is exceptionally useful for deduplicating data or instantly checking "have I seen this number before?".`,
          code: `// --- JavaScript Maps and Sets ---\nconst map = new Map();\nmap.set("alice", 95);\nmap.set("bob", 80);\n\n// Instant lookup\nconsole.log(map.get("alice")); // 95\n\n// Hash Maps in interviews (Two Sum)\nfunction twoSum(nums, target) {\n  const seen = new Map(); // value : index\n  \n  for (let i = 0; i < nums.length; i++) {\n    let complement = target - nums[i];\n    if (seen.has(complement)) {\n       return [seen.get(complement), i];\n    }\n    seen.set(nums[i], i);\n  }\n}`,
          complexity: { insert: 'O(1)', lookup: 'O(1)', delete: 'O(1)', space: 'O(n)' }
        }
      }
    ]
  },
  {
    id: 'linked-list',
    title: 'Linked Lists',
    icon: '🔗',
    description: 'Dynamic linear data structures with pointer-based connections.',
    topics: [
      {
        id: 'linked-list-intro',
        title: 'Understanding Linked Lists',
        duration: '20 min',
        content: {
          intro: `**What is a Linked List?**\nRemember how Arrays are contiguous (side-by-side) boxes in memory? A Linked List takes a totally different approach. \n\nImagine a scavenger hunt. The first clue doesn't tell you the whole path—it just holds a secret message, and the exact GPS coordinates of where the **next** clue is hidden. You have to travel to the next clue to find the one after that. This is a Linked List.\n\nEach item is called a **Node**. A Node contains:\n1. **Data:** The actual value you are storing (a number, string, etc.)\n2. **Next Pointer:** The memory address (reference) to the *next* Node in the chain.\n\nThe first Node is called the **Head**. The last Node points to \`null\`.\n\n**When to use a Linked List over an Array?**\nIf you need to insert or delete items at the very beginning or middle of a list constantly, Linked Lists are amazing because you just change a pointer (O(1)). In an array, you'd have to shift millions of elements to make room (O(n)).\n\nThe tradeoff? To read the 100th element of an array, you jump straight there. To read the 100th element of a Linked List, you have to start at the Head and follow 100 pointers sequentially (O(n)).`,
          code: `class Node {\n  constructor(data) {\n    this.data = data;\n    this.next = null;\n  }\n}\n\nclass LinkedList {\n  constructor() {\n    this.head = null;\n  }\n\n  // Insert at the front (O(1))\n  prepend(data) {\n    const newNode = new Node(data);\n    newNode.next = this.head;\n    this.head = newNode;\n  }\n}`,
          complexity: { access: 'O(n)', search: 'O(n)', insertHead: 'O(1)', delete: 'O(n)', space: 'O(n)' }
        }
      }
    ]
  },
  {
    id: 'stack-queue',
    title: 'Stacks & Queues',
    icon: '📚',
    description: 'Specialized arrays with strict rules for insertion and removal.',
    topics: [
      {
        id: 'stack-intro',
        title: 'Stacks (LIFO)',
        duration: '15 min',
        content: {
          intro: `**What is a Stack?**\nThink of a literal stack of heavy plates in a cafeteria. When a new clean plate is added, it goes on the **TOP**. When someone needs a plate, they take one from the **TOP**. You cannot easily take a plate from the middle without everything crashing down.\n\nThis principle is called **LIFO** (Last In, First Out). The last item you put into the stack is the very first one you take out.\n\n**Where is this used in the real world?**\n- **Browser History:** When you click the "Back" button, it pops the last page you visited off the history stack.\n- **Undo Mechanisms:** Ctrl+Z in any text editor works by popping your last action off a stack.\n- **Function Calls:** Your computer's CPU uses a "Call Stack" to keep track of nested function calls.\n\nIn JavaScript or Python, a Stack is just an Array, but you strictly only use \`push()\` and \`pop()\`.`,
          code: `class Stack {\n  constructor() {\n    this.items = [];\n  }\n  \n  push(item) {\n    this.items.push(item);\n  }\n  \n  pop() {\n    return this.items.pop();\n  }\n  \n  peek() {\n    return this.items[this.items.length - 1]; // Look without removing\n  }\n}`,
          complexity: { push: 'O(1)', pop: 'O(1)', peek: 'O(1)', space: 'O(n)' }
        }
      },
      {
        id: 'queue-intro',
        title: 'Queues (FIFO)',
        duration: '15 min',
        content: {
          intro: `**What is a Queue?**\nA Queue is exactly like waiting in line at a grocery store or for a roller coaster. The person who gets in line *first* is the one who gets served *first*.\n\nThis principle is called **FIFO** (First In, First Out).\n\n- Elements are added to the **Back** (Enqueued).\n- Elements are removed from the **Front** (Dequeued).\n\n**Where is this used?**\n- **Printers:** If 5 people hit "Print" at the same time, the documents are processed in the exact order they were received.\n- **Web Servers:** Handling thousands of incoming HTTP requests.\n- **Breadth-First Search (BFS):** An algorithm used to explore networks or grids layer by layer.`,
          code: `class Queue {\n  constructor() {\n    this.items = [];\n  }\n  \n  enqueue(item) {\n    this.items.push(item);\n  }\n  \n  dequeue() {\n    return this.items.shift();\n  }\n}`,
          complexity: { enqueue: 'O(1)', dequeue: 'O(1)', space: 'O(n)' }
        }
      }
    ]
  },
  {
    id: 'trees',
    title: 'Trees & Heaps',
    icon: '🌳',
    description: 'Hierarchical and networked data structures.',
    topics: [
      {
        id: 'binary-tree-intro',
        title: 'Binary Trees from Scratch',
        duration: '25 min',
        content: {
          intro: `**What is a Tree?**\nUnlike Arrays or Linked Lists which are just straight lines (linear), a Tree is a **hierarchical** data structure. Think of a family tree, or a company's organizational chart (CEO at top, VPs below, Managers below them).\n\nA Tree consists of **Nodes** connected by **Edges** (lines). The topmost node is the **Root**. Nodes with no children are called **Leaves**.\n\n**What is a Binary Tree?**\nA Binary Tree is a specific type of tree where every single Node is allowed to have a maximum of TWO children. We specifically call them the **Left Child** and the **Right Child**.\n\n**The Bread and Butter: Traversals**\nBecause a tree isn't a straight line, how do you iterate through it? You can't just run a \`for\` loop from 0 to N. Instead, we use recursive algorithms called traversals.\n- **Depth-First Search (DFS):** Go as deep as possible down one branch before coming back up. \n- **Breadth-First Search (BFS):** Read the tree horizontally, level by level.\n\n**Why are Trees Useful?**\nTrees excel at searching and organizing data quickly. File systems on your OS are trees. The DOM (HTML) of a website is a tree.`,
          code: `class TreeNode {\n  constructor(val) {\n    this.val = val;\n    this.left = null;\n    this.right = null;\n  }\n}\n\n// In-Order Traversal (DFS)\n// Visits Left, then Root, then Right\nfunction inOrder(node) {\n  if (node === null) return;\n  \n  inOrder(node.left);\n  console.log(node.val);\n  inOrder(node.right);\n}`,
          complexity: { traversal: 'O(n) time', maxDepth: 'O(n) worst case space' }
        }
      },
      {
        id: 'heaps-intro',
        title: 'Priority Queues (Heaps)',
        duration: '20 min',
        content: {
          intro: `**What is a Heap?**\nA Heap is a specialized Tree-based data structure that satisfies the **Heap Property**:\n- In a **Max Heap**, the parent node is ALWAYS greater than or equal to its children. Result: The absolute maximum value is always at the Root node (Top).\n- In a **Min Heap**, the parent node is ALWAYS smaller than or equal to its children. Result: The absolute minimum value is always at the top.\n\n**Why use a Heap?**\nImagine you want to continuously find the "Top 5" or "Smallest" item in a massively changing dataset. If you use an array, you have to sort it every single time (O(n log n)).\nA Heap naturally bubbles the highest priority item to the top in **O(log n)** time! It is the underlying architecture of a **Priority Queue**.\n\n**Implementation details:**\nHeaps are actually built using simple Arrays! We use math offsets to represent the tree:\n- Left child is at index: \`2i + 1\`\n- Right child is at index: \`2i + 2\``,
          code: `// Note: Building a full robust Heap class takes ~50 lines of code.\n// This illustrates the mental model.\n\nclass MinHeap {\n  constructor() {\n    this.heap = [];\n  }\n  \n  // When adding, we push to the end array,\n  // then "Bubble Up" to restore rules.\n  push(val) { ... }\n  \n  // When removing the minimum (the top root),\n  // we pop it, move the last array item to the root,\n  // then "Sink Down" to restore rules.\n  pop() { ... }\n}`,
          complexity: { insert: 'O(log n)', extractMin: 'O(log n)', peek: 'O(1)' }
        }
      }
    ]
  },
  {
    id: 'graphs',
    title: 'Graphs & Algorithms',
    icon: '🕸️',
    description: 'Networks of interconnected nodes. Extremely powerful.',
    topics: [
      {
        id: 'graph-intro',
        title: 'Graph Theory & Representations',
        duration: '25 min',
        content: {
          intro: `**What is a Graph?**\nA Graph is simply a network of Nodes (called **Vertices**) connected by lines (called **Edges**). A Tree is actually just a restricted type of graph that flows in one direction and has no cycles!\n\n**Real World Uses:**\n- **Social Networks:** You are a Vertex. Your friends are connected by Edges.\n- **Google Maps:** Intersections are Vertices. Roads are Edges. The traffic time is the "Weight" of the edge.\n\n**How to Store a Graph in Code?**\nYou can't easily build generic \`node.next\` properties because a node might have 100 connections! We typically use:\n1. **Adjacency Matrix:** A massive 2D array true/false grid. Takes O(V²) space.\n2. **Adjacency List:** A Hash Map where every Node maps to an Array of its neighbors. This is overwhelmingly the standard for interviews.\n\n**Traversing a Graph**\nYou use exactly the same DFS and BFS logic as Trees. However, because Graphs can have cycles (loops), you MUST keep a \`Set\` of "Visited" nodes. Otherwise, you'll get stuck in an infinite loop forever!`,
          code: `// Undirected Graph using Adjacency List\nconst graph = {\n  'A': ['B', 'C'],\n  'B': ['A', 'D'],\n  'C': ['A', 'D'],\n  'D': ['B', 'C']\n};\n\nfunction graphDFS(curr, visited = new Set()) {\n  if (visited.has(curr)) return;\n  \n  // Mark as visited\n  visited.add(curr);\n  console.log(curr);\n  \n  // Recursively visit all neighbors\n  for (let neighbor of graph[curr]) {\n    graphDFS(neighbor, visited);\n  }\n}`,
          complexity: { time: 'O(V + E)', space: 'O(V) for visited set' }
        }
      }
    ]
  },
  {
    id: 'advanced',
    title: 'Advanced Paradigms',
    icon: '🧪',
    description: 'Dynamic Programming and advanced Backtracking techniques.',
    topics: [
      {
        id: 'backtracking',
        title: 'Backtracking',
        duration: '25 min',
        content: {
          intro: `**What is Backtracking?**\nBacktracking is an algorithmic-technique for solving problems recursively by trying to build a solution incrementally. \n\nImagine you are navigating a maze. You reach a fork and go Left. You hit a dead end. You don't just stay there—you **backtrack** to the fork, and then you try going Right.\n\n**When to use it?**\nWhenever a problem asks for "All combinations", "All permutations", or "All subsets". Instead of doing infinite nested loops, you use a single recursive function that builds a temporary array, evaluates it, and then "pops" the last item to try the next possibility.\n\nAlgorithms like Permutations, Combination Sum, and the famous N-Queens all rely exclusively on Backtracking.`,
          code: `// Generate all subsets using Backtracking\nfunction subsets(nums) {\n  const result = [];\n  \n  function backtrack(start, currentSubset) {\n    result.push([...currentSubset]);\n    \n    for (let i = start; i < nums.length; i++) {\n      // Decision: Include nums[i]\n      currentSubset.push(nums[i]);\n      \n      // Recursively evaluate the rest\n      backtrack(i + 1, currentSubset);\n      \n      // Backtrack! Undo the decision to explore other paths\n      currentSubset.pop();\n    }\n  }\n  \n  backtrack(0, []);\n  return result;\n}`,
          complexity: { time: 'O(2^n) exponential', space: 'O(n) recursion call stack' }
        }
      },
      {
        id: 'dp',
        title: 'Dynamic Programming (DP)',
        duration: '30 min',
        content: {
          intro: `**What is Dynamic Programming?**\n"Those who cannot remember the past are condemned to repeat it." DP is just an optimization over plain recursion. \n\nIf you use recursion to solve the Fibonacci sequence \`fib(n) = fib(n-1) + fib(n-2)\`, you end up calculating \`fib(3)\` or \`fib(4)\` hundreds of identical times. This is disastrously slow O(2^n).\n\n**Memoization (Top-Down)**\nYou use a Hash Map or Array to store the result of an expensive calculation. Before calculating \`fib(4)\` again, you check: "Hey, did I already calculate fib(4)?". If yes, you return the cached answer! Time complexity plummets to O(n).\n\n**Tabulation (Bottom-Up)**\nInstead of recursion, you use an array and build the answers from the bottom up using a \`for\` loop. You solve the smallest subproblem first, then use it to solve the next subproblem.\n\nDP is infamous for being difficult because you have to identify the "Subproblem State" and the "State Transition Equation", but it is heavily featured in hard interviews.`,
          code: `// Climbing Stairs (Fibonacci) via DP Bottom-Up\n// You can take 1 or 2 steps. How many ways to reach the top?\n\nfunction climbStairs(n) {\n  if (n <= 2) return n;\n  \n  // Create DP array matching length of stairs\n  const dp = new Array(n + 1).fill(0);\n  \n  // Base States\n  dp[1] = 1;\n  dp[2] = 2;\n  \n  // Build solutions from bottom up\n  for (let i = 3; i <= n; i++) {\n    dp[i] = dp[i - 1] + dp[i - 2];\n  }\n  \n  return dp[n];\n}`,
          complexity: { time: 'O(n)', space: 'O(n)' }
        }
      }
    ]
  }
];

export const getCurriculumFlat = () => {
  return curriculum.flatMap(section => 
    section.topics.map(topic => ({
      ...topic,
      sectionId: section.id,
      sectionTitle: section.title,
      sectionIcon: section.icon
    }))
  );
};

export default curriculum;
