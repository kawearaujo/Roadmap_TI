"use client"
import bg from "@/img/bg1.jpg"
import Navbar from "../components/nav"
import Footer from "../components/footer";
import { JSX, useEffect, useState } from "react";
import { userDataStore } from "@/app/utils/indexedDB"

import { useRouter } from 'next/navigation'
type AreaCategory = Record<string, JSX.Element>;
type Areas = Record<string, AreaCategory>;
const areas: Areas = {
  Software: {

    "FullStack":
      <div className="">
        <p className="pb-1">O desenvolvimento frontend é o desenvolvimento de elementos visuais e interativos de um site com os quais os usuários interagem diretamente. É uma combinação basicamente de <span className="font-bold">HTML, CSS e JavaScript </span>, onde HTML fornece a estrutura, CSS o estilo e layout e JavaScript o comportamento dinâmico e interatividade.</p>
        <p className="pb-1">Porem existem algumas <i>Frameworks</i> <span className="text-blue-500">(framework fornece uma estrutura para todo o aplicativo.)</span> e Bibliotecas <span className="text-blue-500">(a biblioteca é especializada em uma funcionalidade)</span> baseadas em javascript que unificam trazem maior praticidade assim como segurança.</p>
        <p>Exemplos de Frameworks e Biblioteca:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Next Js</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">React Js</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Vue Js</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Angular</p>
          </div>
        </div>
      </div>
    ,
    "QA":
      <div className="">
        <p className="pb-1">
          O <span className="font-bold">Quality Assurance (QA)</span> é fundamental no desenvolvimento de software para garantir que os produtos atendam aos padrões de qualidade esperados. O QA envolve <span className="font-bold">testes, validação e verificação</span> de software, utilizando metodologias como <span className="font-bold">testes unitários, de integração, de sistema e de aceitação</span>, onde cada etapa busca identificar defeitos, garantir conformidade com requisitos e melhorar a experiência do usuário.
        </p>
        <p className="pb-1">Existem diversas <i>Ferramentas de Teste</i> <span className="text-blue-500">(são aplicações que auxiliam no processo de teste automatizado e manual, permitindo criar, executar e analisar testes de software de forma eficiente e padronizada.)</span></p>
        <p>Exemplos de Ferramentas de Teste:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Selenium</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">JUnit</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Postman</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Cypress</p>
          </div>
        </div>
      </div>,

    "GameDev":
      <div className="">
        <p className="pb-1">
          O desenvolvimento de <span className="font-bold">jogos digitais</span> envolve a criação de elementos visuais, lógicos e interativos com os quais os jogadores interagem diretamente. Ele combina <span className="font-bold">design, programação e narrativa</span>, utilizando tecnologias como <span className="font-bold">C#, Unity, Godot ou Unreal Engine</span>, onde a lógica de jogo é implementada via código, os gráficos e animações são definidos por assets e engines, e a interatividade é construída com sistemas de entrada, física e eventos do jogo.
        </p>
        <p className="pb-1">Porem existem algumas <i>Game Engines</i> <span className="text-blue-500">(são plataformas que fornecem as ferramentas necessárias para criar jogos, como gráficos, física, som, animações e scripts, facilitando o desenvolvimento sem precisar programar tudo do zero.)</span> </p>
        <p>Exemplos de Games Engines:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Unity</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">GameMaker</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Unreal</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Godot</p>
          </div>
        </div>
      </div>,

  },
  Hardware: {
    "Sistemas Embarcados":
      <div className="">
        <p className="pb-1">
          Os <span className="font-bold">sistemas embarcados</span> são sistemas computacionais dedicados projetados para executar funções específicas dentro de sistemas maiores. Consistem em <span className="font-bold">hardware e software integrados</span> utilizando tecnologias como <span className="font-bold">microcontroladores, FPGAs e SoCs</span>, onde o hardware fornece os recursos físicos, o firmware controla esses recursos, e interfaces conectam o sistema ao mundo externo.
        </p>
        <p className="pb-1">Existem várias <i>Plataformas de Desenvolvimento</i> <span className="text-blue-500">(são conjuntos de hardware e software que facilitam a criação de sistemas embarcados, oferecendo ferramentas de programação, depuração e teste para agilizar o desenvolvimento.)</span></p>
        <p>Exemplos de Plataformas:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Arduino</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Raspberry Pi</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">ESP32</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">STM32</p>
          </div>
        </div>
      </div>,
    "Robótica":
      <div className="">
        <p className="pb-1">
          A <span className="font-bold">robótica</span> é uma área interdisciplinar que envolve a concepção, construção e operação de robôs. Combina elementos de <span className="font-bold">engenharia mecânica, elétrica e computação</span>, utilizando tecnologias como <span className="font-bold">sensores, atuadores e sistemas de controle</span>, onde os sensores captam informações do ambiente, os atuadores realizam movimentos físicos e os algoritmos de controle tomam decisões baseadas nos dados coletados.
        </p>
        <p className="pb-1">Existem diversas <i>Plataformas Robóticas</i> <span className="text-blue-500">(são conjuntos de hardware e software que proporcionam a base para o desenvolvimento de sistemas robóticos, incluindo chassis, motores, controladores e ferramentas de programação específicas.)</span></p>
        <p>Exemplos de Plataformas Robóticas:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">ROS</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">LEGO Mindstorms</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Boston Dynamics</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">TurtleBot</p>
          </div>
        </div>
      </div>,
  },
  "Ciência": {
    "Data Science":
      <div className="">
        <p className="pb-1">
          A <span className="font-bold">Ciência de Dados</span> é uma área multidisciplinar que utiliza técnicas científicas para extrair insights e conhecimentos valiosos de dados. Combina <span className="font-bold">estatística, matemática e programação</span>, utilizando tecnologias como <span className="font-bold">Python, R, SQL e ferramentas de visualização</span>, onde a coleta e preparação de dados formam a base, análises estatísticas revelam padrões, e visualizações comunicam descobertas de forma eficaz.
        </p>
        <p className="pb-1">Existem diversas <i>Bibliotecas e Ferramentas</i> <span className="text-blue-500">(são conjuntos de funções e recursos que facilitam a manipulação, análise e visualização de dados, permitindo que cientistas de dados realizem tarefas complexas com menos código e maior eficiência.)</span></p>
        <p>Exemplos de Bibliotecas e Ferramentas:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Pandas</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Scikit-learn</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Tableau</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">TensorFlow</p>
          </div>
        </div>
      </div>,
    "IA":
      <div className="">
        <p className="pb-1">
          A <span className="font-bold">Inteligência Artificial</span> é um campo da computação dedicado a criar sistemas capazes de realizar tarefas que normalmente exigiriam inteligência humana. Ela integra <span className="font-bold">aprendizado de máquina, redes neurais e processamento de linguagem natural</span>, utilizando tecnologias como <span className="font-bold">Python, frameworks de deep learning e APIs cognitivas</span>, onde modelos são treinados com dados, algoritmos aprendem padrões e sistemas fazem previsões ou tomam decisões baseadas nesses aprendizados.
        </p>
        <p className="pb-1">Existem diversos <i>Frameworks de IA</i> <span className="text-blue-500">(são bibliotecas e plataformas que fornecem ferramentas para criar, treinar e implantar modelos de inteligência artificial, simplificando tarefas complexas de aprendizado de máquina e deep learning.)</span></p>
        <p>Exemplos de Frameworks de IA:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">TensorFlow</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">PyTorch</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Keras</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Hugging Face</p>
          </div>
        </div>
      </div>
  },
  "Gestão": {
    "Scrum Master":
      <div className="">
        <p className="pb-1">
          O <span className="font-bold">Scrum Master</span> é um facilitador que garante que a equipe Scrum siga as práticas e princípios do framework Scrum. Atua como <span className="font-bold">coach, facilitador e removedor de impedimentos</span>, utilizando <span className="font-bold">ferramentas ágeis, técnicas de facilitação e conhecimentos em gestão de conflitos</span>, onde o objetivo é maximizar a produtividade da equipe, promover a melhoria contínua e garantir a entrega de valor ao cliente.
        </p>
        <p className="pb-1">Existem diversas <i>Ferramentas Ágeis</i> <span className="text-blue-500">(são aplicações que ajudam equipes Scrum a planejar, acompanhar e gerenciar seu trabalho de forma visual e colaborativa, facilitando a implementação das práticas ágeis.)</span></p>
        <p>Exemplos de Ferramentas Ágeis:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Jira</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Trello</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Miro</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Azure DevOps</p>
          </div>
        </div>
      </div>,
    "Product Manager":
      <div className="">
        <p className="pb-1">
          O <span className="font-bold">Product Manager</span> é responsável por definir a visão do produto e traduzir necessidades de usuários em funcionalidades. Atua na intersecção entre <span className="font-bold">negócios, tecnologia e experiência do usuário</span>, utilizando <span className="font-bold">ferramentas de roadmap, pesquisa de usuário e análise de mercado</span>, onde a definição de requisitos, priorização de features e comunicação entre stakeholders são essenciais para entregar produtos que atendam às necessidades do mercado.
        </p>
        <p className="pb-1">Existem diversas <i>Ferramentas de Gestão de Produto</i> <span className="text-blue-500">(são aplicações que ajudam Product Managers a definir estratégias, planejar roadmaps, priorizar backlog e acompanhar métricas do produto, facilitando a tomada de decisões baseadas em dados.)</span></p>
        <p>Exemplos de Ferramentas de Gestão:</p>
        <div className="flex py-6 gap-2 justify-center">
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Productboard</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Aha!</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Pendo</p>
          </div>
          <div className="border border-blue-500 border-1 p-1">
            <p className="text-blue-500">Mixpanel</p>
          </div>
        </div>
      </div>,
  },
};

export default function Config1() {
  const [selectedArea, setSelectedArea] = useState("Software");
  const [areaAtual, setAreaAtual] = useState("");

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [pendingBranch, setPendingBranch] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const resumo = {
    'Software': "O desenvolvimento de software é a criação de aplicativos, sistemas e programas usando linguagens de programação e ferramentas de desenvolvimento, abrangendo desde o design até a implementação e manutenção.",
    'Hardware': "O desenvolvimento de hardware envolve a criação de componentes físicos, como circuitos, dispositivos e sistemas eletrônicos, utilizando conhecimentos de engenharia elétrica, mecânica e design para construir produtos tangíveis.",
    'Ciência': "A ciência de dados é uma disciplina que utiliza técnicas estatísticas, matemáticas e computacionais para extrair insights e conhecimento a partir de dados, aplicando-se em diversas áreas para tomada de decisões informadas.",
    'Gestão': "A gestão de projetos é a aplicação de conhecimentos, habilidades e técnicas para planejar, executar e controlar projetos, garantindo que sejam concluídos dentro do prazo, orçamento e escopo definidos."
  }
  const router = useRouter();

  const loadUserData = async () => {
    const userData = await userDataStore.getUserData();
    if (userData) {
      if (areaAtual == "") {
        setAreaAtual(userData.area);
      }
    }
  }

  useEffect(() => {
    console.log("atualizou")
    loadUserData();
  }, []);

  const confirmChange = async () => {


    await userDataStore.saveUserAttribute("area", selectedBranch!);
    await userDataStore.saveUserAttribute("roadmap", []);
    await userDataStore.saveUserAttribute("achievements", []);

    setSelectedBranch(null);
    setShowModal(false);
    router.push('/user');
  };
  const cancelChange = () => {
    setPendingBranch(null);
    setSelectedBranch(null);
    setShowModal(false);
  };
  return (
    <div className="min-h-screen h-full text-black bg-[#F7F6F2]">
      <Navbar />
      <div className="flex pb-20 flex-col justify-start items-center  relative pt-[2rem]">
        <div className="absolute inset-0 -z-10 ">
          <div className="w-[100vw] h-[100vh] flex justify-center object-fill">
            {/* <img src={bg.src} alt="" className="md:w-full object-fill object-none" /> */}
          </div>
        </div>
        <section className="max-w-4xl mx-auto px-6 py-16 text-center">

          <h1 className="text-4xl md:text-5xl sm:text-4xl font-extrabold leading-tight text-[#0F0F0F] mt-2">
            Encontre a área com maior compatibilidade<br />
          </h1>
        </section>

        <div className="md:flex grid grid-flow-col grid-rows-2 items-center justify-center ">
          {Object.keys(areas).map((area) => (
            <button
              key={area}
              className={`bg-white m-2 px-4 py-2 border transition duration-300 ${selectedArea === area ? "border-blue-500 border-3 shadow-md shadow-blue-500/50 " : "border-gray-400"}`}
              onClick={() => setSelectedArea(area)}
            >
              {area}
            </button>


          ))}
          {/* Modal de confirmação */}
          {showModal && (
            <div className=" fixed inset-0 bg-black/80 bg-opacity-50 flex items-center justify-center z-50">
              <div className=" bg-white rounded-xl p-6 md:max-w-sm w-[80vw] text-center shadow-lg">
                <h2 className="text-lg font-semibold mb-4">Tem certeza?</h2>
                {areaAtual == "" ? (
                  <p className="mb-6 text-gray-700">
                    Você escolheu <strong>{selectedBranch}</strong>. Deseja confirmar?
                  </p>
                ) :
                  <p className="mb-6 text-gray-700">
                    Já existe progresso na área de <strong>{areaAtual}</strong>. Deseja substituir por <strong>{selectedBranch}</strong>? (isso apagará seu progresso)
                  </p>
                }
                <div className="flex justify-between gap-4">
                  <button
                    onClick={cancelChange}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={confirmChange}
                    className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

        <div >
          <p className="bg-white p-5 rounded-lg shadow-md md:text-xl text-lg text-black-500 leading-relaxed m-10 md:mx-90 justify-center ">
            {resumo[selectedArea as keyof typeof resumo]}
          </p>
        </div>

        <div className="mt-6 p-4 border border-blue-400 rounded-lg flex justify-center space-x-4">

          {Object.keys(areas[selectedArea]).map((branch: any) => (// eslint-disable-line @typescript-eslint/no-explicit-any
            <button
              key={branch}
              className="bg-white px-4 py-2 border border-gray-400 rounded"
              onClick={() => setSelectedBranch(branch)}
            >
              {branch}
            </button>
          ))}
        </div>
      </div>

      {selectedBranch && (
        <div className="fixed inset-0 bg-gray-800/80 flex justify-center items-center">
          <div className="h-[70vh]  bg-white p-6 rounded-lg relative w-[90vw] md:w-[70vw]  pb-10">
            <button
              className="absolute top-2 right-2 text-red-500"
              onClick={() => setSelectedBranch(null)}
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-center">{selectedBranch}</h2>
            {/* <p className="mt-4"> */}
            <div className="h-[55vh] overflow-y-auto">
              {areas[selectedArea][selectedBranch]}
            </div>
            {/* </p> */}
            <div className="absolute bottom-2 flex gap-6 w-[92%] md:w-[95%] justify-center">
              <button className="px-4 py-2 bg-green-300 hover:bg-green-400 rounded" onClick={() => {
                setShowModal(true)
                // setSelectedBranch(null)
              }
              }>Continuar</button>

            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
