"use client"
// import Image from "next/image";
import bg from "@/img/bg1.jpg"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/nav"
import Footer from "../components/footer";
import { useState } from "react";

const areas:any = {
  Software: ["Front-end", "Back-end", "FullStack", "Gamedev"],
  Hardware: ["IoT", "Embarcados", "Circuitos", "Redes"],
  Ciência: ["Data Science", "IA", "Pesquisa", "Bioinformática"],
  Gestão: ["Scrum", "PM", "Liderança", "Empreendedorismo"],
};

export default function Config1() {
  const pathname = usePathname();
  const [selectedArea, setSelectedArea] = useState("Software");
  const [selectedBranch, setSelectedBranch] = useState(null);
  
  
  const saveBranch = async (branch: never) => {
    const db:any = await openDatabase();
    const transaction = db.transaction("userData", "readwrite");
    const store = transaction.objectStore("userData");
    store.put({ id: "user1", branch });
  };

  const openDatabase = () => {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open("userDatabase", 1);
      request.onupgradeneeded = () => {
        const db = request.result;
        if (!db.objectStoreNames.contains("userData")) {
          db.createObjectStore("userData", { keyPath: "id" });
        }
      };
      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject("Erro ao abrir o banco");
    });
  };


  return (
    <div className="min-h-screen text-black">
      
      <Navbar/>
      <div className="">
        <div className="relative flex min-h-screen flex-col justify-center items-center gap-10">
        
          <div className="absolute inset-0 -z-10 ">
            <div className="w-full h-[95vh]  flex justify-center">
            <img src={bg.src} alt="" className="w-full object-none" />
            </div>
          </div>
            <h1 className="text-3xl font-bold text-center mb-4">
              Encontre a área com maior compatibilidade
            </h1>
            <div className="flex justify-center space-x-4">
              {Object.keys(areas).map((area) => (
                <button
                  key={area}
                  className={`px-4 py-2 border transition duration-300 ${selectedArea === area ? "border-blue-500 border-3 shadow-md shadow-blue-500/50 " : "border-gray-400"}`}
                  onClick={() => setSelectedArea(area)}
                >
                  {area}
                </button>
              ))}
            </div>

            <div className="mt-6 p-4 border border-blue-400 rounded-lg flex justify-center space-x-4">
              {areas[selectedArea].map((branch: never) => (
                <button
                  key={branch}
                  className="px-4 py-2 border border-gray-400 rounded"
                  onClick={() => setSelectedBranch(branch)}
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>
          {selectedBranch && (
              <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-6 rounded-lg relative">
                  <button
                    className="absolute top-2 right-2 text-red-500"
                    onClick={() => setSelectedBranch(null)}
                  >
                    ✖
                  </button>
                  <h2 className="text-xl font-bold">{selectedBranch}</h2>
                  <p className="mt-4">Detalhes sobre {selectedBranch}...</p>
                  <div className="mt-6 flex justify-between">
                    <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setSelectedBranch(null)}>Fechar</button>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => { saveBranch(selectedBranch); setSelectedBranch(null); }}>Escolher</button>
                  </div>
                </div>
              </div>
          )}

      </div>
      <Footer/>
      
    </div>
    
  );
}
