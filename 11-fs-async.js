const { readFile, writeFile } = require('fs') 
console.log('start')

readFile('./Content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err)
        return;
    }
    console.log(result)

    const first = result
readFile('./content/second.txt', 'utf8', (err, result)=>{
    if(err){
        console.log(err)
        result; 
    }
    const second = result
    writeFile('./Content/result-sync.txt', `Here is the result: ${first}, ${second}`,
    (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        console.log('done with this task')
    })

})

})
console.log('starting the next task') 
