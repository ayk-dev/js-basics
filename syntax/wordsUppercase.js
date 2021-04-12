function wordsUppercase(input) {
    let words = input.split(' ');
    let newWords = []

    for (w of words) {
        w = w.replace(/[^a-zA-Z]/g, '');
        w = w.toUpperCase()
        newWords.push(w)
    }

    console.log(newWords.join(', '))
}

wordsUppercase('Functions in JS can be nested, i.e. hold other functions')