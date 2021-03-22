function calcMoneyForFruit(fruit, weight, price) {
    let weightKg = weight / 1000;
    let cost = price * weightKg;
    let result = `I need $${cost.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`;

    return result
}