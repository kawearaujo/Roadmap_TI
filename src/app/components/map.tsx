import { useState } from 'react';

// Exemplo de dados (substituir por dados reais do banco via getServerSideProps ou useSWR)
const roadmapData = [
  {
    id: '1',
    title: 'Frontend',
    children: [
      {
        id: '1-1',
        title: 'HTML',
        children: [],
      },
      {
        id: '1-2',
        title: 'CSS',
        children: [],
      },
    ],
  },
  {
    id: '2',
    title: 'Backend',
    children: [
      {
        id: '2-1',
        title: 'Node.js',
        children: [],
      },
    ],
  },
];

type NodeType = {
  id: string;
  title: string;
  children: NodeType[];
};

const Arrow = () => (
  <svg
    className="w-6 h-6 text-slate-400 mx-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const RoadmapNode = ({ node }: { node: NodeType }) => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const isLeaf = node.children.length === 0;

  const handleClick = () => {
    if (isLeaf) {
      setShowModal(true);
    } else {
      setExpanded((prev) => !prev);
    }
  };

  return (
    <div className="flex items-center border-left">
      <div
        onClick={handleClick}
        className="cursor-pointer rounded bg-slate-100 px-4 py-2 hover:bg-slate-200 transition-all duration-300 whitespace-nowrap"
      >
        {node.title}
      </div>

      {expanded && node.children.length > 0 && (
        <>
          <Arrow />
          <div className="flex items-center space-x-6">
            {node.children.map((child, index) => (
              <RoadmapNode key={index} node={child} />
            ))}
          </div>
        </>
      )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="w-96 rounded bg-white p-6 shadow-lg animate-scale-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{node.title}</h2>
              <button onClick={() => setShowModal(false)}>
                <span className="h-5 w-5 text-gray-500 hover:text-red-500">✕</span>
              </button>
            </div>
            <p className="mb-4 text-sm text-gray-600">Aqui vai o conteúdo da etapa '{node.title}'.</p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selected}
                onChange={(e) => setSelected(e.target.checked)}
              />
              Marcar como concluído
            </label>
          </div>
        </div>
      )}
    </div>
  );
};

export default function RoadmapPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6">Roadmap por Área</h1>
      <div className="flex flex-col gap-8">
        {roadmapData.map((node, index) => (
          <RoadmapNode key={index} node={node} />
        ))}
      </div>
    </main>
  );
}
