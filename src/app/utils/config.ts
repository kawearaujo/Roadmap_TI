"use client"
import React, { useEffect, useState } from 'react';
import {userDataStore,UserData} from "@/app/utils/indexedDB"



  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [userName, setUserName] = useState("Nome do Usuário");
  const [newUserName, setNewUserName] = useState(userName);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [level, setLevel] = useState(5);
  const [experience, setExperience] = useState(50);
  const [area, setArea] = useState<string | null>(null);


  

    const saveUserData = async (updatedUserData?: Partial<UserData>) => {
      const userData: UserData = {
        id: 'user1',
        name: updatedUserData?.name ?? userName,
        photo: updatedUserData?.photo ?? (selectedImage || "/images/Avatar-1.png"),
        level: updatedUserData?.level ?? level,
        experience: updatedUserData?.experience ?? experience,
        area: updatedUserData?.area ?? (area || "N/A"),
      };
    
      await userDataStore.saveUserData(userData);
    };

    const  handleImageSelect = (image: string) => {
      if (image) {
        setSelectedImage(image);
        saveUserData({ photo: image }); // Salva no IndexedDB
      }
    };
  
    const handleNameChange = () => {
      setUserName(newUserName);
      saveUserData({ name: newUserName }); // Salva no IndexedDB
    };
    
   export const handleAreaChange = (newArea: string) => {
      setArea(newArea);
      saveUserData({ area: newArea }); // Salva no IndexedDB
    };


  const handleDeleteProgress = () => {
    console.log("Progresso apagado.");
    setShowDeleteConfirmation(false);
  };


  export default function UserPage() {
    useEffect(() => {
      const loadUserData = async () => {
        const userData = await userDataStore.getUserData();
        if (userData) {
          setUserName(userData.name);
          setSelectedImage(userData.photo);
          setLevel(userData.level);
          setExperience(userData.experience);
          setArea(userData.area);
        }
      };
    
      loadUserData();
    }, []);

}
