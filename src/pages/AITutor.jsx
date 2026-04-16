import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAI } from '../hooks/useAI';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const suggestedPrompts = [
  '💡 Explain recursion with a simple example',
  '⏱️ What is the time complexity of quicksort?',
  '🐛 Help me debug my code',
  '🪟 Explain the sliding window pattern',
  '🌳 How does a binary search tree work?',
  '🧩 What is dynamic programming?',
];

const MODELS = [
  {
    id: 'openai',
    label: 'ChatGPT',
    sublabel: 'GPT-4o',
    emoji: '✨',
    gradient: 'from-emerald-500 to-teal-400',
    border: 'border-emerald-500/40',
    bg: 'bg-emerald-500/10',
    keyEnv: 'VITE_OPENAI_API_KEY',
  },
  {
    id: 'claude',
    label: 'Claude',
    sublabel: 'Sonnet 4',
    emoji: '🤖',
    gradient: 'from-violet-500 to-indigo-400',
    border: 'border-violet-500/40',
    bg: 'bg-violet-500/10',
    keyEnv: 'VITE_ANTHROPIC_API_KEY',
  },
];

export default function AITutor() {
  const [input, setInput] = useState('');
  const [beginnerMode, setBeginnerMode] = useState(false);
  const [selectedModel, setSelectedModel] = useState('openai');
  const { messages, isLoading, error, sendMessage, clearMessages } = useAI();
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (text = input) => {
    if (!text.trim()) return;
    sendMessage(text, '', beginnerMode, selectedModel);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const activeModel = MODELS.find(m => m.id === selectedModel);

  return (
    <div className="min-h-screen pt-16 flex flex-col" style={{ height: '100vh' }}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/5 bg-navy-900/80 backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          {/* Model Selector */}
          <div className="flex items-center bg-white/5 rounded-xl p-1 border border-white/10 space-x-1">
            {MODELS.map(model => (
              <button
                key={model.id}
                onClick={() => setSelectedModel(model.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
                  selectedModel === model.id
                    ? `bg-gradient-to-r ${model.gradient} text-white shadow-lg`
                    : 'text-gray-400 hover:text-gray-200 hover:bg-white/5'
                }`}
              >
                <span>{model.emoji}</span>
                <span>{model.label}</span>
                <span className={`text-[9px] px-1.5 py-0.5 rounded-md ${
                  selectedModel === model.id ? 'bg-white/20 text-white' : 'bg-white/5 text-gray-500'
                }`}>
                  {model.sublabel}
                </span>
              </button>
            ))}
          </div>

          <div>
            <h1 className="text-lg font-semibold">AI Tutor</h1>
            <p className="text-xs text-gray-500">
              {selectedModel === 'openai' ? 'Powered by OpenAI GPT-4o' : 'Powered by Anthropic Claude'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <label className="flex items-center space-x-2 cursor-pointer">
            <span className="text-xs text-gray-400">🌱 Beginner Mode</span>
            <div
              className={`w-10 h-5 rounded-full transition-colors ${beginnerMode ? 'bg-emerald-500' : 'bg-white/10'}`}
              onClick={() => setBeginnerMode(!beginnerMode)}
            >
              <div className={`w-4 h-4 rounded-full bg-white shadow-md transform transition-transform mt-0.5 ${beginnerMode ? 'translate-x-5.5 ml-1' : 'translate-x-0.5'}`} />
            </div>
          </label>
          <button
            onClick={clearMessages}
            className="text-xs text-gray-500 hover:text-red-400 transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
          >
            🗑 Clear
          </button>
        </div>
      </div>

      {/* Error banner */}
      <AnimatePresence>
        {error && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="px-4 py-2 bg-red-500/10 border-b border-red-500/20 text-xs text-red-400 text-center"
          >
            ⚠️ {error} — showing a simulated response instead.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full space-y-6 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              {/* Animated model icon */}
              <motion.div
                key={selectedModel}
                initial={{ scale: 0.5, opacity: 0, rotate: -10 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${activeModel.gradient} flex items-center justify-center text-4xl mx-auto mb-4 shadow-2xl`}
              >
                {activeModel.emoji}
              </motion.div>
              <h2 className="text-2xl font-bold mb-2">
                Chat with {activeModel.label}
              </h2>
              <p className="text-gray-400 text-sm">
                Ask me anything about Data Structures &amp; Algorithms. I'll guide you step by step.
              </p>
              <p className="text-xs text-gray-600 mt-1">
                Using <span className={`font-semibold bg-gradient-to-r ${activeModel.gradient} bg-clip-text text-transparent`}>{activeModel.sublabel}</span>
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-lg">
              {suggestedPrompts.map((prompt, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleSend(prompt)}
                  className="glass-card-hover p-3 text-sm text-left text-gray-300"
                >
                  {prompt}
                </motion.button>
              ))}
            </div>
          </div>
        ) : (
          messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {/* AI avatar */}
              {msg.role === 'assistant' && (
                <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${activeModel.gradient} flex items-center justify-center text-sm mr-2 mt-1 flex-shrink-0`}>
                  {activeModel.emoji}
                </div>
              )}

              <div
                className={`max-w-[85%] md:max-w-[70%] rounded-2xl p-4 ${
                  msg.role === 'user'
                    ? 'bg-indigo-500/20 border border-indigo-500/30 rounded-tr-sm'
                    : 'glass-card rounded-tl-sm'
                }`}
              >
                {msg.role === 'assistant' ? (
                  <div className="prose prose-invert prose-sm max-w-none">
                    <ReactMarkdown
                      components={{
                        code({ node, inline, className, children, ...props }) {
                          const match = /language-(\w+)/.exec(className || '');
                          return !inline && match ? (
                            <SyntaxHighlighter
                              style={oneDark}
                              language={match[1]}
                              customStyle={{ borderRadius: '8px', fontSize: '12px', margin: '8px 0' }}
                              {...props}
                            >
                              {String(children).replace(/\n$/, '')}
                            </SyntaxHighlighter>
                          ) : (
                            <code className="bg-white/10 px-1.5 py-0.5 rounded text-indigo-300 text-xs" {...props}>
                              {children}
                            </code>
                          );
                        },
                        p: ({ children }) => <p className="text-gray-300 text-sm leading-relaxed mb-2">{children}</p>,
                        h2: ({ children }) => <h2 className="text-lg font-semibold text-white mt-3 mb-2">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-md font-semibold text-white mt-2 mb-1">{children}</h3>,
                        li: ({ children }) => <li className="text-gray-300 text-sm ml-4">{children}</li>,
                        table: ({ children }) => <table className="w-full text-sm border-collapse my-2">{children}</table>,
                        th: ({ children }) => <th className="border border-white/10 px-3 py-1.5 bg-white/5 text-left text-xs font-semibold">{children}</th>,
                        td: ({ children }) => <td className="border border-white/10 px-3 py-1.5 text-xs">{children}</td>,
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                ) : (
                  <p className="text-sm text-gray-200">{msg.content}</p>
                )}

                {/* Model badge on AI messages */}
                {msg.role === 'assistant' && (
                  <p className={`text-[10px] mt-2 font-medium bg-gradient-to-r ${activeModel.gradient} bg-clip-text text-transparent`}>
                    {activeModel.label} · {activeModel.sublabel}
                  </p>
                )}
              </div>
            </motion.div>
          ))
        )}

        {/* Typing indicator */}
        {isLoading && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start items-center space-x-2">
            <div className={`w-7 h-7 rounded-lg bg-gradient-to-br ${activeModel.gradient} flex items-center justify-center text-sm flex-shrink-0`}>
              {activeModel.emoji}
            </div>
            <div className="glass-card rounded-2xl rounded-tl-sm p-4">
              <div className="flex space-x-2 items-center">
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 rounded-full bg-indigo-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                <span className="text-xs text-gray-500 ml-1">{activeModel.label} is thinking…</span>
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/5 bg-navy-900/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex items-end space-x-3">
          <div className="flex-1 relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={`Ask ${activeModel.label} anything about DSA…`}
              rows={1}
              className="input-field pr-12 resize-none"
              style={{ minHeight: '48px', maxHeight: '120px' }}
            />
          </div>
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className={`bg-gradient-to-r ${activeModel.gradient} text-white px-4 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 transition-all hover:shadow-lg hover:scale-105 active:scale-95`}
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : '→'}
          </button>
        </div>
        <p className="text-[10px] text-gray-600 text-center mt-2">
          {beginnerMode
            ? '🌱 Beginner mode is ON — explanations are simplified'
            : `Press Enter to send · Shift+Enter for new line · Using ${activeModel.label} ${activeModel.sublabel}`}
        </p>
      </div>
    </div>
  );
}
