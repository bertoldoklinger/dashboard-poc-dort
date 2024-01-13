"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowPathIcon,
  ArrowUturnLeftIcon,
  HomeIcon,
} from "@heroicons/react/24/solid"

import { FilterCombobox } from "./filter-combobox"
import { Button } from "./ui/button"

export default function Header() {
  const [filter1, setFilter1] = useState("")
  const [filter2, setFilter2] = useState("")
  const [filter3, setFilter3] = useState("")

  return (
    <div className=" absolute w-full pl-4 pr-2 pt-4">
      <header className="relative flex h-32 w-full items-center justify-between space-x-10 rounded-xl bg-white px-5 shadow-xl dark:bg-zinc-900">
        <Image
          src="/logo-emserh.png"
          alt="Logo"
          width={350}
          height={350}
          quality={100}
        />
        <div className="flex w-full items-start justify-start gap-6">
          <FilterCombobox value={filter1} onChange={setFilter1} />
          <FilterCombobox value={filter2} onChange={setFilter2} />
          <FilterCombobox value={filter3} onChange={setFilter3} />
        </div>
        <div className="flex items-end space-x-4 text-white">
          <Button
            variant={"link"}
            size={"icon"}
            onClick={() => {
              setFilter1("")
              setFilter2("")
              setFilter3("")
            }}
          >
            <ArrowPathIcon className="h-9 w-9 text-[#1E4F7C]" />
          </Button>
          <Link href={"/"}>
            <HomeIcon className="h-9 w-9 text-[#1E4F7C]" />
          </Link>
        </div>
      </header>
    </div>
  )
}
