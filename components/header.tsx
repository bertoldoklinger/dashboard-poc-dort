"use client"

import Image from "next/image"
import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/solid"

import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <div className=" absolute w-full pl-4 pr-2 pt-4">
      <header className="relative flex h-24 w-full items-center justify-between space-x-10 rounded-xl bg-white px-5 shadow-xl dark:border-2 dark:border-gray-900 dark:bg-gray-800 2xl:h-32">
        <Image
          src="/logo-emserh.png"
          alt="Logo"
          width={280}
          height={350}
          quality={100}
          priority
          className="h-auto"
        />
        <h1 className="text-center text-3xl font-bold uppercase tracking-tighter text-[#1F4E79] dark:text-gray-200 md:text-2xl lg:text-[38px]">
          Sistema de Controle de Recursos Humanos
        </h1>
        <div className="flex items-end space-x-4 text-white">
          <ThemeToggle />
          <Link href={"/geral"}>
            <HomeIcon className="h-9 w-9 text-[#1E4F7C] dark:text-white" />
          </Link>
        </div>
      </header>
    </div>
  )
}
