function profitCalc(trippr, toy1, toy2, toy3, toy4, toy5) {
    let excursionCost = Number(trippr);
    let puzzleCount = Number(toy1);
    let dollsCount = Number(toy2);
    let teddyBearsCount = Number(toy3);
    let minionsCount = Number(toy4);
    let trucksCount = Number(toy5);

    let puzzlePrice = 2.60;
    let dollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;

    let puzzleAmount = puzzleCount * puzzlePrice;
    let dollAmount = dollsCount * dollPrice;
    let teddyBearAmount = teddyBearsCount * teddyBearPrice;
    let minionAmount = minionsCount * minionPrice;
    let truckAmount = trucksCount * truckPrice;

    let totalAmount = puzzleAmount + dollAmount + teddyBearAmount + minionAmount + truckAmount

    let toysCount = puzzleCount + dollsCount + teddyBearsCount + minionsCount + trucksCount
    if (toysCount >= 50){
        discount = 0.25 * totalAmount;
        totalAmount -= discount;
    }
    let rent = 0.1 * totalAmount;
    let profit = totalAmount - rent;
    if (profit >= excursionCost){
        console.log(`Yes! ${(profit - excursionCost).toFixed(2)} lv left.`);
    }else{
        moneyNeeded = excursionCost - profit;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
    }
    }

profitCalc("40.8", "20", "25", "30", "50", "10")