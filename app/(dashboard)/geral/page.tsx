import InfoCard from "@/components/info-card"
import ScrollCard, { CardInfo } from "@/components/scroll-card"
import { Suspense } from "react"
import { SkeletonCard, SkeletonInfoCard } from "./components/skeleton"

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

async function getCardInfo() {
  const response = await fetch("http://localhost:3333/macropdtreport", { cache: 'no-store' })
  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await response.json()

  return data
}

export default async function DashboardPage() {
  const data = await getCardInfo()
  const rhByUnidade = data.rhByUnidade
  const rhTotalByUnidade = Object.entries(rhByUnidade).map(([unidade, previsto]) => ({ unidade, previsto: Number(previsto) }));
  const totalMonthlyPdtValueByUnidade = data.totalMonthlyPdtValueByUnidade
  const totalMonthlyPdtValueFormatted = Object.entries(totalMonthlyPdtValueByUnidade).map(([unidade, previsto]) => ({ unidade, previsto: Number(previsto) }));
  return (
    <section className=" max-h-screen w-full space-y-8">
      <header className="flex h-20 w-full items-center justify-center rounded-lg bg-white dark:bg-gray-800">
        <h1 className="text-center text-3xl font-bold text-[#1F4E79] dark:text-gray-200 md:text-2xl lg:text-[38px]">
          DADOS GERAIS REDE EMSERH
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-9">
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="Quantitativo Total de RH da Rede" value={data.rhTotal} />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="Valor Total Mensal do PDT" value={data.totalMonthlyPdtValue} />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="Valor Total Mensal de Folha" value={198000000} />
        </Suspense>
      </div>
      <div className="grid max-h-[28rem] grid-cols-3 gap-9">
        <Suspense fallback={<SkeletonCard />}>
          <ScrollCard cards={rhTotalByUnidade} />
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <ScrollCard cards={totalMonthlyPdtValueFormatted} isCurrency />
        </Suspense>
        <Suspense fallback={<SkeletonCard />}>
          <ScrollCard cards={cards} />
        </Suspense>
      </div>
    </section>
  )
}
