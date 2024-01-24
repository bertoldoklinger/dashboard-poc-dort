"use client"

import Link from "next/link"

import { SearchFilter } from "./search-filter"
import { ThemeToggle } from "./theme-toggle"

export function Sidebar() {
  return (
    <div className="flex h-full flex-col gap-y-5 border-r border-gray-200 bg-[#33B04F] px-6 dark:border-slate-600 dark:bg-slate-800">
      <nav className="flex flex-1 flex-col pt-[7.5rem] 2xl:pt-44">
        <SearchFilter />
      </nav>
    </div>
  )
}
