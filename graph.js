const dados = require("./disciplinas")


class Disciplina {
    nome;
    sigla;
    peso;
    preRequisitos;
    horario;
    inicio;    
    fim;
    constructor(disciplina, preRequisitos, inicio, fim, pesoAtividade){
        this.nome = disciplina
        var sigla = ""
        var palavras = disciplina.split(" ")
        for (var i in palavras)
            if(palavras[i].length > 3)
                sigla += palavras[i][0]
            else if (/^-?\d+$/.test(palavras[i]))
                sigla += palavras[i][0]
        this.sigla = sigla
        this.peso = 1
        this.preRequisitos = preRequisitos
        this.inicio = inicio
        this.fim = fim
        this.pesoAtividade = pesoAtividade
    }

    calculaPesos(listaDeDisciplinas) {
        for(i in listaDeDisciplinas) {
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
function inicializa(disciplinas) {
    var listaDisciplina = []
    var valores = Object.values(disciplinas)

    for(i in valores)
        listaDisciplina[valores[i].nome] = new Disciplina(valores[i].nome, valores[i].preRequisitos, valores[i].inicio, valores[i].fim, valores[i].pesoAtividade)

    for(i in listaDisciplina)
        listaDisciplina[i].calculaPesos(listaDisciplina)

    for(i in listaDisciplina)
        listaDisciplina[i].recalculaPesos(listaDisciplina)
    
    return listaDisciplina
}

// Aqui crio todas as disciplinas
var listaDisciplina = inicializa(dados);

function findLastNonConflictingJob(jobs, n) {
    low = 0 
    high = n
    while (low <= high) {
        mid = Math.floor((low + high)/2)
        if (jobs[mid].finish <= jobs[n].inicio) {
            if (jobs[mid+1].finish <= jobs[n].inicio)
                low = mid + 1
            else
                return mid
        }
        else
            high = mid - 1
    }
    return -1
}

function findMaxpesoJobs(jobs) {
    if (jobs.length == 0)
        return 0
 
    jobs.sort((a,b)=>a.fim - b.fim)
 
    n = jobs.length
 
    maxpeso = []
    var tasks = new Array(n)
    for(i=0;i<n;i++)
        tasks[i] = []

    maxpeso[0] = jobs[0].peso
    tasks[0].push(0)
        
    for(var i=1;i<n;i++) {
        index = findLastNonConflictingJob(jobs, i)
        currentpeso = jobs[i].peso
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
    console.log('The maximum peso is', maxpeso[n - 1])
 
    // `tasks[n-1]` stores the index of jobs involved in the maximum peso
    console.log("The jobs involved in the maximum peso are", end=' ')
    for (i in tasks[n - 1])
        console.log((jobs[i].inicio, jobs[i].fim, jobs[i].peso), end=' ')
}

findMaxpesoJobs(Object.values(listaDisciplina))