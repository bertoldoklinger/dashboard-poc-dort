"use client"

import * as React from "react"
import {
  HomeIcon,

} from "@radix-ui/react-icons"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { hospitais } from "../lib/hospitais"
import { useRouter } from "next/navigation"

export function CommandDialogDemo() {
  const [open, setOpen] = React.useState(true)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div className="container flex justify-center gap-5 align-middle">
      <p className="text-2xl text-gray-800">
        Pressione{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          <span className="text-lg">ctrl + J</span>
        </kbd>
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Selecione uma unidade hospitalar" autoComplete="false" />
        <CommandList>
          <CommandEmpty>Sem resultados encontrados</CommandEmpty>
          <CommandGroup heading="Hospitais">
            {
              hospitais.map((hospital) => (
                <CommandItem key={hospital.id} value={hospital.name} onSelect={(currentValue) => { router.push(`/relatorio-comparativo/unidade?search=${currentValue}`) }} className="cursor-pointer">
                  <HomeIcon className="mr-2 h-5 w-5 text-gray-700" />
                  <span className="text-bold text-gray-700">{hospital.name}</span>
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
