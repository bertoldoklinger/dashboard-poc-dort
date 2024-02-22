'use client'

import { Grid } from "@tremor/react"

import InfoCard from "@/components/info-card"

import ScrollCard from "@/components/scroll-card"
import { useQuery } from "@tanstack/react-query"
import { getCardInfo } from "@/app/_api/getCardInfo"
import { useSearchParams } from "next/navigation"
import { SkeletonInfoCard } from "./components/skeleton"
import { Skeleton } from "@nextui-org/react"
import { getInfoFolha } from "@/app/_api/getInfoFolha"



export default function DashboardPage() {

  const searchParams = useSearchParams()

  const unidadeHospitalar = searchParams.get('unidadeHospitalar')
  const tipoUnidade = searchParams.get('tipoUnidade')
  const categoriaUnidade = searchParams.get('categoriaUnidade')
  const tipoSetor = searchParams.get('tipoSetor')
  const setor = searchParams.get('setor')
  const regiao = searchParams.get('regiao')

  const { data: cardInfo, isLoading: isLoadingCard } = useQuery({
    queryKey: ['dashboardData', tipoUnidade, categoriaUnidade, tipoSetor, setor, regiao, unidadeHospitalar],
    queryFn: () => getCardInfo({
      tipoUnidade,
      categoriaUnidade,
      tipoSetor,
      setor,
      regiao,
      unidadeHospitalar: unidadeHospitalar === 'TODAS' ? null : unidadeHospitalar
    })
  })
  const { data: InfoFolha } = useQuery({
    queryKey: ['folhaInfo'],
    queryFn: () => getInfoFolha()
  })

  if (isLoadingCard) {
    return (
      <section className="max-h-screen w-full space-y-8">
        <header className="flex h-14 w-full items-center justify-center rounded-lg bg-white dark:bg-gray-800">
          <h1 className="text-center text-3xl font-bold tracking-tighter text-[#1F4E79] dark:text-gray-200  md:text-2xl lg:text-[35px]">
            GERENCIAMENTO DE ORÇAMENTO MENSAL
          </h1>
        </header>
        <div className="grid grid-cols-3 gap-6">
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
        </div>
        <Grid className="h-72 w-full space-y-4 rounded-lg border-2 p-4 ">
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg" isLoaded>
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg" isLoaded>
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg" isLoaded>
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg" isLoaded>
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg" isLoaded>
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg" isLoaded>
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg" isLoaded>
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg" isLoaded>
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg" isLoaded>
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Grid>
      </section>
    )
  }

  if (!cardInfo) {
    return <div>Erro ao carregar dados</div>
  }

  const cards = Object.entries(cardInfo.scrollCardInfo).map(([unidade, { rhTotal, totalMensal }]) => ({
    unidade,
    rh: rhTotal,
    previsto: totalMensal
  }))

  return (
    <section className=" max-h-screen w-full space-y-6">
      <header className="flex h-14 w-full items-center justify-center rounded-lg bg-white dark:bg-gray-800">
        <h1 className="text-center text-3xl font-bold tracking-tighter text-[#1F4E79] dark:text-gray-200 md:text-2xl lg:text-[35px]">
          GERENCIAMENTO DE ORÇAMENTO MENSAL
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-6">
        <InfoCard title="RH" value={cardInfo.cardsData.rh} />
        <InfoCard title="Custo de Pessoal" value={cardInfo.cardsData.totalMensal} isCurrency />
        <InfoCard title="Encargos" value={cardInfo.cardsData.encargos} isCurrency />
        <InfoCard title="Insalubridade" value={cardInfo.cardsData.insalubridade} isCurrency />
        <InfoCard title="Gratificação" value={cardInfo.cardsData.gratificacao} isCurrency />
        <InfoCard title="Vale Transporte" value={cardInfo.cardsData.valeTransporte} isCurrency />
        <InfoCard title="Adicional Noturno" value={cardInfo.cardsData.adicionalNoturno} isCurrency />
        <InfoCard title="Periculosidade" value={cardInfo.cardsData.periculosidade} isCurrency />
        <InfoCard title="Custo Mensal Folha" value={61608124.84} percentage={(61608124.84 / cardInfo.cardsData.totalMensal)} isCurrency />
      </div>
      <Grid numItemsMd={1} numItemsLg={1} className="h-72 gap-5">
        {unidadeHospitalar === null ? <ScrollCard cards={cards} isCurrency isFiltered={!!unidadeHospitalar && unidadeHospitalar !== 'TODAS'} /> : <ScrollCard cards={cards} isCurrency isFiltered={!!unidadeHospitalar && unidadeHospitalar !== 'TODAS'} />}
        {/* <Piechart {...cardInfo.cardsData} /> */}
      </Grid>
    </section>
  )
}

