import { api } from "@/lib/axios"


interface CardInfoQuery {
  unidadeHospitalar?: string | null;
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

export async function getCardInfo({ regiao,setor,tipoSetor,categoriaUnidade,tipoUnidade, unidadeHospitalar }: CardInfoQuery): Promise<CardInfoResponse> {
  const { data } = await api.get<CardInfoResponse>(`http://localhost:3333/api/macropdtreport`, {
    params: {
      regiao,setor,tipoSetor,categoriaUnidade,tipoUnidade, unidadeHospitalar
    }
  })
  console.log(data)
  return data
}
