'use client'

import { Grid } from "@tremor/react"

import InfoCard from "@/components/info-card"
import { Piechart } from "@/components/piechart"

import ScrollCard from "@/components/scroll-card"
import { useQuery } from "@tanstack/react-query"
import { getCardInfo } from "@/app/_api/getCardInfo"
import { useSearchParams } from "next/navigation"
import { SkeletonInfoCard } from "./components/skeleton"



export default function DashboardPage() {
  const searchParams = useSearchParams()

  const unidadeHospitalar = searchParams.get('unidadeHospitalar')
  const tipoUnidade = searchParams.get('tipoUnidade')
  const categoriaUnidade = searchParams.get('categoriaUnidade')
  const tipoSetor = searchParams.get('tipoSetor')
  const setor = searchParams.get('setor')
  const regiao = searchParams.get('regiao')

  console.log({ unidadeHospitalar, tipoUnidade, categoriaUnidade, tipoSetor, setor, regiao })

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

  if (isLoadingCard) {
    return (
      <div className="flex w-full items-center justify-center pb-40">
        <div className="grid w-full grid-cols-3 gap-9">
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
          <SkeletonInfoCard />
        </div>
      </div>
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
          GERENCIAMENTO DE ORÇAMENTO
        </h1>
      </header>
      <div className="grid grid-cols-3 gap-6">
        <InfoCard title="RH" value={cardInfo.cardsData.rh} />
        <InfoCard title="Custo de Pessoal" value={cardInfo.cardsData.totalMensal} isCurrency />
        <InfoCard title="Encargo" value={cardInfo.cardsData.encargos} isCurrency />
        <InfoCard title="Insalubridade" value={cardInfo.cardsData.insalubridade} isCurrency />
        <InfoCard title="Gratificação" value={cardInfo.cardsData.gratificacao} isCurrency />
        <InfoCard title="Vale Transporte" value={cardInfo.cardsData.valeTransporte} isCurrency />
        <InfoCard title="Adicional Noturno" value={cardInfo.cardsData.adicionalNoturno} isCurrency />
        <InfoCard title="Periculosidade" value={cardInfo.cardsData.periculosidade} isCurrency />
        <InfoCard title="Custo Mensal Realizado(Folha)" value={0} isCurrency />
      </div>
      <Grid numItemsMd={2} numItemsLg={2} className="h-20 gap-5">
        <ScrollCard cards={cards} isCurrency />
        <Piechart {...cardInfo.cardsData} />
      </Grid>
    </section>
  )
}

