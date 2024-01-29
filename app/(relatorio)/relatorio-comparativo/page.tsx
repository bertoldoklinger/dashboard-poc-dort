
import { CommandDialogDemo } from "../../../components/command-dialog";


export default function RelatorioPage() {
  return (
    <div className="container flex flex-col gap-10">
      <h1 className="text-center font-extrabold tracking-tight text-gray-100 sm:text-6xl">
        Relatório Comparativo PDT X Folha
      </h1>
      <CommandDialogDemo />
    </div>
  )
}
