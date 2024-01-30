
import { useQuery } from "@tanstack/react-query"
import { ReportData, ReportTable } from "./components/report-table"







export default function UnidadeImpacto({ searchParams }: { searchParams: { search: string } }) {
  return (
    <div className="flex max-w-[95%] flex-col gap-5">
      <ReportTable search={searchParams.search.toUpperCase()} />
    </div>
  )
}
