"use client"
import { useEffect, useState } from "react";
import Link from "next/link";
import { userDataStore, UserData } from "@/app/utils/indexedDB"
import { useRouter } from 'next/navigation'


export default function SetupPage() {

    const [selected, setSelected] = useState<string | null>(null);
    const [name, setName] = useState("");
    const router = useRouter();

    useEffect(() => {
        const loadUserData = async () => {
            const userData = await userDataStore.getUserData();
            if (userData)
                setName(userData.name);
        }
    }, [])

    const changeName = async (nome: string) => {
        await userDataStore.saveUserAttribute("name", nome);
    }
    const changeArea = async (area: string) => {
        // if (!selected) return;

        await userDataStore.saveUserAttribute("area", area);
        await userDataStore.saveUserAttribute("roadmap", []);
        await userDataStore.saveUserAttribute("achievements", []);

    };


    const options = [
        "FullStack",
        "QA",
        "GameDev",
        "Sistemas Embarcados",
        "Robótica",
        "Data Science",
        "IA",
        "Scrum Master",
        "Product Manager",
    ];

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50">
            {/* Top Navigation */}
            <nav className="w-full flex justify-between items-center px-4 py-4 bg-white shadow-md">
                <Link href="/" className="text-blue-600 font-semibold">← Voltar</Link>
                <h1 className="text-lg font-bold">Começar</h1>
                <div className="w-16" /> {/* Placeholder para equilibrar o espaço */}
            </nav>

            {/* Content */}
            <main className="flex flex-col items-center mt-10 w-full px-4">
                <input
                    type="text"
                    placeholder="Digite seu nome"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        changeName(e.target.value);
                    }}
                    className="border border-gray-300 rounded px-4 py-2 w-full max-w-sm mb-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                {/* Button Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
                    {options.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setSelected(option);
                                changeArea(option);

                            }}
                            className={`px-4 py-2 rounded-lg shadow text-white font-semibold transition ${selected === option
                                ? "bg-blue-600"
                                : "bg-gray-400 hover:bg-gray-500"
                                }`}
                        >
                            {option}
                        </button>
                    ))}
                </div>

                {/* Link to /user */}
                <div className="mt-10">
                    <Link
                        href="/user"
                        className="text-blue-600 font-semibold underline hover:text-blue-800"
                    >
                        Continuar
                    </Link>
                </div>
            </main>
        </div>
    );
}
