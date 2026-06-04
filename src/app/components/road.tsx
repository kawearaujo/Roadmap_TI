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

      {showModal && (
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
      )}
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
