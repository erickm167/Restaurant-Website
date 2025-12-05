// BURGER AND SIDE ITEM AMOUNTS //
let burger1Amount = 0;
let burger2Amount = 0;
let burger3Amount = 0;
let burger4Amount = 0;

let side1Amount = 0;
let side2Amount = 0;
let side3Amount = 0;
let side4Amount = 0;

// BURGER AND SIDE ITEM PRICES //
const burger1Price = 5.99;
const burger2Price = 6.49;
const burger3Price = 4.99;
const burger4Price = 5.49;

const side1Price = 2.99;
const side2Price = 3.49;
const side3Price = 1.99;
const side4Price = 2.99;

// FUNCTION TO CALCULATE TOTAL PRICE //
function calculateTotalPrice() {
    let totalPrice = (burger1Amount * burger1Price) + (burger2Amount * burger2Price) + (burger3Amount * burger3Price) + (burger4Amount * burger4Price) + (side1Amount * side1Price) + (side2Amount * side2Price) + (side3Amount * side3Price) + (side4Amount * side4Price);
    return totalPrice.toFixed(2);
}

function updateTotalPrice() {
    totalPriceDisplay.innerHTML = "Total: $" + calculateTotalPrice();
}

// BURGER AND SIDE ITEM HTML ELEMENTS //
let burger1Plus = document.getElementById("burger1Plus");
let burger1Minus = document.getElementById("burger1Minus");
let burger1Count = document.getElementById("burger1Count");

let burger2Plus = document.getElementById("burger2Plus");
let burger2Minus = document.getElementById("burger2Minus");
let burger2Count = document.getElementById("burger2Count");

let burger3Plus = document.getElementById("burger3Plus");
let burger3Minus = document.getElementById("burger3Minus");
let burger3Count = document.getElementById("burger3Count");

let burger4Plus = document.getElementById("burger4Plus");
let burger4Minus = document.getElementById("burger4Minus");
let burger4Count = document.getElementById("burger4Count");

let side1Plus = document.getElementById("side1Plus");
let side1Minus = document.getElementById("side1Minus");
let side1Count = document.getElementById("side1Count");

let side2Plus = document.getElementById("side2Plus");
let side2Minus = document.getElementById("side2Minus");
let side2Count = document.getElementById("side2Count");

let side3Plus = document.getElementById("side3Plus");
let side3Minus = document.getElementById("side3Minus");
let side3Count = document.getElementById("side3Count");

let side4Plus = document.getElementById("side4Plus");
let side4Minus = document.getElementById("side4Minus");
let side4Count = document.getElementById("side4Count");

let totalPriceDisplay = document.getElementById("totalPriceDisplay");

let emptyCartButton = document.getElementById("emptyCartButton");
let placeOrderButton = document.getElementById("placeOrderButton");

// GET SAVED QUANTITIES IF ANY FROM LOCAL STORAGE AND SET THEM //
if (localStorage.getItem("burger1Quantity") || localStorage.getItem("burger2Quantity") || localStorage.getItem("burger3Quantity") || localStorage.getItem("burger4Quantity") || localStorage.getItem("side1Quantity") || localStorage.getItem("side2Quantity") || localStorage.getItem("side3Quantity") || localStorage.getItem("side4Quantity") || localStorage.getItem("totalPrice")) {
    if (localStorage.getItem("burger1Quantity")) {
        burger1Amount = parseInt(localStorage.getItem("burger1Quantity"));
        burger1Count.innerHTML = burger1Amount;
        updateTotalPrice(); 
    }
    if (localStorage.getItem("burger2Quantity")) {
        burger2Amount = parseInt(localStorage.getItem("burger2Quantity"));
        burger2Count.innerHTML = burger2Amount;
    }
    if (localStorage.getItem("burger3Quantity")) {
        burger3Amount = parseInt(localStorage.getItem("burger3Quantity"));
        burger3Count.innerHTML = burger3Amount;
    }
    if (localStorage.getItem("burger4Quantity")) {
        burger4Amount = parseInt(localStorage.getItem("burger4Quantity"));
        burger4Count.innerHTML = burger4Amount;
    }
    if (localStorage.getItem("side1Quantity")) {
        side1Amount = parseInt(localStorage.getItem("side1Quantity"));
        side1Count.innerHTML = side1Amount;
    }
    if (localStorage.getItem("side2Quantity")) {
        side2Amount = parseInt(localStorage.getItem("side2Quantity"));
        side2Count.innerHTML = side2Amount;
    }
    if (localStorage.getItem("side3Quantity")) {
        side3Amount = parseInt(localStorage.getItem("side3Quantity"));
        side3Count.innerHTML = side3Amount;
    }
    if (localStorage.getItem("side4Quantity")) {
        side4Amount = parseInt(localStorage.getItem("side4Quantity"));
        side4Count.innerHTML = side4Amount;
    }
    if (localStorage.getItem("totalPrice")) {
        totalPriceDisplay.innerHTML = "Total: $" + localStorage.getItem("totalPrice");
    }
}

// EVENT LISTENERS FOR BURGER ITEMS //
burger1Plus.addEventListener("click", function () {
    if (burger1Amount < 999) {
        burger1Amount++;
        burger1Count.innerHTML = burger1Amount;
        localStorage.setItem("burger1Quantity", burger1Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger1Count.addEventListener("input", function () {
    let value = parseInt(burger1Count.innerHTML);
    if (!isNaN(value) && value >= 0) {
        burger1Amount = value;
        localStorage.setItem("burger1Quantity", burger1Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger1Count.addEventListener("keydown", function (event) {
    if (burger1Count.innerHTML.length == 3 && event.key !== "Backspace") {
        event.preventDefault();
    }
});

burger1Count.addEventListener("focusout", function () {
    if (parseInt(burger1Count.innerHTML) < 0 || !isNaN(parseInt(burger1Count.innerHTML))) {
        burger1Count.innerHTML = burger1Amount;
        localStorage.setItem("burger1Quantity", burger1Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
    }
});

burger1Minus.addEventListener("click", function () {
    if (burger1Amount > 0) {
        burger1Amount--;
        burger1Count.innerHTML = burger1Amount;
        localStorage.setItem("burger1Quantity", burger1Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger2Plus.addEventListener("click", function () {
    if (burger2Amount < 999) {
        burger2Amount++;
        burger2Count.innerHTML = burger2Amount;
        localStorage.setItem("burger2Quantity", burger2Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger2Count.addEventListener("input", function () {
    let value = parseInt(burger2Count.innerHTML);
    if (!isNaN(value) && value >= 0) {
        burger2Amount = value;
        localStorage.setItem("burger2Quantity", burger2Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger2Count.addEventListener("keydown", function (event) {
    if (burger2Count.innerHTML.length == 3 && event.key !== "Backspace") {
        event.preventDefault();
    }
});

burger2Count.addEventListener("focusout", function () {
    if (parseInt(burger2Count.innerHTML) < 0 || !isNaN(parseInt(burger2Count.innerHTML))) {
        burger2Count.innerHTML = burger2Amount;
        localStorage.setItem("burger2Quantity", burger2Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
    }
});

burger2Minus.addEventListener("click", function () {
    if (burger2Amount > 0) {
        burger2Amount--;
        burger2Count.innerHTML = burger2Amount;
        localStorage.setItem("burger2Quantity", burger2Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger3Plus.addEventListener("click", function () {
    if (burger3Amount < 999) {
        burger3Amount++;
        burger3Count.innerHTML = burger3Amount;
        localStorage.setItem("burger3Quantity", burger3Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger3Count.addEventListener("input", function () {
    let value = parseInt(burger3Count.innerHTML);
    if (!isNaN(value) && value >= 0) {
        burger3Amount = value;
        localStorage.setItem("burger3Quantity", burger3Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger3Count.addEventListener("keydown", function (event) {
    if (burger3Count.innerHTML.length == 3 && event.key !== "Backspace") {
        event.preventDefault();
    }
});

burger3Count.addEventListener("focusout", function () {
    if (parseInt(burger3Count.innerHTML) < 0 || !isNaN(parseInt(burger3Count.innerHTML))) {
        burger3Count.innerHTML = burger3Amount;
        localStorage.setItem("burger3Quantity", burger3Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
    }
});

burger3Minus.addEventListener("click", function () {
    if (burger3Amount > 0) {
        burger3Amount--;
        burger3Count.innerHTML = burger3Amount;
        localStorage.setItem("burger3Quantity", burger3Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger4Plus.addEventListener("click", function () {
    if (burger4Amount < 999) {
        burger4Amount++;
        burger4Count.innerHTML = burger4Amount;
        localStorage.setItem("burger4Quantity", burger4Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger4Count.addEventListener("input", function () {
    let value = parseInt(burger4Count.innerHTML);
    if (!isNaN(value) && value >= 0) {
        burger4Amount = value;
        localStorage.setItem("burger4Quantity", burger4Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

burger4Count.addEventListener("keydown", function (event) {
    if (burger4Count.innerHTML.length == 3 && event.key !== "Backspace") {
        event.preventDefault();
    }
});

burger4Count.addEventListener("focusout", function () {
    if (parseInt(burger4Count.innerHTML) < 0 || !isNaN(parseInt(burger4Count.innerHTML))) {
        burger4Count.innerHTML = burger4Amount;
        localStorage.setItem("burger4Quantity", burger4Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
    }
});

burger4Minus.addEventListener("click", function () {
    if (burger4Amount > 0) {
        burger4Amount--;
        burger4Count.innerHTML = burger4Amount;
        localStorage.setItem("burger4Quantity", burger4Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

// EVENT LISTENERS FOR SIDE ITEMS //
side1Plus.addEventListener("click", function () {
    if (side1Amount < 999) {
        side1Amount++;
        side1Count.innerHTML = side1Amount;
        localStorage.setItem("side1Quantity", side1Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side1Count.addEventListener("input", function () {
    let value = parseInt(side1Count.innerHTML);
    if (!isNaN(value) && value >= 0) {
        side1Amount = value;
        localStorage.setItem("side1Quantity", side1Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side1Count.addEventListener("keydown", function (event) {
    if (side1Count.innerHTML.length == 3 && event.key !== "Backspace") {
        event.preventDefault();
    }
});

side1Count.addEventListener("focusout", function () {
    if (parseInt(side1Count.innerHTML) < 0 || isNaN(parseInt(side1Count.innerHTML))) {
        side1Count.innerHTML = side1Amount;
        localStorage.setItem("side1Quantity", side1Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
    }
});

side1Minus.addEventListener("click", function () {
    if (side1Amount > 0) {
        side1Amount--;
        side1Count.innerHTML = side1Amount;
        localStorage.setItem("side1Quantity", side1Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side2Plus.addEventListener("click", function () {
    if (side2Amount < 999) {
        side2Amount++;
        side2Count.innerHTML = side2Amount;
        localStorage.setItem("side2Quantity", side2Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side2Count.addEventListener("input", function () {
    let value = parseInt(side2Count.innerHTML);
    if (!isNaN(value) && value >= 0) {
        side2Amount = value;
        localStorage.setItem("side2Quantity", side2Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side2Count.addEventListener("keydown", function (event) {
    if (side2Count.innerHTML.length == 3 && event.key !== "Backspace") {
        event.preventDefault();
    }
});

side2Count.addEventListener("focusout", function () {
    if (parseInt(side2Count.innerHTML) < 0 || isNaN(parseInt(side2Count.innerHTML))) {
        side2Count.innerHTML = side2Amount;
        localStorage.setItem("side2Quantity", side2Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
    }
});

side2Minus.addEventListener("click", function () {
    if (side2Amount > 0) {
        side2Amount--;
        side2Count.innerHTML = side2Amount;
        localStorage.setItem("side2Quantity", side2Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side3Plus.addEventListener("click", function () {
    if (side3Amount < 999) {
        side3Amount++;
        side3Count.innerHTML = side3Amount;
        localStorage.setItem("side3Quantity", side3Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side3Count.addEventListener("input", function () {
    let value = parseInt(side3Count.innerHTML);
    if (!isNaN(value) && value >= 0) {
        side3Amount = value;
        localStorage.setItem("side3Quantity", side3Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side3Count.addEventListener("keydown", function (event) {
    if (side3Count.innerHTML.length == 3 && event.key !== "Backspace") {
        event.preventDefault();
    }
});

side3Count.addEventListener("focusout", function () {
    if (parseInt(side3Count.innerHTML) < 0 || isNaN(parseInt(side3Count.innerHTML))) {
        side3Count.innerHTML = side3Amount;
        localStorage.setItem("side3Quantity", side3Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
    }
});

side3Minus.addEventListener("click", function () {
    if (side3Amount > 0) {
        side3Amount--;
        side3Count.innerHTML = side3Amount;
        localStorage.setItem("side3Quantity", side3Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side4Plus.addEventListener("click", function () {
    if (side4Amount < 999) {
        side4Amount++;
        side4Count.innerHTML = side4Amount;
        localStorage.setItem("side4Quantity", side4Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side4Count.addEventListener("input", function () {
    let value = parseInt(side4Count.innerHTML);
    if (!isNaN(value) && value >= 0) {
        side4Amount = value;
        localStorage.setItem("side4Quantity", side4Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

side4Count.addEventListener("keydown", function (event) {
    if (side4Count.innerHTML.length == 3 && event.key !== "Backspace") {
        event.preventDefault();
    }
});

side4Count.addEventListener("focusout", function () {
    if (parseInt(side4Count.innerHTML) < 0 || isNaN(parseInt(side4Count.innerHTML))) {
        side4Count.innerHTML = side4Amount;
        localStorage.setItem("side4Quantity", side4Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
    }
});

side4Minus.addEventListener("click", function () {
    if (side4Amount > 0) {
        side4Amount--;
        side4Count.innerHTML = side4Amount;
        localStorage.setItem("side4Quantity", side4Amount);
        localStorage.setItem("totalPrice", calculateTotalPrice());
        updateTotalPrice();
    }
});

// EVENT LISTENER FOR EMPTY CART BUTTON //
emptyCartButton.addEventListener("click", function () {
    burger1Amount = 0;
    burger2Amount = 0;
    burger3Amount = 0;
    burger4Amount = 0;
    side1Amount = 0;
    side2Amount = 0;
    side3Amount = 0;
    side4Amount = 0;

    burger1Count.innerHTML = burger1Amount;
    burger2Count.innerHTML = burger2Amount;
    burger3Count.innerHTML = burger3Amount;
    burger4Count.innerHTML = burger4Amount;
    side1Count.innerHTML = side1Amount;
    side2Count.innerHTML = side2Amount;
    side3Count.innerHTML = side3Amount;
    side4Count.innerHTML = side4Amount;

    localStorage.removeItem("burger1Quantity");
    localStorage.removeItem("burger2Quantity");
    localStorage.removeItem("burger3Quantity");
    localStorage.removeItem("burger4Quantity");
    localStorage.removeItem("side1Quantity");
    localStorage.removeItem("side2Quantity");
    localStorage.removeItem("side3Quantity");
    localStorage.removeItem("side4Quantity");
    localStorage.removeItem("totalPrice");

    updateTotalPrice();
});

// EVENT LISTENER FOR PLACE ORDER BUTTON //
placeOrderButton.addEventListener("click", function () {
    if (Number(burger1Amount) + Number(burger2Amount) + Number(burger3Amount) + Number(burger4Amount) + Number(side1Amount) + Number(side2Amount) + Number(side3Amount) + Number(side4Amount) === 0) {
        alert("Your cart is empty! Please add items to your cart before placing an order.");
    }
    else if (Number(burger1Amount) + Number(burger2Amount) + Number(burger3Amount) + Number(burger4Amount) + Number(side1Amount) + Number(side2Amount) + Number(side3Amount) + Number(side4Amount) === 1) {
    alert("Thank you for placing a order for " + (Number(burger1Amount) + Number(burger2Amount) + Number(burger3Amount) + Number(burger4Amount) + Number(side1Amount) + Number(side2Amount) + Number(side3Amount) + Number(side4Amount)) + " item! Your total is $" + calculateTotalPrice() + ". Your order will be ready soon!");
    emptyCartButton.click();
    }
    else if (Number(burger1Amount) + Number(burger2Amount) + Number(burger3Amount) + Number(burger4Amount) + Number(side1Amount) + Number(side2Amount) + Number(side3Amount) + Number(side4Amount) > 1) {
    alert("Thank you for placing a order for " + (Number(burger1Amount) + Number(burger2Amount) + Number(burger3Amount) + Number(burger4Amount) + Number(side1Amount) + Number(side2Amount) + Number(side3Amount) + Number(side4Amount)) + " items! Your total is $" + calculateTotalPrice() + ". Your order will be ready soon!");
    emptyCartButton.click();
    }
});