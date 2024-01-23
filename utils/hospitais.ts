const hospitais = [
  { value: 2, label: "AGENCIA TRANSFUSIONAL BACABAL" },
  { value: 3, label: "AGENCIA TRANSFUSIONAL BARRA DO CORDA" },
  { value: 4, label: "AGENCIA TRANSFUSIONAL CHAPADINHA" },
  { value: 5, label: "AGENCIA TRANSFUSIONAL COLINAS" },
  { value: 102, label: "AGENCIA TRANSFUSIONAL DE AÇAILANDIA" },
  { value: 560, label: "AGENCIA TRANSFUSIONAL DE ALTO PARANAIBA" },
  { value: 700, label: "AGENCIA TRANSFUSIONAL DE CAROLINA" },
  { value: 103, label: "AGENCIA TRANSFUSIONAL DE COELHO NETO" },
  { value: 390, label: "AGENCIA TRANSFUSIONAL DE COROATA" },
  { value: 380, label: "AGENCIA TRANSFUSIONAL DE CURURUPU" },
  { value: 370, label: "AGENCIA TRANSFUSIONAL DE GOV.NUNES FREIRE" },
  { value: 360, label: "AGENCIA TRANSFUSIONAL DE ITAPECURU" },
  { value: 350, label: "AGENCIA TRANSFUSIONAL DE PERITORO" },
  { value: 340, label: "AGENCIA TRANSFUSIONAL DE PORTO FRANCO" },
  { value: 330, label: "AGENCIA TRANSFUSIONAL DE PRESIDENTE DUTRA" },
  { value: 320, label: "AGENCIA TRANSFUSIONAL DE SANTA LUZIA" },
  { value: 6, label: "AGENCIA TRANSFUSIONAL DE SÃO JOÃO DOS PATOS" },
  { value: 7, label: "AGENCIA TRANSFUSIONAL DE TIMON" },
  { value: 8, label: "AGENCIA TRANSFUSIONAL DE VIANA" },
  { value: 550, label: "AGENCIA TRANSFUSIONAL DE ZE DOCA" },
  { value: 500, label: "CAF - FEME" },
  { value: 450, label: "CARRETA BARRETOS" },
  { value: 400, label: "CARRETA DA MULHER" },
  { value: 11, label: "CASA DA MULHER MARANHENSE DE IMPERATRIZ" },
  { value: 12, label: "CASA TEA 12+" },
  { value: 13, label: "CENTRAL DE REGULACAO - AMBULATORIAL" },
  { value: 14, label: "CENTRAL DE REGULACAO - LEITOS" },
  { value: 15, label: "CENTRAL DE REGULACAO - TRANSPORTE" },
  { value: 16, label: "CENTRO DA PESSOA IDOSA" },
  { value: 17, label: "CENTRO DE SAUDE GENESIO REGO" },
  { value: 18, label: "CENTRO DE TERAPIA RENAL SUBSTITUTIVA" },
  { value: 19, label: "CENTRO ESPECIALIDADES MEDICAS PAM DIAMANTE" },
  { value: 20, label: "CENTRO ESPECIALIZADO DE REAB. CIDADE OPERARIA" },
  { value: 21, label: "CENTRO ESPECIALIZADO DE REABILITACAO OLHO D'ÁGUA" },
  { value: 22, label: "COVID - HOSPITAL MACROREGIONAL DE CAXIAS" },
  { value: 23, label: "COVID - HOSPITAL MATERNO INFANTIL IMPERATRIZ" },
  { value: 300, label: "COVID - HOSPITAL PRESIDENTE DUTRA" },
  { value: 26, label: "FEME" },
  { value: 27, label: "FEME - UGAF" },
  { value: 28, label: "FEME DE CAXIAS" },
  { value: 29, label: "FEME IMPERATRIZ" },
  { value: 30, label: "FEME PROGRAMA DO LEITE" },
  { value: 32, label: "GENESIO REGO - BEIRA MAR" },
  { value: 33, label: "HEMOMAR" },
  { value: 34, label: "HEMONUCLEO DE BACABAL" },
  { value: 35, label: "HEMONUCLEO DE BALSAS" },
  { value: 36, label: "HEMONUCLEO DE CAXIAS" },
  { value: 37, label: "HEMONUCLEO DE CODO" },
  { value: 38, label: "HEMONUCLEO DE IMPERATRIZ" },
  { value: 39, label: "HEMONUCLEO DE PEDREIRAS" },
  { value: 40, label: "HEMONUCLEO PINHEIRO" },
  { value: 41, label: "HEMONUCLEO SANTA INES" },
  { value: 42, label: "HOSPITAL ADELIA MATOS FONSECA" },
  { value: 43, label: "HOSPITAL AQUILES LISBOA" },
  { value: 44, label: "HOSPITAL DA ILHA" },
  { value: 45, label: "HOSPITAL DE BARREIRINHAS" },
  { value: 46, label: "HOSPITAL DE CUIDADOS INTENSIVOS - HCI" },
  { value: 47, label: "HOSPITAL DE PAULINO NEVES" },
  { value: 48, label: "HOSPITAL DE PEDREIRAS" },
  { value: 49, label: "HOSPITAL E MATERNIDADE ADERSON MARINHO - P. FRANCO" },
  { value: 50, label: "HOSPITAL GENESIO REGO (INTERNAÇÃO)" },
  { value: 200, label: "HOSPITAL GENTIL FILHO" },
  { value: 51, label: "HOSPITAL GERAL DE ALTO ALEGRE" },
  { value: 52, label: "HOSPITAL GERAL DE GRAJAU" },
  { value: 53, label: "HOSPITAL GERAL DE MATOES DO NORTE" },
  { value: 54, label: "HOSPITAL GERAL DE PERITORO" },
  { value: 55, label: "HOSPITAL MACROREGIONAL DE CAXIAS" },
  { value: 56, label: "HOSPITAL MACROREGIONAL DE COROATA" },
  { value: 57, label: "HOSPITAL MACRORREGIONAL DRA RUTH NOLETO" },
  { value: 58, label: "HOSPITAL MATERNO INFANTIL IMPERATRIZ" },
  { value: 59, label: "HOSPITAL PRESIDENTE DUTRA" },
  { value: 60, label: "HOSPITAL PRESIDENTE VARGAS" },
  { value: 61, label: "HOSPITAL REGIONAL ALARICO NUNES PACHECO - Timon" },
  { value: 62, label: "HOSPITAL REGIONAL DE BARRA DO CORDA" },
  { value: 63, label: "HOSPITAL REGIONAL DE CARUTAPERA" },
  { value: 64, label: "HOSPITAL REGIONAL DE CHAPADINHA" },
  { value: 65, label: "HOSPITAL REGIONAL DE LAGO DA PEDRA" },
  { value: 66, label: "HOSPITAL REGIONAL DE MORROS" },
  { value: 67, label: "HOSPITAL REGIONAL DE TIMBIRAS" },
  { value: 68, label: "HOSPITAL REGIONAL SANTA LUZIA DO PARUA" },
  { value: 69, label: "HOSPITAL VILA LUIZAO" },
  { value: 71, label: "LACEN" },
  { value: 72, label: "LACEN IMPERATRIZ" },
  { value: 73, label: "POLICLINICA AÇAILANDIA" },
  { value: 74, label: "POLICLINICA BARRA DO CORDA" },
  { value: 75, label: "POLICLINICA CAXIAS" },
  { value: 76, label: "POLICLINICA CIDADE OPERARIA" },
  { value: 77, label: "POLICLINICA COHATRAC" },
  { value: 78, label: "POLICLINICA DE CODÓ" },
  { value: 79, label: "POLICLINICA DE IMPERATRIZ" },
  { value: 80, label: "POLICLINICA DO COROADINHO" },
  { value: 81, label: "POLICLINICA DO CUJUPE" },
  { value: 82, label: "POLICLINICA VILA LUIZAO" },
  { value: 83, label: "POLICLINICA VINHAIS" },
  { value: 160, label: "RESIDENCIA MEDICA E MULTI - ANALISTAS TECNICOS" },
  { value: 84, label: "RESIDENCIA MEDICA E MULTIPROFISSIONAL" },
  { value: 85, label: "SHOPPING DA CRIANÇA" },
  { value: 86, label: "SOLAR DO OUTONO" },
  { value: 87, label: "SVO -SERV. VERIFICAÇÃO DE ÓBITOS - SÃO LUÍS" },
  { value: 88, label: "SVO -SERV. VERIFICAÇÃO DE ÓBITOS - TIMON" },
  { value: 89, label: "SVO -SERV.VERIFICAÇÃO DE ÓBITOS - IMPERATRIZ" },
  { value: 150, label: "TEA - CENTRO ESPECIALIZADO DE REAB. OLHO D'AGUA" },
  { value: 90, label: "UNIDADE DE CUIDADOS INTENSIVOS DE CODO" },
  { value: 91, label: "UPA ARACAGY" },
  { value: 92, label: "UPA CIDADE OPERARIA" },
  { value: 93, label: "UPA CODO" },
  { value: 94, label: "UPA COROATA" },
  { value: 95, label: "UPA DE IMPERATRIZ" },
  { value: 96, label: "UPA ITAQUI BACANGA" },
  { value: 97, label: "UPA PAÇO DO LUMIAR" },
  { value: 98, label: "UPA PARQUE VITORIA" },
  { value: 99, label: "UPA SAO JOAO DOS PATOS" },
  { value: 100, label: "UPA TIMON" },
  { value: 101, label: "UPA VINHAIS" },
]

export const hospitals = hospitais.map((hospital) => ({
  ...hospital,
  value: `${hospital.label
    .replace(/\s+/g, "_")}`,
}))
