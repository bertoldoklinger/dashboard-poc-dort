"use client"

import { useState } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { unidadesHospitalares } from "@/utils/hospitais"
import { ArrowPathIcon } from "@heroicons/react/24/solid"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { Check, ChevronsUpDown, Search } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { getData } from "@/lib/mockData"
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

const SearchFilterSchema = z.object({
  regiao: z.string().optional(),
  tipoUnidade: z.string().optional(),
  categoriaUnidade: z.string().optional(),
  unidade: z.string().optional(),
  tipoCargo: z.string().optional(),
  cargo: z.string().optional(),
})

type SearchFilterFormData = z.infer<typeof SearchFilterSchema>

export function SearchFilter() {
  const [openUnidade, setOpenUnidade] = useState(false)
  const [openCargos, setOpenCargos] = useState(false)

  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function handleSearchFilterData({
    regiao,
    tipoUnidade,
    categoriaUnidade,
    unidade,
    tipoCargo,
    cargo
  }: SearchFilterFormData) {
    if (!regiao && !tipoUnidade && !categoriaUnidade && !unidade && !tipoCargo && !cargo) {
      form.setError("regiao", {
        type: "manual",
        message: "Preencha pelo menos um campo",
      })
      return
    }
    const params = new URLSearchParams(searchParams)
    if (regiao) {
      params.set("regiao", regiao)
    } else {
      params.delete("regiao")
    }
    if (tipoUnidade) {
      params.set("tipoUnidade", tipoUnidade)
    } else {
      params.delete("tipoUnidade")
    }
    replace(`${pathname}?${params.toString()}`)
    if (categoriaUnidade) {
      params.set("categoriaUnidade", categoriaUnidade)
    } else {
      params.delete("categoriaUnidade")
    }
    if (unidade) {
      params.set("unidade", unidade)
    } else {
      params.delete("unidade")
    }
    if (tipoCargo) {
      params.set("tipoCargo", tipoCargo)
    } else {
      params.delete("tipoCargo")
    }
    if (cargo) {
      params.set("cargo", cargo)
    } else {
      params.delete("cargo")
    }
    replace(`${pathname}?${params.toString()}`)
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
      unidade: '',
      tipoCargo: '',
      cargo: ''
    },
  })
  const regiao = searchParams.get("regiao")
  const tipoUnidade = searchParams.get("tipoUnidade")
  const categoriaUnidade = searchParams.get("categoria")
  const unidade = searchParams.get("unidade")
  const tipoCargo = searchParams.get("tipoCargo")
  const cargo = searchParams.get("cargo")

  const { isLoading } = useQuery({
    queryKey: ["dashboardData", regiao, tipoUnidade, categoriaUnidade, unidade, tipoCargo, cargo],
    queryFn: () =>
      getData({
        regiao,
        tipoUnidade,
        categoriaUnidade,
        unidade,
        tipoCargo,
        cargo
      }),
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearchFilterData)}
        className="flex flex-col items-center gap-2 2xl:gap-3"
      >
        <h1 className="text-lg font-medium text-gray-700 2xl:text-2xl">Região</h1>
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
                  <SelectTrigger className="text-left font-medium text-gray-700">
                    <SelectValue placeholder="Filtrar por região..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="capital">Capital</SelectItem>
                  <SelectItem value="interior">Interior</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <h1 className="text-lg font-medium text-gray-700 2xl:text-2xl">Tipo de Unidade</h1>
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
                  <SelectTrigger className="text-left font-medium text-gray-700">
                    <SelectValue placeholder="Filtrar por tipo..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="hospital">Hospital</SelectItem>
                  <SelectItem value="hemorrede">Hemorrede</SelectItem>
                  <SelectItem value="upa">Upa</SelectItem>
                  <SelectItem value="policlinica">Policlinica</SelectItem>
                  <SelectItem value="central-de-regulacao">
                    Central de Regulação
                  </SelectItem>
                  <SelectItem value="centro-especializado">
                    Centro Especializado
                  </SelectItem>
                  <SelectItem value="tea">TEA</SelectItem>
                  <SelectItem value="feme-e-lacen">FEME e LACEN</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <h1 className=" text-lg font-medium text-gray-700 2xl:text-2xl">Categoria de Unidade</h1>
        <FormField
          control={form.control}
          name="categoriaUnidade"
          render={({ field }) => (
            <FormItem className="w-full">
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                key={field.value}
              >
                <FormControl>
                  <SelectTrigger className="text-left font-medium text-gray-700">
                    <SelectValue placeholder="Filtrar por Categoria..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
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
        <h1 className="text-center text-lg font-medium text-gray-700 2xl:text-2xl">
          Unidade Hospitalar
        </h1>
        <FormField
          control={form.control}
          name="unidade"
          render={({ field }) => (
            <FormItem className="w-full">
              <Popover open={openUnidade} onOpenChange={setOpenUnidade}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between bg-white text-left font-medium text-gray-700",
                        field.value
                          ? "text-center text-[9px] 2xl:text-xs"
                          : "text-xs 2xl:text-sm"
                      )}
                    >
                      {field.value
                        ? unidadesHospitalares.find(
                          (unidade) => unidade.value === field.value
                        )?.label
                        : "Seleciona uma unidade..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-3/4 p-0">
                  <Command>
                    <CommandInput placeholder="Filtrar por unidade hospitalar..." />
                    <CommandEmpty>Nenhuma unidade encontrada</CommandEmpty>
                    <CommandGroup className="max-h-[190px] overflow-auto px-0">
                      {unidadesHospitalares.map((unidade) => (
                        <CommandItem
                          value={unidade.label}
                          key={unidade.value}
                          onSelect={() => {
                            form.setValue("unidade", unidade.value)
                            setOpenUnidade(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              unidade.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {unidade.label}
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
        <h1 className=" text-lg font-medium text-gray-700 2xl:text-2xl">Tipo de Cargo</h1>
        <FormField
          control={form.control}
          name="tipoCargo"
          render={({ field }) => (
            <FormItem className="w-full">
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                key={field.value}
              >
                <FormControl>
                  <SelectTrigger className="text-left font-medium text-gray-700">
                    <SelectValue placeholder="Filtrar por Tipo de Cargo..." />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="gestao">
                    Gestão
                  </SelectItem>
                  <SelectItem value="administrativo">
                    Administrativo
                  </SelectItem>
                  <SelectItem value="assistencial">
                    Assistencial
                  </SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <h1 className=" text-lg font-medium text-gray-700 2xl:text-2xl">Cargo</h1>
        <FormField
          control={form.control}
          name="cargo"
          render={({ field }) => (
            <FormItem className="w-full">
              <Popover open={openCargos} onOpenChange={setOpenCargos}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        "w-full justify-between bg-white text-left font-medium text-gray-700",
                        field.value
                          ? "text-center text-[9px] 2xl:text-xs"
                          : "text-xs 2xl:text-sm"
                      )}
                    >
                      {field.value
                        ? cargos.find(
                          (cargo) => cargo.value === field.value
                        )?.label
                        : "Seleciona um cargo..."}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Filtrar por cargo..." />
                    <CommandEmpty>Nenhum cargo encontrado</CommandEmpty>
                    <CommandGroup className="max-h-[200px] overflow-auto px-0">
                      {cargos.map((cargo) => (
                        <CommandItem
                          value={cargo.label}
                          key={cargo.value}
                          onSelect={() => {
                            form.setValue("cargo", cargo.value)
                            console.log(cargos)
                            setOpenCargos(false)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              cargo.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {cargo.label}
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

        <div className="mt-3 flex flex-col gap-3">
          <Button
            type="submit"
            variant={"default"}
            className="whitespace-nowrap bg-[#018BC8] text-white hover:bg-sky-800"
            size={"sm"}
            disabled={isLoading}
          >
            {isLoading ? (
              <Spinner size={20} className="mr-2 text-white" />
            ) : (
              <Search className="mr-2 size-5 text-white" />
            )}
            {isLoading ? "Buscando..." : "Filtrar resultados"}
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
