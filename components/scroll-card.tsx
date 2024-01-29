"use client"

import { useState } from "react"

import { Button } from "./ui/button"
import { Card } from "@nextui-org/react"

export type CardInfo = {
  unidade: string
  rh: number
  previsto: number
}


interface ScrollCardProps {
  cards: CardInfo[]
  isCurrency?: boolean
}

export default function ScrollCard({ cards, isCurrency }: ScrollCardProps) {
  const [isAsc, setIsAsc] = useState(true)

  const sortedCards = [...cards].sort((a, b) => {
    if (isAsc) {
      return a.previsto - b.previsto
    } else {
      return b.previsto - a.previsto
    }
  })

  const handleSort = () => {
    setIsAsc(!isAsc)
  }

  return (
    <Card>
      <header className="flex items-center justify-between rounded-t-lg bg-[#E1E7F2] p-2 dark:bg-gray-800">
        <div className="flex-1 font-bold text-[#2C55A0] dark:text-white">Unidade</div>
        <div className="flex flex-1 items-center justify-center">
          <p className="font-bold text-[#2C55A0] dark:text-white">RH</p>
          <Button variant={"outline"} className="h-8 w-8 text-[#2C55A0] dark:text-white" onClick={handleSort}>
            {isAsc ? <span>↓</span> : <span>↑</span>}
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-end font-bold text-[#2C55A0] dark:text-white">
          Custo de Pessoal{" "}
          <Button variant={"outline"} className="h-8 w-8" onClick={handleSort}>
            {isAsc ? <span>↓</span> : <span>↑</span>}
          </Button>
        </div>
      </header>
      <div className="scrollbar-thumb-rounded-lg  max-h-[15.8rem] overflow-y-auto  scrollbar-thin scrollbar-track-white scrollbar-thumb-[#1E4F7C]">
        {sortedCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-t bg-white p-2 px-3 dark:bg-gray-700"
          >
            <h2 className="flex-1 text-[#2C55A0] dark:text-gray-100">
              {card.unidade}
            </h2>
            <p className="flex-1 text-center font-medium text-[#2C55A0] dark:text-gray-100">
              {card.rh}
            </p>
            <p className="flex-1 text-right font-medium text-[#2C55A0] dark:text-gray-100">
              {isCurrency
                ? card.previsto.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })
                : card.previsto}
            </p>
          </div>
        ))}
      </div>
    </Card>
  )
}
