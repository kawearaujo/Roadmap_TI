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

const RoadmapNode = ({ node }: { node: NodeType }) => {
  const Road = useUserStore((state) => state.roadmap);
  const setRoad = useUserStore((state) => state.setR);
  const addR = useUserStore((state) => state.addR);
  const delR = useUserStore((state) => state.delR);
  // const [selected, setSelected] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const isLeaf = node.children.length === 0;
  const level = node.id.split('-').length;
  const isThirdLevelParent = node.
    children.every(child => child.id.split('-').length === 3);
  const isSecLevelParent = node.
    children.every(child => child.id.split('-').length === 2);
  const isFirsLevelParent = node.
    children.every(child => child.id.split('-').length === 1);

  const handleClick = () => {
    setShowModal(true);
  };
  const [completed, setCompleted] = useState<string[]>([]);
  const totalAchievements = roadmapData.length;

  const save = async () => {
    await userDataStore.saveUserAttribute("roadmap", Road);
  }
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
      console.log("apagando");
      newCompleted = newCompleted.filter(achId => achId !== id);
      // delR(id);
    } else {
      console.log("adicionando");
      newCompleted.push(id);
      // addR(id);
    }
    // console.log(Road)
    setRoad(newCompleted);
    setCompleted(newCompleted);
    console.log(Road)

    // let newCompleted = [...completed];
    // if (newCompleted.includes(id)) {
    //   newCompleted = newCompleted.filter(achId => achId !== id);
    // } else {
    //   newCompleted.push(id);
    // }
    // setCompleted(newCompleted);
    // setRoad(newCompleted);
    await userDataStore.saveUserAttribute("roadmap", newCompleted);
  };


  return (
    <div className={`flex items-start relative ml-4  ${isThirdLevelParent ? '' : 'flex-col '}`}>
      <div
        onClick={handleClick}
        className={`cursor-pointer rounded  ${Road.includes(node.id) ? 'bg-green-100' : 'bg-blue-100'} px-4 py-2 hover:bg-slate-200 transition-all duration-300 whitespace-nowrap z-10`}
      >
        {node.title}
      </div>

      {node.
        children.length > 0 && (
          <div
            className={`relative  ml-4  flex items-center ${isThirdLevelParent ? 'flex-row items-center' : 'mt-6 flex-col items-start gap-8 '}`}
          >
            <svg
              className={`absolute top-0 left-0 z-0 `}
              width="2"
              height={node.
                children.length * 64 + 20}
              viewBox={`0 0 2 ${node.
                children.length * 64 + 20}`}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={`M1 0 V${node.
                  children.length * 64 + 20}`}
                stroke="#94a3b8"
                strokeWidth={` ${isThirdLevelParent ? '0' : '2'}`}

                fill="none"
              />
            </svg>
            {isThirdLevelParent ?
              <svg
                className="w-6 h-6 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              :
              ""
            }


            {node.
              children.map((child, index) => (
                <div className="relative flex items-center">
                  <svg
                    className="absolute -top-8 left-0 z-0"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0 C0 20, 0 20, 0 40"
                      stroke="#94a3b8"
                      strokeWidth={` ${isThirdLevelParent ? '0' : '2'}`}
                      fill="none"
                    />
                  </svg>
                  {isSecLevelParent ?
                    <svg
                      className="w-6 h-6 text-slate-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg> : ""}
                  <RoadmapNode key={index} node={child} />
                </div>
              ))}
          </div>
        )}

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 " >
          <div className="w-96 rounded bg-white p-6 shadow-lg animate-scale-in w-[90vw] min-h-[50vh] md:w-[70vw]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">{node.title}</h2>
              <button onClick={() => setShowModal(false)}>
                <span className="h-5 w-5 text-gray-500 hover:text-red-500">✕</span>
              </button>
            </div>
            {/* <p className="mb-4 text-sm text-gray-600"> */}
            {node.
              content}
            {/* </p> */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                // checked={selected}
                checked={Road.includes(node.id)}
                // onChange={(e) => setSelected(e.target.checked)}
                onChange={() => handleCheckboxChange(node.id)}
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
    <main className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-6 flex ">
        Roadmap
        <p className="text-blue-400 ml-4"> {"{"} </p>
        {area}
        <p className="text-blue-400"> {"}"} </p>
      </h1>
      <div className="flex flex-col gap-16 items-start">
        {/* {roadmapData.map((node) => (
          <RoadmapNode key={node.id} node={node} />
        ))} */}
        {Road
          .filter((node) => (node.title == area))
          .map((node, index) => (
            <RoadmapNode key={index} node={node} />
          ))}
      </div>
    </main>
  );
}
