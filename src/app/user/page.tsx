"use client";
import React, { useEffect, useState } from 'react';

import {userDataStore,UserData} from "@/app/utils/indexedDB"

// Função que abre a tela de seleção de imagens
const ImagePicker = ({ onSelectImage }: { onSelectImage: (image: string) => void }) => {
  const images = [
    "/images/Avatar-1.png",
    "/images/Avatar-2.png",
    "/images/Avatar-3.png",
    "/images/Avatar-4.png",
    "/images/Avatar-4.png",
  ];

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg space-y-4">
        <h2 className="text-xl font-semibold">Selecione uma imagem</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="cursor-pointer">
              <img
                src={image}
                alt={`Imagem ${index + 1}`}
                className="w-24 h-24 object-cover rounded-lg"
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
  );
};

// Componente para o Dashboard
const Dashboard = () => (
  <div>
    <h2 className="text-2xl font-semibold">Dashboard</h2>
    <p>Informações do Dashboard...</p>
  </div>
);

// Componente para o RoadMap
const RoadMap = () => (
  <div>
    <h2 className="text-2xl font-semibold">RoadMap - Trajetória</h2>
    <p>Informações do RoadMap...</p>
  </div>
);

// Componente para as Conquistas
const Conquistas = () => (
  <div>
    <h2 className="text-2xl font-semibold">Conquistas</h2>
    <p>Lista de conquistas do usuário...</p>
  </div>
);

const DeleteConfirmation = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
    <div className="bg-white p-6 rounded-lg space-y-4">
      <h2 className="text-xl font-semibold">Tem certeza que deseja apagar todos os dados?</h2>
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

export default function UserPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showImagePicker, setShowImagePicker] = useState(false);
  const [userName, setUserName] = useState("Nome do Usuário");
  const [editingName, setEditingName] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [activePage, setActivePage] = useState<"dashboard" | "roadmap" | "conquistas" | "delete" >("dashboard");
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [level, setLevel] = useState(5);
  const [experience, setExperience] = useState(50);

  useEffect(() => {
    const loadUserData = async () => {
      const userData = await userDataStore.getUserData();
      if (userData) {
        setUserName(userData.name);
        setSelectedImage(userData.photo);
        setLevel(userData.level);
        setExperience(userData.experience);
      }
    };
  
    loadUserData();
  }, []);

    const saveUserData = async (updatedUserData?: Partial<UserData>) => {
      const userData: UserData = {
        id: 'user1',
        name: updatedUserData?.name ?? userName,
        photo: updatedUserData?.photo ?? (selectedImage || "/images/Avatar-2.png"),
        level: updatedUserData?.level ?? level,
        experience: updatedUserData?.experience ?? experience,
      };
    
      await userDataStore.saveUserData(userData);
    };

    const handleImageSelect = (image: string) => {
      if (image) {
        setSelectedImage(image);
        saveUserData({ photo: image }); // Salva no IndexedDB
      }
      setShowImagePicker(false);
    };
  
    const handleNameChange = () => {
      setUserName(newUserName);
      setEditingName(false);
      saveUserData({ name: newUserName }); // Salva no IndexedDB
    };



  const renderActivePage = () => {
    switch (activePage) {
      case "dashboard":
        return <RoadMap />;
      case "roadmap":
        return <RoadMap />;
      case "conquistas":
        return <Conquistas />;
      case "delete":
        return (<DeleteConfirmation 
          onConfirm={handleDeleteProgress} 
          onCancel={() => {
            setShowDeleteConfirmation(false);
            setActivePage("dashboard");
          } } />);
      default:
        return null;
    }
  };


  const handleDeleteProgress = () => {
    // Lógica para apagar os dados do usuário
    console.log("Progresso apagado.");
    setShowDeleteConfirmation(false);
    // Voltar para o Dashboard após confirmar a exclusão
    setActivePage("dashboard");
  };


  return (
    <div className="flex min-h-screen">
      {/* Menu Lateral Esquerdo */}
      <div className="w-64 bg-gray-800 text-white p-6 space-y-6">
        <div className="flex flex-col items-center space-y-4">
          <img
            src={selectedImage || "/images/Avatar-2.png"}
            alt="User"
            className="w-24 h-24 rounded-full border-4 border-blue-500 cursor-pointer"
            onClick={() => setShowImagePicker(true)}
          />
          <div className="text-center">
            {editingName ? (
              <input
                type="text"
                value={newUserName}
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
          <p className="text-gray-400">Nível: {level}</p>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${(experience / 100) * 100}%` }}></div>
          </div>
          <p className="text-gray-400 text-xs">{experience} / 100 XP</p>
        </div>

        {/* Botões do Menu Lateral */}
        <div className="space-y-4">
          <button
            className="w-full bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700"
            onClick={() => setActivePage("dashboard")}
            // onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>
          <button
            className="w-full bg-purple-600 p-2 rounded-md text-white hover:bg-purple-700"
            onClick={() => setActivePage("roadmap")}
          >
            RoadMap - Trajetoria
          </button>
          <button
            className="w-full bg-green-600 p-2 rounded-md text-white hover:bg-green-700"
            onClick={() => setActivePage("conquistas")}
          >
            Conquistas
          </button>
          <button
            className="w-full bg-green-600 p-2 rounded-md text-white hover:bg-green-700"
            onClick={() => setActivePage("delete")}
          >
            Apagar Progresso
          </button>
        </div>
      </div>

      {/* Área Principal */}
      <div className="flex-1 p-6">
        {renderActivePage()}
      </div>

      {/* Modal de Seleção de Imagens */}
      {showImagePicker && <ImagePicker onSelectImage={handleImageSelect} />}
    </div>
  );
}
