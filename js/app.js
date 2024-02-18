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

// Selected Seat Container
const seatContainer = document.getElementById("seat-container");

// Add event listener to the container
seatContainer.addEventListener("click", (e) => {
  // Check if the clicked element is a seat-item
  if (e.target.classList.contains("seat-item")) {
    // change the property of the clicked element
    e.target.classList.remove("bg-slate-300");
    e.target.classList.add("bg-[#1DD100]");
    e.target.classList.add("text-white");
  }
});
