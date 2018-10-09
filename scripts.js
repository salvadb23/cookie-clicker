// COOKIE CLICKER
//defaults
let cookieCount = 0;

//DOM decleration
let cookieCounter = document.getElementById('cookie-counter');
let cookieClicker = document.getElementById('cookie-clicker');


//everytime a user clicks the button, their cookies are increased by the value of their clickPower.
cookieClicker.addEventListener("click", function() {
  cookieCount = cookieCount + clickPower;
  refreshCookieCount()
})

//refresh cookies
let refreshCookieCount = function() {
  cookieCounter.innerHTML = cookieCount;
}

// CLICK POWER 
let clickPower = 1;
let clickPowerPriceAmount = 50;
let clickPowerLevelNumber = 1;

let buyClickPower = document.getElementById('buy-click-power');
let clickPowerPrice = document.getElementById('click-power-price');
let clickPowerLevel = document.getElementById('click-power-level');
let clickPowerMultiple = document.getElementById('click-power-multiple');

buyClickPower.addEventListener("click", function() {
  if (cookieCount >= clickPowerPriceAmount) {
    //subtract cookies from the price of the item
    cookieCount -= clickPowerPriceAmount;
    refreshCookieCount()

    //Upgrade power level
    clickPowerLevelNumber += 1;

    clickPowerPriceAmount = Math.floor(clickPowerPriceAmount * 1.33);

    clickPower += 1 * Math.floor(clickPowerLevelNumber * 1.05);;

    //refresh shop item
    refreshPowerClick();
    } 
  })

let refreshPowerClick = function() {
  clickPowerLevel.innerHTML = clickPowerLevelNumber;
  clickPowerPrice.innerHTML = clickPowerPriceAmount;
  clickPowerMultiple.innerHTML = clickPower;
}

// GRANDMAS

let grandmaPower = 50;
let grandmaPriceAmount = 500;
let grandmaLevelNumber = 0;
let grandmaAuto = false;

let buyGrandma = document.getElementById('buy-grandma');
let grandmaPrice = document.getElementById('grandma-price');
let grandmaLevel = document.getElementById('grandma-level');
let grandmaMultiple = document.getElementById('grandma-multiple');

buyGrandma.addEventListener("click", function() {
  if (cookieCount >= grandmaPriceAmount) {
  //make sure we have enough cookies and subtract our cookies from the price
    cookieCount +=  - grandmaPriceAmount;
    refreshCookieCount()
  //upgrade power level
  grandmaLevelNumber += 1;
  //update price
  grandmaPriceAmount = Math.floor(grandmaPriceAmount * 1.33);
  //update grandma power
  grandmaPower += 10 + Math.floor(grandmaLevelNumber * 1.33);
  //turn autoGrandma on!
  autoGrandma = true
  autoGrandmaStart();
  //refresh shop item
  refreshGrandma();
}
})

let autoGrandmaStart = function() {
  let grandmaInt = window.setInterval(function(){
    cookieCount += grandmaPower;
    refreshCookieCount();
  }, 1000);
}

let refreshGrandma = function() {
  grandmaLevel.innerHTML = grandmaLevelNumber
  grandmaPrice.innerHTML = grandmaPriceAmount;
  grandmaMultiple.innerHTML = grandmaPower;
  grandmaMultiple.innerHTML = grandmaPower - 10;
}

// FACTORY

let facilityAuto = false;
let facilityPower = 2000;
let facilityPriceAmount = 5000;
let facilityLevelNumber = 0;

let buyFacility = document.getElementById('buy-facility');
let facilityPrice = document.getElementById('facility-price');
let facilityLevel = document.getElementById('facility-level');
let facilityMultiple = document.getElementById('facility-multiple');

buyFacility.addEventListener("click", function() {
    //set autoLoop to false
    facilityAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= facilityPriceAmount) {
      cookieCount -= facilityPriceAmount;
      refreshCookieCount()
    //upgrade power level
    facilityLevelNumber += 1;
    //update price
    facilityPriceAmount = Math.floor(facilityPriceAmount * 1.33);
    //update facility power
    facilityPower += 600 + Math.floor(facilityLevelNumber * 1.33);
    //turn autoFacility on!
    facilityAuto = true
    autoFacilityStart();
    //refresh shop item
    refreshFacility();
  }
})

let refreshFacility = function() {
  facilityLevel.innerHTML = facilityLevelNumber
  facilityPrice.innerHTML = facilityPriceAmount;
  facilityMultiple.innerHTML = facilityPower - 600;
}

let autoFacilityStart = function() {
    let facilityInt = window.setInterval(function(){
      cookieCount += facilityPower;
      refreshCookieCount();
    }, 1000);
}

let monsterPower = 10000;
let monsterPriceAmount = 5;
let monsterLevelNumber = 0;
let monsterAuto = false;

let buyMonster = document.getElementById('buy-monster');
let monsterPrice = document.getElementById('monster-price');
let monsterLevel = document.getElementById('monster-level');
let monsterMultiple = document.getElementById('monster-multiple');

buyMonster.addEventListener("click", function() {
    //set autoLoop to false
    monsterAuto = false;

    //make sure we have enough cookies
    if (cookieCount >= monsterPriceAmount) {
      cookieCount -= monsterPriceAmount;
      refreshCookieCount()
    //upgrade power level
    monsterLevelNumber += 1;
    //update price
    monsterPriceAmount = Math.floor(facilityPriceAmount * 1.33);
    //update facility power
    monsterPower += 1000 + Math.floor(facilityLevelNumber * 1.33);
    //turn autoFacility on!
    monsterAuto = true
    autoMonsterStart();
    //refresh shop item
    refreshMonster();
  }
})

let refreshMonster = function() {
  monsterLevel.innerHTML = monsterLevelNumber
  monsterPrice.innerHTML = monsterPriceAmount;
  monsterMultiple.innerHTML = monsterPower - 1000;
}

let autoMonsterStart = function() {
    let monsterInt = window.setInterval(function(){
      cookieCount += monsterPower;
      refreshCookieCount();
    }, 1000);
}
