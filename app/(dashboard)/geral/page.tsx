import InfoCard from "@/components/info-card"
import ScrollCard, { CardInfo } from "@/components/scroll-card"

const cards: CardInfo[] = [
  { unidade: "Unidade 1", previsto: 1 },
  { unidade: "Unidade 2", previsto: 2 },
  { unidade: "Unidade 3", previsto: 3 },
  { unidade: "Unidade 4", previsto: 4 },
  { unidade: "Unidade 5", previsto: 5 },
  { unidade: "Unidade 6", previsto: 6 },
  { unidade: "Unidade 7", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
  { unidade: "Unidade 8", previsto: 7 },
]

export default function DashboardPage() {
  return (
    <section className=" max-h-screen w-full space-y-8">
      <header className="flex h-20 w-full items-center justify-center rounded-lg bg-white dark:bg-gray-800">
        <h1 className="text-center text-5xl font-bold text-[#1F4E79] dark:text-gray-200 md:text-2xl lg:text-5xl">
          DADOS GERAIS REDE EMSERH
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-9">
        <InfoCard title="Quantitativo Total de RH da Rede" value="20.848" />
        <InfoCard title="Valor Total Mensal do PDT" value="225 Milhões" />
        <InfoCard title="Valor Total Mensal de Folha" value="198 Milhões" />
      </div>
      <div className="grid max-h-[28rem] grid-cols-3 gap-9">
        <ScrollCard cards={cards} />
        <ScrollCard cards={cards} />
        <ScrollCard cards={cards} />
      </div>
    </section>
  )
}
