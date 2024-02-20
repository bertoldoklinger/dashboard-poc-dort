import { ReportData } from "@/app/(relatorio)/relatorio-comparativo/[unidade]/components/report-table"

export async function getData(unidadeHospitalar: string): Promise<ReportData> {
  let response;

  if (unidadeHospitalar === 'TODOS') {
    response = await fetch(`https://api-pdt.vercel.app/relatorio-completo`);
  } else {
    response = await fetch(`https://api-pdt.vercel.app/api/relatorio`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ unidadeHospitalar: unidadeHospitalar }),
    });
  }

  const data = await response.json();
  return data;
}


export async function getRelatorioCompletoData(): Promise<ReportData> {

  const response = await fetch(`https://api-pdt.vercel.app/relatorio-completo/`)
  const data = await response.json()
  return data
}
