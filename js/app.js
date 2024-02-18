// Cuopon Apply Button

function couponAppyBtn() {
  const cuoponContainer = document.getElementById("coupon-container");
  const cuoponSingle = getInnerText("coupon-single");
  const cuoponDuoble = getInnerText("cuopon-duoble");

  inputCuoponValue = cuoponContainer.firstElementChild.value;

  if (cuoponSingle === inputCuoponValue) {
    cuoponContainer.classList.add("hidden");
  } else if (cuoponDuoble === inputCuoponValue) {
    cuoponContainer.classList.add("hidden");
  } else if (inputCuoponValue === "") {
    return;
  } else {
    alert("Invalid coupon code");
    cuoponContainer.firstElementChild.value = "";
  }
}

function selectSeatPosition() {
  const seatContainer = document.getElementById("seat-container");
}
