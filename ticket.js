/** @format */

const popup = document.getElementById("ticket-purchase-popup");
function displayCountryDetails(country) {
  popup.querySelector(".title").textContent = Countries[country].title;
  popup.querySelector(".price").textContent = Countries[country].price;
  popup.style.transform = `translate(-50%, -50%) scale(1)`;
  const rentDetails = Countries[country].rentDetails;
  const rentDetailsElem = popup.querySelector(".rent-details");
  rentDetailsElem.innerHTML = `
  <p><b>Rent: </b>${rentDetails.rent}</p>
  <p><b>1 House: </b>${rentDetails.house1}</p>
  <p><b>2 House: </b>${rentDetails.house2}</p>
  <p><b>3 House: </b>${rentDetails.house3}</p>
  <p><b>Hotel: </b>${rentDetails.hotel}</p>
  <p><b>Mortgage value: </b>${rentDetails.mortgageValue}</p>
  `;

  // Display the popup
  const popupContainer = document.getElementById(
    "ticket-purchase-popup-container"
  );
  popup.style.transform = `translate(-50%, -50%) scale(1)`;
}

function purchaseTicket() {
  // Implement purchase logic here
  
  console.log("Ticket purchased!");
  popup.style.transform = `translate(-50%, -50%) scale(0)`;
}

function closeTicketPopup() {
  popup.style.transform = `translate(-50%, -50%) scale(0)`;
}
