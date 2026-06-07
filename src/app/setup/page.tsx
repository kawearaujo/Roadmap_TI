"use client"
import { useState } from "react";
import Link from "next/link";
import { userDataStore } from "@/app/utils/indexedDB"
// import { useRouter } from 'next/navigation'


export default function SetupPage() {

    const [selected, setSelected] = useState<string | null>(null);
    const [name, setName] = useState("");


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
                <h1 className="text-lg font-bold">Avaliação de Usabilidade do Sistema Roadmap {" { "}TI{" } "}</h1>
                <div className="w-16" /> {/* Placeholder para equilibrar o espaço */}
            </nav>
            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdk41w4czpcyVP_G1wnk5PDfPtGS1T-vjBwJDCmbGb-x1Rhtw/viewform?embedded=true" width="640" height="700" >Carregando…</iframe>
            {/* Content */}

        </div>
    );
}
