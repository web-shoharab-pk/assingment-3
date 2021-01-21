//https://github.com/web-shoharab-pk/assingment-3


//kilometer to meter.

function kilometerToMeter(inputKilometer) {
    meter = inputKilometer * 1000; // 1000 meter is equal 1 kilometer
    if (inputKilometer < 0) {
        console.log("Distance cannot be negative");
    }
    else {
        console.log(meter);
    }
}
    kilometerToMeter(-10);
    kilometerToMeter(10);

