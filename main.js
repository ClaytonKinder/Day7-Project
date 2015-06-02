console.log("Your code goes in this document.");

///////////////////////////////////////////////////////
// ANSWER 1
///////////////////////////////////////////////////////

var allObj = items.map(function(obj) {
  return obj;
});

var allPrice = items.map(function(obj) {
  return obj.price;
});

var totalPrice = allPrice.reduce(function(acc, curr){
  return totalPrice = acc + curr;
});

var avgPrice = totalPrice / allPrice.length;

document.querySelector("#answer1").innerHTML = avgPrice;

///////////////////////////////////////////////////////
// ANSWER 2
///////////////////////////////////////////////////////

var filterArray = [];
document.querySelector("#answer2").innerHTML = "";

allObj.forEach(function(el,idx,arr){
  if (el.price > 14 && el.price < 18) {
    filterArray.push(el.title + "<br>");
  }
  return filterArray;
});

for (var i=0; i<filterArray.length; i++) {
document.querySelector("#answer2").innerHTML += filterArray[i];
}

///////////////////////////////////////////////////////
// ANSWER 3
///////////////////////////////////////////////////////

var curObj = {};

allObj.forEach(function(el,idx,arr){
  if (el.currency_code === "GBP") {
    curObj.title = el.title;
    curObj.price = el.price;
  }
  return curObj;
});

document.querySelector("#answer3").innerHTML = curObj.title;
document.querySelector("#answer3").innerHTML += "<br>" + "Price: " + curObj.price;

///////////////////////////////////////////////////////
// ANSWER 4
///////////////////////////////////////////////////////

var woodItems = [];
document.querySelector("#answer4").innerHTML = "";

allObj.forEach(function(el,idx,arr){

  if (el.materials.indexOf('wood') > -1) {
    woodItems.push(el.title + "<br>");
  }
  return woodItems;
});

for (var i=0; i<woodItems.length; i++) {
  document.querySelector("#answer4").innerHTML += woodItems[i];
}

///////////////////////////////////////////////////////
// ANSWER 5
///////////////////////////////////////////////////////

var eightMats = [];
document.querySelector("#answer5").innerHTML = "";

allObj.forEach(function(el,idx,arr){
  if (el.materials.length > 8) {
    eightMats.push(el.title, "<br>", "Quantity: ", el.quantity, "<br>", el.materials, "<br>", "<br>");
  }
  return eightMats;
});

for (var i=0; i<eightMats.length; i++) {
  document.querySelector("#answer5").innerHTML += eightMats[i];
}

///////////////////////////////////////////////////////
// ANSWER 6
///////////////////////////////////////////////////////

var whoMade = [];

allObj.forEach(function(el,idx,arr){
  if (el.who_made === "i_did") {
    whoMade.push(el.user_id);
  }
  return whoMade;
});

document.querySelector("#answer6").innerHTML = whoMade.length;
