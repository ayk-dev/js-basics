function extract(numbers){
    const extracted = [numbers.shift(),];

    for (num of numbers){
        if (num >= extracted[extracted.length - 1]){
            extracted.push(num);
        }
    }

    return extracted;

}