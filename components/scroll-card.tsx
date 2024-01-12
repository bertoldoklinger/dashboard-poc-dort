'use client'

import { useState } from 'react';
import { Button } from './ui/button';

export type CardInfo = {
  unidade: string;
  previsto: number; // Alterado para número para permitir a ordenação
};

interface ScrollCardProps {
  cards: CardInfo[];
}

export default function ScrollCard({ cards }: ScrollCardProps) {
  const [isAsc, setIsAsc] = useState(true);

  const sortedCards = [...cards].sort((a, b) => {
    if (isAsc) {
      return a.previsto - b.previsto;
    } else {
      return b.previsto - a.previsto;
    }
  });

  const handleSort = () => {
    setIsAsc(!isAsc);
  };

  return (
    <div>
      <header className="flex items-center justify-between bg-[#E1E7F2] p-2">
        <h1 className="font-bold text-[#2C55A0]">Unidade</h1>
        <p className="font-bold text-[#2C55A0]">Previsto <Button variant={'outline'} className='h-8 w-8' onClick={handleSort}>{isAsc ? (<span>↓</span>) : (<span>↑</span>)}</Button></p>
      </header>
      <div className='max-h-[23rem] overflow-y-auto'>
        {sortedCards.map((card, index) => (
          <div key={index} className="flex items-center justify-between border-t bg-white p-2">
            <h2 className=" text-[#2C55A0]">{card.unidade}</h2>
            <p className=" text-[#2C55A0]">{card.previsto}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
