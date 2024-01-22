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
      className="flex items-center gap-3"
    >
      <Input
        placeholder="Nome da unidade hospitalar"
        {...register("unidade")}
      />
      <Input
        placeholder="Nome do cargo"
        {...register("cargo")}
      />
      <Input
        type="month"
        // {...register("referencia")}
        placeholder="Referência"
      />

      <Button type="submit" variant={"link"} className="whitespace-nowrap" disabled={isLoading}>
        {isLoading ? <Spinner size={20} className="mr-2" /> : <Search className="mr-2 size-5" />}
        {isLoading ? 'Buscando...' : 'Filtrar resultados'}
      </Button>
      <Button type="button" variant={"link"} className="whitespace-nowrap" onClick={handleReset}>
        <ArrowPathIcon className="mr-2 size-5 " />
        Limpar Filtros
      </Button>
    </form>
  )
}
