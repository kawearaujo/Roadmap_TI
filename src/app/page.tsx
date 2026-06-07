"use client"
// import Image from "next/image";
import bg from "@/img/bg1.jpg"
import Link from "next/link";
// import { usePathname } from "next/navigation";
import Navbar from "@/app/components/nav"
// import Footer from "./components/footer";
import { userDataStore } from "@/app/utils/indexedDB"

export default function Home() {
  //  Limpar Nome
  // userDataStore.saveUserAttribute("name", "")
  // const pathname = usePathname();
  return (
    <div className="min-h-screen text-black">

      <Navbar />

      <div className="">
        <section className="relative text-center py-20 h-[100vh] flex justify-center items-center">
          <div className="">
            {/* <h1 className="text-5xl font-bold mt-2 ">Encontre uma nova carreira no mundo da tecnológica!</h1>
            <h2 className="text-lg text-gray-500 uppercase pt-5">Se prepare para aumentar sua performance e ter uma experiência guiada para o sucesso profissional </h2> */}

            <section className="max-w-4xl mx-auto px-6 py-16 text-center">

              <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-[#0F0F0F] mt-2">
                Do Zero à Carreira em <br />
                <span className="text-[#4A6CF7]">Tecnologia da Informação</span>
              </h1>
              <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
                Uma plataforma visual e interativa que orienta estudantes e profissionais nos principais caminhos de formação na área de TI.
              </p>
            </section>

            <button className="hover:bg-blue-600 transition ease-in duration-300 mt-6 bg-blue-400 text-white px-6 py-3 rounded-full" >
              <Link href={"/config"}>
                Começar Agora</Link>
            </button>
          </div>
          <Link href="/setup" className="">
            <div className="absolute right-0 bottom-0 p-6">
              <div className="hover:bg-blue-200 ease-in duration-300 bg-white shadow-md p-4 rounded-xl flex items-center space-x-4">
                <div>
                  <h3 className="font-bold">Responder Formulário</h3>
                  <p className="text-sm text-gray-500">Formulário de Avaliação!</p>
                </div>
                <span className="text-2xl text-blue-600">→</span>
              </div>
            </div>
          </Link>
          <div className="absolute inset-0 -z-10 px-0 md:px-0 pt-0">
            <div className="w-full h-[100vh] overflow-hidden flex justify-center rounded-[0rem] md:rounded-[0srem]">
              <img src={bg.src} alt="" className="w-full object-none" />
            </div>
          </div>
        </section>
        {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdk41w4czpcyVP_G1wnk5PDfPtGS1T-vjBwJDCmbGb-x1Rhtw/viewform?embedded=true" width="640" height="2380">Carregando…</iframe> */}

        {/* <Footer /> */}
      </div>
    </div>

  );
}
