import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Link from "next/link";
import { useUserStore } from "@/app/store/useUserStore"
import { userDataStore } from "@/app/utils/indexedDB"
import { useEffect, useState } from "react";

// const data = [
//     { day: "Seg", tarefas: 0 },
//     { day: "Ter", tarefas: 0 },
//     { day: "Qua", tarefas: 0 },
//     { day: "Qui", tarefas: 0 },
//     { day: "Sex", tarefas: 0 },
//     { day: "Sáb", tarefas: 0 },
//     { day: "Dom", tarefas: 0 },
// ];

export default function Dashboard() {
    // const totalTarefas = data.reduce((acc, item) => acc + item.tarefas, 0);
    const setQConq = useUserStore((state) => state.set);
    const QConq = useUserStore((state) => state.conquistas);
    const setRoad = useUserStore((state) => state.setR);
    const Road = useUserStore((state) => state.roadmap);
    const [area, useArea] = useState("");

    const roadTotal = [
        { area: "FullStack", qtd: 21 },
        { area: "QA", qtd: 37 },
        { area: "GameDev", qtd: 34 },
        { area: "Sistemas Embarcados", qtd: 35 },
        { area: "Robótica", qtd: 26 },
        { area: "Data Science", qtd: 41 },
        { area: "IA", qtd: 41 },
        { area: "Scrum Master", qtd: 31 },
        { area: "Product Manager", qtd: 36 },
    ];



    const loadUserData = async () => {
        const userData = await userDataStore.getUserData();
        if (userData) {
            setQConq(userData.achievements);
            setRoad(userData.roadmap);
            useArea(userData.area);

        }
    }

    useEffect(() => {
        loadUserData();
    }, []);

    const dataT = [
        { day: "Tarefas Concluidas", tarefas: Road.length },
        {
            day: "Tarefas Totais", tarefas:
                roadTotal.find(item => item.area === area)?.qtd
        },
    ];
    const dataC = [

        { day: "Conquistas Concluidas", tarefas: QConq.length },
        { day: "Conquistas Totais", tarefas: 20 },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6 ml-[16rem]">
            {/* Top Bar */}
            <nav className="w-full flex justify-between items-center mb-8">
                <Link href="/" className="text-blue-600 font-semibold">
                    ← Voltar
                </Link>
                <h1 className="text-2xl font-bold text-center">Dashboard</h1>
                <div className="w-20" />
            </nav>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between">
                    <h2 className="text-lg font-semibold text-gray-700">Tarefas Concluidas</h2>
                    <p className="text-4xl font-bold text-blue-600 mt-4">{Road.length}</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between">
                    <h2 className="text-lg font-semibold text-gray-700">Conquistas Obtidas</h2>
                    <p className="text-4xl font-bold text-blue-600 mt-4">{QConq.length}</p>
                </div>
                <div className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between">
                    <h2 className="text-lg font-semibold text-gray-700">Total</h2>
                    <p className="text-4xl font-bold text-blue-600 mt-4">{Road.length + QConq.length}</p>
                </div>
                {/* Adicione mais cards se quiser */}
            </div>

            {/* Gráfico */}
            <div className="bg-white shadow-md rounded-xl p-6 ">

                <h2 className="text-lg font-semibold mb-4">Tarefas e Conquistas</h2>
                <div className="flex">
                    <ResponsiveContainer width="50%" height={300}>
                        <BarChart data={dataT}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="tarefas" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                    <ResponsiveContainer width="50%" height={300}>
                        <BarChart data={dataC}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="tarefas" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
