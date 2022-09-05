const disciplinas = {
    "PROJETO INTEGRADOR DE ENGENHARIA 2":{"nome":"PROJETO INTEGRADOR DE ENGENHARIA 2", "preRequisitos":["PROJETO INTEGRADOR DE ENGENHARIA 1"], "pesoAtividade": 1, "inicio":1, "fim":2},
    "GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE":{"nome":"GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE", "preRequisitos":["TESTES DE SOFTWARE"], "pesoAtividade": 1, "inicio":1, "fim":2},
    "ENGENHARIA DE PRODUTO DE SOFTWARE":{"nome":"ENGENHARIA DE PRODUTO DE SOFTWARE", "preRequisitos":[], "pesoAtividade": 1, "inicio":1, "fim":2},
    "PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS":{"nome":"PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS", "preRequisitos":["TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES"], "pesoAtividade": 2, "inicio":1, "fim":2},
    "TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES":{"nome":"TÉCNICAS DE PROGRAMAÇÃO EM PLATAFORMAS EMERGENTES", "preRequisitos":["ARQUITETURA E DESENHO DE SOFTWARE, TESTES DE SOFTWARE"], "pesoAtividade": 2, "inicio":1, "fim":2},
    "PARADIGMAS DE PROGRAMAÇÃO":{"nome":"PARADIGMAS DE PROGRAMAÇÃO", "preRequisitos":["ORIENTAÇÃO A OBJETOS", "COMPILADORES 1"], "pesoAtividade": 2, "inicio":1, "fim":2},
    "FUNDAMENTOS DE SISTEMAS EMBARCADOS":{"nome":"FUNDAMENTOS DE SISTEMAS EMBARCADOS", "preRequisitos":["FUNDAMENTOS DE SISTEMAS OPERACIONAIS"], "pesoAtividade": 2, "inicio":1, "fim":2},
    "PROJETO DE ALGORITMOS":{"nome":"PROJETO DE ALGORITMOS", "preRequisitos":["ESTRUTURA DE DADOS E ALGORITMOS"], "pesoAtividade": 3, "inicio":1, "fim":2},
    "QUALIDADE DE SOFTWARE 1":{"nome":"QUALIDADE DE SOFTWARE 1", "preRequisitos":["GESTÃO DA PRODUÇÃO E QUALIDADE", "INTERAÇÃO HUMANO COMPUTADOR"], "pesoAtividade": 3, "inicio":1, "fim":2},
    "TESTES DE SOFTWARE":{"nome":"TESTES DE SOFTWARE", "preRequisitos":["MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE"], "pesoAtividade": 3, "inicio":1, "fim":2},
    "FUNDAMENTOS DE REDES DE COMPUTADORES":{"nome":"FUNDAMENTOS DE REDES DE COMPUTADORES", "preRequisitos":["FUNDAMENTOS DE SISTEMAS OPERACIONAIS"], "pesoAtividade": 3, "inicio":1, "fim":2},
    "ARQUITETURA E DESENHO DE SOFTWARE":{"nome":"ARQUITETURA E DESENHO DE SOFTWARE", "preRequisitos":["REQUISITOS DE SOFTWARE"], "pesoAtividade": 3, "inicio":1, "fim":2},
    "SISTEMAS DE BANCO DE DADOS 2":{"nome":"SISTEMAS DE BANCO DE DADOS 2", "preRequisitos":["SISTEMAS DE BANCO DE DADOS 1"], "pesoAtividade": 3, "inicio":1, "fim":2},
    "INTERAÇÃO HUMANO COMPUTADOR":{"nome":"INTERAÇÃO HUMANO COMPUTADOR", "preRequisitos":["MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE"], "pesoAtividade": 4, "inicio":1, "fim":2},
    "REQUISITOS DE SOFTWARE":{"nome":"REQUISITOS DE SOFTWARE", "preRequisitos":["MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE"], "pesoAtividade": 4, "inicio":1, "fim":2},
    "FUNDAMENTOS DE SISTEMAS OPERACIONAIS":{"nome":"FUNDAMENTOS DE SISTEMAS OPERACIONAIS", "preRequisitos":["FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES"], "pesoAtividade": 4, "inicio":1, "fim":2},
    "SISTEMAS DE BANCO DE DADOS 1":{"nome":"SISTEMAS DE BANCO DE DADOS 1 ", "preRequisitos":["MATEMÁTICA DISCRETA 2"], "pesoAtividade": 4, "inicio":1, "fim":2},
    "ESTRUTURAS DE DADOS 2":{"nome":"ESTRUTURAS DE DADOS 2", "preRequisitos":["ESTRUTURA DE DADOS E ALGORITMOS"], "pesoAtividade": 4, "inicio":1, "fim":2},
    "COMPILADORES 1":{"nome":"COMPILADORES 1", "preRequisitos":["ESTRUTURA DE DADOS E ALGORITMOS"], "pesoAtividade": 4, "inicio":1, "fim":2},
    "GESTÃO DA PRODUÇÃO E QUALIDADE":{"nome":"GESTÃO DA PRODUÇÃO E QUALIDADE", "preRequisitos":["ENGENHARIA ECONÔMICA"], "pesoAtividade": 5, "inicio":1, "fim":2},
    "PROJETO INTEGRADOR DE ENGENHARIA 1 ":{"nome":"PROJETO INTEGRADOR DE ENGENHARIA 1 ", "preRequisitos":[], "pesoAtividade": 5, "inicio":1, "fim":2},
    "ESTRUTURA DE DADOS E ALGORITMOS":{"nome":"ESTRUTURA DE DADOS E ALGORITMOS", "preRequisitos":["ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES"], "pesoAtividade": 5, "inicio":1, "fim":2},
    "FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES":{"nome":"FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES", "preRequisitos":["TEORIA DE ELETRÔNICA DIGITAL 1","PRÁTICA DE ELETRÔNICA DIGITAL 1"], "pesoAtividade": 5, "inicio":1, "fim":2},
    "MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE":{"nome":"MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE", "preRequisitos":["ORIENTAÇÃO A OBJETOS"], "pesoAtividade": 5, "inicio":1, "fim":2},
    "MATEMÁTICA DISCRETA 2":{"nome":"MATEMÁTICA DISCRETA 2", "preRequisitos":["MATEMÁTICA DISCRETA 1"], "pesoAtividade": 5, "inicio":1, "fim":2},
    "MATEMÁTICA DISCRETA 1":{"nome":"MATEMÁTICA DISCRETA 1", "preRequisitos":[], "pesoAtividade": 6, "inicio":1, "fim":2},
    "TEORIA DE ELETRÔNICA DIGITAL 1":{"nome":"TEORIA DE ELETRÔNICA DIGITAL 1", "preRequisitos":["INTRODUCAO A ALGEBRA LINEAR"], "pesoAtividade": 6, "inicio":1, "fim":2},
    "PRÁTICA DE ELETRÔNICA DIGITAL 1":{"nome":"PRÁTICA DE ELETRÔNICA DIGITAL 1", "preRequisitos":["INTRODUCAO A ALGEBRA LINEAR"], "pesoAtividade": 6, "inicio":1, "fim":2},
    "HUMANIDADES E CIDADANIA":{"nome":"HUMANIDADES E CIDADANIA", "preRequisitos":[], "pesoAtividade": 6, "inicio":1, "fim":2},
    "MÉTODOS NUMÉRICOS PARA ENGENHARIA":{"nome":"MÉTODOS NUMÉRICOS PARA ENGENHARIA", "preRequisitos":["CÁLCULO 2"], "pesoAtividade": 6, "inicio":1, "fim":2},
    "ORIENTAÇÃO A OBJETOS":{"nome":"ORIENTAÇÃO A OBJETOS", "preRequisitos":["ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES"], "pesoAtividade": 6, "inicio":1, "fim":2},
    "ENGENHARIA ECONÔMICA":{"nome":"ENGENHARIA ECONÔMICA", "preRequisitos":[], "pesoAtividade": 6, "inicio":1, "fim":2},
    "INTRODUCAO A ALGEBRA LINEAR":{"nome":"INTRODUCAO A ALGEBRA LINEAR", "preRequisitos":[], "pesoAtividade": 7, "inicio":1, "fim":2},
    "CÁLCULO 2":{"nome":"CÁLCULO 2", "preRequisitos":["CÁLCULO 1"], "pesoAtividade": 7, "inicio":1, "fim":2},
    "FISICA 1 EXPERIMENTAL":{"nome":"FISICA 1 EXPERIMENTAL", "preRequisitos":[], "pesoAtividade": 7, "inicio":1, "fim":2},
    "FISICA 1":{"nome":"FISICA 1", "preRequisitos":[], "pesoAtividade": 7, "inicio":1, "fim":2},
    "PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA":{"nome":"PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA", "preRequisitos":["CÁLCULO 1"], "pesoAtividade": 7, "inicio":1, "fim":2},
    "ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES":{"nome":"ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES", "preRequisitos":[], "pesoAtividade": 8, "inicio":1, "fim":2},
    "CÁLCULO 1":{"nome":"CÁLCULO 1", "preRequisitos":[], "pesoAtividade": 8, "inicio":1, "fim":2},
    "DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR":{"nome":"DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR", "preRequisitos":[], "pesoAtividade": 8, "inicio":1, "fim":2},
    "INTRODUÇÃO À ENGENHARIA":{"nome":"INTRODUÇÃO À ENGENHARIA", "preRequisitos":[], "pesoAtividade": 8, "inicio":1, "fim":2},
    "ENGENHARIA E AMBIENTE":{"nome":"ENGENHARIA E AMBIENTE", "preRequisitos":[], "pesoAtividade": 8, "inicio":4, "fim":5}
}

module.exports = disciplinas
