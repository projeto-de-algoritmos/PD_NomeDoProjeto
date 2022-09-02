// Criando a classe de grafos 
class Vertice {
    nome;
    sigla;
    peso;
    requisitos = []
    constructor(disciplina) {
        var teste = disciplina.split(" ")
        var sigla = ""
        for (var i in teste)
            if(teste[i].length > 3)
                sigla += teste[i][0]
            else if (/^-?\d+$/.test(teste[i]))
                sigla += teste[i][0]
        this.nome = disciplina
        this.sigla = sigla
        this.noOfRequisitos = 1
    }
    addRequisites(noOfRequisitos) {
        this.noOfRequisitos += noOfRequisitos;
    }
}

class Graph {
    noOfVertices;
    AdjList;
    constructor(QVertices) {
        this.noOfVertices = QVertices;
        this.AdjList = {};
    }

    newVertice(disciplina) {
        var vertice = new Vertice(disciplina)
        this.AdjList[vertice.nome] = vertice
    }

    newEdge(vertice, neighboor) {
        console.log(typeof(this.AdjList[vertice]))
        this.AdjList[vertice];
    }

    printGraph() {
        console.log(this.AdjList)
    }
}

var G = new Graph(41);
const disciplinas = ["PROJETO INTEGRADOR DE ENGENHARIA 2","GERÊNCIA DE CONFIGURAÇÃO E EVOLUÇÃO DE SOFTWARE","ENGENHARIA DE PRODUTO DE SOFTWARE","PROGRAMAÇÃO PARA SISTEMAS PARALELOS E DISTRIBUÍDOS","PARADIGMAS DE PROGRAMAÇÃO","FUNDAMENTOS DE SISTEMAS EMBARCADOS","PROJETO DE ALGORITMOS","QUALIDADE DE SOFTWARE 1","TESTES DE SOFTWARE","FUNDAMENTOS DE REDES DE COMPUTADORES","ARQUITETURA E DESENHO DE SOFTWARE","SISTEMAS DE BANCO DE DADOS 2","INTERAÇÃO HUMANO COMPUTADOR","REQUISITOS DE SOFTWARE","FUNDAMENTOS DE SISTEMAS OPERACIONAIS","SISTEMAS DE BANCO DE DADOS 1 ","ESTRUTURAS DE DADOS 2","COMPILADORES 1","GESTÃO DA PRODUÇÃO E QUALIDADE","PROJETO INTEGRADOR DE ENGENHARIA 1 ","ESTRUTURA DE DADOS E ALGORITMOS","FUNDAMENTOS DE ARQUITETURA DE COMPUTADORES","MÉTODOS DE DESENVOLVIMENTO DE SOFTWARE","MATEMÁTICA DISCRETA 2","MATEMÁTICA DISCRETA 1","TEORIA DE ELETRÔNICA DIGITAL 1","PRÁTICA DE ELETRÔNICA DIGITAL 1","HUMANIDADES E CIDADANIA","MÉTODOS NUMÉRICOS PARA ENGENHARIA","ORIENTAÇÃO A OBJETOS","ENGENHARIA ECONÔMICA","INTRODUCAO A ALGEBRA LINEAR","CÁLCULO 2","FISICA 1 EXPERIMENTAL","FISICA 1","PROBABILIDADE E ESTATÍSTICA APLICADO A ENGENHARIA","ALGORITMOS E PROGRAMAÇÃO DE COMPUTADORES","CÁLCULO 1","DESENHO INDUSTRIAL ASSISTIDO POR COMPUTADOR","INTRODUÇÃO À ENGENHARIA","ENGENHARIA E AMBIENTE"]

var i
var cont = 0
for(i in disciplinas) {
    G.newVertice(disciplinas[i])
}

G.newEdge("FUNDAMENTOS DE REDES DE COMPUTADORES","ARQUITETURA E DESENHO DE SOFTWARE")

//G.printGraph()