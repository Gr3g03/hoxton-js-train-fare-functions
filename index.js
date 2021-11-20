function trainFare(){
    let age = prompt (`Please enter your age`)
    let travelingDistance = prompt(`Please enter how many KM are you traveling`)
    const pricePerKm = 0.21
    let priceOfTraveledKm = travelingDistance * pricePerKm
    const juniorDiscount = 0.20 * priceOfTraveledKm
    const elderDiscount = 0.40 * priceOfTraveledKm

    if( isNaN(age)  ||  isNaN(travelingDistance)) {
        console.log(`Please enter the right data type`);
    }else if (age >= 18 && age < 65){
        alert(` you have to pay ${priceOfTraveledKm}£` )
    } else if (age < 18){ 
        alert(`you are getting 20% of and you  have to pay ${priceOfTraveledKm - juniorDiscount}£ ` )
    } else if (age >= 65){
        alert(`you are getting 40% of and you  you  have to pay ${priceOfTraveledKm - elderDiscount}£` )

    }
    return priceOfTraveledKm
}

trainFare()
