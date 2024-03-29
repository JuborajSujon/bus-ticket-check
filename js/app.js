// Selected Seat remainer
const seatRemainer = document.getElementById("seat-remainer");
let seatRemainerValue = parseInt(getInnerText("seat-remainer"));

// Selected Seat to cart
const seatToCart = document.getElementById("seat-to-cart");
let seatToCartValue = parseInt(getInnerText("seat-to-cart"));

// Get The Ticket Price
const ticketPrice = parseInt(getInnerText("ticket-price"));

// Select the seat ticket price
const seatTicketContainer = document.getElementById("seat-ticket-container");

// Total Price selected
const totalPriceContainer = document.getElementById("total-price-container");

// Get the coupon button container
const couponButtonContainer = document.getElementById("coupon-apply-btn");

// Grand total price selected
const grandTotalPrice = document.getElementById("grand-total-price");

// Select the phone number input value
const inputPhoneNumber = document.getElementById("phone-number");

// Select the next button
const nextBtn = document.getElementById("next-btn");

// phone number validation
inputPhoneNumber.addEventListener("change", (e) => {
  e.preventDefault();
  const phoneNumber = e.target.value.trim();

  if (phoneNumber === "") {
    return;
  } else if (!phoneNumber.length > 0 || isNaN(phoneNumber)) {
    alert("Please enter a valid number.");
    e.target.value = "";
  } else if (!itemSelected) {
    alert("Please select seat number");
  } else {
    nextBtn.removeAttribute("disabled");
  }
});

// Selected Seat Container
const seatContainer = document.getElementsByClassName("seat-item");

for (const item of seatContainer) {
  // Add event listener to the container
  item.addEventListener("click", (e) => {
    e.preventDefault();

    //Check if the seat is already selected
    if (!e.target.classList.contains("clicked")) {
      if (seatToCartValue < 4) {
        seatRemainer.innerText = seatRemainerValue - 1;
        seatToCart.innerText = seatToCartValue + 1;
        seatRemainerValue--;
        seatToCartValue++;
        e.target.classList.add("clicked");

        // change the property of the clicked element
        e.target.classList.remove("bg-slate-200");
        e.target.classList.add("bg-[#1DD100]");
        e.target.classList.add("text-white");

        // User click on a seat
        const userPressedSeat = e.target.innerText;

        // Add selected seat to cart
        addItemToCart(seatTicketContainer, userPressedSeat, ticketPrice);

        // Cart Ticket Price item selected and total price
        let totalPrice = cartTicketPrice("cart-ticket-price");
        totalPriceContainer.innerText = totalPrice;
        grandTotalPrice.innerText = totalPrice;

        //Check if the cuopon is already used
        if (seatToCartValue === 4) {
          couponButtonContainer.removeAttribute("disabled");
          // couponAppyBtn();
        }

        // Check if the input phone number is valid
        if (inputPhoneNumber.value.trim() === "") {
        } else if (
          !inputPhoneNumber.value.trim().length > 0 ||
          isNaN(inputPhoneNumber.value.trim())
        ) {
          alert("Please enter a valid number.");
        } else {
          nextBtn.removeAttribute("disabled");
          return;
        }

        // Next button is disabled or not
        isNextBtnDisabled(seatContainer);
      } else {
        const maxQtyAlert = document.getElementById("max-qty-alert");
        maxQtyAlert.classList.remove("invisible");
        maxQtyAlert.classList.add("visible");
        const refreshInvervalId = setInterval(() => {
          maxQtyAlert.classList.remove("visible");
          maxQtyAlert.classList.add("invisible");
          clearInterval(refreshInvervalId);
        }, 3000);

        return;
      }
    }
  });
}

// Cuopon Apply Button

function couponAppyBtn() {
  // Get total price
  const totalPrice = parseInt(totalPriceContainer.innerText);

  // Get grand total price
  const grandTotal = parseInt(grandTotalPrice.innerText);

  if (totalPrice === 0) {
    alert("Please select seat number");
  } else {
    const cuoponContainer = document.getElementById("coupon-container");
    const cuoponSingle = getInnerText("coupon-single");
    const cuoponDuoble = getInnerText("cuopon-duoble");

    // Get the coupon discount price container
    const couponDiscountPrice = document.getElementById(
      "coupon-discount-price-container"
    );

    // Get the coupon discount price element
    const couponDiscountPriceElement = document.getElementById(
      "coupon-discount-price"
    );
    // Get the coupon code from input
    inputCuoponValue = cuoponContainer.firstElementChild.value;

    if (cuoponSingle === inputCuoponValue) {
      cuoponContainer.classList.add("hidden");
      couponDiscountPrice.classList.remove("hidden");
      const discountPrice = (totalPrice * 15) / 100;
      couponDiscountPriceElement.innerText = discountPrice.toFixed(2);
      const newGrandTotal = grandTotal - discountPrice;
      grandTotalPrice.innerText = newGrandTotal.toFixed(2);
    } else if (cuoponDuoble === inputCuoponValue) {
      cuoponContainer.classList.add("hidden");
      couponDiscountPrice.classList.remove("hidden");
      const discountPrice = (totalPrice * 20) / 100;
      couponDiscountPriceElement.innerText = discountPrice.toFixed(2);
      const newGrandTotal = grandTotal - discountPrice;
      grandTotalPrice.innerText = newGrandTotal.toFixed(2);
    } else if (inputCuoponValue === "") {
      return;
    } else {
      alert("Invalid coupon code");
      cuoponContainer.firstElementChild.value = "";
    }
  }
}

function isNextBtnDisabled(itemClicked) {
  // Select the phone number input value
  const inputPhoneNumber = document.getElementById("phone-number");

  // Select the next button
  const nextBtn = document.getElementById("next-btn");

  // Check next button is disabled or not
  inputPhoneNumber.addEventListener("change", (e) => {
    e.preventDefault();
    const phoneNumber = e.target.value.trim();

    // Select the item clicked
    let itemSelected = false;
    // Add event listener form item
    for (const item of itemClicked) {
      if (item.classList.contains("clicked")) {
        itemSelected = true;
      }
    }
    if (phoneNumber === "") {
      return;
    } else if (!phoneNumber.length > 0 || isNaN(phoneNumber)) {
      alert("Please enter a valid number.");
    } else if (!itemSelected) {
      alert("Please select seat number");
    } else {
      nextBtn.removeAttribute("disabled");
    }
  });
}
