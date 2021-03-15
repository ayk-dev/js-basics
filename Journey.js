function Journey (n, s) {
    let budget = Number(n);
    let season = s;

    let destination = '';
    let type = '';
    let expenses = 0;

    if (budget <= 100) {
        
        destination = 'Bulgaria';
        
        if (season === 'summer') {
            expenses = 0.30 * budget;
            type = 'Camp';
        } else if (season === 'winter') {
            type = 'Hotel';
            expenses = 0.70 * budget;
        }

    } else if (budget > 100 && budget <= 1000) {

        destination = 'Balkans';

        if (season === 'summer') {
            type = 'Camp';
            expenses = 0.40 * budget;
        } else if (season === 'winter') {
            type = 'Hotel';
            expenses = 0.80 * budget;
        }
    } else {
        destination = 'Europe';
        type = 'Hotel';
        expenses = 0.90 * budget;
    }

    console.log(`Somewhere in ${destination}`)
    console.log(`${type} - ${expenses.toFixed(2)}`)
}