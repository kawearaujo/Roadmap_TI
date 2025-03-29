"use client"
import Image from "next/image";
import bg from "@/img/bg1.jpg"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Navbar from "@/app/components/nav"
import Footer from "../components/footer";

export default function Home() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen text-black">
      <Navbar/>
      <div className="pt-[6rem]">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold">Seu Guia de Carreira em Computação</h1>
        <p className="text-lg text-gray-600 mt-4 px-6">
          Descubra caminhos para diferentes áreas da computação e comece sua jornada de aprendizado.
        </p>
      </section>

      {/* Roadmap de Áreas */}
      <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6">
        
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Desenvolvimento Web</h2>
          <ul className="mt-2 text-gray-600">
            <li>🔹 HTML, CSS, JavaScript</li>
            <li>🔹 Frameworks (React, Next.js, Vue)</li>
            <li>🔹 Back-end (Node.js, Django, Spring Boot)</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Ciência de Dados</h2>
          <ul className="mt-2 text-gray-600">
            <li>🔹 Python, R, SQL</li>
            <li>🔹 Machine Learning e IA</li>
            <li>🔹 Big Data e Cloud Computing</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Segurança da Informação</h2>
          <ul className="mt-2 text-gray-600">
            <li>🔹 Redes e Protocolos</li>
            <li>🔹 Criptografia e Ethical Hacking</li>
            <li>🔹 Segurança em Cloud</li>
          </ul>
        </div>

        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Desenvolvimento de Jogos</h2>
          <ul className="mt-2 text-gray-600">
            <li>🔹 Game Engines (Unity, Unreal)</li>
            <li>🔹 Programação (C#, C++)</li>
            <li>🔹 Design de Jogos e IA</li>
          </ul>
        </div>
      </div>
     <Footer/>
    </div></div>
  );
}
