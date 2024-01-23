"use client"

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { Search } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { Spinner } from "./spinner"
import { useQuery } from "@tanstack/react-query"
import { getData } from "@/lib/mockData"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select"

const SearchFilterSchema = z.object({
  unidade: z.string().optional(),
  cargo: z.string().optional(),
})

type SearchFilterFormData = z.infer<typeof SearchFilterSchema>



export function SearchFilter() {
  const searchParams = useSearchParams()
  const pathname = usePathname();
  const { replace } = useRouter();

  async function handleSearchFilterData({ cargo, unidade }: SearchFilterFormData) {
    if (!cargo && !unidade) {
      setFocus("unidade");
      return;
    }
    const params = new URLSearchParams(searchParams);
    if (cargo) {
      params.set('cargo', cargo);
    } else {
      params.delete('cargo');
    }
    await replace(`${pathname}?${params.toString()}`)
    if (unidade) {
      params.set('unidade', unidade);
    } else {
      params.delete('unidade');
    }
    await replace(`${pathname}?${params.toString()}`)
  }

  const handleReset = () => {
    reset();
    replace(pathname);
  }

  const { register, handleSubmit, reset, setFocus } = useForm<SearchFilterFormData>({
    mode: "onBlur",
    resolver: zodResolver(SearchFilterSchema),
  })
  const unidade = searchParams.get("unidade")
  const cargo = searchParams.get("cargo")

  const { isLoading } = useQuery({
    queryKey: ["tableData", unidade, cargo],
    queryFn: () => getData({
      unidade,
      cargo,
    }),
  })

  return (
    <form
      onSubmit={handleSubmit(handleSearchFilterData)}
      className="flex flex-col items-center gap-3"
    >
      <h1 className="text-2xl text-white">Tipo</h1>
      <Select>
        <SelectTrigger className="font-medium text-gray-700">
          <SelectValue placeholder="Filtrar por Tipo..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipos</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <h1 className="text-2xl text-white">Categoria</h1>
      <Select>
        <SelectTrigger className="font-medium text-gray-700">
          <SelectValue placeholder="Filtrar por Categoria..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipos</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <h1 className="text-2xl text-white">Unidade Hospitalar</h1>
      <Select>
        <SelectTrigger className="font-medium text-gray-700">
          <SelectValue placeholder="Filtrar por Categoria..." />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Tipos</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>


      <div className="mt-3 flex flex-col gap-3">
        <Button type="submit" variant={"default"} className="whitespace-nowrap bg-[#018BC8] text-white hover:bg-sky-800" size={'sm'} disabled={isLoading}>
          {isLoading ? <Spinner size={20} className="mr-2 text-white" /> : <Search className="mr-2 size-5 text-white" />}
          {isLoading ? 'Buscando...' : 'Filtrar resultados'}
        </Button>
        <Button type="button" variant={"default"} className="whitespace-nowrap bg-[#018BC8] text-white hover:bg-sky-800" onClick={handleReset} size={'sm'}>
          <ArrowPathIcon className="mr-2 size-5 text-white" />
          Limpar Filtros
        </Button>
      </div>
    </form>
  )
}
