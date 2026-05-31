import { Newspaper, BookOpen, GraduationCap, Globe, Compass } from 'lucide-react';

export default function PortalStructure() {
  return (
    <div className="my-8" id="portal-structure">
      <div className="bg-white rounded-2xl border-2 border-[#004080]/15 overflow-hidden shadow-md print-border print-shadow-none">
        {/* Header Title */}
        <div className="bg-[#004080] text-white px-6 py-4 flex items-center gap-3">
          <BookOpen className="w-5 h-5 text-orange-400" />
          <h3 className="font-semibold text-lg font-display">Structure of an Educational & Cultural Portal</h3>
        </div>

        <div className="p-6">
          <p className="text-sm text-slate-500 mb-6 italic leading-relaxed">
            Educational and cultural portals act as seamless gateways or &ldquo;anchor websites&rdquo; across the Web. They distribute and interconnect rich, highly interactive media assets (virtual reality, augmented reality, simulations, and virtual encyclopedias) using three key modular pillars:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Modular Block 1: News and Updates */}
            <div className="bg-[#E6F0FA]/40 border border-[#004080]/15 rounded-xl p-5 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between print-border">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#004080] text-white shadow-sm">
                    <Newspaper className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#004080] font-display">1. News & Agenda</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Sections for knowledge broadcast, science event calendars, public workshops, institutional announcements, and university community milestones.
                </p>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Academic calls for conference papers</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
                    <span>Accreditation milestones and reports</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Social Connectivity Pillar
              </div>
            </div>

            {/* Modular Block 2: Educational Resources */}
            <div className="bg-orange-50/40 border border-[#FF6600]/20 rounded-xl p-5 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between print-border">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-[#FF6600] text-white shadow-sm">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-orange-950 font-display">2. Didactic Resources</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Repositories of interactive web simulations, educational galleries, collaborative digital encyclopedias, 3D simulators, and virtual laboratory spaces.
                </p>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>Virtual Reality (VR) modules</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span>Augmented Reality (AR) models</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-orange-100 text-xs font-semibold text-slate-500">
                Learner Interaction Pillar
              </div>
            </div>

            {/* Modular Block 3: Scientific Research */}
            <div className="bg-emerald-50/30 border border-emerald-500/20 rounded-xl p-5 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between print-border">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-emerald-600 text-white shadow-sm">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-emerald-950 font-display">3. Science & Research</h4>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  A digital library comprising peer-reviewed books, certified scientific journals, institutional doctoral dissertation repositories, and international study networks.
                </p>
                <div className="space-y-2">
                  <div className="bg-white p-2 rounded border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>Advanced search interfaces</span>
                  </div>
                  <div className="bg-white p-2 rounded border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0" />
                    <span>Indexed UNEMI research papers</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-100 text-xs font-semibold text-slate-500">
                Epistemic Rigor Pillar
              </div>
            </div>
          </div>

          <div className="mt-6 bg-slate-50 border border-slate-100 p-4 rounded-xl flex gap-3 items-start">
            <Compass className="w-5 h-5 text-[#004080] shrink-0 mt-0.5" />
            <div>
              <p className="text-xs font-bold text-[#004080] uppercase tracking-wide">💡 Examples of World-Class Portals</p>
              <div className="mt-1 flex flex-wrap gap-2 text-xs font-medium text-slate-700">
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-full">🌏 Google Earth Education</span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-full">🦁 National Geographic Education</span>
                <span className="bg-white border border-slate-200 px-3 py-1 rounded-full">✨ The Wonderment Collective</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
