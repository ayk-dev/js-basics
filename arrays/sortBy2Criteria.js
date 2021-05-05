function sortBy2Criteria(array){
    const sortedArr = array.sort((a, b) =>{
        if (a.length == b.length){
            return a.localeCompare(b);
        }
        return a.length - b.length;
    })

    return sortedArr.join('\n');
}

sortBy2Criteria(['alpha', 'beta', 'gamma']);