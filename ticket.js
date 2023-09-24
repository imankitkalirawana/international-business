/** @format */

const popup = document.getElementById("ticket-purchase-popup");
function displayCountryDetails(country) {
  popup.querySelector(".title").textContent = Countries[country].title;
  popup.querySelector(".price").textContent = Countries[country].price;
  popup.style.transform = `translate(-50%, -50%) scale(1)`;
  const rentDetails = Countries[country].rentDetails;
  const rentDetailsElem = popup.querySelector(".rent-details");
  popup.innerHTML = `<div class="ticket-details">
            <h3 class="title">${Countries[country].title}</h3>
            <p class="price">$${Countries[country].price}</p>
            <div class="rent-details">
              <p><b>Rent: </b>${rentDetails.rent}</p>
              <p><b>1 House </b>${rentDetails.house1}</p>
              <p><b>2 House: </b>${rentDetails.house2}</p>
              <p><b>3 House: </b>${rentDetails.house3}</p>
              <p><b>Hotel: </b>${rentDetails.hotel}</p>
              <p><b>Mortage value: </b>${rentDetails.mortgageValue}</p>
            </div>
          </div>
          <div class="purchase-btns">
            <button class="btn btn-primary" onclick="purchaseTicket(${Countries[country].id}, ${currTurn})">
              Buy
            </button>
            <button class="btn btn-secondary" onclick="closeTicketPopup()">
              Cancel
            </button>
          </div>`;

  // Display the popup
  popup.style.transform = `translate(-50%, -50%) scale(1)`;
}

function purchaseTicket(ticketId, purchasedBy) {
  // Implement purchase logic here
  let ticketPrice = Countries[ticketId].price;
  players[purchasedBy].money -= ticketPrice;
  Countries[ticketId].purchased = purchasedBy;

  console.log(
    `Ticket ${ticketId} purchased! by ${purchasedBy}... Available Balance: ${players[purchasedBy].money}`
  );

  if (diceResult !== 6) {
    currTurn = (currTurn % 4) + 1;
  }
  popup.style.transform = `translate(-50%, -50%) scale(0)`;
}

function closeTicketPopup() {
  if (diceResult !== 6) {
    currTurn = (currTurn % 4) + 1;
  }
  popup.style.transform = `translate(-50%, -50%) scale(0)`;
}

function payRent() {
  
}
