// Fonction pour mettre à jour le total
function updateTotal() {
  let total = 0;
  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseFloat(item.querySelector(".item-price").textContent.replace("€", ""));
    const quantity = parseInt(item.querySelector(".quantity").textContent);
    if (quantity > 0) { // on ne compte que si quantité > 0
      total += price * quantity;
    }
  });
  document.getElementById("total-price").textContent = total.toFixed(2) + " €";
}

// Gestion des boutons du panier
document.querySelectorAll(".cart-item").forEach(item => {
  const plusBtn = item.querySelector(".plus");
  const minusBtn = item.querySelector(".minus");
  const deleteBtn = item.querySelector(".delete");
  const heartBtn = item.querySelector(".heart");
  const quantityElement = item.querySelector(".quantity");

  plusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent);
    quantity++;
    quantityElement.textContent = quantity;
    updateTotal();
  });

  minusBtn.addEventListener("click", () => {
    let quantity = parseInt(quantityElement.textContent);
    if (quantity > 0) { // autoriser descendre jusqu’à 0
      quantity--;
      quantityElement.textContent = quantity;
      updateTotal();
    }
  });

  deleteBtn.addEventListener("click", () => {
    item.remove();
    updateTotal();
  });

  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");
  });
});

// Formulaire de commande
const checkoutForm = document.getElementById("checkout-form");
const confirmationMessage = document.getElementById("confirmation-message");

checkoutForm.addEventListener("submit", (e) => {
  e.preventDefault();
  confirmationMessage.style.display = "block";
  checkoutForm.reset();
});

// Initialisation du total
updateTotal();
