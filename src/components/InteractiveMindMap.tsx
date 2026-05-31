import { useState } from 'react';
import { Brain, Hammer, Network, Info } from 'lucide-react';

interface TheoryNode {
  id: string;
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  icon: any;
  color: string;
  borderColor: string;
  bgColor: string;
  hoverColor: string;
  x: number; // SVG center point
  y: number;
}

export default function InteractiveMindMap() {
  const [selectedNode, setSelectedNode] = useState<string>('connectivism');

  const nodes: TheoryNode[] = [
    {
      id: 'cognitivism',
      name: 'Cognitivism',
      displayName: 'Cognitivism (Mental Processes)',
      tagline: 'Acquisition, organization, and storage of information in the mind.',
      description: 'Focuses on how the human mind processes, encodes, stores, and retrieves information. In the context of e-learning, it is fundamental for structuring logical content, intelligible didactic sequencing, and designing information that reduces cognitive load.',
      icon: Brain,
      color: '#004080',
      borderColor: 'border-blue-800',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      x: 180,
      y: 100,
    },
    {
      id: 'constructivism',
      name: 'Constructivism',
      displayName: 'Constructivism (Meaning Construction)',
      tagline: 'The student actively constructs knowledge from experience.',
      description: 'Asserts that learning occurs when the student actively constructs meaning based on previous experiences and interaction with the environment. In e-learning, this is promoted through simulations, case-study simulators, virtual collaborative environments, and problem solving.',
      icon: Hammer,
      color: '#FF6600',
      borderColor: 'border-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      x: 180,
      y: 280,
    },
    {
      id: 'connectivism',
      name: 'Connectivism',
      displayName: 'Connectivism (Knowledge Networks)',
      tagline: 'A learning theory for the digital age based on nodes and connections.',
      description: 'A learning theory promoted by George Siemens and Stephen Downes, stating that knowledge does not reside solely in the individual but is distributed across a network of nodes (people, databases, social networks). The capacity to synthesize and identify connections between fields, ideas, and communities is critical today.',
      icon: Network,
      color: '#10B981',
      borderColor: 'border-emerald-600',
      bgColor: 'bg-emerald-50',
      hoverColor: 'hover:bg-emerald-150',
      x: 480,
      y: 190,
    },
  ];

  return (
    <div className="my-8 page-break-inside-avoid" id="interactive-mind-map">
      <div className="bg-white rounded-2xl border-2 border-[#004080]/15 overflow-hidden shadow-md print-border print-shadow-none">
        <div className="bg-[#004080] text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Network className="w-5 h-5 text-orange-400" />
            <h3 className="font-semibold text-lg font-display">Interactive Mind Map: Learning Theories</h3>
          </div>
          <span className="text-xs bg-white/10 px-3 py-1 rounded-full border border-white/20 font-mono no-print">
            Interactive: Click on the nodes
          </span>
        </div>

        <div className="p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* SVG Connection Container */}
          <div className="col-span-1 md:col-span-6 flex justify-center bg-slate-50/50 rounded-xl p-4 border border-slate-100 relative print-mx-0">
            {/* SVG Visual Nodes & Links */}
            <svg viewBox="0 0 640 380" className="w-full max-w-lg h-auto">
              <defs>
                <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#94A3B8" />
                </marker>
                <marker id="arrow-selected" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#FF6600" />
                </marker>
              </defs>

              {/* Central Connection Lines */}
              <path
                d="M 180 145 C 280 145, 300 190, 430 190"
                fill="none"
                stroke={selectedNode === 'cognitivism' ? '#FF6600' : '#D1D5DB'}
                strokeWidth={selectedNode === 'cognitivism' ? 3 : 2}
                strokeDasharray={selectedNode === 'cognitivism' ? 'none' : '4,4'}
                markerEnd={selectedNode === 'cognitivism' ? 'url(#arrow-selected)' : 'url(#arrow)'}
                className="transition-all duration-300"
              />
              <path
                d="M 180 235 C 280 235, 300 190, 430 190"
                fill="none"
                stroke={selectedNode === 'constructivism' ? '#FF6600' : '#D1D5DB'}
                strokeWidth={selectedNode === 'constructivism' ? 3 : 2}
                strokeDasharray={selectedNode === 'constructivism' ? 'none' : '4,4'}
                markerEnd={selectedNode === 'constructivism' ? 'url(#arrow-selected)' : 'url(#arrow)'}
                className="transition-all duration-300"
              />
              <line
                x1="180"
                y1="150"
                x2="180"
                y2="230"
                stroke="#D1D5DB"
                strokeWidth="2"
                strokeDasharray="4,4"
              />

              {/* Render SVG Nodes */}
              {nodes.map((node) => {
                const Icon = node.icon;
                const isSelected = selectedNode === node.id;
                return (
                  <g
                    key={node.id}
                    className="cursor-pointer group"
                    onClick={() => setSelectedNode(node.id)}
                  >
                    {/* Shadow halo for selected item */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={72}
                      className={`fill-current ${isSelected ? 'text-[#FF6600]/10' : 'text-transparent group-hover:text-slate-100/60'} transition-all duration-300`}
                    />
                    {/* Main Circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={65}
                      fill="#FFFFFF"
                      stroke={isSelected ? '#FF6600' : '#004080'}
                      strokeWidth={isSelected ? 4 : 2.5}
                      className="transition-all duration-300 shadow-sm"
                    />
                    {/* Central Icon */}
                    <g transform={`translate(${node.x - 16}, ${node.y - 38})`}>
                      <Icon className={`w-8 h-8 ${isSelected ? 'text-[#FF6600]' : 'text-[#004080]'} transition-colors duration-300`} />
                    </g>
                    {/* Name Tag */}
                    <text
                      x={node.x}
                      y={node.y + 16}
                      textAnchor="middle"
                      className="font-bold text-[14px] fill-[#333333] font-display"
                    >
                      {node.name}
                    </text>
                    {/* Display Badge tagline */}
                    <text
                      x={node.x}
                      y={node.y + 34}
                      textAnchor="middle"
                      className="fill-slate-500 text-[10px] uppercase font-semibold font-sans tracking-wide"
                    >
                      {node.id === 'cognitivism' ? 'Mind' : node.id === 'constructivism' ? 'Experience' : 'Nodes & Networks'}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Interactive Info Panel */}
          <div className="col-span-1 md:col-span-6 flex flex-col justify-center">
            {nodes.map((node) => {
              if (node.id !== selectedNode) return null;
              const Icon = node.icon;
              return (
                <div key={node.id} className="animate-fade-in bg-slate-50 border border-slate-100 p-5 rounded-xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-lg bg-white border border-slate-200">
                      <Icon className="w-6 h-6 text-[#FF6600]" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#004080] font-display">{node.displayName}</h4>
                      <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 mt-1 inline-block">
                        {node.id === 'connectivism' ? 'Modern E-Learning Base' : 'Classical Perspective'}
                      </span>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm italic font-medium leading-relaxed mb-3">
                    &ldquo;{node.tagline}&rdquo;
                  </p>
                  <p className="text-slate-700 text-base leading-relaxed">
                    {node.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#004080] bg-white border border-[#004080]/10 p-3 rounded-lg print-mx-0">
                    <Info className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>
                      {node.id === 'connectivism'
                        ? 'In the digital age, the ability to proactively acquire and connect new information nodes outweighs statically stored knowledge.'
                        : 'Allows for designing better pedagogical scaffolding and understanding user assimilation.'}
                    </span>
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
