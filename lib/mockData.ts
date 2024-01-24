export type getDataFilters = {
  unidade: string | null
  tipo: string | null
  categoria: string | null
}

export const getData = async ({ unidade, tipo, categoria }: getDataFilters) => {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  let data = [
    {
      unidade: "Unidade 1",
      tipo: "Desenvolvedor",
      categoria: "Referência 1",
    },
    {
      unidade: "Unidade 2",
      tipo: "Gerente",
      categoria: "Referência 2",
    },
    {
      unidade: "Unidade 3",
      tipo: "Farmaceutico",
      categoria: "Referência 3",
    },
    {
      unidade: "Unidade 4",
      tipo: "Enfermeiro",
      categoria: "Referência 4",
    },
    {
      unidade: "Unidade 5",
      tipo: "Nutricionista",
      categoria: "Referência 5",
    },
    {
      unidade: "Unidade 6",
      tipo: "Médico",
      categoria: "Referência 6",
    },
  ]

  if (tipo) {
    data = data.filter((item) => item.tipo.toLowerCase().includes(tipo))
  }

  if (unidade) {
    data = data.filter((item) => item.unidade.toLowerCase().includes(unidade))
  }
  if (categoria) {
    data = data.filter((item) =>
      item.categoria.toLowerCase().includes(categoria)
    )
  }

  return data
}
