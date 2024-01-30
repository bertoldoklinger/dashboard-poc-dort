import { ReportData } from "@/app/(relatorio)/relatorio-comparativo/[unidade]/components/report-table"

export async function getData(unidadeHospitalar: string): Promise<ReportData> {

  const response = await fetch(`http://localhost:3333/api/relatorio/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ unidadeHospitalar: unidadeHospitalar })
  })
  const data = await response.json()
  return data
}
