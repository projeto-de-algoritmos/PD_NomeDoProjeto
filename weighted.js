function binarySearch(Disciplina, inicio_index){
 
    // Initialize 'lo' and 'hi' for Binary Search
    let lo = 0
    let hi = inicio_index - 1
 
    // Perform binary Search iteratively
    while(lo <= hi){
        let mid = Math.floor((lo + hi) /2);
        if (Disciplina[mid].fim <= Disciplina[inicio_index].inicio){
            if(Disciplina[mid + 1].fim <= Disciplina[inicio_index].inicio)
                lo = mid + 1
            else
                return mid
        }
        else
            hi = mid - 1
    }
 
    return -1
 
}
 

function schedule(atividades){
    console.log(typeof(atividades))
    // Sort Disciplinas according to fim time
    atividades.sort((a,b)=>a.fim - b.fim)
 
    // Create an array to store solutions of subproblems. table[i]
    // stores the peso for Disciplinas till arr[i] (including arr[i])
    let n = atividades.length
    let table = new Array(n).fill(0)
 
    table[0] = atividades[0].peso;
 
    // Fill entries in table[] using recursive property
    for(let i=1;i<n;i++){
 
        // Find peso including the current Disciplina
        inclProf = atividades[i].peso
        l = binarySearch(atividades, i)
        if (l != -1)
            inclProf += table[l];
 
        // Store maximum of including and excluding
        table[i] = Math.max(inclProf, table[i - 1])
    }
 
    return table[n-1]
}

module.exports = schedule()