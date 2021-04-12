function addAndRemove(commands) {
    let number = 1;
    const array = [];

    for (cmd of commands){
        
        if (cmd == 'add'){
            array.push(number);
        } else {
            array.pop();
        }
        
        number++;
    }

    if (array.length > 0){
        for (el of array){
            console.log(el);
        }
        } else {
            console.log('Empty');
        }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add']);
