// Code your solution in this file!
const Hq = 42
function distanceFromHqInBlocks(pickup) {
    let distance;
    distance = Math.abs(pickup - Hq);
    return distance
  }
console.log(distanceFromHqInBlocks(50))



function distanceFromHqInFeet(pickup) {
  const dist = distanceFromHqInBlocks(pickup);
  let distanceInFeet = dist * 264;
    return distanceInFeet
}

function distanceTravelledInFeet(start, destination) {
    let distTravelledInFeet = (Math.abs((destination-start)*264))
    return distTravelledInFeet
  }

function calculatesFarePrice(start, destination) {
    const distTravelledInFeet = (Math.abs((destination-start)*264))
    let fare;
    if (distTravelledInFeet <= 400){
        fare = distTravelledInFeet * 0
        return fare;
    } else if (distTravelledInFeet > 400 && distTravelledInFeet < 2000) {
        fare = ((distTravelledInFeet - 400) * 0.02);
        return fare;
    }  else if (distTravelledInFeet > 2000 && distTravelledInFeet < 2500) {
        fare = 25
        return fare;
    }  else {
        return 'cannot travel that far'
    }
    }
    console.log(calculatesFarePrice(30, 38))