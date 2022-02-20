function distanceCalculations(distance) {
    var speedLimit = 96.5606; // Average speed limit is 60mph = 96.5606 kmph
    var gasPrice = 1.446; // $1.446/litre
    var fuelRate = 0.1; // 0.1 litres of fuel per kilometer

    var walkingRate = 5; // In the absence of significant external factors, humans tend to walk at about 1.4 metres per second or 5 km per hour
    var calorieCost = 0;

    var bikingRate = 10; // So anywhere from 8 miles to 14 miles in one hour for the average cyclist on an average bike

    var scooterRate = 48.2803; // For an adult, the average speed of a seated electric scooter is around 20 mph and can go up to 40 mph
    var wattUsageRate = 17.70274; // 11 whr/km. recreational riders: 8-15whr/mile = 12.87472 - 24.1401 whr/km
    var wattCostRate = 0.00013; // Ontario, $0.13 / kWh

    var busAvgSpeed = speedLimit - 20; // Buses are usually slower than other traffic
    var TTCAdultFare = 3.25;

    var object = {
        car: {
            activityName: 'Car',
            timeString: ((distance / speedLimit) * 60).toFixed(2).toString() + ' mins',
            costString: '$' + (distance * fuelRate * gasPrice).toFixed(2).toString(),
        },
        bike: {
            activityName: 'Bike',
            timeString: ((distance / bikingRate) * 60).toFixed(2).toString() + ' mins',
            costString: '$' + calorieCost.toFixed(2).toString(),
        },
        scooter: {
            activityName: 'Scooter',
            timeString: ((distance / scooterRate) * 60).toFixed(2).toString() + ' mins',
            costString: '$' + (distance * wattUsageRate * wattCostRate).toFixed(2).toString(),
        },
        bus: {
            activityName: 'Bus',
            timeString: ((distance / busAvgSpeed) * 60).toFixed(2).toString() + ' mins',
            costString: '$' + TTCAdultFare.toFixed(2).toString(),
        },
        walk: {
            activityName: 'Walk',
            timeString: ((distance / walkingRate) * 60).toFixed(2).toString() + ' mins',
            costString: '$' + calorieCost.toFixed(2).toString(),
        },
    };

    return object;
}

export default distanceCalculations;