"use client"
import { useState, useEffect } from "react";
import { userDataStore } from "../utils/indexedDB"; // Ajuste o caminho conforme necessário
import { useUserStore } from "@/app/store/useUserStore"
import { getAchievementsForArea } from "../utils/achievements";

const achievementLevels = [
  {
    title: "Iniciante",
    description: "Fundamentos e primeiros passos na subárea.",
    minId: 1,
    maxId: 7,
    color: "border-green-500 text-green-700",
  },
  {
    title: "Intermediário",
    description: "Aplicação prática e integração dos conhecimentos.",
    minId: 8,
    maxId: 14,
    color: "border-amber-500 text-amber-700",
  },
  {
    title: "Avançado",
    description: "Desafios mais completos e aprofundamento técnico.",
    minId: 15,
    maxId: 20,
    color: "border-purple-500 text-purple-700",
  },
] as const;

export default function AchievementsPage() {
  const setQConquistas = useUserStore((state) => state.set);
  const [completed, setCompleted] = useState<number[]>([]);
  const [area, setArea] = useState("");
  const [activeTab, setActiveTab] = useState<"pending" | "completed">("pending");
  const [expandedLevels, setExpandedLevels] = useState<Record<string, boolean>>({
    Iniciante: true,
    Intermediário: true,
    Avançado: true,
  });
  const achievements = getAchievementsForArea(area);
  const totalAchievements = achievements.length;

  useEffect(() => {
    async function fetchUserData() {
      const userData = await userDataStore.getUserData();
      const selectedArea = userData?.area ?? "";
      const areaAchievements = await userDataStore.loadAchievementsForArea(selectedArea);
      setArea(selectedArea);
      setCompleted(areaAchievements);
      setQConquistas(areaAchievements);
    }
    fetchUserData();
  }, []);

  const handleCheckboxChange = async (id: number) => {
    const newCompleted = completed.includes(id)
      ? completed.filter((achievementId) => achievementId !== id)
      : [...completed, id];

    setCompleted(newCompleted);
    setQConquistas(newCompleted);
    await userDataStore.saveAchievementsForArea(area, newCompleted);
  };

  const visibleAchievementsByLevel = achievementLevels.map((level) => {
    const levelAchievements = achievements.filter(
      ({ id }) => id >= level.minId && id <= level.maxId
    );
    const visibleAchievements = levelAchievements.filter(({ id }) =>
      activeTab === "completed" ? completed.includes(id) : !completed.includes(id)
    );

    return {
      ...level,
      achievements: visibleAchievements,
      completedCount: levelAchievements.filter(({ id }) => completed.includes(id)).length,
      totalCount: levelAchievements.length,
    };
  });

  return (
    <div className="pb-8 ">
      <div className="sticky z-10 w-full bg-white top-0 p-6 justify-center">
        <h1 className="text-3xl font-bold text-center mb-6">
          {area ? `Conquistas: ${area}` : "Conquistas"}
        </h1>

        {/* Barra de progresso */}
        <div className="w-full bg-gray-700 rounded-full h-6 mb-6">
          <div
            className="duration-300 easy-in transition-all  bg-blue-500 h-6 rounded-full text-center text-xs font-bold flex items-center justify-center"
            style={{ width: `${totalAchievements ? (completed.length / totalAchievements) * 100 : 0}%` }}
          >
            {completed.length != 0 ?
              <>{completed.length} / {totalAchievements}</>
              :
              <></>
            }

          </div>
        </div>

        <div className="flex border-b border-gray-300" role="tablist" aria-label="Filtrar conquistas">
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "pending"}
            className={`flex-1 border-b-2 pb-2 text-sm font-semibold transition-colors ${activeTab === "pending"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setActiveTab("pending")}
          >
            Não concluídas ({totalAchievements - completed.length})
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "completed"}
            className={`flex-1 border-b-2 pb-2 text-sm font-semibold transition-colors ${activeTab === "completed"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            onClick={() => setActiveTab("completed")}
          >
            Concluídas ({completed.length})
          </button>
        </div>
      </div>
      {!area ? (
        <p className="px-6 py-8 text-center text-gray-600">
            Escolha uma subárea para ver suas conquistas personalizadas.
        </p>
      ) : (
        <div className="scroll-smooth space-y-8 px-6 pb-8">
          {visibleAchievementsByLevel.every(({ achievements: levelAchievements }) => levelAchievements.length === 0) && (
            <p className="py-2 text-center text-gray-600">
              {activeTab === "pending"
                ? "Todas conquistas foram alcançadas."
                : "Nenhuma conquista ainda foi alcançada!"}
            </p>
          )}
          {visibleAchievementsByLevel.map((level) => (
            <section key={level.title}>
              <div className={`mb-4 border-b-2 ${level.color}`}>
                <button
                  type="button"
                  className="flex w-full cursor-pointer items-center justify-between gap-3 pb-2 text-left"
                  aria-expanded={expandedLevels[level.title]}
                  aria-controls={`achievement-level-${level.minId}`}
                  onClick={() => setExpandedLevels((current) => ({
                    ...current,
                    [level.title]: !current[level.title],
                  }))}
                >
                  <span>
                    <span className="block text-xl font-bold">{level.title}</span>
                    <span className="mt-1 block text-sm text-gray-600">{level.description}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-3">
                    <span className="text-sm font-semibold">
                      {level.completedCount} / {level.totalCount} concluídas
                    </span>
                    <svg
                      className={`h-5 w-5 transition-transform ${expandedLevels[level.title] ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.22 7.22a.75.75 0 0 1 1.06 0L10 10.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 8.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                  </span>
                </button>
              </div>
              {expandedLevels[level.title] && (
                <div id={`achievement-level-${level.minId}`}>
                  {level.achievements.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                      {level.achievements.map(({ id, title, description, xp }) => (
                        <div key={id} className="scroll-smooth relative flex flex-col rounded-lg bg-gray-800 p-4 shadow-md">
                          <label className="absolute right-2 top-2 cursor-pointer">
                            <input
                              type="checkbox"
                              className="hidden"
                              checked={completed.includes(id)}
                              onChange={() => handleCheckboxChange(id)}
                            />
                            <div className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-white bg-gray-700">
                              {completed.includes(id) && <span className="text-xl text-white">✔</span>}
                            </div>
                          </label>
                          <h3 className="mb-2 pr-8 text-lg font-semibold text-blue-400">{title}</h3>
                          <p className="flex-grow text-gray-300">{description}</p>
                          <div className="mt-4 text-sm text-gray-400">+{xp} XP</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="py-2 text-sm text-gray-500">
                      {activeTab === "pending"
                        ? "Todas as conquistas deste nível foram concluídas."
                        : "Nenhuma conquista deste nível foi concluída ainda."}
                    </p>
                  )}
                </div>
              )}
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
