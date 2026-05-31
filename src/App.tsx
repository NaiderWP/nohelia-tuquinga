import { useState } from 'react';
import { 
  BookOpen, 
  ArrowUp, 
  HelpCircle, 
  FileText, 
  CheckCircle2, 
  Users, 
  Printer, 
  ChevronRight,
  ExternalLink,
  Facebook,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';

import InteractiveMindMap from './components/InteractiveMindMap';
import InstructorRoles from './components/InstructorRoles';
import PortalStructure from './components/PortalStructure';
import TimelineEvolution from './components/TimelineEvolution';
import InteractiveQuiz from './components/InteractiveQuiz';
import GlossaryView from './components/GlossaryView';

export default function App() {
  const [activeTOC, setActiveTOC] = useState<string>('');

  const socialNetworks = [
    {
      platform: 'Facebook',
      bestFor: 'Communities of practice and social forums',
      learningUse: 'Enables sharing of academic announcements in mass, energizes closed asynchronous debate groups, and connects students across cross-disciplinary teamwork projects.',
      icon: Facebook,
      color: 'text-blue-600 bg-blue-50 border-blue-100'
    },
    {
      platform: 'LinkedIn',
      bestFor: 'Academic brand, employability, and professional profiles',
      learningUse: 'Ideal for connecting university students with key industry employers, debating scientific findings of industrial relevance, and forging strong Alumni networks.',
      icon: Linkedin,
      color: 'text-blue-700 bg-blue-100 border-blue-200'
    },
    {
      platform: 'Twitter (X)',
      bestFor: 'High-speed academic microblogging',
      learningUse: 'Encourages agile discussions with course-specific hashtags, summarizes scientific concepts into compact threads, and tracks live worldwide academic conferences.',
      icon: Twitter,
      color: 'text-slate-900 bg-slate-50 border-slate-200'
    },
    {
      platform: 'Instagram',
      bestFor: 'Dynamic portfolios and purely visual storytelling',
      learningUse: 'Utilized to document laboratory experiments through short stories, showcase high-impact student infographics, and provide a vibrant aesthetic outlet for creative projects.',
      icon: Instagram,
      color: 'text-pink-600 bg-pink-50 border-pink-100'
    },
    {
      platform: 'Edmodo / Closed Networks',
      bestFor: 'Pedagogical collaboration within secure school circles',
      learningUse: 'Secure, moderated networks designed to replicate social communication dynamics, submit academic assignments, and share direct feedback securely with students.',
      icon: Users,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100'
    }
  ];

  const engagementTools = [
    {
      name: 'Kahoot!',
      type: 'Mass Gamification & Live Polls',
      function: 'Creates game-show style interactive synchronous quizzes that dramatically energize videoconferences or physical sessions, sparking healthy competition.',
      metrics: 'Provides real-time reports on group assimilation and generates fun, performance-based leaderboards.'
    },
    {
      name: 'Google Forms',
      type: 'Structured Asynchronous Evaluations',
      function: 'An ultra-versatile tool to construct quick quizzes, detailed diagnostic surveys, and self-grading rubrics with immediate automated teacher feedback.',
      metrics: 'Natively connects to spreadsheet tools to automatically map performance histograms and grades.'
    },
    {
      name: 'Prezi',
      type: 'Highly Stimulating Visual Presentation',
      function: 'Builds kinetic mind maps navigating smoothly from macro to micro through smart 3D zooming, defeating presentation apathy caused by static slide templates.',
      metrics: 'Particularly effective for structuring complex hypermedia taxonomies that demand holistic analysis.'
    }
  ];

  const platformComparison = [
    {
      criteria: 'Direct Cost Analysis',
      openSource: 'Free core software download with no persistent licensing royalties. Demands dedicated budgets for custom web hosting servers and expert IT administration.',
      commercial: 'Requires mandatory recurring annual licensing fees calculated against the university\'s active student enrollment. Hosting is typically included within the managed SaaS cloud.'
    },
    {
      criteria: 'Degree of Customization',
      openSource: 'Complete and unrestricted autonomy. Because access to the full source code is granted, network engineers can alter databases, write new modules, and integrate local options.',
      commercial: 'Strictly restricted to parameters, pre-designed templates, and APIs approved by the publisher. Core software structural files remain closed and unalterable.'
    },
    {
      criteria: 'Server Maintenance',
      openSource: 'Undergoes critical autonomous maintenance, patching, and redundant security backups handled directly by the university\'s local IT networks team.',
      commercial: 'SaaS structure. The provider manages updates, database integrity, and patches transparently with no downtime, guaranteeing 99.9% operational server uptime.'
    },
    {
      criteria: 'Support & Documentation',
      openSource: 'Sustained by an immense and active global community of millions of teachers, developers, and designers assisting on community Moodle/Chamilo forums.',
      commercial: 'Official corporate support packages guaranteed through Service Level Agreements (SLAs) with dedicated helpdesk ticketing systems.'
    },
    {
      criteria: 'Data Sovereignty',
      openSource: 'The university owns and hosts all activity logs, SQL databases, and user information, preserving complete privacy of student academic telemetry.',
      commercial: 'Hosted on offsite managed data centers governed by commercial policies, meaning student logs are held on proprietary cloud hardware.'
    }
  ];

  const interactiveActivities = [
    {
      topic: 'Unit 1 End',
      type: 'External Google Forms Work',
      targetUrl: 'https://forms.gle/XHFbdYtf8crUYDcn6',
      label: 'Unit 1 – Student Answer Link',
      isExternal: true
    },
    {
      topic: 'Unit 2 End',
      type: 'External Google Forms Work',
      targetUrl: 'https://forms.gle/XUkNHQG6PLJB8yUj6',
      label: 'Unit 2 – Student Answer Link',
      isExternal: true
    },
    {
      topic: 'Topic 1.2',
      type: 'Interactive Practical Panel',
      targetUrl: '#instructor-roles',
      label: 'The 8 Roles of an Online Instructor',
      isExternal: false
    },
    {
      topic: 'Unit 2 End',
      type: 'Self-Check Mastery Board',
      targetUrl: '#lessons-learned',
      label: 'Executive Wrap-up & Reflections',
      isExternal: false
    }
  ];

  function QRCodeElement({ endpoint, textLabel, primaryColor = "004080" }: { endpoint: string; textLabel: string; primaryColor?: string }) {
    const qrSource = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=${primaryColor}&data=${encodeURIComponent(endpoint)}`;
    return (
      <div className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-xl text-center shadow-xs page-break-inside-avoid print-mx-0">
        <img
          src={qrSource}
          alt={`QR Code for ${textLabel}`}
          className="w-28 h-28 border border-slate-200 p-1 bg-white rounded-lg shadow-inner"
          referrerPolicy="no-referrer"
        />
        <p className="text-xs font-bold mt-3 tracking-wide uppercase font-sans" style={{ color: `#${primaryColor}` }}>
          {textLabel}
        </p>
        <a
          href={endpoint}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] font-mono hover:underline mt-1 truncate max-w-[150px] inline-block no-print"
          style={{ color: primaryColor === "8e24aa" ? "#8e24aa" : "#FF6600" }}
        >
          {endpoint}
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-[#333333] font-sans antialiased selection:bg-orange-500 selection:text-white print:bg-white print:text-black">
      {/* Dynamic Back-to-Top FAB for desktop experience (hidden on print) */}
      <div className="fixed bottom-6 right-6 z-50 no-print animate-fade-in" id="custom-action-controls">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-[#004080] text-white hover:bg-blue-800 p-3.5 rounded-full shadow-lg flex items-center justify-center cursor-pointer transition-all duration-300 transform hover:scale-105"
          title="Scroll to Top"
          id="scroll-top-btn"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>

      {/* Main Single Document Scroll Container */}
      <main id="compendium-main-content" className="max-w-4xl mx-auto bg-white shadow-xl min-h-screen border-x border-slate-200/50 print-shadow-none print-border-none print-mx-0 print-px-0">
        
        {/* ==============================================
            SECTION 1: COVER PAGE
            ============================================== */}
        <section id="cover-page" className="py-12 px-8 md:px-16 min-h-[95vh] flex flex-col justify-between border-b-4 border-[#004080]/30 relative overflow-hidden bg-gradient-to-b from-[#E6F0FA]/20 to-white">
          {/* Cover Watermark Pattern */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#004080]/3 rounded-full blur-3xl -z-10" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#FF6600]/3 rounded-full blur-3xl -z-10" />

          {/* Title & Subtitle Area */}
          <div className="my-10 space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-[#004080] tracking-tight leading-tight font-display">
              E-Learning Systems:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#004080] to-[#FF6600]/90 mt-2">
                Types, Trends, and Educational Platforms
              </span>
            </h1>
            <div className="h-1 text-orange-500 w-24 bg-[#FF6600] rounded-full" />
            <p className="text-lg md:text-xl font-medium text-[#FF6600] leading-relaxed max-w-2xl font-sans">
              Comprehensive Guide for Self-Directed Learning in the Digital Age (Units 1 & 2)
            </p>
          </div>

          {/* Generated High Fidelity Cover Artwork */}
          <div className="my-8 flex justify-center ring-2 ring-[#004080]/10 p-2.5 rounded-3xl bg-slate-50/50 page-break-inside-avoid">
            <img
              src="/unemi_cover_elearning_trends_challenges.png"
              alt="E-Learning: Trends & Challenges Cover Slide"
              className="w-full h-auto object-contain rounded-2xl shadow-lg border border-slate-200"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Institutional Footer and Citation */}
          <div className="pt-6 border-t border-slate-150 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-sans">
            <div>
              <p className="text-slate-400 uppercase tracking-widest font-semibold">Student</p>
              <p className="text-base font-extrabold text-[#004080] font-display">Nohelia Dayanna Tuquinga Vinueza</p>
            </div>
          </div>
        </section>

        {/* ==============================================
            SECTION 2: TABLE OF CONTENTS (MANUAL ANCHORS)
            ============================================== */}
        <section id="table-of-contents" className="py-12 px-8 md:px-16 border-b border-slate-150 bg-slate-50/30">
          <div className="bg-white rounded-2xl border-2 border-[#004080]/15 p-6 shadow-md print-border">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
              <BookOpen className="w-6 h-6 text-[#004080]" />
              <h2 className="text-2xl font-extrabold text-[#004080] font-display tracking-tight">📑 Table of Contents</h2>
            </div>

            <div className="space-y-6 text-base text-slate-700">
              {/* Unit 1 TOC */}
              <div>
                <a
                  href="#unit-1"
                  onClick={() => setActiveTOC('unit-1')}
                  className="font-extrabold text-[#004080] hover:text-[#FF6600] flex items-center gap-2 hover:translate-x-1 transition-transform duration-200"
                >
                  <ChevronRight className="w-4 h-4 text-[#FF6600]" />
                  <span>Unit 1 – Essential Aspects and Components of E-Learning</span>
                </a>
                <ul className="pl-6 mt-2.5 space-y-2 border-l border-[#004080]/10 ml-2">
                  <li>
                    <a href="#topic-1-1" className="hover:text-[#FF6600] flex justify-between items-center group py-0.5 text-slate-600 hover:text-slate-900 transition-colors">
                      <span className="font-medium">1.1 Integration of ICTs and the Educational System</span>
                      <span className="text-slate-350 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                      <span className="text-xs bg-slate-100 text-[#004080] px-2.5 py-0.5 rounded-full font-bold">Unit 1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#topic-1-2" className="hover:text-[#FF6600] flex justify-between items-center group py-0.5 text-slate-600 hover:text-slate-900 transition-colors">
                      <span className="font-medium">1.2 Development and Creation of Pedagogical Content</span>
                      <span className="text-slate-355 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                      <span className="text-xs bg-slate-100 text-[#004080] px-2.5 py-0.5 rounded-full font-bold">Unit 1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#topic-1-3" className="hover:text-[#FF6600] flex justify-between items-center group py-0.5 text-slate-600 hover:text-slate-900 transition-colors">
                      <span className="font-medium">1.3 Educational Portals and Cultural Spaces</span>
                      <span className="text-slate-356 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                      <span className="text-xs bg-slate-100 text-[#004080] px-2.5 py-0.5 rounded-full font-bold">Unit 1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#topic-1-4" className="hover:text-[#FF6600] flex justify-between items-center group py-0.5 text-slate-600 hover:text-slate-900 transition-colors">
                      <span className="font-medium">1.4 Social Networks as Learning Spaces</span>
                      <span className="text-slate-357 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                      <span className="text-xs bg-slate-100 text-[#004080] px-2.5 py-0.5 rounded-full font-bold">Unit 1</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Unit 2 TOC */}
              <div>
                <a
                  href="#unit-2"
                  onClick={() => setActiveTOC('unit-2')}
                  className="font-extrabold text-[#004080] hover:text-[#FF6600] flex items-center gap-2 hover:translate-x-1 transition-transform duration-200"
                >
                  <ChevronRight className="w-4 h-4 text-[#FF6600]" />
                  <span>Unit 2 – Primary Systems and Platforms of E-Learning</span>
                </a>
                <ul className="pl-6 mt-2.5 space-y-2 border-l border-[#004080]/10 ml-2">
                  <li>
                    <a href="#topic-2-1" className="hover:text-[#FF6600] flex justify-between items-center group py-0.5 text-slate-600 hover:text-slate-900 transition-colors">
                      <span className="font-medium">2.1 Learning Platforms as a Training Environment</span>
                      <span className="text-slate-358 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                      <span className="text-xs bg-slate-100 text-[#004080] px-2.5 py-0.5 rounded-full font-bold">Unit 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#topic-2-2" className="hover:text-[#FF6600] flex justify-between items-center group py-0.5 text-slate-600 hover:text-slate-900 transition-colors">
                      <span className="font-medium">2.2 E-Learning Platforms and Their Service Portfolio</span>
                      <span className="text-slate-359 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                      <span className="text-xs bg-slate-100 text-[#004080] px-2.5 py-0.5 rounded-full font-bold">Unit 2</span>
                    </a>
                  </li>
                  <li>
                    <a href="#topic-2-3" className="hover:text-[#FF6600] flex justify-between items-center group py-0.5 text-slate-600 hover:text-slate-900 transition-colors">
                      <span className="font-medium">2.3 Technical Typologies of Educational Platforms</span>
                      <span className="text-slate-360 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                      <span className="text-xs bg-slate-100 text-[#004080] px-2.5 py-0.5 rounded-full font-bold">Unit 2</span>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Other sections TOC */}
              <div className="pt-4 border-t border-slate-150 space-y-3 font-semibold text-slate-700">
                <a href="#lessons-learned" className="flex justify-between items-center hover:text-[#FF6600] hover:translate-x-1 transition-transform group py-0.5">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[#004080]" />
                    <span>Conclusions & Lessons Learned</span>
                  </div>
                  <span className="text-slate-361 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                  <span className="text-xs text-orange-600 bg-orange-50 border border-orange-200 px-2.5 py-0.5 rounded-full font-bold">Wrap-up</span>
                </a>

                <a href="#annexes" className="flex justify-between items-center hover:text-[#FF6600] hover:translate-x-1 transition-transform group py-0.5">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4.5 h-4.5 text-[#004080]" />
                    <span>Academic Reference Annexes</span>
                  </div>
                  <span className="text-slate-362 font-mono text-xs border-b border-dotted border-slate-200 grow mx-2" />
                  <span className="text-xs text-indigo-650 bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 rounded-full font-bold">Referential</span>
                </a>
                <ul className="pl-6 mt-1 space-y-1.5 border-l border-indigo-200 ml-2 text-xs font-medium text-slate-500">
                  <li><a href="#glossary" className="hover:text-[#FF6600]">• Technical Glossary of Terms</a></li>
                  <li><a href="#readings" className="hover:text-[#FF6600]">• Suggested Readings</a></li>
                  <li><a href="#interactive-index" className="hover:text-[#FF6600]">• Interactive Activities Index (QR Codes)</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================================
            SECTION 3: UNIT 1
            ============================================== */}
        <section id="unit-1" className="py-12 px-8 md:px-16 border-b border-slate-150 relative">
          {/* Unit Heading */}
          <div className="bg-[#E6F0FA] text-[#004080] border-l-8 border-[#004080] p-6 rounded-r-xl mb-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest font-mono text-slate-500">UNIT ONE</p>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight mt-1">
              Unit 1 – Essential Aspects and Components of E-Learning
            </h1>
          </div>

          {/* Unit 1 Core Diagram: The E-Learning Ecosystem */}
          <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
            <img
              src="/unit1_elearning_ecosystem_pedagogical_foundations.png"
              alt="The E-Learning Ecosystem (Unit 1)"
              className="w-full h-auto object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* TOPIC 1.1 */}
          <div id="topic-1-1" className="mb-16 scroll-mt-6">
            <h2 className="text-2xl font-extrabold text-[#004080] font-display flex items-center gap-2 border-b-2 border-slate-100 pb-3.5 mb-6">
              <span className="bg-[#004080] text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0">1.1</span>
              <span>Topic 1.1 – Integration of ICTs and the Educational System</span>
            </h2>

            {/* Key Aspects Box */}
            <div className="bg-white border-l-4 border-[#004080] p-5 rounded-r-xl shadow-xs mb-6 print-border">
              <h4 className="text-xs font-extrabold text-[#004080] uppercase tracking-wider mb-2.5 font-mono">Key Concepts & Aspects</h4>
              <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span><strong className="text-[#004080]">E-learning</strong> unifies traditional pedagogical theories with the ongoing expansion of network technologies to deliver rich education beyond conventional classroom walls.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>It relies heavily on <strong className="text-[#004080]">Connectivism</strong>, a learning theory where knowledge is distributed across human and technological networks.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Digital competencies and ICT expertise of instructors are essential to guide student debate and facilitate structured online social dialogue.</span>
                </li>
              </ul>
            </div>

            {/* Theoretical Foundations & Network Tech Diagram */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
              <img
                src="/elearning_cognitivism_connectivism_constructivism.png"
                alt="E-Learning: Blending Teaching Theory and Network Tech"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Embedded Visual Mind Map */}
            <InteractiveMindMap />

            {/* Custom Lessons Learned Box */}
            <div className="bg-[#FFF3E0] border-2 border-[#FF6600] rounded-xl p-5 shadow-xs mb-8 flex gap-4 print-border">
              <div className="bg-[#FF6600] text-white p-2.5 h-10 w-10 text-center rounded-lg flex items-center justify-center shrink-0">
                💡
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-[#FF6600] uppercase tracking-wide font-mono mb-1">Unit 1 • Lesson Learned</h5>
                <p className="text-base text-orange-950 font-medium font-sans leading-relaxed">
                  &ldquo;E-learning is never about merely adding wires and machines; it is a fundamental methodological shift that expands the flexibility and scale of accessing structured human knowledge.&rdquo;
                </p>
              </div>
            </div>

            {/* Value Proposition: Flexibility, Borderless, and Self-Paced Freedom */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#FF6600]/10 page-break-inside-avoid">
              <img
                src="/value_proposition_flexibility_borderless_self_paced.png"
                alt="Value Proposition: Flexibility, Borderless Access, and Self-Paced Freedom"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>


          </div>

          {/* TOPIC 1.2 */}
          <div id="topic-1-2" className="mb-16 scroll-mt-6">
            <h2 className="text-2xl font-extrabold text-[#004080] font-display flex items-center gap-2 border-b-2 border-slate-100 pb-3.5 mb-6">
              <span className="bg-[#004080] text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0">1.2</span>
              <span>Topic 1.2 – Development and Creation of Pedagogical Content</span>
            </h2>

            {/* Key Aspects Box */}
            <div className="bg-white border-l-4 border-[#004080] p-5 rounded-r-xl shadow-xs mb-6 print-border">
              <h4 className="text-xs font-extrabold text-[#004080] uppercase tracking-wider mb-2.5 font-mono">Key Concepts & Aspects</h4>
              <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Instructional assets are categorized into <strong className="text-[#004080]">Asynchronous</strong> (deferred-time, self-paced forums) and <strong className="text-[#004080]">Synchronous</strong> (live online lectures and chats).</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Format structures are highly diverse: educational video games, qualitative peer checks, hypermedia simulations, and open licensing didactic modules.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>The virtual tutor in the 21st century serves dynamically as a curriculum architect, facilitator, and assessor, adjusting continuously to students\' learning interactions.</span>
                </li>
              </ul>
            </div>

            {/* Content Architecture Flowchart */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
              <img
                src="/digital_content_architecture_web_hosting_multimedia.png"
                alt="Architecture of Digital Content Delivery: Define Objectives, Web Hosting, Multimedia, and Autonomous Execution"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 8 Online Instructor Roles Diagram */}
            <div id="instructor-roles" className="scroll-mt-12 my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
              <img
                src="/online_instructor_8_roles.png"
                alt="The 8 Multifaceted Roles of the Online Instructor: Technical, Pedagogical, and Managerial"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Visual Roles Instructor Component */}
            <InstructorRoles />

            {/* ISTE Standards Teaching Pyramid */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#FF6600]/10 page-break-inside-avoid">
              <img
                src="/iste_standards_digital_age_teaching.png"
                alt="ISTE Standards for Teaching in the Digital Age"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Custom Lessons Learned Box */}
            <div className="bg-[#FFF3E0] border-2 border-[#FF6600] rounded-xl p-5 shadow-xs mb-8 flex gap-4 print-border">
              <div className="bg-[#FF6600] text-white p-2.5 h-10 w-10 text-center rounded-lg flex items-center justify-center shrink-0">
                💡
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-[#FF6600] uppercase tracking-wide font-mono mb-1">Unit 1 • Lesson Learned</h5>
                <p className="text-base text-orange-950 font-medium font-sans leading-relaxed">
                  &ldquo;A solid virtual methodology empowers the online student to guide their own study tempo using a balanced mix of hypermedia references, text, audio, and interactive systems.&rdquo;
                </p>
              </div>
            </div>


          </div>

          {/* TOPIC 1.3 */}
          <div id="topic-1-3" className="mb-16 scroll-mt-6">
            <h2 className="text-2xl font-extrabold text-[#004080] font-display flex items-center gap-2 border-b-2 border-slate-100 pb-3.5 mb-6">
              <span className="bg-[#004080] text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0">1.3</span>
              <span>Topic 1.3 – Educational Portals and Cultural Spaces</span>
            </h2>

            {/* Key Aspects Box */}
            <div className="bg-white border-l-4 border-[#004080] p-5 rounded-r-xl shadow-xs mb-6 print-border">
              <h4 className="text-xs font-extrabold text-[#004080] uppercase tracking-wider mb-2.5 font-mono">Key Concepts & Aspects</h4>
              <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Portals serve as centralized access gateways and structural anchor sites across the Web, guaranteeing institutional rigor, citation standards, and verified curriculum resources.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>They offer unique added value such as: augmented reality (AR) modules, virtual lab spaces, structured digital catalogs, and kinetic mappings.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Iconic, world-class educational portal examples include: <strong className="text-[#004080]">Google Earth</strong> (earth sciences, geography), <strong className="text-[#004080]">National Geographic Education</strong> (biological research), and <strong className="text-[#004080]">The Wonderment</strong> (global media collaboration).</span>
                </li>
              </ul>
            </div>

            {/* Portal Structure Component */}
            <PortalStructure />

            {/* Custom Lessons Learned Box */}
            <div className="bg-[#FFF3E0] border-2 border-[#FF6600] rounded-xl p-5 shadow-xs mb-8 flex gap-4 print-border">
              <div className="bg-[#FF6600] text-white p-2.5 h-10 w-10 text-center rounded-lg flex items-center justify-center shrink-0">
                💡
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-[#FF6600] uppercase tracking-wide font-mono mb-1">Unit 1 • Lesson Learned</h5>
                <p className="text-base text-orange-950 font-medium font-sans leading-relaxed">
                  &ldquo;A methodical integration of educational portals in virtual courses greatly accelerates academic autonomy and analytical reasoning among university students.&rdquo;
                </p>
              </div>
            </div>


          </div>

          {/* TOPIC 1.4 */}
          <div id="topic-1-4" className="mb-8 scroll-mt-6">
            <h2 className="text-2xl font-extrabold text-[#004080] font-display flex items-center gap-2 border-b-2 border-slate-100 pb-3.5 mb-6">
              <span className="bg-[#004080] text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0">1.4</span>
              <span>Topic 1.4 – Social Networks as Learning Spaces</span>
            </h2>

            {/* Key Aspects Box */}
            <div className="bg-white border-l-4 border-[#004080] p-5 rounded-r-xl shadow-xs mb-6 print-border">
              <h4 className="text-xs font-extrabold text-[#004080] uppercase tracking-wider mb-2.5 font-mono">Key Concepts & Aspects</h4>
              <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Online social networks dismantle structural isolation barriers, enabling immediate group coordination requiring zero advanced software experience.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>The <strong className="text-[#004080]">Web 2.0</strong> revolution and mass systems like Wikipedia or YouTube promote active co-creation, peer evaluation, and social intelligence.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Unbending ethical rules match: solid prevention of cyberbullying, safe-handling of sensitive data, and upholding formal, supportive class communication.</span>
                </li>
              </ul>
            </div>

            {/* Custom Comparison Table for Social Networks */}
            <div className="my-8">
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm print-border">
                <table className="w-full font-sans text-left border-collapse">
                  <thead>
                    <tr className="bg-[#004080] text-white">
                      <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Social Platform</th>
                      <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Operational Specialty</th>
                      <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Best Pedagogical Leverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm h-auto">
                    {socialNetworks.map((net, nIdx) => {
                      const IconNode = net.icon;
                      return (
                        <tr key={nIdx} className="hover:bg-slate-50/40">
                          <td className="py-4 px-4 font-bold text-[#004080]">
                            <div className="flex items-center gap-2">
                              <span className="p-1 rounded bg-slate-100 shrink-0">
                                <IconNode className="w-4 h-4 text-[#FF6600]" />
                              </span>
                              <span>{net.platform}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-slate-600 font-medium font-display leading-tight text-xs">
                            {net.bestFor}
                          </td>
                          <td className="py-4 px-4 text-slate-700 leading-relaxed text-xs">
                            {net.learningUse}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Custom Lessons Learned Box */}
            <div className="bg-[#FFF3E0] border-2 border-[#FF6600] rounded-xl p-5 shadow-xs mb-8 flex gap-4 print-border">
              <div className="bg-[#FF6600] text-white p-2.5 h-10 w-10 text-center rounded-lg flex items-center justify-center shrink-0">
                💡
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-[#FF6600] uppercase tracking-wide font-mono mb-1">Unit 1 • Lesson Learned</h5>
                <p className="text-base text-orange-950 font-medium font-sans leading-relaxed">
                  &ldquo;A standard social messenger transforms into a rich learning ecosystem only when governed by active Communities of Practice and guided by healthy Netiquette rules.&rdquo;
                </p>
              </div>
            </div>

            {/* Unit 1 - Student Answer Link Google Forms Block */}
            <div className="bg-purple-50/50 rounded-xl border-2 border-purple-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 page-break-inside-avoid shadow-xs">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1.5 font-mono">
                  <FileText className="w-3.5 h-3.5 text-purple-700" />
                  <span>Google Forms Activity</span>
                </span>
                <h4 className="text-xl font-extrabold text-purple-950 font-display">Unit 1 – Student Answer Link</h4>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  Submit your responses, assessments, and learning journal entries for Unit 1. Scan the QR code or click the active link to open our verified Google Forms workbook.
                </p>
              </div>
              <QRCodeElement endpoint="https://forms.gle/XHFbdYtf8crUYDcn6" textLabel="Unit 1 Google Form" primaryColor="8e24aa" />
            </div>
          </div>
        </section>

        {/* ==============================================
            SECTION 4: UNIT 2
            ============================================== */}
        <section id="unit-2" className="py-12 px-8 md:px-16 border-b border-slate-150 relative">
          {/* Unit Heading */}
          <div className="bg-[#E6F0FA] text-[#004080] border-l-8 border-[#004080] p-6 rounded-r-xl mb-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest font-mono text-slate-500">UNIT TWO</p>
            <h1 className="text-3xl md:text-4xl font-extrabold font-display tracking-tight mt-1">
              Unit 2 – Primary Systems and Platforms of E-Learning
            </h1>
          </div>

          {/* Unit 2 Core Concept Card */}
          <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
            <img
              src="/modern_educational_platform_core_concept.png"
              alt="Core Concept and Functions of a Modern Educational Platform"
              className="w-full h-auto object-contain rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* TOPIC 2.1 */}
          <div id="topic-2-1" className="mb-16 scroll-mt-6">
            <h2 className="text-2xl font-extrabold text-[#004080] font-display flex items-center gap-2 border-b-2 border-slate-100 pb-3.5 mb-6">
              <span className="bg-[#004080] text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0">2.1</span>
              <span>Topic 2.1 – Learning Platforms as a Training Environment</span>
            </h2>

            {/* Key Aspects Box */}
            <div className="bg-white border-l-4 border-[#004080] p-5 rounded-r-xl shadow-xs mb-6 print-border">
              <h4 className="text-xs font-extrabold text-[#004080] uppercase tracking-wider mb-2.5 font-mono">Key Concepts & Aspects</h4>
              <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>E-learning platforms are structured web applications designed specifically to distribute multimedia contents and enable cohesive communication.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Evolution of Paradigms: leading from early <strong className="text-[#004080]">E-Learning</strong> (desktop browsers), through <strong className="text-[#004080]">B-Learning</strong> (hybrid instruction), to <strong className="text-[#004080]">M-Learning</strong> (portable smartphones), and finally <strong className="text-[#004080]">U-Learning</strong> (seamless context-aware omnipresent learning).</span>
                </li>
              </ul>
            </div>

            {/* Evolutionary Trajectory Diagram */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
              <img
                src="/evolutionary_trajectory_e_b_m_u.png"
                alt="The Evolutionary Trajectory of Digital Education (E -> B -> M -> U)"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Visual Timeline component */}
            <TimelineEvolution />

            {/* E-Learning Future Trends Diagram */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#FF6600]/10 page-break-inside-avoid">
              <img
                src="/elearning_trends_blended_micro_gamification.png"
                alt="E-Learning Future Trends: Blended, Micro-learning, Gamification, Personalization, Continuous Content"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Custom Lessons Learned Box */}
            <div className="bg-[#FFF3E0] border-2 border-[#FF6600] rounded-xl p-5 shadow-xs mb-8 flex gap-4 print-border">
              <div className="bg-[#FF6600] text-white p-2.5 h-10 w-10 text-center rounded-lg flex items-center justify-center shrink-0">
                💡
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-[#FF6600] uppercase tracking-wide font-mono mb-1">Unit 2 • Lesson Learned</h5>
                <p className="text-base text-orange-950 font-medium font-sans leading-relaxed">
                  &ldquo;Modern virtual setups allow structured evaluations to run automatically, delivering instant, detailed diagnostic data sheets to customize learning.&rdquo;
                </p>
              </div>
            </div>


          </div>

          {/* TOPIC 2.2 */}
          <div id="topic-2-2" className="mb-16 scroll-mt-6">
            <h2 className="text-2xl font-extrabold text-[#004080] font-display flex items-center gap-2 border-b-2 border-slate-100 pb-3.5 mb-6">
              <span className="bg-[#004080] text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0">2.2</span>
              <span>Topic 2.2 – E-Learning Platforms and Their Service Portfolio</span>
            </h2>

            {/* Key Aspects Box */}
            <div className="bg-white border-l-4 border-[#004080] p-5 rounded-r-xl shadow-xs mb-6 print-border">
              <h4 className="text-xs font-extrabold text-[#004080] uppercase tracking-wider mb-2.5 font-mono">Key Concepts & Aspects</h4>
              <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Primary actors with structured access: <strong className="text-[#004080]">Students</strong>, <strong className="text-[#004080]">Instructors/Tutors</strong>, and global <strong className="text-[#004080]">IT Administrators</strong>.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Classification of training tools: Learning-focused features (strategic), Content-creation features (didactic design), and Performance/Productivity utilities (operational).</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Top productivity suites: <strong className="text-[#004080]">Zoom</strong> (synchronous meetings), <strong className="text-[#004080]">Google Docs</strong> (collaborative editing), and <strong className="text-[#004080]">ProofHub</strong> (milestone tracking and assignments).</span>
                </li>
              </ul>
            </div>

            {/* Platform Mechanics, Actors & Functional Areas Diagram */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
              <img
                src="/platform_mechanics_features_actors_teacher_learner.png"
                alt="Platform Mechanics, Core Features, and Key Actors (Teacher, Learner, Administrator)"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Engagement Tools Infographic Block */}
            <div className="my-8">
              <p className="text-xs font-extrabold text-[#004080] uppercase tracking-widest pl-2 border-l-4 border-orange-500 mb-4 inline-block font-mono">
                Infographic: Interaction and Retention Applications
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {engagementTools.map((tool, tIdx) => (
                  <div key={tIdx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs flex flex-col justify-between print-border page-break-inside-avoid">
                    <div>
                      <h4 className="font-bold text-base text-[#004080] font-display flex items-center gap-1.5 mb-1 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <span className="w-2 h-2 rounded bg-orange-500 shrink-0" />
                        <span>{tool.name}</span>
                      </h4>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest mb-3.5 mt-1">{tool.type}</p>
                      <p className="text-xs text-slate-600 leading-relaxed mb-4">{tool.function}</p>
                    </div>
                    <div className="bg-emerald-50/40 p-3 rounded-lg border border-emerald-100/60 mt-2 text-xs">
                      <p className="font-bold text-[#004080] text-[10px] uppercase tracking-wider">Tracking Contribution</p>
                      <p className="text-slate-600 leading-normal mt-0.5">{tool.metrics}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Lessons Learned Box */}
            <div className="bg-[#FFF3E0] border-2 border-[#FF6600] rounded-xl p-5 shadow-xs mb-8 flex gap-4 print-border">
              <div className="bg-[#FF6600] text-white p-2.5 h-10 w-10 text-center rounded-lg flex items-center justify-center shrink-0">
                💡
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-[#FF6600] uppercase tracking-wide font-mono mb-1">Unit 2 • Lesson Learned</h5>
                <p className="text-base text-orange-950 font-medium font-sans leading-relaxed">
                  &ldquo;A virtual instructor\'s operational productivity is born from combining careful structural curriculum plotting with consistent institutional discipline.&rdquo;
                </p>
              </div>
            </div>


          </div>

          {/* TOPIC 2.3 */}
          <div id="topic-2-3" className="mb-8 scroll-mt-6">
            <h2 className="text-2xl font-extrabold text-[#004080] font-display flex items-center gap-2 border-b-2 border-slate-100 pb-3.5 mb-6">
              <span className="bg-[#004080] text-white w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm shrink-0">2.3</span>
              <span>Topic 2.3 – Technical Typologies of Educational Platforms</span>
            </h2>

            {/* Key Aspects Box */}
            <div className="bg-white border-l-4 border-[#004080] p-5 rounded-r-xl shadow-xs mb-6 print-border">
              <h4 className="text-xs font-extrabold text-[#004080] uppercase tracking-wider mb-2.5 font-mono">Key Concepts & Aspects</h4>
              <ul className="space-y-2.5 text-base text-slate-700 leading-relaxed">
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span>Modern virtual structures can be classified across 7 technical types, ranging from full Learning Management Systems (LMS), global open MOOC catalogs, to highly customized portals.</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span><strong className="text-[#004080]">Open Source</strong>: Free source code availability allowing unrestricted adaptations and local hosting (e.g., Moodle, Chamilo).</span>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="text-[#FF6600] font-bold mt-0.5">•</span>
                  <span><strong className="text-[#004080]">Proprietary Platforms</strong>: Commercially closed products protected by licensing fees, delivering managed SaaS setups and institutional support (e.g., Coursera, MS Teams).</span>
                </li>
              </ul>
            </div>

            {/* Choosing the Right Habitat Matrix */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
              <img
                src="/typology_matrix_lms_moocs_lxs_apps.png"
                alt="Choosing the Right Habitat: LMS, Employee Training, MOOCs, LXS, Custom Platforms, Apps Matrix"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Software Platform Typologies & Interoperability Standards */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
              <img
                src="/software_platform_typologies_lms_cms_lxp_scorm.png"
                alt="Software Platform Typologies, Mechanics, and Interoperability Standards (SCORM, xAPI)"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* 9 Types of Software Platforms Grid */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#004080]/10 page-break-inside-avoid">
              <img
                src="/nine_types_of_software_platforms.png"
                alt="The 9 Types of Software Platforms Matrix"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Visual: Platform Comparison Table */}
            <div className="my-8">
              <p className="text-xs font-extrabold text-[#004080] uppercase tracking-widest pl-2 border-l-4 border-[#004080] mb-4 inline-block font-mono">
                Comparative Matrix: LMS Platforms & Architectures
              </p>
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm print-border">
                <table className="w-full font-sans text-left border-collapse">
                  <thead>
                    <tr className="bg-[#004080] text-white">
                      <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Technical Criteria</th>
                      <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Open Source (LMS)</th>
                      <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Commercial / SaaS Cloud</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-sm h-auto leading-relaxed">
                    {platformComparison.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/30">
                        <td className="py-4 px-4 font-bold text-[#004080] w-[20%] text-xs">
                          {row.criteria}
                        </td>
                        <td className="py-4 px-4 text-slate-700 w-[40%] text-xs">
                          {row.openSource}
                        </td>
                        <td className="py-4 px-4 text-slate-600 w-[40%] text-xs">
                          {row.commercial}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Standardization Benefits Diagnostic Matrix (AIRDMA) */}
            <div className="my-[30px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 p-2.5 bg-slate-50 ring-2 ring-[#FF6600]/10 page-break-inside-avoid">
              <img
                src="/standardization_benefits_airdma_matrix.png"
                alt="The Benefits of Standardizing E-Learning: AIRDMA Diagnostic Matrix"
                className="w-full h-auto object-contain rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Custom Lessons Learned Box */}
            <div className="bg-[#FFF3E0] border-2 border-[#FF6600] rounded-xl p-5 shadow-xs mb-8 flex gap-4 print-border">
              <div className="bg-[#FF6600] text-white p-2.5 h-10 w-10 text-center rounded-lg flex items-center justify-center shrink-0">
                💡
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-[#FF6600] uppercase tracking-wide font-mono mb-1">Unit 2 • Lesson Learned</h5>
                <p className="text-base text-orange-950 font-medium font-sans leading-relaxed">
                  &ldquo;Adhering to recognized global compliance standards (e.g., SCORM packages, LTI protocols) remains a crucial step to secure course exporting across different university database systems.&rdquo;
                </p>
              </div>
            </div>

            {/* Unit 2 - Student Answer Link Google Forms Block */}
            <div className="bg-purple-50/50 rounded-xl border-2 border-purple-200 p-6 flex flex-col md:flex-row items-center justify-between gap-6 page-break-inside-avoid shadow-xs">
              <div className="space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1.5 font-mono">
                  <FileText className="w-3.5 h-3.5 text-purple-700" />
                  <span>Google Forms Activity</span>
                </span>
                <h4 className="text-xl font-extrabold text-purple-950 font-display">Unit 2 – Student Answer Link</h4>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed">
                  Submit your responses, assessments, and learning journal entries for Unit 2. Scan the QR code or click the active link to open our verified Google Forms workbook.
                </p>
              </div>
              <QRCodeElement endpoint="https://forms.gle/XUkNHQG6PLJB8yUj6" textLabel="Unit 2 Google Form" primaryColor="8e24aa" />
            </div>
          </div>
        </section>

        {/* ==============================================
            SECTION 5: INTEGRAL LESSONS LEARNED SECTION
            ============================================== */}
        <section id="lessons-learned" className="py-12 px-8 md:px-16 border-b border-slate-150 bg-slate-50/50">
          <div className="bg-[#E6F0FA] border-2 border-[#004080] rounded-3xl p-8 shadow-md print-border print-shadow-none">
            <div className="flex items-center gap-3 border-b border-[#004080]/20 pb-4 mb-6">
              <CheckCircle2 className="w-7 h-7 text-[#004080]" />
              <h2 className="text-2xl md:text-3xl font-black text-[#004080] font-display tracking-tight">Executive Wrap-up & Reflections</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 leading-relaxed mb-8">
              {/* Unit 1 learnings list */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest bg-[#004080] text-white px-3 py-1 rounded-full font-mono">
                  Unit 1 • Summary
                </span>
                <ul className="space-y-3.5 mt-2.5 text-base text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#004080] font-extrabold">✓</span>
                    <span>Virtual learning redefines classic teaching parameters, centering students actively inside custom-built web environments instead of physical layouts.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#004080] font-extrabold">✓</span>
                    <span>The modern online teacher acts as an active multimedia architect, managing collaborative student dialogue and moderating group work.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#004080] font-extrabold">✓</span>
                    <span>Well-structured public gates and portals are reliable keystones enabling successful self-paced academic exploration.</span>
                  </li>
                </ul>
              </div>

              {/* Unit 2 learnings list */}
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-widest bg-[#FF6600] text-white px-3 py-1 rounded-full font-mono">
                  Unit 2 • Summary
                </span>
                <ul className="space-y-3.5 mt-2.5 text-base text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6600] font-extrabold">✓</span>
                    <span>Choosing the ideal platform requires analyzing direct license fees, open source sovereignty, and administrative maintenance needs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6600] font-extrabold">✓</span>
                    <span>Productivity integrations (Google Forms, Prezi, Kahoot!) keep students engaged while providing instant analytics to tutors.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#FF6600] font-extrabold">✓</span>
                    <span>The future belongs to Ubiquitous Learning (U-Learning), blending online education effortlessly with day-to-day student routines.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Reflection Questions Box */}
            <div className="bg-white border border-[#004080]/15 rounded-2xl p-6 shadow-sm print-border">
              <h4 className="text-xl font-bold text-[#004080] font-display flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-[#FF6600]" />
                <span>🤔 Academic Reflection Questions</span>
              </h4>
              <div className="space-y-3.5 font-sans pl-2 border-l-2 border-orange-500/70">
                <div className="bg-slate-50/50 p-2 rounded">
                  <p className="text-sm font-semibold text-[#004080]">1. Which LMS architecture would you recommend for an asynchronous language program, and why?</p>
                </div>
                <div className="bg-slate-50/50 p-2 rounded">
                  <p className="text-sm font-semibold text-[#004080]">2. How can social networks be directly harnessed inside standard university curriculums to aid performance without distraction?</p>
                </div>
                <div className="bg-slate-50/50 p-2 rounded">
                  <p className="text-sm font-semibold text-[#004080]">3. Among the 8 online tutor roles, which do you see as primary in reducing student drop-out rates, and how would you foster it?</p>
                </div>
              </div>
            </div>
            
            {/* Embedded Live Self-Assessment Interactive Quiz */}
            <div className="mt-8 no-print">
              <InteractiveQuiz />
            </div>
          </div>
        </section>

        {/* ==============================================
            SECTION 6: ANNEXES / GLOSSARY / READINGS
            ============================================== */}
        <section id="annexes" className="py-12 px-8 md:px-16 leading-relaxed">
          <div className="bg-white border-l-8 border-[#004080] p-4 rounded-r-xl mb-10 shadow-xs">
            <p className="text-xs font-bold uppercase tracking-widest font-mono text-slate-500 font-semibold">REFERENCE APPENDIX</p>
            <h1 className="text-3xl font-extrabold text-[#004080] font-display tracking-tight">Academic Annexes</h1>
          </div>

          {/* Glossary Sub-block */}
          <div id="glossary" className="mb-14 scroll-mt-6">
            <GlossaryView />
          </div>

          {/* Readings Sub-block */}
          <div id="readings" className="mb-14 scroll-mt-6 page-break-inside-avoid">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-2 border-b border-slate-150">
              <h3 className="text-2xl font-extrabold text-[#004080] font-display flex items-center gap-2">
                <span className="bg-[#004080] text-white w-2 h-6 rounded-md shrink-0" />
                <span>Suggested Readings & Bibliographical References</span>
              </h3>
              <span className="text-[10px] font-bold bg-[#E6F0FA] text-[#004080] px-3 py-1 rounded-full uppercase tracking-wider font-mono">
                APA 7th Edition Format
              </span>
            </div>
            
            <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm print-border">
              <ul className="space-y-6 font-sans">
                {/* 1. Academic Journal of Educational Technology */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  Academic Journal of Educational Technology. (2021). Entering the third generation of e-learning: Paradigms &amp; best practices. <span className="italic">Journal of Educational Technology Systems</span>, <span className="italic">50</span>(1), 45-62. <a href="https://doi.org/10.1177/004723952110291" target="_blank" rel="noopener noreferrer" className="text-[#FF6600] tracking-tight hover:underline font-mono text-xs inline-flex items-center gap-0.5 ml-1 select-all">https://doi.org/10.1177/004723952110291 <ExternalLink className="w-2.5 h-2.5 inline shrink-0" /></a>
                </li>

                {/* 2. ISTE */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  International Society for Technology in Education. (2020). <span className="italic">International technology standards for students, educators, and leaders</span>. ISTE.
                </li>

                {/* 3. UNESCO */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  UNESCO. (2019). <span className="italic">Impact of modern technology and open educational resources (OER) in Latin America: Studies in regional educational policies and inclusiveness</span>. UNESCO Regional Office for Education in Latin America and the Caribbean.
                </li>

                {/* 4. Zambrano Theme 1 */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  Zambrano Pachay, J. (n.d.). <span className="italic">Unit 1: Essential aspects and components of e-learning. Theme 1: E-learning: ICT and educational system integration</span> [PowerPoint slides]. Universidad Estatal de Milagro.
                </li>

                {/* 5. Zambrano Theme 2 */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  Zambrano Pachay, J. (n.d.). <span className="italic">Unit 1: Essential aspects and components of e-learning. Theme 2: Content development</span> [PowerPoint slides]. Universidad Estatal de Milagro.
                </li>

                {/* 6. Zambrano Theme 3 */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  Zambrano Pachay, J. (n.d.). <span className="italic">Unit 1: Essential aspects and components of e-learning. Theme 3: Educational and cultural portals as a teaching-learning strategy and training content resources</span> [PowerPoint slides]. Universidad Estatal de Milagro.
                </li>

                {/* 7. Zambrano Theme 4 */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  Zambrano Pachay, J. (n.d.). <span className="italic">Unit 1: Essential aspects and components of e-learning. Theme 4: Social networking as learning spaces</span> [PowerPoint slides]. Universidad Estatal de Milagro.
                </li>

                {/* 8. Zambrano U2 Theme 1 */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  Zambrano Pachay, J. (n.d.). <span className="italic">Unit 2: Main e-learning systems and platforms. Theme 1: Learning platforms as a new training space</span> [PowerPoint slides]. Universidad Estatal de Milagro.
                </li>

                {/* 9. Zambrano U2 Theme 2 */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  Zambrano Pachay, J. (n.d.). <span className="italic">Unit 2: Main e-learning systems and platforms. Theme 2: E-learning platforms and their services</span> [PowerPoint slides]. Universidad Estatal de Milagro.
                </li>

                {/* 10. Zambrano U2 Theme 3 */}
                <li style={{ paddingLeft: '2rem', textIndent: '-2rem' }} className="text-sm text-slate-700 leading-relaxed hover:text-slate-900 transition-colors">
                  Zambrano Pachay, J. (n.d.). <span className="italic">Unit 2: Main e-learning systems and platforms. Theme 3: Types of educational platforms</span> [PowerPoint slides]. Universidad Estatal de Milagro.
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive Activities Summary table */}
          <div id="interactive-index" className="mb-8 scroll-mt-6 page-break-inside-avoid">
            <h3 className="text-2xl font-extrabold text-[#004080] font-display mb-6 pb-2 border-b border-slate-100 flex items-center gap-2">
              <span className="bg-[#004080] text-white w-2 h-6 rounded-md shrink-0" />
              <span>Interactive Activities Index (QR Codes)</span>
            </h3>

            <p className="text-sm text-slate-500 mb-4 italic leading-relaxed">
              Consolidated catalog of practical workbook exercises and deep-dive interactive components. If printing this compendium (Ctrl+P), you can scan QR codes for external assessments or follow internal bookmarks for curated in-document panels:
            </p>

            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm print-border">
              <table className="w-full font-sans text-left border-collapse">
                <thead>
                  <tr className="bg-[#004080] text-white">
                    <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Target / Syllabus Scope</th>
                    <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Activity Specialty</th>
                    <th className="py-3.5 px-4 text-xs font-bold uppercase tracking-wider font-display">Destination Connection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm h-auto leading-relaxed">
                  {interactiveActivities.map((act, aIdx) => (
                    <tr key={aIdx} className="hover:bg-slate-50/30">
                      <td className="py-3 px-4 font-bold text-[#004080]">
                        {act.topic}
                      </td>
                      <td className="py-3 px-4 text-slate-600 font-medium text-xs">
                        {act.type}
                      </td>
                      <td className="py-3 px-4 text-xs font-semibold">
                        <div className="flex items-center gap-2">
                          {act.isExternal ? (
                            <span className="inline-flex items-center gap-1 bg-purple-50 text-purple-700 px-2.5 py-1 rounded-md border border-purple-100 text-xs shadow-3xs animate-pulse">
                              <FileText className="w-3.5 h-3.5 text-purple-700" />
                              <a
                                href={act.targetUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline font-bold"
                              >
                                {act.label}
                              </a>
                              <ExternalLink className="w-3 h-3 text-purple-400 shrink-0" />
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-700 px-2.5 py-1 rounded-md border border-blue-100 text-xs shadow-3xs">
                              <BookOpen className="w-3.5 h-3.5 text-blue-700" />
                              <a
                                href={act.targetUrl}
                                className="hover:underline font-bold"
                              >
                                {act.label}
                              </a>
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Academic Copyright and Institutional footer */}
        <footer className="bg-[#004080] text-white/80 py-8 px-8 text-center text-xs font-sans border-t-4 border-[#FF6600]">
          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center border border-white/20 font-black text-white text-base">
              UNEMI
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
