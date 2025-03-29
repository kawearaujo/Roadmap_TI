// "use client"
// import React, { useEffect, useState } from 'react';
// import { userDataStore, UserData } from '../utils/indexedDB';

// // const userStore = new UserDataStore();

// const UserPage: React.FC = () => {
//     const [selectedImage, setSelectedImage] = useState<string | null>(null);
//     const [userName, setUserName] = useState("Nome do Usuário");
//     const [editingName, setEditingName] = useState(false);
//     const [newUserName, setNewUserName] = useState(userName);
//     const [level, setLevel] = useState(5);
//     const [experience, setExperience] = useState(50);
//     const [showImagePicker, setShowImagePicker] = useState(false);
  
//     // Carregar os dados do IndexedDB quando o componente for montado
//     useEffect(() => {
//       const loadUserData = async () => {
//         const userData = await userDataStore.getUserData();
//         if (userData) {
//           setUserName(userData.name);
//           setSelectedImage(userData.photo);
//           setLevel(userData.level);
//           setExperience(userData.experience);
//         }
//       };
  
//       loadUserData();
//     }, []);
  
//     // Atualizar os dados do usuário no IndexedDB
//     const saveUserData = async () => {
//       const userData: UserData = {
//         id: 'user1', // Identificador único do usuário
//         name: userName,
//         photo: selectedImage || "/images/Avatar-2.png", // Foto do usuário
//         level,
//         experience,
//       };
  
//       await userDataStore.saveUserData(userData);
//     };

//   return (
//     <div>
//       <h1>Página do Usuário</h1>

//       <button onClick={saveUser} className="bg-blue-500 text-white p-2 rounded-md">
//         Salvar Dados do Usuário
//       </button>

//       <div className="mt-4">
//         <h2>Dados do Usuário:</h2>
//         {userData && userData.length > 0 ? (
//           <ul>
//             {userData.map((user: any, index: number) => (
//               <li key={index} className="mb-4">
//                 <img src={user.photo} alt="User" className="w-16 h-16 rounded-full" />
//                 <p><strong>Nome:</strong> {user.name}</p>
//                 <p><strong>Área:</strong> {user.area}</p>
//                 <p><strong>Especialização:</strong> {user.specialization}</p>
//                 <p><strong>Nível:</strong> {user.level}</p>
//                 <p><strong>Experiência:</strong> {user.experience}</p>
//                 <button
//                   onClick={() => deleteUser(user.id)}
//                   className="bg-red-500 text-white p-2 rounded-md"
//                 >
//                   Excluir Usuário
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>Nenhum dado de usuário encontrado.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default UserPage;
