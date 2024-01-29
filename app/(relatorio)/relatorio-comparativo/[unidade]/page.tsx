
import { useQuery } from "@tanstack/react-query"
import { ReportData, ReportTable } from "./components/report-table"


export async function getData(unidadeHospitalar: string): Promise<ReportData> {

  const response = await fetch(`http://localhost:3333/relatorio/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ unidadeHospitalar: unidadeHospitalar })
  })
  const data = await response.json()
  return data
}




export default function UnidadeImpacto({ searchParams }: { searchParams: { search: string } }) {
  return (
    <div className="flex max-w-[95%] flex-col gap-5">
      <ReportTable search={searchParams.search.toUpperCase()} />
    </div>
  )
}
