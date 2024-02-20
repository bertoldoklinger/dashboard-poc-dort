import { api } from "@/lib/axios"

interface UnidadesWithFiltersQuery {
  regiao?: string | null
  tipoUnidade?: string | null
}

interface UnidadesWithFiltersResponse {
  unidades: string[]
}


export async function getUnidadesWithFilter({ regiao,tipoUnidade}: UnidadesWithFiltersQuery): Promise<string[]> {
  const { data } = await api.get<UnidadesWithFiltersResponse>(`https://api-pdt.vercel.app/api/unidades-hospitalares`, {
    params: {
      regiao,tipoUnidade
    }
  })
  return data.unidades
}
