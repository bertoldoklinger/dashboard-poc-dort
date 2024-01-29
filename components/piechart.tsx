"use client"

import { Card, DonutChart, Title } from "@tremor/react"

const cities = [
  {
    name: "New York",
    sales: 9800,
  },
  {
    name: "London",
    sales: 4567,
  },
  {
    name: "Hong Kong",
    sales: 3908,
  },
  {
    name: "San Francisco",
    sales: 2400,
  },
  {
    name: "Singapore",
    sales: 1908,
  },
  {
    name: "Zurich",
    sales: 1398,
  },
]

interface Payload {
  color: string
  name: string
  value: number
}
const valueFormatter = (number: number) =>
  `$ ${new Intl.NumberFormat("us").format(number).toString()}`

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

export function Piechart() {
  return (
    <Card className="dark:bg-gray-800">
      <div className="m-auto h-60">
        <Title>Composição Custo Total Mensal</Title>
        <DonutChart
          data={cities}
          index="name"
          category="sales"
          showAnimation={true}
          showTooltip={true}
          colors={["rose", "yellow", "orange", "indigo", "blue", "emerald"]}
          variant="donut"
          showLabel
          customTooltip={customTooltip}
          valueFormatter={valueFormatter}
          onValueChange={(value) => {
            console.log("value", value)
          }}
          noDataText="Dados não disponíveis"
        />
      </div>
    </Card>
  )
}
