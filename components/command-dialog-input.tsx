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
import { Button } from "./ui/button"
import { getUnidadesWithFilter } from "@/app/_api/getUnidadesWithFilter"
import { useQuery } from "@tanstack/react-query"

export function CommandDialogInput() {
  const [open, setOpen] = React.useState(false)
  const router = useRouter()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === " " && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])


  const { data: hospitais, isLoading: isLoadingUnidades, } = useQuery({
    queryKey: ['unidades'],
    queryFn: () => getUnidadesWithFilter({}),
  })



  return (
    <div className="container flex justify-center gap-5 align-middle">
      <Button onClick={() => setOpen(true)} className="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-500">Pesquisar unidade</Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Selecione uma unidade hospitalar" autoComplete="false" />
        <CommandList>
          <CommandEmpty>Sem resultados encontrados</CommandEmpty>
          <CommandGroup heading="Hospitais">
            {
              hospitais && hospitais.sort().map((hospital, index) => (
                <CommandItem key={index} value={hospital} onSelect={(currentValue) => { router.push(`/relatorio-comparativo/unidade?search=${currentValue}`) }} className="cursor-pointer">
                  <HomeIcon className="mr-2 h-5 w-5 text-gray-700" />
                  <span className="text-bold text-gray-700">{hospital}</span>
                </CommandItem>
              ))
            }
          </CommandGroup>
        </CommandList>
      </CommandDialog>
      <Button onClick={() => router.push('/home')} className="rounded bg-blue-400 px-4 py-2 text-white hover:bg-blue-500">Voltar para a página inicial</Button>
    </div>
  )
}
