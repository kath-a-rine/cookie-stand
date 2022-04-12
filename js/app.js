'use strict';

const seattle = {
  minSea: 23,
  maxSea: 65,
  cookieSea: 6.3,
};

const tokyo = {
  minTok: 3,
  maxTok: 24,
  cookieTok: 1.2
};

const dubai = {
  minDub: 11,
  maxDub: 38,
  cookieDub: 3.7
};

const paris = {
  minPar: 20,
  maxPar: 38,
  cookiePar: 2.3
};

const lima = {
  minLim: 2,
  maxLim: 16,
  cookieLim: 4.6
};

// random number of customers per hour
function customersHour(max, min){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// Ben S helped with cookiesHour function. cookiesHour uses the value generated by customerHour to generate a number of cookies sold in that hour. keeps running total of cookies sold.
function cookiesHour(max, min, avg){
  let cityArray = [];
  let totalCookies = 0;
  for(let i = 0; i < 14; i++){
    let hourlyCookie = Math.floor(customersHour(max, min) * avg);
    cityArray[i] = hourlyCookie;
    totalCookies = totalCookies + hourlyCookie;
  }
  return [cityArray, totalCookies];
}
let seaCookies = cookiesHour(seattle.maxSea, seattle.minSea, seattle.cookieSea);
let limCookies = cookiesHour(lima.maxLim, lima.minLim, lima.cookieLim);
let tokCookies = cookiesHour(tokyo.maxTok, tokyo.minTok, tokyo.cookieTok);
let dubCookies = cookiesHour(dubai.maxDub, dubai.minDub, dubai.cookieDub);
let parCookies = cookiesHour(paris.maxPar, paris.minPar, paris.cookiePar);

// open hours array
const openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];
//seattle list, cityOne is parent element
const cityOne = document.getElementById('seattle');

const seaHeading = document.createElement('h3');
seaHeading.textContent = 'Seattle';
cityOne.appendChild(seaHeading);

const ulOne = document.createElement('ul');
cityOne.appendChild(ulOne);

// const li = document.createElement('li');
// cityOne.appendChild(li);

for (let i=0; i < seaCookies.length; i++) {
  const li = document.createElement('li');
  li.textContent = openHours[i] + ': ' + seaCookies[i] + ' cookies';
  ulOne.appendChild(li);
}

//tokyo list
const cityTwo = document.getElementById('tokyo');

const tokHeading = document.createElement('h3');
tokHeading.textContent = 'Tokyo';
cityTwo.appendChild(tokHeading);

const ulTwo = document.createElement('ul');
cityTwo.appendChild(ulTwo);





