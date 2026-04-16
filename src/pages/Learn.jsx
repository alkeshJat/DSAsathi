import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProgress } from '../hooks/useProgress';
import curriculum from '../data/curriculum';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Learn() {
  const [selectedSection, setSelectedSection] = useState(curriculum[0]?.id);
  const [selectedTopic, setSelectedTopic] = useState(curriculum[0]?.topics[0]?.id);
  const [activeTab, setActiveTab] = useState('intro');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { progress, completeLesson } = useProgress();
  const [showConfetti, setShowConfetti] = useState(false);

  const currentSection = curriculum.find(s => s.id === selectedSection);
  const currentTopic = currentSection?.topics.find(t => t.id === selectedTopic);
  const isCompleted = progress.completedLessons.includes(selectedTopic);

  const handleComplete = () => {
    completeLesson(selectedTopic);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const tabs = [
    { id: 'intro', label: '📖 Introduction' },
    { id: 'code', label: '💻 Code Walkthrough' },
    { id: 'complexity', label: '📊 Complexity' },
  ];

  return (
    <div className="min-h-screen pt-16 flex">
      {/* Confetti effect */}
      {showConfetti && (
        <div className="fixed inset-0 z-50 pointer-events-none flex items-center justify-center">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-center">
            {['🎉','🎊','⭐','✨','🏆'].map((e, i) => (
              <motion.span key={i} className="absolute text-4xl" initial={{ opacity: 1, x: 0, y: 0 }}
                animate={{ opacity: 0, x: (Math.random() - 0.5) * 400, y: (Math.random() - 0.5) * 400 }}
                transition={{ duration: 1.5, delay: i * 0.1 }}>
                {e}
              </motion.span>
            ))}
            <motion.p initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
              className="text-2xl font-bold text-emerald-400 bg-navy-900/80 backdrop-blur-sm px-6 py-3 rounded-xl">
              ✅ Lesson Complete! +20 XP
            </motion.p>
          </motion.div>
        </div>
      )}

      {/* Sidebar */}
      <motion.aside
        initial={{ width: 320 }}
        animate={{ width: sidebarOpen ? 320 : 0 }}
        className="hidden lg:block border-r border-white/5 bg-navy-900/50 overflow-y-auto overflow-x-hidden flex-shrink-0"
        style={{ height: 'calc(100vh - 64px)', position: 'sticky', top: '64px' }}
      >
        <div className="p-4 min-w-[320px]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">📚 Curriculum</h2>
            <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-white text-xl">&times;</button>
          </div>
          {curriculum.map(section => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => setSelectedSection(section.id === selectedSection ? '' : section.id)}
                className={`w-full flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all ${
                  section.id === selectedSection ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'text-gray-400 hover:bg-white/5'
                }`}
              >
                <span>{section.icon} {section.title}</span>
                <span className="text-xs text-gray-600">
                  {section.topics.filter(t => progress.completedLessons.includes(t.id)).length}/{section.topics.length}
                </span>
              </button>
              <AnimatePresence>
                {section.id === selectedSection && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="overflow-hidden">
                    <div className="pl-4 py-1 space-y-1">
                      {section.topics.map(topic => (
                        <button
                          key={topic.id}
                          onClick={() => {
                            setSelectedTopic(topic.id);
                            setActiveTab('intro');
                          }}
                          className={`w-full flex items-center space-x-2 p-2.5 rounded-lg text-sm transition-all ${
                            topic.id === selectedTopic ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'
                          }`}
                        >
                          <span className="text-xs">{progress.completedLessons.includes(topic.id) ? '✅' : '○'}</span>
                          <span className="text-left flex-1">{topic.title}</span>
                          <span className="text-xs text-gray-600">{topic.duration}</span>
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-8 max-w-4xl">
        {!sidebarOpen && (
          <button onClick={() => setSidebarOpen(true)} className="mb-4 text-sm text-gray-500 hover:text-white">
            ☰ Show Sidebar
          </button>
        )}

        {/* Mobile section selector */}
        <div className="lg:hidden mb-6">
          <select
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
            className="input-field"
          >
            {curriculum.map(section => (
              <optgroup key={section.id} label={`${section.icon} ${section.title}`}>
                {section.topics.map(topic => (
                  <option key={topic.id} value={topic.id}>{topic.title}</option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        {currentTopic ? (
          <motion.div key={selectedTopic} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <p className="text-sm text-indigo-400 mb-1">{currentSection?.icon} {currentSection?.title}</p>
                <h1 className="text-2xl md:text-3xl font-bold">{currentTopic.title}</h1>
                <p className="text-gray-500 text-sm mt-1">⏱ {currentTopic.duration}</p>
              </div>
              {isCompleted ? (
                <span className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-sm border border-emerald-500/30">✅ Completed</span>
              ) : (
                <button onClick={handleComplete} className="btn-primary text-sm px-4 py-2">Mark Complete ✓</button>
              )}
            </div>

            {/* Tabs */}
            <div className="flex space-x-1 mb-6 bg-white/5 rounded-xl p-1">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-2.5 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/30' : 'text-gray-500 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                {activeTab === 'intro' && (
                  <div className="glass-card p-6 md:p-8">
                    <div className="prose prose-invert prose-sm max-w-none">
                      {currentTopic.content.intro.split('\n').map((line, i) => {
                        if (line.startsWith('**') && line.endsWith('**')) {
                          return <h3 key={i} className="text-lg font-semibold text-white mt-4 mb-2">{line.replace(/\*\*/g, '')}</h3>;
                        }
                        if (line.startsWith('- ')) {
                          return <li key={i} className="text-gray-300 ml-4">{line.substring(2)}</li>;
                        }
                        return line ? <p key={i} className="text-gray-300 mb-3 leading-relaxed">{line}</p> : <br key={i} />;
                      })}
                    </div>
                  </div>
                )}

                {activeTab === 'code' && (
                  <div className="glass-card overflow-hidden">
                    <div className="flex items-center justify-between p-4 border-b border-white/5">
                      <span className="text-sm font-medium">💻 Code Example</span>
                      <button
                        onClick={() => navigator.clipboard.writeText(currentTopic.content.code)}
                        className="text-xs text-gray-500 hover:text-indigo-400 transition-colors"
                      >
                        📋 Copy
                      </button>
                    </div>
                    <SyntaxHighlighter language="javascript" style={oneDark} customStyle={{ margin: 0, borderRadius: 0, background: 'transparent', fontSize: '13px' }}>
                      {currentTopic.content.code}
                    </SyntaxHighlighter>
                  </div>
                )}

                {activeTab === 'complexity' && (
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-semibold mb-4">📊 Time & Space Complexity</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {Object.entries(currentTopic.content.complexity).map(([key, value]) => (
                        <div key={key} className="bg-white/5 rounded-xl p-4 text-center">
                          <p className="text-xs text-gray-500 uppercase mb-1">{key}</p>
                          <p className="text-lg font-mono font-bold text-indigo-400">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center text-gray-500 mt-20">
            <p className="text-4xl mb-4">📚</p>
            <p>Select a topic from the sidebar to start learning</p>
          </div>
        )}
      </main>
    </div>
  );
}
