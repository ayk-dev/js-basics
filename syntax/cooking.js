function cookingByNumbers(start, op1, op2, op3, op4, op5){
    let commands = [op1, op2, op3, op4, op5];
    let result = Number(start);

    for (operation of commands) {
        switch (operation) {
            case 'chop': result /= 2; break;
            case 'dice': result = Math.sqrt(result); break;
            case 'spice': result += 1; break;
            case 'bake': result *= 3; break;
            case 'fillet': result -= 0.2 * result; break;
        }
        console.log(result);
    }

}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')