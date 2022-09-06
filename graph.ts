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



function findLastNonConflictingJob(jobs: Atividade[], jobsSize: number) {
    let low = 0 
    let high = jobsSize
    let mid = -1
    while (low <= high) {
        mid = Math.floor((low + high)/2)
        if (jobs[mid].fim <= jobs[jobsSize].inicio) {
            if (jobs[mid+1].fim <= jobs[jobsSize].inicio)
                low = mid + 1
            else
                return mid
        }
        else
            high = mid - 1
    }
    return -1
}




function findMaxpesoJobs(jobs: Atividade[]) {
    if (jobs.length == 0)
        return 0
    jobs.sort((a,b)=>a.fim - b.fim)

    const totalJobs = jobs.length

    const maxpeso = []
    var tasks = new Array(totalJobs).fill([])

    maxpeso[0] = jobs[0].peso
    tasks[0].push(0)

    for(let  i=1;i<totalJobs;i++) {
        const index = findLastNonConflictingJob(jobs, i)
        let currentpeso = jobs[i].peso
        if (index != -1)
            currentpeso += maxpeso[index]

        if (maxpeso[i - 1] < currentpeso) {
            maxpeso[i] = currentpeso
            if (index != -1)
                tasks[i] = tasks[index];
            tasks[i].push(i)
        }

        // excluding the current job leads to the maximum peso so far
        else {
            tasks[i] = tasks[i-1]
            maxpeso[i] = maxpeso[i - 1]
        }
    }
    // `maxpeso[n-1]` stores the maximum peso
    console.log('The maximum peso is', maxpeso[totalJobs - 1])
    // `tasks[n-1]` stores the index of jobs involved in the maximum peso
    console.log("The jobs involved in the maximum peso are")
    console.log(tasks);
    console.log(jobs);
    
    
    for (let i of tasks[totalJobs -1])
        console.log(jobs[i].inicio, jobs[i].fim, jobs[i].peso)
    return tasks
}

// Aqui crio todas as disciplinas
const listaDisciplina = inicializa(dados);
findMaxpesoJobs(listaDisciplina)
export {listaDisciplina, findMaxpesoJobs, Atividade, Disciplina}
