import { api } from "@/lib/axios"

interface CargosWithFiltersQuery {
  tipoSetor?: string | null
}

interface CargosWithFiltersResponse {
  cargos: string[]
}


export async function getCargosWithFilter({ tipoSetor }: CargosWithFiltersQuery): Promise<string[]> {
  const { data } = await api.get<CargosWithFiltersResponse>(`https://api-pdt.vercel.app/api/cargos`, {
    params: {
      tipoSetor
    }
  })
  console.log(data)
  return data.cargos
}
