"use client"

import { useState } from "react"

import { Button } from "./ui/button"

export type CardInfo = {
  unidade: string
  previsto: number
}

interface ScrollCardProps {
  cards: CardInfo[]
}

export default function ScrollCard({ cards }: ScrollCardProps) {
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
    <div className="">
      <header className="flex items-center justify-between rounded-t-lg bg-[#E1E7F2] p-2 dark:bg-gray-800">
        <h1 className="font-bold text-[#2C55A0] dark:text-white">Unidade</h1>
        <p className="font-bold text-[#2C55A0] dark:text-white">
          Previsto{" "}
          <Button variant={"outline"} className="h-8 w-8" onClick={handleSort}>
            {isAsc ? <span>↓</span> : <span>↑</span>}
          </Button>
        </p>
      </header>
      <div className="scrollbar-thumb-rounded-lg  max-h-[23rem] overflow-y-auto  scrollbar-thin scrollbar-track-white scrollbar-thumb-[#1E4F7C]">
        {sortedCards.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between border-t bg-white p-2 dark:bg-zinc-500"
          >
            <h2 className=" text-[#2C55A0] dark:text-gray-100">{card.unidade}</h2>
            <p className=" text-[#2C55A0] dark:text-gray-100">{card.previsto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
