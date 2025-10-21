"use client"
import { useState, useEffect } from "react";
import { userDataStore, UserData } from "../utils/indexedDB"; // Ajuste o caminho conforme necessário
import { useUserStore } from "@/app/store/useUserStore"




const achievements = [
  { id: 1, title: "Explorar a Área", description: "Pesquise sobre as possíveis áreas na tecnologia que mais combinam com você.", xp: 25 },
  { id: 2, title: "Montar um Roadmap", description: "Organize seu plano de estudos para começar sua jornada.", xp: 25 },
  { id: 3, title: "Criar Conta em Plataforma de Cursos", description: "Cadastre-se em uma plataforma de aprendizado (como Alura, Udemy, Coursera, etc).", xp: 25 },
  { id: 4, title: "Finalizar Primeiro Curso", description: "Conclua seu primeiro curso introdutório.", xp: 25 },
  { id: 5, title: "Instalar Ferramentas Básicas", description: "Configure seu ambiente de trabalho (IDE, terminal, extensões, etc).", xp: 25 },
  { id: 6, title: "Fazer um Projeto Prático", description: "Implemente algo simples, baseado em um tutorial ou curso.", xp: 25 },
  { id: 7, title: "Criar Conta no GitHub", description: "Cadastre-se no GitHub e explore repositórios públicos.", xp: 25 },
  { id: 8, title: "Publicar seu Primeiro Projeto", description: "Suba seu primeiro repositório no GitHub.", xp: 25 },
  { id: 9, title: "Criar um Portfólio Pessoal", description: "Monte um site ou espaço online para exibir seus projetos.", xp: 25 },
  { id: 10, title: "Finalizar um Projeto Autoral", description: "Desenvolva e conclua um projeto seu, mesmo que simples.", xp: 25 },
  { id: 11, title: "Fazer Networking", description: "Participe de uma comunidade ou evento tech (online ou presencial).", xp: 25 },
  { id: 12, title: "Criar Perfil Profissional", description: "Monte um perfil no LinkedIn ou similar com foco profissional.", xp: 25 },
  { id: 13, title: "Aprender Sobre Versionamento", description: "Estude o básico de Git e versionamento de código.", xp: 25 },
  { id: 14, title: "Contribuir com um Projeto", description: "Colabore com alguma melhoria ou correção em um projeto aberto.", xp: 25 },
  { id: 15, title: "Criar um Conteúdo", description: "Compartilhe conhecimento com um post, artigo ou vídeo.", xp: 25 },
  { id: 16, title: "Automatizar uma Tarefa", description: "Use scripts ou ferramentas para facilitar algum processo.", xp: 25 },
  { id: 17, title: "Aprender um Novo Ferramental", description: "Explore uma nova tecnologia, biblioteca ou ferramenta.", xp: 25 },
  { id: 18, title: "Concluir um Curso Intermediário", description: "Aprofunde-se em uma trilha de conhecimento.", xp: 25 },
  { id: 19, title: "Desenvolver um Projeto Mais Robusto", description: "Inicie um projeto mais complexo e bem estruturado.", xp: 25 },
  { id: 20, title: "Conquistar uma Oportunidade Profissional", description: "Consiga seu primeiro estágio, bolsa ou trabalho na área.", xp: 25 },
];

export default function AchievementsPage() {
  const setQConquistas = useUserStore((state) => state.set);
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
      setQConquistas(userData?.achievements || []);
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
    setQConquistas(newCompleted);
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
        {achievements.map(({ id, title, description,
          xp }, index) => (
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
