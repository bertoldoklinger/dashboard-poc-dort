"use client"

import { Card, DonutChart, Title } from "@tremor/react"

interface CardsData {
  rh: number;
  totalMensal: number;
  valeTransporte: number;
  insalubridade: number;
  adicionalNoturno: number;
  encargos: number;
  gratificacao: number
  periculosidade: number
}


interface Payload {
  color: string
  name: string
  value: number
}
const valueFormatter = (number: number): string =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(number);

const customTooltip = ({
  payload,
  active,
}: {
  payload: Payload[] | undefined
  active: boolean
}) => {
  if (!active || !payload) return null
  const categoryPayload = payload?.[0]
  if (!categoryPayload) return null
  return (
    <div className="w-56 rounded-tremor-default border border-tremor-border bg-tremor-background p-2 text-tremor-default shadow-tremor-dropdown">
      <div className="flex flex-1 space-x-2.5">
        <div
          className={`bg-${categoryPayload?.color}-500 flex w-1.5 flex-col rounded`}
        />
        <div className="w-full">
          <div className="flex items-center justify-between space-x-8">
            <p className="whitespace-nowrap text-right text-tremor-content">
              {categoryPayload.name}
            </p>
            <p className="whitespace-nowrap text-right font-medium text-tremor-content-emphasis">
              {categoryPayload.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Piechart({ adicionalNoturno, encargos, gratificacao, insalubridade, periculosidade, valeTransporte }: CardsData) {
  const data = [
    {
      name: "Encargo",
      sales: encargos,
    },
    {
      name: "Insalubridade",
      sales: insalubridade,
    },
    {
      name: "Gratificacao",
      sales: gratificacao,
    },
    {
      name: "Vale Transporte",
      sales: valeTransporte,
    },
    {
      name: "Adicional Noturno",
      sales: adicionalNoturno,
    },
    {
      name: "Periculosidade",
      sales: periculosidade,
    },
  ]
  return (
    <Card className="dark:bg-gray-800">
      <div className="m-auto h-60">
        <Title>Composição Custo Total Mensal</Title>
        <div>
          <DonutChart
            data={data}
            index="name"
            category="sales"
            showAnimation={true}
            showTooltip={true}
            colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
            variant="donut"
            showLabel
            className="text-sm"
            customTooltip={customTooltip}
            valueFormatter={valueFormatter}
            onValueChange={(value) => {
              console.log("value", value)
            }}
            noDataText="Dados não disponíveis"
          />
          {/* <div className="flex flex-col gap-3">
            <div className="h-2 w-2 rounded-full bg-rose-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-orange-500" />
            <div className="h-2 w-2 rounded-full bg-indigo-500" />
            <div className="h-2 w-2 rounded-full bg-blue-500" />
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
          </div> */}
        </div>
      </div>
    </Card>
  )
}
