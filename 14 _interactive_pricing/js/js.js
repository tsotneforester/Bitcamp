// var redBox = document.getElementById('...')
"use strict";

const slider = document.querySelector("#slider");
const circle = document.querySelector("#circle");
const color = document.querySelector("#color-line");
const priceAmount = document.querySelector("#price-amount");
const viewAmount = document.querySelector("#view-amount");
const switcherBall = document.querySelector("#switcher-ball");
const switcher = document.querySelector("#switcher");
const input = document.querySelector("input");

let yearlyStatus = false;

const loan = {
  0: ["10K", 8],
  25: ["50K", 12],
  50: ["100K", 16],
  75: ["500K", 24],
  100: ["1M", 36],
};

function numberChange() {
  if (yearlyStatus) {
    priceAmount.innerHTML = "$" + (loan[slider.value][1] * 0.75).toFixed(2);
    viewAmount.innerHTML = loan[slider.value][0];
  } else {
    priceAmount.innerHTML = "$" + loan[slider.value][1].toFixed(2);
    viewAmount.innerHTML = loan[slider.value][0];
  }
}

switcher.addEventListener("click", () => {
  console.log("gg");
  if (!yearlyStatus) {
    switcherBall.style.transform = "translate(24px, 4px)";
  } else {
    switcherBall.style.transform = "translate(5px, 4px)";
  }
  yearlyStatus = !yearlyStatus;
  numberChange();
});

slider.addEventListener("input", () => {
  let sliderValue = slider.value / 100;
  circle.style.transform = "translate(" + 236 * sliderValue + "px)"; //600-40/9
  color.style.width = 276 * sliderValue + "px"; //600-40/9
  numberChange();
});

input.addEventListener("mouseenter", () => {
  circle.style.backgroundColor = "#7AEADF";
});
input.addEventListener("mouseleave", () => {
  circle.style.backgroundColor = "#24AEA1";
});
input.addEventListener("mousedown", () => {
  input.style.cursor = "-webkit-grabbing";
});
input.addEventListener("mouseup", () => {
  input.style.cursor = "pointer";
});
