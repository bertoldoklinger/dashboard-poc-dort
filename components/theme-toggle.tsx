"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="bg-blue-100 hover:bg-blue-200 focus:bg-blue-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 dark:focus:bg-zinc-800"
    >
      <Sun className="h-[1.5rem] w-[1.3rem] text-slate-800 dark:hidden" />
      <Moon className="hidden h-5 w-5 dark:block" />
      <span className="sr-only">Alterar tema</span>
    </Button>
  )
}
