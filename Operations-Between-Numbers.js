function operations (a, b, op) {
    let num1 = Number(a);
    let num2 = Number(b);
    let operation = op;

    let result = 0
    switch (operation) {
        case '+': result = num1 + num2; break;
        case '-': result = num1 - num2; break;
        case '*': result = num1 * num2; break;
        case '%': 
            if (num2 === 0) {
                break;
            } else {
            result = num1 % num2; break; 
            }   
        
        case '/': 
            if (num2 === 0) {
                break;
            } else {
                result = num1 / num2; break; 
            }
    }

    if (operation === '%') {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
        console.log(`${num1} % ${num2} = ${result}`);
        }
    } else if (operation === '/') {
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        } else {
        console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
    } else {
        mark = ''
        if (result % 2 === 0){
            mark = 'even';
        } else {
            mark = 'odd'
        }
        console.log(`${num1} ${operation} ${num2} = ${result} - ${mark}`)
    }
}

