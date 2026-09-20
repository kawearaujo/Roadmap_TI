"use client"
// import Image from "next/image";
import bg from "@/img/bg1.jpg"
import Link from "next/link";
import { ChangeEvent, useState } from "react";
// import { usePathname } from "next/navigation";
import Navbar from "@/app/components/nav"
// import Footer from "./components/footer";
import { parseUserDataBackup, userDataStore } from "@/app/utils/indexedDB"

export default function Home() {
  const [showImportModal, setShowImportModal] = useState(false);
  const [notification, setNotification] = useState<"success" | "error" | null>(null);
  const [isImporting, setIsImporting] = useState(false);

  const handleImport = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    event.target.value = "";

    if (!file) {
      return;
    }

    setIsImporting(true);
    try {
      const importedData = parseUserDataBackup(JSON.parse(await file.text()));
      if (!importedData) {
        setNotification("error");
        return;
      }

      await userDataStore.saveUserData(importedData);
      setShowImportModal(false);
      setNotification("success");
    } catch {
      setNotification("error");
    } finally {
      setIsImporting(false);
    }
  };

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

            <section className="max-w-4xl mx-auto px-6  text-center">

              <h1 className="text-3xl md:text-6xl font-extrabold leading-tight text-[#0F0F0F] mt-2">
                Do Zero à Carreira em <br />
                <span className="text-[#4A6CF7]">Tecnologia da Informação</span>
              </h1>
              <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
                Uma plataforma visual e interativa que orienta estudantes e profissionais nos principais caminhos de formação na área de TI.
              </p>
            </section>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/config" className="rounded-full bg-blue-400 px-6 py-3 text-white transition duration-300 ease-in hover:bg-blue-600">
                Começar Agora
              </Link>
              <button
                type="button"
                className="rounded-full border border-blue-500 bg-white/90 px-6 py-3 text-blue-700 transition duration-300 ease-in hover:bg-blue-50"
                onClick={() => {
                  setNotification(null);
                  setShowImportModal(true);
                }}
              >
                Carregar Progresso +
              </button>
            </div>
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

      {showImportModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true" aria-labelledby="import-title">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="import-title" className="text-2xl font-bold text-slate-900">Carregar progresso</h2>
                <p className="mt-2 text-sm text-slate-600">Selecione um arquivo JSON exportado pelo RoadMap TI.</p>
              </div>
              <button
                type="button"
                aria-label="Fechar janela"
                className="text-2xl leading-none text-slate-500 hover:text-slate-900"
                onClick={() => setShowImportModal(false)}
              >
                &times;
              </button>
            </div>

            <label className="mt-6 block cursor-pointer rounded-xl border-2 border-dashed border-blue-300 bg-blue-50 px-4 py-8 text-center text-sm font-semibold text-blue-700 transition hover:border-blue-500 hover:bg-blue-100">
              {isImporting ? "Analisando arquivo..." : "Selecionar arquivo JSON"}
              <input type="file" accept="application/json,.json" className="sr-only" onChange={handleImport} disabled={isImporting} />
            </label>

            <button
              type="button"
              className="mt-4 w-full rounded-lg bg-slate-100 px-4 py-2 font-semibold text-slate-700 hover:bg-slate-200"
              onClick={() => setShowImportModal(false)}
              disabled={isImporting}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}

      {notification && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4" role="alertdialog" aria-modal="true" aria-labelledby="notification-title">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl">
            <h2 id="notification-title" className={`text-2xl font-bold ${notification === "success" ? "text-emerald-700" : "text-red-700"}`}>
              {notification === "success" ? "Progresso Identificado" : "Arquivo não compatível"}
            </h2>
            <p className="mt-3 text-slate-600">
              {notification === "success"
                ? "Seu progresso foi carregado com sucesso."
                : "Selecione uma exportação válida do RoadMap TI."}
            </p>
            {notification === "success" ? (
              <Link href="/user" className="mt-6 block w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white hover:bg-blue-700">
                Ir para área do usuário
              </Link>
            ) : (
              <button
                type="button"
                className="mt-6 w-full rounded-lg bg-slate-100 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-200"
                onClick={() => setNotification(null)}
              >
                Fechar
              </button>
            )}
          </div>
        </div>
      )}
    </div>

  );
}
