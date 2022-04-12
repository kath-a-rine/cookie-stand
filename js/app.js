'use strict';

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];

const seattle = {
  title: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function (){
  // gnerate values to populate randomCookiesPerHour
  // array should have slots for 6am-7pm
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      let cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function (){

    const containerElem = document.getElementById('cookie-stand-locations');

    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // // li items
    for (let i=0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

function randomInRange(min, max) {
  const span = max - min + 1;
  const randInSpan = Math.floor(Math.random() * span);
  return min + randInSpan;
}

seattle.generateRandomCookiesPerHour();
seattle.render();

const tokyo = {
  title: "Tokyo",
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function (){
  // gnerate values to populate randomCookiesPerHour
  // array should have slots for 6am-7pm
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      let cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function (){

    const containerElem = document.getElementById('cookie-stand-locations');

    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // // li items
    for (let i=0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

tokyo.generateRandomCookiesPerHour();
tokyo.render();

const dubai = {
  title: "Dubai",
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function (){
  // gnerate values to populate randomCookiesPerHour
  // array should have slots for 6am-7pm
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      let cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function (){

    const containerElem = document.getElementById('cookie-stand-locations');

    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // // li items
    for (let i=0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

dubai.generateRandomCookiesPerHour();
dubai.render();

const paris = {
  title: "Paris",
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function (){
  // gnerate values to populate randomCookiesPerHour
  // array should have slots for 6am-7pm
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      let cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function (){

    const containerElem = document.getElementById('cookie-stand-locations');

    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // // li items
    for (let i=0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

paris.generateRandomCookiesPerHour();
paris.render();

const lima = {
  title: "Lima",
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  randomCookiesPerHour: [],
  totalCookiesSold: 0,
  generateRandomCookiesPerHour: function (){
  // gnerate values to populate randomCookiesPerHour
  // array should have slots for 6am-7pm
    let total = 0;
    for (let i = 0; i < hours.length; i++) {
      let randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
      let cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
      this.randomCookiesPerHour[i] = cookiesSold;
      total += cookiesSold;
    }
    this.totalCookiesSold = total;
  },
  render: function (){

    const containerElem = document.getElementById('cookie-stand-locations');

    const articleElem = document.createElement('article');
    containerElem.appendChild(articleElem);

    const headingElem = document.createElement('h2');
    articleElem.appendChild(headingElem);
    headingElem.textContent = this.title;

    const ulElem = document.createElement('ul');
    articleElem.appendChild(ulElem);

    // // li items
    for (let i=0; i < this.randomCookiesPerHour.length; i++) {
      const liElem = document.createElement('li');
      ulElem.appendChild(liElem);
      const timeSlot = hours[i];
      const cookiesSoldThisHour = this.randomCookiesPerHour[i];
      liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
    }

    // total sales
    const liElem = document.createElement('li');
    ulElem.appendChild(liElem);
    liElem.textContent = 'Total: ' + this.totalCookiesSold;

  }
};

lima.generateRandomCookiesPerHour();
lima.render();


// // random number of customers per hour
// function customersHour(max, min){
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// // Ben S helped with cookiesHour function. cookiesHour uses the value generated by customerHour to generate a number of cookies sold in that hour. keeps running total of cookies sold.
// function cookiesHour(max, min, avg){
//   let cityArray = [];
//   let totalCookies = 0;
//   for(let i = 0; i < 14; i++){
//     let hourlyCookie = Math.floor(customersHour(max, min) * avg);
//     cityArray[i] = hourlyCookie;
//     totalCookies = totalCookies + hourlyCookie;
//   }
//   return [cityArray, totalCookies];
// }
// let seaCookies = cookiesHour(seattle.maxSea, seattle.minSea, seattle.cookieSea);
// let limCookies = cookiesHour(lima.maxLim, lima.minLim, lima.cookieLim);
// let tokCookies = cookiesHour(tokyo.maxTok, tokyo.minTok, tokyo.cookieTok);
// let dubCookies = cookiesHour(dubai.maxDub, dubai.minDub, dubai.cookieDub);
// let parCookies = cookiesHour(paris.maxPar, paris.minPar, paris.cookiePar);

// // open hours array
// const openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'total'];
// //seattle list, cityOne is parent element
// const cityOne = document.getElementById('seattle');

// const seaHeading = document.createElement('h3');
// seaHeading.textContent = 'Seattle';
// cityOne.appendChild(seaHeading);

// const ulOne = document.createElement('ul');
// cityOne.appendChild(ulOne);

// // const li = document.createElement('li');
// // cityOne.appendChild(li);

// for (let i=0; i < seaCookies.length; i++) {
//   const li = document.createElement('li');
//   li.textContent = openHours[i] + ': ' + seaCookies[i] + ' cookies';
//   ulOne.appendChild(li);
// }

// //tokyo list
// const cityTwo = document.getElementById('tokyo');

// const tokHeading = document.createElement('h3');
// tokHeading.textContent = 'Tokyo';
// cityTwo.appendChild(tokHeading);

// const ulTwo = document.createElement('ul');
// cityTwo.appendChild(ulTwo);

