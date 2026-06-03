"use client"
// import Image from "next/image";
// import bg from "@/img/bg1.jpg"
// import Link from "next/link";
// import { usePathname } from "next/navigation";
import Navbar from "@/app/components/nav"
import Footer from "../components/footer";

export default function Home() {
  // const pathname = usePathname();
  return (
    <div className="min-h-screen text-black">
      <Navbar />
      <div className="pt-[2rem]">
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">

          <h1 className="text-5xl md:text-6xl sm:text-5xl font-extrabold leading-tight text-[#0F0F0F] mt-2">
            Dicas para sua Carreira de TI<br />
            {/* <span className="text-[#4A6CF7]">Tecnologia da Informação</span> */}
          </h1>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
            Encontre oportunidades de emprego e aprimore seu portfólio com essas dicas essenciais.
          </p>
        </section>
        {/* <section className="text-center py-14">
          <h1 className="text-4xl font-bold">Dicas para sua Carreira em TI</h1>
          <p className="text-lg text-gray-600 mt-4 px-6">
            
          </p>
        </section> */}

        {/* Seção: Sites de Vagas */}
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">🔍 Sites para Busca de Vagas</h2>
            <ul className="mt-2 text-gray-600">
              <li>➡️ <a href="https://www.linkedin.com/jobs/" className="text-blue-600 underline">LinkedIn Jobs</a></li>
              <li>➡️ <a href="https://www.indeed.com/" className="text-blue-600 underline">Indeed</a></li>
              <li>➡️ <a href="https://www.remotive.io/" className="text-blue-600 underline">Remotive (Vagas Remotas)</a></li>
              <li>➡️ <a href="https://www.weworkremotely.com/" className="text-blue-600 underline">We Work Remotely</a></li>
            </ul>
          </div>

          {/* Seção: Criando um Portfólio */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">💼 Como Criar um Portfólio?</h2>
            <ul className="mt-2 text-gray-600">
              <li>➡️ Use o <a href="https://github.com/" className="text-blue-600 underline">GitHub</a> para armazenar projetos</li>
              <li>➡️ Crie um site no <a href="https://vercel.com/" className="text-blue-600 underline">Vercel</a> ou <a href="https://netlify.com/" className="text-blue-600 underline">Netlify</a></li>
              <li>➡️ Utilize templates no <a href="https://www.figma.com/" className="text-blue-600 underline">Figma</a></li>
            </ul>
          </div>

          {/* Seção: Aprimorando Habilidades */}
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">📚 Materiais para Estudo</h2>
            <ul className="mt-2 text-gray-600">
              <li>➡️ <a href="https://roadmap.sh/" className="text-blue-600 underline">Roadmap.sh</a> – Roteiros de aprendizado</li>
              <li>➡️ <a href="https://www.freecodecamp.org/" className="text-blue-600 underline">freeCodeCamp</a> – Cursos gratuitos</li>
              <li>➡️ <a href="https://www.codecademy.com/" className="text-blue-600 underline">Codecademy</a> – Aprenda programando</li>
            </ul>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">🎥 Canais do YouTube para Aprendizado</h2>
            <ul className="mt-2 text-gray-600">
              <li>➡️ <a href="https://www.youtube.com/c/TraversyMedia" className="text-blue-600 underline">Traversy Media</a> – Desenvolvimento Web</li>
              <li>➡️ <a href="https://www.youtube.com/c/TheNetNinja" className="text-blue-600 underline">The Net Ninja</a> – Tutoriais de Programação</li>
              <li>➡️ <a href="https://www.youtube.com/c/Academind" className="text-blue-600 underline">Academind</a> – React, Node.js e mais</li>
              <li>➡️ <a href="https://www.youtube.com/c/Alura" className="text-blue-600 underline">Alura</a> – Tecnologia e Carreira</li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
