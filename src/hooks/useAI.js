import { useState, useCallback } from 'react';

const SYSTEM_PROMPT = `You are an expert DSA tutor helping a student learn Data Structures and Algorithms from scratch. Always explain concepts step by step, use simple analogies, provide code examples in the user's chosen language, and gently guide them to the answer rather than giving it outright. When the user shares code, analyze it for bugs, time complexity, and suggest improvements. Keep responses concise but thorough. Format code blocks with proper syntax highlighting using markdown.`;

// ── Groq API (Llama 3) ──────────────────────────────────────────────────────────
async function callGroq(apiKey, systemPrompt, messageHistory, userMessage) {
  const messages = [
    { role: 'system', content: systemPrompt },
    ...messageHistory.map(m => ({ role: m.role, content: m.content })),
    { role: 'user', content: userMessage },
  ];

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'llama3-8b-8192',
      messages,
      max_tokens: 2048,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    throw new Error(err?.error?.message || `Groq API error: ${response.status}`);
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

// ── Hook ──────────────────────────────────────────────────────────────────────
export function useAI() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * @param {string} userMessage
   * @param {string} context       - optional topic context
   * @param {boolean} beginnerMode - simplify explanations
   * @param {'groq'} selectedModel
   */
  const sendMessage = useCallback(
    async (userMessage, context = '', beginnerMode = false, selectedModel = 'groq') => {
      const groqKey = import.meta.env.VITE_GROQ_API_KEY;

      const newUserMsg = { role: 'user', content: userMessage };
      setMessages(prev => [...prev, newUserMsg]);
      setIsLoading(true);
      setError(null);

      const systemPrompt = beginnerMode
        ? SYSTEM_PROMPT +
          '\n\nIMPORTANT: Explain everything as if the student is a complete beginner. Use very simple analogies, avoid jargon, and break down every concept into small steps.'
        : SYSTEM_PROMPT;

      const contextPrefix = context
        ? `[Context: The student is currently studying: ${context}]\n\n`
        : '';

      const fullUserMessage = contextPrefix + userMessage;

      // Determine if key is available
      const hasGroq = groqKey && groqKey !== 'your_groq_api_key_here';

      // If no keys at all, show simulated response
      if (!hasGroq) {
        const simulatedResponse = getSimulatedResponse(userMessage);
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'assistant', content: simulatedResponse }]);
          setIsLoading(false);
        }, 1500);
        return;
      }

      try {
        let assistantMessage;

        if (hasGroq) {
          assistantMessage = await callGroq(groqKey, systemPrompt, messages, fullUserMessage);
        }

        setMessages(prev => [...prev, { role: 'assistant', content: assistantMessage }]);
      } catch (err) {
        setError(err.message);
        const fallback = getSimulatedResponse(userMessage);
        setMessages(prev => [...prev, { role: 'assistant', content: fallback }]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages]
  );

  const clearMessages = () => setMessages([]);

  return { messages, isLoading, error, sendMessage, clearMessages };
}

// ── Simulated fallback responses ──────────────────────────────────────────────
function getSimulatedResponse(question) {
  const q = question.toLowerCase();

  if (q.includes('recursion')) {
    return `## Recursion Explained 🔄

Recursion is when a function calls **itself** to solve a smaller version of the same problem.

**Think of it like Russian nesting dolls** 🪆 — each doll contains a smaller version of itself, until you reach the tiniest one (the base case).

### Key Components:
1. **Base Case** — When to stop (prevents infinite loops!)
2. **Recursive Case** — Break problem into smaller subproblem

\`\`\`javascript
function factorial(n) {
  // Base case
  if (n <= 1) return 1;
  
  // Recursive case
  return n * factorial(n - 1);
}

// factorial(4) → 4 × factorial(3) → 4 × 3 × factorial(2) → 4 × 3 × 2 × 1 = 24
\`\`\`

### Common Mistakes:
- ❌ Forgetting the base case (stack overflow!)
- ❌ Base case that's never reached
- ❌ Not making the problem smaller each step

Would you like me to walk through more examples like Fibonacci or tree traversals?`;
  }

  if (q.includes('time complexity') || q.includes('big o')) {
    return `## Time Complexity & Big O Notation ⏱️

Big O describes how an algorithm's runtime **grows** as input size increases.

### Common Complexities (best → worst):

| Big O | Name | Example |
|-------|------|---------|
| O(1) | Constant | Array access by index |
| O(log n) | Logarithmic | Binary search |
| O(n) | Linear | Simple loop |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Nested loops |
| O(2ⁿ) | Exponential | Recursive fibonacci |

### Quick Tips:
- **Single loop** → O(n)
- **Nested loops** → O(n²)  
- **Halving each step** → O(log n)
- **Drop constants**: O(2n) → O(n)
- **Keep dominant term**: O(n² + n) → O(n²)

\`\`\`javascript
// O(n) - Linear
for (let i = 0; i < n; i++) { }

// O(n²) - Quadratic  
for (let i = 0; i < n; i++)
  for (let j = 0; j < n; j++) { }

// O(log n) - Logarithmic
while (n > 1) { n = Math.floor(n / 2); }
\`\`\``;
  }

  if (q.includes('sliding window')) {
    return `## Sliding Window Pattern 🪟

The sliding window technique maintains a **subset of elements** (window) and slides it across the data.

### When to use:
- Finding longest/shortest substring with condition
- Maximum sum subarray of size K
- Problems involving contiguous sequences

### Template:
\`\`\`javascript
function slidingWindow(arr, k) {
  let windowStart = 0;
  let windowSum = 0;
  let maxSum = -Infinity;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // expand window
    
    if (windowEnd >= k - 1) {
      maxSum = Math.max(maxSum, windowSum);
      windowSum -= arr[windowStart]; // shrink window
      windowStart++;
    }
  }
  return maxSum;
}
\`\`\`

**Key Idea**: Instead of recalculating for each window (O(n×k)), we slide the window by removing the leftmost element and adding the next right element (O(n)).`;
  }

  return `Great question! Let me help you understand this concept. 🎯

Here are some key points to consider:

1. **Break it down** — Start by identifying what data structure best fits this problem
2. **Think about patterns** — Many DSA problems follow common patterns like Two Pointers, Sliding Window, or BFS/DFS
3. **Consider edge cases** — Empty input, single element, duplicates

\`\`\`javascript
// Start with a brute force approach, then optimize
// Think: What is the time complexity?
// Can we trade space for time?
\`\`\`

### Next Steps:
- Try solving it with the simplest approach first
- Analyze the time and space complexity
- Look for opportunities to optimize

Would you like me to dive deeper into any specific aspect? Feel free to share your code and I'll help debug it! 💡

*Note: Add your Groq API key in the .env file for full AI-powered responses.*`;
}

export default useAI;
