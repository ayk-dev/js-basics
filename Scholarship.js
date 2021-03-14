function scholarship(num1, num2, num3) {
    let income = Number(num1);
    let gpa = Number(num2);
    let miniSalary = Number(num3);
    let excellentResScholaship = Math.floor(gpa * 25);
    let socialScholarship = Math.floor(0.35 * miniSalary);
    if (income > miniSalary) {
        if (gpa < 5.5) {
            console.log('You cannot get a scholarship!');
        } else {
            console.log(`You get a scholarship for excellent results ${excellentResScholaship} BGN`)
        } 
    } else if (income <= miniSalary) {
        if (gpa <= 4.5) {
            console.log('You cannot get a scholarship!')
        } else if (gpa > 4.5 && gpa < 5.5) {
            console.log(`You get a Social scholarship ${socialScholarship} BGN`)
        } else if (gpa >= 5.5) {
            if (excellentResScholaship >= socialScholarship) {
                console.log(`You get a scholarship for excellent results ${excellentResScholaship} BGN`)
            }else {
                console.log(`You get a Social scholarship ${socialScholarship} BGN`)
            }
        }
    }
}