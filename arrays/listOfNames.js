/*
function listOfNames(names){
    const sortedNames = names.sort((a, b) => a.localeCompare(b));

    let i = 1;
    for (n of sortedNames){
        console.log(`${i}.${n}`);
        i++;
    }
}
*/

function listOfNames(names){
    let result = names
    .slice(0)
    .sort((a, b) => a.localeCompare(b))
    .map((n, index) => {
        let result = `${index + 1}.${n}`
        return result;
    })

    return result.join('\n');
}


console.log(listOfNames(["John", "Bob", "Christina", "Ema"]))