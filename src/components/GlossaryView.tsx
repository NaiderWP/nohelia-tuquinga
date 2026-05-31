import { useState } from 'react';
import { GlossaryTerm } from '../types';
import { Search, Book } from 'lucide-react';

export default function GlossaryView() {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const terms: GlossaryTerm[] = [
    {
      term: 'Asynchronous',
      definition: 'A form of teaching and learning that occurs deferred in time, where the instructor and student do not coincide simultaneously or in real time (e.g., forums, email, pre-recorded videos).'
    },
    {
      term: 'B-Learning (Blended Learning)',
      definition: 'A structured and purposeful combination of face-to-face dynamics in physical classrooms alongside interactive, self-paced virtual asynchronous activities.'
    },
    {
      term: 'LMS (Learning Management System)',
      definition: 'Web-server software utilized to administer, distribute, track, grade, and report on virtual courses and academic learning paths.'
    },
    {
      term: 'U-Learning (Ubiquitous Learning)',
      definition: 'An educational paradigm where learning is seamlessly and invisibly integrated into the student\'s daily life through smart mobile devices, sensors, and everyday networks.'
    },
    {
      term: 'Connectivism',
      definition: 'A learning theory built for the digital age, stating that knowledge and expertise do not reside solely internally within a person, but rather spread across a tech-supported network of nodes and connections.'
    },
    {
      term: 'Synchronous',
      definition: 'Technology-mediated education that takes place live and in real time, requiring direct simultaneous online presence of both tutors and students (e.g., live chat, Zoom videoconferencing).'
    },
    {
      term: 'Open Source',
      definition: 'Software applications whose original source code is made public for free download, custom adaptation, collaborative improvement, and autonomous local hosting (e.g., Moodle).'
    },
    {
      term: 'Proprietary Platform',
      definition: 'Private commercial software protected by patents, with unalterable code. Its usage and distribution are preconditioned on formal licensing fees (e.g., Coursera, corporate Canvas Cloud).'
    }
  ];

  const filteredTerms = terms.filter(t =>
    t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="my-8 page-break-inside-avoid" id="glossary-view">
      <div className="bg-white rounded-2xl border-2 border-[#004080]/15 overflow-hidden shadow-md print-border print-shadow-none">
        {/* Header Block */}
        <div className="bg-[#004080] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Book className="w-5 h-5 text-orange-400" />
            <h3 className="font-semibold text-lg font-display">Glossary of Key Terms</h3>
          </div>
          {/* Search bar inside the header (hidden on print) */}
          <div className="relative no-print w-64">
            <input
              type="text"
              placeholder="Search term..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full text-xs bg-white text-slate-800 rounded-full pl-8 pr-4 py-2 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
          </div>
        </div>

        <div className="p-6">
          {/* Standard 2-Column Table for Crisp Printing and Layout compatibility */}
          <div className="overflow-x-auto">
            <table className="w-full font-sans text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#004080] w-1/3">Term</th>
                  <th className="py-3 px-4 text-xs font-bold uppercase tracking-wider text-[#004080] w-2/3">Conceptual Definition</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {/* When on screen and filteredTerms is empty */}
                {filteredTerms.length === 0 && (
                  <tr>
                    <td colSpan={2} className="py-8 text-center text-slate-400 text-sm italic">
                      No matches found for &ldquo;{searchQuery}&rdquo;.
                    </td>
                  </tr>
                )}
                {/* Mapping filtered terms on-screen, but always keeping full list for PDF printing */}
                {terms.map((t, idx) => {
                  const isMatch = filteredTerms.some(ft => ft.term === t.term);
                  return (
                    <tr
                      key={idx}
                      className={`transition-colors duration-150 ${
                        isMatch ? 'hover:bg-slate-50/50' : 'no-print hidden'
                      }`}
                    >
                      <td className="py-4 px-4 font-bold text-sm text-[#004080]">
                        {t.term}
                      </td>
                      <td className="py-4 px-4 text-sm text-slate-700 leading-relaxed">
                        {t.definition}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
