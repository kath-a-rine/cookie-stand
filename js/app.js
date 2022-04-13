'use strict'

function SalmonCookies(city, minCustomers, maxCustomers, avgCookiePerCustomer) {
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.randomCookiesPerHour = [];
  this.totalCookiesSold = 0;
}
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', 'Total'];

// generates cookies per hour
SalmonCookies.prototype.generateRandomCookiesPerHour = function (){
  let total = 0;
  for (let i = 0; i < hours.length; i++) {
    let randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
    let cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
    this.randomCookiesPerHour[i] = cookiesSold;
    total += cookiesSold;
  }
  this.totalCookiesSold = total;
};

const containerElem = document.getElementById('cookie-stand-locations');

const articleElem = document.createElement('article');
containerElem.appendChild(articleElem);

// sales table
const tableElem = document.createElement('table');
articleElem.appendChild(tableElem);

// table head
const tableHead = document.createElement('thead');
tableElem.appendChild(tableHead);

// header row
const headerRow = document.createElement('th');
tableHead.appendChild(headerRow);

//header hours columns
for (let i = 0; i < hours.length; i++){
  const hoursCol = document.createElement('th');
  tableHead.appendChild(hoursCol);
  hoursCol.textContent = hours[i];
}
SalmonCookies.prototype.render = function() {
  // table body
  const tableBody = document.createElement('tbody');
  tableElem.appendChild(tableBody);

  //city rows
  const cityRow = document.createElement('th');
  tableBody.appendChild(cityRow);
  cityRow.textContent = this.city;

  // // table data
  // for (let i = 0; i < this.randomCookiesPerHour.length; i++){
  //   const cookieData = document.createElement('td');
  //   cityRow.appendChild(cookieData);
  //   cookieData.textContent = this.randomCookiesPerHour[i];
  // }
};

// table footer
const footer = document.createElement('tfoot');
tableElem.appendChild(footer);

const footerTotals = document.createElement('tr');
footer.appendChild(footerTotals);
footerTotals.textContent = 'Total';

const seattle = new SalmonCookies('Seattle', 23, 65, 6.3);
seattle.generateRandomCookiesPerHour();
seattle.render();

const tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
tokyo.generateRandomCookiesPerHour();
tokyo.render();

const dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
dubai.generateRandomCookiesPerHour();
dubai.render();

const paris = new SalmonCookies('Paris', 20, 38, 2.3);
paris.generateRandomCookiesPerHour();
paris.render();

const lima = new SalmonCookies('Lima', 2, 16, 4.6);
lima.generateRandomCookiesPerHour();
lima.render();

//random within range function
function randomInRange(min, max) {
  const span = max - min + 1;
  const randInSpan = Math.floor(Math.random() * span);
  return min + randInSpan;
}
// const lima = {
//   title: "Lima",
//   minCustomers: 2,
//   maxCustomers: 16,
//   avgCookiesPerCustomer: 4.6,
//   randomCookiesPerHour: [],
//   totalCookiesSold: 0,
//   generateRandomCookiesPerHour: function (){
//   // gnerate values to populate randomCookiesPerHour
//   // array should have slots for 6am-7pm
//     let total = 0;
//     for (let i = 0; i < hours.length; i++) {
//       let randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
//       let cookiesSold = Math.ceil(this.avgCookiesPerCustomer * randomCustomersPerHour);
//       this.randomCookiesPerHour[i] = cookiesSold;
//       total += cookiesSold;
//     }
//     this.totalCookiesSold = total;
//   },
//   render: function (){

//     const containerElem = document.getElementById('cookie-stand-locations');

//     const articleElem = document.createElement('article');
//     containerElem.appendChild(articleElem);

//     const headingElem = document.createElement('h2');
//     articleElem.appendChild(headingElem);
//     headingElem.textContent = this.title;

//     const ulElem = document.createElement('ul');
//     articleElem.appendChild(ulElem);

//     // // li items
//     for (let i=0; i < this.randomCookiesPerHour.length; i++) {
//       const liElem = document.createElement('li');
//       ulElem.appendChild(liElem);
//       const timeSlot = hours[i];
//       const cookiesSoldThisHour = this.randomCookiesPerHour[i];
//       liElem.textContent = `${timeSlot}: ${cookiesSoldThisHour}`;
//     }

//     // total sales
//     const liElem = document.createElement('li');
//     ulElem.appendChild(liElem);
//     liElem.textContent = 'Total: ' + this.totalCookiesSold;

//   }
// };

// lima.generateRandomCookiesPerHour();
// lima.render();