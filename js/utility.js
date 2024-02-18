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

  // Append the span elements to the container
  containerDiv.appendChild(span1);
  containerDiv.appendChild(span2);
  containerDiv.appendChild(span3);

  // Append the container to the cart
  parentContainer.appendChild(containerDiv);
}

/* <div class="flex justify-between items-center *:text-clr-primary *:opacity-60">
  // <span>C2</span>
  // <span>Economy</span>
  // <span>550</span>
// </div>; */
