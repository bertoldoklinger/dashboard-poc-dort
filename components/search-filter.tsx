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
import { Checkbox } from "./ui/checkbox"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "./ui/command"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const

const SearchFilterSchema = z.object({
  unidade: z.string().optional(),
  tipo: z.string().optional(),
  categoria: z.string().optional(),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})

type SearchFilterFormData = z.infer<typeof SearchFilterSchema>

export function SearchFilter() {
  const [open, setOpen] = useState(false)
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  async function handleSearchFilterData({
    tipo,
    categoria,
    unidade,
  }: SearchFilterFormData) {
    if (!unidade && !tipo && !categoria) {
      form.setError("tipo", {
        type: "manual",
        message: "Preencha pelo menos um campo",
      })
      return
    }
    const params = new URLSearchParams(searchParams)
    if (tipo) {
      params.set("tipo", tipo)
    } else {
      params.delete("tipo")
    }
    replace(`${pathname}?${params.toString()}`)
    if (categoria) {
      params.set("categoria", categoria)
    } else {
      params.delete("categoria")
    }
    if (unidade) {
      params.set("unidade", unidade)
    } else {
      params.delete("unidade")
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
      unidade: "",
      tipo: "",
      categoria: "",
      items: ["recents", "home"],
    },
  })
  const unidade = searchParams.get("unidade")
  const tipo = searchParams.get("tipo")
  const categoria = searchParams.get("categoria")

  const { isLoading } = useQuery({
    queryKey: ["dashboardData", unidade, tipo],
    queryFn: () =>
      getData({
        unidade,
        tipo,
        categoria,
      }),
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSearchFilterData)}
        className="flex flex-col items-center gap-2 2xl:gap-3"
      >
        <h1 className="text-lg text-white 2xl:text-2xl">Tipo</h1>
        <FormField
          control={form.control}
          name="tipo"
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
        <h1 className=" text-lg text-white 2xl:text-2xl">Categoria</h1>
        <FormField
          control={form.control}
          name="categoria"
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
        <h1 className="text-center text-lg text-white 2xl:text-2xl">
          Unidade Hospitalar
        </h1>
        <FormField
          control={form.control}
          name="unidade"
          render={({ field }) => (
            <FormItem className="w-full">
              <Popover open={open} onOpenChange={setOpen}>
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
                <PopoverContent className="w-full p-0">
                  <Command>
                    <CommandInput placeholder="Filtrar por unidade hospitalar..." />
                    <CommandEmpty>Nenhuma unidade encontrada</CommandEmpty>
                    <CommandGroup className="max-h-[200px] overflow-auto px-0">
                      {unidadesHospitalares.map((unidade) => (
                        <CommandItem
                          value={unidade.label}
                          key={unidade.value}
                          onSelect={() => {
                            form.setValue("unidade", unidade.value)
                            setOpen(false)
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
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="my-4">
                <h1 className="text-center text-lg text-white 2xl:text-2xl">
                  Indicadores Avançados
                </h1>
              </div>
              {items.map((item) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
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
