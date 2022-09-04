const dados = require("./disciplinas")


export class Disciplina {
    nome;
    sigla;
    peso;
    pesoSemestre;
    horarios = []
    preRequisitos = []
    constructor(disciplina, preRequisitos, pesoSemestre, horarios) {
        this.nome = disciplina
        let sigla = ""
        const palavras = disciplina.split(" ")
        for (let i in palavras)
            if(palavras[i].length > 3)
                sigla += palavras[i][0]
            else if (/^-?\d+$/.test(palavras[i]))
                sigla += palavras[i][0]
        this.sigla = sigla
        this.peso = 1
        this.pesoSemestre = pesoSemestre
        this.preRequisitos = preRequisitos
        this.horarios = horarios
    }

    recalculaPesos(listaDeDisciplinas) {
        for(let i in listaDeDisciplinas) {
            const preRequisitoss = listaDeDisciplinas[i].preRequisitos
            for (let j=0;j<preRequisitoss.length;j++)
                if(preRequisitoss[j] == this.nome)
                    this.peso += listaDeDisciplinas[i].peso + 1
        }
    }
    
    recalculaPesosSemestre() {
        this.peso += this.pesoSemestre
    }
}

export const listaDisciplina = [];
const valores = Object.values(dados)
for(let i in valores)
    listaDisciplina.push( new Disciplina(valores[i].nome, valores[i].preRequisitos, valores[i].pesoSemestre, valores[i].horarios))

for(let i in listaDisciplina)
    listaDisciplina[i].recalculaPesos(listaDisciplina)

    for(let i in listaDisciplina)
    listaDisciplina[i].recalculaPesosSemestre()

for(let i in listaDisciplina)
    console.log(listaDisciplina[i].nome + " -> " + listaDisciplina[i].peso)
