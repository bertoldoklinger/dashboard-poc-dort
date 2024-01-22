"use client"

import { useQuery } from "@tanstack/react-query"

import { getData } from "@/lib/mockData"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table"
import { useSearchParams } from "next/navigation"
import { Spinner } from "./spinner"

export function ReportTable() {
  const searchParams = useSearchParams()

  const unidade = searchParams.get("unidade")
  const cargo = searchParams.get("cargo")
  const { data, isLoading } = useQuery({
    queryKey: ["tableData", unidade, cargo],
    queryFn: () => getData({
      unidade,
      cargo,
    }),
  })


  return (
    <div className="rounded-lg border border-gray-300 bg-white p-2">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Unidade Hospitalar</TableHead>
            <TableHead>Cargo</TableHead>
            <TableHead>Referência</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={3}>
                <div className="flex w-full justify-center">
                  <Spinner />
                </div>
              </TableCell>
            </TableRow>
          ) : data && data.length > 0 ? (
            data.map((column, i) => (
              <TableRow key={i}>
                <TableCell>{column.unidade}</TableCell>
                <TableCell>{column.cargo}</TableCell>
                <TableCell>{column.referencia}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                Resultados não encontrados
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}
