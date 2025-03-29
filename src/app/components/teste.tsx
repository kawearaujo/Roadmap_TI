"use client";
import React, { useEffect, useState } from 'react';
import { userDataStore, UserData } from '@/app/utils/indexedDB'; // Importando a função de acesso ao IndexedDB

const ImagePicker = ({ onSelectImage }: { onSelectImage: (image: string) => void }) => {
  const images = [
    "/images/Avatar-1.png",
    "/images/Avatar-2.png",
    "/images/Avatar-3.png",
    "/images/Avatar-4.png",
  ];

  return (
    <div className="fixed inset-0 bg-black/90 flex items-center justify-center">
      
    </div>
  );
};

const UserPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [userName, setUserName] = useState("Nome do Usuário");
  const [editingName, setEditingName] = useState(false);
  const [newUserName, setNewUserName] = useState(userName);
  const [level, setLevel] = useState(5);
  const [experience, setExperience] = useState(50);
  const [showImagePicker, setShowImagePicker] = useState(false);

  // Carregar os dados do IndexedDB quando o componente for montado
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

  // Atualizar os dados do usuário no IndexedDB
  const saveUserData = async () => {
    const userData: UserData = {
      id: 'user1', // Identificador único do usuário
      name: userName,
      photo: selectedImage || "/images/Avatar-2.png", // Foto do usuário
      level,
      experience,
    };

    await userDataStore.saveUserData(userData);
  };

  const handleImageSelect = (image: string) => {
    if (image) {
      setSelectedImage(image);
    }
    setShowImagePicker(false);
    saveUserData(); // Atualiza os dados quando a imagem for selecionada
  };

  const handleNameChange = () => {
    setUserName(newUserName);
    setEditingName(false);
    saveUserData(); // Atualiza os dados quando o nome for alterado
  };

  return (
    <div className="flex min-h-screen">
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
      </div>

      {/* Área Principal */}
      <div className="flex-1 p-6">
        <button
          className="w-full bg-blue-600 p-2 rounded-md text-white hover:bg-blue-700"
          onClick={saveUserData}
        >
          Salvar Dados
        </button>
      </div>

      {/* Modal de Seleção de Imagens */}
      {showImagePicker && <ImagePicker onSelectImage={handleImageSelect} />}
    </div>
  );
};

export default UserPage;
