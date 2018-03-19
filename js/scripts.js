

var gallons=parseFloat(prompt("Enter the number of gallons you want to convert to liters"));

var gallonsToLiters=function(gallons){
  return 3.785*gallons;
}



alert(gallonsToLiters(gallons));
