// VARIABLES

const pricePerkm = 0.21;
const minorsDiscount = 0.8;
const elderDiscount = 0.6;
const noDiscount = 1;
let discount;

let age = parseInt(prompt("Quanti anni hai?"));
let km = parseInt(prompt("Quanti km devi percorrere?"));
let price = parseFloat(pricePerkm * km);

// CONDITIONS FOR APPLYING THE DISCOUNT

if (age < 18) {
    discount = minorsDiscount;
} else if (age > 65) {
    discount = elderDiscount;
} else {
    discount = noDiscount;
}

let finalPrice = parseFloat(price * discount).toFixed(2);

// ALERT IF THE USER ENTERS INVALID VALUES FOR age OR km

if (isNaN(age) || age < 0) {
    alert("Devi inserire un valore di età valido")
}

if (isNaN(km) || km < 0) {
    alert("Devi inserire una distanza valida")
}

// ALERT IF THE USER ENTERS A VALUE FOR km THAT IL LESS THAN 5

if (km < 5) {
    alert("Non puoi percorrere meno di 5 km")
}

// ALERT IF THE USER ENTERS A VALUE FOR km THAT IS BIGGER THAN 900

if (km > 900) {
    alert("Puoi percorrere al massimo 900 km")
}

// VALUES THAT MUST BE TRANSFERRED TO HTML

document.getElementById("age").innerHTML = age;
document.getElementById("km").innerHTML = km;
document.getElementById("price").innerHTML = price;
document.getElementById("finalprice").innerHTML = finalPrice;