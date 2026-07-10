// Case 3: if super class and sub class contains same function name and signature (Method Overriding)
// Note: The Sub class Hides super class function by default.
// Example:
class CapitalCity{
    showCityName(cname){
        console.log("Capital City Name in super class :"+cname);
    }
}
 
class MetropolitianCity extends CapitalCity{
    constructor(cityname){
        super()
        super.showCityName(cityname)
    }
    showCityName(cname){
        console.log("Metropolitain City Name in sub class :"+cname);
    }
}
 
let obj=new MetropolitianCity("Bangalore")
obj.showCityName("Mumbai")