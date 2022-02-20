function distanceCalculations(distance) {
    var speedLimit = 96.5606; // Average speed limit is 60mph = 96.5606 kmph
    var gasPrice = 1.446; // $1.446/litre
    var fuelRate = 0.1; // 0.1 litres of fuel per kilometer

    var walkingRate = 5; // In the absence of significant external factors, humans tend to walk at about 1.4 metres per second or 5 km per hour
    var calorieCost = 0;

    var bikingRate = 16.0934; // So anywhere from 8 miles to 14 miles in one hour for the average cyclist on an average bike

    var scooterRate = 32.1869; // For an adult, the average speed of a seated electric scooter is around 20 mph and can go up to 40 mph
    var wattUsageRate = 17.70274; // 11 whr/km. recreational riders: 8-15whr/mile = 12.87472 - 24.1401 whr/km
    var wattCostRate = 0.00013; // Ontario, $0.13 / kWh

    var busAvgSpeed = speedLimit - 20; // Buses are usually slower than other traffic
    var TTCAdultFare = 3.25;

    var object = {
        car: {
            activityName: 'Car',
            timeInteger: (distance / speedLimit) * 60,
            timeString:
                timeConversion((distance / speedLimit) * 60),
            costString: '$' + (distance * fuelRate * gasPrice).toFixed(2).toString(),
        },
        bike: {
            activityName: 'Bike',
            timeInteger: (distance / bikingRate) * 60,
            timeString:
                timeConversion((distance / bikingRate) * 60),
            costString: '$' + calorieCost.toFixed(2).toString(),
        },
        scooter: {
            activityName: 'Scooter',
            timeInteger: (distance / scooterRate) * 60,
            timeString:
                timeConversion((distance / scooterRate) * 60),
            costString:
                '$' + (distance * wattUsageRate * wattCostRate).toFixed(2).toString(),
        },
        bus: {
            activityName: 'Bus',
            timeInteger: (distance / busAvgSpeed) * 60,
            timeString:
                timeConversion((distance / busAvgSpeed) * 60),
            costString: '$' + TTCAdultFare.toFixed(2).toString(),
        },
        walk: {
            activityName: 'Walk',
            timeInteger: ((distance / walkingRate) * 60).toFixed(0),
            timeString:
                timeConversion((distance / walkingRate) * 60),
            costString: '$' + calorieCost.toFixed(2).toString(),
        },
    };

    return object;
}


function timeConversion(timeInMins) {
    if (timeInMins > 60) {
        return (timeInMins / 60).toFixed(0).toString() + ' hours';
    }
    else {
        return (timeInMins).toFixed(0).toString() + ' minutes';
    }
}

function getSummaryString(obj) {
    if (obj.walk.timeInteger <= 10) {
        return { summaryStr: 'It\'s recommended to walk!', summary: 'Walk' };
    } else if (obj.bike.timeInteger <= 15) {
        return { summaryStr: 'It\'s recommended to bike!', summary: 'Bike' };
    } else if (obj.scooter.timeInteger <= 20) {
        return { summaryStr: 'It\'s recommended to ride your electric scooter!', summary: 'Scooter' };
    } else if (obj.bus.timeInteger <= 30) {
        return { summaryStr: 'It\'s recommended to take the bus!', summary: 'Bus' };
    } else {
        return { summaryStr: 'It\'s recommended to drive your car!', summary: 'Car' };
    }
}

export { distanceCalculations, getSummaryString };