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
import { SearchFilter } from "./search-filter"

export default function Header() {
  const [filter1, setFilter1] = useState("")

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
          {/* <FilterCombobox value={filter1} onChange={setFilter1} /> */}
          <SearchFilter />
        </div>
        <div className="flex items-end space-x-4 text-white">
          <Button
            variant={"link"}
            size={"icon"}
            onClick={() => {
              setFilter1("")
            }}
          >
            <ArrowPathIcon className="h-9 w-9 text-[#1E4F7C]" />
          </Button>
          <Link href={"/geral"}>
            <HomeIcon className="h-9 w-9 text-[#1E4F7C]" />
          </Link>
        </div>
      </header>
    </div>
  )
}
