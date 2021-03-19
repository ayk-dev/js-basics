function rightPlace(string1, char, string2) {
    let newWord = '';

    for (let i = 0; i < string1.length; i++) {
        if (string1[i] == '_') {
            newWord += char;
        } else {
            newWord += string1[i]
        }
    }

    if (newWord === string2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'i', 'String')