const date = new Date();
document.getElementById("date").innerText = date.toLocaleDateString();
// ------------date end-------------

document.getElementById("detail-submit-btn").addEventListener("click", function () {
  let textArea = document.getElementById("text-area");
  const buyerInfo = document.getElementById("buyer-info");
  const br = document.createElement("br");
  buyerInfo.appendChild(br);
  const spanBuyerInfo = document.createElement("span");
  spanBuyerInfo.innerText = textArea.value;
  buyerInfo.appendChild(spanBuyerInfo);
  textArea.value = "";
});

// -------------table start---------------

document.getElementById("input-button").addEventListener("click", function () {
  /*     const tr = document.createElement("tr");
    const th1 = document.createElement("th") */
  /*     const td2 = document.createElement("td")
    const td3 = document.createElement("td")
    const total = document.createElement("th") */
  const tr = elements("tr");
  const th1 = elements("th");
  const td2 = elements("td");
  const td3 = elements("td");
  const th = elements("th");

  th.classList.add("totalPrice");
  const tableInfo = document.getElementById("table-info");
  const inputItem = document.getElementById("input-item");
  const inputPrice = document.getElementById("input-price");
  const inputQuantity = document.getElementById("input-quantity");

  th1.innerText = inputItem.value;
  td2.innerText = inputPrice.value;
  td3.innerText = inputQuantity.value;
  th.innerText = parseFloat(inputPrice.value) * parseFloat(inputQuantity.value);
  inputItem.value = "";
  inputQuantity.value = "";
  inputPrice.value = "";

  tr.appendChild(th1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(th);
  tableInfo.appendChild(tr);
  SubTotalPrice();
});

function elements(element) {
  return document.createElement(element);
}

function SubTotalPrice() {
  let subTotalDisplay = totalCost();
  const subTotal = document.getElementById("subtotal");
  subTotal.innerText = subTotalDisplay;

  const tax = document.getElementById("tax");
  const grandTotal = document.getElementById("grandTotal");
  const totalAmount = document.getElementById("totalAmount");
  let totalTax = (subTotalDisplay * 10) / 100;
  tax.innerText = totalTax.toFixed(2);
  grandTotal.innerText = totalTax + subTotalDisplay;
  totalAmount.innerText = totalTax + subTotalDisplay;
}

function totalCost() {
  let sub = 0;
  const cost = document.getElementsByClassName("totalPrice");
  for (let total of cost) {
    sub = sub + parseInt(total.innerText);
  }
  console.log(sub);
  return sub;
}
