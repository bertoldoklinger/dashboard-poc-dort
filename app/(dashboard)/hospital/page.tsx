import InfoCard from "@/components/info-card"
import { ReportTable } from "@/components/report-table"
import { Suspense } from "react"
import { SkeletonInfoCard } from "../geral/components/skeleton"

async function getCardInfo() {
  const response = await fetch("http://localhost:3333/macropdtreport", {
    cache: "no-store",
  })
  if (!response.ok) {
    throw new Error("Failed to fetch data")
  }
  const cardInfo = await response.json()

  return cardInfo
}

export default async function HospitalDashboard() {

  const cardInfo = await getCardInfo() // const rhByUnidade = data.rhByUnidade
  // const rhTotalByUnidade = Object.entries(rhByUnidade).map(([unidade, previsto]) => ({ unidade, previsto: Number(previsto) }));
  // const totalMonthlyPdtValueByUnidade = data.totalMonthlyPdtValueByUnidade
  // const totalMonthlyPdtValueFormatted = Object.entries(totalMonthlyPdtValueByUnidade).map(([unidade, previsto]) => ({ unidade, previsto: Number(previsto) }));
  return (
    <section className=" max-h-screen w-full space-y-8">
      <header className="flex h-20 w-full items-center justify-center rounded-lg bg-white dark:bg-gray-800">
        <h1 className="text-center text-3xl font-bold text-[#1F4E79] dark:text-gray-200 md:text-2xl lg:text-[38px]">
          🏥 DADOS HOSPITAIS EMSERH
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-9 ">
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="RH Total PDT" value={cardInfo.rhTotal} />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="RH Total Folha" value={29384} />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="Saldo" value={-9342} />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard
            title="Salário Total PDT"
            value={cardInfo.totalMonthlyPdtValue}
            isCurrency
          />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard
            title="Salário Total Folha"
            value={cardInfo.totalMonthlyPdtValue}
            isCurrency
          />
        </Suspense>
        <Suspense fallback={<SkeletonInfoCard />}>
          <InfoCard title="Saldo" value={0} isCurrency />
        </Suspense>
      </div>
      <div>
        <ReportTable />
      </div>
    </section>
  )
}

