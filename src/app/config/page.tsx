"use client"
// import Image from "next/image";
import bg from "@/img/bg1.jpg"
import Navbar from "../components/nav"
import Footer from "../components/footer";
import { useState } from "react";
import {userDataStore,UserData} from "@/app/utils/indexedDB"

const areas:any = {
  Software: {
    "Front-end": 
    <div className="">
      <p className="pb-1">O desenvolvimento frontend é o desenvolvimento de elementos visuais e interativos de um site com os quais os usuários interagem diretamente. É uma combinação basicamente de <span className="font-bold">HTML, CSS e JavaScript </span>, onde HTML fornece a estrutura, CSS o estilo e layout e JavaScript o comportamento dinâmico e interatividade.</p>
      <p className="pb-1">Porem existem algumas <i>Frameworks</i> <span className="text-blue-500">(framework fornece uma estrutura para todo o aplicativo.)</span> e Bibliotecas <span className="text-blue-500">(a biblioteca é especializada em uma funcionalidade)</span> baseadas em javascript que unificam trazem maior praticidade assim como segurança.</p>
      <p>Exemplos de Frameworks e Biblioteca:</p>
      <div className="flex py-6 gap-4 justify-center">
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Next Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">React Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Vue Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Angular</p>
        </div>
      </div>
    </div>,
    "Back-end": 
    <div className="">
      <p className="pb-1">O desenvolvimento frontend é o desenvolvimento de elementos visuais e interativos de um site com os quais os usuários interagem diretamente. É uma combinação basicamente de <span className="font-bold">HTML, CSS e JavaScript </span>, onde HTML fornece a estrutura, CSS o estilo e layout e JavaScript o comportamento dinâmico e interatividade.</p>
      <p className="pb-1">Porem existem algumas <i>Frameworks</i> <span className="text-blue-500">(framework fornece uma estrutura para todo o aplicativo.)</span> e Bibliotecas <span className="text-blue-500">(a biblioteca é especializada em uma funcionalidade)</span> baseadas em javascript que unificam trazem maior praticidade assim como segurança.</p>
      <p>Exemplos de Frameworks e Biblioteca:</p>
      <div className="flex py-6 gap-4 justify-center">
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Next Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">React Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Vue Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Angular</p>
        </div>
      </div>
    </div>,
    "FullStack": 
    <div className="">
      <p className="pb-1">O desenvolvimento frontend é o desenvolvimento de elementos visuais e interativos de um site com os quais os usuários interagem diretamente. É uma combinação basicamente de <span className="font-bold">HTML, CSS e JavaScript </span>, onde HTML fornece a estrutura, CSS o estilo e layout e JavaScript o comportamento dinâmico e interatividade.</p>
      <p className="pb-1">Porem existem algumas <i>Frameworks</i> <span className="text-blue-500">(framework fornece uma estrutura para todo o aplicativo.)</span> e Bibliotecas <span className="text-blue-500">(a biblioteca é especializada em uma funcionalidade)</span> baseadas em javascript que unificam trazem maior praticidade assim como segurança.</p>
      <p>Exemplos de Frameworks e Biblioteca:</p>
      <div className="flex py-6 gap-4 justify-center">
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Next Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">React Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Vue Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Angular</p>
        </div>
      </div>
    </div>,
    "Gamedev": 
    <div className="">
      <p className="pb-1">O desenvolvimento frontend é o desenvolvimento de elementos visuais e interativos de um site com os quais os usuários interagem diretamente. É uma combinação basicamente de <span className="font-bold">HTML, CSS e JavaScript </span>, onde HTML fornece a estrutura, CSS o estilo e layout e JavaScript o comportamento dinâmico e interatividade.</p>
      <p className="pb-1">Porem existem algumas <i>Frameworks</i> <span className="text-blue-500">(framework fornece uma estrutura para todo o aplicativo.)</span> e Bibliotecas <span className="text-blue-500">(a biblioteca é especializada em uma funcionalidade)</span> baseadas em javascript que unificam trazem maior praticidade assim como segurança.</p>
      <p>Exemplos de Frameworks e Biblioteca:</p>
      <div className="flex py-6 gap-4 justify-center">
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Next Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">React Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Vue Js</p>
        </div>
        <div className="border border-blue-500 border-1 p-1">
          <p className="text-blue-500">Angular</p>
        </div>
      </div>
    </div>
  },
  Hardware: {
    "IoT": "Desenvolvimento de dispositivos conectados à internet para coletar e trocar dados.",
    "Embarcados": "Sistemas de computação dedicados a funções específicas dentro de um dispositivo maior.",
    "Circuitos": "Projeto e análise de circuitos eletrônicos que compõem dispositivos e sistemas.",
    "Redes": "Estudo e implementação de sistemas de comunicação entre computadores e dispositivos."
  },
  "Ciência": {
    "Data Science": "Análise e interpretação de grandes volumes de dados para extrair insights valiosos.",
    "IA": "Desenvolvimento de sistemas que simulam a inteligência humana para realizar tarefas.",
    "Pesquisa": "Investigação sistemática para estabelecer fatos e chegar a novas conclusões.",
    "Bioinformática": "Aplicação de técnicas computacionais para entender e organizar informações biológicas."
  },
  Gestão: {
    "Scrum": "Metodologia ágil para gestão e planejamento de projetos de software.",
    "PM": "Planejamento, execução e finalização de projetos, garantindo que os objetivos sejam alcançados.",
    "Liderança": "Habilidade de guiar e motivar equipes para alcançar metas organizacionais.",
    "Empreendedorismo": "Processo de iniciar e gerir novos negócios, assumindo riscos financeiros na esperança de lucro."
  }
};

export default function Config1() {
  const [selectedArea, setSelectedArea] = useState("Software");
  const [selectedBranch, setSelectedBranch] = useState(null);

  // const saveBranch = async (area: string) => {
  //   const db: any = await openDatabase();
  //   const transaction = db.transaction("userData", "readwrite");
  //   const store = transaction.objectStore("userData");
  //   store.put({ id: "user1", area });
  // };

  // const saveUserData = async (updatedUserData?: Partial<UserData>) => {
  //       const userData: UserData = {
  //         id: 'user1',
  //         name: updatedUserData?.name ?? userName,
  //         photo: updatedUserData?.photo ?? (selectedImage || "/images/Avatar-2.png"),
  //         level: updatedUserData?.level ?? level,
  //         experience: updatedUserData?.experience ?? experience,
  //         area: updatedUserData?.area ?? area,
  //       };
      
  //       await userDataStore.saveUserData(userData);
  //     };

  // const openDatabase = () => {
  //   return new Promise((resolve, reject) => {
  //     const request = indexedDB.open("userDatabase", 1);
  //     request.onupgradeneeded = () => {
  //       const db = request.result;
  //       if (!db.objectStoreNames.contains("userData")) {
  //         db.createObjectStore("userData", { keyPath: "id" });
  //       }
  //     };
  //     request.onsuccess = () => resolve(request.result);
  //     request.onerror = () => reject("Erro ao abrir o banco");
  //   });
  // };


  return (
    <div className="min-h-screen text-black">
      <Navbar/>
      <div className="relative flex min-h-screen flex-col justify-center items-center gap-10">
        <div className="absolute inset-0 -z-10 ">
          <div className="w-full h-[95vh] flex justify-center">
            <img src={bg.src} alt="" className="w-full object-none" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center mb-4">Encontre a área com maior compatibilidade</h1>
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
          {Object.keys(areas[selectedArea]).map((branch:any) => (
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
        <div className="fixed inset-0 bg-gray-800/80 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg relative w-[90vw] md:w-[70vw]  pb-10">
            <button
              className="absolute top-2 right-2 text-red-500"
              onClick={() => setSelectedBranch(null)}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-center">{selectedBranch}</h2>
            {/* <p className="mt-4"> */}
              {areas[selectedArea][selectedBranch]}
              {/* </p> */}
            <div className="absolute bottom-2 flex gap-6 w-[92%] md:w-[95%] justify-center">
              <button className="px-4 py-2 bg-gray-300 rounded" onClick={() => setSelectedBranch(null)}>Fechar</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={() => { userDataStore.saveUserAttribute("area",selectedBranch); setSelectedBranch(null); }}>Escolher</button>
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}
