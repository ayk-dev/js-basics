function calculateArea(type, num1, num2) {
    area = 0;
    let figure = type;
    if (figure == 'square'){
        side = Number(num1);
        area = side * side;  
    } else if (figure == 'rectangle') {
        sideA = Number(num1);
        sideB = Number(num2);
        area = sideA * sideB
    } else if (figure == 'circle') {
        radius = Number(num1);
        area = radius * radius * Math.PI;
    } else if (figure == 'triangle') {
        side = Number(num1);
        heigth = Number(num2);
        area = (side * heigth) / 2;
    }
    console.log(area)
}

        
