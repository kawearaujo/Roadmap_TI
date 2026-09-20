"use client";
import React, { useEffect, useState } from 'react';
import Navbar from "@/app/components/nav"
import Conq from "@/app/components/conquistas"
import RoadMap from "@/app/components/road"
import Db from "@/app/components/dashboard"
import Link from 'next/link';
import { userDataStore } from "@/app/utils/indexedDB"
import { useUserStore } from "@/app/store/useUserStore"


// Função que abre a tela de seleção de imagens

const ImagesSelecao = ({ onSelect, ImagemSelecionada }: { ImagemSelecionada: string; onSelect: (image: string) => void }) => {
  const imagens = [
    "/images/Avatar-1.png",
    "/images/Avatar-2.png",
    "/images/Avatar-3.png",
    "/images/Avatar-4.png",
    "/images/Avatar-5.png",
    "/images/Avatar-6.png",
    "/images/Avatar-7.png",
    "/images/Avatar-8.png",
    "/images/Avatar-9.png",
    "/images/Avatar-10.png",
    "/images/Avatar-11.png",
    "/images/Avatar-12.png",
  ];

  return (
    <>
      {imagens.map((image, index) => (
        <div key={index} className="cursor-pointer">
          <img
            src={image}
            alt={`Imagem ${index + 1}`}
            className={`w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg ${ImagemSelecionada === image
              ? "ring-4 ring-blue-500"
              : ""
              }`}
            onClick={() => {
              onSelect(image)
            }}
          />
        </div>
      ))}
    </>
  );
};

const ImagePicker = ({ onSelectImage }: { onSelectImage: (image: string) => void }) => {
  const images = [
    "/images/Avatar-1.png",
    "/images/Avatar-2.png",
    "/images/Avatar-3.png",
    "/images/Avatar-4.png",
    "/images/Avatar-5.png",
    "/images/Avatar-6.png",
    "/images/Avatar-7.png",
    "/images/Avatar-8.png",
    "/images/Avatar-9.png",
    "/images/Avatar-10.png",
    "/images/Avatar-11.png",
    "/images/Avatar-12.png",
  ];

  return (
    <div>

      <div className="mt-0 fixed inset-0 bg-black/50 z-1001 flex items-center justify-center">
        <div className="bg-white p-4 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Selecione uma imagem</h2>
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="cursor-pointer">
                <img
                  src={image}
                  alt={`Imagem ${index + 1}`}
                  className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg"
                  onClick={() => onSelectImage(image)}
                />
              </div>
            ))}
          </div>
          <button
            className="mt-4 bg-gray-600 text-white p-2 rounded-md w-full"
            onClick={() => onSelectImage("")} // Fecha o modal sem selecionar uma imagem
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente para o RoadMap
const RM = () => (
  <div className='md:pl-64'>
    <RoadMap />
  </div>
);
// Componente para as Conquistas
const Conquistas = () => (
  <div className='md:pl-64'>
    <Conq />
  </div>
);

const DeleteConfirmation = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => (
  <div className="z-999999999999 fixed inset-0 bg-black/50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg space-y-4 m-auto w-[80vw] md:w-[40vw]">
      <h2 className="text-xl font-semibold">Tem certeza que deseja apagar o progresso?</h2>
      <p className="text-gray-600">Esta ação não pode ser desfeita.</p>
      <div className="space-x-4">
        <button
          className="bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
          onClick={onConfirm}
        >
          Apagar
        </button>
        <button
          className="bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700"
          onClick={onCancel}
        >
          Cancelar
        </button>
      </div>
    </div>
  </div>
);

const WelcomeModal = ({ userName, area, onClose }: { userName: string; area: string; onClose: () => void }) => (
  <div className="z-[10000] fixed inset-0 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
    <div className="bg-white border border-slate-200 shadow-2xl rounded-2xl overflow-hidden max-h-[90vh] w-full md:max-w-2xl" role="dialog" aria-modal="true" aria-labelledby="welcome-title">
      <div className="bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-7 text-white md:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">RoadMap TI</p>
        <h2 id="welcome-title" className="mt-2 text-3xl font-bold leading-tight">Olá, {userName}!</h2>
        <p className="mt-2 text-blue-50">Seu percurso de aprendizado começa aqui.</p>
      </div>

      <div className="max-h-[55vh] space-y-5 overflow-y-auto px-6 py-6 text-[15px] leading-7 text-slate-600 md:px-8">
        <p>
          O <strong className="font-semibold text-slate-900">RoadMap TI</strong> é um guia de estudos e apoio para quem deseja desenvolver novas habilidades e mudar de carreira.
        </p>
        <div className="space-y-3">
          <p>
            No menu lateral, o <strong className="font-semibold text-slate-900">Dashboard</strong> apresenta um resumo do seu percurso, das atividades concluídas e das conquistas alcançadas.
          </p>
          <p>
            Em <strong className="font-semibold text-slate-900">RoadMap - Trajetória</strong>, você encontrará a trilha de <strong className="font-semibold text-blue-700">{area}</strong>. Cada etapa reúne cursos e materiais úteis para apoiar seu aprendizado e progresso.
          </p>
        </div>
        <div className="rounded-lg border-l-4 border-amber-400 bg-amber-50 px-4 py-3 text-amber-950">
          <p>
            Também é possível <strong className="font-semibold">trocar de área</strong>. Porém, essa escolha pode apagar todo o progresso acumulado até o momento.
          </p>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50 px-6 py-4 md:px-8">
        <button className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" onClick={onClose}>
          Começar minha jornada
        </button>
      </div>
    </div>
  </div>
);

export default function UserPage() {

  const [modalApagar, setModalApagar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [userName, setUserName] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [activePage, setActivePage] = useState<"dashboard" | "inicio" | "roadmap" | "conquistas" | "delete">("dashboard");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [level, setLevel] = useState(0);
  const [experience, setExperience] = useState(0);
  const [area, setArea] = useState("");

  const [qConquistas, setQConquistas] = useState<number[]>();
  const [roadmap, setRoadmap] = useState<string[]>();
  const setQConq = useUserStore((state) => state.set);
  const QConq = useUserStore((state) => state.conquistas);

  const setRoad = useUserStore((state) => state.setR);
  const Road = useUserStore((state) => state.roadmap);

  const [novoNome, setNovoNome] = useState("");
  const [imagemInicial, setImagemInicial] = useState("");

  const [nomeTemp, setNomeTemp] = useState("");
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // const isMobile = window.innerWidth < 768
  var teste = "";
  const loadUserData = async () => {
    const userData = await userDataStore.getUserData();
    if (userData) {
      setQConq(userData.achievements);
      setRoad(userData.roadmap);
      if (userData.name?.trim() && userData.area?.trim() && !userData.welcomeSeen) {
        setShowWelcome(true);
      }
      if (area == "") {
        setUserName(userData.name);
        setSelectedImage(userData.photo);
        setLevel(userData.level);
        setExperience(userData.experience);
        setArea(userData.area);
        setQConquistas(userData.achievements);
        setRoadmap(userData.roadmap);
        if (userData.achievements !== qConquistas) {
          setQConquistas(userData.achievements);
        }
      }
      else {

        if (userData.roadmap != roadmap)
          setRoadmap(userData.roadmap);
        if (userData.achievements != qConquistas)
          setQConquistas(userData.achievements);

      }
    }
    setLoading(false);
  }
  useEffect(() => {
    loadUserData();
  }, []);

  const NameChange = () => {
    userDataStore.saveUserAttribute("name", newUserName)
    setUserName(newUserName);
    setEditingName(false);
  };
  const TesteInicial = () => {
    if (nomeTemp != "") {
      setUserName(nomeTemp);
      userDataStore.saveUserAttribute("name", nomeTemp);
      userDataStore.saveUserAttribute("photo", selectedImage || "");
    }
  };
  const Cadastrar = () => (

    <div className="z-9999 fixed inset-0 bg-black/50 flex items-center justify-center ">
      <div className="bg-white p-6 rounded-lg space-y-4 md:w-[40vw] w-[80vw]">
        <h2 className="text-xl font-semibold">Qual seu nome?</h2>
        <input
          id="novoNome"
          name="novoNome"
          value={nomeTemp}
          placeholder="Seu nome"
          type="text"
          // value={newUserName}
          onChange={(e) => setNomeTemp(e.target.value)}

          // onKeyPress={(e) => e.key === "Enter" && handleNameChange()}
          className="bg-gray-700 text-white p-2 rounded-md flex w-full"
        />
        <h2 className="text-xl font-semibold">Escolha um avatar</h2>
        {/* <ImagePicker onSelectImage={() => {}} />
       */}
        <div className="bg-gray-700 grid md:grid-cols-4 grid-cols-3 gap-4 p-2 rounded-md flex justify-center items-center">
          {/* {images.map((image, index) => (
            <div key={index} className="cursor-pointer selected:border-4 selected:border-blue-500">
              <img
                src={image}
                alt={`Imagem ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg hover:border-4 hover:border-blue-500"
                onClick={() => setImagemInicial(image)}
              />
            </div>
          ))} */}
          <ImagesSelecao
            ImagemSelecionada={ImagemSelecionada}
            onSelect={(image) => {
              setSelectedImage(image)
              handleImageSelect
            }}
          />
        </div>
        {/* <p className="text-gray-600">Esta ação não pode ser desfeita.</p> */}
        <div className="space-x-4">
          <button
            className="cursor-pointer bg-green-400 text-white p-2 rounded-md hover:bg-green-500"
            onClick={TesteInicial}
          >
            Confirmar
          </button>

        </div>
      </div>
    </div>
  );
  const CadastroInicial = () => {
    const novoTeste = (document.getElementById("novoNome") as HTMLInputElement)?.value;
    // console.error("Novo nome: " + novoTeste);
    setUserName(novoTeste);
  };



  const handleImageSelect = (image: string) => {
    if (image) {
      setSelectedImage(image);
      userDataStore.saveUserAttribute("photo", image)
    }
    setShowImagePicker(false);
  };

  const handleNameChange = async () => {
    if (!newUserName.trim()) return;
    await userDataStore.saveUserAttribute("name", newUserName.trim())
    setUserName(newUserName);
    setEditingName(false);
    if (area.trim()) setShowWelcome(true);
  };

  const closeWelcome = async () => {
    setShowWelcome(false);
    await userDataStore.saveUserAttribute("welcomeSeen", true);
  };

  const renderActivePage = () => {
    switch (activePage) {
      case "dashboard":
        return <Db onGoToRoadmap={() => setActivePage("roadmap")} />;
      case "roadmap":
        return <RM />;
      case "conquistas":
        return <Conquistas />;
      case "inicio":
        return <Db onGoToRoadmap={() => setActivePage("roadmap")} />;
      case "delete":
        return (<DeleteConfirmation
          onConfirm={handleDeleteProgress}
          onCancel={() => {
            setShowDeleteConfirmation(false);
            setActivePage("dashboard");
          }} />);
      default:
        return null;
    }
  };


  const handleDeleteProgress = async () => {
    await userDataStore.saveUserAttribute("roadmap", [])
    await userDataStore.saveUserAttribute("achievements", [])
    setShowDeleteConfirmation(false);
    setModalApagar(false);
    setActivePage("inicio");
  };

  const [ImagemSelecionada, setImagemSelecionada] = useState("");

  return (
    <>
      <div className="flex min-h-screen ">
        {/* Botão Hambúrguer - só aparece no mobile */}
        {modalApagar ?
          <DeleteConfirmation
            onConfirm={handleDeleteProgress}
            onCancel={() => {
              setModalApagar(false);
              setActivePage("dashboard");
            }} />
          : ""}
        {showWelcome && (
          <WelcomeModal userName={userName} area={area} onClose={closeWelcome} />
        )}
        {!loading && (!userName || userName.trim() === "") ?
          <div className="z-9999 fixed inset-0 bg-black/50 flex items-center justify-center ">
            <div className="bg-white p-6 rounded-lg space-y-4 md:w-[40vw] w-[80vw]">
              <h2 className="text-xl font-semibold">Qual seu nome?</h2>
              <input
                id="novoNome"
                name="novoNome"
                // value={userName}
                // value={nomeTemp}
                placeholder="Seu nome"
                type="text"
                onChange={(e) => setNewUserName(e.target.value)}
                // onChange={(e) => setNomeTemp(e.target.value)}
                className="bg-gray-700 text-white p-2 rounded-md flex w-full"
              />
              <h2 className="text-xl font-semibold">Escolha um avatar</h2>

              <div className="bg-gray-700 grid md:grid-cols-4 grid-cols-3 gap-4 p-2 rounded-md flex justify-center items-center">

                <ImagesSelecao
                  ImagemSelecionada={ImagemSelecionada}
                  onSelect={(image) => {
                    handleImageSelect(image)
                    setImagemSelecionada(image)

                  }} />
              </div>
              <div className="space-x-4">
                <button
                  className="cursor-pointer bg-green-400 text-white p-2 rounded-md hover:bg-green-500"
                  onClick={handleNameChange}
                >
                  Confirmar
                </button>

              </div>
            </div>
          </div>
          :
          ""
        }
        <button
          className="fixed top-4 left-4 z-[100] md:hidden bg-gray-800 text-white p-2 rounded-md"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Abrir menu"
        >
          {menuOpen ? (
            // Ícone X
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone hambúrguer
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        {/* Overlay escuro - só no mobile quando menu aberto */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          />
        )}



        {/* Menu Lateral Esquerdo */}
        <div
          className={`
              mt-0 md:mt-0 w-64 h-full bg-gray-800 text-white p-0 space-y-6 fixed z-50
              transition-transform duration-300 ease-in-out
              ${menuOpen ? "translate-x-0" : "-translate-x-full"}
              md:translate-x-0
            `}
        >
          <div className=" flex flex-col items-center space-y-4 p-6">
            <img
              src={selectedImage || "/person.png"}
              alt="User"
              className="w-24 h-24 rounded-full border-4 border-blue-500 cursor-pointer"
              onClick={() => setShowImagePicker(true)}
            />
            <div className="text-center ">

              {editingName ? (
                <input
                  id="editarNome"
                  name="editarNome"
                  placeholder={userName}
                  type="text"
                  onChange={(e) => setNewUserName(e.target.value)}
                  onBlur={handleNameChange}
                  onKeyPress={(e) => e.key === "Enter" && handleNameChange()}
                  className="bg-gray-700 text-white p-2 rounded-md"
                />
              ) : (
                <h2
                  className="text-xl font-semibold cursor-pointer"
                  onClick={() => setEditingName(true)}
                >
                  {userName}
                </h2>
              )}

            </div>
            <h2 className="text-md font-semibold border-b-1" > {area}</h2>
            <p className="text-gray-400">Nível: {Math.trunc((((QConq.length ?? 0) * 25) + ((Road.length ?? 0) * 10)) / 100)}</p>
            <div className="w-full bg-gray-700 h-2 rounded-full ">
              <div className="duration-300 easy-in transition-all bg-blue-500 h-2 rounded-full"
                style={{ width: `${(((QConq.length ?? 0) * 25) + ((Road.length ?? 0) * 10)) % 100}%` }}>
              </div>
            </div>
            <p className="duration-300 easy-in transition-all text-gray-400 text-xs">{(((QConq.length ?? 0) * 25) + ((Road.length ?? 0) * 10)) % 100} / 100 XP</p>
          </div>

          {/* Botões do Menu Lateral */}
          <div className="space-y-0 ">
            <button
              className={`cursor-pointer w-full p-2 text-white hover:bg-blue-500 ${activePage ? activePage : ""}`}
              onClick={() => {
                if (isMobile)
                  setMenuOpen(false);
                setActivePage("dashboard")
              }}
            >
              Dashboard
            </button>
            <button
              className="cursor-pointer w-full  p-2 text-white hover:bg-blue-500"
              onClick={() => {
                if (isMobile)
                  setMenuOpen(false);
                setActivePage("roadmap")
              }}
            >
              RoadMap - Trajetoria
            </button>
            <button
              className="cursor-pointer w-full  p-2 text-white hover:bg-blue-500"
              onClick={() => {
                if (isMobile)
                  setMenuOpen(false);
                setActivePage("conquistas")
              }}
            >
              Conquistas
            </button>
            <button
              className="cursor-pointer w-full  p-2 text-white hover:bg-blue-500"
              onClick={() =>
                setModalApagar(true)
              }
            >
              Apagar Progresso
            </button>
            <Link href={'/config'} className='cursor-pointer w-full  p-2 text-white hover:text-blue-500 svgCenter'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Área Principal */}
        <div className="flex-1 ">
          {renderActivePage()}
        </div>

        {/* Modal de Seleção de Imagens */}
        {showImagePicker && <ImagePicker onSelectImage={handleImageSelect} />}
      </div>

    </>
  );
}
