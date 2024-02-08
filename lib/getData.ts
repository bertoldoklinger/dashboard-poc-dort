import { ReportData } from "@/app/(relatorio)/relatorio-comparativo/[unidade]/components/report-table"

export async function getData(unidadeHospitalar: string): Promise<ReportData> {
  let response;

  if (unidadeHospitalar === 'TODOS') {
    response = await fetch(`http://localhost:3333/api/relatorio-completo`);
  } else {
    response = await fetch(`http://localhost:3333/api/relatorio`, {
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

  const response = await fetch(`http://localhost:3333/api/relatorio-completo/`)
  const data = await response.json()
  return data
}
