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
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  ExternalLink,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  Book,
  Menu,
  X,
  Layers,
  Sparkles
} from 'lucide-react';

import InteractiveMindMap from './components/InteractiveMindMap';
import InstructorRoles from './components/InstructorRoles';
import PortalStructure from './components/PortalStructure';
import TimelineEvolution from './components/TimelineEvolution';
import InteractiveQuiz from './components/InteractiveQuiz';
import GlossaryView from './components/GlossaryView';

export default function App() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [viewMode, setViewMode] = useState<'book' | 'scroll'>('scroll');
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

  // Common UI elements / data from original Compendium
  const socialNetworks = [
    {
      platform: 'Facebook',
      bestFor: 'Communities of practice and social forums',
      learningUse: 'Allows massive broadcast of academic announcements, energizes closed asynchronous discussion groups, and connects students on interdisciplinary projects.',
      icon: Facebook,
    },
    {
      platform: 'LinkedIn',
      bestFor: 'Academic brand, employability, and professional identity',
      learningUse: 'Ideal for linking university students with key employers, discussing scientific relevance findings, and forging alumni networks.',
      icon: Linkedin,
    },
    {
      platform: 'Twitter (X)',
      bestFor: 'Agile academic microblogging and trend debate',
      learningUse: 'Fosters dynamic discussions with specific course hashtags, summarizes complex scientific concepts into compact threads, and follows global conferences in real time.',
      icon: Twitter,
    },
    {
      platform: 'Instagram',
      bestFor: 'Dynamic portfolios and purely visual storytelling',
      learningUse: 'Used to document lab experiments through short stories, showcase high-impact infographics created by students, and provide an aesthetic channel for projects.',
      icon: Instagram,
    },
    {
      platform: 'Edmodo / Classroom Networks',
      bestFor: 'Secure pedagogical collaboration within school circles',
      learningUse: 'Safe and moderated networks designed to replicate traditional social dynamics, provide feedback, and share course assignments.',
      icon: Users,
    }
  ];

  const engagementTools = [
    {
      name: 'Kahoot!',
      type: 'Mass Gamification and Live Polls',
      function: 'Creates interactive synchronous quiz-style contests that energize video classes, sparking group integration in a gamified environment.',
      metrics: 'Delivers real-time reports on group progress.'
    },
    {
      name: 'Google Forms',
      type: 'Structured Asynchronous Evaluations',
      function: 'A versatile tool available to build formal self-checking quizzes, detailed diagnostic forms, and assessment surveys with automated responses.',
      metrics: 'Graphs performance charts and exports data immediately.'
    },
    {
      name: 'Prezi',
      type: 'Structured Visual Presentation of Maps',
      function: 'Designs dynamic paths on conceptual maps through adjustable three-dimensional zoom, avoiding the teacher apathy associated with flat linear templates.',
      metrics: 'Maps complex taxonomies for high-level analysis.'
    }
  ];

  const platformComparison = [
    {
      criteria: 'Cost Analysis',
      openSource: 'Free download of central software without ongoing patent licensing fees. Requires investment in local web servers, technical staff, and hosting.',
      commercial: 'Demands mandatory annual fees calculated against active student enrollment. Cloud hosting is usually included natively.'
    },
    {
      criteria: 'Degree of Customization',
      openSource: 'Total autonomy without restrictions. Since the full source code is provided, the IT team can modify databases, program plugins, and refine styles.',
      commercial: 'Strictly limited to parameters, templates, and connection APIs agreed upon and pre-approved by the software manufacturer.'
    },
    {
      criteria: 'Server Maintenance',
      openSource: 'Requires ongoing local technical support, redundant backups, and direct preventive patching of infrastructure.',
      commercial: 'SaaS support. The provider handles updates and data backups invisibly, without pauses in academic service.'
    },
    {
      criteria: 'Documentation and Community',
      openSource: 'Supported by global forums with millions of educators and developers (Chamilo/Moodle communities) sharing solutions daily.',
      commercial: 'Contractual guarantee of direct technical assistance (SLA) through corporate ticket portals.'
    },
    {
      criteria: 'Data Sovereignty',
      openSource: 'The university owns and hosts the student database with total autonomy, guaranteeing maximum confidentiality of navigation telemetry.',
      commercial: 'Navigation information and telemetry are hosted externally in the corporate contractor\'s data centers.'
    }
  ];

  const interactiveActivities = [
    {
      topic: 'End of Unit 1',
      type: 'External Form Workshop',
      targetUrl: 'https://forms.gle/XHFbdYtf8crUYDcn6',
      label: 'Unit 1 Response Link',
      isExternal: true
    },
    {
      topic: 'End of Unit 2',
      type: 'External Form Workshop',
      targetUrl: 'https://forms.gle/XUkNHQG6PLJB8yUj6',
      label: 'Unit 2 Response Link',
      isExternal: true
    },
    {
      topic: 'Teacher Role Workshop',
      type: 'Interactive Simulation Panel',
      targetUrl: '#instructor-roles',
      label: 'Interact with the 8 Teacher Roles',
      isExternal: false
    },
    {
      topic: 'Review and Evaluation',
      type: 'Self-Checking Quiz',
      targetUrl: '#interactive-quiz',
      label: 'Digital Self-Assessment Quiz',
      isExternal: false
    }
  ];

  function QRCodeElement({ endpoint, textLabel, primaryColor = "004080" }: { endpoint: string; textLabel: string; primaryColor?: string }) {
    const qrSource = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&color=${primaryColor}&data=${encodeURIComponent(endpoint)}`;
    return (
      <div className="flex flex-col items-center bg-slate-50 border border-slate-100 p-4 rounded-xl text-center shadow-xs page-break-inside-avoid print-mx-0">
        <img
          src={qrSource}
          alt={`Código QR para ${textLabel}`}
          className="w-24 h-24 border border-slate-200 p-1 bg-white rounded-lg shadow-inner"
          referrerPolicy="no-referrer"
        />
        <p className="text-[10px] font-bold mt-2 tracking-wide uppercase font-sans md:text-xs" style={{ color: `#${primaryColor}` }}>
          {textLabel}
        </p>
        <a
          href={endpoint}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[9px] font-mono hover:underline mt-1 truncate max-w-[140px] inline-block text-orange-600 no-print"
        >
          {endpoint}
        </a>
      </div>
    );
  }

  // Define each of our exactly 30 numbered páginas with deep, rigorous, custom styled academic contents.
  const pages = [
    // PAGE 1
    {
      number: 1,
      id: 'page-1',
      section: 'PORTADA',
      title: 'Portada del Compendio Académico',
      content: (
        <div className="flex flex-col justify-between h-full min-h-[550px] md:min-h-[650px]">
          <div className="text-center space-y-4 pt-4">
            <span className="bg-unemi-blue/10 text-unemi-blue text-xs font-bold font-mono px-4 py-1.5 rounded-full uppercase tracking-widest border border-unemi-blue/15">
              UNIVERSIDAD ESTATAL DE MILAGRO - UNEMI
            </span>
            <h2 className="text-xs font-bold tracking-widest text-[#666666] uppercase font-mono mt-1">FACULTAD DE CIENCIAS DE LA EDUCACIÓN</h2>
            <div className="h-0.5 bg-slate-200 w-full my-4" />
          </div>

          <div className="my-[2vh] text-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-black text-unemi-blue tracking-tight leading-tight">
              SISTEMAS DE E-LEARNING:
              <span className="block text-unemi-orange mt-1 text-2xl md:text-3.5xl">
                Tipos, Tendencias y Plataformas Educativas
              </span>
            </h1>
            <div className="h-1 text-orange-500 w-24 bg-unemi-orange rounded-full mx-auto" />
            <p className="text-xs md:text-sm font-medium text-slate-500 leading-relaxed max-w-lg mx-auto">
              Compendio Temático de Estudio Auto-Dirigido Para Entornos Virtuales de Aprendizaje (Unidades 1 & 2)
            </p>
          </div>

          <div className="my-4 flex justify-center ring-2 ring-unemi-blue/10 p-2 rounded-2xl bg-slate-50 page-break-inside-avoid max-w-md mx-auto">
            <img
              src="/unemi_cover_elearning_trends_challenges.png"
              alt="E-Learning Trends & Challenges"
              className="w-full h-auto object-contain rounded-xl shadow-md border border-slate-200"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="border-t border-slate-100 pt-6 mt-auto">
            <div className="grid grid-cols-2 gap-4 text-left text-xs text-slate-500 font-sans">
              <div>
                <p className="text-slate-400 font-mono text-[10px] uppercase tracking-wider font-semibold">ESTUDIANTE</p>
                <p className="text-sm font-extrabold text-[#004080]">Nohelia Dayanna Tuquinga Vinueza</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 font-mono text-[10px] uppercase tracking-wider font-semibold">TÍTULO ACADÉMICO</p>
                <p className="text-sm font-medium text-slate-800">Compendio Temático Universitario</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    // PAGE 2
    {
      number: 2,
      id: 'page-2',
      section: 'PRÓLOGO',
      title: 'Dedicatoria y Prólogo del Compendio',
      content: (
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-unemi-blue border-b pb-2 mb-4">Dedicatoria y Prólogo</h2>
          
          <div className="italic text-slate-600 border-l-4 border-unemi-orange pl-4 py-1 text-sm md:text-base leading-relaxed my-4">
            &ldquo;Este compendio de estudio está dedicado a mis profesores y compañeros de la Universidad Estatal de Milagro (UNEMI), quienes inspiran diariamente la búsqueda del conocimiento científico-tecnológico enfocado en el desarrollo educativo del Ecuador en el siglo XXI.&rdquo;
            <p className="text-xs font-bold text-[#333333] mt-2 text-right">— Nohelia T.</p>
          </div>

          <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-unemi-blue mt-4">PRÓLOGO ACADÉMICO</p>
            <p>
              La adopción masiva de entornos tecnológicos en la educación ha redefinido drásticamente la relación entre el docente, el estudiante y la ecología de la información. La virtualización curricular no consiste únicamente en exportar folletos analógicos al ciberespacio; por el contrario, demanda una reconstrucción metodológica profunda y coherente.
            </p>
            <p>
              Este documento técnico está diseñado sistemáticamente para servir de andamiaje cognitivo sobre los sistemas de e-learning. Su objetivo es mapear las bases conceptuales, los estándares mundiales de interoperabilidad y las tipologías de plataformas disponibles en la actualidad.
            </p>
            <p>
              El lector encontrará a lo largo de este compendio estructurado en 30 páginas un análisis riguroso de las unidades temáticas 1 y 2, complementado con infografías originales, elementos de comprobación activa y enlaces interactivos para una formación integral.
            </p>
          </div>
        </div>
      )
    },
    // PAGE 3
    {
      number: 3,
      id: 'page-3',
      section: 'ÍNDICE',
      title: 'Tabla de Contenidos Detallada (Págs. 1-30)',
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-extrabold text-[#004080] border-b pb-2 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-unemi-blue" />
            <span>📑 Tabla de Contenidos Temática</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono mb-2 uppercase">Índice Estructurado de 30 Páginas Numeradas</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2 text-xs text-slate-700 font-sans">
            <div>
              <p className="font-bold text-unemi-blue border-b pb-1 mb-2 uppercase tracking-wide">Unidad 1: Fundamentos del E-Learning</p>
              <ul className="space-y-1.5 list-none">
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(1)}>Pág. 1: Portada y Citación Académica</span><span className="font-bold text-unemi-blue">1</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(2)}>Pág. 2: Dedicatoria y Prólogo Educativo</span><span className="font-bold text-unemi-blue">2</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(3)}>Pág. 3: Tabla de Contenidos del Compendio</span><span className="font-bold text-unemi-orange">3</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(4)}>Pág. 4: Introducción General y Objetivos</span><span className="font-bold text-unemi-blue">4</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(5)}>Pág. 5: Unidad 1: El Ecosistema del E-Learning</span><span className="font-bold text-unemi-blue">5</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(6)}>Pág. 6: Tema 1.1: Integración de las TIC - Introd.</span><span className="font-bold text-unemi-blue">6</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(7)}>Pág. 7: Tema 1.1: Teorías del Aprendizaje Digital</span><span className="font-bold text-unemi-blue">7</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(8)}>Pág. 8: Tema 1.1: Redes y Connectivismo (Mapa)</span><span className="font-bold text-unemi-blue">8</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(9)}>Pág. 9: Tema 1.1: Flexibilidad y Propuesta de Valor</span><span className="font-bold text-unemi-blue">9</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(10)}>Pág. 10: Tema 1.2: Arquitectura del Contenido</span><span className="font-bold text-unemi-blue">10</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(11)}>Pág. 11: Tema 1.2: Modalidad Síncrona vs Asíncrona</span><span className="font-bold text-unemi-blue">11</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(12)}>Pág. 12: Tema 1.2: Los 8 Roles del Tutor Docente</span><span className="font-bold text-unemi-blue">12</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(13)}>Pág. 13: Tema 1.2: Simulador Práctico de Roles</span><span className="font-bold text-unemi-blue">13</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(14)}>Pág. 14: Tema 1.2: Estándares de Calidad ISTE</span><span className="font-bold text-unemi-blue">14</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(15)}>Pág. 15: Tema 1.3: Portales y Bibliotecas Digitales</span><span className="font-bold text-unemi-blue">15</span></li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-unemi-orange border-b pb-1 mb-2 uppercase tracking-wide">Unidad 2: Plataformas y Estándares</p>
              <ul className="space-y-1.5 list-none">
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(16)}>Pág. 16: Tema 1.3: Arquitectura Multilayer (Portal)</span><span className="font-bold text-unemi-blue">16</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(17)}>Pág. 17: Tema 1.3: Análisis de Portales Mundiales</span><span className="font-bold text-unemi-blue">17</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(18)}>Pág. 18: Tema 1.4: Redes Sociales y Web 2.0</span><span className="font-bold text-unemi-blue">18</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(19)}>Pág. 19: Tema 1.4: Modelo de Impacto Comparativo</span><span className="font-bold text-unemi-blue">19</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(20)}>Pág. 20: Tema 1.4: Netiquette, Taller y QR U1</span><span className="font-bold text-unemi-blue">20</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(21)}>Pág. 21: Unidad 2: Sistemas y Plataformas LMS</span><span className="font-bold text-unemi-blue">21</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(22)}>Pág. 22: Tema 2.1: Senda Evolutiva (E, B, M, U)</span><span className="font-bold text-unemi-blue">22</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(23)}>Pág. 23: Tema 2.1: Gamificación y Micro-learning</span><span className="font-bold text-unemi-blue">23</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(24)}>Pág. 24: Tema 2.2: Mecánicas de Operación de Portafolios</span><span className="font-bold text-unemi-blue">24</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(25)}>Pág. 25: Tema 2.2: Elementos de Retención Escolar</span><span className="font-bold text-unemi-blue">25</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(26)}>Pág. 26: Tema 2.3: Hábitat y Tipología de Plataformas</span><span className="font-bold text-unemi-blue">26</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(27)}>Pág. 27: Tema 2.3: Estándares e Interoperabilidad SCORM</span><span className="font-bold text-unemi-blue">27</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(28)}>Pág. 28: Tema 2.3: Matriz AIRDMA, Taller y QR U2</span><span className="font-bold text-unemi-blue">28</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(29)}>Pág. 29: Conclusiones, Preguntas de Discusión y Quiz</span><span className="font-bold text-unemi-blue">29</span></li>
                <li className="flex justify-between hover:text-unemi-orange border-b border-dotted border-slate-100 py-0.5"><span className="cursor-pointer" onClick={() => setCurrentPage(30)}>Pág. 30: Glosario Técnico y Referencias Bibliográficas</span><span className="font-bold text-unemi-orange">30</span></li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    // PAGE 4
    {
      number: 4,
      id: 'page-4',
      section: 'INTRODUCCIÓN',
      title: 'Introducción General y Objetivos Curriculares',
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h2 className="text-xl font-bold text-unemi-blue border-b pb-2 mb-4">Introducción y Objetivos</h2>
          
          <p className="font-bold text-[#333333]">CONTEXTO DE ESTUDIO</p>
          <p>
            La transición de la sociedad de la información a la sociedad del aprendizaje ha convertido al e-learning en la columna vertebral de la educación contemporánea. No podemos ignorar que la tecnología educativa ha dejado de ser un recurso accesorio para convertirse en el hábitat natural del estudiante.
          </p>

          <p className="font-bold text-[#333333]">OBJETIVOS ACADÉMICOS ESPECÍFICOS</p>
          <ul className="space-y-2.5 list-disc pl-5">
            <li>
              <strong className="text-unemi-blue">Objetivo de la Unidad 1</strong>: Identificar los componentes esenciales del ecosistema digital, analizando la evolución del rol docente, los portales informativos de red y el valor socializador didáctico de las comunidades de práctica Web 2.0.
            </li>
            <li>
              <strong className="text-unemi-blue">Objetivo de la Unidad 2</strong>: Clasificar y comparar técnicamente las tipologías de plataformas virtuales (LMS, SaaS, CMS) desmitificando costes, grados de adaptabilidad local y estándares de compatibilidad interactiva (como SCORM).
            </li>
          </ul>

          <p className="font-bold text-[#333333] mt-4">METODOLOGÍA DE COMPROBACIÓN</p>
          <p>
            Para garantizar la máxima transferencia de aprendizaje, a lo largo de este compendio estructurado de 30 páginas se alternan marcos de texto teóricos con simuladores prácticos activos situacionales. Asimismo, se incorporan códigos QR directos a los cuadernos digitales interactivos de evaluación de la UNEMI.
          </p>
        </div>
      )
    },
    // PAGE 5
    {
      number: 5,
      id: 'page-5',
      section: 'UNIT 1_ECO',
      title: 'Unit 1: Structure of the E-Learning Ecosystem',
      content: (
        <div className="space-y-4">
          <div className="bg-[#E6F0FA] text-[#004080] border-l-4 border-unemi-blue p-4 rounded-r-lg mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-slate-500">Unit One Overview</span>
            <h3 className="text-base md:text-lg font-bold">Essential Aspects and Components of E-Learning</h3>
          </div>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            The digital learning ecosystem harmoniously integrates technological infrastructures with pedagogical foundations to ensure knowledge acquisition. The following infographic explains the interaction of these key actors:
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/unit1_elearning_ecosystem_pedagogical_foundations.png"
              alt="E-Learning Ecosystem"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-white border-l-4 border-unemi-orange p-3.5 rounded-r-lg shadow-2xs text-xs text-slate-600 leading-relaxed mt-2">
            <h4 className="font-bold text-unemi-blue mb-1 uppercase tracking-wide">Ecosystem Dimensions:</h4>
            <p>1. <strong>Learning Content</strong>: Didactically designed in rich hypermedia formats.</p>
            <p>2. <strong>Technological Platform</strong>: Interactive support software regulating user analytics.</p>
            <p>3. <strong>Virtual Tutor and Students</strong>: Key agents of dynamic asynchronous conversations.</p>
          </div>
        </div>
      )
    },
    // PAGE 6
    {
      number: 6,
      id: 'page-6',
      section: 'TOPIC 1.1_A',
      title: 'Topic 1.1: ICT Integration in Education - Concept',
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.1</span>
            <span>ICT Integration and the Educational System (Part I)</span>
          </h3>

          <p>
            Digital literacy transcends mere instrumental training in office tools. Systematically integrating Information and Communication Technologies (ICT) in contemporary universities demands weaving curated pedagogy with interactive resources.
          </p>

          <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 my-3">
            <p className="font-bold text-unemi-blue mb-2 text-xs uppercase tracking-wide">Dimensions of Digital Learning:</p>
            <div className="space-y-3">
              <div className="flex gap-2 items-start text-xs">
                <span className="text-unemi-orange font-bold">•</span>
                <p><strong>Cognitive Autonomy</strong>: The virtual student takes direct control of their study tempo, flexibly researching educational sources.</p>
              </div>
              <div className="flex gap-2 items-start text-xs">
                <span className="text-unemi-orange font-bold">•</span>
                <p><strong>Digital Equity</strong>: Overcoming geographical and socioeconomic barriers in Ecuador through offline-first, downloadable, and responsive content.</p>
              </div>
              <div className="flex gap-2 items-start text-xs">
                <span className="text-unemi-orange font-bold">•</span>
                <p><strong>Media Literacy</strong>: Developing critical thinking and filtering skills relative to the massive flow of information on the Internet.</p>
              </div>
            </div>
          </div>

          <p>
            ICT implementation radically reshapes traditional analog lesson plans, welcoming collaborative dynamics that were unthinkable a decade ago in physical classrooms.
          </p>
        </div>
      )
    },
    // PAGE 7
    {
      number: 7,
      id: 'page-7',
      section: 'TOPIC 1.1_B',
      title: 'Topic 1.1: Digital Learning Theories',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.1</span>
            <span>Digital Learning Theories (Part II)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Virtual learning platforms rest on solid epistemological foundations that support the co-creation of knowledge distributed over hypermedia networks.
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/elearning_cognitivism_connectivism_constructivism.png"
              alt="Learning Theories"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-2 text-xs text-slate-600 leading-normal font-medium">
            <p><strong>Digital Cognitivism</strong>: Explains how the mind processes structured, complex interactive multimedia stimuli.</p>
            <p><strong>Constructivism</strong>: Conceptualizes the student as an architect who shapes their understanding through empirical and reflective conceptual quizzes.</p>
            <p><strong>Connectivism (George Siemens)</strong>: Postulates that learning occurs non-linearly, distributed across networks and nourished by multiple dynamic technological nodes.</p>
          </div>
        </div>
      )
    },
    // PAGE 8
    {
      number: 8,
      id: 'page-8',
      section: 'TOPIC 1.1_C',
      title: 'Topic 1.1: Connectivist Networks (Mind Map)',
      content: (
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.1</span>
            <span>Connectivist Networks and Mind Map (Part III)</span>
          </h3>

          <p className="text-xs text-slate-700 leading-relaxed">
            To explore the articulation between interactive technology and educational learning theories in the virtual ecosystem, we invite you to examine and directly interact with our digital panel:
          </p>

          <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-2xs">
            <InteractiveMindMap />
          </div>

          <p className="text-[10px] text-slate-500 font-mono mt-1 leading-normal italic">
            *Interactive Guide: Click on each node of the mind map on your screen to expand theoretical details and connect critical reflections.*
          </p>
        </div>
      )
    },
    // PAGE 9
    {
      number: 9,
      id: 'page-9',
      section: 'TOPIC 1.1_D',
      title: 'Topic 1.1: Value Proposition, Flexibility and Boundaries',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.1</span>
            <span>Value Proposition, Flexibility and Boundaries (Part IV)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            The greatest competitive advantage of e-learning lies in its multifactorial value proposition: it permits aligning learning rhythms with active professional demands.
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/value_proposition_flexibility_borderless_self_paced.png"
              alt="E-Learning Value Proposition"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs md:text-sm text-slate-600 leading-relaxed mt-2">
            Spatial flexibility tears down border barriers, enabling Ecuadorian students from UNEMI to asynchronously share knowledge with researchers and experts all over the world without expensive travel.
          </p>
        </div>
      )
    },
    // PAGE 10
    {
      number: 10,
      id: 'page-10',
      section: 'TOPIC 1.2_A',
      title: 'Topic 1.2: Digital Content Architecture',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.2</span>
            <span>Pedagogical Content Creation (Part I)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Instructional design demands structuring with scientific rigor the learning paths of virtual students. The following infographic outlines the methodological path to achieve this:
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/digital_content_architecture_web_hosting_multimedia.png"
              alt="Digital Content Architecture"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mt-1">
            Successful design begins by systematically integrating clear course competency objectives, hosting on robust servers capable of preserving access during user peaks, and multimedia support guided by clear usability paths.
          </p>
        </div>
      )
    },
    // PAGE 11
    {
      number: 11,
      id: 'page-11',
      section: 'TOPIC 1.2_B',
      title: 'Topic 1.2: Synchronous vs. Asynchronous Modes',
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.2</span>
            <span>Asynchronous and Synchronous Dynamics (Part II)</span>
          </h3>

          <p>
            Determining the right proportion and usage of deferred-time tools (asynchronous) and shared-real-time tools (synchronous) conditions the active student retention rate.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-xs">
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
              <p className="font-bold text-unemi-orange uppercase mb-1 font-mono">Asynchronous Spaces</p>
              <p className="text-slate-700 leading-relaxed">
                Allow the gradual digestion of complex theories, filtered analytical participation in written debates via wikis, and periodic self-assessments without direct teacher clocks.
              </p>
            </div>
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl">
              <p className="font-bold text-unemi-blue uppercase mb-1 font-mono">Synchronous Spaces</p>
              <p className="text-slate-700 leading-relaxed">
                Ideal for the immediate resolution of complex conceptual blocks, consolidating social bonds of group belonging through dialogue and videoconferencing.
              </p>
            </div>
          </div>

          <p>
            The wise virtual tutor does not suffocate students with daily marathon videoconferences; they strategically distribute efforts across ordered prior readings and fluid debates guided by specific milestones of academic contribution.
          </p>
        </div>
      )
    },
    // PAGE 12
    {
      number: 12,
      id: 'page-12',
      section: 'TOPIC 1.2_C',
      title: 'Topic 1.2: The 8 Roles of the Teaching Tutor',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.2</span>
            <span>The 8 Roles of the Virtual Instructor (Part III)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            The 21st-century educator abdicates the podium of infallible lecturer and assumes multifaceted, cross-cutting roles essential for success in virtual computer-backed learning:
          </p>

          <div className="my-[5px] rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/online_instructor_8_roles.png"
              alt="8 Instructor Roles"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mt-1">
            Pedagogical, technical, organizational, social, analytics evaluator, and direct feedback roles must be carefully balanced to prevent students from experiencing dropouts or digital isolation.
          </p>
        </div>
      )
    },
    // PAGE 13
    {
      number: 13,
      id: 'page-13',
      section: 'TOPIC 1.2_D',
      title: 'Topic 1.2: Teaching Roles Simulator',
      content: (
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.2</span>
            <span>Teaching Performance and Roles Simulator (Part IV)</span>
          </h3>

          <p className="text-xs text-slate-700 leading-relaxed md:text-sm">
            To evaluate how each dimension of the tutor operates in practical scenarios within the UNEMI digital campus, interact with the following academic decision simulator:
          </p>

          <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-2xs">
            <InstructorRoles />
          </div>

          <p className="text-[10px] text-slate-500 font-mono italic mt-1 leading-normal">
            *Situational Simulator: Click on each teaching role to assess its direct academic impact field, and consider which curricular specialty requires your focus.*
          </p>
        </div>
      )
    },
    // PAGE 14
    {
      number: 14,
      id: 'page-14',
      section: 'TOPIC 1.2_E',
      title: 'Topic 1.2: ISTE Quality Standards',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.2</span>
            <span>ISTE Educational Technology Quality Standards (Part V)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Methodological standardization guarantees that online learning experiences are robust. The international ISTE educational technology standards organize professional requirements into well-defined pyramids:
          </p>

          <div className="my-[10px] rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/iste_standards_digital_age_teaching.png"
              alt="ISTE Standards"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mt-1">
            Ensuring that educators master these critical competencies dramatically improves results in virtual university licensing audits.
          </p>
        </div>
      )
    },
    // PAGE 15
    {
      number: 15,
      id: 'page-15',
      section: 'TOPIC 1.3_A',
      title: 'Topic 1.3: Digital Portals and Libraries',
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.3</span>
            <span>Educational Portals and Cultural Spaces (Part I)</span>
          </h3>

          <p>
            Institutional educational portals act as curricular centralizers that guarantee conceptual accuracy, scientific citation, and filtering relative to open web repositories.
          </p>

          <div className="bg-[#FFF3E0] border border-orange-200 rounded-xl p-4 my-2">
            <p className="font-bold text-unemi-orange mb-1 text-xs uppercase font-mono">EXTRAORDINARY ADDED VALUE:</p>
            <p className="text-slate-700 leading-relaxed text-xs">
              Unlike flat analog repositories, contemporary portals offer integrated three-dimensional simulators, interactive virtual laboratories, and dynamically connected hypermedia libraries that catalyze higher education students' desire for research.
            </p>
          </div>

          <p>
            By integrating a prestigious educational portal in UNEMI classes, the instructor stimulates high-level self-regulated learning and fosters student familiarity with verified scientific and methodological bases.
          </p>
        </div>
      )
    },
    // PAGE 16
    {
      number: 16,
      id: 'page-16',
      section: 'TOPIC 1.3_B',
      title: 'Topic 1.3: Portal Architecture (Explorer)',
      content: (
        <div className="space-y-2">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.3</span>
            <span>Multi-layered Portal Support and Architecture (Part II)</span>
          </h3>

          <p className="text-xs text-slate-700 leading-relaxed md:text-sm">
            To grasp the computer and logistics structure behind a world-leading virtual portal, try interacting with our multi-layered explorer:
          </p>

          <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-2xs">
            <PortalStructure />
          </div>

          <p className="text-[10px] text-slate-500 font-mono italic mt-1 leading-normal">
            *Interaction Guide: Navigate through the top tabs on your screen to reveal the operational functionality of each layer or stratum.*
          </p>
        </div>
      )
    },
    // PAGE 17
    {
      number: 17,
      id: 'page-17',
      section: 'TOPIC 1.3_C',
      title: 'Topic 1.3: Analysis of High-Impact Global Portals',
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.3</span>
            <span>Global Case Studies Analysis (Part III)</span>
          </h3>

          <p>
            Analyzing highly successful real-world cases helps us understand the boundaries of interactive e-learning:
          </p>

          <div className="space-y-4 my-2 text-xs">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
              <p className="font-extrabold text-unemi-blue mb-1">1. Google Earth in Earth Sciences</p>
              <p className="text-slate-600 leading-relaxed">
                Revoluzionizes geographic studies, allowing real-time mapping from microscopic to planetary scales with extremely high-resolution feeds.
              </p>
            </div>
            
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
              <p className="font-extrabold text-[#004080] mb-1">2. National Geographic Education</p>
              <p className="text-slate-600 leading-relaxed">
                Centralizes rich scientific databases for young biological researchers with access to high-level interactive heuristic simulation tools.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl">
              <p className="font-extrabold text-unemi-blue mb-1">3. The Wonderment</p>
              <p className="text-slate-600 leading-relaxed">
                Fosters open student collaboration on a global network, connecting problems of different ethnicities using student photo-reporting.
              </p>
            </div>
          </div>
        </div>
      )
    },
    // PAGE 18
    {
      number: 18,
      id: 'page-18',
      section: 'TOPIC 1.4_A',
      title: 'Topic 1.4: Social Networks and Web 2.0 in Education',
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.4</span>
            <span>Social Networks as Learning Spaces (Part I)</span>
          </h3>

          <p>
            Web 2.0 marked the historical end of flat, one-way static browsing. With it, students shifted from being passive receivers to active creators and disseminators of scientific content.
          </p>

          <p>
            Social communication networks, when managed with proper pedagogical guidelines, break down student academic isolation and boost immediate feedback among university peers in record time.
          </p>

          <div className="bg-[#FFF3E0] border border-orange-200 rounded-xl p-4">
            <p className="font-bold text-unemi-orange text-xs uppercase font-mono mb-1">COMMUNITIES OF PRACTICE (COP):</p>
            <p className="text-slate-700 leading-relaxed text-xs">
              Subtly connected, they facilitate asynchronous debates enriched with memes of educational value, carefully curated summary threads, and suggested bibliographies that empower the global UNEMI academic community.
            </p>
          </div>
        </div>
      )
    },
    // PAGE 19
    {
      number: 19,
      id: 'page-19',
      section: 'TOPIC 1.4_B',
      title: 'Topic 1.4: Social Networks Comparative Matrix',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.4</span>
            <span>Comparative Matrix of Connected Pedagogy (Part II)</span>
          </h3>

          <p className="text-xs text-slate-700 leading-relaxed md:text-sm">
            Each platform hosts unique sociological dynamics that determine its best didactic use in the virtual advisor's course planning:
          </p>

          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs my-1">
            <table className="w-full text-left font-sans text-xs">
              <thead>
                <tr className="bg-unemi-blue text-white">
                  <th className="py-2.5 px-3 font-bold uppercase tracking-wider">Social Network</th>
                  <th className="py-2.5 px-3 font-bold uppercase tracking-wider">Operational Speciality</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 leading-relaxed">
                {socialNetworks.map((net, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50">
                    <td className="py-2.5 px-3 font-bold text-unemi-blue">
                      {net.platform}
                    </td>
                    <td className="py-2.5 px-3 text-slate-600">
                      {net.bestFor}. <span className="italic text-slate-500 font-sans">{net.learningUse}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    },
    // PAGE 20
    {
      number: 20,
      id: 'page-20',
      section: 'TOPIC 1.4_C',
      title: 'Topic 1.4: Netiquette, Coexistence and Unit 1 Workbook',
      content: (
        <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">1.4</span>
            <span>Netiquette and Unit 1 Evaluative Workshop (Part III)</span>
          </h3>

          <p>
            Social learning across networks only thrives when a healthy virtual coexistence is guaranteed under strict universal protocols of courtesy and mutual respect (Netiquette).
          </p>

          <div className="bg-purple-50/80 rounded-2xl border-2 border-purple-200 p-5 flex flex-col md:flex-row items-center justify-between gap-6 page-break-inside-avoid shadow-xs select-all">
            <div className="space-y-2 max-w-md">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-purple-100 text-purple-700 px-2.5 py-1 rounded-full border border-purple-200 inline-flex items-center gap-1.5 font-mono">
                <FileText className="w-3 h-3 text-purple-700 animate-pulse" />
                <span>Google Forms Activity</span>
              </span>
              <h4 className="text-base font-extrabold text-purple-950 font-display">Unit 1 Syllabus – Workbook</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit your project progress, assimilation logs, and reflective journals corresponding to Unit 1. Scan the QR code or click the interactive link to open the authorized UNEMI worksheet.
              </p>
            </div>
            <div className="shrink-0">
              <QRCodeElement endpoint="https://forms.gle/XHFbdYtf8crUYDcn6" textLabel="Unit 1 Form" primaryColor="8e24aa" />
            </div>
          </div>
        </div>
      )
    },
    // PAGE 21
    {
      number: 21,
      id: 'page-21',
      section: 'UNIT 2_INI',
      title: 'Unit 2: E-Learning Systems and Platforms',
      content: (
        <div className="space-y-4">
          <div className="bg-[#E6F0FA] text-[#004080] border-l-4 border-unemi-blue p-4 rounded-r-lg mb-4">
            <span className="text-[10px] font-bold uppercase tracking-widest font-mono text-slate-500">Unit Two Overview</span>
            <h3 className="text-base md:text-lg font-bold">Modern E-Learning Platforms and Systems</h3>
          </div>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Unit 2 delves into the core software that regulates educational interactions on the Internet, mapping its technical and functional requirements analytically:
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/modern_educational_platform_core_concept.png"
              alt="E-Learning Platforms"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mt-2 font-medium">
            Understanding that an interactive modern virtual platform unifies user administration, agile digital packaging (like SCORM), and interoperability allows us to predict corporate learning success.
          </p>
        </div>
      )
    },
    // PAGE 22
    {
      number: 22,
      id: 'page-22',
      section: 'TOPIC 2.1_A',
      title: 'Topic 2.1: Evolutionary Path towards U-Learning',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">2.1</span>
            <span>The Evolutionary Senda of E, B, M towards U-Learning (Part I)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Technology evolves rapidly. Analyzing the line of paradigm milestones in e-learning reveals leaps in flexibility and knowledge portability:
          </p>

          <div className="my-[5px] rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/evolutionary_trajectory_e_b_m_u.png"
              alt="Visual Trajectory"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-500 font-mono italic mb-2">Interactive Life Line of Educational Paradigms:</p>
          <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-2xs">
            <TimelineEvolution />
          </div>
        </div>
      )
    },
    // PAGE 23
    {
      number: 23,
      id: 'page-23',
      section: 'TOPIC 2.1_B',
      title: 'Topic 2.1: Gamification, Micro-learning and Trends',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">2.1</span>
            <span>Gamification and Micro-learning Trends (Part II)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            The future of corporate and university training is shifting towards agile formats that tackle virtual cognitive overloads head-on:
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/elearning_trends_blended_micro_gamification.png"
              alt="E-Learning Trends"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-600 leading-relaxed mt-1">
            Combining micro-learning (knowledge parsed into 5-minute pieces), healthy and interactive educational gamification, and automated predictive data analytics successfully mitigates university course dropout rates.
          </p>
        </div>
      )
    },
    // PAGE 24
    {
      number: 24,
      id: 'page-24',
      section: 'TOPIC 2.2_A',
      title: 'Topic 2.2: Operating Mechanics of Portals and Platforms',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">2.2</span>
            <span>Mechanics and Core Actors in E-Learning (Part I)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            An effective virtual learning platform harmoniously coordinates three independent primary roles: students, teaching advisors, and IT system administrators.
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/platform_mechanics_features_actors_teacher_learner.png"
              alt="Platform Mechanics"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-650 leading-relaxed mt-2 font-medium">
            Each actor accesses a unique functional range: the IT administrator monitors databases; the professor uploads educational rubrics; the student interacts and submits asynchronous reviews.
          </p>
        </div>
      )
    },
    // PAGE 25
    {
      number: 25,
      id: 'page-25',
      section: 'TOPIC 2.2_B',
      title: 'Topic 2.2: Student Retention and Gamification',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">2.2</span>
            <span>Gamification and Student Engagement Tools (Part II)</span>
          </h3>

          <p className="text-xs text-slate-755 font-medium md:text-sm leading-relaxed">
            Integrating cutting-edge interactive learning tools in higher education encourages group-belonging motivation and collects precise progress metrics:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2 text-xs">
            {engagementTools.map((tool, idx) => (
              <div key={idx} className="bg-white border border-slate-200 p-4 rounded-xl shadow-3xs flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-unemi-blue border-b pb-1 mb-2 uppercase">{tool.name}</h4>
                  <p className="text-[10px] text-unemi-orange font-mono font-bold mb-2">{tool.type}</p>
                  <p className="text-slate-600 leading-relaxed">{tool.function}</p>
                </div>
                <div className="bg-emerald-55 text-emerald-950 border border-emerald-100 p-2.5 rounded-lg mt-3 text-[10px] uppercase font-semibold text-center italic">
                  {tool.metrics}
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    // PAGE 26
    {
      number: 26,
      id: 'page-26',
      section: 'TOPIC 2.3_A',
      title: 'Topic 2.3: Habitat and Typology of Platforms',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">2.3</span>
            <span>Educational Habitat and Platform Typology (Part I)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            Selecting the ideal primary platform requires rigorously weighing localized maintenance budgets, user database control or sovereignty, and desired scalability.
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/typology_matrix_lms_moocs_lxs_apps.png"
              alt="Typology Habitat Matrix"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-655 leading-relaxed mt-1">
            Analyzing whether a project requires a robust traditional university LMS, a massive MOOC platform, or a native responsive mobile application saves educational institutions millions in setup costs.
          </p>
        </div>
      )
    },
    // PAGE 27
    {
      number: 27,
      id: 'page-27',
      section: 'TOPIC 2.3_B',
      title: 'Topic 2.3: SCORM Standards and Interoperability',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">2.3</span>
            <span>Academic Interoperability and Standardization (Part II)</span>
          </h3>

          <p className="text-xs md:text-sm text-slate-700 leading-relaxed">
            To avoid vendor lock-in and ensure that online courses can be migrated freely between platform providers, standard packaging protocols are worldwide mandatory requirements:
          </p>

          <div className="my-2 rounded-2xl overflow-hidden shadow-md border border-slate-200 p-2 bg-slate-50 ring-2 ring-unemi-blue/5 page-break-inside-avoid max-w-lg mx-auto">
            <img
              src="/software_platform_typologies_lms_cms_lxp_scorm.png"
              alt="Interoperability Standards SCORM xAPI"
              className="w-full h-auto object-contain rounded-xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="text-xs text-slate-650 leading-relaxed mt-2 font-semibold">
            The universal SCORM protocol and experience APIs (xAPI) ensure that the learner's progress, grades, and formatting interactions are recorded with complete technical transparency.
          </p>
        </div>
      )
    },
    // PAGE 28
    {
      number: 28,
      id: 'page-28',
      section: 'TOPIC 2.3_C',
      title: 'Topic 2.3: AIRDMA Matrix, Workshop and Unit 2 QR',
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-unemi-blue font-display flex items-center gap-2 border-b pb-2">
            <span className="bg-unemi-blue text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold">2.3</span>
            <span>Platform Statistics and Unit 2 Workshop (Part III)</span>
          </h3>

          <div className="grid grid-cols-2 gap-4 my-2 max-w-lg mx-auto page-break-inside-avoid">
            <div className="rounded-xl overflow-hidden shadow border border-slate-200 p-1.5 bg-slate-50">
              <img
                src="/nine_types_of_software_platforms.png"
                alt="Nine Types of Platforms"
                className="w-full h-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow border border-slate-200 p-1.5 bg-slate-50">
              <img
                src="/standardization_benefits_airdma_matrix.png"
                alt="AIRDMA Standardization"
                className="w-full h-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="bg-purple-50/80 rounded-2xl border-2 border-purple-200 p-4 flex flex-col md:flex-row items-center justify-between gap-4 page-break-inside-avoid shadow-xs select-all">
            <div className="space-y-2 max-w-md">
              <span className="text-[10px] font-extrabold uppercase tracking-wider bg-purple-100 text-purple-700 px-2 rounded-full border border-purple-200 inline-flex items-center gap-1.5 font-mono">
                <FileText className="w-3 h-3 text-purple-700 animate-pulse" />
                <span>Google Forms Activity</span>
              </span>
              <h4 className="text-base font-extrabold text-purple-950 font-display">Unit 2 Syllabus – Workbook</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Submit your direct feedback, analytical field notes, and Unit 2 milestones. Scan the QR code or click on the interactive datasheet link.
              </p>
            </div>
            <div className="shrink-0">
              <QRCodeElement endpoint="https://forms.gle/XUkNHQG6PLJB8yUj6" textLabel="Unit 2 Form" primaryColor="8e24aa" />
            </div>
          </div>
        </div>
      )
    },
    // PAGE 29
    {
      number: 29,
      id: 'page-29',
      section: 'CONCLUSIONS',
      title: 'Strategic Conclusions, Reflections and Quiz',
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-unemi-blue border-b pb-2 mb-2 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-unemi-orange animate-bounce" />
            <span>Integrative Educational Reflections</span>
          </h2>

          <div className="space-y-3 text-xs md:text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-unemi-blue">ACADEMIC DECISION MAKING:</p>
            
            <div className="bg-slate-50 border border-slate-150 p-3 rounded-lg text-xs leading-normal">
              <p className="font-semibold text-slate-800">1. Which platform architecture do you recommend for a massive asynchronous program and why?</p>
              <p className="text-slate-500 mt-1">We recommend Moodle or Canvas Cloud (SaaS) for their robustness, SCORM compliance, scaling, and the ability to process telemetries of thousands of learners in real-time.</p>
            </div>

            <div className="bg-slate-50 border border-slate-150 p-3 rounded-lg text-xs leading-normal">
              <p className="font-semibold text-slate-800">2. In what ways can social networks be integrated into the syllabus safely?</p>
              <p className="text-slate-500 mt-1">Through private projects, guided laboratory history portfolios, and moderated debates under rigorous ethical guidelines (Netiquette).</p>
            </div>
          </div>

          <div className="mt-2 border border-slate-150 rounded-xl bg-[#FFF3E0]/35 p-3.5 shadow-3xs">
            <InteractiveQuiz />
          </div>
        </div>
      )
    },
    // PAGE 30
    {
      number: 30,
      id: 'page-30',
      section: 'ANNEXES',
      title: 'Glossary of Terms, Readings and APA Bibliography',
      content: (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-[#004080] border-b pb-2 flex items-center gap-2">
            <Layers className="w-5 h-5 text-unemi-blue" />
            <span>Technical Glossary &amp; APA 7 Bibliography</span>
          </h2>

          <p className="text-xs text-slate-500 italic">
            Authorized collection of logistic terms for pedagogical directors and official references:
          </p>

          <div className="border border-slate-200 rounded-xl p-3 bg-white shadow-3xs">
            <GlossaryView />
          </div>

          <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl text-xs leading-relaxed mt-2 font-sans">
            <p className="font-extrabold text-unemi-blue mb-2 uppercase tracking-wide">Official Bibliographic References (APA VII):</p>
            <div className="space-y-2 text-slate-600 max-h-[150px] overflow-y-auto pr-2 pl-3 border-l-2 border-unemi-orange">
              <p style={{ paddingLeft: '1.5rem', textIndent: '-1.5rem' }}>
                Academic Journal of Educational Technology. (2021). Entering the third generation of e-learning: Paradigms &amp; best practices. <span className="italic">Systems</span>, <span className="italic">50</span>(1), 45-62.
              </p>
              <p style={{ paddingLeft: '1.5rem', textIndent: '-1.5rem' }}>
                International Society for Technology in Education (ISTE). (2020). <span className="italic">International technology standards for students, educators, and leaders</span>. ISTE.
              </p>
              <p style={{ paddingLeft: '1.5rem', textIndent: '-1.5rem' }}>
                UNESCO. (2019). <span className="italic">Impact of modern technology and open educational resources (OER) in Latin America: Studies in regional educational policies</span>. UNESCO Regional Office.
              </p>
              <p style={{ paddingLeft: '1.5rem', textIndent: '-1.5rem' }}>
                Zambrano Pachay, J. (2025). <span className="italic">Aspectos esenciales y componentes del e-learning: Integración de las TIC en la educación</span> [Supporting Curricular Material]. Universidad Estatal de Milagro - UNEMI.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentPageData = pages[currentPage - 1];

  const navigateToPage = (pageNum: number) => {
    if (pageNum >= 1 && pageNum <= 30) {
      setCurrentPage(pageNum);
      // Automatically scroll to the book container to ensure smooth reading experience on smaller viewports
      const containerElement = document.getElementById('book-reader-view-heading');
      if (containerElement) {
        containerElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans antialiased selection:bg-unemi-orange selection:text-white print:bg-white print:text-black">
      {/* GLOBAL BANNER NO-PRINT */}
      <header className="no-print bg-unemi-blue text-white py-3.5 px-6 sticky top-0 z-50 shadow-md border-b-2 border-unemi-orange">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center border-2 border-unemi-orange font-black text-unemi-blue text-xs shadow-md">
              UNEMI
            </div>
            <div>
              <h1 className="text-sm font-black tracking-tight font-display text-white">
                Curricular Compendium: E-Learning Systems
              </h1>
              <p className="text-[10px] text-slate-200 uppercase tracking-widest font-bold">
                Units 1 & 2 • Nohelia Dayanna Tuquinga Vinueza
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* View Mode Controller */}
            <div className="bg-slate-800/80 p-1 rounded-lg border border-slate-700 inline-flex">
              <button
                onClick={() => setViewMode('book')}
                className={`px-3 py-1.5 rounded text-xs font-bold font-display cursor-pointer transition-all flex items-center gap-1.5 ${
                  viewMode === 'book'
                    ? 'bg-unemi-blue text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                }`}
                title="Read page by page as an official document"
              >
                <Book className="w-3.5 h-3.5" />
                <span>Book Mode (30 Pages)</span>
              </button>
              <button
                onClick={() => setViewMode('scroll')}
                className={`px-3 py-1.5 rounded text-xs font-bold font-display cursor-pointer transition-all flex items-center gap-1.5 ${
                  viewMode === 'scroll'
                    ? 'bg-unemi-blue text-white shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/60'
                }`}
                title="View all 30 structured pages in sequence"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Full View (PDF)</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* BODY STAGE */}
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 relative">
        
        {/* SIDEBAR NAVIGATION INDEX (BOOK VIEW MODE ONLY - HIDDEN ON PRINT) */}
        {viewMode === 'book' && (
          <aside className="no-print lg:col-span-3 bg-slate-850 border border-slate-800 rounded-2xl p-4 h-[calc(100vh-120px)] overflow-y-auto sticky top-24 shadow-lg scrollbar-thin">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
              <span className="text-[#999999] hover:text-white font-black text-xs font-mono uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-4 h-4 text-unemi-orange animate-pulse" />
                <span>Compendium Index</span>
              </span>
              <span className="bg-unemi-orange/25 border border-unemi-orange/30 text-unemi-orange text-[10px] font-bold px-2.5 py-0.5 rounded-full font-mono">
                30 Pages
              </span>
            </div>

            <div className="space-y-1.5 font-sans">
              {pages.map((p) => (
                <button
                  key={p.number}
                  onClick={() => navigateToPage(p.number)}
                  className={`w-full text-left p-2.5 rounded-xl border transition-all flex gap-3 text-xs items-center cursor-pointer ${
                    currentPage === p.number
                      ? 'bg-unemi-blue/25 border-unemi-blue text-white font-extrabold shadow-md'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/80'
                  }`}
                >
                  <span className={`w-5.5 h-5.5 shrink-0 rounded-lg flex items-center justify-center font-bold font-mono text-[10px] ${
                    currentPage === p.number
                      ? 'bg-unemi-orange text-white'
                      : 'bg-slate-800 text-slate-500'
                  }`}>
                    {p.number}
                  </span>
                  <div className="truncate">
                    <p className="font-bold mb-0.5" style={{ color: currentPage === p.number ? '#88bbf2' : '' }}>
                      {p.section}
                    </p>
                    <p className="truncate text-[10px] text-slate-400 font-medium">
                      {p.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </aside>
        )}

        {/* COMPENDIO WRAPPER */}
        <div className={`col-span-1 lg:col-span-9 flex flex-col items-center ${viewMode === 'scroll' ? 'lg:col-span-12' : ''}`}>
          
          {/* TOP CONTROLLERS AND PROGRESS FOR BOOK READER MODE */}
          {viewMode === 'book' && (
            <div className="no-print w-full max-w-3xl flex flex-col md:flex-row justify-between items-center gap-3 mb-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-4 text-sm shadow-xs">
              <div className="flex gap-2 text-slate-350 shrink-0 select-none">
                <button
                  onClick={() => navigateToPage(1)}
                  disabled={currentPage === 1}
                  className="p-2 border border-slate-700 bg-slate-800 hover:bg-slate-700 rounded-lg disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="First page"
                >
                  <ChevronsLeft className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => navigateToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 border border-slate-700 bg-slate-800 hover:bg-slate-700 rounded-lg disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Previous page"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Progress and Dropdown */}
              <div className="flex flex-col items-center w-full max-w-xs gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 font-mono">Go to page:</span>
                  <select
                    value={currentPage}
                    onChange={(e) => navigateToPage(Number(e.target.value))}
                    className="bg-slate-800 border-2 border-slate-700 rounded-lg text-white font-mono font-bold text-xs p-1 cursor-pointer focus:border-unemi-orange max-w-[80px]"
                  >
                    {pages.map((p) => (
                      <option key={p.number} value={p.number}>
                        Page {p.number}
                      </option>
                    ))}
                  </select>
                  <span className="text-xs font-bold text-slate-300 font-mono font-medium">of 30</span>
                </div>
                {/* Visual completion progress bar */}
                <div className="w-full bg-slate-700/80 h-1.5 rounded-full overflow-hidden mt-1 text-center">
                  <div 
                    className="bg-unemi-orange h-full transition-all duration-300"
                    style={{ width: `${(currentPage / 30) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex gap-2 text-slate-350 shrink-0 select-none">
                <button
                  onClick={() => navigateToPage(currentPage + 1)}
                  disabled={currentPage === 30}
                  className="p-2 border border-slate-700 bg-slate-800 hover:bg-slate-700 rounded-lg disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Next page"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
                <button
                  onClick={() => navigateToPage(30)}
                  disabled={currentPage === 30}
                  className="p-2 border border-slate-700 bg-slate-800 hover:bg-slate-700 rounded-lg disabled:opacity-30 disabled:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Last page"
                >
                  <ChevronsRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>
          )}

          {/* PAGE SHEET STAGE */}
          <div className="w-full max-w-3xl flex flex-col gap-8 print:w-full print:max-w-none">
            
            {/* BOOK VIEW MODE */}
            {viewMode === 'book' ? (
              <main
                id="book-reader-view-heading"
                className="bg-white text-[#333333] shadow-2xl border border-slate-200/40 rounded-3xl min-h-[95vh] flex flex-col justify-between p-6 sm:p-10 md:p-14 relative print:shadow-none print:border-none print:p-0 print:min-h-0"
              >
                {/* Academic Header */}
                <header className="border-b border-slate-100 pb-3 mb-6 flex justify-between items-center text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                  <span>UNEMI</span>
                  <span className="text-unemi-blue">{currentPageData.section}</span>
                </header>

                {/* Page content */}
                <div className="grow flex flex-col justify-center py-4">
                  {currentPageData.content}
                </div>

                {/* Page Footer */}
                <footer className="border-t border-slate-100 pt-3 mt-6 flex justify-between items-center text-[10px] font-bold text-slate-400 font-mono">
                  <span>Nohelia Dayanna Tuquinga Vinueza</span>
                  <span className="text-unemi-orange bg-unemi-light-orange/60 px-2 py-0.5 rounded">
                    PAGE {currentPageData.number} OF 30
                  </span>
                </footer>
              </main>
            ) : (
              /* CONTINUOUS SCROLL VIEW / PRINT PREVIEW MODE */
              <div className="space-y-6 w-full print:space-y-0 print:gap-0">
                {pages.map((p) => (
                  <main
                    key={p.number}
                    className="bg-white text-[#333333] shadow-md border border-slate-200 rounded-2xl min-h-[95vh] flex flex-col justify-between p-6 sm:p-10 md:p-14 relative page-break print:m-0 print:border-none print:shadow-none print:rounded-none print:min-h-[1050px]"
                  >
                    {/* Academic Header */}
                    <header className="border-b border-slate-100 pb-3 mb-6 flex justify-between items-center text-[10px] font-bold text-slate-400 font-mono tracking-wider">
                      <span>UNEMI</span>
                      <span className="text-unemi-blue">{p.section}</span>
                    </header>

                    {/* Page Content */}
                    <div className="grow flex flex-col justify-center py-4">
                      {p.content}
                    </div>

                    {/* Page Footer */}
                    <footer className="border-t border-slate-100 pt-3 mt-6 flex justify-between items-center text-[10px] font-bold text-slate-400 font-mono">
                      <span>Nohelia Dayanna Tuquinga Vinueza</span>
                      <span className="text-unemi-orange bg-unemi-light-orange/65 px-2.5 py-0.5 rounded font-black font-mono">
                        PAGE {p.number} OF 30
                      </span>
                    </footer>
                  </main>
                ))}
              </div>
            )}

            {/* LOWER CONTROLLERS FOR BOOK MODE ONLY */}
            {viewMode === 'book' && (
              <div className="no-print mt-4 flex justify-between items-center w-full max-w-3xl bg-slate-800/40 border border-slate-800 rounded-2xl p-4 text-xs font-semibold gap-3">
                <button
                  onClick={() => navigateToPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white rounded-xl disabled:opacity-30 disabled:hover:bg-slate-800 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <div className="text-slate-400 font-mono font-medium">
                  Page <strong className="text-white font-extrabold">{currentPage}</strong> of <strong className="text-white">30</strong>
                </div>

                <button
                  onClick={() => navigateToPage(currentPage + 1)}
                  disabled={currentPage === 30}
                  className="px-4 py-2 bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white rounded-xl disabled:opacity-30 disabled:hover:bg-slate-800 flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Next</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="no-print bg-slate-950 mt-12 py-12 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center gap-4 text-slate-400 text-xs">
          <div className="w-12 h-12 rounded-2xl bg-slate-850 flex items-center justify-center border border-slate-850 font-black text-white text-sm shadow-md">
            UNEMI
          </div>
          <p className="font-bold text-slate-300">State University of Milagro • Education Sciences</p>
          <p>© 2026. All rights reserved. Syllabus Work developed for autonomous learning.</p>
        </div>
      </footer>
    </div>
  );
}
