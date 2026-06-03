"use client"
import Navbar from "@/app/components/nav"
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="min-h-screen text-black bg-[#F7F6F2] mb-6">
      <Navbar />
      <div className="pt-[2rem]">

        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">

          <h1 className="text-5xl md:text-6xl sm:text-5xl font-extrabold leading-tight text-[#0F0F0F] mt-2">
            Sobre o Projeto <br />
            {/* <span className="text-[#4A6CF7]">Tecnologia da Informação</span> */}
          </h1>
          {/* <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
          </p> */}
        </section>

        {/* Sobre o Projeto */}
        <div className="mx-auto md:flex md:max-w-7xl sm:block">
          <section className="md:max-w-3xl mx-auto px-6 pb-10">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-12">
              <h2 className="text-2xl font-bold text-[#0F0F0F] mb-4">O Grande Objetivo</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Este projeto foi desenvolvido como Trabalho de Conclusão de Curso (TCC) com o objetivo de democratizar o acesso à orientação profissional na área de Tecnologia da Informação. A área de TI é vasta e, muitas vezes, iniciantes se sentem perdidos diante de tantas possibilidades — sem saber por onde começar, quais tecnologias aprender ou qual caminho seguir.
              </p>
              <p className="text-gray-600 leading-relaxed">
                A plataforma reúne, em um só lugar, roadmaps estruturados para as principais trilhas de formação em TI, tornando a jornada de aprendizado mais clara, acessível e motivadora para qualquer pessoa que queira ingressar ou evoluir na área.
              </p>
            </div>
          </section>

          {/* O que são Roadmaps */}
          <section className="md:max-w-3xl mx-auto px-6 pb-10">
            <div className="bg-[#4A6CF7] rounded-2xl p-8 md:p-12 text-white">
              <div className="flex items-start gap-4">
                {/* <div className="text-4xl mt-1">🗺️</div> */}
                <div>
                  <h2 className="text-2xl font-bold mb-3">O que são Roadmaps?</h2>
                  <p className="leading-relaxed opacity-90 mb-3">
                    Roadmaps são mapas de aprendizado — guias visuais que organizam, de forma sequencial e lógica, os conhecimentos e habilidades necessários para dominar uma determinada área ou tecnologia.
                  </p>
                  <p className="leading-relaxed opacity-90">
                    Em vez de uma lista interminável de conteúdos sem ordem, o roadmap indica <strong>o que aprender primeiro, o que vem a seguir</strong> e quais são as ramificações possíveis ao longo do caminho. É uma bússola para quem quer se desenvolver na área de TI com propósito e direção.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* Divider Label */}
        <div className="max-w-5xl mx-auto px-6 pb-4">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-400">Trilhas disponíveis</p>
          <div className="h-px bg-gray-200 mt-2" />
        </div>

        {/* Cards de Áreas */}
        {/* <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-5 pb-16">

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🌐</div>
            <h2 className="text-xl font-bold text-[#0F0F0F]">Desenvolvimento Web</h2>
            <ul className="mt-3 space-y-1 text-gray-500 text-sm">
              <li>▸ HTML, CSS, JavaScript</li>
              <li>▸ Frameworks (React, Next.js, Vue)</li>
              <li>▸ Back-end (Node.js, Django, Spring Boot)</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">📊</div>
            <h2 className="text-xl font-bold text-[#0F0F0F]">Ciência de Dados</h2>
            <ul className="mt-3 space-y-1 text-gray-500 text-sm">
              <li>▸ Python, R, SQL</li>
              <li>▸ Machine Learning e IA</li>
              <li>▸ Big Data e Cloud Computing</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🔒</div>
            <h2 className="text-xl font-bold text-[#0F0F0F]">Segurança da Informação</h2>
            <ul className="mt-3 space-y-1 text-gray-500 text-sm">
              <li>▸ Redes e Protocolos</li>
              <li>▸ Criptografia e Ethical Hacking</li>
              <li>▸ Segurança em Cloud</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="text-3xl mb-3">🎮</div>
            <h2 className="text-xl font-bold text-[#0F0F0F]">Desenvolvimento de Jogos</h2>
            <ul className="mt-3 space-y-1 text-gray-500 text-sm">
              <li>▸ Game Engines (Unity, Unreal)</li>
              <li>▸ Programação (C#, C++)</li>
              <li>▸ Design de Jogos e IA</li>
            </ul>
          </div>

        </div> */}
        <div className="max-w-5xl mx-auto p-6 grid md:grid-cols-2 gap-5 pb-16">

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-3xl mb-3 items-center gap-2">
              💻
              <h2 className="text-xl font-bold text-[#0F0F0F]">Software</h2></div>

            <ul className="mt-3 space-y-1 text-gray-500 text-sm">
              <li>▸ Desenvolvimento Web e Mobile</li>
              <li>▸ Engenharia de Software</li>
              <li>▸ DevOps e Computação em Nuvem</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-3xl mb-3 items-center gap-2">
              🖥️
              <h2 className="text-xl font-bold text-[#0F0F0F]">Hardware</h2>

            </div>
            <ul className="mt-3 space-y-1 text-gray-500 text-sm">
              <li>▸ Arquitetura de Computadores</li>
              <li>▸ Sistemas Embarcados e IoT</li>
              <li>▸ Redes e Infraestrutura</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-3xl mb-3 items-center gap-2">
              📊
              <h2 className="text-xl font-bold text-[#0F0F0F]">Ciência de Dados</h2>
            </div>
            <ul className="mt-3 space-y-1 text-gray-500 text-sm">
              <li>▸ Análise e Visualização de Dados</li>
              <li>▸ Machine Learning e IA</li>
              <li>▸ Big Data e Cloud Computing</li>
            </ul>
          </div>

          <div className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex text-3xl mb-3 items-center gap-2">
              📋
              <h2 className="text-xl font-bold text-[#0F0F0F]">Gestão</h2>
            </div>
            <ul className="mt-3 space-y-1 text-gray-500 text-sm">
              <li>▸ Gerenciamento de Projetos (Scrum, Agile)</li>
              <li>▸ Governança de TI e ITIL</li>
              <li>▸ Produto e Experiência do Usuário</li>
            </ul>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
}