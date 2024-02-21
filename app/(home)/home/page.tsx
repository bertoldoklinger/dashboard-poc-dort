import { ArrowLeft, ArrowRight, Pizza } from "lucide-react";
// import Image from 'next/image'
import Link from 'next/link'
import { Image } from "@nextui-org/react";
import Header from "@/components/header";


export default function HomePage() {
  return (
    <>
      <Header showHomeIcon={false} />
      <div className="grid min-h-screen grid-cols-2 antialiased">
        <div className="flex h-full flex-col justify-between space-y-4 border-r border-foreground/5 bg-[#DBE2F3]  py-10 text-muted-foreground">
          <div className="flex items-center gap-3 pl-6 text-lg font-medium text-foreground 2xl:pl-0">
            {/* <Image
              src="/logo-emserh.png"
              alt="Logo"
              width={200}
              height={300}
            /> */}
          </div>

          <Link href={'/relatorio-comparativo'}>
            <div className="flex cursor-pointer items-center justify-between rounded-lg bg-[#DBE2F3] pr-6 hover:bg-white 2xl:gap-6">
              <ArrowLeft className="h-20 w-20 text-tremor-background-emphasis" />
              <h1 className="text-4xl font-medium uppercase tracking-tighter text-tremor-background-emphasis">Relatório Comparativo</h1>
            </div>
          </Link>

          <footer className="px-5 text-sm 2xl:px-4">

            Visão RH &copy; EMSERH - {new Date().getFullYear()} | Desenvolvido por Bertoldo Klinger, João Lucas Silva e Pedro Guilherme Silva
            <br />
            <span>Gerência de Desenvolvimento de Pessoas | Gerência de Relações Trabalhistas</span>
            <br />
            <span className="font-bold">Versão Beta 0.1.0</span>

          </footer>
        </div>


        <div className="flex items-center justify-center">
          <Link href={'/geral'} className="w-full cursor-pointer">
            <div className="mb-5 flex w-full cursor-pointer flex-row items-center justify-between rounded-lg pl-6 hover:bg-white  2xl:mb-[58px] 2xl:pl-6">
              <h1 className="text-4xl font-medium uppercase tracking-tighter text-tremor-background-emphasis dark:text-muted-foreground">Gerenciamento de Orçamento</h1>
              <ArrowRight className="h-20 w-20 text-tremor-background-emphasis dark:text-muted-foreground" />
            </div>
          </Link>
        </div>


      </div>
    </>
  )
}
