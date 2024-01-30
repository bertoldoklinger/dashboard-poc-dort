"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useQuery } from "@tanstack/react-query";
import { getData } from "../../../../../lib/getData";
import { Spinner } from "@/components/spinner";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { formatCurrency } from "../../../../../lib/formatCurrency";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { calculateTotalReport } from "@/lib/calculateTotalReport";

export type ReportData = {
  relatorio: {
    unidadeHospitalar: string;
    regiao: string;
    setor: string;
    cargaHoraria: number;
    rhFolha: number;
    rh: number;
    diferencaRh: number;
    percentualInsalubridade: string;
    salarioBase: string;
    salarioBaseFolha: string;
    diferencaSalarial: string;
    auxilioAlimentacao: string;
    auxilioAlimentacaoFolha: string;
    diferencaAuxilioAlimentacao: string;
    gratificacao: string;
    gratificacaoFolha: string;
    diferencaGratificacao: string;
    insalubridade: string;
    insalubridadeFolha: string;
    diferencaInsalubridade: string;
    periculosidade: string;
    periculosidadeFolha: string;
    diferencaPericulosidade: string;
    adicionalNoturno: string;
    adicionalNoturnoFolha: string;
    diferencaAdicionalNoturno: string;
    dsr: string;
    dsrFolha: string;
    diferencaDsr: string;
    totalSalario: string;
    totalSalarioFolha: string;
    diferencaTotalSalario: string;
    encargos: string;
    encargosFolha: string;
    diferencaEncargos: string;
    totalMensal: string;
    totalMensalFolha: string;
    diferencaTotalMensal: string;
    totalAnual: string;
    totalAnualFolha: string;
    diferencaTotalAnual: string;
    horasExtrasFolha: string;
    custoTotalFolhaMensal: string;
  }[]
};

export function ReportTable({ search }: { search: string }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['reportData', search],
    queryFn: () => getData(search.toUpperCase())
  })

  const columns = [
    { name: 'rh', isCurrency: false, highlight: false },
    { name: 'rhFolha', isCurrency: false, highlight: false },
    { name: 'diferencaRh', isCurrency: false, highlight: true },
    { name: 'salarioBase', isCurrency: true, highlight: false },
    { name: 'salarioBaseFolha', isCurrency: true, highlight: false },
    { name: 'diferencaSalarial', isCurrency: true, highlight: true },
    { name: 'auxilioAlimentacao', isCurrency: true, highlight: false },
    { name: 'auxilioAlimentacaoFolha', isCurrency: true, highlight: false },
    { name: 'diferencaAuxilioAlimentacao', isCurrency: true, highlight: true },
    { name: 'gratificacao', isCurrency: true, highlight: false },
    { name: 'gratificacaoFolha', isCurrency: true, highlight: false },
    { name: 'diferencaGratificacao', isCurrency: true, highlight: true },
    { name: 'insalubridade', isCurrency: true, highlight: false },
    { name: 'insalubridadeFolha', isCurrency: true, highlight: false },
    { name: 'diferencaInsalubridade', isCurrency: true, highlight: true },
    { name: 'periculosidade', isCurrency: true, highlight: false },
    { name: 'periculosidadeFolha', isCurrency: true, highlight: false },
    { name: 'diferencaPericulosidade', isCurrency: true, highlight: true },
    { name: 'adicionalNoturno', isCurrency: true, highlight: false },
    { name: 'adicionalNoturnoFolha', isCurrency: true, highlight: false },
    { name: 'diferencaAdicionalNoturno', isCurrency: true, highlight: true },
    { name: 'dsr', isCurrency: true, highlight: false },
    { name: 'dsrFolha', isCurrency: true, highlight: false },
    { name: 'diferencaDsr', isCurrency: true, highlight: true },
    { name: 'totalSalario', isCurrency: true, highlight: false },
    { name: 'totalSalarioFolha', isCurrency: true, highlight: false },
    { name: 'diferencaTotalSalario', isCurrency: true, highlight: true },
    { name: 'encargos', isCurrency: true, highlight: false },
    { name: 'encargosFolha', isCurrency: true, highlight: false },
    { name: 'diferencaEncargos', isCurrency: true, highlight: true },
    { name: 'totalMensal', isCurrency: true, highlight: false },
    { name: 'totalMensalFolha', isCurrency: true, highlight: false },
    { name: 'diferencaTotalMensal', isCurrency: true, highlight: true },
    { name: 'totalAnual', isCurrency: true, highlight: false },
    { name: 'totalAnualFolha', isCurrency: true, highlight: false },
    { name: 'diferencaTotalAnual', isCurrency: true, highlight: true },
    { name: 'horasExtrasFolha', isCurrency: true, highlight: false },
    { name: 'custoTotalFolhaMensal', isCurrency: true, highlight: false },
  ];



  if (isLoading) return <div className="flex flex-col items-center justify-center gap-4"><span className="text-xl font-medium text-gray-50">Gerando relatório...</span><Spinner size={60} color="#ffffff" /></div>;
  if (error) return <div>Ocorreu um erro ao buscar os dados.</div>;


  return (
    <div className="flex flex-col gap-4">
      <Button className="w-52 bg-sky-500 hover:bg-sky-600"><Link href={'/relatorio-comparativo'}>Gerar nova comparação</Link></Button>
      <ScrollArea className="min-h-auto h-[80vh] rounded-md border bg-white">
        <ScrollBar orientation="horizontal" />
        <Table className="min-w-max grow border border-gray-300 bg-white">
          <TableHeader>
            <TableRow>
              <TableHead>Unidade Hospitalar</TableHead>
              <TableHead>Cargo</TableHead>
              <TableHead>RH PDT</TableHead>
              <TableHead>RH Folha</TableHead>
              <TableHead>Saldo RH</TableHead>
              <TableHead>Salário Base PDT</TableHead>
              <TableHead>Salário Base Folha</TableHead>
              <TableHead>Saldo Salário Base</TableHead>
              <TableHead>Auxilio Alimentação PDT</TableHead>
              <TableHead>Auxilio Alimentação Folha</TableHead>
              <TableHead>Saldo Auxilio Alimentação</TableHead>
              <TableHead>Gratificação PDT</TableHead>
              <TableHead>Gratificação Folha</TableHead>
              <TableHead>Saldo Gratificação</TableHead>
              <TableHead>Insalubridade PDT</TableHead>
              <TableHead>Insalubridade Folha</TableHead>
              <TableHead>Saldo Insalubridade</TableHead>
              <TableHead>Periculosidade PDT</TableHead>
              <TableHead>Periculosidade Folha</TableHead>
              <TableHead>Saldo Periculosidade</TableHead>
              <TableHead>Adicional Noturno PDT</TableHead>
              <TableHead>Adicional Noturno Folha</TableHead>
              <TableHead>Saldo Adicional Noturno</TableHead>
              <TableHead>DSR PDT</TableHead>
              <TableHead>DSR Folha</TableHead>
              <TableHead>Saldo DSR</TableHead>
              <TableHead>Total Salário PDT</TableHead>
              <TableHead>Total Salário Folha</TableHead>
              <TableHead>Saldo Total Salário</TableHead>
              <TableHead>Encargos PDT</TableHead>
              <TableHead>Encargos Folha</TableHead>
              <TableHead>Saldo Encargos</TableHead>
              <TableHead>Total Mensal PDT</TableHead>
              <TableHead>Total Mensal Folha</TableHead>
              <TableHead>Saldo Total Mensal</TableHead>
              <TableHead>Total Anual PDT</TableHead>
              <TableHead>Total Anual Folha</TableHead>
              <TableHead>Saldo Total Anual</TableHead>
              <TableHead>Horas Extras Folha</TableHead>
              <TableHead>Custo Total Folha Mensal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data ? (
              data.relatorio.map((row, i) => (
                <TableRow key={i} className={`font-medium text-gray-600 ${Number(row.diferencaTotalMensal) < 0 ? "bg-red-200" : ""}`}>
                  <TableCell>{row.unidadeHospitalar}</TableCell>
                  <TableCell>{row.setor}</TableCell>
                  <TableCell>{row.rh}</TableCell>
                  <TableCell>{row.rhFolha}</TableCell>
                  <TableCell className={Number(row.diferencaRh) < 0 ? "text-red-500" : Number(row.diferencaRh) > 0 ? "text-green-500" : "text-gray-600"}>{row.diferencaRh}</TableCell>
                  <TableCell>{formatCurrency(row.salarioBase)}</TableCell>
                  <TableCell>{formatCurrency(row.salarioBaseFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaSalarial) < 0 ? "text-red-500" : Number(row.diferencaSalarial) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaSalarial)}</TableCell>
                  <TableCell>{formatCurrency(row.auxilioAlimentacao)}</TableCell>
                  <TableCell>{formatCurrency(row.auxilioAlimentacaoFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaAuxilioAlimentacao) < 0 ? "text-red-500" : Number(row.diferencaAuxilioAlimentacao) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaAuxilioAlimentacao)}</TableCell>
                  <TableCell>{formatCurrency(row.gratificacao)}</TableCell>
                  <TableCell>{formatCurrency(row.gratificacaoFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaGratificacao) < 0 ? "text-red-500" : Number(row.diferencaGratificacao) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaGratificacao)}</TableCell>
                  <TableCell>{formatCurrency(row.insalubridade)}</TableCell>
                  <TableCell>{formatCurrency(row.insalubridadeFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaInsalubridade) < 0 ? "text-red-500" : Number(row.diferencaInsalubridade) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaInsalubridade)}</TableCell>
                  <TableCell>{formatCurrency(row.periculosidade)}</TableCell>
                  <TableCell>{formatCurrency(row.periculosidadeFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaPericulosidade) < 0 ? "text-red-500" : Number(row.diferencaPericulosidade) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaPericulosidade)}</TableCell>
                  <TableCell>{formatCurrency(row.adicionalNoturno)}</TableCell>
                  <TableCell>{formatCurrency(row.adicionalNoturnoFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaAdicionalNoturno) < 0 ? "text-red-500" : Number(row.diferencaAdicionalNoturno) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaAdicionalNoturno)}</TableCell>
                  <TableCell>{formatCurrency(row.dsr)}</TableCell>
                  <TableCell>{formatCurrency(row.dsrFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaDsr) < 0 ? "text-red-500" : Number(row.diferencaDsr) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaDsr)}</TableCell>
                  <TableCell>{formatCurrency(row.totalSalario)}</TableCell>
                  <TableCell>{formatCurrency(row.totalSalarioFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaTotalSalario) < 0 ? "text-red-500" : Number(row.diferencaTotalSalario) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaTotalSalario)}</TableCell>
                  <TableCell>{formatCurrency(row.encargos)}</TableCell>
                  <TableCell>{formatCurrency(row.encargosFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaEncargos) < 0 ? "text-red-500" : Number(row.diferencaEncargos) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaEncargos)}</TableCell>
                  <TableCell>{formatCurrency(row.totalMensal)}</TableCell>
                  <TableCell>{formatCurrency(row.totalMensalFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaTotalMensal) < 0 ? "text-red-500" : Number(row.diferencaTotalMensal) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaTotalMensal)}</TableCell>
                  <TableCell>{formatCurrency(row.totalAnual)}</TableCell>
                  <TableCell>{formatCurrency(row.totalAnualFolha)}</TableCell>
                  <TableCell className={Number(row.diferencaTotalAnual) < 0 ? "text-red-500" : Number(row.diferencaTotalAnual) > 0 ? "text-green-500" : "text-gray-600"}>{formatCurrency(row.diferencaTotalAnual)}</TableCell>
                  <TableCell>{formatCurrency(row.horasExtrasFolha)}</TableCell>
                  <TableCell>{formatCurrency(row.custoTotalFolhaMensal)}</TableCell>
                </TableRow>

              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  Resultados não encontrados
                </TableCell>
              </TableRow>
            )}
            <TableRow className="text-left font-medium text-gray-600">
              <TableCell colSpan={2} className="text-left text-xl font-medium text-gray-600">Total</TableCell>
              {columns.map(({ name, isCurrency, highlight }) => {
                const total = calculateTotalReport(data!.relatorio, name, isCurrency);
                const numericTotal = isCurrency ? parseFloat(total.replace(/[^0-9.-]+/g, "")) : total;
                const colorClass = highlight ? (numericTotal > 0 ? 'text-green-600' : numericTotal < 0 ? 'text-red-600' : 'text-gray-600') : 'text-gray-600';
                return (
                  <TableCell key={name} colSpan={1} className={`text-md text-left font-medium ${colorClass}`}>
                    {total}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </ScrollArea>
    </div>
  )
}


