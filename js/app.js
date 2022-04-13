'use strict';

function SalmonCookies(city, minCustomers, maxCustomers, avgCookiePerCustomer) {
  this.city = city;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiePerCustomer = avgCookiePerCustomer;
  this.randomCookiesPerHour = [];
  this.totalCookiesSoldPerCity = 0;
}
const hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

// generates cookies per hour
SalmonCookies.prototype.generateRandomCookiesPerHour = function () {
  let total = 0;
  for (let i = 0; i < hours.length; i++) {
    let randomCustomersPerHour = randomInRange(this.minCustomers, this.maxCustomers);
    let cookiesSold = Math.ceil(this.avgCookiePerCustomer * randomCustomersPerHour);
    this.randomCookiesPerHour[i] = cookiesSold;
    total += cookiesSold;
  }
  this.totalCookiesSoldPerCity = total;
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
for (let i = 0; i < hours.length; i++) {
  const hoursCol = document.createElement('th');
  tableHead.appendChild(hoursCol);
  hoursCol.textContent = hours[i];
}

const cityTotalHeading = document.createElement('th');
tableHead.appendChild(cityTotalHeading);
cityTotalHeading.textContent = 'Daily Location Total';

SalmonCookies.prototype.render = function () {
  // table body
  const tableBody = document.createElement('tbody');
  tableElem.appendChild(tableBody);

  //city rows
  const cityRow = document.createElement('th');
  tableBody.appendChild(cityRow);
  cityRow.textContent = this.city;

  // table data
  for (let i = 0; i < this.randomCookiesPerHour.length; i++) {
    const dailyCookieSales = document.createElement('td');
    tableBody.appendChild(dailyCookieSales);
    dailyCookieSales.textContent = this.randomCookiesPerHour[i];
  }

  // totals for each city
  const cityTotal = document.createElement('td');
  tableBody.appendChild(cityTotal);
  cityTotal.textContent = this.totalCookiesSoldPerCity;
};
function getSalesPerShopPerHour(hourlyIndex) {
  //sum all shop sales for hourlyIndex
  let sum = 0;
  sum += seattle.randomCookiesPerHour[hourlyIndex];
  sum += tokyo.randomCookiesPerHour[hourlyIndex];
  sum += dubai.randomCookiesPerHour[hourlyIndex];
  sum += paris.randomCookiesPerHour[hourlyIndex];
  sum += lima.randomCookiesPerHour[hourlyIndex];
  return sum;
}

function createFooterRow() {
  // table footer
  const footer = document.createElement('tfoot');
  tableElem.appendChild(footer);

  const footerRow = document.createElement('tr');
  footer.appendChild(footerRow);
  const totalsElem = document.createElement('th');
  footerRow.appendChild(totalsElem);
  totalsElem.textContent = 'Totals';
  let grandTotal = 0;
  // make cells for each hour sales for all shops
  for (let i = 0; i < hours.length; i++) {
    const salesPerShopPerHour = getSalesPerShopPerHour(i);
    grandTotal += salesPerShopPerHour;
    const salesElem = document.createElement('td');
    footerRow.appendChild(salesElem);
    salesElem.textContent = salesPerShopPerHour;
  }

  const grandTotalElem = document.createElement('td');
  footerRow.appendChild(grandTotalElem);
  grandTotalElem.textContent = grandTotal;

}

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

createFooterRow();
//random within range function
function randomInRange(min, max) {
  const span = max - min + 1;
  const randInSpan = Math.floor(Math.random() * span);
  return min + randInSpan;
}
