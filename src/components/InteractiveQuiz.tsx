import { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';

export default function InteractiveQuiz() {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      question: 'Which learning theory asserts that knowledge resides in a network of distributed connections?',
      options: [
        'Traditional Behaviorism',
        'Analytical Cognitivism',
        'Experiential Constructivism',
        'Digital Connectivism'
      ],
      correctAnswer: 3,
      explanation: 'Connectivism, proposed by George Siemens, explains learning in the digital era as a network of nodes and links where technological skills facilitate continuous updating.'
    },
    {
      id: 2,
      question: 'Which of the following is a key online instructor role related to course design?',
      options: [
        'Field Researcher',
        'Instructional Designer',
        'Database Administrator',
        'Technical Support Advisor'
      ],
      correctAnswer: 1,
      explanation: 'The Instructional Designer structures complex curricula, academic guides, and learning paths tailored for balanced, interactive student assimilation.'
    },
    {
      id: 3,
      question: 'What is the correct definition of the term B-Learning?',
      options: [
        'Pure asynchronous virtualization',
        'Exclusive mobile learning on wearable tech',
        'Merging physical face-to-face classroom sessions with digital asynchronous online interaction',
        'Immersive learning integrated solely via Virtual Reality'
      ],
      correctAnswer: 2,
      explanation: 'B-Learning (Blended Learning) represents a hybrid or flipped classroom model that unites onsite classroom sessions with asynchronous digital support.'
    },
    {
      id: 4,
      question: 'Which characteristic primarily defines an Open Source learning platform?',
      options: [
        'It is fully proprietary and legally closed-source',
        'Its source code is free, modifiable, and reusable without direct intellectual patent fees',
        'It mandates ongoing monthly corporate subscription fees',
        'It forbids custom styling or visual customization'
      ],
      correctAnswer: 1,
      explanation: 'Open Source platforms (like Moodle) provide technical freedom to download, modify, and redistribute code to adapt it to local needs without closed patent licensing.'
    },
    {
      id: 5,
      question: 'Which educational portal pillar typically houses collaborative encyclopedias and virtual simulations?',
      options: [
        'Institutional News section',
        'Direct Educational Resources pillar',
        'Indexed Scientific Research section',
        'Administrative and payment services'
      ],
      correctAnswer: 1,
      explanation: 'The Educational Resources pillar supplies interactive multimedia content like simulations, augmented reality, or virtual encyclopedias for self-guided construction of knowledge.'
    }
  ];

  const handleOptionSelect = (optIdx: number) => {
    if (isSubmitted) return;
    setSelectedIdx(optIdx);
  };

  const handleSubmit = () => {
    if (selectedIdx === null || isSubmitted) return;
    setIsSubmitted(true);
    if (selectedIdx === questions[currentIdx].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedIdx(null);
    setIsSubmitted(false);
    if (currentIdx + 1 < questions.length) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setSelectedIdx(null);
    setIsSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="bg-white rounded-2xl border-2 border-[#004080]/15 overflow-hidden shadow-md print-border print-shadow-none page-break-inside-avoid" id="interactive-quiz">
      <div className="bg-[#004080] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-orange-400" />
          <h3 className="font-semibold text-lg font-display">Interactive Self-Assessment Quiz</h3>
        </div>
        <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20 font-mono no-print">
          Knowledge Check
        </span>
      </div>

      <div className="p-6">
        {!quizFinished ? (
          <div>
            {/* Progress indicator */}
            <div className="flex justify-between items-center mb-4 text-xs font-semibold text-slate-400 font-mono">
              <span>QUESTION {currentIdx + 1} OF {questions.length}</span>
              <span>GRADE: {score} Correct</span>
            </div>

            {/* Slider track bar */}
            <div className="w-full bg-slate-100 h-2 rounded-full mb-6 overflow-hidden">
              <div
                className="bg-[#FF6600] h-full transition-all duration-300"
                style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
              />
            </div>

            {/* Question Text */}
            <h4 className="text-lg font-bold text-[#004080] mb-5 leading-normal font-display">
              {questions[currentIdx].question}
            </h4>

            {/* Answer Options Grid */}
            <div className="space-y-3 mb-6">
              {questions[currentIdx].options.map((opt, oIdx) => {
                let optionStyle = 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50 text-slate-700';
                
                if (selectedIdx === oIdx && !isSubmitted) {
                  optionStyle = 'border-[#FF6600] bg-[#FFF3E0] text-orange-950 font-bold';
                } else if (isSubmitted) {
                  if (oIdx === questions[currentIdx].correctAnswer) {
                    optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold';
                  } else if (selectedIdx === oIdx) {
                    optionStyle = 'border-rose-500 bg-rose-50 text-rose-900';
                  } else {
                    optionStyle = 'border-slate-200 bg-white text-slate-400 opacity-60';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleOptionSelect(oIdx)}
                    disabled={isSubmitted}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-150 flex items-center justify-between cursor-pointer ${optionStyle}`}
                  >
                    <span>{opt}</span>
                    {isSubmitted && oIdx === questions[currentIdx].correctAnswer && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                    {isSubmitted && selectedIdx === oIdx && oIdx !== questions[currentIdx].correctAnswer && (
                      <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation box under submit state */}
            {isSubmitted && (
              <div className="bg-[#E6F0FA] border border-[#004080]/15 p-4 rounded-xl mb-6 flex gap-3 items-start animate-fade-in print-border">
                <AlertCircle className="w-5 h-5 text-[#004080] mt-0.5 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-[#004080] uppercase tracking-wide">Pedagogical Explanation</p>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">
                    {questions[currentIdx].explanation}
                  </p>
                </div>
              </div>
            )}

            {/* Controls */}
            <div className="flex justify-end gap-3 no-print">
              {!isSubmitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedIdx === null}
                  className={`px-6 py-2.5 rounded-full font-bold text-sm tracking-wide cursor-pointer transition-all duration-200 uppercase ${
                    selectedIdx === null
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                      : 'bg-[#FF6600] text-white hover:bg-orange-700 shadow-md hover:shadow-lg'
                  }`}
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full font-bold text-sm tracking-wide bg-[#004080] text-white hover:bg-blue-800 shadow-md hover:shadow-lg cursor-pointer transition-all duration-200 uppercase"
                >
                  {currentIdx + 1 === questions.length ? 'Finish Quiz' : 'Next Question'}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Finished State Display */
          <div className="text-center py-8">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
            <h4 className="text-2xl font-bold text-[#004080] font-display">Congratulations, you finished!</h4>
            <p className="text-slate-500 mt-2 mb-6">
              You correctly answered <strong className="text-emerald-600 font-bold">{score} out of {questions.length}</strong> questions covering Unit 1 & 2 coursework.
            </p>

            <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-5 border border-slate-150 mb-7">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-1">Final Performance</p>
              <p className="text-4xl font-black text-[#004080] font-display">
                {Math.round((score / questions.length) * 100)}%
              </p>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Review the study materials if you wish to try again and aim for a perfect score. Your ability to integrate these platforms is vital to virtual instructing success.
              </p>
            </div>

            <button
              onClick={handleReset}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-orange-500 text-white font-bold text-sm tracking-wider uppercase rounded-full hover:bg-orange-600 shadow-md transition-all duration-200 cursor-pointer no-print"
            >
              <RefreshCw className="w-4 h-4" /> Restart Self-Assessment
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
