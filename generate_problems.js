import fs from 'fs';
import { PROB_DATA_1 } from './src/data/prob_data1.js';
import { PROB_DATA_2 } from './src/data/prob_data2.js';
import { PROB_DATA_3 } from './src/data/prob_data3.js';

// All raw problems combined
const RAW = [...PROB_DATA_1, ...PROB_DATA_2, ...PROB_DATA_3];

// Remove any placeholder/duplicate entries (e.g. empty solutions)
const seen = new Set();
const unique = RAW.filter(p => {
  if (seen.has(p.id)) return false;
  seen.add(p.id);
  return p.id && p.t && p.D && p.D.length > 20;
});

// Generate full problem object from compact raw data
function expand(p) {
  const leetcodeLink = `https://leetcode.com/problems/${p.id}/`;

  // Generate language-specific starter code
  const jsFunc = p.fn || 'solve';
  const jsParams = p.ps || 'input';
  const returnType = p.rT || 'any';

  // Map return type to Java/C++ equivalents
  const javaType = returnType === 'boolean' ? 'boolean'
    : returnType === 'number' ? 'int'
    : returnType === 'string' ? 'String'
    : returnType === 'number[]' ? 'int[]'
    : returnType === 'number[][]' ? 'int[][]'
    : returnType === 'string[]' ? 'String[]'
    : returnType === 'string[][]' ? 'List<List<String>>'
    : returnType === 'void' ? 'void'
    : 'Object';

  const javaDefault = javaType === 'boolean' ? 'false'
    : javaType === 'int' ? '0'
    : javaType === 'String' ? '""'
    : javaType === 'void' ? ''
    : 'null';

  const cppType = returnType === 'boolean' ? 'bool'
    : returnType === 'number' ? 'int'
    : returnType === 'string' ? 'string'
    : returnType === 'number[]' ? 'vector<int>'
    : returnType === 'number[][]' ? 'vector<vector<int>>'
    : returnType === 'string[]' ? 'vector<string>'
    : returnType === 'void' ? 'void'
    : 'auto';

  const cppDefault = cppType === 'bool' ? 'false'
    : cppType === 'int' ? '0'
    : cppType === 'string' ? '""'
    : cppType === 'void' ? ''
    : '{}';

  // Python params (convert Java-style types in params)
  const pyParams = jsParams
    .replace(/: \w+/g, '')
    .replace(/List\[\w+\]/g, 'List')
    .trim();

  const starterCode = {
    javascript: `/**\n * @param {${returnType}} - ${jsFunc}\n */\nfunction ${jsFunc}(${jsParams}) {\n  // Your solution here\n}`,
    python: `def ${jsFunc}(${pyParams}):\n    # Your solution here\n    pass`,
    java: `class Solution {\n    public ${javaType} ${jsFunc}(${jsParams}) {\n        // Your solution here${javaDefault ? `\n        return ${javaDefault};` : ''}\n    }\n}`,
    cpp: `class Solution {\npublic:\n    ${cppType} ${jsFunc}(${jsParams}) {\n        // Your solution here${cppDefault ? `\n        return ${cppDefault};` : ''}\n    }\n};`
  };

  // Build examples array
  const examples = Array.isArray(p.e)
    ? p.e.map(ex => ({
        input: ex.i || '',
        output: ex.o || '',
        explanation: ex.x || ''
      }))
    : [];

  // Build solution function
  let solution = '// See LeetCode editorial for solutions';
  if (p.S && p.S.trim().length > 0) {
    if (p.fn && p.fn !== 'MinStack' && p.fn !== 'LRUCache'
        && p.fn !== 'MedianFinder' && p.fn !== 'TimeMap'
        && p.fn !== 'BSTIterator' && p.fn !== 'NumArray'
        && p.fn !== 'WordDictionary' && p.fn !== 'Trie') {
      solution = `function ${p.fn}(${p.ps}) {\n  ${p.S}\n}`;
    } else {
      solution = `// Class-based solution — see LeetCode \n// Core logic:\n// ${p.S}`;
    }
  }

  return {
    id: p.id,
    title: p.t,
    difficulty: p.d,
    ds: p.ds,
    pattern: p.p,
    acceptance: p.a || 50,
    leetcodeLink,
    tags: [p.ds, p.p].filter(Boolean),
    description: p.D,
    examples,
    constraints: p.c || [],
    hints: p.h || [],
    starterCode,
    solution,
    timeComplexity: p.tc || 'O(n)',
    spaceComplexity: p.sc || 'O(n)',
    testCases: []
  };
}

const problems = unique.map(expand);

// Write to problems.js
const output = `// Auto-generated from generate_problems.js — DO NOT EDIT MANUALLY
// Total problems: ${problems.length}

export const problems = ${JSON.stringify(problems, null, 2)};

export default problems;
`;

fs.writeFileSync('./src/data/problems.js', output);
console.log(`✅ Successfully generated ${problems.length} real problems.`);
console.log(`📊 Breakdown by difficulty:`);
const easy = problems.filter(p => p.difficulty === 'Easy').length;
const medium = problems.filter(p => p.difficulty === 'Medium').length;
const hard = problems.filter(p => p.difficulty === 'Hard').length;
console.log(`   Easy: ${easy} | Medium: ${medium} | Hard: ${hard}`);
console.log(`📚 Breakdown by data structure:`);
const dsMap = {};
for (const p of problems) dsMap[p.ds] = (dsMap[p.ds] || 0) + 1;
for (const [ds, cnt] of Object.entries(dsMap)) console.log(`   ${ds}: ${cnt}`);
