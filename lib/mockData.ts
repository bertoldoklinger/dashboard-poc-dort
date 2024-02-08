export type getDataFilters = {
  regiao: string | null
  tipoUnidade: string | null
  categoriaUnidade: string | null
  unidadeHospitalar: string | null
  tipoSetor: string | null
  setor: string | null
}

export const getMockData = async ({ regiao,tipoUnidade,categoriaUnidade,unidadeHospitalar,tipoSetor,setor }: getDataFilters) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))


  // if (tipoUnidade) {
  //   data = data.filter((item) => item.tipoUnidade.toLowerCase().includes(tipoUnidade))
  // }

  // if (unidade) {
  //   data = data.filter((item) => item.unidade.toLowerCase().includes(unidade))
  // }
  // if (categoria) {
  //   data = data.filter((item) =>
  //     item.categoria.toLowerCase().includes(categoria)
  //   )
  // }

  return {
    regiao, tipoUnidade, categoriaUnidade, unidadeHospitalar, tipoSetor, setor
  }
}
