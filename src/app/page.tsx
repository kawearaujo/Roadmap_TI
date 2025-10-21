"use client"
// import Image from "next/image";
import bg from "@/img/bg1.jpg"
import Link from "next/link";
// import { usePathname } from "next/navigation";
import Navbar from "@/app/components/nav"
import Footer from "./components/footer";

export default function Home() {
  // const pathname = usePathname();
  return (
    <div className="min-h-screen text-black">

      <Navbar />
      <div className="pt-[6rem]">
        <section className="relative text-center py-20 h-[80vh] flex justify-center items-center">
          <div className="">
            <h1 className="text-5xl font-bold mt-2 ">Encontre uma nova carreira no mundo da tecnológica!</h1>
            <h2 className="text-lg text-gray-500 uppercase pt-5">Se prepare para aumentar sua performance e ter uma experiência guiada para o sucesso profissional </h2>

            <button className="hover:bg-blue-600 transition ease-in duration-300 mt-6 bg-blue-400 text-white px-6 py-3 rounded-full" >
              <Link href={"/setup"}>
                Começar Agora</Link>
            </button>
          </div>
          <Link href="/config" className="">
            <div className="absolute right-0 bottom-0 p-6">
              <div className="hover:bg-blue-200 ease-in duration-300 bg-white shadow-md p-4 rounded-xl flex items-center space-x-4">
                <div>
                  <h3 className="font-bold">Áreas de Atuação</h3>
                  <p className="text-sm text-gray-500">Descubra a área que mais te interessa!</p>
                </div>
                <span className="text-2xl text-blue-600">→</span>
              </div>
            </div>
          </Link>
          <div className="absolute inset-0 -z-10 px-0 md:px-10 pt-2">
            <div className="w-full h-[80vh] overflow-hidden flex justify-center rounded-[0rem] md:rounded-[5rem]">
              <img src={bg.src} alt="" className="w-full object-none" />
            </div>
          </div>
        </section>


        <Footer />
      </div>
    </div>

  );
}
