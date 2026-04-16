// Auto-generated from generate_problems.js
// Extended with problems_extra.js — Total ~438 problems
import { problemsExtra } from './problems_extra.js';

export const problems = [
  {
    "id": "two-sum",
    "title": "Two Sum",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "hash-map",
    "acceptance": 47,
    "leetcodeLink": "https://leetcode.com/problems/two-sum/",
    "tags": [
      "Arrays",
      "hash-map"
    ],
    "description": "Given an integer array nums and an integer target, return the indices of the two numbers such that they add up to target. Each input has exactly one solution and you may not use the same element twice.",
    "examples": [
      {
        "input": "nums=[2,7,11,15], target=9",
        "output": "[0,1]",
        "explanation": "nums[0]+nums[1]=9"
      },
      {
        "input": "nums=[3,2,4], target=6",
        "output": "[1,2]",
        "explanation": ""
      }
    ],
    "constraints": [
      "2≤nums.length≤10^4",
      "-10^9≤nums[i]≤10^9"
    ],
    "hints": [
      "Use a hash map to store each number and its index as you iterate.",
      "For each num, check if (target - num) already exists in the map before inserting."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - twoSum\n */\nfunction twoSum(nums, target) {\n  // Your solution here\n}",
      "python": "def twoSum(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] twoSum(nums, target) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(nums, target) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function twoSum(nums, target) {\n  const m=new Map();for(let i=0;i<nums.length;i++){const c=target-nums[i];if(m.has(c))return[m.get(c),i];m.set(nums[i],i);}return[];\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "contains-duplicate",
    "title": "Contains Duplicate",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "hash-map",
    "acceptance": 61,
    "leetcodeLink": "https://leetcode.com/problems/contains-duplicate/",
    "tags": [
      "Arrays",
      "hash-map"
    ],
    "description": "Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.",
    "examples": [
      {
        "input": "nums=[1,2,3,1]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "nums=[1,2,3,4]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^5",
      "-10^9≤nums[i]≤10^9"
    ],
    "hints": [
      "Use a Set to track seen numbers.",
      "If the current number is already in the set, return true."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - containsDuplicate\n */\nfunction containsDuplicate(nums) {\n  // Your solution here\n}",
      "python": "def containsDuplicate(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean containsDuplicate(nums) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool containsDuplicate(nums) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function containsDuplicate(nums) {\n  const s=new Set();for(const n of nums){if(s.has(n))return true;s.add(n);}return false;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "best-time-to-buy-and-sell-stock",
    "title": "Best Time to Buy and Sell Stock",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "sliding-window",
    "acceptance": 54,
    "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    "tags": [
      "Arrays",
      "sliding-window"
    ],
    "description": "Given an array prices where prices[i] is the stock price on day i, find the maximum profit from buying on one day and selling on a later day. Return 0 if no profit is possible.",
    "examples": [
      {
        "input": "prices=[7,1,5,3,6,4]",
        "output": "5",
        "explanation": "Buy day 2 (1), sell day 5 (6), profit=5"
      },
      {
        "input": "prices=[7,6,4,3,1]",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤prices.length≤10^5",
      "0≤prices[i]≤10^4"
    ],
    "hints": [
      "Track the minimum price seen so far with a variable.",
      "At each step, profit = current price - min price. Update max profit."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxProfit\n */\nfunction maxProfit(prices) {\n  // Your solution here\n}",
      "python": "def maxProfit(prices):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxProfit(prices) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxProfit(prices) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxProfit(prices) {\n  let min=Infinity,max=0;for(const p of prices){min=Math.min(min,p);max=Math.max(max,p-min);}return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "maximum-subarray",
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "kadane",
    "acceptance": 50,
    "leetcodeLink": "https://leetcode.com/problems/maximum-subarray/",
    "tags": [
      "Arrays",
      "kadane"
    ],
    "description": "Given an integer array nums, find the subarray with the largest sum and return its sum. A subarray is a contiguous non-empty part of the array.",
    "examples": [
      {
        "input": "nums=[-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "[4,-1,2,1] has the largest sum"
      },
      {
        "input": "nums=[1]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^5",
      "-10^4≤nums[i]≤10^4"
    ],
    "hints": [
      "Kadane's: at each index, decide to extend current subarray or start fresh.",
      "currentSum = max(nums[i], currentSum + nums[i]). Track global max."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxSubArray\n */\nfunction maxSubArray(nums) {\n  // Your solution here\n}",
      "python": "def maxSubArray(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxSubArray(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxSubArray(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxSubArray(nums) {\n  let cur=nums[0],max=nums[0];for(let i=1;i<nums.length;i++){cur=Math.max(nums[i],cur+nums[i]);max=Math.max(max,cur);}return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "product-of-array-except-self",
    "title": "Product of Array Except Self",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "prefix-sum",
    "acceptance": 65,
    "leetcodeLink": "https://leetcode.com/problems/product-of-array-except-self/",
    "tags": [
      "Arrays",
      "prefix-sum"
    ],
    "description": "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all elements of nums except nums[i]. Solve without using division and in O(n).",
    "examples": [
      {
        "input": "nums=[1,2,3,4]",
        "output": "[24,12,8,6]",
        "explanation": ""
      },
      {
        "input": "nums=[-1,1,0,-3,3]",
        "output": "[0,0,9,0,0]",
        "explanation": ""
      }
    ],
    "constraints": [
      "2≤nums.length≤10^5",
      "-30≤nums[i]≤30"
    ],
    "hints": [
      "Compute prefix products from left and suffix products from right.",
      "answer[i] = prefix[i] * suffix[i]. Do it in two passes with O(1) extra space."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - productExceptSelf\n */\nfunction productExceptSelf(nums) {\n  // Your solution here\n}",
      "python": "def productExceptSelf(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] productExceptSelf(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> productExceptSelf(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function productExceptSelf(nums) {\n  const n=nums.length,ans=new Array(n).fill(1);let pre=1;for(let i=0;i<n;i++){ans[i]=pre;pre*=nums[i];}let suf=1;for(let i=n-1;i>=0;i--){ans[i]*=suf;suf*=nums[i];}return ans;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "maximum-product-subarray",
    "title": "Maximum Product Subarray",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "kadane",
    "acceptance": 35,
    "leetcodeLink": "https://leetcode.com/problems/maximum-product-subarray/",
    "tags": [
      "Arrays",
      "kadane"
    ],
    "description": "Given an integer array nums, find a subarray that has the largest product and return the product. The subarray must be contiguous.",
    "examples": [
      {
        "input": "nums=[2,3,-2,4]",
        "output": "6",
        "explanation": "[2,3] has the largest product"
      },
      {
        "input": "nums=[-2,0,-1]",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤2*10^4",
      "-10≤nums[i]≤10"
    ],
    "hints": [
      "Track both max and min product ending at current index (negatives can flip signs).",
      "maxProd = max(nums[i], maxProd*nums[i], minProd*nums[i])"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxProduct\n */\nfunction maxProduct(nums) {\n  // Your solution here\n}",
      "python": "def maxProduct(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxProduct(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxProduct(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxProduct(nums) {\n  let maxP=nums[0],minP=nums[0],res=nums[0];for(let i=1;i<nums.length;i++){const t=maxP;maxP=Math.max(nums[i],maxP*nums[i],minP*nums[i]);minP=Math.min(nums[i],t*nums[i],minP*nums[i]);res=Math.max(res,maxP);}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "sort-colors",
    "title": "Sort Colors",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 61,
    "leetcodeLink": "https://leetcode.com/problems/sort-colors/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given an array with objects colored 0 (red), 1 (white), 2 (blue), sort them in-place so colors are adjacent in order. Use the Dutch National Flag algorithm.",
    "examples": [
      {
        "input": "nums=[2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]",
        "explanation": ""
      },
      {
        "input": "nums=[2,0,1]",
        "output": "[0,1,2]",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==nums.length",
      "1≤n≤300",
      "nums[i] is 0, 1, or 2"
    ],
    "hints": [
      "Use 3 pointers: low, mid, high. low=0, mid=0, high=n-1.",
      "If nums[mid]==0 swap with low and advance both; if 2 swap with high and decrement high; if 1 just advance mid."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - sortColors\n */\nfunction sortColors(nums) {\n  // Your solution here\n}",
      "python": "def sortColors(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void sortColors(nums) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void sortColors(nums) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function sortColors(nums) {\n  let lo=0,mi=0,hi=nums.length-1;while(mi<=hi){if(nums[mi]===0){[nums[lo],nums[mi]]=[nums[mi],nums[lo]];lo++;mi++;}else if(nums[mi]===2){[nums[mi],nums[hi]]=[nums[hi],nums[mi]];hi--;}else mi++;}\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "next-permutation",
    "title": "Next Permutation",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 38,
    "leetcodeLink": "https://leetcode.com/problems/next-permutation/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Rearrange the array nums into the next lexicographically greater permutation. If no next permutation exists, rearrange to the lowest possible order. Modify in-place with O(1) extra space.",
    "examples": [
      {
        "input": "nums=[1,2,3]",
        "output": "[1,3,2]",
        "explanation": ""
      },
      {
        "input": "nums=[3,2,1]",
        "output": "[1,2,3]",
        "explanation": ""
      },
      {
        "input": "nums=[1,1,5]",
        "output": "[1,5,1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤100",
      "0≤nums[i]≤100"
    ],
    "hints": [
      "Find largest index i where nums[i] < nums[i+1] from the right. If none, reverse all.",
      "Find largest j where nums[j] > nums[i]. Swap nums[i] and nums[j]. Then reverse suffix from i+1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - nextPermutation\n */\nfunction nextPermutation(nums) {\n  // Your solution here\n}",
      "python": "def nextPermutation(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void nextPermutation(nums) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void nextPermutation(nums) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function nextPermutation(nums) {\n  const n=nums.length;let i=n-2;while(i>=0&&nums[i]>=nums[i+1])i--;if(i>=0){let j=n-1;while(nums[j]<=nums[i])j--;[nums[i],nums[j]]=[nums[j],nums[i]];}let l=i+1,r=n-1;while(l<r){[nums[l],nums[r]]=[nums[r],nums[l]];l++;r--;}\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "trapping-rain-water",
    "title": "Trapping Rain Water",
    "difficulty": "Hard",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 58,
    "leetcodeLink": "https://leetcode.com/problems/trapping-rain-water/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given n non-negative integers representing an elevation map with bar width 1, compute how much water it can trap after raining.",
    "examples": [
      {
        "input": "height=[0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": ""
      },
      {
        "input": "height=[4,2,0,3,2,5]",
        "output": "9",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==height.length",
      "1≤n≤2*10^4",
      "0≤height[i]≤10^5"
    ],
    "hints": [
      "Two pointers: left and right. Maintain leftMax and rightMax.",
      "If leftMax < rightMax, water at left = leftMax - height[left]. Move left pointer."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - trap\n */\nfunction trap(height) {\n  // Your solution here\n}",
      "python": "def trap(height):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int trap(height) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int trap(height) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function trap(height) {\n  let l=0,r=height.length-1,lm=0,rm=0,w=0;while(l<r){if(height[l]<height[r]){lm=Math.max(lm,height[l]);w+=lm-height[l];l++;}else{rm=Math.max(rm,height[r]);w+=rm-height[r];r--;}}return w;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "3sum",
    "title": "3Sum",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 32,
    "leetcodeLink": "https://leetcode.com/problems/3sum/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given integer array nums, return all unique triplets [nums[i],nums[j],nums[k]] where i≠j≠k and nums[i]+nums[j]+nums[k]==0. The solution set must not contain duplicate triplets.",
    "examples": [
      {
        "input": "nums=[-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": ""
      },
      {
        "input": "nums=[0,0,0]",
        "output": "[[0,0,0]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "3≤nums.length≤3000",
      "-10^5≤nums[i]≤10^5"
    ],
    "hints": [
      "Sort first. Fix one element, use two pointers for the remaining two.",
      "Skip duplicates: if nums[i]==nums[i-1] skip i. Similarly skip duplicate left/right pointers."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - threeSum\n */\nfunction threeSum(nums) {\n  // Your solution here\n}",
      "python": "def threeSum(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] threeSum(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> threeSum(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function threeSum(nums) {\n  nums.sort((a,b)=>a-b);const res=[];for(let i=0;i<nums.length-2;i++){if(i>0&&nums[i]===nums[i-1])continue;let l=i+1,r=nums.length-1;while(l<r){const s=nums[i]+nums[l]+nums[r];if(s===0){res.push([nums[i],nums[l],nums[r]]);while(l<r&&nums[l]===nums[l+1])l++;while(l<r&&nums[r]===nums[r-1])r--;l++;r--;}else if(s<0)l++;else r--;}}return res;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "container-with-most-water",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 54,
    "leetcodeLink": "https://leetcode.com/problems/container-with-most-water/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given n vertical lines at index i with height height[i], find two lines that together with the x-axis form a container holding the most water. Return the maximum amount of water.",
    "examples": [
      {
        "input": "height=[1,8,6,2,5,4,8,3,7]",
        "output": "49",
        "explanation": ""
      },
      {
        "input": "height=[1,1]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==height.length",
      "2≤n≤10^5",
      "0≤height[i]≤10^4"
    ],
    "hints": [
      "Two pointers from both ends. Area = min(left, right) * distance.",
      "Move the shorter line inward to potentially find a taller one."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxArea\n */\nfunction maxArea(height) {\n  // Your solution here\n}",
      "python": "def maxArea(height):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxArea(height) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxArea(height) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxArea(height) {\n  let l=0,r=height.length-1,max=0;while(l<r){max=Math.max(max,Math.min(height[l],height[r])*(r-l));if(height[l]<height[r])l++;else r--;}return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "merge-intervals",
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "sorting",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/merge-intervals/",
    "tags": [
      "Arrays",
      "sorting"
    ],
    "description": "Given an array of intervals where intervals[i]=[start_i, end_i], merge all overlapping intervals and return an array of non-overlapping intervals.",
    "examples": [
      {
        "input": "intervals=[[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "explanation": ""
      },
      {
        "input": "intervals=[[1,4],[4,5]]",
        "output": "[[1,5]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤intervals.length≤10^4",
      "intervals[i].length==2"
    ],
    "hints": [
      "Sort by start time. Use a result array.",
      "For each interval, if it overlaps with last result interval, merge. Else append."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - merge\n */\nfunction merge(intervals) {\n  // Your solution here\n}",
      "python": "def merge(intervals):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] merge(intervals) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> merge(intervals) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function merge(intervals) {\n  intervals.sort((a,b)=>a[0]-b[0]);const res=[intervals[0]];for(let i=1;i<intervals.length;i++){const last=res[res.length-1];if(intervals[i][0]<=last[1])last[1]=Math.max(last[1],intervals[i][1]);else res.push(intervals[i]);}return res;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "insert-interval",
    "title": "Insert Interval",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "sorting",
    "acceptance": 38,
    "leetcodeLink": "https://leetcode.com/problems/insert-interval/",
    "tags": [
      "Arrays",
      "sorting"
    ],
    "description": "Given a sorted non-overlapping array of intervals and a new interval, insert it in the correct position, merging if necessary. Return the resulting array.",
    "examples": [
      {
        "input": "intervals=[[1,3],[6,9]], newInterval=[2,5]",
        "output": "[[1,5],[6,9]]",
        "explanation": ""
      },
      {
        "input": "intervals=[[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval=[4,8]",
        "output": "[[1,2],[3,10],[12,16]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤intervals.length≤10^4",
      "intervals is sorted by start"
    ],
    "hints": [
      "Add all intervals before the new one, then merge overlapping ones, then add the rest.",
      "Overlap condition: newStart <= currentEnd && newEnd >= currentStart."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - insert\n */\nfunction insert(intervals, newInterval) {\n  // Your solution here\n}",
      "python": "def insert(intervals, newInterval):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] insert(intervals, newInterval) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> insert(intervals, newInterval) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function insert(intervals, newInterval) {\n  const res=[];let i=0,n=intervals.length;while(i<n&&intervals[i][1]<newInterval[0])res.push(intervals[i++]);while(i<n&&intervals[i][0]<=newInterval[1]){newInterval[0]=Math.min(newInterval[0],intervals[i][0]);newInterval[1]=Math.max(newInterval[1],intervals[i][1]);i++;}res.push(newInterval);while(i<n)res.push(intervals[i++]);return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "rotate-image",
    "title": "Rotate Image",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "matrix",
    "acceptance": 73,
    "leetcodeLink": "https://leetcode.com/problems/rotate-image/",
    "tags": [
      "Arrays",
      "matrix"
    ],
    "description": "Given an n×n 2D matrix representing an image, rotate it 90 degrees clockwise in-place. You must rotate the image without using another 2D matrix.",
    "examples": [
      {
        "input": "matrix=[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]",
        "explanation": ""
      },
      {
        "input": "matrix=[[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]",
        "output": "[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==matrix.length==matrix[i].length",
      "1≤n≤20",
      "-1000≤matrix[i][j]≤1000"
    ],
    "hints": [
      "Step 1: Transpose the matrix (swap matrix[i][j] with matrix[j][i]).",
      "Step 2: Reverse each row."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - rotate\n */\nfunction rotate(matrix) {\n  // Your solution here\n}",
      "python": "def rotate(matrix):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void rotate(matrix) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void rotate(matrix) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function rotate(matrix) {\n  const n=matrix.length;for(let i=0;i<n;i++)for(let j=i+1;j<n;j++){[matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];}for(let i=0;i<n;i++)matrix[i].reverse();\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "spiral-matrix",
    "title": "Spiral Matrix",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "matrix",
    "acceptance": 47,
    "leetcodeLink": "https://leetcode.com/problems/spiral-matrix/",
    "tags": [
      "Arrays",
      "matrix"
    ],
    "description": "Given an m×n matrix, return all elements in spiral order (clockwise from top-left).",
    "examples": [
      {
        "input": "matrix=[[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,2,3,6,9,8,7,4,5]",
        "explanation": ""
      },
      {
        "input": "matrix=[[1,2,3,4],[5,6,7,8],[9,10,11,12]]",
        "output": "[1,2,3,4,8,12,11,10,9,5,6,7]",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==matrix.length",
      "n==matrix[i].length",
      "1≤m,n≤10"
    ],
    "hints": [
      "Maintain four boundaries: top, bottom, left, right.",
      "Traverse right, down, left, up and shrink boundaries after each pass."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - spiralOrder\n */\nfunction spiralOrder(matrix) {\n  // Your solution here\n}",
      "python": "def spiralOrder(matrix):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] spiralOrder(matrix) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> spiralOrder(matrix) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function spiralOrder(matrix) {\n  const res=[];let top=0,bot=matrix.length-1,left=0,right=matrix[0].length-1;while(top<=bot&&left<=right){for(let i=left;i<=right;i++)res.push(matrix[top][i]);top++;for(let i=top;i<=bot;i++)res.push(matrix[i][right]);right--;if(top<=bot){for(let i=right;i>=left;i--)res.push(matrix[bot][i]);bot--;}if(left<=right){for(let i=bot;i>=top;i--)res.push(matrix[i][left]);left++;}}return res;\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "set-matrix-zeroes",
    "title": "Set Matrix Zeroes",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "matrix",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/set-matrix-zeroes/",
    "tags": [
      "Arrays",
      "matrix"
    ],
    "description": "Given an m×n integer matrix, if an element is 0, set its entire row and column to 0. Do it in-place.",
    "examples": [
      {
        "input": "matrix=[[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]",
        "explanation": ""
      },
      {
        "input": "matrix=[[0,1,2,0],[3,4,5,2],[1,3,1,5]]",
        "output": "[[0,0,0,0],[0,4,5,0],[0,3,1,0]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==matrix.length",
      "n==matrix[i].length",
      "1≤m,n≤200"
    ],
    "hints": [
      "Use first row and first column as markers for which row/col should be zeroed.",
      "Track separately whether the first row/col itself should be zeroed."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - setZeroes\n */\nfunction setZeroes(matrix) {\n  // Your solution here\n}",
      "python": "def setZeroes(matrix):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void setZeroes(matrix) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void setZeroes(matrix) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function setZeroes(matrix) {\n  const m=matrix.length,n=matrix[0].length;let fr=false,fc=false;for(let j=0;j<n;j++)if(matrix[0][j]===0)fr=true;for(let i=0;i<m;i++)if(matrix[i][0]===0)fc=true;for(let i=1;i<m;i++)for(let j=1;j<n;j++)if(matrix[i][j]===0){matrix[i][0]=0;matrix[0][j]=0;}for(let i=1;i<m;i++)for(let j=1;j<n;j++)if(matrix[i][0]===0||matrix[0][j]===0)matrix[i][j]=0;if(fr)for(let j=0;j<n;j++)matrix[0][j]=0;if(fc)for(let i=0;i<m;i++)matrix[i][0]=0;\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "majority-element",
    "title": "Majority Element",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "hash-map",
    "acceptance": 63,
    "leetcodeLink": "https://leetcode.com/problems/majority-element/",
    "tags": [
      "Arrays",
      "hash-map"
    ],
    "description": "Given an array nums of size n, return the majority element that appears more than ⌊n/2⌋ times. The majority element always exists.",
    "examples": [
      {
        "input": "nums=[3,2,3]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "nums=[2,2,1,1,1,2,2]",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==nums.length",
      "1≤n≤5*10^4",
      "-10^9≤nums[i]≤10^9"
    ],
    "hints": [
      "Boyer-Moore Voting: maintain candidate and count. If count==0, update candidate.",
      "Increment count for match, decrement for mismatch. Result is the candidate."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - majorityElement\n */\nfunction majorityElement(nums) {\n  // Your solution here\n}",
      "python": "def majorityElement(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int majorityElement(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int majorityElement(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function majorityElement(nums) {\n  let c=nums[0],cnt=1;for(let i=1;i<nums.length;i++){if(cnt===0){c=nums[i];cnt=1;}else if(nums[i]===c)cnt++;else cnt--;}return c;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "longest-consecutive-sequence",
    "title": "Longest Consecutive Sequence",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "hash-map",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/longest-consecutive-sequence/",
    "tags": [
      "Arrays",
      "hash-map"
    ],
    "description": "Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence. Must run in O(n) time.",
    "examples": [
      {
        "input": "nums=[100,4,200,1,3,2]",
        "output": "4",
        "explanation": "[1,2,3,4] length 4"
      },
      {
        "input": "nums=[0,3,7,2,5,8,4,6,0,1]",
        "output": "9",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤nums.length≤10^5",
      "-10^9≤nums[i]≤10^9"
    ],
    "hints": [
      "Put all numbers in a HashSet. Only start counting from numbers where (num-1) is NOT in the set.",
      "From each sequence start, count consecutive numbers by checking if +1 exists."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - longestConsecutive\n */\nfunction longestConsecutive(nums) {\n  // Your solution here\n}",
      "python": "def longestConsecutive(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int longestConsecutive(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestConsecutive(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function longestConsecutive(nums) {\n  const s=new Set(nums);let max=0;for(const n of s){if(!s.has(n-1)){let cur=n,len=1;while(s.has(cur+1)){cur++;len++;}max=Math.max(max,len);}}return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "find-minimum-in-rotated-sorted-array",
    "title": "Find Minimum in Rotated Sorted Array",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 48,
    "leetcodeLink": "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Suppose a sorted array of unique elements is rotated between 1 and n times. Given the rotated array, return the minimum element. Must run in O(log n).",
    "examples": [
      {
        "input": "nums=[3,4,5,1,2]",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "nums=[4,5,6,7,0,1,2]",
        "output": "0",
        "explanation": ""
      },
      {
        "input": "nums=[11,13,15,17]",
        "output": "11",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==nums.length",
      "1≤n≤5000",
      "-5000≤nums[i]≤5000",
      "All nums are unique"
    ],
    "hints": [
      "Binary search: if nums[mid] > nums[right], minimum is in right half.",
      "Else minimum is in left half including mid. Loop until left==right."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findMin\n */\nfunction findMin(nums) {\n  // Your solution here\n}",
      "python": "def findMin(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findMin(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findMin(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findMin(nums) {\n  let l=0,r=nums.length-1;while(l<r){const m=l+r>>1;if(nums[m]>nums[r])l=m+1;else r=m;}return nums[l];\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "search-in-rotated-sorted-array",
    "title": "Search in Rotated Sorted Array",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 39,
    "leetcodeLink": "https://leetcode.com/problems/search-in-rotated-sorted-array/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Given a rotated sorted array of unique integers and a target, return the index of target or -1 if not found. Must run in O(log n).",
    "examples": [
      {
        "input": "nums=[4,5,6,7,0,1,2], target=0",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "nums=[4,5,6,7,0,1,2], target=3",
        "output": "-1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤5000",
      "-10^4≤nums[i]≤10^4",
      "All nums are unique"
    ],
    "hints": [
      "Binary search: determine which half is sorted using nums[left] vs nums[mid].",
      "If target is in the sorted half, search there. Else search the other half."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - search\n */\nfunction search(nums, target) {\n  // Your solution here\n}",
      "python": "def search(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int search(nums, target) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int search(nums, target) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function search(nums, target) {\n  let l=0,r=nums.length-1;while(l<=r){const m=l+r>>1;if(nums[m]===target)return m;if(nums[l]<=nums[m]){if(nums[l]<=target&&target<nums[m])r=m-1;else l=m+1;}else{if(nums[m]<target&&target<=nums[r])l=m+1;else r=m-1;}}return -1;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "jump-game",
    "title": "Jump Game",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 38,
    "leetcodeLink": "https://leetcode.com/problems/jump-game/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Given an integer array nums where nums[i] is the maximum jump length at position i, return true if you can reach the last index starting from index 0.",
    "examples": [
      {
        "input": "nums=[2,3,1,1,4]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "nums=[3,2,1,0,4]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^4",
      "0≤nums[i]≤10^4"
    ],
    "hints": [
      "Track the maximum reachable index.",
      "If at any index, the current index > max reachable, return false."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - canJump\n */\nfunction canJump(nums) {\n  // Your solution here\n}",
      "python": "def canJump(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean canJump(nums) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canJump(nums) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function canJump(nums) {\n  let maxReach=0;for(let i=0;i<nums.length;i++){if(i>maxReach)return false;maxReach=Math.max(maxReach,i+nums[i]);}return true;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "jump-game-ii",
    "title": "Jump Game II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 40,
    "leetcodeLink": "https://leetcode.com/problems/jump-game-ii/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Given a 0-indexed array of integers nums where nums[i] represents the maximum jump from index i, return the minimum number of jumps to reach the last index.",
    "examples": [
      {
        "input": "nums=[2,3,1,1,4]",
        "output": "2",
        "explanation": "Jump 1 to 1, then 3 to end"
      },
      {
        "input": "nums=[2,3,0,1,4]",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^4",
      "0≤nums[i]≤1000",
      "Can always reach last index"
    ],
    "hints": [
      "Greedy: at each step, find the farthest you can reach within current jump range.",
      "When you reach the end of the current jump range, increment jumps and extend range."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - jump\n */\nfunction jump(nums) {\n  // Your solution here\n}",
      "python": "def jump(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int jump(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int jump(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function jump(nums) {\n  let jumps=0,curEnd=0,farthest=0;for(let i=0;i<nums.length-1;i++){farthest=Math.max(farthest,i+nums[i]);if(i===curEnd){jumps++;curEnd=farthest;}}return jumps;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "merge-sorted-array",
    "title": "Merge Sorted Array",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/merge-sorted-array/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 in-place as one sorted array. nums1 has size m+n where first m elements are valid and last n are 0.",
    "examples": [
      {
        "input": "nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3",
        "output": "[1,2,2,3,5,6]",
        "explanation": ""
      },
      {
        "input": "nums1=[1], m=1, nums2=[], n=0",
        "output": "[1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "nums1.length==m+n",
      "nums2.length==n",
      "0≤m,n≤200"
    ],
    "hints": [
      "Merge from the back to avoid overwriting.",
      "Use three pointers: i=m-1, j=n-1, k=m+n-1. Place larger element at k and move accordingly."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - merge\n */\nfunction merge(nums1, m, nums2, n) {\n  // Your solution here\n}",
      "python": "def merge(nums1, m, nums2, n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void merge(nums1, m, nums2, n) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void merge(nums1, m, nums2, n) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function merge(nums1, m, nums2, n) {\n  let i=m-1,j=n-1,k=m+n-1;while(j>=0){if(i>=0&&nums1[i]>nums2[j])nums1[k--]=nums1[i--];else nums1[k--]=nums2[j--];}\n}",
    "timeComplexity": "O(m+n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "remove-duplicates-from-sorted-array",
    "title": "Remove Duplicates from Sorted Array",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 53,
    "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given a sorted array nums in non-decreasing order, remove duplicates in-place so each unique element appears only once. Return k, the number of unique elements.",
    "examples": [
      {
        "input": "nums=[1,1,2]",
        "output": "2, nums=[1,2,_]",
        "explanation": ""
      },
      {
        "input": "nums=[0,0,1,1,1,2,2,3,3,4]",
        "output": "5, nums=[0,1,2,3,4,_,_,_,_,_]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤3*10^4",
      "nums is sorted in non-decreasing order"
    ],
    "hints": [
      "Use slow pointer k starting at 1. Fast pointer i iterates from 1.",
      "If nums[i] != nums[i-1], place it at nums[k] and increment k."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - removeDuplicates\n */\nfunction removeDuplicates(nums) {\n  // Your solution here\n}",
      "python": "def removeDuplicates(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int removeDuplicates(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int removeDuplicates(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function removeDuplicates(nums) {\n  let k=1;for(let i=1;i<nums.length;i++)if(nums[i]!==nums[i-1])nums[k++]=nums[i];return k;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "move-zeroes",
    "title": "Move Zeroes",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 61,
    "leetcodeLink": "https://leetcode.com/problems/move-zeroes/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given an integer array nums, move all 0s to the end while maintaining the relative order of non-zero elements. Must do this in-place without making a copy.",
    "examples": [
      {
        "input": "nums=[0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": ""
      },
      {
        "input": "nums=[0]",
        "output": "[0]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^4",
      "-2^31≤nums[i]≤2^31-1"
    ],
    "hints": [
      "Use slow pointer for the next non-zero position.",
      "Iterate with fast pointer; when non-zero found, place at slow pointer position."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - moveZeroes\n */\nfunction moveZeroes(nums) {\n  // Your solution here\n}",
      "python": "def moveZeroes(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void moveZeroes(nums) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void moveZeroes(nums) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function moveZeroes(nums) {\n  let k=0;for(const n of nums)if(n!==0)nums[k++]=n;while(k<nums.length)nums[k++]=0;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "find-the-duplicate-number",
    "title": "Find the Duplicate Number",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "fast-slow-pointers",
    "acceptance": 58,
    "leetcodeLink": "https://leetcode.com/problems/find-the-duplicate-number/",
    "tags": [
      "Arrays",
      "fast-slow-pointers"
    ],
    "description": "Given an array of n+1 integers where each integer is between 1 and n, prove that at least one duplicate exists. Find one duplicate without modifying the array and using O(1) extra space.",
    "examples": [
      {
        "input": "nums=[1,3,4,2,2]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "nums=[3,1,3,4,2]",
        "output": "3",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤10^5",
      "nums.length==n+1",
      "Each nums[i] in range [1,n]"
    ],
    "hints": [
      "Treat the array as a linked list (index → value). Duplicate creates a cycle (Floyd's algorithm).",
      "Find cycle with slow/fast, then find entrance with two slow pointers."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findDuplicate\n */\nfunction findDuplicate(nums) {\n  // Your solution here\n}",
      "python": "def findDuplicate(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findDuplicate(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findDuplicate(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findDuplicate(nums) {\n  let slow=nums[0],fast=nums[0];do{slow=nums[slow];fast=nums[nums[fast]];}while(slow!==fast);slow=nums[0];while(slow!==fast){slow=nums[slow];fast=nums[fast];}return slow;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "first-missing-positive",
    "title": "First Missing Positive",
    "difficulty": "Hard",
    "ds": "Arrays",
    "pattern": "hash-map",
    "acceptance": 37,
    "leetcodeLink": "https://leetcode.com/problems/first-missing-positive/",
    "tags": [
      "Arrays",
      "hash-map"
    ],
    "description": "Given an unsorted integer array nums, return the smallest missing positive integer. Must run in O(n) time and use O(1) auxiliary space.",
    "examples": [
      {
        "input": "nums=[1,2,0]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "nums=[3,4,-1,1]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "nums=[7,8,9,11,12]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^5",
      "-2^31≤nums[i]≤2^31-1"
    ],
    "hints": [
      "Place each number in its correct index position (nums[i] at nums[i]-1).",
      "After rearranging, the first index where nums[i]!=i+1 gives the answer."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - firstMissingPositive\n */\nfunction firstMissingPositive(nums) {\n  // Your solution here\n}",
      "python": "def firstMissingPositive(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int firstMissingPositive(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int firstMissingPositive(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function firstMissingPositive(nums) {\n  const n=nums.length;for(let i=0;i<n;i++)while(nums[i]>0&&nums[i]<=n&&nums[nums[i]-1]!==nums[i]){const t=nums[i]-1;[nums[i],nums[t]]=[nums[t],nums[i]];}for(let i=0;i<n;i++)if(nums[i]!==i+1)return i+1;return n+1;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "subarray-sum-equals-k",
    "title": "Subarray Sum Equals K",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "prefix-sum",
    "acceptance": 44,
    "leetcodeLink": "https://leetcode.com/problems/subarray-sum-equals-k/",
    "tags": [
      "Arrays",
      "prefix-sum"
    ],
    "description": "Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals k.",
    "examples": [
      {
        "input": "nums=[1,1,1], k=2",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "nums=[1,2,3], k=3",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤2*10^4",
      "-1000≤nums[i]≤1000",
      "-10^7≤k≤10^7"
    ],
    "hints": [
      "Use prefix sums and a hash map storing count of each prefix sum.",
      "For each prefix sum, check if (prefixSum - k) exists. That count gives valid subarrays ending here."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - subarraySum\n */\nfunction subarraySum(nums, k) {\n  // Your solution here\n}",
      "python": "def subarraySum(nums, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int subarraySum(nums, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int subarraySum(nums, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function subarraySum(nums, k) {\n  const map=new Map([[0,1]]);let sum=0,count=0;for(const n of nums){sum+=n;count+=map.get(sum-k)||0;map.set(sum,(map.get(sum)||0)+1);}return count;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "4sum",
    "title": "4Sum",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 36,
    "leetcodeLink": "https://leetcode.com/problems/4sum/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given an integer array nums and an integer target, return all unique quadruplets [a,b,c,d] such that a+b+c+d==target.",
    "examples": [
      {
        "input": "nums=[1,0,-1,0,-2,2], target=0",
        "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]",
        "explanation": ""
      },
      {
        "input": "nums=[2,2,2,2,2], target=8",
        "output": "[[2,2,2,2]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤200",
      "-10^9≤nums[i]≤10^9"
    ],
    "hints": [
      "Sort the array. Use two nested loops to fix first two elements.",
      "For remaining two, use two pointers. Skip duplicates at each level."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - fourSum\n */\nfunction fourSum(nums, target) {\n  // Your solution here\n}",
      "python": "def fourSum(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] fourSum(nums, target) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> fourSum(nums, target) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function fourSum(nums, target) {\n  nums.sort((a,b)=>a-b);const res=[];for(let i=0;i<nums.length-3;i++){if(i>0&&nums[i]===nums[i-1])continue;for(let j=i+1;j<nums.length-2;j++){if(j>i+1&&nums[j]===nums[j-1])continue;let l=j+1,r=nums.length-1;while(l<r){const s=nums[i]+nums[j]+nums[l]+nums[r];if(s===target){res.push([nums[i],nums[j],nums[l],nums[r]]);while(l<r&&nums[l]===nums[l+1])l++;while(l<r&&nums[r]===nums[r-1])r--;l++;r--;}else if(s<target)l++;else r--;}}}return res;\n}",
    "timeComplexity": "O(n³)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "unique-paths",
    "title": "Unique Paths",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 63,
    "leetcodeLink": "https://leetcode.com/problems/unique-paths/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "A robot is on an m×n grid starting at top-left, trying to reach bottom-right. The robot can only move right or down. Return the number of unique paths.",
    "examples": [
      {
        "input": "m=3, n=7",
        "output": "28",
        "explanation": ""
      },
      {
        "input": "m=3, n=2",
        "output": "3",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤m,n≤100"
    ],
    "hints": [
      "DP: dp[i][j] = dp[i-1][j] + dp[i][j-1].",
      "First row and column are all 1s. Can optimize to O(n) space using 1D dp array."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - uniquePaths\n */\nfunction uniquePaths(m, n) {\n  // Your solution here\n}",
      "python": "def uniquePaths(m, n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int uniquePaths(m, n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int uniquePaths(m, n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function uniquePaths(m, n) {\n  const dp=new Array(n).fill(1);for(let i=1;i<m;i++)for(let j=1;j<n;j++)dp[j]+=dp[j-1];return dp[n-1];\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "rotate-array",
    "title": "Rotate Array",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 40,
    "leetcodeLink": "https://leetcode.com/problems/rotate-array/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given an integer array nums, rotate the array to the right by k steps in-place.",
    "examples": [
      {
        "input": "nums=[1,2,3,4,5,6,7], k=3",
        "output": "[5,6,7,1,2,3,4]",
        "explanation": ""
      },
      {
        "input": "nums=[-1,-100,3,99], k=2",
        "output": "[3,99,-1,-100]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^5",
      "0≤k≤10^5"
    ],
    "hints": [
      "k = k % n to handle k > n.",
      "Reverse entire array, then reverse first k, then reverse rest k..n."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - rotate\n */\nfunction rotate(nums, k) {\n  // Your solution here\n}",
      "python": "def rotate(nums, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void rotate(nums, k) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void rotate(nums, k) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function rotate(nums, k) {\n  const n=nums.length;k%=n;function rev(l,r){while(l<r){[nums[l],nums[r]]=[nums[r],nums[l]];l++;r--;}}rev(0,n-1);rev(0,k-1);rev(k,n-1);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "missing-number",
    "title": "Missing Number",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 63,
    "leetcodeLink": "https://leetcode.com/problems/missing-number/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given an array nums containing n distinct numbers in the range [0, n], return the only number missing from the range.",
    "examples": [
      {
        "input": "nums=[3,0,1]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "nums=[0,1]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "nums=[9,6,4,2,3,5,7,0,1]",
        "output": "8",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==nums.length",
      "1≤n≤10^4",
      "0≤nums[i]≤n",
      "All nums are distinct"
    ],
    "hints": [
      "Expected sum = n*(n+1)/2. Missing = expected - actual sum.",
      "Alternatively XOR all indices and values: duplicates cancel out leaving the missing number."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - missingNumber\n */\nfunction missingNumber(nums) {\n  // Your solution here\n}",
      "python": "def missingNumber(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int missingNumber(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int missingNumber(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function missingNumber(nums) {\n  const n=nums.length;return n*(n+1)/2-nums.reduce((a,b)=>a+b,0);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "single-number",
    "title": "Single Number",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 70,
    "leetcodeLink": "https://leetcode.com/problems/single-number/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given a non-empty array of integers where every element appears twice except for one, find that single one. Must run in O(n) with O(1) extra space.",
    "examples": [
      {
        "input": "nums=[2,2,1]",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "nums=[4,1,2,1,2]",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤3*10^4",
      "-3*10^4≤nums[i]≤3*10^4",
      "Exactly one element appears once"
    ],
    "hints": [
      "XOR: a^a=0 and a^0=a. XOR all elements; pairs cancel out, leaving the single."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - singleNumber\n */\nfunction singleNumber(nums) {\n  // Your solution here\n}",
      "python": "def singleNumber(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int singleNumber(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int singleNumber(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function singleNumber(nums) {\n  return nums.reduce((a,b)=>a^b,0);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "pascal-s-triangle",
    "title": "Pascal's Triangle",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 72,
    "leetcodeLink": "https://leetcode.com/problems/pascal-s-triangle/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an integer numRows, return the first numRows of Pascal's triangle. In Pascal's triangle, each number is the sum of the two numbers directly above it.",
    "examples": [
      {
        "input": "numRows=5",
        "output": "[[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]",
        "explanation": ""
      },
      {
        "input": "numRows=1",
        "output": "[[1]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤numRows≤30"
    ],
    "hints": [
      "Build row by row. Each row starts and ends with 1.",
      "row[j] = prev_row[j-1] + prev_row[j] for interior elements."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - generate\n */\nfunction generate(numRows) {\n  // Your solution here\n}",
      "python": "def generate(numRows):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] generate(numRows) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> generate(numRows) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function generate(numRows) {\n  const res=[];for(let i=0;i<numRows;i++){const row=new Array(i+1).fill(1);for(let j=1;j<i;j++)row[j]=res[i-1][j-1]+res[i-1][j];res.push(row);}return res;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n²)",
    "testCases": []
  },
  {
    "id": "search-a-2d-matrix",
    "title": "Search a 2D Matrix",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 49,
    "leetcodeLink": "https://leetcode.com/problems/search-a-2d-matrix/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Write an efficient algorithm to search for a value target in an m×n integer matrix where each row is sorted and the first integer of each row is greater than the last of the previous row.",
    "examples": [
      {
        "input": "matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=13",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==matrix.length",
      "n==matrix[i].length",
      "1≤m,n≤100"
    ],
    "hints": [
      "Treat the 2D matrix as a flattened 1D sorted array. Binary search on indices 0 to m*n-1.",
      "Convert mid index: row=mid/n, col=mid%n."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - searchMatrix\n */\nfunction searchMatrix(matrix, target) {\n  // Your solution here\n}",
      "python": "def searchMatrix(matrix, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean searchMatrix(matrix, target) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool searchMatrix(matrix, target) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function searchMatrix(matrix, target) {\n  const m=matrix.length,n=matrix[0].length;let l=0,r=m*n-1;while(l<=r){const mid=l+r>>1,val=matrix[mid/n|0][mid%n];if(val===target)return true;else if(val<target)l=mid+1;else r=mid-1;}return false;\n}",
    "timeComplexity": "O(log(m×n))",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "maximum-average-subarray-i",
    "title": "Maximum Average Subarray I",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "sliding-window",
    "acceptance": 43,
    "leetcodeLink": "https://leetcode.com/problems/maximum-average-subarray-i/",
    "tags": [
      "Arrays",
      "sliding-window"
    ],
    "description": "Given an integer array nums and integer k, find a contiguous subarray of length k that has the maximum average value and return this value.",
    "examples": [
      {
        "input": "nums=[1,12,-5,-6,50,3], k=4",
        "output": "12.75",
        "explanation": ""
      },
      {
        "input": "nums=[5], k=1",
        "output": "5.0",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==nums.length",
      "1≤k≤n≤10^5",
      "-10^4≤nums[i]≤10^4"
    ],
    "hints": [
      "Compute sum of first k elements. Then slide: add next, remove first, track max."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findMaxAverage\n */\nfunction findMaxAverage(nums, k) {\n  // Your solution here\n}",
      "python": "def findMaxAverage(nums, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findMaxAverage(nums, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findMaxAverage(nums, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findMaxAverage(nums, k) {\n  let sum=nums.slice(0,k).reduce((a,b)=>a+b,0),max=sum;for(let i=k;i<nums.length;i++){sum+=nums[i]-nums[i-k];max=Math.max(max,sum);}return max/k;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "squares-of-a-sorted-array",
    "title": "Squares of a Sorted Array",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 72,
    "leetcodeLink": "https://leetcode.com/problems/squares-of-a-sorted-array/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.",
    "examples": [
      {
        "input": "nums=[-4,-1,0,3,10]",
        "output": "[0,1,9,16,100]",
        "explanation": ""
      },
      {
        "input": "nums=[-7,-3,2,3,11]",
        "output": "[4,9,9,49,121]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^4",
      "-10^4≤nums[i]≤10^4",
      "nums is sorted"
    ],
    "hints": [
      "Two pointers from both ends. Largest squares are at the extremes.",
      "Fill result array from the back, placing the larger square and moving its pointer inward."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - sortedSquares\n */\nfunction sortedSquares(nums) {\n  // Your solution here\n}",
      "python": "def sortedSquares(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] sortedSquares(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> sortedSquares(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function sortedSquares(nums) {\n  const n=nums.length,res=new Array(n);let l=0,r=n-1,k=n-1;while(l<=r){const ls=nums[l]*nums[l],rs=nums[r]*nums[r];if(ls>rs){res[k--]=ls;l++;}else{res[k--]=rs;r--;}}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "valid-anagram",
    "title": "Valid Anagram",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "hash-map",
    "acceptance": 62,
    "leetcodeLink": "https://leetcode.com/problems/valid-anagram/",
    "tags": [
      "Strings",
      "hash-map"
    ],
    "description": "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An anagram uses all original letters exactly once.",
    "examples": [
      {
        "input": "s=\"anagram\", t=\"nagaram\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"rat\", t=\"car\"",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length,t.length≤5*10^4",
      "s and t consist of lowercase English letters"
    ],
    "hints": [
      "If lengths differ, return false. Count char frequencies in s, decrement for t.",
      "Use an array of 26 for lowercase letters. Return true if all counts are 0."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isAnagram\n */\nfunction isAnagram(s, t) {\n  // Your solution here\n}",
      "python": "def isAnagram(s, t):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isAnagram(s, t) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isAnagram(s, t) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isAnagram(s, t) {\n  if(s.length!==t.length)return false;const c=new Array(26).fill(0);for(let i=0;i<s.length;i++){c[s.charCodeAt(i)-97]++;c[t.charCodeAt(i)-97]--;}return c.every(x=>x===0);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "valid-palindrome",
    "title": "Valid Palindrome",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "two-pointers",
    "acceptance": 43,
    "leetcodeLink": "https://leetcode.com/problems/valid-palindrome/",
    "tags": [
      "Strings",
      "two-pointers"
    ],
    "description": "A phrase is a palindrome if after converting to lowercase and removing non-alphanumeric characters, it reads the same forward and backward. Given string s, return true if it is a palindrome.",
    "examples": [
      {
        "input": "s=\"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"race a car\"",
        "output": "false",
        "explanation": ""
      },
      {
        "input": "s=\" \"",
        "output": "true",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤2*10^5",
      "s consists only of printable ASCII characters"
    ],
    "hints": [
      "Use two pointers from both ends, skipping non-alphanumeric characters.",
      "Compare characters case-insensitively."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isPalindrome\n */\nfunction isPalindrome(s) {\n  // Your solution here\n}",
      "python": "def isPalindrome(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isPalindrome(s) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(s) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isPalindrome(s) {\n  let l=0,r=s.length-1;while(l<r){while(l<r&&!/[a-zA-Z0-9]/.test(s[l]))l++;while(l<r&&!/[a-zA-Z0-9]/.test(s[r]))r--;if(s[l].toLowerCase()!==s[r].toLowerCase())return false;l++;r--;}return true;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "longest-substring-without-repeating-characters",
    "title": "Longest Substring Without Repeating Characters",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "sliding-window",
    "acceptance": 33,
    "leetcodeLink": "https://leetcode.com/problems/longest-substring-without-repeating-characters/",
    "tags": [
      "Strings",
      "sliding-window"
    ],
    "description": "Given a string s, find the length of the longest substring without repeating characters.",
    "examples": [
      {
        "input": "s=\"abcabcbb\"",
        "output": "3",
        "explanation": "abc"
      },
      {
        "input": "s=\"bbbbb\"",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "s=\"pwwkew\"",
        "output": "3",
        "explanation": "wke"
      }
    ],
    "constraints": [
      "0≤s.length≤5*10^4",
      "s consists of English letters, digits, symbols and spaces"
    ],
    "hints": [
      "Sliding window with a map storing last seen index of each character.",
      "When duplicate found, move left pointer to max(left, lastSeen+1)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - lengthOfLongestSubstring\n */\nfunction lengthOfLongestSubstring(s) {\n  // Your solution here\n}",
      "python": "def lengthOfLongestSubstring(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int lengthOfLongestSubstring(s) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int lengthOfLongestSubstring(s) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function lengthOfLongestSubstring(s) {\n  const m=new Map();let l=0,max=0;for(let r=0;r<s.length;r++){if(m.has(s[r])&&m.get(s[r])>=l)l=m.get(s[r])+1;m.set(s[r],r);max=Math.max(max,r-l+1);}return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(min(m,n))",
    "testCases": []
  },
  {
    "id": "longest-repeating-character-replacement",
    "title": "Longest Repeating Character Replacement",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "sliding-window",
    "acceptance": 51,
    "leetcodeLink": "https://leetcode.com/problems/longest-repeating-character-replacement/",
    "tags": [
      "Strings",
      "sliding-window"
    ],
    "description": "Given a string s and integer k, you can replace any k characters to make the longest substring with all same letters. Return the length of the longest such substring.",
    "examples": [
      {
        "input": "s=\"ABAB\", k=2",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "s=\"AABABBA\", k=1",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤10^5",
      "s consists of uppercase English letters",
      "0≤k≤s.length"
    ],
    "hints": [
      "Sliding window: if (window_size - max_freq_count) > k, shrink window from left.",
      "Track frequency of each character in current window."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - characterReplacement\n */\nfunction characterReplacement(s, k) {\n  // Your solution here\n}",
      "python": "def characterReplacement(s, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int characterReplacement(s, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int characterReplacement(s, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function characterReplacement(s, k) {\n  const cnt=new Array(26).fill(0);let l=0,maxF=0,res=0;for(let r=0;r<s.length;r++){maxF=Math.max(maxF,++cnt[s.charCodeAt(r)-65]);while(r-l+1-maxF>k){cnt[s.charCodeAt(l)-65]--;l++;}res=Math.max(res,r-l+1);}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "group-anagrams",
    "title": "Group Anagrams",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "hash-map",
    "acceptance": 67,
    "leetcodeLink": "https://leetcode.com/problems/group-anagrams/",
    "tags": [
      "Strings",
      "hash-map"
    ],
    "description": "Given an array of strings strs, group the anagrams together. You can return the answer in any order.",
    "examples": [
      {
        "input": "strs=[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "explanation": ""
      },
      {
        "input": "strs=[\"\"]",
        "output": "[[\"\"]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤strs.length≤10^4",
      "0≤strs[i].length≤100",
      "strs[i] consists of lowercase letters"
    ],
    "hints": [
      "Anagrams have the same sorted form. Use sorted string as hash map key.",
      "Map<sorted_string, list_of_anagrams>. Return all map values."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[][]} - groupAnagrams\n */\nfunction groupAnagrams(strs) {\n  // Your solution here\n}",
      "python": "def groupAnagrams(strs):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public List<List<String>> groupAnagrams(strs) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto groupAnagrams(strs) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function groupAnagrams(strs) {\n  const m=new Map();for(const s of strs){const k=s.split(\"\").sort().join(\"\");if(!m.has(k))m.set(k,[]);m.get(k).push(s);}return Array.from(m.values());\n}",
    "timeComplexity": "O(n·k log k)",
    "spaceComplexity": "O(n·k)",
    "testCases": []
  },
  {
    "id": "longest-palindromic-substring",
    "title": "Longest Palindromic Substring",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "two-pointers",
    "acceptance": 32,
    "leetcodeLink": "https://leetcode.com/problems/longest-palindromic-substring/",
    "tags": [
      "Strings",
      "two-pointers"
    ],
    "description": "Given a string s, return the longest palindromic substring in s.",
    "examples": [
      {
        "input": "s=\"babad\"",
        "output": "\"bab\" or \"aba\"",
        "explanation": ""
      },
      {
        "input": "s=\"cbbd\"",
        "output": "\"bb\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤1000",
      "s consists of digits and English letters"
    ],
    "hints": [
      "Expand from center for each character (and each pair) as potential palindrome center.",
      "Track the start and max length of the longest palindrome found."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - longestPalindrome\n */\nfunction longestPalindrome(s) {\n  // Your solution here\n}",
      "python": "def longestPalindrome(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String longestPalindrome(s) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string longestPalindrome(s) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function longestPalindrome(s) {\n  let start=0,maxLen=1;function expand(l,r){while(l>=0&&r<s.length&&s[l]===s[r]){if(r-l+1>maxLen){maxLen=r-l+1;start=l;}l--;r++;}}for(let i=0;i<s.length;i++){expand(i,i);expand(i,i+1);}return s.slice(start,start+maxLen);\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "minimum-window-substring",
    "title": "Minimum Window Substring",
    "difficulty": "Hard",
    "ds": "Strings",
    "pattern": "sliding-window",
    "acceptance": 41,
    "leetcodeLink": "https://leetcode.com/problems/minimum-window-substring/",
    "tags": [
      "Strings",
      "sliding-window"
    ],
    "description": "Given strings s and t, return the minimum window substring of s that contains all characters of t. If no such window exists, return empty string.",
    "examples": [
      {
        "input": "s=\"ADOBECODEBANC\", t=\"ABC\"",
        "output": "\"BANC\"",
        "explanation": ""
      },
      {
        "input": "s=\"a\", t=\"a\"",
        "output": "\"a\"",
        "explanation": ""
      },
      {
        "input": "s=\"a\", t=\"aa\"",
        "output": "\"\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length,t.length≤10^5",
      "s and t consist of uppercase and lowercase English letters"
    ],
    "hints": [
      "Use sliding window. Expand right until all t chars covered. Then shrink left to minimize window.",
      "Track count of needed chars and how many have been satisfied."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - minWindow\n */\nfunction minWindow(s, t) {\n  // Your solution here\n}",
      "python": "def minWindow(s, t):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String minWindow(s, t) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string minWindow(s, t) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function minWindow(s, t) {\n  if(!s||!t||s.length<t.length)return\"\";const need=new Map();for(const c of t)need.set(c,(need.get(c)||0)+1);let have=0,want=need.size,l=0,min=Infinity,start=0;for(let r=0;r<s.length;r++){const c=s[r];if(need.has(c)){need.set(c,need.get(c)-1);if(need.get(c)===0)have++;}while(have===want){if(r-l+1<min){min=r-l+1;start=l;}const lc=s[l];if(need.has(lc)){need.set(lc,need.get(lc)+1);if(need.get(lc)>0)have--;}l++;};}return min===Infinity?\"\":s.slice(start,start+min);\n}",
    "timeComplexity": "O(s+t)",
    "spaceComplexity": "O(t)",
    "testCases": []
  },
  {
    "id": "find-all-anagrams-in-a-string",
    "title": "Find All Anagrams in a String",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "sliding-window",
    "acceptance": 47,
    "leetcodeLink": "https://leetcode.com/problems/find-all-anagrams-in-a-string/",
    "tags": [
      "Strings",
      "sliding-window"
    ],
    "description": "Given two strings s and p, return an array of all the start indices of p's anagrams in s. An anagram is a permutation of a string.",
    "examples": [
      {
        "input": "s=\"cbaebabacd\", p=\"abc\"",
        "output": "[0,6]",
        "explanation": ""
      },
      {
        "input": "s=\"abab\", p=\"ab\"",
        "output": "[0,1,2]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length,p.length≤3*10^4",
      "s and p consist of lowercase English letters"
    ],
    "hints": [
      "Use sliding window of size p.length. Compare character frequencies.",
      "Use two frequency arrays of size 26. Slide and compare."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - findAnagrams\n */\nfunction findAnagrams(s, p) {\n  // Your solution here\n}",
      "python": "def findAnagrams(s, p):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] findAnagrams(s, p) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> findAnagrams(s, p) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function findAnagrams(s, p) {\n  const res=[],pc=new Array(26).fill(0),wc=new Array(26).fill(0);for(const c of p)pc[c.charCodeAt(0)-97]++;for(let r=0;r<s.length;r++){wc[s.charCodeAt(r)-97]++;if(r>=p.length)wc[s.charCodeAt(r-p.length)-97]--;if(wc.join()===pc.join())res.push(r-p.length+1);}return res;\n}",
    "timeComplexity": "O(s)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "permutation-in-string",
    "title": "Permutation in String",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "sliding-window",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/permutation-in-string/",
    "tags": [
      "Strings",
      "sliding-window"
    ],
    "description": "Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise. In other words, return true if one of s1's permutations is a substring of s2.",
    "examples": [
      {
        "input": "s1=\"ab\", s2=\"eidbaooo\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s1=\"ab\", s2=\"eidboaoo\"",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s1.length,s2.length≤10^4",
      "s1 and s2 consist of lowercase English letters"
    ],
    "hints": [
      "Sliding window of size s1.length over s2. Compare frequency arrays.",
      "Use 26-element arrays and compare them after each slide."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - checkInclusion\n */\nfunction checkInclusion(s1, s2) {\n  // Your solution here\n}",
      "python": "def checkInclusion(s1, s2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean checkInclusion(s1, s2) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool checkInclusion(s1, s2) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function checkInclusion(s1, s2) {\n  if(s1.length>s2.length)return false;const c1=new Array(26).fill(0),c2=new Array(26).fill(0);for(let i=0;i<s1.length;i++){c1[s1.charCodeAt(i)-97]++;c2[s2.charCodeAt(i)-97]++;}if(c1.join()===c2.join())return true;for(let i=s1.length;i<s2.length;i++){c2[s2.charCodeAt(i)-97]++;c2[s2.charCodeAt(i-s1.length)-97]--;if(c1.join()===c2.join())return true;}return false;\n}",
    "timeComplexity": "O(s2)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "longest-common-prefix",
    "title": "Longest Common Prefix",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "sorting",
    "acceptance": 41,
    "leetcodeLink": "https://leetcode.com/problems/longest-common-prefix/",
    "tags": [
      "Strings",
      "sorting"
    ],
    "description": "Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string.",
    "examples": [
      {
        "input": "strs=[\"flower\",\"flow\",\"flight\"]",
        "output": "\"fl\"",
        "explanation": ""
      },
      {
        "input": "strs=[\"dog\",\"racecar\",\"car\"]",
        "output": "\"\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤strs.length≤200",
      "0≤strs[i].length≤200",
      "strs[i] consists of only lowercase English letters"
    ],
    "hints": [
      "Sort the array. Compare only first and last strings lexicographically.",
      "The common prefix of first and last is the LCP of all strings."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - longestCommonPrefix\n */\nfunction longestCommonPrefix(strs) {\n  // Your solution here\n}",
      "python": "def longestCommonPrefix(strs):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String longestCommonPrefix(strs) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string longestCommonPrefix(strs) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function longestCommonPrefix(strs) {\n  strs.sort();const a=strs[0],b=strs[strs.length-1];let i=0;while(i<a.length&&a[i]===b[i])i++;return a.slice(0,i);\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "reverse-words-in-a-string",
    "title": "Reverse Words in a String",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "two-pointers",
    "acceptance": 30,
    "leetcodeLink": "https://leetcode.com/problems/reverse-words-in-a-string/",
    "tags": [
      "Strings",
      "two-pointers"
    ],
    "description": "Given an input string s, reverse the order of the words. A word is a sequence of non-space characters. Words are separated by at least one space. Return the string where the words are in reverse order joined by a single space.",
    "examples": [
      {
        "input": "s=\"the sky is blue\"",
        "output": "\"blue is sky the\"",
        "explanation": ""
      },
      {
        "input": "s=\"  hello world  \"",
        "output": "\"world hello\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤10^4",
      "s contains English letters, digits, and spaces"
    ],
    "hints": [
      "Split by spaces, filter empty strings, reverse, and join.",
      "Handle multiple spaces and leading/trailing spaces."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - reverseWords\n */\nfunction reverseWords(s) {\n  // Your solution here\n}",
      "python": "def reverseWords(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String reverseWords(s) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string reverseWords(s) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function reverseWords(s) {\n  return s.trim().split(/s+/).reverse().join(\" \");\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "decode-ways",
    "title": "Decode Ways",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "dp",
    "acceptance": 32,
    "leetcodeLink": "https://leetcode.com/problems/decode-ways/",
    "tags": [
      "Strings",
      "dp"
    ],
    "description": "A message is encoded by mapping letters A-Z to 1-26. Given a string s of digits, return the number of ways to decode it.",
    "examples": [
      {
        "input": "s=\"12\"",
        "output": "2",
        "explanation": "AB(1,2) or L(12)"
      },
      {
        "input": "s=\"226\"",
        "output": "3",
        "explanation": "BZ,VF,BBF"
      },
      {
        "input": "s=\"06\"",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤100",
      "s contains only digits",
      "s may contain leading zeros"
    ],
    "hints": [
      "dp[i] = ways to decode s[0..i-1]. dp[0]=1, dp[1]=0 if s[0]==0 else 1.",
      "If s[i-1]!=\"0\": dp[i]+=dp[i-1]. If \"10\"<=s[i-2..i-1]<=\"26\": dp[i]+=dp[i-2]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - numDecodings\n */\nfunction numDecodings(s) {\n  // Your solution here\n}",
      "python": "def numDecodings(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int numDecodings(s) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numDecodings(s) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function numDecodings(s) {\n  if(s[0]===\"0\")return 0;let prev2=1,prev1=1;for(let i=1;i<s.length;i++){let cur=0;if(s[i]!==\"0\")cur+=prev1;const two=parseInt(s.slice(i-1,i+1));if(two>=10&&two<=26)cur+=prev2;prev2=prev1;prev1=cur;}return prev1;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "is-subsequence",
    "title": "Is Subsequence",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "two-pointers",
    "acceptance": 47,
    "leetcodeLink": "https://leetcode.com/problems/is-subsequence/",
    "tags": [
      "Strings",
      "two-pointers"
    ],
    "description": "Given strings s and t, return true if s is a subsequence of t, or false otherwise. A subsequence maintains relative order but need not be contiguous.",
    "examples": [
      {
        "input": "s=\"ace\", t=\"abcde\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"aec\", t=\"abcde\"",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤s.length≤100",
      "0≤t.length≤10^4",
      "s and t consist only of lowercase English letters"
    ],
    "hints": [
      "Use a pointer for s. Iterate t; when s[pointer] matches, advance pointer.",
      "If all of s is matched, return true."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isSubsequence\n */\nfunction isSubsequence(s, t) {\n  // Your solution here\n}",
      "python": "def isSubsequence(s, t):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isSubsequence(s, t) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isSubsequence(s, t) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isSubsequence(s, t) {\n  let i=0;for(const c of t)if(i<s.length&&c===s[i])i++;return i===s.length;\n}",
    "timeComplexity": "O(t)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "word-break",
    "title": "Word Break",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "dp",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/word-break/",
    "tags": [
      "Strings",
      "dp"
    ],
    "description": "Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.",
    "examples": [
      {
        "input": "s=\"leetcode\", wordDict=[\"leet\",\"code\"]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"applepenapple\", wordDict=[\"apple\",\"pen\"]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"catsandog\", wordDict=[\"cats\",\"dog\",\"sand\",\"and\",\"cat\"]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤300",
      "1≤wordDict.length≤1000",
      "1≤wordDict[i].length≤20"
    ],
    "hints": [
      "dp[i] = true if s[0..i-1] can be segmented. dp[0]=true.",
      "For each i, check all j<i: if dp[j] and s[j..i-1] in dictionary, dp[i]=true."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - wordBreak\n */\nfunction wordBreak(s, wordDict) {\n  // Your solution here\n}",
      "python": "def wordBreak(s, wordDict):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean wordBreak(s, wordDict) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool wordBreak(s, wordDict) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function wordBreak(s, wordDict) {\n  const set=new Set(wordDict),dp=new Array(s.length+1).fill(false);dp[0]=true;for(let i=1;i<=s.length;i++)for(let j=0;j<i;j++)if(dp[j]&&set.has(s.slice(j,i))){dp[i]=true;break;}return dp[s.length];\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "count-palindromic-substrings",
    "title": "Palindromic Substrings",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "two-pointers",
    "acceptance": 66,
    "leetcodeLink": "https://leetcode.com/problems/count-palindromic-substrings/",
    "tags": [
      "Strings",
      "two-pointers"
    ],
    "description": "Given a string s, return the number of palindromic substrings in it. A substring is a contiguous sequence of characters.",
    "examples": [
      {
        "input": "s=\"abc\"",
        "output": "3",
        "explanation": "a,b,c"
      },
      {
        "input": "s=\"aaa\"",
        "output": "6",
        "explanation": "a,a,a,aa,aa,aaa"
      }
    ],
    "constraints": [
      "1≤s.length≤1000",
      "s consists of lowercase English letters"
    ],
    "hints": [
      "Expand around center for each i (odd length) and each i,i+1 (even length) pair.",
      "Count each valid expansion as a palindrome."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - countSubstrings\n */\nfunction countSubstrings(s) {\n  // Your solution here\n}",
      "python": "def countSubstrings(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int countSubstrings(s) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int countSubstrings(s) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function countSubstrings(s) {\n  let count=0;function expand(l,r){while(l>=0&&r<s.length&&s[l]===s[r]){count++;l--;r++;}}for(let i=0;i<s.length;i++){expand(i,i);expand(i,i+1);}return count;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "string-to-integer-atoi",
    "title": "String to Integer (atoi)",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "parsing",
    "acceptance": 17,
    "leetcodeLink": "https://leetcode.com/problems/string-to-integer-atoi/",
    "tags": [
      "Strings",
      "parsing"
    ],
    "description": "Implement atoi which converts a string to an integer. Ignore leading whitespace. Read optional sign. Read digits until non-digit. Clamp to [-2^31, 2^31-1].",
    "examples": [
      {
        "input": "s=\"42\"",
        "output": "42",
        "explanation": ""
      },
      {
        "input": "s=\"   -42\"",
        "output": "-42",
        "explanation": ""
      },
      {
        "input": "s=\"4193 with words\"",
        "output": "4193",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤s.length≤200",
      "s consists of English letters, digits, spaces, +, -, ."
    ],
    "hints": [
      "Trim leading whitespace. Check for sign. Read contiguous digits.",
      "Clamp result to 32-bit integer range."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - myAtoi\n */\nfunction myAtoi(s) {\n  // Your solution here\n}",
      "python": "def myAtoi(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int myAtoi(s) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int myAtoi(s) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function myAtoi(s) {\n  s=s.trimStart();let i=0,sign=1,res=0;if(s[i]===\"-\"){sign=-1;i++;}else if(s[i]===\"+\")i++;while(i<s.length&&s[i]>=\"0\"&&s[i]<=\"9\"){res=res*10+(s[i++].charCodeAt(0)-48);if(res*sign>2147483647)return 2147483647;if(res*sign<-2147483648)return-2147483648;}return res*sign;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "add-binary",
    "title": "Add Binary",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "math",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/add-binary/",
    "tags": [
      "Strings",
      "math"
    ],
    "description": "Given two binary strings a and b, return their sum as a binary string.",
    "examples": [
      {
        "input": "a=\"11\", b=\"1\"",
        "output": "\"100\"",
        "explanation": ""
      },
      {
        "input": "a=\"1010\", b=\"1011\"",
        "output": "\"10101\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤a.length,b.length≤10^4",
      "a and b consist only of 0 or 1",
      "Neither string has leading zeros except \"0\" itself"
    ],
    "hints": [
      "Work from right to left like normal addition with carry.",
      "Use carry variable. Append 0 or 1 based on sum%2, carry=sum/2."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - addBinary\n */\nfunction addBinary(a, b) {\n  // Your solution here\n}",
      "python": "def addBinary(a, b):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String addBinary(a, b) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string addBinary(a, b) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function addBinary(a, b) {\n  let i=a.length-1,j=b.length-1,carry=0,res=\"\";while(i>=0||j>=0||carry){const sum=(i>=0?+a[i--]:0)+(j>=0?+b[j--]:0)+carry;res=(sum%2)+res;carry=sum>>1;}return res||\"0\";\n}",
    "timeComplexity": "O(max(a,b))",
    "spaceComplexity": "O(max(a,b))",
    "testCases": []
  },
  {
    "id": "reverse-string",
    "title": "Reverse String",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "two-pointers",
    "acceptance": 76,
    "leetcodeLink": "https://leetcode.com/problems/reverse-string/",
    "tags": [
      "Strings",
      "two-pointers"
    ],
    "description": "Write a function that reverses a string. The input is given as an array of characters s. Modify in-place with O(1) extra memory.",
    "examples": [
      {
        "input": "s=[\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "explanation": ""
      },
      {
        "input": "s=[\"H\",\"a\",\"n\",\"n\",\"a\",\"h\"]",
        "output": "[\"h\",\"a\",\"n\",\"n\",\"a\",\"H\"]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤10^5",
      "s[i] is a printable ASCII character"
    ],
    "hints": [
      "Two pointers from both ends, swap and move inward until they meet."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - reverseString\n */\nfunction reverseString(s) {\n  // Your solution here\n}",
      "python": "def reverseString(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void reverseString(s) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void reverseString(s) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function reverseString(s) {\n  let l=0,r=s.length-1;while(l<r){[s[l],s[r]]=[s[r],s[l]];l++;r--;}\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "largest-number",
    "title": "Largest Number",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "sorting",
    "acceptance": 33,
    "leetcodeLink": "https://leetcode.com/problems/largest-number/",
    "tags": [
      "Strings",
      "sorting"
    ],
    "description": "Given a list of non-negative integers nums, arrange them such that they form the largest number and return it as a string.",
    "examples": [
      {
        "input": "nums=[10,2]",
        "output": "\"210\"",
        "explanation": ""
      },
      {
        "input": "nums=[3,30,34,5,9]",
        "output": "\"9534330\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤100",
      "0≤nums[i]≤10^9"
    ],
    "hints": [
      "Custom sort: compare a+b vs b+a as strings. If a+b > b+a, a comes first.",
      "Handle edge case: if result starts with \"0\", return \"0\"."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - largestNumber\n */\nfunction largestNumber(nums) {\n  // Your solution here\n}",
      "python": "def largestNumber(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String largestNumber(nums) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string largestNumber(nums) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function largestNumber(nums) {\n  const res=nums.map(String).sort((a,b)=>(b+a).localeCompare(a+b)).join(\"\");return res[0]===\"0\"?\"0\":res;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "compare-version-numbers",
    "title": "Compare Version Numbers",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "two-pointers",
    "acceptance": 38,
    "leetcodeLink": "https://leetcode.com/problems/compare-version-numbers/",
    "tags": [
      "Strings",
      "two-pointers"
    ],
    "description": "Given two version strings version1 and version2, compare them. Return -1 if version1<version2, 1 if version1>version2, 0 if equal. Compare revisions from left to right.",
    "examples": [
      {
        "input": "version1=\"1.2\", version2=\"1.10\"",
        "output": "-1",
        "explanation": ""
      },
      {
        "input": "version1=\"1.01\", version2=\"1.001\"",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤version1.length,version2.length≤500",
      "Versions consist of digits and dots"
    ],
    "hints": [
      "Split by \".\" and compare integer values of corresponding parts.",
      "Pad shorter version with zeros for missing revisions."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - compareVersion\n */\nfunction compareVersion(version1, version2) {\n  // Your solution here\n}",
      "python": "def compareVersion(version1, version2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int compareVersion(version1, version2) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int compareVersion(version1, version2) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function compareVersion(version1, version2) {\n  const a=version1.split(\".\"),b=version2.split(\".\");for(let i=0;i<Math.max(a.length,b.length);i++){const x=parseInt(a[i]||0),y=parseInt(b[i]||0);if(x<y)return-1;if(x>y)return 1;}return 0;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "two-sum-ii-input-array-is-sorted",
    "title": "Two Sum II - Input Array Is Sorted",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 59,
    "leetcodeLink": "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given a 1-indexed sorted array of integers numbers and a target, find two numbers that add to target. Return their indices as [index1, index2] using O(1) space.",
    "examples": [
      {
        "input": "numbers=[2,7,11,15], target=9",
        "output": "[1,2]",
        "explanation": ""
      },
      {
        "input": "numbers=[2,3,4], target=6",
        "output": "[1,3]",
        "explanation": ""
      }
    ],
    "constraints": [
      "2≤numbers.length≤3*10^4",
      "Exactly one solution exists",
      "1-indexed output"
    ],
    "hints": [
      "Two pointers from both ends. Sum > target: move right left. Sum < target: move left right."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - twoSum\n */\nfunction twoSum(numbers, target) {\n  // Your solution here\n}",
      "python": "def twoSum(numbers, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] twoSum(numbers, target) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> twoSum(numbers, target) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function twoSum(numbers, target) {\n  let l=0,r=numbers.length-1;while(l<r){const s=numbers[l]+numbers[r];if(s===target)return[l+1,r+1];else if(s<target)l++;else r--;}return[];\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "3sum-closest",
    "title": "3Sum Closest",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/3sum-closest/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given an integer array nums and an integer target, find three integers whose sum is closest to target. Return the sum of the three integers.",
    "examples": [
      {
        "input": "nums=[-1,2,1,-4], target=1",
        "output": "2",
        "explanation": "-1+2+1=2"
      },
      {
        "input": "nums=[0,0,0], target=1",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "3≤nums.length≤500",
      "-1000≤nums[i]≤1000"
    ],
    "hints": [
      "Sort array. Fix one element, use two pointers for the other two.",
      "Track the sum closest to target."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - threeSumClosest\n */\nfunction threeSumClosest(nums, target) {\n  // Your solution here\n}",
      "python": "def threeSumClosest(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int threeSumClosest(nums, target) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int threeSumClosest(nums, target) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function threeSumClosest(nums, target) {\n  nums.sort((a,b)=>a-b);let closest=Infinity;for(let i=0;i<nums.length-2;i++){let l=i+1,r=nums.length-1;while(l<r){const s=nums[i]+nums[l]+nums[r];if(Math.abs(s-target)<Math.abs(closest-target))closest=s;if(s<target)l++;else if(s>target)r--;else return s;}}return closest;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "remove-element",
    "title": "Remove Element",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/remove-element/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given an integer array nums and an integer val, remove all occurrences of val in-place and return the count k of remaining elements in any order.",
    "examples": [
      {
        "input": "nums=[3,2,2,3], val=3",
        "output": "2, nums=[2,2,_,_]",
        "explanation": ""
      },
      {
        "input": "nums=[0,1,2,2,3,0,4,2], val=2",
        "output": "5",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤nums.length≤100",
      "0≤nums[i],val≤100"
    ],
    "hints": [
      "Use slow pointer k. Fast pointer iterates; if nums[i]!=val, copy to nums[k] and increment k."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - removeElement\n */\nfunction removeElement(nums, val) {\n  // Your solution here\n}",
      "python": "def removeElement(nums, val):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int removeElement(nums, val) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int removeElement(nums, val) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function removeElement(nums, val) {\n  let k=0;for(const n of nums)if(n!==val)nums[k++]=n;return k;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "backspace-string-compare",
    "title": "Backspace String Compare",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "two-pointers",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/backspace-string-compare/",
    "tags": [
      "Strings",
      "two-pointers"
    ],
    "description": "Given two strings s and t, return true if they are equal when both are typed into empty text editors. \"#\" means a backspace character.",
    "examples": [
      {
        "input": "s=\"ab#c\", t=\"ad#c\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"ab##\", t=\"c#d#\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"a#c\", t=\"b\"",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length,t.length≤200",
      "s and t only contain lowercase letters and \"#\""
    ],
    "hints": [
      "Process each string by simulating the backspace (use stack or counter).",
      "Compare resulting strings."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - backspaceCompare\n */\nfunction backspaceCompare(s, t) {\n  // Your solution here\n}",
      "python": "def backspaceCompare(s, t):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean backspaceCompare(s, t) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool backspaceCompare(s, t) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function backspaceCompare(s, t) {\n  function process(str){let res=\"\",skip=0;for(let i=str.length-1;i>=0;i--){if(str[i]===\"#\")skip++;else if(skip>0)skip--;else res+=str[i];}return res;}return process(s)===process(t);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "boats-to-save-people",
    "title": "Boats to Save People",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/boats-to-save-people/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "Given an array people where people[i] is the weight of the ith person, and the limit (max weight per boat that holds at most 2 people), return the minimum number of boats.",
    "examples": [
      {
        "input": "people=[1,2], limit=3",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "people=[3,2,2,1], limit=3",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "people=[3,5,3,4], limit=5",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤people.length≤5*10^4",
      "1≤people[i]≤limit≤3*10^4"
    ],
    "hints": [
      "Sort the array. Use two pointers: lightest and heaviest.",
      "If they fit together, advance both. Else heaviest takes a boat alone."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - numRescueBoats\n */\nfunction numRescueBoats(people, limit) {\n  // Your solution here\n}",
      "python": "def numRescueBoats(people, limit):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int numRescueBoats(people, limit) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numRescueBoats(people, limit) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function numRescueBoats(people, limit) {\n  people.sort((a,b)=>a-b);let l=0,r=people.length-1,boats=0;while(l<=r){if(people[l]+people[r]<=limit)l++;r--;boats++;}return boats;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "partition-labels",
    "title": "Partition Labels",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "greedy",
    "acceptance": 79,
    "leetcodeLink": "https://leetcode.com/problems/partition-labels/",
    "tags": [
      "Strings",
      "greedy"
    ],
    "description": "You are given a string s. Partition the string so that each letter appears in at most one part. Return a list of integers representing the size of each partition.",
    "examples": [
      {
        "input": "s=\"ababcbacadefegdehijhklij\"",
        "output": "[9,7,8]",
        "explanation": ""
      },
      {
        "input": "s=\"eccbbbbdec\"",
        "output": "[10]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤500",
      "s consists of lowercase English letters"
    ],
    "hints": [
      "Record the last occurrence of each character.",
      "Use greedy: extend current partition to include the last occurrence of all chars seen so far."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - partitionLabels\n */\nfunction partitionLabels(s) {\n  // Your solution here\n}",
      "python": "def partitionLabels(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] partitionLabels(s) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> partitionLabels(s) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function partitionLabels(s) {\n  const last={};for(let i=0;i<s.length;i++)last[s[i]]=i;const res=[];let start=0,end=0;for(let i=0;i<s.length;i++){end=Math.max(end,last[s[i]]);if(i===end){res.push(end-start+1);start=end+1;}}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "sort-colors-dup",
    "title": "Container With Most Water",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "two-pointers",
    "acceptance": 54,
    "leetcodeLink": "https://leetcode.com/problems/sort-colors-dup/",
    "tags": [
      "Arrays",
      "two-pointers"
    ],
    "description": "(Covered above — see container-with-most-water)",
    "examples": [
      {
        "input": "See above",
        "output": "See above",
        "explanation": ""
      }
    ],
    "constraints": [],
    "hints": [
      "See above"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxArea\n */\nfunction maxArea(height) {\n  // Your solution here\n}",
      "python": "def maxArea(height):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxArea(height) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxArea(height) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "// See LeetCode editorial for solutions",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "minimum-size-subarray-sum",
    "title": "Minimum Size Subarray Sum",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "sliding-window",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/minimum-size-subarray-sum/",
    "tags": [
      "Arrays",
      "sliding-window"
    ],
    "description": "Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum >= target. If there is no such subarray, return 0.",
    "examples": [
      {
        "input": "target=7, nums=[2,3,1,2,4,3]",
        "output": "2",
        "explanation": "[4,3]"
      },
      {
        "input": "target=4, nums=[1,4,4]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤target≤10^9",
      "1≤nums.length≤10^5",
      "1≤nums[i]≤10^4"
    ],
    "hints": [
      "Sliding window: expand right by adding nums[r]. When sum>=target, shrink left.",
      "Track minimum window size."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - minSubArrayLen\n */\nfunction minSubArrayLen(target, nums) {\n  // Your solution here\n}",
      "python": "def minSubArrayLen(target, nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int minSubArrayLen(target, nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minSubArrayLen(target, nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function minSubArrayLen(target, nums) {\n  let l=0,sum=0,min=Infinity;for(let r=0;r<nums.length;r++){sum+=nums[r];while(sum>=target){min=Math.min(min,r-l+1);sum-=nums[l++];}}return min===Infinity?0:min;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "max-consecutive-ones-iii",
    "title": "Max Consecutive Ones III",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "sliding-window",
    "acceptance": 64,
    "leetcodeLink": "https://leetcode.com/problems/max-consecutive-ones-iii/",
    "tags": [
      "Arrays",
      "sliding-window"
    ],
    "description": "Given a binary array nums and an integer k, return the maximum number of consecutive 1s in the array if you can flip at most k 0s.",
    "examples": [
      {
        "input": "nums=[1,1,1,0,0,0,1,1,1,1,0], k=2",
        "output": "6",
        "explanation": ""
      },
      {
        "input": "nums=[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,0], k=3",
        "output": "10",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^5",
      "nums[i] is 0 or 1",
      "0≤k≤nums.length"
    ],
    "hints": [
      "Sliding window: count zeros in window. If zeros > k, shrink left.",
      "Track maximum window size."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - longestOnes\n */\nfunction longestOnes(nums, k) {\n  // Your solution here\n}",
      "python": "def longestOnes(nums, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int longestOnes(nums, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestOnes(nums, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function longestOnes(nums, k) {\n  let l=0,zeros=0,max=0;for(let r=0;r<nums.length;r++){if(nums[r]===0)zeros++;while(zeros>k)if(nums[l++]===0)zeros--;max=Math.max(max,r-l+1);}return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "fruit-into-baskets",
    "title": "Fruit Into Baskets",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "sliding-window",
    "acceptance": 42,
    "leetcodeLink": "https://leetcode.com/problems/fruit-into-baskets/",
    "tags": [
      "Arrays",
      "sliding-window"
    ],
    "description": "You are visiting a farm. The farm has a row of fruit trees. You have two baskets and can put only one type of fruit in each. Starting from any tree, pick one fruit per tree moving only to the right. Return the maximum fruits you can pick.",
    "examples": [
      {
        "input": "fruits=[1,2,1]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "fruits=[0,1,2,2]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "fruits=[1,2,3,2,2]",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤fruits.length≤10^5",
      "0≤fruits[i]<fruits.length"
    ],
    "hints": [
      "Sliding window with at most 2 distinct values.",
      "Use a map to count fruit types in window. If more than 2, shrink left."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - totalFruit\n */\nfunction totalFruit(fruits) {\n  // Your solution here\n}",
      "python": "def totalFruit(fruits):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int totalFruit(fruits) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int totalFruit(fruits) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function totalFruit(fruits) {\n  const map=new Map();let l=0,max=0;for(let r=0;r<fruits.length;r++){map.set(fruits[r],(map.get(fruits[r])||0)+1);while(map.size>2){const lf=fruits[l++];map.set(lf,map.get(lf)-1);if(map.get(lf)===0)map.delete(lf);}max=Math.max(max,r-l+1);}return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "frequency-of-the-most-frequent-element",
    "title": "Frequency of the Most Frequent Element",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "sliding-window",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/frequency-of-the-most-frequent-element/",
    "tags": [
      "Arrays",
      "sliding-window"
    ],
    "description": "Given an integer array nums and integer k (number of operations where you can increment any element by 1), return the maximum possible frequency of the most frequent element.",
    "examples": [
      {
        "input": "nums=[1,2,4], k=5",
        "output": "3",
        "explanation": "Increment 1 three times and 2 twice"
      },
      {
        "input": "nums=[1,4,8,13], k=5",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^5",
      "1≤nums[i]≤10^5",
      "1≤k≤10^5"
    ],
    "hints": [
      "Sort array. Sliding window: to make all elements in window equal to nums[r] (rightmost), cost = nums[r]*windowSize - windowSum.",
      "If cost > k, shrink window from left."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxFrequency\n */\nfunction maxFrequency(nums, k) {\n  // Your solution here\n}",
      "python": "def maxFrequency(nums, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxFrequency(nums, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxFrequency(nums, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxFrequency(nums, k) {\n  nums.sort((a,b)=>a-b);let l=0,sum=0,res=0;for(let r=0;r<nums.length;r++){sum+=nums[r];while(nums[r]*(r-l+1)-sum>k)sum-=nums[l++];res=Math.max(res,r-l+1);}return res;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "valid-parentheses",
    "title": "Valid Parentheses",
    "difficulty": "Easy",
    "ds": "Stack",
    "pattern": "stack",
    "acceptance": 41,
    "leetcodeLink": "https://leetcode.com/problems/valid-parentheses/",
    "tags": [
      "Stack",
      "stack"
    ],
    "description": "Given a string s containing just '(', ')', '{', '}', '[' and ']', determine if the input string is valid. Open brackets must be closed by the same type in the correct order.",
    "examples": [
      {
        "input": "s=\"()\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"()[]{}\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"(]\"",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤10^4",
      "s consists of parentheses only ()[]{}"
    ],
    "hints": [
      "Use a stack. Push opening brackets.",
      "For closing brackets, check if stack top matches. Pop and continue, or return false."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isValid\n */\nfunction isValid(s) {\n  // Your solution here\n}",
      "python": "def isValid(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isValid(s) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isValid(s) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isValid(s) {\n  const st=[],m={\")\":\" (\",\"}\":\" {\",\"]\":\" [\"};for(const c of s){if(!m[c])st.push(c);else if(st.pop()!==m[c])return false;}return st.length===0;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "min-stack",
    "title": "Min Stack",
    "difficulty": "Medium",
    "ds": "Stack",
    "pattern": "stack",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/min-stack/",
    "tags": [
      "Stack",
      "stack"
    ],
    "description": "Design a stack that supports push, pop, top, and retrieving the minimum element in constant time. Implement MinStack class with these 4 operations all in O(1).",
    "examples": [
      {
        "input": "MinStack(); push(-2); push(0); push(-3); getMin()→-3; pop(); top()→0; getMin()→-2",
        "output": "see above",
        "explanation": ""
      }
    ],
    "constraints": [
      "All operations always called on non-empty stacks",
      "At most 3*10^4 calls total"
    ],
    "hints": [
      "Use two stacks: one for values, one to track minimums.",
      "Push to minStack only when val <= current minimum."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {object} - MinStack\n */\nfunction MinStack(input) {\n  // Your solution here\n}",
      "python": "def MinStack(input):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object MinStack(input) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto MinStack(input) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "// Class-based solution — see LeetCode \n// Core logic:\n// this.s=[];this.mins=[];",
    "timeComplexity": "O(1) all",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "daily-temperatures",
    "title": "Daily Temperatures",
    "difficulty": "Medium",
    "ds": "Stack",
    "pattern": "monotonic-stack",
    "acceptance": 65,
    "leetcodeLink": "https://leetcode.com/problems/daily-temperatures/",
    "tags": [
      "Stack",
      "monotonic-stack"
    ],
    "description": "Given an array temperatures, return an array answer where answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If no future warmer day, answer[i]=0.",
    "examples": [
      {
        "input": "temperatures=[73,74,75,71,69,72,76,73]",
        "output": "[1,1,4,2,1,1,0,0]",
        "explanation": ""
      },
      {
        "input": "temperatures=[30,40,50,60]",
        "output": "[1,1,1,0]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤temperatures.length≤10^5",
      "30≤temperatures[i]≤100"
    ],
    "hints": [
      "Use a monotonic decreasing stack of indices.",
      "When current temp > stack top temp, pop and set answer[index] = current - popped index."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - dailyTemperatures\n */\nfunction dailyTemperatures(temperatures) {\n  // Your solution here\n}",
      "python": "def dailyTemperatures(temperatures):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] dailyTemperatures(temperatures) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> dailyTemperatures(temperatures) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function dailyTemperatures(temperatures) {\n  const n=temperatures.length,ans=new Array(n).fill(0),st=[];for(let i=0;i<n;i++){while(st.length&&temperatures[i]>temperatures[st[st.length-1]]){const j=st.pop();ans[j]=i-j;}st.push(i);}return ans;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "car-fleet",
    "title": "Car Fleet",
    "difficulty": "Medium",
    "ds": "Stack",
    "pattern": "monotonic-stack",
    "acceptance": 51,
    "leetcodeLink": "https://leetcode.com/problems/car-fleet/",
    "tags": [
      "Stack",
      "monotonic-stack"
    ],
    "description": "n cars are going to the same destination at position target. Each car i starts at position[i] with speed[i]. A fleet is group of cars reaching at the same time. Cars cannot pass each other. Return the number of fleets.",
    "examples": [
      {
        "input": "target=12, position=[10,8,0,5,3], speed=[2,4,1,1,3]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "target=10, position=[3], speed=[3]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==position.length==speed.length",
      "1≤n≤10^5",
      "0<target≤10^6",
      "0≤position[i]<target"
    ],
    "hints": [
      "Sort cars by position descending. Calculate time to reach target for each.",
      "Monotonic stack: if current car arrives no later than the car ahead, they merge into a fleet."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - carFleet\n */\nfunction carFleet(target, position, speed) {\n  // Your solution here\n}",
      "python": "def carFleet(target, position, speed):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int carFleet(target, position, speed) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int carFleet(target, position, speed) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function carFleet(target, position, speed) {\n  const cars=position.map((p,i)=>[(target-p)/speed[i],p]).sort((a,b)=>b[1]-a[1]);const st=[];for(const[time]of cars){while(st.length&&time>=st[st.length-1])st.pop();st.push(time);}return st.length;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "largest-rectangle-in-histogram",
    "title": "Largest Rectangle in Histogram",
    "difficulty": "Hard",
    "ds": "Stack",
    "pattern": "monotonic-stack",
    "acceptance": 43,
    "leetcodeLink": "https://leetcode.com/problems/largest-rectangle-in-histogram/",
    "tags": [
      "Stack",
      "monotonic-stack"
    ],
    "description": "Given an array of integers heights representing the histogram bar heights (each with width 1), return the area of the largest rectangle in the histogram.",
    "examples": [
      {
        "input": "heights=[2,1,5,6,2,3]",
        "output": "10",
        "explanation": ""
      },
      {
        "input": "heights=[2,4]",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤heights.length≤10^5",
      "0≤heights[i]≤10^4"
    ],
    "hints": [
      "Monotonic increasing stack of indices. When a shorter bar is found, pop and compute area.",
      "Area for popped bar = heights[popped] * (current - stack.top - 1)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - largestRectangleArea\n */\nfunction largestRectangleArea(heights) {\n  // Your solution here\n}",
      "python": "def largestRectangleArea(heights):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int largestRectangleArea(heights) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int largestRectangleArea(heights) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function largestRectangleArea(heights) {\n  const st=[],h=[...heights,0];let max=0;for(let i=0;i<h.length;i++){while(st.length&&h[i]<h[st[st.length-1]]){const hi=st.pop();const w=st.length?i-st[st.length-1]-1:i;max=Math.max(max,h[hi]*w);}st.push(i);}return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "evaluate-reverse-polish-notation",
    "title": "Evaluate Reverse Polish Notation",
    "difficulty": "Medium",
    "ds": "Stack",
    "pattern": "stack",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/evaluate-reverse-polish-notation/",
    "tags": [
      "Stack",
      "stack"
    ],
    "description": "Evaluate the value of an arithmetic expression in Reverse Polish Notation. Valid operators are +, -, *, /. Operands may be integers. Division truncates toward zero.",
    "examples": [
      {
        "input": "tokens=[\"2\",\"1\",\"+\",\"3\",\"*\"]",
        "output": "9",
        "explanation": "(2+1)*3=9"
      },
      {
        "input": "tokens=[\"4\",\"13\",\"5\",\"/\",\"+\"]",
        "output": "6",
        "explanation": ""
      },
      {
        "input": "tokens=[\"10\",\"6\",\"9\",\"3\",\"+\",\"-11\",\"*\",\"/\",\"*\",\"17\",\"+\",\"5\",\"+\"]",
        "output": "22",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤tokens.length≤10^4",
      "tokens[i] is an operator or integer in range [-200,200]"
    ],
    "hints": [
      "Push numbers onto stack. When operator found, pop two operands and compute.",
      "Push result back. Final answer is stack top."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - evalRPN\n */\nfunction evalRPN(tokens) {\n  // Your solution here\n}",
      "python": "def evalRPN(tokens):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int evalRPN(tokens) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int evalRPN(tokens) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function evalRPN(tokens) {\n  const st=[];for(const t of tokens){if(\"+-*/\".includes(t)){const b=st.pop(),a=st.pop();if(t===\"+\")st.push(a+b);else if(t===\"-\")st.push(a-b);else if(t===\"*\")st.push(a*b);else st.push(Math.trunc(a/b));}else st.push(+t);}return st[0];\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "decode-string",
    "title": "Decode String",
    "difficulty": "Medium",
    "ds": "Stack",
    "pattern": "stack",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/decode-string/",
    "tags": [
      "Stack",
      "stack"
    ],
    "description": "Given an encoded string, return its decoded string. The encoding rule is: k[encoded_string], where the encoded_string inside brackets is repeated exactly k times.",
    "examples": [
      {
        "input": "s=\"3[a]2[bc]\"",
        "output": "\"aaabcbc\"",
        "explanation": ""
      },
      {
        "input": "s=\"3[a2[c]]\"",
        "output": "\"accaccacc\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤30",
      "s consists of lowercase letters, digits, and []",
      "k is guaranteed to be in range [1,300]"
    ],
    "hints": [
      "Use two stacks: one for counts, one for current strings.",
      "On \"[\" push current string and count. On \"]\" pop and repeat."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - decodeString\n */\nfunction decodeString(s) {\n  // Your solution here\n}",
      "python": "def decodeString(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String decodeString(s) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string decodeString(s) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function decodeString(s) {\n  const cntSt=[],strSt=[];let cur=\"\",k=0;for(const c of s){if(c>=\"0\"&&c<=\"9\")k=k*10+parseInt(c);else if(c===\"[\"){cntSt.push(k);strSt.push(cur);k=0;cur=\"\";}else if(c===\"]\"){const n=cntSt.pop();cur=strSt.pop()+cur.repeat(n);}else cur+=c;}return cur;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "next-greater-element-i",
    "title": "Next Greater Element I",
    "difficulty": "Easy",
    "ds": "Stack",
    "pattern": "monotonic-stack",
    "acceptance": 70,
    "leetcodeLink": "https://leetcode.com/problems/next-greater-element-i/",
    "tags": [
      "Stack",
      "monotonic-stack"
    ],
    "description": "Given two arrays nums1 and nums2 (no duplicates, nums1 is subset of nums2), for each element of nums1 find the next greater element in nums2. Return -1 if none exists.",
    "examples": [
      {
        "input": "nums1=[4,1,2], nums2=[1,3,4,2]",
        "output": "[-1,3,-1]",
        "explanation": ""
      },
      {
        "input": "nums1=[2,4], nums2=[1,2,3,4]",
        "output": "[3,-1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums1.length≤nums2.length≤1000",
      "All integers are unique"
    ],
    "hints": [
      "Build a map of element→nextGreater for nums2 using monotonic stack.",
      "For each element in nums1, look up in the map."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - nextGreaterElement\n */\nfunction nextGreaterElement(nums1, nums2) {\n  // Your solution here\n}",
      "python": "def nextGreaterElement(nums1, nums2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] nextGreaterElement(nums1, nums2) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> nextGreaterElement(nums1, nums2) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function nextGreaterElement(nums1, nums2) {\n  const map=new Map(),st=[];for(const n of nums2){while(st.length&&st[st.length-1]<n)map.set(st.pop(),n);st.push(n);}return nums1.map(n=>map.get(n)|||-1);\n}",
    "timeComplexity": "O(n+m)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "asteroid-collision",
    "title": "Asteroid Collision",
    "difficulty": "Medium",
    "ds": "Stack",
    "pattern": "stack",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/asteroid-collision/",
    "tags": [
      "Stack",
      "stack"
    ],
    "description": "Given an array asteroids representing moving asteroids in a row (positive=right, negative=left, same size|), find the state after all collisions. Same direction never collide. Two colliding: smaller explodes, if same size both explode.",
    "examples": [
      {
        "input": "asteroids=[5,10,-5]",
        "output": "[5,10]",
        "explanation": ""
      },
      {
        "input": "asteroids=[8,-8]",
        "output": "[]",
        "explanation": ""
      },
      {
        "input": "asteroids=[10,2,-5]",
        "output": "[10]",
        "explanation": ""
      }
    ],
    "constraints": [
      "2≤asteroids.length≤10^4",
      "-1000≤asteroids[i]≤1000",
      "asteroids[i]≠0"
    ],
    "hints": [
      "Use a stack. Push positive asteroids.",
      "Negative asteroid: collide with stack top if positive. Handle explosion/survival cases."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - asteroidCollision\n */\nfunction asteroidCollision(asteroids) {\n  // Your solution here\n}",
      "python": "def asteroidCollision(asteroids):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] asteroidCollision(asteroids) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> asteroidCollision(asteroids) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function asteroidCollision(asteroids) {\n  const st=[];for(const a of asteroids){let alive=true;while(alive&&a<0&&st.length&&st[st.length-1]>0){if(st[st.length-1]<-a)st.pop();else if(st[st.length-1]===-a){st.pop();alive=false;}else alive=false;}if(alive)st.push(a);}return st;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "remove-k-digits",
    "title": "Remove K Digits",
    "difficulty": "Medium",
    "ds": "Stack",
    "pattern": "monotonic-stack",
    "acceptance": 30,
    "leetcodeLink": "https://leetcode.com/problems/remove-k-digits/",
    "tags": [
      "Stack",
      "monotonic-stack"
    ],
    "description": "Given string num representing a non-negative integer and integer k, return the smallest possible integer after removing k digits from num.",
    "examples": [
      {
        "input": "num=\"1432219\", k=3",
        "output": "\"1219\"",
        "explanation": ""
      },
      {
        "input": "num=\"10200\", k=1",
        "output": "\"200\"",
        "explanation": ""
      },
      {
        "input": "num=\"10\", k=2",
        "output": "\"0\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤k≤num.length≤10^5",
      "num consists only of digits",
      "num does not have leading zeros except for \"0\""
    ],
    "hints": [
      "Use monotonic increasing stack. When next digit < top and k>0, pop (remove larger digit).",
      "Remove remaining from end. Handle leading zeros."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - removeKdigits\n */\nfunction removeKdigits(num, k) {\n  // Your solution here\n}",
      "python": "def removeKdigits(num, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String removeKdigits(num, k) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string removeKdigits(num, k) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function removeKdigits(num, k) {\n  const st=[];for(const d of num){while(k>0&&st.length&&st[st.length-1]>d){st.pop();k--;}st.push(d);}while(k--)st.pop();const res=st.join(\"\").replace(/^0+/,\"\");return res||\"0\";\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "binary-search",
    "title": "Binary Search",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 57,
    "leetcodeLink": "https://leetcode.com/problems/binary-search/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Given an array of integers nums sorted in ascending order and an integer target, write a function to search target. If target exists, return its index. Otherwise, return -1. Must be O(log n).",
    "examples": [
      {
        "input": "nums=[-1,0,3,5,9,12], target=9",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "nums=[-1,0,3,5,9,12], target=2",
        "output": "-1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^4",
      "-10^4 < nums[i], target < 10^4",
      "All nums unique, sorted ascending"
    ],
    "hints": [
      "Classic binary search: left, right, mid=(left+right)/2.",
      "If nums[mid]==target return mid. If smaller search right, else search left."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - search\n */\nfunction search(nums, target) {\n  // Your solution here\n}",
      "python": "def search(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int search(nums, target) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int search(nums, target) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function search(nums, target) {\n  let l=0,r=nums.length-1;while(l<=r){const m=l+r>>1;if(nums[m]===target)return m;nums[m]<target?l=m+1:r=m-1;}return-1;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "search-insert-position",
    "title": "Search Insert Position",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 44,
    "leetcodeLink": "https://leetcode.com/problems/search-insert-position/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if inserted in order. Must be O(log n).",
    "examples": [
      {
        "input": "nums=[1,3,5,6], target=5",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "nums=[1,3,5,6], target=2",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "nums=[1,3,5,6], target=7",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^4",
      "-10^4≤nums[i]≤10^4",
      "All values are distinct, sorted"
    ],
    "hints": [
      "Binary search. return left when loop ends — that is the insertion position."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - searchInsert\n */\nfunction searchInsert(nums, target) {\n  // Your solution here\n}",
      "python": "def searchInsert(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int searchInsert(nums, target) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int searchInsert(nums, target) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function searchInsert(nums, target) {\n  let l=0,r=nums.length-1;while(l<=r){const m=l+r>>1;if(nums[m]===target)return m;nums[m]<target?l=m+1:r=m-1;}return l;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "find-first-and-last-position-of-element-in-sorted-array",
    "title": "Find First and Last Position of Element in Sorted Array",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 42,
    "leetcodeLink": "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Given a sorted array of integers nums and target, find the starting and ending position of target. If not found, return [-1,-1]. Must be O(log n).",
    "examples": [
      {
        "input": "nums=[5,7,7,8,8,10], target=8",
        "output": "[3,4]",
        "explanation": ""
      },
      {
        "input": "nums=[5,7,7,8,8,10], target=6",
        "output": "[-1,-1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤nums.length≤10^5",
      "-10^9≤nums[i]≤10^9",
      "nums is sorted"
    ],
    "hints": [
      "Two binary searches: one for leftmost position (lower_bound), one for rightmost (upper_bound)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - searchRange\n */\nfunction searchRange(nums, target) {\n  // Your solution here\n}",
      "python": "def searchRange(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] searchRange(nums, target) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> searchRange(nums, target) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function searchRange(nums, target) {\n  function lb(v){let l=0,r=nums.length;while(l<r){const m=l+r>>1;nums[m]<v?l=m+1:r=m;}return l;}const l=lb(target),r=lb(target+1)-1;return l<=r&&nums[l]===target?[l,r]:[-1,-1];\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "koko-eating-bananas",
    "title": "Koko Eating Bananas",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 49,
    "leetcodeLink": "https://leetcode.com/problems/koko-eating-bananas/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Koko has n piles of bananas. She has h hours. Each hour she picks a pile and eats k bananas from it. Find the minimum integer k (eating speed) such that she can eat all bananas within h hours.",
    "examples": [
      {
        "input": "piles=[3,6,7,11], h=8",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "piles=[30,11,23,4,20], h=5",
        "output": "30",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤piles.length≤10^4",
      "1≤piles[i]≤10^9",
      "piles.length≤h≤10^9"
    ],
    "hints": [
      "Binary search on k from 1 to max(piles).",
      "For a given k, hours needed = sum of ceil(pile/k). Check if <= h."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - minEatingSpeed\n */\nfunction minEatingSpeed(piles, h) {\n  // Your solution here\n}",
      "python": "def minEatingSpeed(piles, h):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int minEatingSpeed(piles, h) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minEatingSpeed(piles, h) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function minEatingSpeed(piles, h) {\n  let l=1,r=Math.max(...piles);while(l<r){const m=l+r>>1;const hrs=piles.reduce((s,p)=>s+Math.ceil(p/m),0);hrs<=h?r=m:l=m+1;}return l;\n}",
    "timeComplexity": "O(n log m)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "find-peak-element",
    "title": "Find Peak Element",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/find-peak-element/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "A peak element is one that is strictly greater than its neighbors. Given an integer array nums, find a peak element and return its index. Must run in O(log n). Assume nums[-1]=nums[n]=-infinity.",
    "examples": [
      {
        "input": "nums=[1,2,3,1]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "nums=[1,2,1,3,5,6,4]",
        "output": "5 or 1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤1000",
      "-2^31≤nums[i]≤2^31-1",
      "nums[i]≠nums[i+1]"
    ],
    "hints": [
      "Binary search: if nums[mid] < nums[mid+1], peak is to the right. Else to the left or at mid."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findPeakElement\n */\nfunction findPeakElement(nums) {\n  // Your solution here\n}",
      "python": "def findPeakElement(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findPeakElement(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findPeakElement(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findPeakElement(nums) {\n  let l=0,r=nums.length-1;while(l<r){const m=l+r>>1;nums[m]<nums[m+1]?l=m+1:r=m;}return l;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "time-based-key-value-store",
    "title": "Time Based Key-Value Store",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 53,
    "leetcodeLink": "https://leetcode.com/problems/time-based-key-value-store/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Design a time-based key-value data structure. set(key,value,timestamp) stores the value at given timestamp. get(key,timestamp) returns the value with the largest timestamp <= given, or \"\" if none.",
    "examples": [
      {
        "input": "set(\"foo\",\"bar\",1); get(\"foo\",1)→\"bar\"; get(\"foo\",3)→\"bar\"; set(\"foo\",\"bar2\",4); get(\"foo\",4)→\"bar2\"; get(\"foo\",5)→\"bar2\"",
        "output": "see above",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤key.length,value.length≤100",
      "1≤timestamp≤10^7",
      "All timestamps in set are strictly increasing"
    ],
    "hints": [
      "Store values in a map from key to sorted array of [timestamp, value].",
      "For get, binary search for the largest timestamp <= queried timestamp."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {object} - TimeMap\n */\nfunction TimeMap(input) {\n  // Your solution here\n}",
      "python": "def TimeMap(input):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object TimeMap(input) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto TimeMap(input) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "// Class-based solution — see LeetCode \n// Core logic:\n// this.map=new Map();",
    "timeComplexity": "O(log n) get, O(1) set",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "capacity-to-ship-packages",
    "title": "Capacity To Ship Packages Within D Days",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 69,
    "leetcodeLink": "https://leetcode.com/problems/capacity-to-ship-packages/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Given weights array and integer days, find the minimum weight capacity of a ship to ship all packages within days days. Each day you load packages in order without exceeding capacity.",
    "examples": [
      {
        "input": "weights=[1,2,3,4,5,6,7,8,9,10], days=5",
        "output": "15",
        "explanation": ""
      },
      {
        "input": "weights=[3,2,2,4,1,4], days=3",
        "output": "6",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤days≤weights.length≤5*10^4",
      "1≤weights[i]≤500"
    ],
    "hints": [
      "Binary search on capacity from max(weights) to sum(weights).",
      "For each capacity, simulate loading and count days needed."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - shipWithinDays\n */\nfunction shipWithinDays(weights, days) {\n  // Your solution here\n}",
      "python": "def shipWithinDays(weights, days):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int shipWithinDays(weights, days) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int shipWithinDays(weights, days) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function shipWithinDays(weights, days) {\n  let l=Math.max(...weights),r=weights.reduce((a,b)=>a+b,0);while(l<r){const m=l+r>>1;let d=1,cur=0;for(const w of weights){if(cur+w>m){d++;cur=0;}cur+=w;}d<=days?r=m:l=m+1;}return l;\n}",
    "timeComplexity": "O(n log(sum-max))",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "split-array-largest-sum",
    "title": "Split Array Largest Sum",
    "difficulty": "Hard",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/split-array-largest-sum/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Given an integer array nums and an integer k, split nums into k non-empty subarrays such that the largest sum among the subarrays is minimized. Return that minimized largest sum.",
    "examples": [
      {
        "input": "nums=[7,2,5,10,8], k=2",
        "output": "18",
        "explanation": ""
      },
      {
        "input": "nums=[1,2,3,4,5], k=2",
        "output": "9",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤1000",
      "0≤nums[i]≤10^6",
      "1≤k≤min(50,nums.length)"
    ],
    "hints": [
      "Binary search on the answer from max(nums) to sum(nums).",
      "For a given mid, greedily split array and count parts needed."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - splitArray\n */\nfunction splitArray(nums, k) {\n  // Your solution here\n}",
      "python": "def splitArray(nums, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int splitArray(nums, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int splitArray(nums, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function splitArray(nums, k) {\n  let l=Math.max(...nums),r=nums.reduce((a,b)=>a+b,0);while(l<r){const m=l+r>>1;let parts=1,sum=0;for(const n of nums){if(sum+n>m){parts++;sum=0;}sum+=n;}parts<=k?r=m:l=m+1;}return l;\n}",
    "timeComplexity": "O(n log(sum))",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "median-of-two-sorted-arrays",
    "title": "Median of Two Sorted Arrays",
    "difficulty": "Hard",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 36,
    "leetcodeLink": "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays. Must run in O(log(m+n)).",
    "examples": [
      {
        "input": "nums1=[1,3], nums2=[2]",
        "output": "2.0",
        "explanation": ""
      },
      {
        "input": "nums1=[1,2], nums2=[3,4]",
        "output": "2.5",
        "explanation": ""
      }
    ],
    "constraints": [
      "nums1.length==m",
      "nums2.length==n",
      "0≤m,n≤1000",
      "0≤m+n≤2000"
    ],
    "hints": [
      "Binary search on the smaller array. Find partition so left half of combined has (m+n)/2 elements.",
      "maxLeft1 <= minRight2 and maxLeft2 <= minRight1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findMedianSortedArrays\n */\nfunction findMedianSortedArrays(nums1, nums2) {\n  // Your solution here\n}",
      "python": "def findMedianSortedArrays(nums1, nums2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findMedianSortedArrays(nums1, nums2) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findMedianSortedArrays(nums1, nums2) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findMedianSortedArrays(nums1, nums2) {\n  if(nums1.length>nums2.length)return findMedianSortedArrays(nums2,nums1);const m=nums1.length,n=nums2.length,half=(m+n+1)/2|0;let l=0,r=m;while(l<=r){const i=l+r>>1,j=half-i;const l1=i===0?-Infinity:nums1[i-1],r1=i===m?Infinity:nums1[i];const l2=j===0?-Infinity:nums2[j-1],r2=j===n?Infinity:nums2[j];if(l1<=r2&&l2<=r1){const maxL=Math.max(l1,l2);const minR=Math.min(r1,r2);return(m+n)%2===0?(maxL+minR)/2:maxL;}else if(l1>r2)r=i-1;else l=i+1;}return 0;\n}",
    "timeComplexity": "O(log(min(m,n)))",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "kth-smallest-element-in-a-sorted-matrix",
    "title": "Kth Smallest Element in a Sorted Matrix",
    "difficulty": "Medium",
    "ds": "Heap",
    "pattern": "binary-search",
    "acceptance": 61,
    "leetcodeLink": "https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/",
    "tags": [
      "Heap",
      "binary-search"
    ],
    "description": "Given an n×n matrix where each row and column is sorted in ascending order, return the kth smallest element. You must find a solution with a memory complexity better than O(n²).",
    "examples": [
      {
        "input": "matrix=[[1,5,9],[10,11,13],[12,13,15]], k=8",
        "output": "13",
        "explanation": ""
      },
      {
        "input": "matrix=[[-5]], k=1",
        "output": "-5",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==matrix.length==matrix[i].length",
      "1≤n≤300",
      "-10^9≤matrix[i][j]≤10^9"
    ],
    "hints": [
      "Binary search on value range [min, max]. Count elements <= mid.",
      "Count by walking from bottom-left: if matrix[row][col]<=mid, all in that column above count."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - kthSmallest\n */\nfunction kthSmallest(matrix, k) {\n  // Your solution here\n}",
      "python": "def kthSmallest(matrix, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int kthSmallest(matrix, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int kthSmallest(matrix, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function kthSmallest(matrix, k) {\n  const n=matrix.length;let l=matrix[0][0],r=matrix[n-1][n-1];while(l<r){const m=l+r>>1;let cnt=0,row=n-1,col=0;while(row>=0&&col<n){if(matrix[row][col]<=m){cnt+=row+1;col++;}else row--;}cnt<k?l=m+1:r=m;}return l;\n}",
    "timeComplexity": "O(n log(max-min))",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "reverse-linked-list",
    "title": "Reverse Linked List",
    "difficulty": "Easy",
    "ds": "Linked List",
    "pattern": "in-place-reversal",
    "acceptance": 73,
    "leetcodeLink": "https://leetcode.com/problems/reverse-linked-list/",
    "tags": [
      "Linked List",
      "in-place-reversal"
    ],
    "description": "Given the head of a singly linked list, reverse the list and return the reversed list head.",
    "examples": [
      {
        "input": "head=[1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": ""
      },
      {
        "input": "head=[1,2]",
        "output": "[2,1]",
        "explanation": ""
      },
      {
        "input": "head=[]",
        "output": "[]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,5000]",
      "-5000≤Node.val≤5000"
    ],
    "hints": [
      "Iterative: prev=null, curr=head. For each node: save next, reverse link, advance.",
      "Recursive: head.next.next = head; head.next = null;"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - reverseList\n */\nfunction reverseList(head) {\n  // Your solution here\n}",
      "python": "def reverseList(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object reverseList(head) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto reverseList(head) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function reverseList(head) {\n  let prev=null,curr=head;while(curr){const next=curr.next;curr.next=prev;prev=curr;curr=next;}return prev;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "merge-two-sorted-lists",
    "title": "Merge Two Sorted Lists",
    "difficulty": "Easy",
    "ds": "Linked List",
    "pattern": "in-place-reversal",
    "acceptance": 62,
    "leetcodeLink": "https://leetcode.com/problems/merge-two-sorted-lists/",
    "tags": [
      "Linked List",
      "in-place-reversal"
    ],
    "description": "Given heads of two sorted linked lists list1 and list2, merge them into one sorted list and return its head.",
    "examples": [
      {
        "input": "list1=[1,2,4], list2=[1,3,4]",
        "output": "[1,1,2,3,4,4]",
        "explanation": ""
      },
      {
        "input": "list1=[], list2=[]",
        "output": "[]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,50]",
      "-100≤Node.val≤100",
      "Both lists sorted"
    ],
    "hints": [
      "Use dummy head node. Compare list1 and list2 values; link smaller. Advance that pointer.",
      "After loop, attach remaining non-null list."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - mergeTwoLists\n */\nfunction mergeTwoLists(list1, list2) {\n  // Your solution here\n}",
      "python": "def mergeTwoLists(list1, list2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object mergeTwoLists(list1, list2) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto mergeTwoLists(list1, list2) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function mergeTwoLists(list1, list2) {\n  const dummy={next:null};let cur=dummy;while(list1&&list2){if(list1.val<=list2.val){cur.next=list1;list1=list1.next;}else{cur.next=list2;list2=list2.next;}cur=cur.next;}cur.next=list1||list2;return dummy.next;\n}",
    "timeComplexity": "O(m+n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "linked-list-cycle",
    "title": "Linked List Cycle",
    "difficulty": "Easy",
    "ds": "Linked List",
    "pattern": "fast-slow-pointers",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/linked-list-cycle/",
    "tags": [
      "Linked List",
      "fast-slow-pointers"
    ],
    "description": "Given the head of a linked list, determine if it has a cycle. Return true if there is a cycle, false otherwise.",
    "examples": [
      {
        "input": "head=[3,2,0,-4], pos=1",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "head=[1],pos=-1",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,10^4]",
      "-10^5≤Node.val≤10^5"
    ],
    "hints": [
      "Floyd's cycle detection: slow=1 step, fast=2 steps.",
      "If they meet, cycle exists. If fast reaches null, no cycle."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - hasCycle\n */\nfunction hasCycle(head) {\n  // Your solution here\n}",
      "python": "def hasCycle(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean hasCycle(head) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool hasCycle(head) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function hasCycle(head) {\n  let s=head,f=head;while(f&&f.next){s=s.next;f=f.next.next;if(s===f)return true;}return false;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "middle-of-the-linked-list",
    "title": "Middle of the Linked List",
    "difficulty": "Easy",
    "ds": "Linked List",
    "pattern": "fast-slow-pointers",
    "acceptance": 72,
    "leetcodeLink": "https://leetcode.com/problems/middle-of-the-linked-list/",
    "tags": [
      "Linked List",
      "fast-slow-pointers"
    ],
    "description": "Given the head of a singly linked list, return the middle node. If two middle nodes, return the second one.",
    "examples": [
      {
        "input": "head=[1,2,3,4,5]",
        "output": "[3,4,5]",
        "explanation": "Node 3"
      },
      {
        "input": "head=[1,2,3,4,5,6]",
        "output": "[4,5,6]",
        "explanation": "Second middle"
      }
    ],
    "constraints": [
      "Number of nodes in [1,100]",
      "1≤Node.val≤100"
    ],
    "hints": [
      "Fast and slow pointers. Fast moves 2 steps, slow moves 1 step. When fast ends, slow is at middle."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - middleNode\n */\nfunction middleNode(head) {\n  // Your solution here\n}",
      "python": "def middleNode(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object middleNode(head) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto middleNode(head) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function middleNode(head) {\n  let s=head,f=head;while(f&&f.next){s=s.next;f=f.next.next;}return s;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "remove-nth-node-from-end-of-list",
    "title": "Remove Nth Node From End of List",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "fast-slow-pointers",
    "acceptance": 42,
    "leetcodeLink": "https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
    "tags": [
      "Linked List",
      "fast-slow-pointers"
    ],
    "description": "Given the head of a linked list and integer n, remove the nth node from the end of the list and return the head.",
    "examples": [
      {
        "input": "head=[1,2,3,4,5], n=2",
        "output": "[1,2,3,5]",
        "explanation": ""
      },
      {
        "input": "head=[1], n=1",
        "output": "[]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,30]",
      "0≤Node.val≤100",
      "1≤n≤size of list"
    ],
    "hints": [
      "Use dummy node. Advance fast pointer n steps. Then move both until fast reaches end.",
      "slow.next is the node to remove."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - removeNthFromEnd\n */\nfunction removeNthFromEnd(head, n) {\n  // Your solution here\n}",
      "python": "def removeNthFromEnd(head, n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object removeNthFromEnd(head, n) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto removeNthFromEnd(head, n) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function removeNthFromEnd(head, n) {\n  const dummy={next:head};let fast=dummy,slow=dummy;for(let i=0;i<=n;i++)fast=fast.next;while(fast){fast=fast.next;slow=slow.next;}slow.next=slow.next.next;return dummy.next;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "reorder-list",
    "title": "Reorder List",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "fast-slow-pointers",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/reorder-list/",
    "tags": [
      "Linked List",
      "fast-slow-pointers"
    ],
    "description": "Given the head of a singly linked list L0→L1→…→Ln, reorder it to: L0→Ln→L1→Ln-1→L2→Ln-2→… Do not change node values.",
    "examples": [
      {
        "input": "head=[1,2,3,4]",
        "output": "[1,4,2,3]",
        "explanation": ""
      },
      {
        "input": "head=[1,2,3,4,5]",
        "output": "[1,5,2,4,3]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,5*10^4]",
      "1≤Node.val≤1000"
    ],
    "hints": [
      "Find middle, reverse second half, merge two halves alternately."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - reorderList\n */\nfunction reorderList(head) {\n  // Your solution here\n}",
      "python": "def reorderList(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void reorderList(head) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void reorderList(head) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function reorderList(head) {\n  let s=head,f=head;while(f&&f.next)f=f.next.next,s=s.next;let prev=null,cur=s.next;s.next=null;while(cur){const t=cur.next;cur.next=prev;prev=cur;cur=t;}let l=head,r=prev;while(r){const n1=l.next,n2=r.next;l.next=r;r.next=n1;l=n1;r=n2;}\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "palindrome-linked-list",
    "title": "Palindrome Linked List",
    "difficulty": "Easy",
    "ds": "Linked List",
    "pattern": "fast-slow-pointers",
    "acceptance": 49,
    "leetcodeLink": "https://leetcode.com/problems/palindrome-linked-list/",
    "tags": [
      "Linked List",
      "fast-slow-pointers"
    ],
    "description": "Given the head of a singly linked list, return true if it is a palindrome or false otherwise.",
    "examples": [
      {
        "input": "head=[1,2,2,1]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "head=[1,2]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,10^5]",
      "0≤Node.val≤9"
    ],
    "hints": [
      "Find middle with fast/slow. Reverse second half. Compare with first half.",
      "Optionally restore the list."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isPalindrome\n */\nfunction isPalindrome(head) {\n  // Your solution here\n}",
      "python": "def isPalindrome(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isPalindrome(head) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(head) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isPalindrome(head) {\n  let s=head,f=head;while(f&&f.next)s=s.next,f=f.next.next;let prev=null,cur=s;while(cur){const t=cur.next;cur.next=prev;prev=cur;cur=t;}let l=head,r=prev;while(r){if(l.val!==r.val)return false;l=l.next;r=r.next;}return true;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "add-two-numbers",
    "title": "Add Two Numbers",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "in-place-reversal",
    "acceptance": 41,
    "leetcodeLink": "https://leetcode.com/problems/add-two-numbers/",
    "tags": [
      "Linked List",
      "in-place-reversal"
    ],
    "description": "Given two non-empty linked lists representing non-negative integers (digits in reverse order), add the two numbers and return the sum as a linked list.",
    "examples": [
      {
        "input": "l1=[2,4,3], l2=[5,6,4]",
        "output": "[7,0,8]",
        "explanation": "342+465=807"
      },
      {
        "input": "l1=[9,9,9,9], l2=[9,9,9]",
        "output": "[8,9,9,0,1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,100]",
      "0≤Node.val≤9",
      "No leading zeros (except 0 itself)"
    ],
    "hints": [
      "Iterate both lists simultaneously, adding digits with carry.",
      "Create new node for each sum digit. Handle remaining carry."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - addTwoNumbers\n */\nfunction addTwoNumbers(l1, l2) {\n  // Your solution here\n}",
      "python": "def addTwoNumbers(l1, l2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object addTwoNumbers(l1, l2) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto addTwoNumbers(l1, l2) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function addTwoNumbers(l1, l2) {\n  const d={next:null};let cur=d,carry=0;while(l1||l2||carry){const s=(l1?l1.val:0)+(l2?l2.val:0)+carry;carry=s/10|0;cur.next={val:s%10,next:null};cur=cur.next;if(l1)l1=l1.next;if(l2)l2=l2.next;}return d.next;\n}",
    "timeComplexity": "O(max(m,n))",
    "spaceComplexity": "O(max(m,n))",
    "testCases": []
  },
  {
    "id": "copy-list-with-random-pointer",
    "title": "Copy List with Random Pointer",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "hash-map",
    "acceptance": 51,
    "leetcodeLink": "https://leetcode.com/problems/copy-list-with-random-pointer/",
    "tags": [
      "Linked List",
      "hash-map"
    ],
    "description": "A linked list has each node with val, next, and random pointer (pointing to any node or null). Create a deep copy of the list.",
    "examples": [
      {
        "input": "head=[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "output": "[[7,null],[13,0],[11,4],[10,2],[1,0]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤n≤1000",
      "-10^4≤Node.val≤10^4",
      "random is null or points to a node in the list"
    ],
    "hints": [
      "Hash map from original node to its clone.",
      "First pass: create all clones. Second pass: set next and random pointers."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {Node} - copyRandomList\n */\nfunction copyRandomList(head) {\n  // Your solution here\n}",
      "python": "def copyRandomList(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object copyRandomList(head) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto copyRandomList(head) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function copyRandomList(head) {\n  const map=new Map();let cur=head;while(cur){map.set(cur,{val:cur.val,next:null,random:null});cur=cur.next;}cur=head;while(cur){const c=map.get(cur);c.next=map.get(cur.next)||null;c.random=map.get(cur.random)||null;cur=cur.next;}return map.get(head)||null;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "intersection-of-two-linked-lists",
    "title": "Intersection of Two Linked Lists",
    "difficulty": "Easy",
    "ds": "Linked List",
    "pattern": "two-pointers",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/intersection-of-two-linked-lists/",
    "tags": [
      "Linked List",
      "two-pointers"
    ],
    "description": "Given headA and headB of two singly linked lists, return the node at which they intersect. If they do not intersect, return null. In O(m+n) time and O(1) space.",
    "examples": [
      {
        "input": "intersectVal=8, listA=[4,1,8,4,5], listB=[5,6,1,8,4,5]",
        "output": "Node with val=8",
        "explanation": ""
      },
      {
        "input": "intersectVal=0",
        "output": "null",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤m,n≤3*10^4",
      "No cycles",
      "intersectVal is 0 if no intersection"
    ],
    "hints": [
      "Two pointers: when a reaches end, redirect to headB; when b reaches end, redirect to headA.",
      "They will meet at intersection or both reach null."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - getIntersectionNode\n */\nfunction getIntersectionNode(headA, headB) {\n  // Your solution here\n}",
      "python": "def getIntersectionNode(headA, headB):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object getIntersectionNode(headA, headB) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto getIntersectionNode(headA, headB) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function getIntersectionNode(headA, headB) {\n  let a=headA,b=headB;while(a!==b){a=a?a.next:headB;b=b?b.next:headA;}return a;\n}",
    "timeComplexity": "O(m+n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "swap-nodes-in-pairs",
    "title": "Swap Nodes in Pairs",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "in-place-reversal",
    "acceptance": 60,
    "leetcodeLink": "https://leetcode.com/problems/swap-nodes-in-pairs/",
    "tags": [
      "Linked List",
      "in-place-reversal"
    ],
    "description": "Given a linked list, swap every two adjacent nodes and return its head. You must solve without modifying node values.",
    "examples": [
      {
        "input": "head=[1,2,3,4]",
        "output": "[2,1,4,3]",
        "explanation": ""
      },
      {
        "input": "head=[1]",
        "output": "[1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,100]",
      "0≤Node.val≤100"
    ],
    "hints": [
      "Use dummy node. For each pair: disconnect from previous, swap, reconnect."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - swapPairs\n */\nfunction swapPairs(head) {\n  // Your solution here\n}",
      "python": "def swapPairs(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object swapPairs(head) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto swapPairs(head) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function swapPairs(head) {\n  const d={next:head};let p=d;while(p.next&&p.next.next){const a=p.next,b=p.next.next;p.next=b;a.next=b.next;b.next=a;p=a;}return d.next;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "lru-cache",
    "title": "LRU Cache",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "design",
    "acceptance": 41,
    "leetcodeLink": "https://leetcode.com/problems/lru-cache/",
    "tags": [
      "Linked List",
      "design"
    ],
    "description": "Design a data structure for Least Recently Used (LRU) cache. Implement LRUCache(capacity), get(key), and put(key, value). Both operations must be O(1).",
    "examples": [
      {
        "input": "LRUCache(2); put(1,1); put(2,2); get(1)→1; put(3,3); get(2)→-1; get(3)→3",
        "output": "see above",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤capacity≤3000",
      "0≤key≤10^4",
      "0≤value≤10^5",
      "At most 2*10^5 calls total"
    ],
    "hints": [
      "Use HashMap + doubly linked list. Map stores key→node. DLL tracks access order.",
      "On get/put, move accessed node to front. On eviction, remove from back."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {object} - LRUCache\n */\nfunction LRUCache(capacity) {\n  // Your solution here\n}",
      "python": "def LRUCache(capacity):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object LRUCache(capacity) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto LRUCache(capacity) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "// Class-based solution — see LeetCode \n// Core logic:\n// this.cap=capacity;this.map=new Map();this.head={key:0,val:0};this.tail={key:0,val:0};this.head.next=this.tail;this.tail.prev=this.head;",
    "timeComplexity": "O(1) all",
    "spaceComplexity": "O(capacity)",
    "testCases": []
  },
  {
    "id": "sort-list",
    "title": "Sort List",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "divide-and-conquer",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/sort-list/",
    "tags": [
      "Linked List",
      "divide-and-conquer"
    ],
    "description": "Given the head of a linked list, return the list after sorting it in ascending order. Must be O(n log n) time and O(1) space.",
    "examples": [
      {
        "input": "head=[4,2,1,3]",
        "output": "[1,2,3,4]",
        "explanation": ""
      },
      {
        "input": "head=[-1,5,3,4,0]",
        "output": "[-1,0,3,4,5]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,5*10^4]",
      "-10^5≤Node.val≤10^5"
    ],
    "hints": [
      "Merge sort: find middle (slow/fast), split into two halves, sort each, merge."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - sortList\n */\nfunction sortList(head) {\n  // Your solution here\n}",
      "python": "def sortList(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object sortList(head) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto sortList(head) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function sortList(head) {\n  if(!head||!head.next)return head;let s=head,f=head.next;while(f&&f.next)s=s.next,f=f.next.next;const mid=s.next;s.next=null;function merge(a,b){const d={next:null};let c=d;while(a&&b){a.val<=b.val?(c.next=a,a=a.next):(c.next=b,b=b.next);c=c.next;}c.next=a||b;return d.next;}return merge(sortList(head),sortList(mid));\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(log n)",
    "testCases": []
  },
  {
    "id": "odd-even-linked-list",
    "title": "Odd Even Linked List",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "in-place-reversal",
    "acceptance": 59,
    "leetcodeLink": "https://leetcode.com/problems/odd-even-linked-list/",
    "tags": [
      "Linked List",
      "in-place-reversal"
    ],
    "description": "Given the head of a singly linked list, group all nodes with odd indices together followed by all nodes with even indices. The first 2 nodes have indices 1 and 2.",
    "examples": [
      {
        "input": "head=[1,2,3,4,5]",
        "output": "[1,3,5,2,4]",
        "explanation": ""
      },
      {
        "input": "head=[2,1,3,5,6,4,7]",
        "output": "[2,3,6,7,1,5,4]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,10^4]",
      "-10^6≤Node.val≤10^6"
    ],
    "hints": [
      "Use two pointers: odd and even. Walk them forward, relinking.",
      "Save even head. Attach even list to end of odd list."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - oddEvenList\n */\nfunction oddEvenList(head) {\n  // Your solution here\n}",
      "python": "def oddEvenList(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object oddEvenList(head) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto oddEvenList(head) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function oddEvenList(head) {\n  if(!head)return null;let odd=head,even=head.next,evenHead=even;while(even&&even.next){odd.next=even.next;odd=odd.next;even.next=odd.next;even=even.next;}odd.next=evenHead;return head;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "rotate-list",
    "title": "Rotate List",
    "difficulty": "Medium",
    "ds": "Linked List",
    "pattern": "in-place-reversal",
    "acceptance": 37,
    "leetcodeLink": "https://leetcode.com/problems/rotate-list/",
    "tags": [
      "Linked List",
      "in-place-reversal"
    ],
    "description": "Given the head of a linked list and integer k, rotate the list to the right by k places.",
    "examples": [
      {
        "input": "head=[1,2,3,4,5], k=2",
        "output": "[4,5,1,2,3]",
        "explanation": ""
      },
      {
        "input": "head=[0,1,2], k=4",
        "output": "[2,0,1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,500]",
      "-100≤Node.val≤100",
      "0≤k≤2*10^9"
    ],
    "hints": [
      "Make the list circular. Find the new tail (n-k%n - 1 from start) and break the circle."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - rotateRight\n */\nfunction rotateRight(head, k) {\n  // Your solution here\n}",
      "python": "def rotateRight(head, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object rotateRight(head, k) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto rotateRight(head, k) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function rotateRight(head, k) {\n  if(!head||!k)return head;let tail=head,n=1;while(tail.next)tail=tail.next,n++;k%=n;if(!k)return head;tail.next=head;let newTail=head;for(let i=0;i<n-k-1;i++)newTail=newTail.next;const newHead=newTail.next;newTail.next=null;return newHead;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "remove-duplicates-from-sorted-list",
    "title": "Remove Duplicates from Sorted List",
    "difficulty": "Easy",
    "ds": "Linked List",
    "pattern": "in-place-reversal",
    "acceptance": 49,
    "leetcodeLink": "https://leetcode.com/problems/remove-duplicates-from-sorted-list/",
    "tags": [
      "Linked List",
      "in-place-reversal"
    ],
    "description": "Given the head of a sorted linked list, delete all duplicates such that each element appears only once.",
    "examples": [
      {
        "input": "head=[1,1,2]",
        "output": "[1,2]",
        "explanation": ""
      },
      {
        "input": "head=[1,1,2,3,3]",
        "output": "[1,2,3]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,300]",
      "-100≤Node.val≤100",
      "list is sorted"
    ],
    "hints": [
      "While curr.next exists: if curr.val===curr.next.val, skip curr.next. Else advance curr."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - deleteDuplicates\n */\nfunction deleteDuplicates(head) {\n  // Your solution here\n}",
      "python": "def deleteDuplicates(head):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object deleteDuplicates(head) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto deleteDuplicates(head) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function deleteDuplicates(head) {\n  let c=head;while(c&&c.next){if(c.val===c.next.val)c.next=c.next.next;else c=c.next;}return head;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "maximum-depth-of-binary-tree",
    "title": "Maximum Depth of Binary Tree",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 73,
    "leetcodeLink": "https://leetcode.com/problems/maximum-depth-of-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a binary tree, return its maximum depth. Maximum depth is the number of nodes along the longest path from root to farthest leaf.",
    "examples": [
      {
        "input": "root=[3,9,20,null,null,15,7]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "root=[1,null,2]",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,10^4]",
      "-100≤Node.val≤100"
    ],
    "hints": [
      "Recursively: depth = 1 + max(depth(left), depth(right)). Base case: null returns 0.",
      "Iterative BFS: count levels."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxDepth\n */\nfunction maxDepth(root) {\n  // Your solution here\n}",
      "python": "def maxDepth(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxDepth(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxDepth(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxDepth(root) {\n  if(!root)return 0;return 1+Math.max(maxDepth(root.left),maxDepth(root.right));\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "minimum-depth-of-binary-tree",
    "title": "Minimum Depth of Binary Tree",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-bfs",
    "acceptance": 43,
    "leetcodeLink": "https://leetcode.com/problems/minimum-depth-of-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-bfs"
    ],
    "description": "Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from root to the nearest leaf node.",
    "examples": [
      {
        "input": "root=[3,9,20,null,null,15,7]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "root=[2,null,3,null,4,null,5,null,6]",
        "output": "5",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,10^5]",
      "-1000≤Node.val≤1000"
    ],
    "hints": [
      "BFS level order: return depth when first leaf is found.",
      "Recursive: if only one child, must go through it (cannot stop there)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - minDepth\n */\nfunction minDepth(root) {\n  // Your solution here\n}",
      "python": "def minDepth(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int minDepth(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minDepth(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function minDepth(root) {\n  if(!root)return 0;if(!root.left&&!root.right)return 1;if(!root.left)return 1+minDepth(root.right);if(!root.right)return 1+minDepth(root.left);return 1+Math.min(minDepth(root.left),minDepth(root.right));\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "diameter-of-binary-tree",
    "title": "Diameter of Binary Tree",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/diameter-of-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a binary tree, return its diameter. The diameter is the length of the longest path between any two nodes (it may or may not pass through the root). Length = number of edges.",
    "examples": [
      {
        "input": "root=[1,2,3,4,5]",
        "output": "3",
        "explanation": "[4,2,1,3] or [5,2,1,3]"
      },
      {
        "input": "root=[1,2]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,10^4]",
      "-100≤Node.val≤100"
    ],
    "hints": [
      "DFS that returns height. At each node, update diameter with left_height+right_height."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - diameterOfBinaryTree\n */\nfunction diameterOfBinaryTree(root) {\n  // Your solution here\n}",
      "python": "def diameterOfBinaryTree(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int diameterOfBinaryTree(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int diameterOfBinaryTree(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function diameterOfBinaryTree(root) {\n  let max=0;function dfs(node){if(!node)return 0;const l=dfs(node.left),r=dfs(node.right);max=Math.max(max,l+r);return 1+Math.max(l,r);}dfs(root);return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "balanced-binary-tree",
    "title": "Balanced Binary Tree",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 50,
    "leetcodeLink": "https://leetcode.com/problems/balanced-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given a binary tree, determine if it is height-balanced. A height-balanced tree is one where the depths of every node's two subtrees differ by at most one.",
    "examples": [
      {
        "input": "root=[3,9,20,null,null,15,7]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "root=[1,2,2,3,3,null,null,4,4]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,5000]",
      "-10^4≤Node.val≤10^4"
    ],
    "hints": [
      "DFS returns height or -1 if unbalanced. If Math.abs(left-right)>1, return -1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isBalanced\n */\nfunction isBalanced(root) {\n  // Your solution here\n}",
      "python": "def isBalanced(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isBalanced(root) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isBalanced(root) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isBalanced(root) {\n  function h(n){if(!n)return 0;const l=h(n.left),r=h(n.right);if(l===-1||r===-1||Math.abs(l-r)>1)return-1;return 1+Math.max(l,r);}return h(root)!==-1;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "same-tree",
    "title": "Same Tree",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 59,
    "leetcodeLink": "https://leetcode.com/problems/same-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the roots of two binary trees p and q, write a function to check if they are the same or not. Two binary trees are considered the same if they are structurally identical and the nodes have the same value.",
    "examples": [
      {
        "input": "p=[1,2,3], q=[1,2,3]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "p=[1,2], q=[1,null,2]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,100]",
      "-10^4≤Node.val≤10^4"
    ],
    "hints": [
      "Check recursively: roots must be equal, left subtrees equal, right subtrees equal."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isSameTree\n */\nfunction isSameTree(p, q) {\n  // Your solution here\n}",
      "python": "def isSameTree(p, q):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isSameTree(p, q) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isSameTree(p, q) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isSameTree(p, q) {\n  if(!p&&!q)return true;if(!p||!q)return false;return p.val===q.val&&isSameTree(p.left,q.left)&&isSameTree(p.right,q.right);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "subtree-of-another-tree",
    "title": "Subtree of Another Tree",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/subtree-of-another-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values as subRoot, false otherwise.",
    "examples": [
      {
        "input": "root=[3,4,5,1,2], subRoot=[4,1,2]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "root=[3,4,5,1,2,null,null,null,null,0], subRoot=[4,1,2]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,2000]",
      "-10^4≤Node.val≤10^4"
    ],
    "hints": [
      "For each node in root, check if it matches subRoot using isSameTree.",
      "Time: O(m*n) where m=root size, n=subRoot size."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isSubtree\n */\nfunction isSubtree(root, subRoot) {\n  // Your solution here\n}",
      "python": "def isSubtree(root, subRoot):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isSubtree(root, subRoot) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isSubtree(root, subRoot) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isSubtree(root, subRoot) {\n  function same(a,b){if(!a&&!b)return true;if(!a||!b)return false;return a.val===b.val&&same(a.left,b.left)&&same(a.right,b.right);}if(!root)return false;return same(root,subRoot)||isSubtree(root.left,subRoot)||isSubtree(root.right,subRoot);\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "invert-binary-tree",
    "title": "Invert Binary Tree",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 76,
    "leetcodeLink": "https://leetcode.com/problems/invert-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a binary tree, invert the tree and return its root. Mirror all nodes along the vertical axis.",
    "examples": [
      {
        "input": "root=[4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]",
        "explanation": ""
      },
      {
        "input": "root=[2,1,3]",
        "output": "[2,3,1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,100]",
      "-100≤Node.val≤100"
    ],
    "hints": [
      "Swap left and right children at each node recursively."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} - invertTree\n */\nfunction invertTree(root) {\n  // Your solution here\n}",
      "python": "def invertTree(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object invertTree(root) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto invertTree(root) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function invertTree(root) {\n  if(!root)return null;[root.left,root.right]=[root.right,root.left];invertTree(root.left);invertTree(root.right);return root;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "binary-tree-level-order-traversal",
    "title": "Binary Tree Level Order Traversal",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-bfs",
    "acceptance": 65,
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-level-order-traversal/",
    "tags": [
      "Binary Tree",
      "tree-bfs"
    ],
    "description": "Given the root of a binary tree, return the level order traversal of its nodes' values (left to right, level by level) as a 2D array.",
    "examples": [
      {
        "input": "root=[3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
        "explanation": ""
      },
      {
        "input": "root=[1]",
        "output": "[[1]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,2000]",
      "-1000≤Node.val≤1000"
    ],
    "hints": [
      "BFS with queue. For each level, process all nodes in queue (queue.length at start of level).",
      "Add non-null children to queue."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - levelOrder\n */\nfunction levelOrder(root) {\n  // Your solution here\n}",
      "python": "def levelOrder(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] levelOrder(root) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> levelOrder(root) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function levelOrder(root) {\n  if(!root)return[];const res=[],q=[root];while(q.length){const lvl=[],sz=q.length;for(let i=0;i<sz;i++){const n=q.shift();lvl.push(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);}res.push(lvl);}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "binary-tree-right-side-view",
    "title": "Binary Tree Right Side View",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-bfs",
    "acceptance": 61,
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-right-side-view/",
    "tags": [
      "Binary Tree",
      "tree-bfs"
    ],
    "description": "Given the root of a binary tree, imagine standing on the right side. Return the values of the nodes you can see ordered from top to bottom.",
    "examples": [
      {
        "input": "root=[1,2,3,null,5,null,4]",
        "output": "[1,3,4]",
        "explanation": ""
      },
      {
        "input": "root=[1,null,3]",
        "output": "[1,3]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,100]",
      "-100≤Node.val≤100"
    ],
    "hints": [
      "BFS level order. The last node in each level is visible from the right."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - rightSideView\n */\nfunction rightSideView(root) {\n  // Your solution here\n}",
      "python": "def rightSideView(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] rightSideView(root) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> rightSideView(root) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function rightSideView(root) {\n  if(!root)return[];const res=[],q=[root];while(q.length){const sz=q.length;for(let i=0;i<sz;i++){const n=q.shift();if(i===sz-1)res.push(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);}}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "binary-tree-zigzag-level-order-traversal",
    "title": "Binary Tree Zigzag Level Order Traversal",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-bfs",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/",
    "tags": [
      "Binary Tree",
      "tree-bfs"
    ],
    "description": "Given the root of a binary tree, return the zigzag level order traversal (left→right for level 1, right→left for level 2, etc.) as a 2D array.",
    "examples": [
      {
        "input": "root=[3,9,20,null,null,15,7]",
        "output": "[[3],[20,9],[15,7]]",
        "explanation": ""
      },
      {
        "input": "root=[1]",
        "output": "[[1]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,2000]",
      "-100≤Node.val≤100"
    ],
    "hints": [
      "BFS level order. Alternate reversing each level (use a flag)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - zigzagLevelOrder\n */\nfunction zigzagLevelOrder(root) {\n  // Your solution here\n}",
      "python": "def zigzagLevelOrder(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] zigzagLevelOrder(root) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> zigzagLevelOrder(root) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function zigzagLevelOrder(root) {\n  if(!root)return[];const res=[],q=[root];let left=true;while(q.length){const sz=q.length,lvl=[];for(let i=0;i<sz;i++){const n=q.shift();lvl.push(n.val);if(n.left)q.push(n.left);if(n.right)q.push(n.right);}res.push(left?lvl:[...lvl].reverse());left=!left;}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "count-good-nodes-in-binary-tree",
    "title": "Count Good Nodes in Binary Tree",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 72,
    "leetcodeLink": "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given a binary tree root, a node X is good if the path from root to X contains no nodes with a value greater than X.val. Return the number of good nodes.",
    "examples": [
      {
        "input": "root=[3,1,4,3,null,1,5]",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "root=[3,3,null,4,2]",
        "output": "3",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,10^5]",
      "-10^4≤Node.val≤10^4"
    ],
    "hints": [
      "DFS passing the max value seen so far on the path. If node.val >= max, it is a good node."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - goodNodes\n */\nfunction goodNodes(root) {\n  // Your solution here\n}",
      "python": "def goodNodes(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int goodNodes(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int goodNodes(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function goodNodes(root) {\n  let cnt=0;function dfs(n,mx){if(!n)return;if(n.val>=mx)cnt++;dfs(n.left,Math.max(mx,n.val));dfs(n.right,Math.max(mx,n.val));}dfs(root,-Infinity);return cnt;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "validate-binary-search-tree",
    "title": "Validate Binary Search Tree",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 32,
    "leetcodeLink": "https://leetcode.com/problems/validate-binary-search-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a binary tree, determine if it is a valid binary search tree. In a valid BST, left subtree nodes are strictly less than root, and right subtree nodes are strictly greater.",
    "examples": [
      {
        "input": "root=[2,1,3]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "root=[5,1,4,null,null,3,6]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,10^4]",
      "-2^31≤Node.val≤2^31-1"
    ],
    "hints": [
      "DFS with min/max bounds. Each node must be in (min, max) range.",
      "Left child: max becomes parent val. Right child: min becomes parent val."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isValidBST\n */\nfunction isValidBST(root) {\n  // Your solution here\n}",
      "python": "def isValidBST(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isValidBST(root) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isValidBST(root) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isValidBST(root) {\n  function dfs(n,min,max){if(!n)return true;if(n.val<=min||n.val>=max)return false;return dfs(n.left,min,n.val)&&dfs(n.right,n.val,max);}return dfs(root,-Infinity,Infinity);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "kth-smallest-element-in-a-bst",
    "title": "Kth Smallest Element in a BST",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 69,
    "leetcodeLink": "https://leetcode.com/problems/kth-smallest-element-in-a-bst/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a binary search tree and integer k, return the kth smallest value (1-indexed) of all values in the tree.",
    "examples": [
      {
        "input": "root=[3,1,4,null,2], k=1",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "root=[5,3,6,2,4,null,null,1], k=3",
        "output": "3",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes n, 1≤k≤n≤10^4",
      "0≤Node.val≤10^4"
    ],
    "hints": [
      "Inorder traversal of BST gives sorted values. Return the kth one."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - kthSmallest\n */\nfunction kthSmallest(root, k) {\n  // Your solution here\n}",
      "python": "def kthSmallest(root, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int kthSmallest(root, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int kthSmallest(root, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function kthSmallest(root, k) {\n  let cnt=0,res=0;function inorder(n){if(!n)return;inorder(n.left);if(++cnt===k){res=n.val;return;}inorder(n.right);}inorder(root);return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "lowest-common-ancestor-of-a-binary-search-tree",
    "title": "Lowest Common Ancestor of a Binary Search Tree",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 59,
    "leetcodeLink": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given a BST and two nodes p and q, find their lowest common ancestor. The LCA is the lowest node in the tree that has both p and q as descendants.",
    "examples": [
      {
        "input": "root=[6,2,8,0,4,7,9,null,null,3,5], p=2, q=8",
        "output": "6",
        "explanation": ""
      },
      {
        "input": "p=2,q=4",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [2,10^5]",
      "-10^9≤Node.val≤10^9",
      "All values unique, p≠q, p and q exist in BST"
    ],
    "hints": [
      "In BST: if both p and q are less than root, LCA is in left subtree. If both greater, in right.",
      "If split (or one equals root), root is the LCA."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} - lowestCommonAncestor\n */\nfunction lowestCommonAncestor(root, p, q) {\n  // Your solution here\n}",
      "python": "def lowestCommonAncestor(root, p, q):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object lowestCommonAncestor(root, p, q) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto lowestCommonAncestor(root, p, q) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function lowestCommonAncestor(root, p, q) {\n  while(root){if(p.val<root.val&&q.val<root.val)root=root.left;else if(p.val>root.val&&q.val>root.val)root=root.right;else return root;}return root;\n}",
    "timeComplexity": "O(h)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "lowest-common-ancestor-of-a-binary-tree",
    "title": "Lowest Common Ancestor of a Binary Tree",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 59,
    "leetcodeLink": "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given a binary tree (not BST) and two nodes p and q, find their lowest common ancestor (lowest node having both as descendants, where a node can be a descendant of itself).",
    "examples": [
      {
        "input": "root=[3,5,1,6,2,0,8,null,null,7,4], p=5, q=1",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "p=5,q=4",
        "output": "5",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [2,10^5]",
      "-10^9≤Node.val≤10^9",
      "All values unique"
    ],
    "hints": [
      "If root is null or equals p or q, return root. Recurse on left and right.",
      "If both sides return non-null, root is LCA. Else return the non-null side."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} - lowestCommonAncestor\n */\nfunction lowestCommonAncestor(root, p, q) {\n  // Your solution here\n}",
      "python": "def lowestCommonAncestor(root, p, q):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object lowestCommonAncestor(root, p, q) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto lowestCommonAncestor(root, p, q) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function lowestCommonAncestor(root, p, q) {\n  if(!root||root===p||root===q)return root;const l=lowestCommonAncestor(root.left,p,q),r=lowestCommonAncestor(root.right,p,q);return l&&r?root:l||r;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "binary-tree-maximum-path-sum",
    "title": "Binary Tree Maximum Path Sum",
    "difficulty": "Hard",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 38,
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-maximum-path-sum/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. The path does not need to pass through the root. Given root, return the maximum path sum.",
    "examples": [
      {
        "input": "root=[1,2,3]",
        "output": "6",
        "explanation": ""
      },
      {
        "input": "root=[-10,9,20,null,null,15,7]",
        "output": "42",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,3*10^4]",
      "-1000≤Node.val≤1000"
    ],
    "hints": [
      "DFS: for each node, compute max gain from left and right (0 if negative).",
      "Update global max with node.val+leftGain+rightGain. Return node.val+max(left,right)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxPathSum\n */\nfunction maxPathSum(root) {\n  // Your solution here\n}",
      "python": "def maxPathSum(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxPathSum(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxPathSum(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxPathSum(root) {\n  let max=-Infinity;function dfs(n){if(!n)return 0;const l=Math.max(0,dfs(n.left)),r=Math.max(0,dfs(n.right));max=Math.max(max,n.val+l+r);return n.val+Math.max(l,r);}dfs(root);return max;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "construct-binary-tree-from-preorder-and-inorder-traversal",
    "title": "Construct Binary Tree from Preorder and Inorder Traversal",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 61,
    "leetcodeLink": "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given two integer arrays preorder and inorder (traversals of same tree), construct and return the binary tree.",
    "examples": [
      {
        "input": "preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]",
        "output": "[3,9,20,null,null,15,7]",
        "explanation": ""
      },
      {
        "input": "preorder=[-1], inorder=[-1]",
        "output": "[-1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤3000",
      "All values are unique"
    ],
    "hints": [
      "First element of preorder is root. Find root in inorder to split into left/right subtrees.",
      "Recursively build left subtree from left portions, right from right portions."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} - buildTree\n */\nfunction buildTree(preorder, inorder) {\n  // Your solution here\n}",
      "python": "def buildTree(preorder, inorder):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object buildTree(preorder, inorder) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto buildTree(preorder, inorder) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function buildTree(preorder, inorder) {\n  if(!preorder.length)return null;const rootVal=preorder[0],mid=inorder.indexOf(rootVal);const root={val:rootVal,left:null,right:null};root.left=buildTree(preorder.slice(1,mid+1),inorder.slice(0,mid));root.right=buildTree(preorder.slice(mid+1),inorder.slice(mid+1));return root;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "serialize-and-deserialize-binary-tree",
    "title": "Serialize and Deserialize Binary Tree",
    "difficulty": "Hard",
    "ds": "Binary Tree",
    "pattern": "tree-bfs",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-bfs"
    ],
    "description": "Design an algorithm to serialize (convert to string) and deserialize (convert back to tree) a binary tree. No restrictions on format.",
    "examples": [
      {
        "input": "root=[1,2,3,null,null,4,5]",
        "output": "[1,2,3,null,null,4,5]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,10^4]",
      "Node values in [-1000,1000]"
    ],
    "hints": [
      "BFS serialize: queue-based level order with null markers.",
      "Deserialize: split string, rebuild with queue tracking parent nodes."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - serialize\n */\nfunction serialize(root) {\n  // Your solution here\n}",
      "python": "def serialize(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String serialize(root) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string serialize(root) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function serialize(root) {\n  function serialize(r){if(!r)return\"N\";const q=[r],res=[];while(q.length){const n=q.shift();if(n){res.push(n.val);q.push(n.left,n.right);}else res.push(\"N\");}return res.join(\",\");}function deserialize(d){const v=d.split(\",\");if(v[0]===\"N\")return null;const root={val:+v[0],left:null,right:null},q=[root];let i=1;while(q.length){const n=q.shift();if(v[i]!==\"N\"){n.left={val:+v[i],left:null,right:null};q.push(n.left);}i++;if(v[i]!==\"N\"){n.right={val:+v[i],left:null,right:null};q.push(n.right);}i++;}return root;}\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "path-sum",
    "title": "Path Sum",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 47,
    "leetcodeLink": "https://leetcode.com/problems/path-sum/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a binary tree and integer targetSum, return true if the tree has a root-to-leaf path such that adding up all values along the path equals targetSum.",
    "examples": [
      {
        "input": "root=[5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum=22",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "root=[1,2,3], targetSum=5",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,5000]",
      "-1000≤Node.val≤1000"
    ],
    "hints": [
      "DFS: subtract node value from target. At leaf, check if remaining is 0."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - hasPathSum\n */\nfunction hasPathSum(root, targetSum) {\n  // Your solution here\n}",
      "python": "def hasPathSum(root, targetSum):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean hasPathSum(root, targetSum) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool hasPathSum(root, targetSum) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function hasPathSum(root, targetSum) {\n  if(!root)return false;if(!root.left&&!root.right)return root.val===targetSum;return hasPathSum(root.left,targetSum-root.val)||hasPathSum(root.right,targetSum-root.val);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "path-sum-ii",
    "title": "Path Sum II",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/path-sum-ii/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a binary tree and targetSum, return all root-to-leaf paths where the sum of values equals targetSum. Each path should be returned as a list of node values.",
    "examples": [
      {
        "input": "root=[5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum=22",
        "output": "[[5,4,11,2],[5,8,4,5]]",
        "explanation": ""
      },
      {
        "input": "root=[1,2,3], targetSum=5",
        "output": "[]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,5000]",
      "-1000≤Node.val≤1000"
    ],
    "hints": [
      "DFS with backtracking. Add node to path, recurse on children, remove on backtrack.",
      "At leaf, if remaining sum is 0, add copy of path to result."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - pathSum\n */\nfunction pathSum(root, targetSum) {\n  // Your solution here\n}",
      "python": "def pathSum(root, targetSum):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] pathSum(root, targetSum) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> pathSum(root, targetSum) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function pathSum(root, targetSum) {\n  const res=[];function dfs(n,rem,path){if(!n)return;path.push(n.val);if(!n.left&&!n.right&&rem===n.val)res.push([...path]);dfs(n.left,rem-n.val,path);dfs(n.right,rem-n.val,path);path.pop();}dfs(root,targetSum,[]);return res;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "flatten-binary-tree-to-linked-list",
    "title": "Flatten Binary Tree to Linked List",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 60,
    "leetcodeLink": "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a binary tree, flatten it into a linked list in-place. The linked list should follow preorder traversal order and use right pointers.",
    "examples": [
      {
        "input": "root=[1,2,5,3,4,null,6]",
        "output": "[1,null,2,null,3,null,4,null,5,null,6]",
        "explanation": ""
      },
      {
        "input": "root=[]",
        "output": "[]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,2000]",
      "-100≤Node.val≤100"
    ],
    "hints": [
      "Morris-style: for each node with left child, find rightmost of left subtree and attach right child there.",
      "Then move left subtree to right."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - flatten\n */\nfunction flatten(root) {\n  // Your solution here\n}",
      "python": "def flatten(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void flatten(root) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void flatten(root) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function flatten(root) {\n  let cur=root;while(cur){if(cur.left){let p=cur.left;while(p.right)p=p.right;p.right=cur.right;cur.right=cur.left;cur.left=null;}cur=cur.right;}\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "sum-root-to-leaf-numbers",
    "title": "Sum Root to Leaf Numbers",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/sum-root-to-leaf-numbers/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given a binary tree where each node contains a digit (0-9), return the total sum of all root-to-leaf numbers. A root-to-leaf path representing digits 1→2→3 forms the number 123.",
    "examples": [
      {
        "input": "root=[1,2,3]",
        "output": "25",
        "explanation": "12+13=25"
      },
      {
        "input": "root=[4,9,0,5,1]",
        "output": "1026",
        "explanation": "495+491+40=1026"
      }
    ],
    "constraints": [
      "Number of nodes in [1,1000]",
      "0≤Node.val≤9",
      "Depth does not exceed 10"
    ],
    "hints": [
      "DFS passing current accumulated number. At leaf, add to total.",
      "currentNum = parentNum*10 + node.val"
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - sumNumbers\n */\nfunction sumNumbers(root) {\n  // Your solution here\n}",
      "python": "def sumNumbers(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int sumNumbers(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int sumNumbers(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function sumNumbers(root) {\n  let total=0;function dfs(n,cur){if(!n)return;cur=cur*10+n.val;if(!n.left&&!n.right)total+=cur;dfs(n.left,cur);dfs(n.right,cur);}dfs(root,0);return total;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "binary-tree-cameras",
    "title": "Binary Tree Cameras",
    "difficulty": "Hard",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 43,
    "leetcodeLink": "https://leetcode.com/problems/binary-tree-cameras/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given a binary tree, place cameras on some nodes to monitor the tree. Each camera monitors the node, its parent, and its children. Return the minimum number of cameras needed to monitor all nodes.",
    "examples": [
      {
        "input": "root=[0,0,null,0,0]",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "root=[0,0,null,0,null,0,null,null,0]",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,1000]",
      "Node.val==0"
    ],
    "hints": [
      "DFS returning state: 0=unmonitored, 1=monitored without camera, 2=has camera.",
      "If any child is unmonitored (state 0), place camera here."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - minCameraCover\n */\nfunction minCameraCover(root) {\n  // Your solution here\n}",
      "python": "def minCameraCover(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int minCameraCover(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minCameraCover(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function minCameraCover(root) {\n  let cams=0;function dfs(n){if(!n)return 1;const l=dfs(n.left),r=dfs(n.right);if(l===0||r===0){cams++;return 2;}if(l===2||r===2)return 1;return 0;}if(dfs(root)===0)cams++;return cams;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "maximum-binary-tree",
    "title": "Maximum Binary Tree",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 82,
    "leetcodeLink": "https://leetcode.com/problems/maximum-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given integer array nums, build a maximum binary tree: the root is the max of nums, left subtree is from elements before max, right subtree from elements after max. Return the root.",
    "examples": [
      {
        "input": "nums=[3,2,1,6,0,5]",
        "output": "[6,3,5,null,2,0,null,null,1]",
        "explanation": ""
      },
      {
        "input": "nums=[3,2,1]",
        "output": "[3,null,2,null,1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤1000",
      "0≤nums[i]≤1000",
      "All integers in nums are unique"
    ],
    "hints": [
      "Find max element index. Create root. Recursively build left from nums[0..max-1] and right from nums[max+1..]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} - constructMaximumBinaryTree\n */\nfunction constructMaximumBinaryTree(nums) {\n  // Your solution here\n}",
      "python": "def constructMaximumBinaryTree(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object constructMaximumBinaryTree(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto constructMaximumBinaryTree(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function constructMaximumBinaryTree(nums) {\n  if(!nums.length)return null;const mi=nums.indexOf(Math.max(...nums));return{val:nums[mi],left:constructMaximumBinaryTree(nums.slice(0,mi)),right:constructMaximumBinaryTree(nums.slice(mi+1))};\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "convert-bst-to-greater-tree",
    "title": "Convert BST to Greater Tree",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 66,
    "leetcodeLink": "https://leetcode.com/problems/convert-bst-to-greater-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a Binary Search Tree, convert it to a Greater Tree such that each key is updated to be the original key plus the sum of all keys greater than it.",
    "examples": [
      {
        "input": "root=[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]",
        "output": "[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,10^4]",
      "0≤Node.val≤10^4"
    ],
    "hints": [
      "Reverse inorder (right→root→left). Maintain running sum. Update each node."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} - convertBST\n */\nfunction convertBST(root) {\n  // Your solution here\n}",
      "python": "def convertBST(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object convertBST(root) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto convertBST(root) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function convertBST(root) {\n  let sum=0;function dfs(n){if(!n)return;dfs(n.right);sum+=n.val;n.val=sum;dfs(n.left);}dfs(root);return root;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "all-nodes-distance-k-in-binary-tree",
    "title": "All Nodes Distance K in Binary Tree",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-bfs",
    "acceptance": 61,
    "leetcodeLink": "https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/",
    "tags": [
      "Binary Tree",
      "tree-bfs"
    ],
    "description": "Given the root of a binary tree, a target node, and integer k, return all nodes at distance k from the target node.",
    "examples": [
      {
        "input": "root=[3,5,1,6,2,0,8,null,null,7,4], target=5, k=2",
        "output": "[7,4,1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,500]",
      "0≤Node.val≤500",
      "All values unique",
      "target is a node in the tree"
    ],
    "hints": [
      "Build parent map with DFS. Then BFS from target node, tracking visited."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - distanceK\n */\nfunction distanceK(root, target, k) {\n  // Your solution here\n}",
      "python": "def distanceK(root, target, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] distanceK(root, target, k) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> distanceK(root, target, k) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function distanceK(root, target, k) {\n  const parent=new Map();function buildParent(n,p){if(!n)return;parent.set(n,p);buildParent(n.left,n);buildParent(n.right,n);}buildParent(root,null);const visited=new Set(),q=[target];let dist=0;while(q.length&&dist<k){const sz=q.length;for(let i=0;i<sz;i++){const n=q.shift();visited.add(n);const neighbors=[n.left,n.right,parent.get(n)];for(const nb of neighbors)if(nb&&!visited.has(nb))q.push(nb);}dist++;}return q.map(n=>n.val);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "house-robber-iii",
    "title": "House Robber III",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 53,
    "leetcodeLink": "https://leetcode.com/problems/house-robber-iii/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "In a BST-shaped neighborhood, houses are connected. Adjacent connected houses trigger alarms. Given tree root, return the max money you can rob without robbing directly linked houses.",
    "examples": [
      {
        "input": "root=[3,2,3,null,3,null,1]",
        "output": "7",
        "explanation": "rob 3+3+1"
      },
      {
        "input": "root=[3,4,5,1,3,null,1]",
        "output": "9",
        "explanation": "rob 4+5"
      }
    ],
    "constraints": [
      "Number of nodes in [1,10^4]",
      "0≤Node.val≤10^4"
    ],
    "hints": [
      "DFS returns [rob_this, skip_this]. With: rob_this = val+skip_left+skip_right. skip_this = max(rob_left,skip_left)+max(rob_right,skip_right)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - rob\n */\nfunction rob(root) {\n  // Your solution here\n}",
      "python": "def rob(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int rob(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int rob(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function rob(root) {\n  function dfs(n){if(!n)return[0,0];const[lr,ls]=dfs(n.left),[rr,rs]=dfs(n.right);return[n.val+ls+rs,Math.max(lr,ls)+Math.max(rr,rs)];}return Math.max(...dfs(root));\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "count-complete-tree-nodes",
    "title": "Count Complete Tree Nodes",
    "difficulty": "Easy",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 60,
    "leetcodeLink": "https://leetcode.com/problems/count-complete-tree-nodes/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a complete binary tree, return the number of nodes. Design an algorithm that runs in O(log²n).",
    "examples": [
      {
        "input": "root=[1,2,3,4,5,6]",
        "output": "6",
        "explanation": ""
      },
      {
        "input": "root=[]",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,5*10^4]",
      "0≤Node.val≤5*10^4",
      "The tree is guaranteed complete"
    ],
    "hints": [
      "Calculate left height and right height. If equal, left subtree is full: count = 2^h-1+recurse(right)+1.",
      "Else right subtree is full: count = 2^(h-1)-1+recurse(left)+1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - countNodes\n */\nfunction countNodes(root) {\n  // Your solution here\n}",
      "python": "def countNodes(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int countNodes(root) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int countNodes(root) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function countNodes(root) {\n  if(!root)return 0;let l=root,r=root,lh=0,rh=0;while(l)lh++,l=l.left;while(r)rh++,r=r.right;if(lh===rh)return(1<<lh)-1;return 1+countNodes(root.left)+countNodes(root.right);\n}",
    "timeComplexity": "O(log²n)",
    "spaceComplexity": "O(log n)",
    "testCases": []
  },
  {
    "id": "kth-largest-element-in-an-array",
    "title": "Kth Largest Element in an Array",
    "difficulty": "Medium",
    "ds": "Heap",
    "pattern": "top-k-elements",
    "acceptance": 65,
    "leetcodeLink": "https://leetcode.com/problems/kth-largest-element-in-an-array/",
    "tags": [
      "Heap",
      "top-k-elements"
    ],
    "description": "Given an integer array nums and integer k, return the kth largest element in the array (not the kth distinct element). Can you solve without sorting?",
    "examples": [
      {
        "input": "nums=[3,2,1,5,6,4], k=2",
        "output": "5",
        "explanation": ""
      },
      {
        "input": "nums=[3,2,3,1,2,4,5,5,6], k=4",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤k≤nums.length≤10^5",
      "-10^4≤nums[i]≤10^4"
    ],
    "hints": [
      "QuickSelect: partition around pivot. If pivot index = n-k, return pivot.",
      "Or: use min-heap of size k. Top of heap is the kth largest."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findKthLargest\n */\nfunction findKthLargest(nums, k) {\n  // Your solution here\n}",
      "python": "def findKthLargest(nums, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findKthLargest(nums, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findKthLargest(nums, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findKthLargest(nums, k) {\n  function qs(l,r){const p=nums[r];let i=l;for(let j=l;j<r;j++)if(nums[j]<=p)[nums[i],nums[j]]=[nums[j],nums[i++]];[nums[i],nums[r]]=[nums[r],nums[i]];return i;}let l=0,r=nums.length-1,t=nums.length-k;while(l<=r){const i=qs(l,r);if(i===t)return nums[i];i<t?l=i+1:r=i-1;}return nums[l];\n}",
    "timeComplexity": "O(n) avg",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "top-k-frequent-elements",
    "title": "Top K Frequent Elements",
    "difficulty": "Medium",
    "ds": "Heap",
    "pattern": "top-k-elements",
    "acceptance": 64,
    "leetcodeLink": "https://leetcode.com/problems/top-k-frequent-elements/",
    "tags": [
      "Heap",
      "top-k-elements"
    ],
    "description": "Given an integer array nums and integer k, return the k most frequent elements. You may return the answer in any order.",
    "examples": [
      {
        "input": "nums=[1,1,1,2,2,3], k=2",
        "output": "[1,2]",
        "explanation": ""
      },
      {
        "input": "nums=[1], k=1",
        "output": "[1]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^5",
      "-10^4≤nums[i]≤10^4",
      "k is in range [1, number of unique elements]"
    ],
    "hints": [
      "Count frequencies. Bucket sort where index=frequency. Collect from largest bucket down."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - topKFrequent\n */\nfunction topKFrequent(nums, k) {\n  // Your solution here\n}",
      "python": "def topKFrequent(nums, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] topKFrequent(nums, k) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> topKFrequent(nums, k) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function topKFrequent(nums, k) {\n  const freq=new Map();for(const n of nums)freq.set(n,(freq.get(n)||0)+1);const buckets=Array.from({length:nums.length+1},()=>[]);for(const[n,f]of freq)buckets[f].push(n);const res=[];for(let i=buckets.length-1;i>=0&&res.length<k;i--)res.push(...buckets[i]);return res.slice(0,k);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "k-closest-points-to-origin",
    "title": "K Closest Points to Origin",
    "difficulty": "Medium",
    "ds": "Heap",
    "pattern": "top-k-elements",
    "acceptance": 65,
    "leetcodeLink": "https://leetcode.com/problems/k-closest-points-to-origin/",
    "tags": [
      "Heap",
      "top-k-elements"
    ],
    "description": "Given an array of points where points[i]=[xi,yi], return the k closest to the origin (0,0). Distance is Euclidean. Return in any order.",
    "examples": [
      {
        "input": "points=[[1,3],[-2,2]], k=1",
        "output": "[[-2,2]]",
        "explanation": ""
      },
      {
        "input": "points=[[3,3],[5,-1],[-2,4]], k=2",
        "output": "[[3,3],[-2,4]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤k≤points.length≤10^4",
      "-10^4≤xi,yi≤10^4"
    ],
    "hints": [
      "Partial sort / QuickSelect on distance squared. Or sort and take first k."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - kClosest\n */\nfunction kClosest(points, k) {\n  // Your solution here\n}",
      "python": "def kClosest(points, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] kClosest(points, k) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> kClosest(points, k) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function kClosest(points, k) {\n  return points.sort((a,b)=>a[0]*a[0]+a[1]*a[1]-b[0]*b[0]-b[1]*b[1]).slice(0,k);\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "find-median-from-data-stream",
    "title": "Find Median from Data Stream",
    "difficulty": "Hard",
    "ds": "Heap",
    "pattern": "two-heaps",
    "acceptance": 51,
    "leetcodeLink": "https://leetcode.com/problems/find-median-from-data-stream/",
    "tags": [
      "Heap",
      "two-heaps"
    ],
    "description": "Implement MedianFinder class: addNum(int num) adds a number. findMedian() returns the median of all elements. If even count, median is average of two middle values.",
    "examples": [
      {
        "input": "addNum(1); addNum(2); findMedian()→1.5; addNum(3); findMedian()→2.0",
        "output": "see above",
        "explanation": ""
      }
    ],
    "constraints": [
      "At most 5*10^4 calls to addNum and findMedian",
      "-10^5≤num≤10^5"
    ],
    "hints": [
      "Use two heaps: max-heap for lower half, min-heap for upper half.",
      "Balance heaps so sizes differ by at most 1. Median is max of lower or avg of both tops."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {object} - MedianFinder\n */\nfunction MedianFinder(input) {\n  // Your solution here\n}",
      "python": "def MedianFinder(input):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object MedianFinder(input) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto MedianFinder(input) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "// Class-based solution — see LeetCode \n// Core logic:\n// this.lo=[];this.hi=[];",
    "timeComplexity": "O(log n) add, O(1) find",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "task-scheduler",
    "title": "Task Scheduler",
    "difficulty": "Medium",
    "ds": "Heap",
    "pattern": "top-k-elements",
    "acceptance": 57,
    "leetcodeLink": "https://leetcode.com/problems/task-scheduler/",
    "tags": [
      "Heap",
      "top-k-elements"
    ],
    "description": "Given a list of CPU tasks represented by letters with a cooldown n, find the minimum number of intervals needed to execute all tasks. Same task must wait at least n intervals between executions.",
    "examples": [
      {
        "input": "tasks=[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n=2",
        "output": "8",
        "explanation": ""
      },
      {
        "input": "tasks=[\"A\",\"A\",\"A\",\"B\",\"B\",\"B\"], n=0",
        "output": "6",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤tasks.length≤10^4",
      "tasks[i] is uppercase letter",
      "0≤n≤100"
    ],
    "hints": [
      "Count frequencies. Formula: result = max((maxFreq-1)*(n+1) + countOfMaxFreq, tasks.length)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - leastInterval\n */\nfunction leastInterval(tasks, n) {\n  // Your solution here\n}",
      "python": "def leastInterval(tasks, n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int leastInterval(tasks, n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int leastInterval(tasks, n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function leastInterval(tasks, n) {\n  const cnt=new Array(26).fill(0);for(const t of tasks)cnt[t.charCodeAt(0)-65]++;cnt.sort((a,b)=>b-a);const maxF=cnt[0];let maxCount=0;for(const c of cnt)if(c===maxF)maxCount++;return Math.max(tasks.length,(maxF-1)*(n+1)+maxCount);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "last-stone-weight",
    "title": "Last Stone Weight",
    "difficulty": "Easy",
    "ds": "Heap",
    "pattern": "top-k-elements",
    "acceptance": 62,
    "leetcodeLink": "https://leetcode.com/problems/last-stone-weight/",
    "tags": [
      "Heap",
      "top-k-elements"
    ],
    "description": "You have stones with weights. Each turn smash the two heaviest: if x≤y, x destroyed, y becomes y-x. Continue until at most 1 stone left. Return the weight of last stone (or 0 if none).",
    "examples": [
      {
        "input": "stones=[2,7,4,1,8,1]",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "stones=[1]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤stones.length≤30",
      "1≤stones[i]≤1000"
    ],
    "hints": [
      "Use a max-heap. Extract two largest, compute difference, push back if nonzero.",
      "Continue until heap has 0 or 1 element."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - lastStoneWeight\n */\nfunction lastStoneWeight(stones) {\n  // Your solution here\n}",
      "python": "def lastStoneWeight(stones):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int lastStoneWeight(stones) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int lastStoneWeight(stones) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function lastStoneWeight(stones) {\n  stones.sort((a,b)=>b-a);while(stones.length>1){const d=stones.shift()-stones.shift();if(d>0){let i=0;while(i<stones.length&&stones[i]>d)i++;stones.splice(i,0,d);}}return stones[0]||0;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "reorganize-string",
    "title": "Reorganize String",
    "difficulty": "Medium",
    "ds": "Heap",
    "pattern": "top-k-elements",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/reorganize-string/",
    "tags": [
      "Heap",
      "top-k-elements"
    ],
    "description": "Given a string s, rearrange its characters so that no two adjacent characters are the same. Return the reorganized string or \"\" if not possible.",
    "examples": [
      {
        "input": "s=\"aab\"",
        "output": "\"aba\"",
        "explanation": ""
      },
      {
        "input": "s=\"aaab\"",
        "output": "\"\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤500",
      "s consists of lowercase English letters"
    ],
    "hints": [
      "Count frequencies. If maxFreq > (n+1)/2, return \"\".",
      "Greedily place most frequent character. Use max-heap."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - reorganizeString\n */\nfunction reorganizeString(s) {\n  // Your solution here\n}",
      "python": "def reorganizeString(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String reorganizeString(s) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string reorganizeString(s) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function reorganizeString(s) {\n  const cnt=new Array(26).fill(0);for(const c of s)cnt[c.charCodeAt(0)-97]++;const maxFreq=Math.max(...cnt);if(maxFreq>(s.length+1)/2)return\"\";const res=new Array(s.length);let idx=0;for(let i=0;i<26;i++){let c=cnt[i];while(c--){if(idx>=s.length)idx=1;res[idx]=String.fromCharCode(i+97);idx+=2;}}return res.join(\"\");\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "merge-k-sorted-lists",
    "title": "Merge K Sorted Lists",
    "difficulty": "Hard",
    "ds": "Heap",
    "pattern": "k-way-merge",
    "acceptance": 48,
    "leetcodeLink": "https://leetcode.com/problems/merge-k-sorted-lists/",
    "tags": [
      "Heap",
      "k-way-merge"
    ],
    "description": "Given an array of k linked lists, each sorted in ascending order, merge all the linked lists into one sorted list and return it.",
    "examples": [
      {
        "input": "lists=[[1,4,5],[1,3,4],[2,6]]",
        "output": "[1,1,2,3,4,4,5,6]",
        "explanation": ""
      },
      {
        "input": "lists=[]",
        "output": "[]",
        "explanation": ""
      }
    ],
    "constraints": [
      "k==lists.length",
      "0≤k≤10^4",
      "0≤lists[i].length≤500",
      "Total nodes: 0 to 10^4"
    ],
    "hints": [
      "Divide and conquer: merge pairs of lists, repeat until one list remains.",
      "Or: use min-heap with initial heads of all lists."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {ListNode} - mergeKLists\n */\nfunction mergeKLists(lists) {\n  // Your solution here\n}",
      "python": "def mergeKLists(lists):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object mergeKLists(lists) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto mergeKLists(lists) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function mergeKLists(lists) {\n  function merge(a,b){if(!a)return b;if(!b)return a;if(a.val<=b.val){a.next=merge(a.next,b);return a;}b.next=merge(a,b.next);return b;}function helper(ls,l,r){if(l===r)return ls[l];const m=l+r>>1;return merge(helper(ls,l,m),helper(ls,m+1,r));}return lists.length?helper(lists,0,lists.length-1):null;\n}",
    "timeComplexity": "O(n log k)",
    "spaceComplexity": "O(log k)",
    "testCases": []
  },
  {
    "id": "find-k-pairs-with-smallest-sums",
    "title": "Find K Pairs with Smallest Sums",
    "difficulty": "Medium",
    "ds": "Heap",
    "pattern": "k-way-merge",
    "acceptance": 38,
    "leetcodeLink": "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/",
    "tags": [
      "Heap",
      "k-way-merge"
    ],
    "description": "Given two integer arrays nums1 and nums2 sorted in ascending order, return the k pairs with the smallest sums. A pair is [u, v] where u from nums1 and v from nums2.",
    "examples": [
      {
        "input": "nums1=[1,7,11], nums2=[2,4,6], k=3",
        "output": "[[1,2],[1,4],[1,6]]",
        "explanation": ""
      },
      {
        "input": "nums1=[1,1,2], nums2=[1,2,3], k=2",
        "output": "[[1,1],[1,1]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums1.length,nums2.length≤10^5",
      "-10^9≤nums1[i],nums2[i]≤10^9",
      "1≤k≤10^4"
    ],
    "hints": [
      "Use min-heap initialized with (nums1[i], nums2[0], j=0) for each i.",
      "Pop min pair, push (nums1[i], nums2[j+1]) if j+1 valid."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - kSmallestPairs\n */\nfunction kSmallestPairs(nums1, nums2, k) {\n  // Your solution here\n}",
      "python": "def kSmallestPairs(nums1, nums2, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] kSmallestPairs(nums1, nums2, k) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> kSmallestPairs(nums1, nums2, k) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function kSmallestPairs(nums1, nums2, k) {\n  const res=[];if(!nums1.length||!nums2.length)return res;const heap=nums1.slice(0,k).map((v,i)=>[v+nums2[0],i,0]);heap.sort((a,b)=>a[0]-b[0]);while(res.length<k&&heap.length){const[,i,j]=heap.shift();res.push([nums1[i],nums2[j]]);if(j+1<nums2.length){heap.push([nums1[i]+nums2[j+1],i,j+1]);heap.sort((a,b)=>a[0]-b[0]);}}return res;\n}",
    "timeComplexity": "O(k log k)",
    "spaceComplexity": "O(k)",
    "testCases": []
  },
  {
    "id": "subsets",
    "title": "Subsets",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 74,
    "leetcodeLink": "https://leetcode.com/problems/subsets/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given an integer array nums of unique elements, return all possible subsets (the power set). The solution set must not contain duplicate subsets.",
    "examples": [
      {
        "input": "nums=[1,2,3]",
        "output": "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
        "explanation": ""
      },
      {
        "input": "nums=[0]",
        "output": "[[],[0]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10",
      "All elements of nums are unique"
    ],
    "hints": [
      "Backtracking: at each step choose to include or exclude current element.",
      "For loop backtracking: iterate from start, include element, recurse, remove."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - subsets\n */\nfunction subsets(nums) {\n  // Your solution here\n}",
      "python": "def subsets(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] subsets(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsets(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function subsets(nums) {\n  const res=[[]];function bt(start,path){for(let i=start;i<nums.length;i++){path.push(nums[i]);res.push([...path]);bt(i+1,path);path.pop();}}bt(0,[]);return res;\n}",
    "timeComplexity": "O(2^n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "subsets-ii",
    "title": "Subsets II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 54,
    "leetcodeLink": "https://leetcode.com/problems/subsets-ii/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given an integer array nums that may contain duplicates, return all possible subsets. The solution set must not contain duplicate subsets.",
    "examples": [
      {
        "input": "nums=[1,2,2]",
        "output": "[[],[1],[1,2],[1,2,2],[2],[2,2]]",
        "explanation": ""
      },
      {
        "input": "nums=[0]",
        "output": "[[],[0]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10",
      "All elements in [-10,10]"
    ],
    "hints": [
      "Sort first to bring duplicates together. In backtracking, skip if nums[i]==nums[i-1] and i>start."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - subsetsWithDup\n */\nfunction subsetsWithDup(nums) {\n  // Your solution here\n}",
      "python": "def subsetsWithDup(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] subsetsWithDup(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> subsetsWithDup(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function subsetsWithDup(nums) {\n  nums.sort((a,b)=>a-b);const res=[[]];function bt(start,path){for(let i=start;i<nums.length;i++){if(i>start&&nums[i]===nums[i-1])continue;path.push(nums[i]);res.push([...path]);bt(i+1,path);path.pop();}}bt(0,[]);return res;\n}",
    "timeComplexity": "O(2^n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "combination-sum",
    "title": "Combination Sum",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 67,
    "leetcodeLink": "https://leetcode.com/problems/combination-sum/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given an array of distinct integers candidates and target, return all unique combinations that sum to target. The same number may be used unlimited times.",
    "examples": [
      {
        "input": "candidates=[2,3,6,7], target=7",
        "output": "[[2,2,3],[7]]",
        "explanation": ""
      },
      {
        "input": "candidates=[2,3,5], target=8",
        "output": "[[2,2,2,2],[2,3,3],[3,5]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤candidates.length≤30",
      "2≤candidates[i]≤40",
      "All elements unique",
      "1≤target≤40"
    ],
    "hints": [
      "Backtracking: try each candidate from start index. Reduce target. Allow reuse (start stays same).",
      "Stop when target becomes 0 (add to result) or negative (backtrack)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - combinationSum\n */\nfunction combinationSum(candidates, target) {\n  // Your solution here\n}",
      "python": "def combinationSum(candidates, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] combinationSum(candidates, target) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSum(candidates, target) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function combinationSum(candidates, target) {\n  const res=[];function bt(start,rem,path){if(rem===0){res.push([...path]);return;}if(rem<0)return;for(let i=start;i<candidates.length;i++){path.push(candidates[i]);bt(i,rem-candidates[i],path);path.pop();}}bt(0,target,[]);return res;\n}",
    "timeComplexity": "O(2^n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "combination-sum-ii",
    "title": "Combination Sum II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/combination-sum-ii/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given collection of candidate numbers and target, find all unique combinations where numbers sum to target. Each number may only be used once. Result must not contain duplicates.",
    "examples": [
      {
        "input": "candidates=[10,1,2,7,6,1,5], target=8",
        "output": "[[1,1,6],[1,2,5],[1,7],[2,6]]",
        "explanation": ""
      },
      {
        "input": "candidates=[2,5,2,1,2], target=5",
        "output": "[[1,2,2],[5]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤candidates.length≤100",
      "1≤candidates[i]≤50",
      "1≤target≤30"
    ],
    "hints": [
      "Sort array. In backtracking, skip duplicates at same level (if nums[i]==nums[i-1] and i>start).",
      "Move to i+1 (not i) to prevent reuse."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - combinationSum2\n */\nfunction combinationSum2(candidates, target) {\n  // Your solution here\n}",
      "python": "def combinationSum2(candidates, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] combinationSum2(candidates, target) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> combinationSum2(candidates, target) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function combinationSum2(candidates, target) {\n  candidates.sort((a,b)=>a-b);const res=[];function bt(start,rem,path){if(rem===0){res.push([...path]);return;}for(let i=start;i<candidates.length;i++){if(i>start&&candidates[i]===candidates[i-1])continue;if(candidates[i]>rem)break;path.push(candidates[i]);bt(i+1,rem-candidates[i],path);path.pop();}}bt(0,target,[]);return res;\n}",
    "timeComplexity": "O(2^n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "permutations",
    "title": "Permutations",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 73,
    "leetcodeLink": "https://leetcode.com/problems/permutations/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given an array nums of distinct integers, return all possible permutations. You can return them in any order.",
    "examples": [
      {
        "input": "nums=[1,2,3]",
        "output": "[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]",
        "explanation": ""
      },
      {
        "input": "nums=[0,1]",
        "output": "[[0,1],[1,0]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤6",
      "All integers are unique",
      "-10≤nums[i]≤10"
    ],
    "hints": [
      "Backtracking: swap nums[i] with nums[start], recurse, swap back.",
      "Or: use a visited array and build permutation element by element."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - permute\n */\nfunction permute(nums) {\n  // Your solution here\n}",
      "python": "def permute(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] permute(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> permute(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function permute(nums) {\n  const res=[];function bt(start){if(start===nums.length){res.push([...nums]);return;}for(let i=start;i<nums.length;i++){[nums[start],nums[i]]=[nums[i],nums[start]];bt(start+1);[nums[start],nums[i]]=[nums[i],nums[start]];}}bt(0);return res;\n}",
    "timeComplexity": "O(n!)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "permutations-ii",
    "title": "Permutations II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 57,
    "leetcodeLink": "https://leetcode.com/problems/permutations-ii/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given a collection of numbers that might contain duplicates, return all possible unique permutations in any order.",
    "examples": [
      {
        "input": "nums=[1,1,2]",
        "output": "[[1,1,2],[1,2,1],[2,1,1]]",
        "explanation": ""
      },
      {
        "input": "nums=[1,2,3]",
        "output": "all 6 permutations",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤8",
      "All nums[i] in [-10,10]"
    ],
    "hints": [
      "Sort array. Use visited array. Skip if not first occurrence at each level (nums[i]==nums[i-1] and !visited[i-1])."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - permuteUnique\n */\nfunction permuteUnique(nums) {\n  // Your solution here\n}",
      "python": "def permuteUnique(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] permuteUnique(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> permuteUnique(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function permuteUnique(nums) {\n  nums.sort((a,b)=>a-b);const res=[],vis=new Array(nums.length).fill(false);function bt(path){if(path.length===nums.length){res.push([...path]);return;}for(let i=0;i<nums.length;i++){if(vis[i])continue;if(i>0&&nums[i]===nums[i-1]&&!vis[i-1])continue;vis[i]=true;path.push(nums[i]);bt(path);path.pop();vis[i]=false;}}bt([]);return res;\n}",
    "timeComplexity": "O(n!)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "word-search",
    "title": "Word Search",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 40,
    "leetcodeLink": "https://leetcode.com/problems/word-search/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given an m×n grid of characters board and string word, return true if word exists in the grid. The word can be constructed from sequentially adjacent cells (horizontally or vertically), but cells cannot be reused.",
    "examples": [
      {
        "input": "board=[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word=\"ABCCED\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "word=\"ABCB\"",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==board.length",
      "n==board[i].length",
      "1≤m,n≤6",
      "1≤word.length≤15"
    ],
    "hints": [
      "DFS from each cell. Mark cells as visited (temporarily). Backtrack by restoring."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - exist\n */\nfunction exist(board, word) {\n  // Your solution here\n}",
      "python": "def exist(board, word):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean exist(board, word) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool exist(board, word) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function exist(board, word) {\n  const m=board.length,n=board[0].length;function dfs(i,j,k){if(k===word.length)return true;if(i<0||i>=m||j<0||j>=n||board[i][j]!==word[k])return false;const tmp=board[i][j];board[i][j]=\"#\";const res=dfs(i+1,j,k+1)||dfs(i-1,j,k+1)||dfs(i,j+1,k+1)||dfs(i,j-1,k+1);board[i][j]=tmp;return res;}for(let i=0;i<m;i++)for(let j=0;j<n;j++)if(dfs(i,j,0))return true;return false;\n}",
    "timeComplexity": "O(m×n×4^L)",
    "spaceComplexity": "O(L)",
    "testCases": []
  },
  {
    "id": "palindrome-partitioning",
    "title": "Palindrome Partitioning",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "backtracking",
    "acceptance": 64,
    "leetcodeLink": "https://leetcode.com/problems/palindrome-partitioning/",
    "tags": [
      "Strings",
      "backtracking"
    ],
    "description": "Given a string s, partition it such that every substring of the partition is a palindrome. Return all possible palindrome partitioning.",
    "examples": [
      {
        "input": "s=\"aab\"",
        "output": "[[\"a\",\"a\",\"b\"],[\"aa\",\"b\"]]",
        "explanation": ""
      },
      {
        "input": "s=\"a\"",
        "output": "[[\"a\"]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤16",
      "s consists of only lowercase English letters"
    ],
    "hints": [
      "Backtracking: at each position, try all substrings from current index. If palindrome, recurse from next index."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[][]} - partition\n */\nfunction partition(s) {\n  // Your solution here\n}",
      "python": "def partition(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public List<List<String>> partition(s) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto partition(s) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function partition(s) {\n  const res=[];function isPalin(l,r){while(l<r)if(s[l++]!==s[r--])return false;return true;}function bt(start,path){if(start===s.length){res.push([...path]);return;}for(let end=start;end<s.length;end++){if(isPalin(start,end)){path.push(s.slice(start,end+1));bt(end+1,path);path.pop();}}}bt(0,[]);return res;\n}",
    "timeComplexity": "O(2^n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "letter-combinations-of-a-phone-number",
    "title": "Letter Combinations of a Phone Number",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "backtracking",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/letter-combinations-of-a-phone-number/",
    "tags": [
      "Strings",
      "backtracking"
    ],
    "description": "Given a string of digits 2-9, return all possible letter combinations that the digits could represent (as on a phone keypad). Return in any order.",
    "examples": [
      {
        "input": "digits=\"23\"",
        "output": "[\"ad\",\"ae\",\"af\",\"bd\",\"be\",\"bf\",\"cd\",\"ce\",\"cf\"]",
        "explanation": ""
      },
      {
        "input": "digits=\"\"",
        "output": "[]",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤digits.length≤4",
      "digits[i] is a digit in [2,9]"
    ],
    "hints": [
      "Backtracking: for each digit, iterate its letters. Recurse for next digit."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[]} - letterCombinations\n */\nfunction letterCombinations(digits) {\n  // Your solution here\n}",
      "python": "def letterCombinations(digits):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String[] letterCombinations(digits) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<string> letterCombinations(digits) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function letterCombinations(digits) {\n  if(!digits.length)return[];const map=[\"\",\"\",\"abc\",\"def\",\"ghi\",\"jkl\",\"mno\",\"pqrs\",\"tuv\",\"wxyz\"],res=[];function bt(i,path){if(i===digits.length){res.push(path);return;}for(const c of map[+digits[i]])bt(i+1,path+c);}bt(0,\"\");return res;\n}",
    "timeComplexity": "O(4^n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "generate-parentheses",
    "title": "Generate Parentheses",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "backtracking",
    "acceptance": 73,
    "leetcodeLink": "https://leetcode.com/problems/generate-parentheses/",
    "tags": [
      "Strings",
      "backtracking"
    ],
    "description": "Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.",
    "examples": [
      {
        "input": "n=3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "explanation": ""
      },
      {
        "input": "n=1",
        "output": "[\"()\"]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤8"
    ],
    "hints": [
      "Backtracking: add \"(\" if open<n, add \")\" if close<open.",
      "When path length=2n, add to result."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[]} - generateParenthesis\n */\nfunction generateParenthesis(n) {\n  // Your solution here\n}",
      "python": "def generateParenthesis(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String[] generateParenthesis(n) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<string> generateParenthesis(n) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function generateParenthesis(n) {\n  const res=[];function bt(open,close,path){if(path.length===2*n){res.push(path);return;}if(open<n)bt(open+1,close,path+\"(\");if(close<open)bt(open,close+1,path+\")\");}bt(0,0,\"\");return res;\n}",
    "timeComplexity": "O(4^n/√n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "n-queens",
    "title": "N-Queens",
    "difficulty": "Hard",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 68,
    "leetcodeLink": "https://leetcode.com/problems/n-queens/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given integer n, return all distinct solutions to the n-queens puzzle. Each solution contains a distinct board configuration with n queens placed so no two attack each other.",
    "examples": [
      {
        "input": "n=4",
        "output": "[[\".Q..\",\"...Q\",\"Q...\",\"..Q.\"],[\"..Q.\",\"Q...\",\"...Q\",\".Q..\"]]",
        "explanation": ""
      },
      {
        "input": "n=1",
        "output": "[[\"Q\"]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤9"
    ],
    "hints": [
      "Backtracking row by row. Track used columns, diagonals (row-col), and anti-diagonals (row+col)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[][]} - solveNQueens\n */\nfunction solveNQueens(n) {\n  // Your solution here\n}",
      "python": "def solveNQueens(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public List<List<String>> solveNQueens(n) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto solveNQueens(n) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function solveNQueens(n) {\n  const res=[],cols=new Set(),diag=new Set(),aDiag=new Set();const board=Array.from({length:n},()=>Array(n).fill(\".\"));function bt(row){if(row===n){res.push(board.map(r=>r.join(\"\")));return;}for(let col=0;col<n;col++){if(cols.has(col)||diag.has(row-col)||aDiag.has(row+col))continue;board[row][col]=\"Q\";cols.add(col);diag.add(row-col);aDiag.add(row+col);bt(row+1);board[row][col]=\".\";cols.delete(col);diag.delete(row-col);aDiag.delete(row+col);}}bt(0);return res;\n}",
    "timeComplexity": "O(n!)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "combinations",
    "title": "Combinations",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "backtracking",
    "acceptance": 64,
    "leetcodeLink": "https://leetcode.com/problems/combinations/",
    "tags": [
      "Arrays",
      "backtracking"
    ],
    "description": "Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].",
    "examples": [
      {
        "input": "n=4, k=2",
        "output": "[[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]",
        "explanation": ""
      },
      {
        "input": "n=1, k=1",
        "output": "[[1]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤20",
      "1≤k≤n"
    ],
    "hints": [
      "Backtracking: choose numbers from start to n, add to path, recurse for remaining k-1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - combine\n */\nfunction combine(n, k) {\n  // Your solution here\n}",
      "python": "def combine(n, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] combine(n, k) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> combine(n, k) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function combine(n, k) {\n  const res=[];function bt(start,path){if(path.length===k){res.push([...path]);return;}for(let i=start;i<=n-(k-path.length)+1;i++){path.push(i);bt(i+1,path);path.pop();}}bt(1,[]);return res;\n}",
    "timeComplexity": "O(C(n,k))",
    "spaceComplexity": "O(k)",
    "testCases": []
  },
  {
    "id": "restore-ip-addresses",
    "title": "Restore IP Addresses",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "backtracking",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/restore-ip-addresses/",
    "tags": [
      "Strings",
      "backtracking"
    ],
    "description": "Given a string s containing only digits, return all possible valid IP addresses. A valid IP has four octets, each being 0-255, no leading zeros.",
    "examples": [
      {
        "input": "s=\"25525511135\"",
        "output": "[\"255.255.11.135\",\"255.255.111.35\"]",
        "explanation": ""
      },
      {
        "input": "s=\"0000\"",
        "output": "[\"0.0.0.0\"]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤20",
      "s consists of digits only"
    ],
    "hints": [
      "Backtracking: place dots at valid positions. Each segment: no leading zeros, 0-255."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[]} - restoreIpAddresses\n */\nfunction restoreIpAddresses(s) {\n  // Your solution here\n}",
      "python": "def restoreIpAddresses(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String[] restoreIpAddresses(s) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<string> restoreIpAddresses(s) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function restoreIpAddresses(s) {\n  const res=[];function bt(start,parts){if(parts.length===4&&start===s.length){res.push(parts.join(\".\"));return;}if(parts.length===4||start===s.length)return;for(let len=1;len<=3;len++){const seg=s.slice(start,start+len);if(seg.length!==len)break;if(len>1&&seg[0]===\"0\")break;if(+seg>255)break;bt(start+len,[...parts,seg]);}}bt(0,[]);return res;\n}",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "number-of-islands",
    "title": "Number of Islands",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-dfs",
    "acceptance": 57,
    "leetcodeLink": "https://leetcode.com/problems/number-of-islands/",
    "tags": [
      "Graph",
      "graph-dfs"
    ],
    "description": "Given an m×n 2D binary grid of \"1\"s (land) and \"0\"s (water), return the number of islands. An island is surrounded by water and formed by connecting adjacent lands horizontally or vertically.",
    "examples": [
      {
        "input": "grid=[[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "grid=[[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"1\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"1\",\"1\"]]",
        "output": "3",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==grid.length",
      "n==grid[i].length",
      "1≤m,n≤300",
      "grid[i][j] is \"0\" or \"1\""
    ],
    "hints": [
      "DFS/BFS from each unvisited land cell. Mark visited cells as \"0\".",
      "Count DFS/BFS calls = number of islands."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - numIslands\n */\nfunction numIslands(grid) {\n  // Your solution here\n}",
      "python": "def numIslands(grid):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int numIslands(grid) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numIslands(grid) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function numIslands(grid) {\n  let cnt=0;function dfs(i,j){if(i<0||i>=grid.length||j<0||j>=grid[0].length||grid[i][j]!==\"1\")return;grid[i][j]=\"0\";dfs(i+1,j);dfs(i-1,j);dfs(i,j+1);dfs(i,j-1);}for(let i=0;i<grid.length;i++)for(let j=0;j<grid[0].length;j++)if(grid[i][j]===\"1\"){cnt++;dfs(i,j);}return cnt;\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "max-area-of-island",
    "title": "Max Area of Island",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-dfs",
    "acceptance": 70,
    "leetcodeLink": "https://leetcode.com/problems/max-area-of-island/",
    "tags": [
      "Graph",
      "graph-dfs"
    ],
    "description": "Given a binary matrix grid (0=water, 1=land), return the maximum area of an island. An island is a group of 1s connected 4-directionally. Area = number of cells.",
    "examples": [
      {
        "input": "grid=[[0,0,1,0,0],[0,1,1,1,0],[0,1,0,0,0],[0,0,0,0,0]]",
        "output": "5",
        "explanation": ""
      },
      {
        "input": "grid=[[0,0,0,0,0]]",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==grid.length",
      "n==grid[i].length",
      "1≤m,n≤50",
      "grid[i][j] is 0 or 1"
    ],
    "hints": [
      "DFS returning the area of each island. Track global max area."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxAreaOfIsland\n */\nfunction maxAreaOfIsland(grid) {\n  // Your solution here\n}",
      "python": "def maxAreaOfIsland(grid):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxAreaOfIsland(grid) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxAreaOfIsland(grid) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxAreaOfIsland(grid) {\n  let max=0;function dfs(i,j){if(i<0||i>=grid.length||j<0||j>=grid[0].length||grid[i][j]===0)return 0;grid[i][j]=0;return 1+dfs(i+1,j)+dfs(i-1,j)+dfs(i,j+1)+dfs(i,j-1);}for(let i=0;i<grid.length;i++)for(let j=0;j<grid[0].length;j++)if(grid[i][j]===1)max=Math.max(max,dfs(i,j));return max;\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "clone-graph",
    "title": "Clone Graph",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-dfs",
    "acceptance": 53,
    "leetcodeLink": "https://leetcode.com/problems/clone-graph/",
    "tags": [
      "Graph",
      "graph-dfs"
    ],
    "description": "Given a reference to a node in a connected undirected graph, return a deep copy (clone) of the graph. Each node has val and a list of neighbors.",
    "examples": [
      {
        "input": "adjList=[[2,4],[1,3],[2,4],[1,3]]",
        "output": "[[2,4],[1,3],[2,4],[1,3]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,100]",
      "All node vals unique [1,100]",
      "No repeated edges or self-loops"
    ],
    "hints": [
      "Use hash map from original node to its clone. DFS: if already cloned, return clone.",
      "Else create clone, store in map, recursively clone all neighbors."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {Node} - cloneGraph\n */\nfunction cloneGraph(node) {\n  // Your solution here\n}",
      "python": "def cloneGraph(node):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object cloneGraph(node) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto cloneGraph(node) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function cloneGraph(node) {\n  if(!node)return null;const map=new Map();function dfs(n){if(map.has(n))return map.get(n);const c={val:n.val,neighbors:[]};map.set(n,c);for(const nb of n.neighbors)c.neighbors.push(dfs(nb));return c;}return dfs(node);\n}",
    "timeComplexity": "O(V+E)",
    "spaceComplexity": "O(V)",
    "testCases": []
  },
  {
    "id": "pacific-atlantic-water-flow",
    "title": "Pacific Atlantic Water Flow",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-dfs",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/pacific-atlantic-water-flow/",
    "tags": [
      "Graph",
      "graph-dfs"
    ],
    "description": "Given an m×n island height matrix, rain water can flow to adjacent lower or equal height cells. Find all cells that can flow to both the Pacific (top/left border) and Atlantic (bottom/right border) oceans.",
    "examples": [
      {
        "input": "heights=[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==heights.length",
      "n==heights[i].length",
      "1≤m,n≤200",
      "0≤heights[i][j]≤10^5"
    ],
    "hints": [
      "Reverse flow: BFS/DFS from Pacific border and Atlantic border separately.",
      "Answer is intersection of cells reachable from both."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[][]} - pacificAtlantic\n */\nfunction pacificAtlantic(heights) {\n  // Your solution here\n}",
      "python": "def pacificAtlantic(heights):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[][] pacificAtlantic(heights) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<vector<int>> pacificAtlantic(heights) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function pacificAtlantic(heights) {\n  const m=heights.length,n=heights[0].length,dirs=[[1,0],[-1,0],[0,1],[0,-1]];function bfs(starts){const vis=Array.from({length:m},()=>new Array(n).fill(false));const q=[...starts];for(const[r,c]of starts)vis[r][c]=true;while(q.length){const[r,c]=q.shift();for(const[dr,dc]of dirs){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<m&&nc>=0&&nc<n&&!vis[nr][nc]&&heights[nr][nc]>=heights[r][c]){vis[nr][nc]=true;q.push([nr,nc]);}}}return vis;}const pac=[],atl=[];for(let i=0;i<m;i++){pac.push([i,0]);atl.push([i,n-1]);}for(let j=0;j<n;j++){pac.push([0,j]);atl.push([m-1,j]);}const pv=bfs(pac),av=bfs(atl);const res=[];for(let i=0;i<m;i++)for(let j=0;j<n;j++)if(pv[i][j]&&av[i][j])res.push([i,j]);return res;\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "course-schedule",
    "title": "Course Schedule",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-dfs",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/course-schedule/",
    "tags": [
      "Graph",
      "graph-dfs"
    ],
    "description": "Given numCourses and prerequisites array where prerequisites[i]=[a,b] means b must be taken before a, determine if you can finish all courses (detect cycle in directed graph).",
    "examples": [
      {
        "input": "numCourses=2, prerequisites=[[1,0]]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "numCourses=2, prerequisites=[[1,0],[0,1]]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤numCourses≤2000",
      "0≤prerequisites.length≤5000",
      "All pairs are unique"
    ],
    "hints": [
      "Build adjacency list. DFS cycle detection: if visiting (gray) node again, cycle exists.",
      "States: 0=unvisited, 1=visiting, 2=visited."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - canFinish\n */\nfunction canFinish(numCourses, prerequisites) {\n  // Your solution here\n}",
      "python": "def canFinish(numCourses, prerequisites):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean canFinish(numCourses, prerequisites) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canFinish(numCourses, prerequisites) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function canFinish(numCourses, prerequisites) {\n  const adj=Array.from({length:numCourses},()=>[]);for(const[a,b]of prerequisites)adj[b].push(a);const vis=new Array(numCourses).fill(0);function dfs(n){if(vis[n]===1)return false;if(vis[n]===2)return true;vis[n]=1;for(const nb of adj[n])if(!dfs(nb))return false;vis[n]=2;return true;}for(let i=0;i<numCourses;i++)if(!dfs(i))return false;return true;\n}",
    "timeComplexity": "O(V+E)",
    "spaceComplexity": "O(V+E)",
    "testCases": []
  },
  {
    "id": "course-schedule-ii",
    "title": "Course Schedule II",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-dfs",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/course-schedule-ii/",
    "tags": [
      "Graph",
      "graph-dfs"
    ],
    "description": "Given numCourses and prerequisites, return the ordering of courses to finish all. If impossible (cycle), return empty array.",
    "examples": [
      {
        "input": "numCourses=2, prerequisites=[[1,0]]",
        "output": "[0,1]",
        "explanation": ""
      },
      {
        "input": "numCourses=4, prerequisites=[[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,1,2,3] or [0,2,1,3]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤numCourses≤2000",
      "0≤prerequisites.length≤numCourses*(numCourses-1)"
    ],
    "hints": [
      "Topological sort via DFS. Add to result after processing all descendants.",
      "Reverse the result at end."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - findOrder\n */\nfunction findOrder(numCourses, prerequisites) {\n  // Your solution here\n}",
      "python": "def findOrder(numCourses, prerequisites):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] findOrder(numCourses, prerequisites) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> findOrder(numCourses, prerequisites) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function findOrder(numCourses, prerequisites) {\n  const adj=Array.from({length:numCourses},()=>[]);for(const[a,b]of prerequisites)adj[b].push(a);const vis=new Array(numCourses).fill(0),order=[];function dfs(n){if(vis[n]===1)return false;if(vis[n]===2)return true;vis[n]=1;for(const nb of adj[n])if(!dfs(nb))return false;vis[n]=2;order.push(n);return true;}for(let i=0;i<numCourses;i++)if(!dfs(i))return[];return order.reverse();\n}",
    "timeComplexity": "O(V+E)",
    "spaceComplexity": "O(V+E)",
    "testCases": []
  },
  {
    "id": "number-of-connected-components-in-an-undirected-graph",
    "title": "Number of Connected Components",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "union-find",
    "acceptance": 62,
    "leetcodeLink": "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
    "tags": [
      "Graph",
      "union-find"
    ],
    "description": "Given n nodes (labeled 0 to n-1) and edges list, return the number of connected components in the undirected graph.",
    "examples": [
      {
        "input": "n=5, edges=[[0,1],[1,2],[3,4]]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "n=5, edges=[[0,1],[1,2],[2,3],[3,4]]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤2000",
      "1≤edges.length≤5000",
      "edges[i].length==2"
    ],
    "hints": [
      "Union-Find: for each edge, union the two nodes. Count distinct roots.",
      "Or DFS/BFS: count connected components."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - countComponents\n */\nfunction countComponents(n, edges) {\n  // Your solution here\n}",
      "python": "def countComponents(n, edges):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int countComponents(n, edges) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int countComponents(n, edges) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function countComponents(n, edges) {\n  const par=Array.from({length:n},(_,i)=>i);function find(x){return par[x]===x?x:par[x]=find(par[x]);}let cnt=n;for(const[a,b]of edges){const ra=find(a),rb=find(b);if(ra!==rb){par[ra]=rb;cnt--;}}return cnt;\n}",
    "timeComplexity": "O(n+E×α(n))",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "redundant-connection",
    "title": "Redundant Connection",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "union-find",
    "acceptance": 61,
    "leetcodeLink": "https://leetcode.com/problems/redundant-connection/",
    "tags": [
      "Graph",
      "union-find"
    ],
    "description": "Given a tree of n nodes with one extra edge added, find the redundant edge. Return the edge that can be removed to make it a tree. If multiple answers, return the last one in input.",
    "examples": [
      {
        "input": "edges=[[1,2],[1,3],[2,3]]",
        "output": "[2,3]",
        "explanation": ""
      },
      {
        "input": "edges=[[1,2],[2,3],[3,4],[1,4],[1,5]]",
        "output": "[1,4]",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==edges.length",
      "3≤n≤1000",
      "1≤edges[i][j]≤n"
    ],
    "hints": [
      "Union-Find: process edges. If two nodes already connected (same root), this edge is redundant."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - findRedundantConnection\n */\nfunction findRedundantConnection(edges) {\n  // Your solution here\n}",
      "python": "def findRedundantConnection(edges):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] findRedundantConnection(edges) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> findRedundantConnection(edges) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function findRedundantConnection(edges) {\n  const par=Array.from({length:edges.length+1},(_,i)=>i);function find(x){return par[x]===x?x:par[x]=find(par[x]);}for(const[a,b]of edges){const ra=find(a),rb=find(b);if(ra===rb)return[a,b];par[ra]=rb;}return[];\n}",
    "timeComplexity": "O(n×α(n))",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "number-of-provinces",
    "title": "Number of Provinces",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "union-find",
    "acceptance": 63,
    "leetcodeLink": "https://leetcode.com/problems/number-of-provinces/",
    "tags": [
      "Graph",
      "union-find"
    ],
    "description": "Given n cities and an n×n isConnected matrix where isConnected[i][j]=1 means cities i and j are directly connected, return the number of provinces (groups of directly/indirectly connected cities).",
    "examples": [
      {
        "input": "isConnected=[[1,1,0],[1,1,0],[0,0,1]]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "isConnected=[[1,0,0],[0,1,0],[0,0,1]]",
        "output": "3",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤200",
      "n==isConnected.length==isConnected[i].length",
      "isConnected[i][j] is 1 or 0"
    ],
    "hints": [
      "DFS from each unvisited city, mark all reachable cities visited. Count DFS calls.",
      "Or use Union-Find on edges."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findCircleNum\n */\nfunction findCircleNum(isConnected) {\n  // Your solution here\n}",
      "python": "def findCircleNum(isConnected):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findCircleNum(isConnected) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findCircleNum(isConnected) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findCircleNum(isConnected) {\n  const n=isConnected.length,vis=new Array(n).fill(false);let cnt=0;function dfs(i){vis[i]=true;for(let j=0;j<n;j++)if(isConnected[i][j]&&!vis[j])dfs(j);}for(let i=0;i<n;i++)if(!vis[i]){cnt++;dfs(i);}return cnt;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "rotting-oranges",
    "title": "Rotting Oranges",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-bfs",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/rotting-oranges/",
    "tags": [
      "Graph",
      "graph-bfs"
    ],
    "description": "Given an m×n grid with 0=empty, 1=fresh, 2=rotten oranges. Every minute, fresh oranges adjacent to rotten become rotten. Return minimum minutes until no fresh oranges; return -1 if impossible.",
    "examples": [
      {
        "input": "grid=[[2,1,1],[1,1,0],[0,1,1]]",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "grid=[[2,1,1],[0,1,1],[1,0,1]]",
        "output": "-1",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==grid.length",
      "n==grid[i].length",
      "1≤m,n≤10",
      "grid[i][j] is 0, 1, or 2"
    ],
    "hints": [
      "BFS from all rotten oranges simultaneously. Count minutes (levels of BFS).",
      "At end, if fresh oranges remain, return -1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - orangesRotting\n */\nfunction orangesRotting(grid) {\n  // Your solution here\n}",
      "python": "def orangesRotting(grid):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int orangesRotting(grid) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int orangesRotting(grid) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function orangesRotting(grid) {\n  const m=grid.length,n=grid[0].length,q=[];let fresh=0;for(let i=0;i<m;i++)for(let j=0;j<n;j++){if(grid[i][j]===2)q.push([i,j]);if(grid[i][j]===1)fresh++;}let mins=0;const dirs=[[1,0],[-1,0],[0,1],[0,-1]];while(q.length&&fresh>0){const sz=q.length;for(let i=0;i<sz;i++){const[r,c]=q.shift();for(const[dr,dc]of dirs){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<m&&nc>=0&&nc<n&&grid[nr][nc]===1){grid[nr][nc]=2;fresh--;q.push([nr,nc]);}}}mins++;}return fresh===0?mins:-1;\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "word-ladder",
    "title": "Word Ladder",
    "difficulty": "Hard",
    "ds": "Graph",
    "pattern": "graph-bfs",
    "acceptance": 36,
    "leetcodeLink": "https://leetcode.com/problems/word-ladder/",
    "tags": [
      "Graph",
      "graph-bfs"
    ],
    "description": "Given beginWord, endWord, and wordList, return the number of words in the shortest transformation sequence from beginWord to endWord where each step changes exactly one letter. Return 0 if no path.",
    "examples": [
      {
        "input": "beginWord=\"hit\", endWord=\"cog\", wordList=[\"hot\",\"dot\",\"dog\",\"lot\",\"log\",\"cog\"]",
        "output": "5",
        "explanation": ""
      },
      {
        "input": "wordList=[\"hot\",\"dot\",\"dog\",\"lot\",\"log\"]",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤beginWord.length≤10",
      "1≤wordList.length≤5000",
      "All words have same length"
    ],
    "hints": [
      "BFS: from beginWord, find all words differing by 1 letter. Level-by-level traversal gives shortest path.",
      "Use a set for O(1) lookup. Remove visited words."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - ladderLength\n */\nfunction ladderLength(beginWord, endWord, wordList) {\n  // Your solution here\n}",
      "python": "def ladderLength(beginWord, endWord, wordList):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int ladderLength(beginWord, endWord, wordList) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int ladderLength(beginWord, endWord, wordList) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function ladderLength(beginWord, endWord, wordList) {\n  const set=new Set(wordList);if(!set.has(endWord))return 0;const q=[beginWord];let len=1;while(q.length){const sz=q.length;for(let i=0;i<sz;i++){const w=q.shift();if(w===endWord)return len;for(let j=0;j<w.length;j++)for(let c=97;c<=122;c++){const nw=w.slice(0,j)+String.fromCharCode(c)+w.slice(j+1);if(set.has(nw)){set.delete(nw);q.push(nw);}}}len++;}return 0;\n}",
    "timeComplexity": "O(M²×N)",
    "spaceComplexity": "O(M²×N)",
    "testCases": []
  },
  {
    "id": "walls-and-gates",
    "title": "Walls and Gates",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-bfs",
    "acceptance": 58,
    "leetcodeLink": "https://leetcode.com/problems/walls-and-gates/",
    "tags": [
      "Graph",
      "graph-bfs"
    ],
    "description": "Given an m×n grid with -1=wall, 0=gate, INF=empty room, fill each empty room with the distance to its nearest gate. If impossible, leave INF.",
    "examples": [
      {
        "input": "rooms=[[INF,-1,0,INF],[INF,INF,INF,-1],[INF,-1,INF,-1],[0,-1,INF,INF]]",
        "output": "[[3,-1,0,1],[2,2,1,-1],[1,-1,2,-1],[0,-1,3,4]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==rooms.length",
      "n==rooms[i].length",
      "1≤m,n≤250"
    ],
    "hints": [
      "Multi-source BFS starting from all gates (0s) simultaneously. Update distances level by level."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - wallsAndGates\n */\nfunction wallsAndGates(rooms) {\n  // Your solution here\n}",
      "python": "def wallsAndGates(rooms):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void wallsAndGates(rooms) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void wallsAndGates(rooms) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function wallsAndGates(rooms) {\n  const m=rooms.length,n=rooms[0].length,q=[],INF=2147483647;for(let i=0;i<m;i++)for(let j=0;j<n;j++)if(rooms[i][j]===0)q.push([i,j]);const dirs=[[1,0],[-1,0],[0,1],[0,-1]];while(q.length){const[r,c]=q.shift();for(const[dr,dc]of dirs){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<m&&nc>=0&&nc<n&&rooms[nr][nc]===INF){rooms[nr][nc]=rooms[r][c]+1;q.push([nr,nc]);}}}\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "surrounded-regions",
    "title": "Surrounded Regions",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-dfs",
    "acceptance": 37,
    "leetcodeLink": "https://leetcode.com/problems/surrounded-regions/",
    "tags": [
      "Graph",
      "graph-dfs"
    ],
    "description": "Given an m×n matrix of \"X\" and \"O\", capture all regions surrounded by \"X\". A region is captured by flipping \"O\"s to \"X\"s. \"O\"s on border or connected to border \"O\"s are not captured.",
    "examples": [
      {
        "input": "board=[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"O\",\"X\"],[\"X\",\"X\",\"O\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
        "output": "[[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"X\",\"X\",\"X\"],[\"X\",\"O\",\"X\",\"X\"]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==board.length",
      "n==board[i].length",
      "1≤m,n≤200"
    ],
    "hints": [
      "DFS from all border \"O\"s, mark as safe. Then flip all remaining \"O\"s to \"X\", safe back to \"O\"."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {void} - solve\n */\nfunction solve(board) {\n  // Your solution here\n}",
      "python": "def solve(board):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public void solve(board) {\n        // Your solution here\n    }\n}",
      "cpp": "class Solution {\npublic:\n    void solve(board) {\n        // Your solution here\n    }\n};"
    },
    "solution": "function solve(board) {\n  const m=board.length,n=board[0].length;function dfs(i,j){if(i<0||i>=m||j<0||j>=n||board[i][j]!==\"O\")return;board[i][j]=\"S\";dfs(i+1,j);dfs(i-1,j);dfs(i,j+1);dfs(i,j-1);}for(let i=0;i<m;i++){dfs(i,0);dfs(i,n-1);}for(let j=0;j<n;j++){dfs(0,j);dfs(m-1,j);}for(let i=0;i<m;i++)for(let j=0;j<n;j++){if(board[i][j]===\"O\")board[i][j]=\"X\";else if(board[i][j]===\"S\")board[i][j]=\"O\";}\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "shortest-path-in-binary-matrix",
    "title": "Shortest Path in Binary Matrix",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-bfs",
    "acceptance": 44,
    "leetcodeLink": "https://leetcode.com/problems/shortest-path-in-binary-matrix/",
    "tags": [
      "Graph",
      "graph-bfs"
    ],
    "description": "Given an n×n binary matrix grid, return the length of the shortest clear path from top-left to bottom-right. A clear path consists only of 0-valued cells moving 8-directionally. Return -1 if no such path.",
    "examples": [
      {
        "input": "grid=[[0,1],[1,0]]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "grid=[[0,0,0],[1,1,0],[1,1,0]]",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==grid.length==grid[i].length",
      "1≤n≤100",
      "grid[i][j] is 0 or 1"
    ],
    "hints": [
      "BFS from (0,0). Visit all 8 neighbors. Count levels."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - shortestPathBinaryMatrix\n */\nfunction shortestPathBinaryMatrix(grid) {\n  // Your solution here\n}",
      "python": "def shortestPathBinaryMatrix(grid):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int shortestPathBinaryMatrix(grid) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int shortestPathBinaryMatrix(grid) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function shortestPathBinaryMatrix(grid) {\n  const n=grid.length;if(grid[0][0]||grid[n-1][n-1])return-1;const q=[[0,0,1]];grid[0][0]=1;while(q.length){const[r,c,d]=q.shift();if(r===n-1&&c===n-1)return d;for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){const nr=r+dr,nc=c+dc;if(nr>=0&&nr<n&&nc>=0&&nc<n&&grid[nr][nc]===0){grid[nr][nc]=1;q.push([nr,nc,d+1]);}}}return-1;\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n²)",
    "testCases": []
  },
  {
    "id": "accounts-merge",
    "title": "Accounts Merge",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "union-find",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/accounts-merge/",
    "tags": [
      "Graph",
      "union-find"
    ],
    "description": "Given a list of accounts where each element is a list of strings [name, email1, email2, ...], merge accounts with at least one email in common. Return merged accounts sorted by name then email.",
    "examples": [
      {
        "input": "accounts=[[\"John\",\"j@com\",\"j@mail\"],[\"John\",\"j@mail\",\"j@other\"],[\"Mary\",\"m@com\"],[\"John\",\"johnny@com\"]]",
        "output": "[[\"John\",\"j@com\",\"j@mail\",\"j@other\"],[\"John\",\"johnny@com\"],[\"Mary\",\"m@com\"]]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤accounts.length≤1000",
      "2≤accounts[i].length≤10"
    ],
    "hints": [
      "Union-Find on emails. Map each email to the first account. For each account, union all its emails with the first email.",
      "Collect all emails for each root, sort, prepend name."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[][]} - accountsMerge\n */\nfunction accountsMerge(accounts) {\n  // Your solution here\n}",
      "python": "def accountsMerge(accounts):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public List<List<String>> accountsMerge(accounts) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto accountsMerge(accounts) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function accountsMerge(accounts) {\n  const par=new Map(),emailName=new Map();function find(x){if(!par.has(x))par.set(x,x);if(par.get(x)!==x)par.set(x,find(par.get(x)));return par.get(x);}for(const[name,...emails]of accounts){for(const e of emails){emailName.set(e,name);if(!par.has(e))par.set(e,e);par.set(find(e),find(emails[0]));}}const groups=new Map();for(const e of par.keys()){const r=find(e);if(!groups.has(r))groups.set(r,[]);groups.get(r).push(e);}return Array.from(groups.values()).map(emails=>[emailName.get(emails[0]),...emails.sort()]);\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "cheapest-flights-within-k-stops",
    "title": "Cheapest Flights Within K Stops",
    "difficulty": "Medium",
    "ds": "Graph",
    "pattern": "graph-bfs",
    "acceptance": 39,
    "leetcodeLink": "https://leetcode.com/problems/cheapest-flights-within-k-stops/",
    "tags": [
      "Graph",
      "graph-bfs"
    ],
    "description": "Given n cities and flights as [from, to, price], find the cheapest price from src to dst using at most k stops. Return -1 if no route.",
    "examples": [
      {
        "input": "n=4, flights=[[0,1,100],[1,2,100],[2,0,100],[1,3,600],[2,3,200]], src=0, dst=3, k=1",
        "output": "700",
        "explanation": ""
      },
      {
        "input": "src=0,dst=3,k=0",
        "output": "-1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤100",
      "0≤flights.length≤(n*(n-1)/2)",
      "0≤k<n"
    ],
    "hints": [
      "Bellman-Ford with k iterations. After k+1 relaxations, dist[dst] is the answer."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findCheapestPrice\n */\nfunction findCheapestPrice(n, flights, src, dst, k) {\n  // Your solution here\n}",
      "python": "def findCheapestPrice(n, flights, src, dst, k):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findCheapestPrice(n, flights, src, dst, k) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findCheapestPrice(n, flights, src, dst, k) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findCheapestPrice(n, flights, src, dst, k) {\n  let dist=new Array(n).fill(Infinity);dist[src]=0;for(let i=0;i<=k;i++){const tmp=[...dist];for(const[u,v,p]of flights)if(dist[u]!==Infinity&&dist[u]+p<tmp[v])tmp[v]=dist[u]+p;dist=tmp;}return dist[dst]===Infinity?-1:dist[dst];\n}",
    "timeComplexity": "O(k×E)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "climbing-stairs",
    "title": "Climbing Stairs",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 51,
    "leetcodeLink": "https://leetcode.com/problems/climbing-stairs/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "You are climbing a staircase with n steps. Each time you can climb 1 or 2 steps. Return the number of distinct ways to reach the top.",
    "examples": [
      {
        "input": "n=2",
        "output": "2",
        "explanation": "1+1, 2"
      },
      {
        "input": "n=3",
        "output": "3",
        "explanation": "1+1+1, 1+2, 2+1"
      }
    ],
    "constraints": [
      "1≤n≤45"
    ],
    "hints": [
      "f(n)=f(n-1)+f(n-2), same as Fibonacci. f(1)=1, f(2)=2.",
      "Use two variables to save space: O(1)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - climbStairs\n */\nfunction climbStairs(n) {\n  // Your solution here\n}",
      "python": "def climbStairs(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int climbStairs(n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int climbStairs(n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function climbStairs(n) {\n  if(n<=2)return n;let a=1,b=2;for(let i=3;i<=n;i++){[a,b]=[b,a+b];}return b;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "min-cost-climbing-stairs",
    "title": "Min Cost Climbing Stairs",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 62,
    "leetcodeLink": "https://leetcode.com/problems/min-cost-climbing-stairs/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an integer array cost (index = stair), you can start from index 0 or 1. Pay cost[i] to leave stair i, can take 1 or 2 steps. Return minimum cost to reach top.",
    "examples": [
      {
        "input": "cost=[10,15,20]",
        "output": "15",
        "explanation": ""
      },
      {
        "input": "cost=[1,100,1,1,1,100,1,1,100,1]",
        "output": "6",
        "explanation": ""
      }
    ],
    "constraints": [
      "2≤cost.length≤1000",
      "0≤cost[i]≤999"
    ],
    "hints": [
      "dp[i] = cost[i] + min(dp[i-1], dp[i-2]). Answer = min(dp[n-1], dp[n-2])."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - minCostClimbingStairs\n */\nfunction minCostClimbingStairs(cost) {\n  // Your solution here\n}",
      "python": "def minCostClimbingStairs(cost):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int minCostClimbingStairs(cost) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minCostClimbingStairs(cost) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function minCostClimbingStairs(cost) {\n  const n=cost.length;for(let i=2;i<n;i++)cost[i]+=Math.min(cost[i-1],cost[i-2]);return Math.min(cost[n-1],cost[n-2]);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "house-robber",
    "title": "House Robber",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 49,
    "leetcodeLink": "https://leetcode.com/problems/house-robber/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "You are a robber. Houses are in a row; adjacent houses have connected security (cannot rob two adjacent). Given nums where nums[i] is money in house i, return the maximum money you can rob.",
    "examples": [
      {
        "input": "nums=[1,2,3,1]",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "nums=[2,7,9,3,1]",
        "output": "12",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤100",
      "0≤nums[i]≤400"
    ],
    "hints": [
      "dp[i] = max(dp[i-1], dp[i-2] + nums[i]).",
      "Space-optimized: two variables prev2 and prev1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - rob\n */\nfunction rob(nums) {\n  // Your solution here\n}",
      "python": "def rob(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int rob(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int rob(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function rob(nums) {\n  let a=0,b=0;for(const n of nums){[a,b]=[b,Math.max(b,a+n)];}return b;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "house-robber-ii",
    "title": "House Robber II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 41,
    "leetcodeLink": "https://leetcode.com/problems/house-robber-ii/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Houses are in a circle (first and last are adjacent). Same robbery rule applies. Return maximum money you can rob.",
    "examples": [
      {
        "input": "nums=[2,3,2]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "nums=[1,2,3,1]",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "nums=[1,2,3]",
        "output": "3",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤100",
      "0≤nums[i]≤1000"
    ],
    "hints": [
      "Run House Robber twice: once on nums[0..n-2] and once on nums[1..n-1]. Return max."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - rob\n */\nfunction rob(nums) {\n  // Your solution here\n}",
      "python": "def rob(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int rob(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int rob(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function rob(nums) {\n  function robRange(arr){let a=0,b=0;for(const n of arr){[a,b]=[b,Math.max(b,a+n)];}return b;}if(nums.length===1)return nums[0];return Math.max(robRange(nums.slice(0,-1)),robRange(nums.slice(1)));\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "coin-change",
    "title": "Coin Change",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 41,
    "leetcodeLink": "https://leetcode.com/problems/coin-change/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given coins of different denominations and amount, return the fewest number of coins needed to make up amount. If impossible, return -1. Infinite supply of each coin.",
    "examples": [
      {
        "input": "coins=[1,2,5], amount=11",
        "output": "3",
        "explanation": "5+5+1"
      },
      {
        "input": "coins=[2], amount=3",
        "output": "-1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤coins.length≤12",
      "1≤coins[i]≤2^31-1",
      "0≤amount≤10^4"
    ],
    "hints": [
      "Bottom-up DP: dp[i] = min coins for amount i. dp[0]=0.",
      "For each amount, try all coins: dp[i]=min(dp[i], dp[i-coin]+1)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - coinChange\n */\nfunction coinChange(coins, amount) {\n  // Your solution here\n}",
      "python": "def coinChange(coins, amount):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int coinChange(coins, amount) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int coinChange(coins, amount) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function coinChange(coins, amount) {\n  const dp=new Array(amount+1).fill(Infinity);dp[0]=0;for(let i=1;i<=amount;i++)for(const c of coins)if(c<=i&&dp[i-c]+1<dp[i])dp[i]=dp[i-c]+1;return dp[amount]===Infinity?-1:dp[amount];\n}",
    "timeComplexity": "O(amount×coins)",
    "spaceComplexity": "O(amount)",
    "testCases": []
  },
  {
    "id": "coin-change-ii",
    "title": "Coin Change II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 59,
    "leetcodeLink": "https://leetcode.com/problems/coin-change-ii/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an array of coins and an amount, return the number of combinations that make up that amount. Unlimited supply of each coin.",
    "examples": [
      {
        "input": "amount=5, coins=[1,2,5]",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "amount=3, coins=[2]",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤coins.length≤300",
      "1≤coins[i]≤5000",
      "0≤amount≤5000"
    ],
    "hints": [
      "2D DP unbounded knapsack. dp[i][j] = ways to make amount j using first i coins.",
      "dp[i][j] = dp[i-1][j] + dp[i][j-coins[i-1]] (reuse allowed)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - change\n */\nfunction change(amount, coins) {\n  // Your solution here\n}",
      "python": "def change(amount, coins):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int change(amount, coins) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int change(amount, coins) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function change(amount, coins) {\n  const dp=new Array(amount+1).fill(0);dp[0]=1;for(const c of coins)for(let i=c;i<=amount;i++)dp[i]+=dp[i-c];return dp[amount];\n}",
    "timeComplexity": "O(amount×coins)",
    "spaceComplexity": "O(amount)",
    "testCases": []
  },
  {
    "id": "longest-increasing-subsequence",
    "title": "Longest Increasing Subsequence",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/longest-increasing-subsequence/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
    "examples": [
      {
        "input": "nums=[10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "[2,3,7,101]"
      },
      {
        "input": "nums=[0,1,0,3,2,3]",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤2500",
      "-10^4≤nums[i]≤10^4"
    ],
    "hints": [
      "DP: dp[i] = LIS ending at index i. dp[i] = max(dp[j]+1) for all j<i where nums[j]<nums[i].",
      "O(n log n): patience sorting / binary search on tails array."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - lengthOfLIS\n */\nfunction lengthOfLIS(nums) {\n  // Your solution here\n}",
      "python": "def lengthOfLIS(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int lengthOfLIS(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int lengthOfLIS(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function lengthOfLIS(nums) {\n  const tails=[];for(const n of nums){let l=0,r=tails.length;while(l<r){const m=l+r>>1;tails[m]<n?l=m+1:r=m;}tails[l]=n;}return tails.length;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "partition-equal-subset-sum",
    "title": "Partition Equal Subset Sum",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 46,
    "leetcodeLink": "https://leetcode.com/problems/partition-equal-subset-sum/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an integer array nums, return true if you can partition it into two subsets with equal sum.",
    "examples": [
      {
        "input": "nums=[1,5,11,5]",
        "output": "true",
        "explanation": "[1,5,5] and [11]"
      },
      {
        "input": "nums=[1,2,3,5]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤200",
      "1≤nums[i]≤100"
    ],
    "hints": [
      "If total sum is odd, return false. Find subset with sum = total/2 (0/1 knapsack).",
      "dp[j] = can we form sum j? Process in reverse to avoid item reuse."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - canPartition\n */\nfunction canPartition(nums) {\n  // Your solution here\n}",
      "python": "def canPartition(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean canPartition(nums) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canPartition(nums) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function canPartition(nums) {\n  const sum=nums.reduce((a,b)=>a+b,0);if(sum%2)return false;const target=sum/2,dp=new Array(target+1).fill(false);dp[0]=true;for(const n of nums)for(let j=target;j>=n;j--)if(dp[j-n])dp[j]=true;return dp[target];\n}",
    "timeComplexity": "O(n×sum)",
    "spaceComplexity": "O(sum)",
    "testCases": []
  },
  {
    "id": "word-break-dp",
    "title": "Word Break",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "dp",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/word-break-dp/",
    "tags": [
      "Strings",
      "dp"
    ],
    "description": "Given string s and dictionary wordDict, return true if s can be segmented into space-separated dictionary words.",
    "examples": [
      {
        "input": "s=\"leetcode\", wordDict=[\"leet\",\"code\"]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"catsandog\", wordDict=[\"cats\",\"dog\",\"and\",\"cat\"]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤300",
      "1≤wordDict.length≤1000"
    ],
    "hints": [
      "dp[i]=true if s[0..i-1] can be segmented. dp[0]=true.",
      "For each i, try all j<i: if dp[j] and s[j..i] in dict, dp[i]=true."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - wordBreak\n */\nfunction wordBreak(s, wordDict) {\n  // Your solution here\n}",
      "python": "def wordBreak(s, wordDict):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean wordBreak(s, wordDict) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool wordBreak(s, wordDict) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function wordBreak(s, wordDict) {\n  const set=new Set(wordDict),dp=new Array(s.length+1).fill(false);dp[0]=true;for(let i=1;i<=s.length;i++)for(let j=0;j<i;j++)if(dp[j]&&set.has(s.slice(j,i))){dp[i]=true;break;}return dp[s.length];\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "combination-sum-iv",
    "title": "Combination Sum IV",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 50,
    "leetcodeLink": "https://leetcode.com/problems/combination-sum-iv/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an array of distinct integers nums and target, return the number of possible combinations that add up to target. Order matters.",
    "examples": [
      {
        "input": "nums=[1,2,3], target=4",
        "output": "7",
        "explanation": ""
      },
      {
        "input": "nums=[9], target=3",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤200",
      "1≤nums[i]≤1000",
      "1≤target≤1000"
    ],
    "hints": [
      "dp[i] = number of combinations summing to i. dp[0]=1.",
      "For each target value, try all nums: dp[i]+=dp[i-num]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - combinationSum4\n */\nfunction combinationSum4(nums, target) {\n  // Your solution here\n}",
      "python": "def combinationSum4(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int combinationSum4(nums, target) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int combinationSum4(nums, target) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function combinationSum4(nums, target) {\n  const dp=new Array(target+1).fill(0);dp[0]=1;for(let i=1;i<=target;i++)for(const n of nums)if(i>=n)dp[i]+=dp[i-n];return dp[target];\n}",
    "timeComplexity": "O(target×nums)",
    "spaceComplexity": "O(target)",
    "testCases": []
  },
  {
    "id": "maximum-sum-circular-subarray",
    "title": "Maximum Sum Circular Subarray",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 43,
    "leetcodeLink": "https://leetcode.com/problems/maximum-sum-circular-subarray/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given a circular integer array nums, return the maximum possible sum of a non-empty subarray. A circular subarray can wrap around.",
    "examples": [
      {
        "input": "nums=[1,-2,3,-2]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "nums=[5,-3,5]",
        "output": "10",
        "explanation": ""
      },
      {
        "input": "nums=[-3,-2,-3]",
        "output": "-2",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==nums.length",
      "1≤n≤3*10^4",
      "-3*10^4≤nums[i]≤3*10^4"
    ],
    "hints": [
      "Max of: (1) max subarray normally (Kadane), (2) total sum - min subarray (wrapping case).",
      "If all negative, return Kadane result."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxSubarraySumCircular\n */\nfunction maxSubarraySumCircular(nums) {\n  // Your solution here\n}",
      "python": "def maxSubarraySumCircular(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxSubarraySumCircular(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxSubarraySumCircular(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxSubarraySumCircular(nums) {\n  let maxSum=nums[0],minSum=nums[0],curMax=nums[0],curMin=nums[0],total=nums[0];for(let i=1;i<nums.length;i++){total+=nums[i];curMax=Math.max(nums[i],curMax+nums[i]);maxSum=Math.max(maxSum,curMax);curMin=Math.min(nums[i],curMin+nums[i]);minSum=Math.min(minSum,curMin);}return maxSum<0?maxSum:Math.max(maxSum,total-minSum);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "integer-break",
    "title": "Integer Break",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/integer-break/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an integer n, break it into the sum of k positive integers (k >= 2) and maximize the product of those integers.",
    "examples": [
      {
        "input": "n=2",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "n=10",
        "output": "36",
        "explanation": ""
      }
    ],
    "constraints": [
      "2≤n≤58"
    ],
    "hints": [
      "Math insight: break into 3s as much as possible. If remainder 1, use 2+2 instead of 3+1.",
      "DP: dp[i] = max product. dp[i] = max(j*(i-j), j*dp[i-j]) for j in 1..i-1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - integerBreak\n */\nfunction integerBreak(n) {\n  // Your solution here\n}",
      "python": "def integerBreak(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int integerBreak(n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int integerBreak(n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function integerBreak(n) {\n  const dp=[0,1];for(let i=2;i<=n;i++){dp[i]=0;for(let j=1;j<i;j++)dp[i]=Math.max(dp[i],Math.max(j*(i-j),j*dp[i-j]));}return dp[n];\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "decode-ways-dp",
    "title": "Decode Ways",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "dp",
    "acceptance": 32,
    "leetcodeLink": "https://leetcode.com/problems/decode-ways-dp/",
    "tags": [
      "Strings",
      "dp"
    ],
    "description": "A message is encoded by A→1, B→2, ..., Z→26. Given a string of digits, return the number of ways to decode it.",
    "examples": [
      {
        "input": "s=\"12\"",
        "output": "2",
        "explanation": "AB or L"
      },
      {
        "input": "s=\"226\"",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "s=\"06\"",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤100",
      "s consists only of digits"
    ],
    "hints": [
      "dp[i] = ways to decode s[0..i-1]. dp[0]=1 (empty), dp[1]=1 if s[0]!=0.",
      "If s[i-1]!=\"0\" add dp[i-1]. If 10≤two-digit≤26 add dp[i-2]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - numDecodings\n */\nfunction numDecodings(s) {\n  // Your solution here\n}",
      "python": "def numDecodings(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int numDecodings(s) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numDecodings(s) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function numDecodings(s) {\n  if(s[0]===\"0\")return 0;let p2=1,p1=1;for(let i=1;i<s.length;i++){let cur=0;if(s[i]!==\"0\")cur+=p1;const two=parseInt(s.slice(i-1,i+1));if(two>=10&&two<=26)cur+=p2;p2=p1;p1=cur;}return p1;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "perfect-squares",
    "title": "Perfect Squares",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/perfect-squares/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an integer n, return the least number of perfect square numbers that sum to n.",
    "examples": [
      {
        "input": "n=12",
        "output": "3",
        "explanation": "4+4+4"
      },
      {
        "input": "n=13",
        "output": "2",
        "explanation": "4+9"
      }
    ],
    "constraints": [
      "1≤n≤10^4"
    ],
    "hints": [
      "BFS treating n as graph level or DP: dp[i] = min(dp[i-j*j]+1) for each perfect square j*j ≤ i."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - numSquares\n */\nfunction numSquares(n) {\n  // Your solution here\n}",
      "python": "def numSquares(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int numSquares(n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numSquares(n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function numSquares(n) {\n  const dp=new Array(n+1).fill(Infinity);dp[0]=0;for(let i=1;i<=n;i++)for(let j=1;j*j<=i;j++)dp[i]=Math.min(dp[i],dp[i-j*j]+1);return dp[n];\n}",
    "timeComplexity": "O(n√n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "unique-paths-ii",
    "title": "Unique Paths II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 40,
    "leetcodeLink": "https://leetcode.com/problems/unique-paths-ii/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "An m×n grid has obstacles (obstacleGrid[i][j]=1). A robot moves only right or down from top-left to bottom-right. Return number of unique paths avoiding obstacles.",
    "examples": [
      {
        "input": "obstacleGrid=[[0,0,0],[0,1,0],[0,0,0]]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "obstacleGrid=[[0,1],[0,0]]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==obstacleGrid.length",
      "n==obstacleGrid[i].length",
      "1≤m,n≤100",
      "obstacleGrid[i][j] is 0 or 1"
    ],
    "hints": [
      "dp[i][j]=0 if obstacle, else dp[i-1][j]+dp[i][j-1]. Use 1D dp array."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - uniquePathsWithObstacles\n */\nfunction uniquePathsWithObstacles(obstacleGrid) {\n  // Your solution here\n}",
      "python": "def uniquePathsWithObstacles(obstacleGrid):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int uniquePathsWithObstacles(obstacleGrid) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int uniquePathsWithObstacles(obstacleGrid) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function uniquePathsWithObstacles(obstacleGrid) {\n  const m=obstacleGrid.length,n=obstacleGrid[0].length,dp=new Array(n).fill(0);dp[0]=1;for(let i=0;i<m;i++)for(let j=0;j<n;j++){if(obstacleGrid[i][j])dp[j]=0;else if(j>0)dp[j]+=dp[j-1];}return dp[n-1];\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "longest-common-subsequence",
    "title": "Longest Common Subsequence",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "dp",
    "acceptance": 57,
    "leetcodeLink": "https://leetcode.com/problems/longest-common-subsequence/",
    "tags": [
      "Strings",
      "dp"
    ],
    "description": "Given two strings text1 and text2, return the length of their longest common subsequence. A subsequence can be derived by deleting characters without changing order.",
    "examples": [
      {
        "input": "text1=\"abcde\", text2=\"ace\"",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "text1=\"abc\", text2=\"abc\"",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "text1=\"abc\", text2=\"def\"",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤text1.length,text2.length≤1000"
    ],
    "hints": [
      "dp[i][j] = LCS of text1[0..i-1] and text2[0..j-1].",
      "If chars match: dp[i][j]=dp[i-1][j-1]+1. Else: max(dp[i-1][j], dp[i][j-1])."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - longestCommonSubsequence\n */\nfunction longestCommonSubsequence(text1, text2) {\n  // Your solution here\n}",
      "python": "def longestCommonSubsequence(text1, text2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int longestCommonSubsequence(text1, text2) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int longestCommonSubsequence(text1, text2) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function longestCommonSubsequence(text1, text2) {\n  const m=text1.length,n=text2.length,dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=text1[i-1]===text2[j-1]?dp[i-1][j-1]+1:Math.max(dp[i-1][j],dp[i][j-1]);return dp[m][n];\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "edit-distance",
    "title": "Edit Distance",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "dp",
    "acceptance": 53,
    "leetcodeLink": "https://leetcode.com/problems/edit-distance/",
    "tags": [
      "Strings",
      "dp"
    ],
    "description": "Given two strings word1 and word2, return the minimum number of operations (insert, delete, replace one character) to convert word1 to word2.",
    "examples": [
      {
        "input": "word1=\"horse\", word2=\"ros\"",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "word1=\"intention\", word2=\"execution\"",
        "output": "5",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤word1.length,word2.length≤500"
    ],
    "hints": [
      "dp[i][j] = edit distance between word1[0..i-1] and word2[0..j-1].",
      "If chars match: dp[i][j]=dp[i-1][j-1]. Else: 1+min(dp[i-1][j-1], dp[i-1][j], dp[i][j-1])."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - minDistance\n */\nfunction minDistance(word1, word2) {\n  // Your solution here\n}",
      "python": "def minDistance(word1, word2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int minDistance(word1, word2) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minDistance(word1, word2) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function minDistance(word1, word2) {\n  const m=word1.length,n=word2.length,dp=Array.from({length:m+1},(_,i)=>[i,...new Array(n).fill(0)]);for(let j=0;j<=n;j++)dp[0][j]=j;for(let i=1;i<=m;i++)for(let j=1;j<=n;j++)dp[i][j]=word1[i-1]===word2[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);return dp[m][n];\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "maximal-square",
    "title": "Maximal Square",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/maximal-square/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an m×n binary matrix filled with 0s and 1s, find the largest square containing only 1s and return its area.",
    "examples": [
      {
        "input": "matrix=[[\"1\",\"0\",\"1\",\"0\",\"0\"],[\"1\",\"0\",\"1\",\"1\",\"1\"],[\"1\",\"1\",\"1\",\"1\",\"1\"],[\"1\",\"0\",\"0\",\"1\",\"0\"]]",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "matrix=[[\"0\",\"1\"],[\"1\",\"0\"]]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==matrix.length",
      "n==matrix[i].length",
      "1≤m,n≤300",
      "matrix[i][j] is \"0\" or \"1\""
    ],
    "hints": [
      "dp[i][j] = side of largest square with bottom-right corner at (i,j).",
      "If matrix[i][j]==\"1\": dp[i][j]=min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])+1."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maximalSquare\n */\nfunction maximalSquare(matrix) {\n  // Your solution here\n}",
      "python": "def maximalSquare(matrix):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maximalSquare(matrix) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maximalSquare(matrix) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maximalSquare(matrix) {\n  const m=matrix.length,n=matrix[0].length;let max=0;const dp=new Array(n+1).fill(0);let prev=0;for(let i=1;i<=m;i++)for(let j=1;j<=n;j++){const temp=dp[j];dp[j]=matrix[i-1][j-1]===\"1\"?Math.min(dp[j],dp[j-1],prev)+1:0;max=Math.max(max,dp[j]);prev=temp;}return max*max;\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "best-time-to-buy-and-sell-stock-with-cooldown",
    "title": "Best Time to Buy and Sell Stock with Cooldown",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 53,
    "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given daily prices, you may buy and sell stock multiple times with one share at a time. After selling, you must wait one day (cooldown). Maximize profit.",
    "examples": [
      {
        "input": "prices=[1,2,3,0,2]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "prices=[1]",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤prices.length≤5000",
      "0≤prices[i]≤1000"
    ],
    "hints": [
      "States: hold (have stock), sold (just sold, on cooldown), rest (no stock, not cooldown).",
      "hold=max(hold, rest-price). sold=hold+price. rest=max(rest, sold)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxProfit\n */\nfunction maxProfit(prices) {\n  // Your solution here\n}",
      "python": "def maxProfit(prices):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxProfit(prices) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxProfit(prices) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxProfit(prices) {\n  let hold=-Infinity,sold=0,rest=0;for(const p of prices){const pHold=hold,pSold=sold,pRest=rest;hold=Math.max(pHold,pRest-p);sold=pHold+p;rest=Math.max(pRest,pSold);}return Math.max(sold,rest);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "target-sum",
    "title": "Target Sum",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 47,
    "leetcodeLink": "https://leetcode.com/problems/target-sum/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given an integer array nums and an integer target, assign + or - to each number and return the number of ways to make the expression equal to target.",
    "examples": [
      {
        "input": "nums=[1,1,1,1,1], target=3",
        "output": "5",
        "explanation": ""
      },
      {
        "input": "nums=[1], target=1",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤20",
      "0≤nums[i]≤1000",
      "0≤sum(nums[i])≤1000"
    ],
    "hints": [
      "Convert to subset sum: find count of subsets with sum = (total+target)/2.",
      "Use DP counting: dp[j] += dp[j-num]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findTargetSumWays\n */\nfunction findTargetSumWays(nums, target) {\n  // Your solution here\n}",
      "python": "def findTargetSumWays(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findTargetSumWays(nums, target) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findTargetSumWays(nums, target) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findTargetSumWays(nums, target) {\n  const sum=nums.reduce((a,b)=>a+b,0);if((sum+target)%2!==0||Math.abs(target)>sum)return 0;const t=(sum+target)/2,dp=new Array(t+1).fill(0);dp[0]=1;for(const n of nums)for(let j=t;j>=n;j--)dp[j]+=dp[j-n];return dp[t];\n}",
    "timeComplexity": "O(n×sum)",
    "spaceComplexity": "O(sum)",
    "testCases": []
  },
  {
    "id": "interleaving-string",
    "title": "Interleaving String",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "dp",
    "acceptance": 37,
    "leetcodeLink": "https://leetcode.com/problems/interleaving-string/",
    "tags": [
      "Strings",
      "dp"
    ],
    "description": "Given strings s1, s2, s3, return true if s3 is formed by interleaving s1 and s2 (preserving their relative order).",
    "examples": [
      {
        "input": "s1=\"aabcc\", s2=\"dbbca\", s3=\"aadbbcbcac\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s1=\"aabcc\", s2=\"dbbca\", s3=\"aadbbbaccc\"",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤s1.length,s2.length≤100",
      "s3.length==s1.length+s2.length"
    ],
    "hints": [
      "dp[i][j] = can s3[0..i+j-1] be formed from s1[0..i-1] and s2[0..j-1].",
      "dp[i][j]=(dp[i-1][j]&&s1[i-1]==s3[i+j-1])||(dp[i][j-1]&&s2[j-1]==s3[i+j-1])."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isInterleave\n */\nfunction isInterleave(s1, s2, s3) {\n  // Your solution here\n}",
      "python": "def isInterleave(s1, s2, s3):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isInterleave(s1, s2, s3) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isInterleave(s1, s2, s3) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isInterleave(s1, s2, s3) {\n  const m=s1.length,n=s2.length;if(m+n!==s3.length)return false;const dp=new Array(n+1).fill(false);dp[0]=true;for(let j=1;j<=n;j++)dp[j]=dp[j-1]&&s2[j-1]===s3[j-1];for(let i=1;i<=m;i++){dp[0]=dp[0]&&s1[i-1]===s3[i-1];for(let j=1;j<=n;j++)dp[j]=(dp[j]&&s1[i-1]===s3[i+j-1])||(dp[j-1]&&s2[j-1]===s3[i+j-1]);}return dp[n];\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "distinct-subsequences",
    "title": "Distinct Subsequences",
    "difficulty": "Hard",
    "ds": "Strings",
    "pattern": "dp",
    "acceptance": 42,
    "leetcodeLink": "https://leetcode.com/problems/distinct-subsequences/",
    "tags": [
      "Strings",
      "dp"
    ],
    "description": "Given strings s and t, return the number of distinct subsequences of s which equals t.",
    "examples": [
      {
        "input": "s=\"rabbbit\", t=\"rabbit\"",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "s=\"babgbag\", t=\"bag\"",
        "output": "5",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length,t.length≤1000",
      "s and t consist of lowercase letters"
    ],
    "hints": [
      "dp[i][j] = distinct subseq of s[0..i-1] matching t[0..j-1].",
      "If s[i-1]==t[j-1]: dp[i][j]=dp[i-1][j-1]+dp[i-1][j]. Else dp[i][j]=dp[i-1][j]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - numDistinct\n */\nfunction numDistinct(s, t) {\n  // Your solution here\n}",
      "python": "def numDistinct(s, t):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int numDistinct(s, t) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int numDistinct(s, t) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function numDistinct(s, t) {\n  const m=s.length,n=t.length,dp=new Array(n+1).fill(0);dp[0]=1;for(let i=1;i<=m;i++)for(let j=n;j>=1;j--)if(s[i-1]===t[j-1])dp[j]+=dp[j-1];return dp[n];\n}",
    "timeComplexity": "O(m×n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "burst-balloons",
    "title": "Burst Balloons",
    "difficulty": "Hard",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/burst-balloons/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given n balloons with nums[i] coins each, bursting balloon i gives nums[i-1]*nums[i]*nums[i+1] coins. Return maximum coins from bursting all balloons. Treat out-of-range as 1.",
    "examples": [
      {
        "input": "nums=[3,1,5,8]",
        "output": "167",
        "explanation": "3+5+3*8=167"
      },
      {
        "input": "nums=[1,5]",
        "output": "10",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==nums.length",
      "1≤n≤300",
      "0≤nums[i]≤100"
    ],
    "hints": [
      "Interval DP: dp[l][r] = max coins from bursting all balloons in (l,r) exclusive.",
      "Try each k as the last balloon to burst in interval: nums[l]*nums[k]*nums[r]+dp[l][k]+dp[k][r]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxCoins\n */\nfunction maxCoins(nums) {\n  // Your solution here\n}",
      "python": "def maxCoins(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxCoins(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxCoins(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxCoins(nums) {\n  const arr=[1,...nums,1],n=arr.length;const dp=Array.from({length:n},()=>new Array(n).fill(0));for(let len=2;len<n;len++)for(let l=0;l<n-len;l++){const r=l+len;for(let k=l+1;k<r;k++)dp[l][r]=Math.max(dp[l][r],arr[l]*arr[k]*arr[r]+dp[l][k]+dp[k][r]);}return dp[0][n-1];\n}",
    "timeComplexity": "O(n³)",
    "spaceComplexity": "O(n²)",
    "testCases": []
  },
  {
    "id": "triangle",
    "title": "Triangle",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "dp",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/triangle/",
    "tags": [
      "Arrays",
      "dp"
    ],
    "description": "Given a triangle array, return the minimum path sum from top to bottom. At each step you may move to adjacent numbers on the row below.",
    "examples": [
      {
        "input": "triangle=[[2],[3,4],[6,5,7],[4,1,8,3]]",
        "output": "11",
        "explanation": "2+3+5+1=11"
      },
      {
        "input": "triangle=[[-10]]",
        "output": "-10",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤triangle.length≤200",
      "triangle[i].length==i+1"
    ],
    "hints": [
      "Bottom-up: start from second-to-last row. dp[j]+=min(dp[j], dp[j+1]).",
      "Modify in place (or use copy). After all rows, dp[0] is answer."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - minimumTotal\n */\nfunction minimumTotal(triangle) {\n  // Your solution here\n}",
      "python": "def minimumTotal(triangle):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int minimumTotal(triangle) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minimumTotal(triangle) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function minimumTotal(triangle) {\n  const dp=[...triangle[triangle.length-1]];for(let i=triangle.length-2;i>=0;i--)for(let j=0;j<=i;j++)dp[j]=triangle[i][j]+Math.min(dp[j],dp[j+1]);return dp[0];\n}",
    "timeComplexity": "O(n²)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "gas-station",
    "title": "Gas Station",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 44,
    "leetcodeLink": "https://leetcode.com/problems/gas-station/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Given n gas stations in a circle with gas[i] and cost[i] to travel from i to i+1, find the starting index to complete the circuit. Return -1 if impossible.",
    "examples": [
      {
        "input": "gas=[1,2,3,4,5], cost=[3,4,5,1,2]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "gas=[2,3,4], cost=[3,4,3]",
        "output": "-1",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==gas.length==cost.length",
      "1≤n≤10^5",
      "0≤gas[i],cost[i]≤10^4"
    ],
    "hints": [
      "If total gas >= total cost, a solution exists. The starting station is where tank never goes negative.",
      "Greedy: reset start when tank < 0."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - canCompleteCircuit\n */\nfunction canCompleteCircuit(gas, cost) {\n  // Your solution here\n}",
      "python": "def canCompleteCircuit(gas, cost):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int canCompleteCircuit(gas, cost) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int canCompleteCircuit(gas, cost) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function canCompleteCircuit(gas, cost) {\n  let total=0,tank=0,start=0;for(let i=0;i<gas.length;i++){const diff=gas[i]-cost[i];total+=diff;tank+=diff;if(tank<0){start=i+1;tank=0;}}return total>=0?start:-1;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "valid-parenthesis-string",
    "title": "Valid Parenthesis String",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "greedy",
    "acceptance": 33,
    "leetcodeLink": "https://leetcode.com/problems/valid-parenthesis-string/",
    "tags": [
      "Strings",
      "greedy"
    ],
    "description": "Given a string s containing '(', ')', '*' where '*' can be '(', ')' or empty, return true if s is valid.",
    "examples": [
      {
        "input": "s=\"(*)\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"(*))\"",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "s=\"(**)\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤100",
      "s[i] is \"(\", \")\", or \"*\""
    ],
    "hints": [
      "Track min and max possible open parentheses. \"*\" adjusts both.",
      "If max < 0 at any point, return false. At end, return min == 0."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - checkValidString\n */\nfunction checkValidString(s) {\n  // Your solution here\n}",
      "python": "def checkValidString(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean checkValidString(s) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool checkValidString(s) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function checkValidString(s) {\n  let lo=0,hi=0;for(const c of s){if(c===\"(\"){lo++;hi++;}else if(c===\")\"){lo--;hi--;}else{lo--;hi++;}if(hi<0)return false;lo=Math.max(lo,0);}return lo===0;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "meeting-rooms",
    "title": "Meeting Rooms",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "sorting",
    "acceptance": 57,
    "leetcodeLink": "https://leetcode.com/problems/meeting-rooms/",
    "tags": [
      "Arrays",
      "sorting"
    ],
    "description": "Given an array of meeting time intervals where intervals[i]=[start_i, end_i], determine if a person could attend all meetings (no overlaps).",
    "examples": [
      {
        "input": "intervals=[[0,30],[5,10],[15,20]]",
        "output": "false",
        "explanation": ""
      },
      {
        "input": "intervals=[[7,10],[2,4]]",
        "output": "true",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤intervals.length≤10^4"
    ],
    "hints": [
      "Sort by start time. Check if any interval starts before the previous one ends."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - canAttendMeetings\n */\nfunction canAttendMeetings(intervals) {\n  // Your solution here\n}",
      "python": "def canAttendMeetings(intervals):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean canAttendMeetings(intervals) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool canAttendMeetings(intervals) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function canAttendMeetings(intervals) {\n  intervals.sort((a,b)=>a[0]-b[0]);for(let i=1;i<intervals.length;i++)if(intervals[i][0]<intervals[i-1][1])return false;return true;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "meeting-rooms-ii",
    "title": "Meeting Rooms II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "sorting",
    "acceptance": 50,
    "leetcodeLink": "https://leetcode.com/problems/meeting-rooms-ii/",
    "tags": [
      "Arrays",
      "sorting"
    ],
    "description": "Given meeting intervals, find the minimum number of conference rooms required to hold all meetings.",
    "examples": [
      {
        "input": "intervals=[[0,30],[5,10],[15,20]]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "intervals=[[7,10],[2,4]]",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤intervals.length≤10^4",
      "0≤start_i<end_i≤10^6"
    ],
    "hints": [
      "Separate and sort start and end times. Two pointers: if next meeting starts before earliest end, need new room."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - minMeetingRooms\n */\nfunction minMeetingRooms(intervals) {\n  // Your solution here\n}",
      "python": "def minMeetingRooms(intervals):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int minMeetingRooms(intervals) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int minMeetingRooms(intervals) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function minMeetingRooms(intervals) {\n  const starts=intervals.map(i=>i[0]).sort((a,b)=>a-b),ends=intervals.map(i=>i[1]).sort((a,b)=>a-b);let rooms=0,j=0;for(let i=0;i<starts.length;i++){if(starts[i]<ends[j])rooms++;else j++;}return rooms;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "non-overlapping-intervals",
    "title": "Non-overlapping Intervals",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 48,
    "leetcodeLink": "https://leetcode.com/problems/non-overlapping-intervals/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Given an array of intervals, return the minimum number of intervals to remove to make the rest non-overlapping.",
    "examples": [
      {
        "input": "intervals=[[1,2],[2,3],[3,4],[1,3]]",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "intervals=[[1,2],[1,2],[1,2]]",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤intervals.length≤10^5",
      "intervals[i].length==2"
    ],
    "hints": [
      "Sort by end time. Greedily keep interval with earliest end. Remove overlapping ones."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - eraseOverlapIntervals\n */\nfunction eraseOverlapIntervals(intervals) {\n  // Your solution here\n}",
      "python": "def eraseOverlapIntervals(intervals):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int eraseOverlapIntervals(intervals) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int eraseOverlapIntervals(intervals) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function eraseOverlapIntervals(intervals) {\n  intervals.sort((a,b)=>a[1]-b[1]);let end=-Infinity,remove=0;for(const[s,e]of intervals){if(s>=end)end=e;else remove++;}return remove;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "minimum-number-of-arrows-to-burst-balloons",
    "title": "Minimum Number of Arrows to Burst Balloons",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Balloons are represented by intervals [x_start, x_end] on a wall. An arrow shot at x bursts all balloons with x_start <= x <= x_end. Return the minimum arrows needed to burst all balloons.",
    "examples": [
      {
        "input": "points=[[10,16],[2,8],[1,6],[7,12]]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "points=[[1,2],[3,4],[5,6],[7,8]]",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤points.length≤10^5",
      "-2^31≤x_start≤x_end≤2^31-1"
    ],
    "hints": [
      "Sort by end. Shoot at end of first balloon. Skip all balloons covered by this shot."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findMinArrowShots\n */\nfunction findMinArrowShots(points) {\n  // Your solution here\n}",
      "python": "def findMinArrowShots(points):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findMinArrowShots(points) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findMinArrowShots(points) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findMinArrowShots(points) {\n  points.sort((a,b)=>a[1]-b[1]);let arrows=1,end=points[0][1];for(const[s,e]of points)if(s>end){arrows++;end=e;}return arrows;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "assign-cookies",
    "title": "Assign Cookies",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/assign-cookies/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Given greed factor g[i] for each child and sizes s[j] for each cookie, assign cookies to maximize number of content children. A child is content if s[j] >= g[i].",
    "examples": [
      {
        "input": "g=[1,2,3], s=[1,1]",
        "output": "1",
        "explanation": ""
      },
      {
        "input": "g=[1,2], s=[1,2,3]",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤g.length,s.length≤3*10^4",
      "1≤g[i],s[j]≤2^31-1"
    ],
    "hints": [
      "Sort both arrays. Greedily assign smallest sufficient cookie to greediest child possible."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - findContentChildren\n */\nfunction findContentChildren(g, s) {\n  // Your solution here\n}",
      "python": "def findContentChildren(g, s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int findContentChildren(g, s) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int findContentChildren(g, s) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function findContentChildren(g, s) {\n  g.sort((a,b)=>a-b);s.sort((a,b)=>a-b);let i=0,j=0;while(i<g.length&&j<s.length){if(s[j]>=g[i])i++;j++;}return i;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "wiggle-subsequence",
    "title": "Wiggle Subsequence",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 47,
    "leetcodeLink": "https://leetcode.com/problems/wiggle-subsequence/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "A wiggle sequence alternates between increases and decreases. Given array nums, return the length of the longest wiggle subsequence.",
    "examples": [
      {
        "input": "nums=[1,7,4,9,2,5]",
        "output": "6",
        "explanation": ""
      },
      {
        "input": "nums=[1,17,5,10,13,15,10,5,16,8]",
        "output": "7",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤1000",
      "0≤nums[i]≤1000"
    ],
    "hints": [
      "Greedily count direction changes. Track last difference direction.",
      "Whenever direction changes, increment count."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - wiggleMaxLength\n */\nfunction wiggleMaxLength(nums) {\n  // Your solution here\n}",
      "python": "def wiggleMaxLength(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int wiggleMaxLength(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int wiggleMaxLength(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function wiggleMaxLength(nums) {\n  if(nums.length<2)return nums.length;let up=1,down=1;for(let i=1;i<nums.length;i++){if(nums[i]>nums[i-1])up=down+1;else if(nums[i]<nums[i-1])down=up+1;}return Math.max(up,down);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "hand-of-straights",
    "title": "Hand of Straights",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 57,
    "leetcodeLink": "https://leetcode.com/problems/hand-of-straights/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Given an integer array hand and groupSize, determine if you can rearrange the cards so every group of groupSize consecutive cards is valid.",
    "examples": [
      {
        "input": "hand=[1,2,3,6,2,3,4,7,8], groupSize=3",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "hand=[1,2,3,4,5], groupSize=4",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤hand.length≤10^4",
      "0≤hand[i]≤10^9",
      "1≤groupSize≤hand.length"
    ],
    "hints": [
      "Count frequencies. Sort keys. Greedily form groups starting from smallest."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isNStraightHand\n */\nfunction isNStraightHand(hand, groupSize) {\n  // Your solution here\n}",
      "python": "def isNStraightHand(hand, groupSize):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isNStraightHand(hand, groupSize) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isNStraightHand(hand, groupSize) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isNStraightHand(hand, groupSize) {\n  if(hand.length%groupSize!==0)return false;const cnt=new Map();for(const c of hand)cnt.set(c,(cnt.get(c)||0)+1);const keys=[...cnt.keys()].sort((a,b)=>a-b);for(const k of keys){const n=cnt.get(k)||0;if(n>0)for(let i=1;i<groupSize;i++){const nk=k+i;if((cnt.get(nk)||0)<n)return false;cnt.set(nk,cnt.get(nk)-n);}cnt.set(k,0);}return true;\n}",
    "timeComplexity": "O(n log n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "lemonade-change",
    "title": "Lemonade Change",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/lemonade-change/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Customers pay $5/$10/$20 for a $5 lemonade. You must provide correct change. Given bills array, return true if you can provide change to every customer.",
    "examples": [
      {
        "input": "bills=[5,5,5,10,20]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "bills=[5,5,10,10,20]",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤bills.length≤10^5",
      "bills[i] is 5, 10, or 20"
    ],
    "hints": [
      "Greedily use larger bills for change first. Track count of $5 and $10 bills."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - lemonadeChange\n */\nfunction lemonadeChange(bills) {\n  // Your solution here\n}",
      "python": "def lemonadeChange(bills):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean lemonadeChange(bills) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool lemonadeChange(bills) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function lemonadeChange(bills) {\n  let five=0,ten=0;for(const b of bills){if(b===5)five++;else if(b===10){if(!five)return false;five--;ten++;}else{if(ten&&five){ten--;five--;}else if(five>=3)five-=3;else return false;}}return true;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "candy",
    "title": "Candy",
    "difficulty": "Hard",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 38,
    "leetcodeLink": "https://leetcode.com/problems/candy/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Give n children with ratings[i]. Give each at least 1 candy. Children with higher rating than neighbors must have more. Return minimum total candies.",
    "examples": [
      {
        "input": "ratings=[1,0,2]",
        "output": "5",
        "explanation": ""
      },
      {
        "input": "ratings=[1,2,2]",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==ratings.length",
      "1≤n≤2*10^4",
      "0≤ratings[i]≤2*10^4"
    ],
    "hints": [
      "Two-pass: left→right (increase if rating higher than left). Right→left (ensure higher than right)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - candy\n */\nfunction candy(ratings) {\n  // Your solution here\n}",
      "python": "def candy(ratings):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int candy(ratings) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int candy(ratings) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function candy(ratings) {\n  const n=ratings.length,c=new Array(n).fill(1);for(let i=1;i<n;i++)if(ratings[i]>ratings[i-1])c[i]=c[i-1]+1;for(let i=n-2;i>=0;i--)if(ratings[i]>ratings[i+1]&&c[i]<=c[i+1])c[i]=c[i+1]+1;return c.reduce((a,b)=>a+b,0);\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "implement-trie-prefix-tree",
    "title": "Implement Trie (Prefix Tree)",
    "difficulty": "Medium",
    "ds": "Trie",
    "pattern": "trie",
    "acceptance": 59,
    "leetcodeLink": "https://leetcode.com/problems/implement-trie-prefix-tree/",
    "tags": [
      "Trie",
      "trie"
    ],
    "description": "Implement a trie with insert(word), search(word)→boolean, and startsWith(prefix)→boolean methods.",
    "examples": [
      {
        "input": "insert(\"apple\"); search(\"apple\")→true; search(\"app\")→false; startsWith(\"app\")→true; insert(\"app\"); search(\"app\")→true",
        "output": "see above",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤word.length≤2000",
      "word and prefix consist of lowercase letters",
      "At most 3*10^4 operations"
    ],
    "hints": [
      "Each node has 26 children and an isEnd flag.",
      "Insert: traverse/create nodes. Search: traverse and check isEnd. StartsWith: traverse only."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {object} - Trie\n */\nfunction Trie(input) {\n  // Your solution here\n}",
      "python": "def Trie(input):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object Trie(input) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto Trie(input) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "// Class-based solution — see LeetCode \n// Core logic:\n// this.root={};",
    "timeComplexity": "O(m) per op",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "design-add-and-search-words-data-structure",
    "title": "Design Add and Search Words Data Structure",
    "difficulty": "Medium",
    "ds": "Trie",
    "pattern": "trie",
    "acceptance": 44,
    "leetcodeLink": "https://leetcode.com/problems/design-add-and-search-words-data-structure/",
    "tags": [
      "Trie",
      "trie"
    ],
    "description": "Design a data structure supporting addWord(word) and search(word) where \".\" in search can match any letter.",
    "examples": [
      {
        "input": "addWord(\"bad\"); addWord(\"dad\"); addWord(\"mad\"); search(\"pad\")→false; search(\"bad\")→true; search(\".ad\")→true; search(\"b..\")→true",
        "output": "see above",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤word.length≤25",
      "word consists of lowercase letters or \".\""
    ],
    "hints": [
      "Trie with DFS for \".\". When \".\" encountered, try all 26 children recursively."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {object} - WordDictionary\n */\nfunction WordDictionary(input) {\n  // Your solution here\n}",
      "python": "def WordDictionary(input):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object WordDictionary(input) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto WordDictionary(input) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "// Class-based solution — see LeetCode \n// Core logic:\n// this.root={};",
    "timeComplexity": "O(m) add, O(26^m) search with dots",
    "spaceComplexity": "O(m×n)",
    "testCases": []
  },
  {
    "id": "replace-words",
    "title": "Replace Words",
    "difficulty": "Medium",
    "ds": "Trie",
    "pattern": "trie",
    "acceptance": 63,
    "leetcodeLink": "https://leetcode.com/problems/replace-words/",
    "tags": [
      "Trie",
      "trie"
    ],
    "description": "Given a dictionary of roots and a sentence, replace each word in the sentence with its root. If no root exists, keep the original.",
    "examples": [
      {
        "input": "dictionary=[\"cat\",\"bat\",\"rat\"], sentence=\"the cattle was rattled by the battery\"",
        "output": "\"the cat was rat by the bat\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤dictionary.length≤1000",
      "1≤sentence.length≤10^6"
    ],
    "hints": [
      "Build trie from roots. For each word in sentence, find its shortest root prefix in trie."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - replaceWords\n */\nfunction replaceWords(dictionary, sentence) {\n  // Your solution here\n}",
      "python": "def replaceWords(dictionary, sentence):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String replaceWords(dictionary, sentence) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string replaceWords(dictionary, sentence) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function replaceWords(dictionary, sentence) {\n  const trie={};for(const w of dictionary){let node=trie;for(const c of w){if(!node[c])node[c]={};if(node[c].end)break;node=node[c];}node.end=true;}return sentence.split(\" \").map(w=>{let node=trie;for(let i=0;i<w.length;i++){const c=w[i];if(!node[c])break;node=node[c];if(node.end)return w.slice(0,i+1);}return w;}).join(\" \");\n}",
    "timeComplexity": "O(D+S)",
    "spaceComplexity": "O(D)",
    "testCases": []
  },
  {
    "id": "word-search-ii",
    "title": "Word Search II",
    "difficulty": "Hard",
    "ds": "Trie",
    "pattern": "trie",
    "acceptance": 35,
    "leetcodeLink": "https://leetcode.com/problems/word-search-ii/",
    "tags": [
      "Trie",
      "trie"
    ],
    "description": "Given an m×n board and a list of words, return all words that can be found in the board. Words can be formed by sequentially adjacent cells (4-directional).",
    "examples": [
      {
        "input": "board=[[\"o\",\"a\",\"a\",\"n\"],[\"e\",\"t\",\"a\",\"e\"],[\"i\",\"h\",\"k\",\"r\"],[\"i\",\"f\",\"l\",\"v\"]], words=[\"oath\",\"pea\",\"eat\",\"rain\"]",
        "output": "[\"eat\",\"oath\"]",
        "explanation": ""
      }
    ],
    "constraints": [
      "m==board.length",
      "n==board[i].length",
      "1≤m,n≤12",
      "words[i] length in [1,10]"
    ],
    "hints": [
      "Build trie from words. DFS from each cell using trie to prune search.",
      "Mark cells visited. When trie end found, add word to result."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string[]} - findWords\n */\nfunction findWords(board, words) {\n  // Your solution here\n}",
      "python": "def findWords(board, words):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String[] findWords(board, words) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<string> findWords(board, words) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function findWords(board, words) {\n  const trie={},res=new Set();for(const w of words){let n=trie;for(const c of w){n[c]=n[c]||{};n=n[c];}n.$=w;}const m=board.length,nCols=board[0].length;function dfs(i,j,node){if(i<0||i>=m||j<0||j>=nCols||board[i][j]===\"-\"||!node[board[i][j]])return;const c=board[i][j],next=node[c];if(next.$)res.add(next.$);board[i][j]=\"-\";dfs(i+1,j,next);dfs(i-1,j,next);dfs(i,j+1,next);dfs(i,j-1,next);board[i][j]=c;}for(let i=0;i<m;i++)for(let j=0;j<nCols;j++)dfs(i,j,trie);return[...res];\n}",
    "timeComplexity": "O(m×n×4×3^(L-1))",
    "spaceComplexity": "O(words×L)",
    "testCases": []
  },
  {
    "id": "longest-word-in-dictionary",
    "title": "Longest Word in Dictionary",
    "difficulty": "Medium",
    "ds": "Trie",
    "pattern": "trie",
    "acceptance": 51,
    "leetcodeLink": "https://leetcode.com/problems/longest-word-in-dictionary/",
    "tags": [
      "Trie",
      "trie"
    ],
    "description": "Given an array of strings words, return the longest word that can be built one character at a time from other words in the array. If tie, return lexicographically smallest.",
    "examples": [
      {
        "input": "words=[\"w\",\"wo\",\"wor\",\"word\",\"world\"]",
        "output": "\"world\"",
        "explanation": ""
      },
      {
        "input": "words=[\"a\",\"banana\",\"app\",\"appl\",\"ap\",\"apply\",\"apple\"]",
        "output": "\"apple\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤words.length≤1000",
      "1≤words[i].length≤30",
      "words[i] consists of lowercase letters"
    ],
    "hints": [
      "Sort words. Mark each word in a set. For each word, check if all its prefixes exist in set."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - longestWord\n */\nfunction longestWord(words) {\n  // Your solution here\n}",
      "python": "def longestWord(words):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String longestWord(words) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string longestWord(words) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function longestWord(words) {\n  const set=new Set([\"\"]); words.sort();let res=\"\";for(const w of words){if(set.has(w.slice(0,-1))){set.add(w);if(w.length>res.length)res=w;}}return res;\n}",
    "timeComplexity": "O(n×m)",
    "spaceComplexity": "O(n×m)",
    "testCases": []
  },
  {
    "id": "number-of-1-bits",
    "title": "Number of 1 Bits",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 67,
    "leetcodeLink": "https://leetcode.com/problems/number-of-1-bits/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Write a function that takes the binary representation of an unsigned integer and returns the number of '1' bits it has (Hamming weight).",
    "examples": [
      {
        "input": "n=00000000000000000000000000001011",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "n=00000000000000000000000010000000",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "The input is a 32-bit unsigned integer"
    ],
    "hints": [
      "n & (n-1) removes the lowest set bit. Count how many times until n=0."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - hammingWeight\n */\nfunction hammingWeight(n) {\n  // Your solution here\n}",
      "python": "def hammingWeight(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int hammingWeight(n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int hammingWeight(n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function hammingWeight(n) {\n  let cnt=0;while(n){n&=n-1;cnt++;}return cnt;\n}",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "counting-bits",
    "title": "Counting Bits",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 75,
    "leetcodeLink": "https://leetcode.com/problems/counting-bits/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given integer n, return an array ans of length n+1 where ans[i] is the number of 1's in the binary representation of i.",
    "examples": [
      {
        "input": "n=2",
        "output": "[0,1,1]",
        "explanation": ""
      },
      {
        "input": "n=5",
        "output": "[0,1,1,2,1,2]",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤n≤10^5"
    ],
    "hints": [
      "dp[i] = dp[i>>1] + (i&1). The number of 1s in i equals 1s in i/2 plus last bit."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - countBits\n */\nfunction countBits(n) {\n  // Your solution here\n}",
      "python": "def countBits(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] countBits(n) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> countBits(n) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function countBits(n) {\n  const ans=new Array(n+1).fill(0);for(let i=1;i<=n;i++)ans[i]=ans[i>>1]+(i&1);return ans;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "reverse-bits",
    "title": "Reverse Bits",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/reverse-bits/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Reverse bits of a given 32 bits unsigned integer.",
    "examples": [
      {
        "input": "n=00000010100101000001111010011100",
        "output": "00111001011110000010100101000000=964176192",
        "explanation": ""
      },
      {
        "input": "n=11111111111111111111111111111101",
        "output": "10111111111111111111111111111111=3221225471",
        "explanation": ""
      }
    ],
    "constraints": [
      "The input is a 32-bit unsigned integer"
    ],
    "hints": [
      "Loop 32 times: take LSB of n, shift result left, OR in the bit, shift n right."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - reverseBits\n */\nfunction reverseBits(n) {\n  // Your solution here\n}",
      "python": "def reverseBits(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int reverseBits(n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int reverseBits(n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function reverseBits(n) {\n  let res=0;for(let i=0;i<32;i++){res=(res<<1)|(n&1);n>>=1;}return res>>>0;\n}",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "sum-of-two-integers",
    "title": "Sum of Two Integers",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 51,
    "leetcodeLink": "https://leetcode.com/problems/sum-of-two-integers/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given two integers a and b, return the sum of the two integers without using the operators + and -.",
    "examples": [
      {
        "input": "a=1, b=2",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "a=2, b=3",
        "output": "5",
        "explanation": ""
      }
    ],
    "constraints": [
      "-1000≤a,b≤1000"
    ],
    "hints": [
      "Use XOR for sum without carry, AND shifted left for carry. Repeat until no carry."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - getSum\n */\nfunction getSum(a, b) {\n  // Your solution here\n}",
      "python": "def getSum(a, b):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int getSum(a, b) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int getSum(a, b) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function getSum(a, b) {\n  while(b){const carry=(a&b)<<1;a^=b;b=carry;}return a;\n}",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "single-number-ii",
    "title": "Single Number II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 60,
    "leetcodeLink": "https://leetcode.com/problems/single-number-ii/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given an integer array where every element appears three times except for one element which appears once, find that single one. Must use O(1) extra space.",
    "examples": [
      {
        "input": "nums=[2,2,3,2]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "nums=[0,1,0,1,0,1,99]",
        "output": "99",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤3*10^4",
      "-2^31≤nums[i]≤2^31-1"
    ],
    "hints": [
      "Use bit counting: for each bit position, sum all elements mod 3 == bit of the single element.",
      "Or use two variables ones and twos tracking bits appearing 1 and 2 times mod 3."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - singleNumber\n */\nfunction singleNumber(nums) {\n  // Your solution here\n}",
      "python": "def singleNumber(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int singleNumber(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int singleNumber(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function singleNumber(nums) {\n  let ones=0,twos=0;for(const n of nums){ones=(ones^n)&~twos;twos=(twos^n)&~ones;}return ones;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "power-of-two",
    "title": "Power of Two",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 45,
    "leetcodeLink": "https://leetcode.com/problems/power-of-two/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given an integer n, return true if it is a power of two.",
    "examples": [
      {
        "input": "n=1",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "n=16",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "n=3",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "-2^31≤n≤2^31-1"
    ],
    "hints": [
      "Power of 2 has exactly one bit set. n & (n-1) == 0 and n > 0."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isPowerOfTwo\n */\nfunction isPowerOfTwo(n) {\n  // Your solution here\n}",
      "python": "def isPowerOfTwo(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isPowerOfTwo(n) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isPowerOfTwo(n) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isPowerOfTwo(n) {\n  return n>0&&(n&n-1)===0;\n}",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "missing-number-bit",
    "title": "Missing Number",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 63,
    "leetcodeLink": "https://leetcode.com/problems/missing-number-bit/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given an array nums containing n distinct numbers in range [0,n], return the only missing number.",
    "examples": [
      {
        "input": "nums=[3,0,1]",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "nums=[9,6,4,2,3,5,7,0,1]",
        "output": "8",
        "explanation": ""
      }
    ],
    "constraints": [
      "n==nums.length",
      "0≤nums[i]≤n",
      "All nums distinct"
    ],
    "hints": [
      "XOR all indices 0..n and all values. Pairs cancel, leaving the missing number."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - missingNumber\n */\nfunction missingNumber(nums) {\n  // Your solution here\n}",
      "python": "def missingNumber(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int missingNumber(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int missingNumber(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function missingNumber(nums) {\n  let res=nums.length;for(let i=0;i<nums.length;i++)res^=i^nums[i];return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "bitwise-and-of-numbers-range",
    "title": "Bitwise AND of Numbers Range",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 42,
    "leetcodeLink": "https://leetcode.com/problems/bitwise-and-of-numbers-range/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given two integers left and right, return the bitwise AND of all numbers in the inclusive range [left, right].",
    "examples": [
      {
        "input": "left=5, right=7",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "left=1, right=2147483647",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤left≤right≤2^31-1"
    ],
    "hints": [
      "Find common prefix of left and right in binary. Shift both right until equal, count shifts, then shift back."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - rangeBitwiseAnd\n */\nfunction rangeBitwiseAnd(left, right) {\n  // Your solution here\n}",
      "python": "def rangeBitwiseAnd(left, right):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int rangeBitwiseAnd(left, right) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int rangeBitwiseAnd(left, right) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function rangeBitwiseAnd(left, right) {\n  let shift=0;while(left!==right){left>>=1;right>>=1;shift++;}return left<<shift;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "happy-number",
    "title": "Happy Number",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "hash-map",
    "acceptance": 55,
    "leetcodeLink": "https://leetcode.com/problems/happy-number/",
    "tags": [
      "Arrays",
      "hash-map"
    ],
    "description": "A happy number is defined by: start with any positive integer, replace by sum of squares of its digits, repeat until 1 (happy) or loops endlessly (not happy). Return true if happy.",
    "examples": [
      {
        "input": "n=19",
        "output": "true",
        "explanation": "1²+9²=82→68→100→1"
      },
      {
        "input": "n=2",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤n≤2^31-1"
    ],
    "hints": [
      "Detect cycle: use slow/fast pointers or a set. If we reach 1, happy. If we revisit, not happy."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isHappy\n */\nfunction isHappy(n) {\n  // Your solution here\n}",
      "python": "def isHappy(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isHappy(n) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isHappy(n) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isHappy(n) {\n  function sumSq(n){let s=0;while(n){s+=(n%10)**2;n=Math.floor(n/10);}return s;}let s=n,f=n;do{s=sumSq(s);f=sumSq(sumSq(f));}while(s!==f);return s===1;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "palindrome-number",
    "title": "Palindrome Number",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "math",
    "acceptance": 52,
    "leetcodeLink": "https://leetcode.com/problems/palindrome-number/",
    "tags": [
      "Arrays",
      "math"
    ],
    "description": "Given an integer x, return true if it is a palindrome (reads same forward and backward). Negative numbers are not palindromes.",
    "examples": [
      {
        "input": "x=121",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "x=-121",
        "output": "false",
        "explanation": ""
      },
      {
        "input": "x=10",
        "output": "false",
        "explanation": ""
      }
    ],
    "constraints": [
      "-2^31≤x≤2^31-1"
    ],
    "hints": [
      "No string conversion: reverse second half of digits. If x == reversed_half (or reversed_half/10 for odd), palindrome."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - isPalindrome\n */\nfunction isPalindrome(x) {\n  // Your solution here\n}",
      "python": "def isPalindrome(x):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean isPalindrome(x) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool isPalindrome(x) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function isPalindrome(x) {\n  if(x<0||(x%10===0&&x!==0))return false;let rev=0;while(x>rev){rev=rev*10+x%10;x=Math.floor(x/10);}return x===rev||x===Math.floor(rev/10);\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "roman-to-integer",
    "title": "Roman to Integer",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "hash-map",
    "acceptance": 62,
    "leetcodeLink": "https://leetcode.com/problems/roman-to-integer/",
    "tags": [
      "Strings",
      "hash-map"
    ],
    "description": "Given a roman numeral string s, convert it to integer. Symbols: I=1, V=5, X=10, L=50, C=100, D=500, M=1000. Subtraction cases: IV=4, IX=9, XL=40, XC=90, CD=400, CM=900.",
    "examples": [
      {
        "input": "s=\"III\"",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "s=\"LVIII\"",
        "output": "58",
        "explanation": ""
      },
      {
        "input": "s=\"MCMXCIV\"",
        "output": "1994",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤s.length≤15",
      "s contains only Roman numeral characters"
    ],
    "hints": [
      "Iterate from left. If current < next, subtract current. Else add current."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - romanToInt\n */\nfunction romanToInt(s) {\n  // Your solution here\n}",
      "python": "def romanToInt(s):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int romanToInt(s) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int romanToInt(s) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function romanToInt(s) {\n  const m={I:1,V:5,X:10,L:50,C:100,D:500,M:1000};let res=0;for(let i=0;i<s.length;i++){if(m[s[i]]<m[s[i+1]])res-=m[s[i]];else res+=m[s[i]];}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "integer-to-roman",
    "title": "Integer to Roman",
    "difficulty": "Medium",
    "ds": "Strings",
    "pattern": "math",
    "acceptance": 65,
    "leetcodeLink": "https://leetcode.com/problems/integer-to-roman/",
    "tags": [
      "Strings",
      "math"
    ],
    "description": "Given an integer num (1-3999), convert it to a Roman numeral string.",
    "examples": [
      {
        "input": "num=3",
        "output": "\"III\"",
        "explanation": ""
      },
      {
        "input": "num=58",
        "output": "\"LVIII\"",
        "explanation": ""
      },
      {
        "input": "num=1994",
        "output": "\"MCMXCIV\"",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤num≤3999"
    ],
    "hints": [
      "Use a lookup table from largest to smallest value. Subtract and append symbol repeatedly."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {string} - intToRoman\n */\nfunction intToRoman(num) {\n  // Your solution here\n}",
      "python": "def intToRoman(num):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public String intToRoman(num) {\n        // Your solution here\n        return \"\";\n    }\n}",
      "cpp": "class Solution {\npublic:\n    string intToRoman(num) {\n        // Your solution here\n        return \"\";\n    }\n};"
    },
    "solution": "function intToRoman(num) {\n  const vals=[1000,900,500,400,100,90,50,40,10,9,5,4,1];const syms=[\"M\",\"CM\",\"D\",\"CD\",\"C\",\"XC\",\"L\",\"XL\",\"X\",\"IX\",\"V\",\"IV\",\"I\"];let res=\"\";for(let i=0;i<vals.length;i++)while(num>=vals[i]){res+=syms[i];num-=vals[i];}return res;\n}",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "sqrt-x",
    "title": "Sqrt(x)",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 37,
    "leetcodeLink": "https://leetcode.com/problems/sqrt-x/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "Given a non-negative integer x, return the square root of x rounded down to the nearest integer. Must not use built-in exponent functions.",
    "examples": [
      {
        "input": "x=4",
        "output": "2",
        "explanation": ""
      },
      {
        "input": "x=8",
        "output": "2",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤x≤2^31-1"
    ],
    "hints": [
      "Binary search in range [0,x]. Find largest r where r*r <= x."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - mySqrt\n */\nfunction mySqrt(x) {\n  // Your solution here\n}",
      "python": "def mySqrt(x):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int mySqrt(x) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int mySqrt(x) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function mySqrt(x) {\n  let l=0,r=x;while(l<r){const m=l+r+1>>1;m*m<=x?l=m:r=m-1;}return l;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "powx-n",
    "title": "Pow(x, n)",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "divide-and-conquer",
    "acceptance": 34,
    "leetcodeLink": "https://leetcode.com/problems/powx-n/",
    "tags": [
      "Arrays",
      "divide-and-conquer"
    ],
    "description": "Implement pow(x, n) which calculates x raised to the power n.",
    "examples": [
      {
        "input": "x=2.00000, n=10",
        "output": "1024.00000",
        "explanation": ""
      },
      {
        "input": "x=2.10000, n=3",
        "output": "9.26100",
        "explanation": ""
      },
      {
        "input": "x=2.00000, n=-2",
        "output": "0.25000",
        "explanation": ""
      }
    ],
    "constraints": [
      "-100.0<x<100.0",
      "-2^31≤n≤2^31-1"
    ],
    "hints": [
      "Fast exponentiation: x^n = (x^(n/2))^2 for even n, or x*(x^(n-1)) for odd.",
      "Handle negative n: pow(x,n) = 1/pow(x,-n)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - myPow\n */\nfunction myPow(x, n) {\n  // Your solution here\n}",
      "python": "def myPow(x, n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int myPow(x, n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int myPow(x, n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function myPow(x, n) {\n  if(n<0){x=1/x;n=-n;}let res=1;while(n>0){if(n%2===1)res*=x;x*=x;n>>=1;}return res;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "reverse-integer",
    "title": "Reverse Integer",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "math",
    "acceptance": 27,
    "leetcodeLink": "https://leetcode.com/problems/reverse-integer/",
    "tags": [
      "Arrays",
      "math"
    ],
    "description": "Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes overflow outside 32-bit integer range, return 0.",
    "examples": [
      {
        "input": "x=123",
        "output": "321",
        "explanation": ""
      },
      {
        "input": "x=-123",
        "output": "-321",
        "explanation": ""
      },
      {
        "input": "x=120",
        "output": "21",
        "explanation": ""
      }
    ],
    "constraints": [
      "-2^31≤x≤2^31-1"
    ],
    "hints": [
      "Extract digit with x%10, build result as result*10+digit. Check overflow before each multiply."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - reverse\n */\nfunction reverse(x) {\n  // Your solution here\n}",
      "python": "def reverse(x):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int reverse(x) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int reverse(x) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function reverse(x) {\n  let res=0,sign=x<0?-1:1;x=Math.abs(x);while(x>0){res=res*10+x%10;x=Math.floor(x/10);}res*=sign;return(res>2147483647||res<-2147483648)?0:res;\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "count-primes",
    "title": "Count Primes",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "math",
    "acceptance": 33,
    "leetcodeLink": "https://leetcode.com/problems/count-primes/",
    "tags": [
      "Arrays",
      "math"
    ],
    "description": "Given an integer n, return the number of prime numbers strictly less than n.",
    "examples": [
      {
        "input": "n=10",
        "output": "4",
        "explanation": "2,3,5,7"
      },
      {
        "input": "n=0",
        "output": "0",
        "explanation": ""
      },
      {
        "input": "n=1",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤n≤5*10^6"
    ],
    "hints": [
      "Sieve of Eratosthenes: mark multiples of each prime as composite starting from 2."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - countPrimes\n */\nfunction countPrimes(n) {\n  // Your solution here\n}",
      "python": "def countPrimes(n):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int countPrimes(n) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int countPrimes(n) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function countPrimes(n) {\n  if(n<2)return 0;const sieve=new Uint8Array(n);let cnt=0;for(let i=2;i<n;i++){if(!sieve[i]){cnt++;for(let j=i*i;j<n;j+=i)sieve[j]=1;}}return cnt;\n}",
    "timeComplexity": "O(n log log n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "insert-into-a-binary-search-tree",
    "title": "Insert into a Binary Search Tree",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 72,
    "leetcodeLink": "https://leetcode.com/problems/insert-into-a-binary-search-tree/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a BST and a value to insert, insert the value and return the root of the BST. Multiple valid results possible; return any.",
    "examples": [
      {
        "input": "root=[4,2,7,1,3], val=5",
        "output": "[4,2,7,1,3,5]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,10^4]",
      "0≤Node.val≤10^8",
      "All values unique"
    ],
    "hints": [
      "If val < root.val insert into left subtree. Else insert into right. At null, create new node."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} - insertIntoBST\n */\nfunction insertIntoBST(root, val) {\n  // Your solution here\n}",
      "python": "def insertIntoBST(root, val):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object insertIntoBST(root, val) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto insertIntoBST(root, val) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function insertIntoBST(root, val) {\n  if(!root)return{val:val,left:null,right:null};if(val<root.val)root.left=insertIntoBST(root.left,val);else root.right=insertIntoBST(root.right,val);return root;\n}",
    "timeComplexity": "O(h)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "delete-node-in-a-bst",
    "title": "Delete Node in a BST",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 50,
    "leetcodeLink": "https://leetcode.com/problems/delete-node-in-a-bst/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Given the root of a BST and a key, delete the node with that key and return the updated root.",
    "examples": [
      {
        "input": "root=[5,3,6,2,4,null,7], key=3",
        "output": "[5,4,6,2,null,null,7] or [5,2,6,null,4,null,7]",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [0,10^4]",
      "-10^5≤Node.val≤10^5"
    ],
    "hints": [
      "Find node. If leaf, return null. If one child, return other. If two children, replace with inorder successor (smallest in right subtree)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {TreeNode} - deleteNode\n */\nfunction deleteNode(root, key) {\n  // Your solution here\n}",
      "python": "def deleteNode(root, key):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object deleteNode(root, key) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto deleteNode(root, key) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function deleteNode(root, key) {\n  if(!root)return null;if(key<root.val)root.left=deleteNode(root.left,key);else if(key>root.val)root.right=deleteNode(root.right,key);else{if(!root.left)return root.right;if(!root.right)return root.left;let succ=root.right;while(succ.left)succ=succ.left;root.val=succ.val;root.right=deleteNode(root.right,succ.val);}return root;\n}",
    "timeComplexity": "O(h)",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "binary-search-tree-iterator",
    "title": "Binary Search Tree Iterator",
    "difficulty": "Medium",
    "ds": "Binary Tree",
    "pattern": "tree-dfs",
    "acceptance": 67,
    "leetcodeLink": "https://leetcode.com/problems/binary-search-tree-iterator/",
    "tags": [
      "Binary Tree",
      "tree-dfs"
    ],
    "description": "Implement BSTIterator class that represents an iterator over an in-order traversal. next() returns the next smallest number. hasNext() returns if more numbers exist. O(1) average time and O(h) space.",
    "examples": [
      {
        "input": "BSTIterator([7,3,15,null,null,9,20]); next()→3; next()→7; hasNext()→true; next()→9",
        "output": "see above",
        "explanation": ""
      }
    ],
    "constraints": [
      "Number of nodes in [1,10^5]",
      "0≤Node.val≤10^6",
      "At most 10^5 calls"
    ],
    "hints": [
      "Use a stack simulating morris traversal. Push all left children initially.",
      "next(): pop from stack, push right child's left spine."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {object} - BSTIterator\n */\nfunction BSTIterator(root) {\n  // Your solution here\n}",
      "python": "def BSTIterator(root):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object BSTIterator(root) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto BSTIterator(root) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "// Class-based solution — see LeetCode \n// Core logic:\n// this.stack=[];let n=root;while(n){this.stack.push(n);n=n.left;}",
    "timeComplexity": "O(1) avg",
    "spaceComplexity": "O(h)",
    "testCases": []
  },
  {
    "id": "number-of-1-bits-dup",
    "title": "Hamming Distance",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "bit-manipulation",
    "acceptance": 72,
    "leetcodeLink": "https://leetcode.com/problems/number-of-1-bits-dup/",
    "tags": [
      "Arrays",
      "bit-manipulation"
    ],
    "description": "Given two integers x and y, return the Hamming distance between them. Hamming distance = number of positions where corresponding bits differ.",
    "examples": [
      {
        "input": "x=1, y=4",
        "output": "2",
        "explanation": "1=001, 4=100, differ at 2 positions"
      },
      {
        "input": "x=3, y=1",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "0≤x,y≤2^31-1"
    ],
    "hints": [
      "XOR x and y. Count 1 bits in result (use n&(n-1) trick)."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - hammingDistance\n */\nfunction hammingDistance(x, y) {\n  // Your solution here\n}",
      "python": "def hammingDistance(x, y):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int hammingDistance(x, y) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int hammingDistance(x, y) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function hammingDistance(x, y) {\n  let n=x^y,cnt=0;while(n){n&=n-1;cnt++;}return cnt;\n}",
    "timeComplexity": "O(1)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "range-sum-query-immutable",
    "title": "Range Sum Query - Immutable",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "prefix-sum",
    "acceptance": 56,
    "leetcodeLink": "https://leetcode.com/problems/range-sum-query-immutable/",
    "tags": [
      "Arrays",
      "prefix-sum"
    ],
    "description": "Implement NumArray class with sumRange(left, right) that returns sum of nums[left] to nums[right] in O(1) per query.",
    "examples": [
      {
        "input": "NumArray([-2,0,3,-5,2,-1]); sumRange(0,2)=1; sumRange(2,5)=-1; sumRange(0,5)=-3",
        "output": "",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤2*10^4",
      "-10^5≤nums[i]≤10^5"
    ],
    "hints": [
      "Prefix sum array. sumRange(l,r) = prefix[r+1] - prefix[l]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {object} - NumArray\n */\nfunction NumArray(nums) {\n  // Your solution here\n}",
      "python": "def NumArray(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object NumArray(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto NumArray(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "// Class-based solution — see LeetCode \n// Core logic:\n// this.prefix=[0];for(const n of nums)this.prefix.push(this.prefix[this.prefix.length-1]+n);",
    "timeComplexity": "O(1) query",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "running-sum-of-1d-array",
    "title": "Running Sum of 1d Array",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "prefix-sum",
    "acceptance": 88,
    "leetcodeLink": "https://leetcode.com/problems/running-sum-of-1d-array/",
    "tags": [
      "Arrays",
      "prefix-sum"
    ],
    "description": "Given array nums, return running sum: runningSum[i] = sum(nums[0]..nums[i]).",
    "examples": [
      {
        "input": "nums=[1,2,3,4]",
        "output": "[1,3,6,10]",
        "explanation": ""
      },
      {
        "input": "nums=[1,1,1,1,1]",
        "output": "[1,2,3,4,5]",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤1000",
      "-10^6≤nums[i]≤10^6"
    ],
    "hints": [
      "Iterate and accumulate: nums[i] += nums[i-1]."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number[]} - runningSum\n */\nfunction runningSum(nums) {\n  // Your solution here\n}",
      "python": "def runningSum(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int[] runningSum(nums) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    vector<int> runningSum(nums) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function runningSum(nums) {\n  for(let i=1;i<nums.length;i++)nums[i]+=nums[i-1];return nums;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "make-array-strictly-increasing",
    "title": "Two Sum with Multiple Pairs",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "hash-map",
    "acceptance": 49,
    "leetcodeLink": "https://leetcode.com/problems/make-array-strictly-increasing/",
    "tags": [
      "Arrays",
      "hash-map"
    ],
    "description": "Given an array of integers nums sorted in ascending order, find pairs i<j where nums[i]+nums[j]==target. Return count of such pairs.",
    "examples": [
      {
        "input": "nums=[1,1,2,3,4], target=5",
        "output": "2",
        "explanation": "(1,4) and (2,3)"
      },
      {
        "input": "nums=[1,2,3], target=7",
        "output": "0",
        "explanation": ""
      }
    ],
    "constraints": [
      "2≤nums.length≤10^4",
      "nums is sorted"
    ],
    "hints": [
      "Two pointers from both ends. Count pairs, skip duplicates."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - countPairs\n */\nfunction countPairs(nums, target) {\n  // Your solution here\n}",
      "python": "def countPairs(nums, target):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int countPairs(nums, target) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int countPairs(nums, target) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function countPairs(nums, target) {\n  let l=0,r=nums.length-1,cnt=0;while(l<r){const s=nums[l]+nums[r];if(s===target){const cl=nums[l],cr=nums[r];let lc=0,rc=0;while(l<=r&&nums[l]===cl){l++;lc++;}while(l<=r&&nums[r]===cr){r--;rc++;}cnt+=cl===cr?lc*(lc-1)/2:lc*rc;}else if(s<target)l++;else r--;}return cnt;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "number-of-zero-filled-subarrays",
    "title": "Number of Zero-Filled Subarrays",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "math",
    "acceptance": 70,
    "leetcodeLink": "https://leetcode.com/problems/number-of-zero-filled-subarrays/",
    "tags": [
      "Arrays",
      "math"
    ],
    "description": "Given an integer array nums, return the number of subarrays filled with 0.",
    "examples": [
      {
        "input": "nums=[1,3,0,0,2,0,0,4]",
        "output": "6",
        "explanation": ""
      },
      {
        "input": "nums=[0,0,0,2,0,0]",
        "output": "9",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^5",
      "-10^9≤nums[i]≤10^9"
    ],
    "hints": [
      "Count consecutive zeros. A run of k zeros contributes k*(k+1)/2 subarrays."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - zeroFilledSubarray\n */\nfunction zeroFilledSubarray(nums) {\n  // Your solution here\n}",
      "python": "def zeroFilledSubarray(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int zeroFilledSubarray(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int zeroFilledSubarray(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function zeroFilledSubarray(nums) {\n  let res=0,cnt=0;for(const n of nums){cnt=n===0?cnt+1:0;res+=cnt;}return res;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "check-if-two-string-arrays-are-equivalent",
    "title": "Check If Two String Arrays are Equivalent",
    "difficulty": "Easy",
    "ds": "Strings",
    "pattern": "hash-map",
    "acceptance": 84,
    "leetcodeLink": "https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/",
    "tags": [
      "Strings",
      "hash-map"
    ],
    "description": "Given two string arrays word1 and word2, return true if the two arrays represent the same string when concatenated.",
    "examples": [
      {
        "input": "word1=[\"ab\",\"c\"], word2=[\"a\",\"bc\"]",
        "output": "true",
        "explanation": ""
      },
      {
        "input": "word1=[\"abc\",\"d\",\"defg\"], word2=[\"abcddefg\"]",
        "output": "true",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤word1.length,word2.length≤10^3",
      "1≤word1[i].length,word2[j].length≤10^3"
    ],
    "hints": [
      "Concatenate both arrays and compare."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {boolean} - arrayStringsAreEqual\n */\nfunction arrayStringsAreEqual(word1, word2) {\n  // Your solution here\n}",
      "python": "def arrayStringsAreEqual(word1, word2):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public boolean arrayStringsAreEqual(word1, word2) {\n        // Your solution here\n        return false;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    bool arrayStringsAreEqual(word1, word2) {\n        // Your solution here\n        return false;\n    }\n};"
    },
    "solution": "function arrayStringsAreEqual(word1, word2) {\n  return word1.join(\"\")===word2.join(\"\");\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(n)",
    "testCases": []
  },
  {
    "id": "find-pivot-index",
    "title": "Find Pivot Index",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "prefix-sum",
    "acceptance": 53,
    "leetcodeLink": "https://leetcode.com/problems/find-pivot-index/",
    "tags": [
      "Arrays",
      "prefix-sum"
    ],
    "description": "Given an array nums, return the pivot index where the sum of elements to the left equals sum to the right. Return -1 if none.",
    "examples": [
      {
        "input": "nums=[1,7,3,6,5,6]",
        "output": "3",
        "explanation": ""
      },
      {
        "input": "nums=[1,2,3]",
        "output": "-1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤nums.length≤10^4",
      "-1000≤nums[i]≤1000"
    ],
    "hints": [
      "total = sum(nums). Iterate: if leftSum == total-leftSum-nums[i], return i. Update leftSum."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - pivotIndex\n */\nfunction pivotIndex(nums) {\n  // Your solution here\n}",
      "python": "def pivotIndex(nums):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int pivotIndex(nums) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int pivotIndex(nums) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function pivotIndex(nums) {\n  const total=nums.reduce((a,b)=>a+b,0);let left=0;for(let i=0;i<nums.length;i++){if(left===total-left-nums[i])return i;left+=nums[i];}return-1;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "best-time-to-buy-and-sell-stock-ii",
    "title": "Best Time to Buy and Sell Stock II",
    "difficulty": "Medium",
    "ds": "Arrays",
    "pattern": "greedy",
    "acceptance": 63,
    "leetcodeLink": "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/",
    "tags": [
      "Arrays",
      "greedy"
    ],
    "description": "Given an array prices, you can hold at most one share. You can buy and sell multiple times. Maximize profit.",
    "examples": [
      {
        "input": "prices=[7,1,5,3,6,4]",
        "output": "7",
        "explanation": ""
      },
      {
        "input": "prices=[1,2,3,4,5]",
        "output": "4",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤prices.length≤3*10^4",
      "0≤prices[i]≤10^4"
    ],
    "hints": [
      "Greedy: whenever price goes up, capture all upward movements by adding all positive differences."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {number} - maxProfit\n */\nfunction maxProfit(prices) {\n  // Your solution here\n}",
      "python": "def maxProfit(prices):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public int maxProfit(prices) {\n        // Your solution here\n        return 0;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    int maxProfit(prices) {\n        // Your solution here\n        return 0;\n    }\n};"
    },
    "solution": "function maxProfit(prices) {\n  let profit=0;for(let i=1;i<prices.length;i++)if(prices[i]>prices[i-1])profit+=prices[i]-prices[i-1];return profit;\n}",
    "timeComplexity": "O(n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  },
  {
    "id": "first-bad-version",
    "title": "First Bad Version",
    "difficulty": "Easy",
    "ds": "Arrays",
    "pattern": "binary-search",
    "acceptance": 42,
    "leetcodeLink": "https://leetcode.com/problems/first-bad-version/",
    "tags": [
      "Arrays",
      "binary-search"
    ],
    "description": "You have n versions [1..n] and nth version might be bad. isBadVersion(version) API returns if a version is bad. Minimize API calls to find first bad version.",
    "examples": [
      {
        "input": "n=5, bad=4",
        "output": "4",
        "explanation": ""
      },
      {
        "input": "n=1, bad=1",
        "output": "1",
        "explanation": ""
      }
    ],
    "constraints": [
      "1≤bad≤n≤2^31-1"
    ],
    "hints": [
      "Binary search: if mid is bad, answer might be mid or earlier. Else answer is after mid."
    ],
    "starterCode": {
      "javascript": "/**\n * @param {function} - solution\n */\nfunction solution(isBadVersion) {\n  // Your solution here\n}",
      "python": "def solution(isBadVersion):\n    # Your solution here\n    pass",
      "java": "class Solution {\n    public Object solution(isBadVersion) {\n        // Your solution here\n        return null;\n    }\n}",
      "cpp": "class Solution {\npublic:\n    auto solution(isBadVersion) {\n        // Your solution here\n        return {};\n    }\n};"
    },
    "solution": "function solution(isBadVersion) {\n  return function(n){let l=1,r=n;while(l<r){const m=l+r>>1;isBadVersion(m)?r=m:l=m+1;}return l;};\n}",
    "timeComplexity": "O(log n)",
    "spaceComplexity": "O(1)",
    "testCases": []
  }
];

export const allProblems = [...problems, ...problemsExtra];
export default allProblems;
