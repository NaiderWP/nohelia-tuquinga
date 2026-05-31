import { Calendar, Monitor, Users, Smartphone, GraduationCap } from 'lucide-react';

interface Era {
  id: string;
  letter: string;
  title: string;
  period: string;
  concept: string;
  description: string;
  features: string[];
  icon: any;
  color: string;
  borderColor: string;
  textColor: string;
}

export default function TimelineEvolution() {
  const eras: Era[] = [
    {
      id: 'e-learning',
      letter: 'E',
      title: 'E-Learning',
      period: 'Beginning of the digital era (1995+)',
      concept: 'Electronic Learning (Pure Virtual)',
      description: 'Instructors and students interact exclusively remotely through computer screens. Early web browsers and rudimentary LMS platforms dominated, breaking geographical and temporal barriers for the first time.',
      features: ['Content structured in PDF/HTML modules', 'Rudimentary asynchronous forums', 'Remote individual assignments'],
      icon: Monitor,
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100',
      borderColor: 'border-blue-500',
      textColor: 'text-blue-600',
    },
    {
      id: 'b-learning',
      letter: 'B',
      title: 'B-Learning',
      period: 'Hybrid classroom model (2002+)',
      concept: 'Blended Learning (Onsite + Digital)',
      description: 'Harmoniously balances traditional face-to-face classes with the operational scale of web platforms. It catalyzed the "flipped classroom" method, where students master theoretical concepts online before physically meeting for active debate.',
      features: ['Integrated active physical workshops', 'Graded offline discussion forums', 'Dramatically higher completion rates'],
      icon: Users,
      color: 'bg-orange-50 border-orange-200 hover:bg-orange-100',
      borderColor: 'border-orange-500',
      textColor: 'text-orange-600',
    },
    {
      id: 'm-learning',
      letter: 'M',
      title: 'M-Learning',
      period: 'Total portable mobility (2008+)',
      concept: 'Mobile Learning (Portability)',
      description: 'Supported by the mass global adoption of smartphones and tablets. It enables bite-sized lessons ("microlearning" lasting 5 to 10 minutes) that can be easily resolved during daily commutes.',
      features: ['Agile native mobile applications', 'Short, optimized interactive assets', 'Automated push notifications from tutors'],
      icon: Smartphone,
      color: 'bg-emerald-50 border-emerald-200 hover:bg-emerald-100',
      borderColor: 'border-emerald-500',
      textColor: 'text-emerald-600',
    },
    {
      id: 'u-learning',
      letter: 'U',
      title: 'U-Learning',
      period: 'Intelligent environments (2015+)',
      concept: 'Ubiquitous Learning (Omnipresence)',
      description: 'Learning occurs seamlessly at any time, in any location, on any digital medium. Tech becomes transparently integrated into daily routines via wearables, Internet of Things (IoT) sensors, and adaptive AI engines.',
      features: ['Continuous context-aware availability', 'Interactive geo-localized assets', 'Frictionless integration with daily life'],
      icon: GraduationCap,
      color: 'bg-[#FFF3E0] border-amber-200 hover:bg-amber-100',
      borderColor: 'border-[#FF6600]',
      textColor: 'text-[#FF6600]',
    },
  ];

  return (
    <div className="my-8 page-break-inside-avoid" id="timeline-evolution">
      <div className="bg-white rounded-2xl border-2 border-[#004080]/15 overflow-hidden shadow-md print-border print-shadow-none">
        {/* Header Block */}
        <div className="bg-[#004080] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Calendar className="w-5 h-5 text-orange-400" />
            <h3 className="font-semibold text-lg font-display">Operational Timeline: The Evolution of Delivery Modes</h3>
          </div>
        </div>

        <div className="p-6">
          <p className="text-sm text-slate-500 mb-8 italic leading-relaxed">
            Educational mediums and organizational systems have advanced at an energetic pace. From the rigid limits of early computer-only environments, learning has evolved into an omnipresent service embedded into our daily routines:
          </p>

          {/* Timeline Linear Layout */}
          <div className="relative">
            {/* Thread Connector Line (Hidden on mobile grid) */}
            <div className="hidden lg:block absolute top-[52px] left-[15%] right-[15%] h-1 bg-gradient-to-r from-blue-200 via-orange-200 to-amber-200 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {eras.map((era, index) => {
                const Icon = era.icon;
                return (
                  <div
                    key={era.id}
                    className={`border rounded-xl p-5 flex flex-col justify-between transition-all duration-300 ${era.color} print-border`}
                  >
                    <div>
                      {/* Numeric Indicator Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className={`w-10 h-10 rounded-full font-black text-lg flex items-center justify-center border-2 ${era.borderColor} ${era.textColor} bg-white shadow-xs`}>
                          {era.letter}
                        </div>
                        <span className="text-[10px] font-bold font-mono text-slate-400 bg-white/80 px-2.5 py-0.5 rounded-full border border-slate-100">
                          Phase 0{index + 1}
                        </span>
                      </div>

                      {/* Title Information */}
                      <h4 className="text-xl font-bold font-display text-[#004080]">{era.title}</h4>
                      <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide mb-2.5">{era.concept}</p>
                      
                      <p className="text-xs text-slate-400 font-medium flex items-center gap-1.5 mb-3">
                        <Calendar className="w-3.5 h-3.5 inline text-orange-500" /> {era.period}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {era.description}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-1.5 border-t border-slate-200/50 pt-3">
                      {era.features.map((feat, fidx) => (
                        <div key={fidx} className="flex items-start gap-1.5 text-xs text-slate-600">
                          <span className={`w-1 h-1 rounded-full mt-1.5 shrink-0 bg-[#FF6600]`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
