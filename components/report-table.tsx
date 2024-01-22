import { data } from "@/lib/mockData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function ReportTable() {
  return (
    <div className="rounded-lg border border-gray-300 p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              Cargo
            </TableHead>
            <TableHead>
              Encargos
            </TableHead>
            <TableHead>
              Vale Transporte
            </TableHead>
            <TableHead>
              Total Salário
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((column, i) => (
            <TableRow key={i}>
              <TableCell>
                {column.cargo}
              </TableCell>
              <TableCell>
                {column.encargos}
              </TableCell>
              <TableCell>
                {column.valeTransporte}
              </TableCell>
              <TableCell>
                {column.totalSalario}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
