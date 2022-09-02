const disciplinas = {
    "PROJETO INTEGRADOR DE ENGENHARIA 2":{"nome":"PROJETO INTEGRADOR DE ENGENHARIA 2", "preRequisitos":["PROJETO INTEGRADOR DE ENGENHARIA 1"], "pesoSemestre": 0.1},
    "GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE":{"nome":"GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE", "preRequisitos":["TESTES DE SOFTWARE"], "pesoSemestre": 0.1},
    "ENGENHARIA DE PRODUTO DE SOFTWARE":{"nome":"ENGENHARIA DE PRODUTO DE SOFTWARE", "preRequisitos":[], "pesoSemestre": 0.1},
    "PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS":{"nome":"PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS", "preRequisitos":["TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES"], "pesoSemestre": 0.2},
    "TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES":{"nome":"TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES", "preRequisitos":["ARQUITETURA E DESENHO DE SOFTWARE, TESTES DE SOFTWARE"], "pesoSemestre": 0.2},
    "PARADIGMAS DE PROGRAMAÇÃO":{"nome":"PARADIGMAS DE PROGRAMAÇÃO", "preRequisitos":["ORIENTAÇÃO A OBJETOS", "COMPILADORES 1"], "pesoSemestre": 0.2},
    "FUNDAMENTOS DE SISTEMAS EMBARCADOS":{"nome":"FUNDAMENTOS DE SISTEMAS EMBARCADOS", "preRequisitos":["FUNDAMENTOS DE SISTEMAS OPERACIONAIS"], "pesoSemestre": 0.2},
    "PROJETO DE ALGORITMOS":{"nome":"PROJETO DE ALGORITMOS", "preRequisitos":["ESTRUTURA DE DADOS E ALGORITMOS"], "pesoSemestre": 0.3},
    "QUALIDADE DE SOFTWARE 1":{"nome":"QUALIDADE DE SOFTWARE 1", "preRequisitos":["GESTÃO DA PRODUÇÃO E QUALIDADE", "INTERAÇÃO HUMANO COMPUTADOR"], "pesoSemestre": 0.3},
    "TESTES DE SOFTWARE":{"nome":"TESTES DE SOFTWARE", "preRequisitos":["MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE"], "pesoSemestre": 0.3},
    "FUNDAMENTOS DE REDES DE COMPUTADORES":{"nome":"FUNDAMENTOS DE REDES DE COMPUTADORES", "preRequisitos":["FUNDAMENTOS DE SISTEMAS OPERACIONAIS"], "pesoSemestre": 0.3},
    "ARQUITETURA E DESENHO DE SOFTWARE":{"nome":"ARQUITETURA E DESENHO DE SOFTWARE", "preRequisitos":["REQUISITOS DE SOFTWARE"], "pesoSemestre": 0.3},
    "SISTEMAS DE BANCO DE DADOS 2":{"nome":"SISTEMAS DE BANCO DE DADOS 2", "preRequisitos":["SISTEMAS DE BANCO DE DADOS 1"], "pesoSemestre": 0.3},
    "INTERAÇÃO HUMANO COMPUTADOR":{"nome":"INTERAÇÃO HUMANO COMPUTADOR", "preRequisitos":["MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE"], "pesoSemestre": 0.4},
    "REQUISITOS DE SOFTWARE":{"nome":"REQUISITOS DE SOFTWARE", "preRequisitos":["MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE"], "pesoSemestre": 0.4},
    "FUNDAMENTOS DE SISTEMAS OPERACIONAIS":{"nome":"FUNDAMENTOS DE SISTEMAS OPERACIONAIS", "preRequisitos":["FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES"], "pesoSemestre": 0.4},
    "SISTEMAS DE BANCO DE DADOS 1":{"nome":"SISTEMAS DE BANCO DE DADOS 1 ", "preRequisitos":["MATEMÁTICA DISCRETA 2"], "pesoSemestre": 0.4},
    "ESTRUTURAS DE DADOS 2":{"nome":"ESTRUTURAS DE DADOS 2", "preRequisitos":["ESTRUTURA DE DADOS E ALGORITMOS"], "pesoSemestre": 0.4},
    "COMPILADORES 1":{"nome":"COMPILADORES 1", "preRequisitos":["ESTRUTURA DE DADOS E ALGORITMOS"], "pesoSemestre": 0.4},
    "GESTÃO DA PRODUÇÃO E QUALIDADE":{"nome":"GESTÃO DA PRODUÇÃO E QUALIDADE", "preRequisitos":["ENGENHARIA ECONÔMICA"], "pesoSemestre": 0.5},
    "PROJETO INTEGRADOR DE ENGENHARIA 1 ":{"nome":"PROJETO INTEGRADOR DE ENGENHARIA 1 ", "preRequisitos":[], "pesoSemestre": 0.5},
    "ESTRUTURA DE DADOS E ALGORITMOS":{"nome":"ESTRUTURA DE DADOS E ALGORITMOS", "preRequisitos":["ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES"], "pesoSemestre": 0.5},
    "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES":{"nome":"FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES", "preRequisitos":["TEORIA DE ELETRÔNICA DIGITAL 1","PRÁTICA DE ELETRÔNICA DIGITAL 1"], "pesoSemestre": 0.5},
    "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE":{"nome":"MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE", "preRequisitos":["ORIENTAÇÃO A OBJETOS"], "pesoSemestre": 0.5},
    "MATEMÁTICA DISCRETA 2":{"nome":"MATEMÁTICA DISCRETA 2", "preRequisitos":["MATEMÁTICA DISCRETA 1"], "pesoSemestre": 0.5},
    "MATEMÁTICA DISCRETA 1":{"nome":"MATEMÁTICA DISCRETA 1", "preRequisitos":[], "pesoSemestre": 0.6},
    "TEORIA DE ELETRÔNICA DIGITAL 1":{"nome":"TEORIA DE ELETRÔNICA DIGITAL 1", "preRequisitos":["INTRODUCAO A ALGEBRA LINEAR"], "pesoSemestre": 0.6},
    "PRÁTICA DE ELETRÔNICA DIGITAL 1":{"nome":"PRÁTICA DE ELETRÔNICA DIGITAL 1", "preRequisitos":["INTRODUCAO A ALGEBRA LINEAR"], "pesoSemestre": 0.6},
    "HUMANIDADES E CIDADANIA":{"nome":"HUMANIDADES E CIDADANIA", "preRequisitos":[], "pesoSemestre": 0.6},
    "MÉTODOS NUMÉRICOS PARA ENGENHARIA":{"nome":"MÉTODOS NUMÉRICOS PARA ENGENHARIA", "preRequisitos":["CÁLCULO 2"], "pesoSemestre": 0.6},
    "ORIENTAÇÃO A OBJETOS":{"nome":"ORIENTAÇÃO A OBJETOS", "preRequisitos":["ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES"], "pesoSemestre": 0.6},
    "ENGENHARIA ECONÔMICA":{"nome":"ENGENHARIA ECONÔMICA", "preRequisitos":[], "pesoSemestre": 0.6},
    "INTRODUCAO A ALGEBRA LINEAR":{"nome":"INTRODUCAO A ALGEBRA LINEAR", "preRequisitos":[], "pesoSemestre": 0.7},
    "CÁLCULO 2":{"nome":"CÁLCULO 2", "preRequisitos":["CÁLCULO 1"], "pesoSemestre": 0.7},
    "FISICA 1 EXPERIMENTAL":{"nome":"FISICA 1 EXPERIMENTAL", "preRequisitos":[], "pesoSemestre": 0.7},
    "FISICA 1":{"nome":"FISICA 1", "preRequisitos":[], "pesoSemestre": 0.7},
    "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA":{"nome":"PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA", "preRequisitos":["CÁLCULO 1"], "pesoSemestre": 0.7},
    "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES":{"nome":"ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "preRequisitos":[], "pesoSemestre": 0.8},
    "CÁLCULO 1":{"nome":"CÁLCULO 1", "preRequisitos":[], "pesoSemestre": 0.8},
    "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR":{"nome":"DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "preRequisitos":[], "pesoSemestre": 0.8},
    "INTRODUÇÃO À ENGENHARIA":{"nome":"INTRODUÇÃO À ENGENHARIA", "preRequisitos":[], "pesoSemestre": 0.8},
    "ENGENHARIA E AMBIENTE":{"nome":"ENGENHARIA E AMBIENTE", "preRequisitos":[], "pesoSemestre": 0.8}
}

module.exports = disciplinas
