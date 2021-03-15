function skiTrip (d, type, review) {
    let days = Number(d);
    let roomType = type;
    let comment = review;

    let pricePerNight = 0;
    switch (roomType) {
        case 'room for one person': pricePerNight = 18; break;
        case 'apartment': pricePerNight = 25; break;
        case 'president apartment': pricePerNight = 35; break;
    }

    let nights = days -1;
    let price = pricePerNight * nights;
    let discount = 0;

    if (nights < 10) {
        if (roomType === 'apartment') {
            discount = 0.30 * price;
        } else if (roomType === 'president apartment') {
            discount = 0.10 * price;
        }
    } else if (nights >= 10 && nights <= 15) {
        if (roomType === 'apartment') {
            discount = 0.35 * price;
        } else if (roomType === 'president apartment') {
            discount = 0.15 * price;
        }
    } else {
        if (roomType === 'apartment') {
            discount = 0.50 * price;
        } else if (roomType === 'president apartment') {
            discount = 0.20 * price;
        }
    }

    let finalPrice = price - discount;
    switch (comment) {
        case 'positive': finalPrice += 0.25 * finalPrice; break;
        case 'negative': finalPrice -= 0.10 * finalPrice
    }

    console.log(finalPrice.toFixed(2))
}