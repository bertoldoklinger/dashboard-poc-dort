"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { Check, ChevronsUpDown, Search } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { cn } from "@/lib/utils"

import { Spinner } from "./spinner"
import { Button } from "./ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command"
import {
  Form,
  FormControl, FormField,
  FormItem, FormMessage
} from "./ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { cargos } from "@/utils/cargos"
import { getUnidadesWithFilter } from "@/app/_api/getUnidadesWithFilter"
import { Skeleton } from "@nextui-org/react"
import { getCargosWithFilter } from "@/app/_api/getCargosWithFilters"

const SearchFilterSchema = z.object({
  regiao: z.string().optional(),
  tipoUnidade: z.string().optional(),
  categoriaUnidade: z.string().optional(),
  unidadeHospitalar: z.string().optional(),
  tipoSetor: z.string().optional(),
  setor: z.string().optional(),
})

type SearchFilterFormData = z.infer<typeof SearchFilterSchema>

export function SearchFilter() {
  const [openUnidade, setOpenUnidade] = useState(false)
  const [openCargos, setOpenCargos] = useState(false)
  const [isPending, setIsPending] = useState(false)


  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function handleSearchFilterData(data: SearchFilterFormData) {
    setIsPending(true)
    if (Object.values(data).every(value => !value)) {
      form.setError("regiao", {
        type: "manual",
        message: "Preencha pelo menos um campo",
      })
      return
    }

    const params = new URLSearchParams(searchParams)
    Object.entries(data).forEach(([key, value]) => {
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    replace(`${pathname}?${params.toString()}`)

    setIsPending(false)
  }
  const handleReset = () => {
    form.reset()
    replace(pathname)
  }

  const form = useForm<SearchFilterFormData>({
    mode: "onBlur",
    resolver: zodResolver(SearchFilterSchema),
    defaultValues: {
      regiao: '',
      tipoUnidade: '',
      categoriaUnidade: '',
      unidadeHospitalar: 'TODAS',
      tipoSetor: '',
      setor: ''
    },
  })

  const regiao = form.watch('regiao')
  const tipoUnidade = form.watch('tipoUnidade')
  const tipoSetor = form.watch('tipoSetor')


  const { data: unidadesHospitalares, isLoading: isLoadingUnidades, } = useQuery({
    queryKey: ['unidades', regiao, tipoUnidade],
    queryFn: () => getUnidadesWithFilter({ regiao, tipoUnidade }),
  })
  const { data: cargos, isLoading: isLoadingCargos } = useQuery({
    queryKey: ['cargos', tipoSetor],
    queryFn: () => getCargosWithFilter({ tipoSetor }),
  })

  console.log(cargos)

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearchFilterData)}
        className="flex flex-col items-center gap-2 2xl:gap-6"
      >
        <div className="flex w-full flex-col items-center gap-4">
          <h1 className="text-lg font-medium text-gray-700 dark:text-gray-50 2xl:text-2xl">Unidade Hospitalar</h1>
          <FormField
            control={form.control}
            name="regiao"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  key={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-left font-medium text-gray-700 dark:bg-gray-50">
                      <SelectValue placeholder="Filtrar por cidade..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="dark:bg-gray-50 dark:text-black">
                    <SelectItem value="CAPITAL">Capital</SelectItem>
                    <SelectItem value="INTERIOR">Interior</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tipoUnidade"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  key={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-left font-medium text-gray-700 dark:bg-gray-50">
                      <SelectValue placeholder="Filtrar por tipo..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="dark:bg-gray-50 dark:text-black">
                    <SelectItem value="HOSPITAL">Hospital</SelectItem>
                    <SelectItem value="HEMORREDE">Hemorrede</SelectItem>
                    <SelectItem value="UPA">Upa</SelectItem>
                    <SelectItem value="POLICLINICA">Policlinica</SelectItem>
                    <SelectItem value="central-de-regulacao">
                      Central de Regulação
                    </SelectItem>
                    <SelectItem value="CENTRO ESPECIALIZADO">
                      Centro Especializado
                    </SelectItem>
                    <SelectItem value="FEME">FEME</SelectItem>
                    <SelectItem value="LABORATORIO">LACEN</SelectItem>
                    <SelectItem value="OUTROS">Outros</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoriaUnidade"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  key={field.value}
                  disabled
                >
                  <FormControl>
                    <SelectTrigger className="text-left font-medium text-gray-700 dark:bg-gray-50">
                      <SelectValue placeholder="Filtrar por categoria..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="dark:bg-gray-50 dark:text-black">
                    <SelectItem value="hospital">
                      🚧 Em Desenvolvimento
                    </SelectItem>
                    <SelectItem value="hemorrede">
                      🚧 Em Desenvolvimento
                    </SelectItem>
                    <SelectItem value="upa">🚧 Em Desenvolvimento</SelectItem>
                    <SelectItem value="policlinica">
                      🚧 Em Desenvolvimento
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="unidadeHospitalar"
            render={({ field }) => (
              <FormItem className="w-full">
                <Popover open={openUnidade} onOpenChange={setOpenUnidade}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between bg-white text-left font-medium text-gray-700 dark:hover:bg-gray-100 dark:hover:text-black",
                          field.value
                            ? "text-center text-[9px] 2xl:text-xs"
                            : "text-xs 2xl:text-sm"
                        )}
                      >
                        {isLoadingUnidades ? (
                          <Skeleton />
                        ) : (
                          unidadesHospitalares && (field.value
                            ? unidadesHospitalares.find(
                              (unidade) => unidade === field.value
                            ) || 'TODAS'
                            : "Filtrar por unidade...")
                        )}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-3/4 p-0">
                    <Command className="dark:bg-gray-50 dark:text-black">
                      <CommandInput placeholder="Filtrar por unidade hospitalar..." />
                      <CommandEmpty>Nenhuma unidade encontrada</CommandEmpty>
                      <CommandGroup className="max-h-[190px] overflow-auto px-0 dark:bg-gray-50 dark:text-black">
                        {unidadesHospitalares && unidadesHospitalares.sort((a, b) => a.localeCompare(b)).map((unidade, i) => (
                          <CommandItem
                            value={unidade}
                            key={i}
                            onSelect={() => {
                              form.setValue("unidadeHospitalar", unidade)
                              setOpenUnidade(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                unidade === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {unidade}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex w-full flex-col items-center gap-4">
          <h1 className=" text-lg font-medium text-gray-700 dark:text-gray-50 2xl:text-2xl">Cargo</h1>
          <FormField
            control={form.control}
            name="tipoSetor"
            render={({ field }) => (
              <FormItem className="w-full">
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  key={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="text-left font-medium text-gray-700 dark:bg-gray-50">
                      <SelectValue placeholder="Filtrar por Tipo de Cargo..." />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="dark:bg-gray-50 dark:text-black">
                    <SelectItem value="GESTÃO">
                      Gestão
                    </SelectItem>
                    <SelectItem value="ADMINISTRATIVO">
                      Administrativo
                    </SelectItem>
                    <SelectItem value="ASSISTENCIAL">
                      Assistencial
                    </SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="setor"
            render={({ field }) => (
              <FormItem className="w-full">
                <Popover open={openCargos} onOpenChange={setOpenCargos}>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        role="combobox"
                        className={cn(
                          "w-full justify-between bg-white text-left font-medium text-gray-700 dark:bg-gray-50 dark:text-black",
                          field.value
                            ? "text-center text-[9px] 2xl:text-xs"
                            : "text-xs 2xl:text-sm"
                        )}
                      >
                        {isLoadingCargos ? (
                          <Skeleton />
                        ) : (
                          cargos && (field.value
                            ? (cargos.find((cargo) => cargo === field.value) || 'Selecione um cargo...')
                            : 'Selecione um cargo...')
                        )}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command className="dark:bg-gray-50 dark:text-black">
                      <CommandInput placeholder="Filtrar por cargo..." />
                      <CommandEmpty>Nenhum cargo encontrado</CommandEmpty>
                      <CommandGroup className="max-h-[200px] overflow-auto px-0 dark:bg-gray-50 dark:text-black">
                        {cargos && cargos.sort((a, b) => a.localeCompare(b)).map((cargo, i) => (
                          <CommandItem
                            value={cargo}
                            key={i}
                            onSelect={() => {
                              form.setValue("setor", cargo)
                              setOpenCargos(false)
                            }}
                          >
                            <Check
                              className={cn(
                                "mr-2 h-4 w-4",
                                cargo === field.value
                                  ? "opacity-100"
                                  : "opacity-0"
                              )}
                            />
                            {cargo}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="mt-3 flex flex-col gap-3">
          <Button
            type="submit"
            variant={"default"}
            className="whitespace-nowrap bg-[#018BC8] text-white hover:bg-sky-800"
            size={"sm"}
            disabled={isPending}
          >
            {isPending ? (
              <Spinner size={20} className="mr-2 text-white" />
            ) : (
              <Search className="mr-2 size-5 text-white" />
            )}
            {isPending ? "Carregando..." : "Filtrar resultados"}
          </Button>
          <Button
            type="button"
            variant={"default"}
            className="whitespace-nowrap bg-[#018BC8] text-white hover:bg-sky-800"
            onClick={handleReset}
            size={"sm"}
          >
            <ArrowPathIcon className="mr-2 size-5 text-white" />
            Limpar Filtros
          </Button>
        </div>
      </form>
    </Form>
  )
}
