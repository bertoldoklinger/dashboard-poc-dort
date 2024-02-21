import { api } from "@/lib/axios"


interface CardInfoQuery {
  unidadesHospitalares?: string[] | null;
  tipoUnidade?: string | null
  categoriaUnidade?: string | null
  tipoSetor?: string | null
  setor?: string | null
  regiao?: string | null
}

interface CardInfoResponse {
  cardsData: {
    rh: number;
    totalMensal: number;
    valeTransporte: number;
    insalubridade: number;
    adicionalNoturno: number;
    encargos: number;
    gratificacao: number
    periculosidade: number
  }
  scrollCardInfo: {
    [unidade: string]: {
      rhTotal: number;
      totalMensal: number;
    };
  };
}

export async function getCardInfo({ regiao,setor,tipoSetor,categoriaUnidade,tipoUnidade, unidadesHospitalares }: CardInfoQuery): Promise<CardInfoResponse> {
  const { data } = await api.get<CardInfoResponse>(`http://localhost:3333/api/macropdtreport`, {
    params: {
      regiao,setor,tipoSetor,categoriaUnidade,tipoUnidade,
      unidadesHospitalares
    },
    paramsSerializer: (params) => {
      return Object.entries(params).map(([key, value]) => {
        if (Array.isArray(value)) {
          return value.map((v) => `${key}=${v}`).join("&")
        }
        return `${key}=${value}`
      }).join("&")
    }
  })
  return data
}
