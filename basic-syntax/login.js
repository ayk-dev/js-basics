function login(input) {
    let elements = input;
    let username = elements[0];
    elements.shift();
    let correct_password = username.split("").reverse().join("");
    
    attemp = 1
    while (elements.length > 0) {
        
        

        element = elements.shift();

        if (element === correct_password) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            console.log('Incorrect password. Try again.');
            attemp++;
            if (attemp == 4) {
            console.log(`User ${username} blocked!`)
            break;
        }
        }
    }
}

login(['Acer','login','go','let me in','recA']);

login(['momo','omom']);

login(['sunny','rainy','cloudy','sunny','not sunny']);
