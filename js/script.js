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

// ALERT IF THE USER ENTERS INVALID VALUS FOR age OR km

if (isNaN(age) || age < 0) {
    alert("Devi inserire un valore di età valido")
}

if (isNaN(km) || km < 0) {
    alert("Devi inserire una distanza valida")
}



let finalPrice = parseFloat(price * discount).toFixed(2);

// VALUES THAT MUST BE TRANSFERRED TO HTML

document.getElementById("age").innerHTML = age;
document.getElementById("km").innerHTML = km;
document.getElementById("price").innerHTML = price;
document.getElementById("finalprice").innerHTML = finalPrice;