"use strict";

const calculate = document.getElementById("calculate");
const refresh = document.getElementById("refresh");

calculate.addEventListener("click", function () {
  let billValue = Number(document.getElementById("billvalue").value);
  let tipValue = Number(document.getElementById("tipvalue").value);

  function bill(add) {
    add >= 50 && add <= 300
      ? (tipValue = add * (tipValue / 100))
      : (tipValue = add * (tipValue / 100));
    return tipValue;
  }
  const tip = bill(billValue);
  const bills = tip + billValue;

  const total = (document.getElementById("total").value = bills);
  console.log(total);
});

refresh.addEventListener("click", function () {
  const billValue = (document.getElementById("billvalue").value = " ");
  const tipValue = (document.getElementById("tipvalue").value = " ");
  const total = (document.getElementById("total").value = " ");
});
