const dados = require("./disciplinas")

class Atividade {
    nome: string;
    peso: number;
    inicio: number
    fim: number
    pertence?: Disciplina

    constructor(nome: string, peso: number, inicio: number, fim: number) {
        this.nome = nome
        this.peso = peso
        this.inicio = inicio
        this.fim = fim
    }

}


class Disciplina {
    nome: string;
    sigla?: string;
    peso: number;
    atividades: Atividade[]
    preRequisitos: string[];
    inicio: number;    
    fim: number;
    pesoAtividade: number;
    constructor(disciplina: string, preRequisitos: string[], inicio: number, fim: number, pesoAtividade: number){
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
        this.atividades = []
        this.preRequisitos = preRequisitos
        this.inicio = inicio
        this.fim = fim
        this.pesoAtividade = pesoAtividade
    }

    calculaPesos(listaDeDisciplinas: Disciplina[]) {
        for (const disciplina of listaDeDisciplinas) {
            const preRequisitos = disciplina.preRequisitos
            for (const preRequisito of preRequisitos) {
                if (preRequisito == this.nome) {
                    this.peso += disciplina.peso
                }
            }
        }
        for(let i in listaDeDisciplinas) {
            var preRequisitoss = listaDeDisciplinas[i].preRequisitos
            for (var j=0;j<preRequisitoss.length;j++)
                if(preRequisitoss[j] == this.nome)
                    this.peso += listaDeDisciplinas[i].peso
        }
    }

    recalculaPesos() {
        this.peso += this.pesoAtividade/10 * this.peso
    }
}

// Retorna um array com as disciplinas criadas, de acordo com o objeto de matérias enviadas como parâmetro
function inicializa(disciplinas: {[name: string]: {nome:string, preRequisitos:string[], pesoAtividade: number, inicio: number, fim: number}}) {
    const listaDisciplina: Disciplina[] = []


    for(const valor of Object.values(disciplinas)) {
        let newDisciplina = new Disciplina(valor.nome, valor.preRequisitos, valor.inicio, valor.fim, valor.pesoAtividade) 
        newDisciplina.recalculaPesos()
        listaDisciplina.push(newDisciplina)
    }
    return listaDisciplina
}

function findMaxpesoJobs(atividades: Atividade[]) { 

    atividades.sort((a,b)=>a.inicio - b.inicio)
    const n = atividades.length

    // `tasks[i]` stores the index of non-conflicting atividades involved in the
    // maximum peso, which ends with the i'th job
    var tasks = new Array(n)
    for(let i=0;i<n;i++)
        tasks[i] = []
    // `maxpeso[i]` stores the total peso of atividades in `tasks[i]`
    
    let maxpeso = [n]
    for(let i=0;i<n;i++)
        maxpeso[i] = 0

    for(let i=0;i<n;i++) {    
        for(let j=0;j<i;j++) {
            if((atividades[j].fim <= atividades[i].inicio) && (maxpeso[i] < maxpeso[j])) {
                tasks[i] = tasks[j].slice()
                maxpeso[i] = maxpeso[j]
            }
        }
        tasks[i].push(i)
        maxpeso[i] += atividades[i].peso
    }
    // find an index with the maximum peso
    var index = 0
    for(let i=1;i<n;i++) {
        if (maxpeso[i] > maxpeso[index])
            index = i
    }
    let retorno: Atividade[] = []
    for(let i=0;i<tasks[index].length;i++)
        retorno.push(atividades[tasks[index][i]])
    
        return retorno
}
/*
A função recebe um array do tipo Atividades, coloquei a matéria como String, tem que colocar do tipo Disciplina
const atividades = [
    new Atividade("prova", 60, 0, 6, 'ADS'), 
    new Atividade("tarefa", 50, 5, 9, 'ADS'),
    new Atividade("trabalho", 30, 1, 4, 'BD'),
    new Atividade("estudar", 30, 5, 7, 'PA'),
    new Atividade("tarefa", 10, 3, 5, 'QSW1'),
    new Atividade("prova", 10, 7, 8, 'TS')
]
findMaxpesoJobs(atividades)
*/

// Aqui crio todas as disciplinas
const listaDisciplina = inicializa(dados);
findMaxpesoJobs(listaDisciplina)
export {listaDisciplina, findMaxpesoJobs, Atividade, Disciplina}
