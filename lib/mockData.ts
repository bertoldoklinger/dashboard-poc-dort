


export type getDataFilters = {
  unidade: string | null
  cargo: string | null
}

export const getData = async ({cargo, unidade}: getDataFilters) => {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  let data =  [
    {
      unidade: "Unidade 1",
      cargo: "Desenvolvedor",
      referencia: "Referência 1",
    },
    {
      unidade: "Unidade 2",
      cargo: "Gerente",
      referencia: "Referência 2",
    },
    {
      unidade: "Unidade 3",
      cargo: "Farmaceutico",
      referencia: "Referência 3",
    },
    {
      unidade: "Unidade 4",
      cargo: "Enfermeiro",
      referencia: "Referência 4",
    },
    {
      unidade: "Unidade 5",
      cargo: "Nutricionista",
      referencia: "Referência 5",
    },
    {
      unidade: "Unidade 6",
      cargo: "Médico",
      referencia: "Referência 6",
    },
  ]

  if(cargo) {
    data = data.filter((item) => item.cargo.toLowerCase().includes(cargo))
  }

  if(unidade) {
    data = data.filter((item) => item.unidade.toLowerCase().includes(unidade))
  }

  return data
}
