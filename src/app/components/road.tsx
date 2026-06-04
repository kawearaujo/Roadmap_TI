"Use Client"
import { JSX, useEffect, useState } from 'react';
import { userDataStore } from '../utils/indexedDB';
import roadmapData from '@/app/components/roadmapData'
import { useUserStore } from "@/app/store/useUserStore"


const Road = roadmapData();

type NodeType = {
  id: string;
  title: string;

  content: JSX.Element;

  children: NodeType[];
};

const RoadmapNode = ({ node, parentToggle = true }: { node: NodeType, parentToggle?: boolean }) => {
  const Road = useUserStore((state) => state.roadmap);
  const setRoad = useUserStore((state) => state.setR);
  const [showModal, setShowModal] = useState(false);
  const isThirdLevelParent = node.
    children.every(child => child.id.split('-').length === 3);
  const isSecLevelParent = node.
    children.every(child => child.id.split('-').length === 2);
  const isFstLevelParent = node.
    children.every(child => child.id.split('-').length === 1);
  const handleClick = () => {
    setShowModal(true);
  };
  const [completed, setCompleted] = useState<string[]>([]);
  useEffect(() => {
    const loadUserData = async () => {
      const userData = await userDataStore.getUserData();
      if (userData) {
        setRoad(userData?.roadmap || []);
        setCompleted(userData?.roadmap || []);
      }
    };
    loadUserData();
  }, []);

  const handleCheckboxChange = async (id: string) => {
    let newCompleted = [...Road];
    if (newCompleted.includes(id)) {
      console.log("apagando" + completed);
      newCompleted = newCompleted.filter(achId => achId !== id);
    } else {
      console.log("adicionando");
      newCompleted.push(id);

    }
    setRoad(newCompleted);
    setCompleted(newCompleted);
    console.log(Road)
    await userDataStore.saveUserAttribute("roadmap", newCompleted);
  };
  const [toggle, setToggle] = useState(true);
  const isMobile = window.innerWidth < 768
  const changeToggle = () => {
    console.error("isThirdLevelParent:", isThirdLevelParent, "toggle:", toggle);
    setToggle(!toggle);
  }

  return (
    <div className={/*flex*/ `
    ${node.children.length > 3 ? 'w-full' : ''}  items-start relative md:ml-4 mt-1 ${isThirdLevelParent ? '' : 'flex-col '} `}>
      <div
        onClick={handleClick}
        className={`cursor-pointer rounded  ${Road.includes(node.id) ? 'bg-green-300 hover:bg-green-400' : 'bg-blue-100 hover:bg-blue-400'} px-4 py-1 hover:bg-blue-400 hover:text-white transition-all duration-300 whitespace-nowrap z-10`}
      >
        {node.title}

      </div>

      {node.
        children.length > 0 && (
          // ${toggle && isThirdLevelParent ? 'invisible ' : 'visible '}
          <div
            className={`${isSecLevelParent ? '' : ''} relative  ml-4  md:flex items-center  ${isThirdLevelParent ? 'flex-row items-center' : 'mt-6 flex-col items-start md:gap-6 gap-16 md:mb-0 mb-10'}`}
          >

            {node.children.map((child, index) => (
              <div key={index} className="relative flex items-center">
                {isSecLevelParent ?
                  <div className="cursor-pointer" onClick={changeToggle}>
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /> */}
                    </svg> </div> : ""

                }
                {isThirdLevelParent && isMobile ?
                  <p className="mr-4">
                    {index + 1}</p>
                  : ""}

                <RoadmapNode key={index} node={child} parentToggle={toggle} />
              </div>
            ))}
          </div>
        )}

      {/* {showModal && (
        <div className="fixed inset-0 z-950 flex items-center justify-center bg-black/80 " onClick={() => setShowModal(false)}>
          <div className="w-96 rounded bg-white p-6 shadow-lg animate-scale-in w-[90vw] min-h-[50vh] md:w-[70vw]" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <label className="flex items-center gap-4">
                <h2 className="text-lg font-semibold">{node.title}</h2>
                <input
                  type="checkbox"
                  checked={Road.includes(node.id)}
                  onChange={() => handleCheckboxChange(node.id)}
                />
                Marcar como concluído
              </label>
              <button onClick={() => setShowModal(false)}>
                <span className="h-5 w-5 text-gray-500 hover:text-red-500">✕</span>
              </button>
            </div>
            {node.content}

          </div>
        </div>
      )} */}



      {/* Teste de Modal */}


      {showModal && (
        <div
          className="fixed inset-0 z-950 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className=" bg-gray-800 rounded-xl border border-gray-200 border-zinc-700 w-full max-w-2xl max-h-[85vh] flex flex-col animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-gray-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                <h2 className="text-base font-medium text-zinc-100">
                  {node.title}
                </h2>
                {/* {node.category && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              {node.category}
            </span>
          )} */}
              </div>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 accent-emerald-500"
                    checked={Road.includes(node.id)}
                    onChange={() => handleCheckboxChange(node.id)}
                  />
                  <span className="text-xs text-gray-500">Marcar como concluído</span>
                </label>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-red-500 transition-colors p-1 rounded"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Body com scroll */}
            <div className="overflow-y-auto flex-1 px-6 py-5 space-y-4 text-zinc-100">
              {node.content}
            </div>
          </div>
        </div>
      )}




      {/* ################################################################ */}






    </div>
  );
};

export default function RoadmapPage() {
  const [area, setArea] = useState("N/A");
  useEffect(() => {
    const loadUserData = async () => {
      const userData = await userDataStore.getUserData();
      if (userData) {
        setArea(userData?.area);
      }
    };
    loadUserData();
  }, []);
  return (
    <main className="min-h-screen bg-white pt-8 ">
      <h1 className="text-3xl font-bold mb-6  flex justify-center">

        <p className="text-blue-400 ml-4"> {"{"} </p>
        {area}
        <p className="text-blue-400"> {"}"} </p>
      </h1>
      <div className="flex flex-col gap-16 items-start md:pb-10 mb-0">
        {Road.filter((node) => (node.title == area)).map((node, index) => (
          <RoadmapNode key={index} node={node} />
        ))}
      </div>
    </main>
  );
}
