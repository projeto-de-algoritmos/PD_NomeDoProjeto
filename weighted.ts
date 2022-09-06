import { Atividade, Disciplina } from "./graph";

function binarySearch(Disciplinas: Atividade[], inicio_index: number){

    // Initialize 'lo' and 'hi' for Binary Search
    let low = 0
    let hight = inicio_index - 1

    // Perform binary Search iteratively
    while(low <= hight){
        const mid = Math.floor((low + hight) /2);
        if (Disciplinas[mid].fim <= Disciplinas[inicio_index].inicio){
            if(Disciplinas[mid + 1].fim <= Disciplinas[inicio_index].inicio)
                low = mid + 1
            else
                return mid
        }
        else
            hight = mid - 1
    }

    return -1

}


export function schedule(atividades: Atividade[]){
    // Sort Disciplinas according to fim time
    atividades.sort((a,b)=>a.fim - b.fim)

    // Create an array to store solutions of subproblems. table[i]
    // stores the peso for Disciplinas till arr[i] (including arr[i])
    const atividadesSize = atividades.length
    let table: number[] = new Array(atividadesSize).fill(0)

    table[0] = atividades[0].peso;

    // Fill entries in table[] using recursive property
    for(let i=1;i<atividadesSize;i++){

        // Find peso including the current Disciplina
        let inclProf = atividades[i].peso
        const foundDisciplinaIndex = binarySearch(atividades, i)
        if (foundDisciplinaIndex != -1)
            inclProf += table[foundDisciplinaIndex];
        // Store maximum of including and excluding
        table[i] = Math.max(inclProf, table[i - 1])
    }
    return table[atividadesSize-1]
}
