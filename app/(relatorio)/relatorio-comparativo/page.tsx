
import { TypewriterEffect } from "@/components/ui/type-writer-text";
import { CommandDialogInput } from "../../../components/command-dialog-input";


export default function RelatorioPage() {
  return (
    <div className="container flex flex-col items-center justify-center gap-10">
      <h1 className="text-center font-bold tracking-tight text-white sm:text-6xl">
        Relatório Comparativo PDT X Folha
      </h1>
      <p className="text-lg text-gray-100">Referência: Janeiro/2024</p>
      <CommandDialogInput />
    </div>
  )
}
