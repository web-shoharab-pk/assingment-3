//https://github.com/web-shoharab-pk/assingment-3


//kilometer to meter program start.

function kilometerToMeter(inputKilometer) {
    var meter = inputKilometer * 1000; // 1000 meter is equal 1 kilometer
    if (inputKilometer < 0) {
        console.log("Distance cannot be negative");
    }
    else {
        console.log(meter);
    }
    return meter;
}
    kilometerToMeter(100);
    kilometerToMeter(1.00050);

//complete kilometer to meter program end.


//budget calculator program start

function budgetCalculator(clock, mobile, laptop){
    var clockCost = clock * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    var total = clockCost + mobileCost + laptopCost ;
    if(clock < 0 || mobile < 0 || laptop < 0){
        console.log("Product cannot be negative"); 
    }
    else{
        console.log("total cost of this budget : " + total, "Total value of clock : " + clockCost, "Total value of mobile : " + mobileCost, "Total value of laptop : " + laptopCost);
    }
    return clockCost, mobileCost, laptopCost, total;
}
budgetCalculator(100, 10, 105);
budgetCalculator(100, 1000, -105);

//budget calculator program end