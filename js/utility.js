// Get Inner Text from an element
function getInnerText(element) {
  return document.getElementById(element).innerText;
}

// Add item to cart
function addItemToCart(parentContainer, elementInnerText, ticketPrice) {
  // Create the container div
  const containerDiv = document.createElement("div");

  // Add class to the container
  containerDiv.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "text-clr-primary",
    "opacity-60"
  );

  // Create the span elements
  const span1 = document.createElement("span");
  span1.textContent = elementInnerText;

  const span2 = document.createElement("span");
  span2.textContent = "Economy";

  const span3 = document.createElement("span");
  span3.textContent = ticketPrice;
  span3.classList.add("cart-ticket-price");

  // Append the span elements to the container
  containerDiv.appendChild(span1);
  containerDiv.appendChild(span2);
  containerDiv.appendChild(span3);

  // Append the container to the cart
  parentContainer.appendChild(containerDiv);
}

// Cart Ticket Price item selected and total price
function cartTicketPrice(element) {
  const cartTicketPrice = document.getElementsByClassName(element);
  let total = 0;
  for (const item of cartTicketPrice) {
    total += parseInt(item.innerText);
  }
  return total;
}
