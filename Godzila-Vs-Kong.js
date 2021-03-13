function isMoneyEnough(num1, num2, num3) {
    let budget = Number(num1);
    let extrasCount = Number(num2);
    let costumePrice = Number(num3);
    let movieDecor = 0.1 * budget;
    let costumesCost = costumePrice * extrasCount
    if (extrasCount > 150) {
        discount = 0.1 * costumesCost
        costumesCost -= discount
    }
    let totalExpenses = movieDecor + costumesCost
    if (totalExpenses > budget) {
        console.log('Not enough money!')
        moneyNeeded = totalExpenses - budget
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }else {
        console.log("Action!")
        moneyExtra = budget - totalExpenses
        console.log(`Wingard starts filming with ${moneyExtra.toFixed(2)} leva left.`)
    }
}