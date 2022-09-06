// A class to store a Job
class Job {
    constructor(start, finish, profit) {
        this.start = start
        this.finish = finish
        this.profit = profit
    }
}
 
// Function to print the non-overlapping jobs involved in maximum profit
// using the LIS algorithm
function findMaxProfitJobs(jobs) { 

    jobs.sort((a,b)=>a.start - b.start)
    n = jobs.length

    // `tasks[i]` stores the index of non-conflicting jobs involved in the
    // maximum profit, which ends with the i'th job
    var tasks = new Array(n)
    for(i=0;i<n;i++)
        tasks[i] = []
    // `maxProfit[i]` stores the total profit of jobs in `tasks[i]`
    
    maxProfit = [n]
    for(i=0;i<n;i++)
        maxProfit[i] = 0

    for(i=0;i<n;i++) {    
        for(j=0;j<i;j++) {
            if((jobs[j].finish <= jobs[i].start) && (maxProfit[i] < maxProfit[j])) {
                tasks[i] = tasks[j].slice()
                maxProfit[i] = maxProfit[j]
            }
        }
        tasks[i].push(i)
        maxProfit[i] += jobs[i].profit
    }
    // find an index with the maximum profit
    var index = 0
    for(i=1;i<n;i++) {
        if (maxProfit[i] > maxProfit[index])
            index = i
    }
    console.log('The jobs involved in the maximum profit are ')
    for(i=0;i<tasks[index].length;i++)
        console.log(jobs[tasks[index][i]])
}

const jobs = [
    new Job(0, 6, 60),
    new Job(5, 9, 50),
    new Job(1, 4, 30),
    new Job(5, 7, 30),
    new Job(3, 5, 10),
    new Job(7, 8, 10)
]
findMaxProfitJobs(jobs)
