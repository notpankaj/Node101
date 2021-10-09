console.clear()


const { readFile, writeFile } = require("fs");

//we need a callback // 

// async is NON CODE BLOCKING 

// =====================================================================================================
// CALLBACK HELL

console.log('START TASK')

readFile('./content/first.txt', 'utf-8' ,(err, result)=>{
    if(err){
        console.log(err,"errr");
        return ;
    }
    
    const first = result;
    console.log(result);
    
    readFile('./content/second.txt','utf-8',(err,result) => {
        if(err){
            console.log(err,"errr");
            return ;
        }

        const second = result;
                
        
        writeFile(  
            './content/result-async.txt',
            `Here is the result : first = ${first} , second = ${second}`,
            {flag : 'a'},
            (err,result) => {
                if(err){
                    console.log(err,'err'); return;
                }
                console.log("END TASK");
            }    
        );

    })
});



console.log('DOING OTHER TASK')