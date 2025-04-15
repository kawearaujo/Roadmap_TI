"use client"
import { useState, useEffect } from "react";
import { userDataStore, UserData } from "../utils/indexedDB"; // Ajuste o caminho conforme necessário

const achievements = [
  { id: 1, title: "Primeiro Deploy", description: "Realize o primeiro deploy de um projeto.", xp: 25 },
  { id: 2, title: "Criar Portfolio", description: "Crie um portfólio online para exibir seus projetos.", xp: 25 },
  { id: 3, title: "Primeiro Curso Finalizado", description: "Conclua um curso sobre desenvolvimento.", xp: 25 },
  { id: 4, title: "Criar Conta no LinkedIn", description: "Crie um perfil profissional no LinkedIn.", xp: 25 },
  { id: 5, title: "Primeiro Projeto Finalizado", description: "Finalize um projeto do início ao fim.", xp: 25 },
  { id: 6, title: "Publicar um Repositório no GitHub", description: "Publique seu primeiro repositório no GitHub.", xp: 25 },
  { id: 7, title: "Criar um Blog Técnico", description: "Escreva um artigo sobre tecnologia.", xp: 25 },
  { id: 8, title: "Fazer um Pull Request", description: "Contribua com um projeto open-source.", xp: 25 },
  { id: 9, title: "Primeira Certificação", description: "Obtenha uma certificação na área.", xp: 25 },
  { id: 10, title: "Participar de um Hackathon", description: "Envolva-se em uma competição de programação.", xp: 25 },
  { id: 11, title: "Criar uma API", description: "Desenvolva e documente uma API.", xp: 25 },
  { id: 12, title: "Automatizar uma Tarefa", description: "Use scripts para facilitar seu trabalho.", xp: 25 },
  { id: 13, title: "Participar de uma Comunidade Tech", description: "Interaja com desenvolvedores em eventos ou fóruns.", xp: 25 },
  { id: 14, title: "Conseguir um Estágio ou Primeiro Job", description: "Entre no mercado de trabalho na área tech.", xp: 25 },
  { id: 15, title: "Construir um Projeto FullStack", description: "Crie um projeto completo com backend e frontend.", xp: 25 },
  { id: 16, title: "Aprender um Novo Framework", description: "Estude e implemente um framework novo.", xp: 25 },
  { id: 17, title: "Fazer uma Palestra ou Live Code", description: "Compartilhe conhecimento publicamente.", xp: 25 },
  { id: 18, title: "Criar um Projeto com Inteligência Artificial", description: "Implemente um modelo de IA no seu código.", xp: 25 },
  { id: 19, title: "Montar um Roadmap de Estudos", description: "Planeje seu aprendizado com um roadmap.", xp: 25 },
  { id: 20, title: "Finalizar um Curso de Algoritmos", description: "Aprofunde-se em lógica e estrutura de dados.", xp: 25 },
];

export default function AchievementsPage() {
  const [completedAchievements, setCompletedAchievements] = useState<number>(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [experience, setExperience] = useState<number>(0);
  const totalAchievements = achievements.length;

  useEffect(() => {
    async function fetchUserData() {
      const userData = await userDataStore.getUserData();
      // setExperience( totalAchievements*25 || 0);
      // if (userData?.achievements.length == undefined)
      setCompleted(userData?.achievements || []);
    }
    fetchUserData();
    // userDataStore.saveUserData({ id: "user1", name: "a", photo: "", level: 0, experience: 0, area: "a", achievements:[] });
  }, []);

  const handleCheckboxChange = async (id: number) => {
    let newCompleted = [...completed];
    // let newExperience = experience;

    if (newCompleted.includes(id)) {
      newCompleted = newCompleted.filter(achId => achId !== id);
      // newExperience -= xp;
    } else {
      newCompleted.push(id);
      // newExperience += xp;
    }
    // setExperience( totalAchievements*25 || 0);
    setCompleted(newCompleted);
    // setExperience();
    await userDataStore.saveUserAttribute("achievements", newCompleted);
    // await userDataStore.saveUserAttribute("experience", newExperience);
  };

  return (
    <div className="pb-8">
      <div className="sticky w-full bg-white top-0 p-6 z-1000">
        <h1 className="text-3xl font-bold text-center mb-6">Conquistas</h1>

        {/* Barra de progresso */}
        <div className="w-full bg-gray-700 rounded-full h-6 mb-6">
          <div
            className="duration-300 easy-in transition-all  bg-blue-500 h-6 rounded-full text-center text-xs font-bold flex items-center justify-center"
            style={{ width: `${(completed.length / totalAchievements) * 100}%` }}
          >
            {completed.length != 0 ?
              <>{completed.length} / {totalAchievements}</>
              :
              <></>
            }

          </div>
        </div>
      </div>
      {/* Lista de conquistas */}
      <div className="px-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievements.map(({ id, title, description, xp }, index) => (
          <div key={index} className="bg-gray-800 p-4 rounded-lg shadow-md flex flex-col relative">
            <label className="absolute top-2 right-2 cursor-pointer">
              <input
                type="checkbox"
                className="hidden"
                checked={completed.includes(id)}
                onChange={() => handleCheckboxChange(id)}
              />
              <div className="w-6 h-6 border-2 border-white rounded-md flex items-center justify-center bg-gray-700">
                {completed.includes(id) && <span className="text-white text-xl">✔</span>}
              </div>
            </label>
            <h2 className="text-lg font-semibold mb-2 text-blue-400">{title}</h2>
            <p className="flex-grow text-gray-300">{description}</p>
            <div className="mt-4 text-sm text-gray-400">+{xp} XP</div>
          </div>
        ))}
      </div>
    </div>
  );
}
