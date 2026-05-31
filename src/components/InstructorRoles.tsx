import { useState } from 'react';
import { Search, Monitor, MessageSquare, Briefcase, LayoutGrid, Users, Award, Compass } from 'lucide-react';

interface InstructorRole {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  impact: string;
  icon: any;
  color: string;
}

export default function InstructorRoles() {
  const [activeRole, setActiveRole] = useState<string>('designer');

  const roles: InstructorRole[] = [
    {
      id: 'researcher',
      title: 'Researcher',
      subtitle: 'Smart searching and content curation',
      description: 'Conducts continuous research for new information, cutting-edge educational resources, market trends, and empirical studies to enrich the quality, rigor, and currency of the subject matter.',
      impact: 'Guarantees that study materials are thoroughly up-to-date and backed by solid scientific evidence.',
      icon: Search,
      color: 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100',
    },
    {
      id: 'technologist',
      title: 'Technologist',
      subtitle: 'Mastery and deployment of the digital ecosystem',
      description: 'Selects, configures, and masters modern virtual learning software, LMS platforms, and asynchronous/synchronous systems for optimal educational interaction.',
      impact: 'Reduces technical barriers so that students can focus on mastering the course material, rather than struggling with software setup.',
      icon: Monitor,
      color: 'bg-cyan-50 border-cyan-200 text-cyan-700 hover:bg-cyan-100',
    },
    {
      id: 'facilitator',
      title: 'Content Facilitator',
      subtitle: 'Clarity in complex conceptual frameworks',
      description: 'Translates expert-level research into intelligible, logically structured materials using rich hypermedia elements, infographics, and real-world examples.',
      impact: 'Fosters a frictionless flow of knowledge transfer, successfully avoiding cognitive information overload.',
      icon: MessageSquare,
      color: 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100',
    },
    {
      id: 'manager',
      title: 'Manager',
      subtitle: 'Planning schedules and deliverables',
      description: 'Structures the academic timeline, establishes reasonable submission deadlines, and manages enrollment, compliance, and course administrative flows.',
      impact: 'Provides operational order and predictibility, decreasing stress and anxiety commonly experienced by virtual students.',
      icon: Briefcase,
      color: 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100',
    },
    {
      id: 'designer',
      title: 'Instructional Designer',
      subtitle: 'Architecture of enriching learning experiences',
      description: 'Formulates cohesive curriculum guidelines, assimilation paths, adaptive learning branches, and optimal interactive multimedia pedagogical scripts.',
      impact: 'Ensures that every resource serves a predefined educational goal set at a digestible learning pace.',
      icon: LayoutGrid,
      color: 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100',
    },
    {
      id: 'advisor',
      title: 'Academic Advisor',
      subtitle: 'Tailored individual guidance',
      description: 'Addresses specific individual student inquiries, delivers direct constructivist feedback, and offers mentoring to struggling or special-needs students.',
      impact: 'Fosters a warm, inclusive environment, drastically reducing student dropout rates common on cold online platforms.',
      icon: Compass,
      color: 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100',
    },
    {
      id: 'process',
      title: 'Group Process Facilitator',
      subtitle: 'Interaction and active discussion circles',
      description: 'Encourages collaborative dialogue, moderates critical debate forums, energizes collective digital workshops, and promotes group social construction.',
      impact: 'Transforms isolated individuals into a genuine collaborative Community of Practice.',
      icon: Users,
      color: 'bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100',
    },
    {
      id: 'assessor',
      title: 'Evaluator',
      subtitle: 'Performance measurement and constructive feedback',
      description: 'Designs fair, analytical qualitative and quantitative assessment tools that confirm whether student outcomes match pre-established goals.',
      impact: 'Provides formal certitude regarding student assimilation and outlines a clear path for academic improvement.',
      icon: Award,
      color: 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100',
    },
  ];

  return (
    <div className="my-8" id="instructor-roles">
      <div className="bg-white rounded-2xl border-2 border-[#004080]/15 overflow-hidden shadow-md print-border print-shadow-none">
        {/* Header Block */}
        <div className="bg-[#004080] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LayoutGrid className="w-5 h-5 text-orange-400" />
            <h3 className="font-semibold text-lg font-display">The 8 Roles of an Online Instructor</h3>
          </div>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20 font-mono no-print">
            Click to explore each role
          </span>
        </div>

        <div className="p-6">
          <p className="text-sm font-sans text-slate-500 mb-6 italic leading-relaxed">
            Instructing in virtual environments goes far beyond simply hosting live video calls. It requires the harmonious application of eight core roles that define instructional success:
          </p>

          {/* ON-SCREEN INTERACTIVE INTERFACE (HIDDEN ON PRINT) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 no-print">
            {/* The 8 Buttons Menu */}
            <div className="col-span-1 md:col-span-5 grid grid-cols-2 md:grid-cols-1 gap-2.5">
              {roles.map((role) => {
                const Icon = role.icon;
                const isActive = activeRole === role.id;
                return (
                  <button
                    key={role.id}
                    onClick={() => setActiveRole(role.id)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'border-[#FF6600] bg-[#FFF3E0] shadow-sm transform scale-[1.02]'
                        : 'border-slate-100 bg-slate-50 text-slate-700 hover:border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg bg-white border ${isActive ? 'border-orange-200 text-[#FF6600]' : 'border-slate-200 text-[#004080]'}`}>
                      <Icon className="w-4 h-4 shrink-0" />
                    </div>
                    <span className="font-bold text-sm truncate font-display">{role.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Role Display Frame */}
            <div className="col-span-1 md:col-span-7 flex flex-col justify-center bg-slate-50 rounded-2xl border border-slate-100 p-6 shadow-inner">
              {roles.map((role) => {
                if (role.id !== activeRole) return null;
                const Icon = role.icon;
                return (
                  <div key={role.id} className="animate-fade-in flex flex-col h-full justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 rounded-xl bg-orange-100 text-[#FF6600] border border-orange-200 shadow-sm">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-[#004080] font-display">{role.title}</h4>
                          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">{role.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-slate-700 text-base leading-relaxed mb-4">
                        {role.description}
                      </p>
                    </div>

                    <div className="border-t border-slate-200/60 pt-4 mt-2">
                      <div className="bg-white border border-slate-100 rounded-xl p-3.5 flex gap-3 shadow-xs">
                        <Award className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs font-bold text-[#004080] uppercase tracking-wider">Academic Impact</p>
                          <p className="text-sm text-slate-600 leading-relaxed mt-0.5">{role.impact}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* STATIC PDF PRINT GRID (ONLY SEEN IN PRINT LAYOUT) */}
          <div className="hidden print:grid print:grid-cols-2 print:gap-4">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <div key={role.id} className="border border-slate-200 rounded-lg p-4 page-break-inside-avoid">
                  <div className="flex items-center gap-2 mb-2">
                    <Icon className="w-5 h-5 text-[#FF6600]" />
                    <h4 className="font-bold text-sm text-[#004080] font-display">{role.title}</h4>
                  </div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1.5 font-semibold">{role.subtitle}</p>
                  <p className="text-xs text-[#333333] leading-relaxed mb-2">{role.description}</p>
                  <div className="bg-slate-50 p-2 rounded border border-slate-100">
                    <p className="text-[10px] font-bold text-[#004080] uppercase">Impact:</p>
                    <p className="text-[11px] text-slate-600 leading-normal">{role.impact}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
