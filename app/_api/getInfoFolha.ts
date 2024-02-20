import { api } from "@/lib/axios"



interface InfoFolhaResponse {
    TotalMensalFolha: number,
    TotalRhFolha: number
}

export async function getInfoFolha() {
  const { data } = await api.get<InfoFolhaResponse>(`https://ada2-5-ancient-cloud-4698.fly.dev/Totalmensalfolha`)
  console.log(data)
  return data.TotalMensalFolha
}
