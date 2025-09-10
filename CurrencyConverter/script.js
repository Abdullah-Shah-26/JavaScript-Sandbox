const BASE_URL = "https://api.frankfurter.app/latest?from=USD&to=INR";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
let fromCurr = document.querySelector("[name='from']");
let toCurr = document.querySelector("[name='to']");
let msg = document.querySelector(".msg");

for (let select of dropdowns) {
  for (currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if (select.name === "from" && currCode === "USD")
      newOption.selected = "selected";
    else if (select.name === "to" && currCode === "INR")
      newOption.selected = "selected";
    select.append(newOption);
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
btn.addEventListener("click", (evt) => {
  evt.preventDefault();
  updateExchangeRate();
});
const updateExchangeRate = async () => {
  let amount = document.querySelector(".amount input");
  let amtVal = amount.value;
  
  if (amtVal === "" || amtVal < 1) {
    amtVal = 1;
    amount.value = "1";
  }
  
  const URL = `https://api.exchangerate-api.com/v4/latest/${fromCurr.value}`;
  let response = await fetch(URL);
  let data = await response.json();
  let rate = data.rates[toCurr.value];
  let finalAmount = (amtVal * rate).toFixed(2);
  
  msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
};
window.addEventListener("load",()=>{
  updateExchangeRate();
})