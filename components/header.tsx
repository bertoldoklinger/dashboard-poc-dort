"use client"

import Image from "next/image"
import Link from "next/link"
import { HomeIcon } from "@heroicons/react/24/solid"

import { ThemeToggle } from "./theme-toggle"

export default function Header() {
  return (
    <div className=" absolute w-full pl-4 pr-2 pt-4">
      <header className="relative flex h-24 w-full items-center justify-between space-x-10 rounded-xl bg-white px-5 shadow-xl dark:bg-zinc-900 2xl:h-32">
        <Image
          src="/logo-emserh.png"
          alt="Logo"
          width={280}
          height={350}
          quality={100}
        />
        <div className="flex items-end space-x-4 text-white">
          <ThemeToggle />
          <Link href={"/geral"}>
            <HomeIcon className="h-9 w-9 text-[#1E4F7C]" />
          </Link>
        </div>
      </header>
    </div>
  )
}
