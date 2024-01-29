import { formatCurrency } from "./formatCurrency";

export function calculateTotalReport(data: any[], column: string, isCurrency: boolean = false) {
  const total = data.reduce((total, row) => {
    const value = isCurrency ? parseFloat(row[column]) : row[column];
    return total + value;
  }, 0);

  return isCurrency ? formatCurrency(total) : total;
}
