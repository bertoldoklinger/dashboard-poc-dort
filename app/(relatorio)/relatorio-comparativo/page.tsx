
import { TypewriterEffect } from "@/components/ui/type-writer-text";
import { CommandDialogInput } from "../../../components/command-dialog-input";


export default function RelatorioPage() {
  const words = [
    { text: "Relatório", className: "text-muted" },
    { text: "Comparativo", className: "text-muted" },
    { text: "PDT", className: "text-muted" },
    { text: "x", className: "text-muted" },
    { text: "Folha", className: "text-muted" },
  ];
  return (
    <div className="container flex flex-col items-center justify-center gap-10">
      {/* <h1 className="text-center font-bold tracking-tight text-muted sm:text-6xl">
        Relatório Comparativo PDT X Folha

      </h1> */}
      <TypewriterEffect words={words} className="sm-text-6xl text-center font-bold tracking-tight text-white" cursorClassName="text-white" />
      <p className="text-lg  text-muted">Referência: Janeiro/2024</p>
      <CommandDialogInput />
    </div>
  )
}
