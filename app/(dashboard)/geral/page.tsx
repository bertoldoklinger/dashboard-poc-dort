import { Suspense } from "react"
import { Grid } from "@tremor/react"

import InfoCard from "@/components/info-card"
import { Piechart } from "@/components/piechart"

import { SkeletonInfoCard } from "./components/skeleton"
import ScrollCard from "@/components/scroll-card"
import { card } from "@nextui-org/react"

interface CardInfo {
  rhTotal: number;
  totalMonthlyPdtValue: number;
  sumValue: {
    insalubridade: number;
    adicionalNoturno: number;
    encargos: number;
  };
  scrollCardInfo: {
    [unidade: string]: {
      rhTotal: number;
      totalMensal: number;
    };
  };
}

async function getCardInfo(): Promise<CardInfo> {
  const response = await fetch("http://localhost:3333/macropdtreport", {
    cache: "no-store",
  })
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const cardInfo = await response.json()

  return cardInfo
}

export default async function DashboardPage() {
  const cardInfo = await getCardInfo()
  const cards = Object.entries(cardInfo.scrollCardInfo).map(([unidade, { rhTotal, totalMensal }]) => ({
    unidade,
    rh: rhTotal,
    previsto: totalMensal
  }))
  console.log(cardInfo.scrollCardInfo)
  return (
    <section className=" max-h-screen w-full space-y-8">
      <header className="flex h-20 w-full items-center justify-center rounded-lg bg-white dark:bg-gray-800">
        <h1 className="text-center text-3xl font-bold text-[#1F4E79] dark:text-gray-200 md:text-2xl lg:text-[38px]">
          GERENCIAMENTO DE ORÇAMENTO
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-9">
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="RH" value={cardInfo.rhTotal} />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="Custo de Pessoal" value={cardInfo.totalMonthlyPdtValue} isCurrency />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="Vale Transporte" value={0} isCurrency />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard
            title="Insalubridade"
            value={cardInfo.sumValue.insalubridade}
            isCurrency
          />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard
            title="Adicional Noturno"
            value={cardInfo.sumValue.adicionalNoturno}
            isCurrency
          />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="Encargo" value={cardInfo.sumValue.encargos} isCurrency />
        </Suspense>
      </div>
      <Grid numItemsMd={2} numItemsLg={2} className="gap-6">
        <ScrollCard cards={cards} isCurrency />
        <Piechart />
      </Grid>
    </section>
  )
}
