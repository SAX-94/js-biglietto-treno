// VARIABILI
const pricePerkm = 0.21;
const kidsDiscount = 0.8;
const elderDiscount = 0.6;
const noDiscount = 1;
let discount;

let age = parseInt(prompt("Quanti anni hai?"));
let km = parseInt(prompt("Quanti km devi percorrere?"));
let price = parseFloat(pricePerkm * km);


if (age < 18) {
    discount = kidsDiscount;
} else if (age > 65) {
    discount = elderDiscount;
} else {
    discount = noDiscount;
}

let finalPrice = parseFloat(price * discount).toFixed(2);

// VALORI DA TRASFERIRE SU HTML
document.getElementById("age").innerHTML = age;
document.getElementById("km").innerHTML = km;
document.getElementById("price").innerHTML = price;
document.getElementById("finalprice").innerHTML = finalPrice;