
// https://github.com/web-shoharab-pk/assingment-3

//kilometer to meter programming start.

function kilometerToMeter(inputKilometer) {
    var meter = 0;
    var meter = inputKilometer * 1000; // 1000 meter is equal 1 kilometer
    if (inputKilometer < 0) {
        console.log("Distance cannot be negative");
    }
    return meter;
}

//complete kilometer to meter programming end.


//budget calculator programming start

function budgetCalculator(clock, mobile, laptop) {
    var totalCost = 0;
    var clockCost = clock * 50;
    var mobileCost = mobile * 100;
    var laptopCost = laptop * 500;
    totalCost = clockCost + mobileCost + laptopCost;
    if (clock < 0 || mobile < 0 || laptop < 0) {
        console.log("Product cannot be negative");
    }
    return totalCost;
}

//budget calculator programming end


//hotel cost programming start

function hotelCost(livingDay) {
    var totalRent = 0;
    if (livingDay >= 0 && livingDay <= 10) {
        var firstRent = livingDay * 100;
        totalRent = firstRent;
    }
    else if (livingDay > 10 && livingDay <= 20) {
        var livingDay = livingDay - 10;
        var firstRent = 100 * 10;
        var secondRent = livingDay * 80;
        totalRent = firstRent + secondRent;
    }
    else if (livingDay > 20) {
        var livingDay = livingDay - 20;
        var firstRent = 100 * 10;
        var secondRent = 80 * 10;
        var lastRent = livingDay * 50;
        totalRent = firstRent + secondRent + lastRent;
    }
    else {
        console.log("living day cannot be nagetive");
    }
    return totalRent;
}

//hotel cost programming end


//mega friend programming start

var friendsNameList = ["Alamin", "Nirob", "Roky", "Rabby", "Shoharab Pk", "Shohan", "Shohel"];
function megaFriend(friensListArray) {
    let largeName = "";
    for (let i = 0; i < friensListArray.length; i++) {
        if (largeName.length < friensListArray[i].length) {
            largeName = friensListArray[i];
        }
    }
    return largeName;
}

//mega friend programming end