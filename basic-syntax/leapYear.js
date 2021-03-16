function leapYear(year) {
    leap = '';

    if (year % 400 == 0) {
        leap = 'yes';
    } else if (year % 4 == 0 && year % 100 != 0) {
        leap = 'yes';
    } else {
        leap = 'no';
    }

    console.log(leap)
}