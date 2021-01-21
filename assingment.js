//https://github.com/web-shoharab-pk/assingment-3


//kilometer to meter programming start.

function kilometerToMeter(inputKilometer) {
    var meter = inputKilometer * 1000; // 1000 meter is equal 1 kilometer
    if (inputKilometer < 0) {
        console.log("Distance cannot be negative");
    }
    else {
        console.log(inputKilometer + " Kilometer is equal : " + meter + " Meter");
    }
    return meter;
}
kilometerToMeter(10);
kilometerToMeter(-1);

//complete kilometer to meter programming end.


//budget calculator programming start

function budgetCalculator(clock, mobile, laptop) {
    var clockCost = clock * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    var total = clockCost + mobileCost + laptopCost;
    if (clock < 0 || mobile < 0 || laptop < 0) {
        console.log("Product cannot be negative");
    }
    else {
        console.log("total cost of this budget : " + total, "Total value of clock : " + clockCost, "Total value of mobile : " + mobileCost, "Total value of laptop : " + laptopCost);
    }
    return clockCost, mobileCost, laptopCost, total;
}
budgetCalculator(100, 10, 5);
budgetCalculator(100, 100, -15);

//budget calculator programming end


//hotel cost programming start

function hotelCost(livingDay) {
    if (livingDay >= 0 && livingDay <= 10) {
        var firstRent = livingDay * 100;
        var totalRent = firstRent;
        console.log("your total bill is : " + totalRent);
    }
    else if (livingDay > 10 && livingDay <= 20) {
        var livingDay = livingDay - 10;
        var firstRent = 100 * 10;
        var secondRent = livingDay * 80;
        var totalRent = firstRent + secondRent;
        console.log("your total bill is : " + totalRent);
    }
    else if (livingDay > 20) {
        var livingDay = livingDay - 20;
        var firstRent = 100 * 10;
        var secondRent = 80 * 10;
        var lastRent = livingDay * 50;
        var totalRent = firstRent + secondRent + lastRent;
        console.log("your total bill is : " + totalRent);
    }
    else {
        console.log("living day cannot be nagetive");
    }
    return totalRent;
}
hotelCost(100);
hotelCost(-20);

//hotel cost programming end


//mega friend programming start