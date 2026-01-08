/**********************
 * NAVIGATION ENTRE PAGES
 **********************/
const navigationButtons = document.querySelectorAll("[data-section]");

navigationButtons.forEach(button => {
  button.addEventListener("click", () => {
    const sectionId = button.dataset.section;

    // Masquer toutes les pages
    document.querySelectorAll(".page").forEach(page => {
      page.classList.remove("active");
    });

    // Afficher la page sélectionnée
    const target = document.getElementById(sectionId);
    if (target) {
      target.classList.add("active");
      window.scrollTo(0, 0);
    }
  });
});

/**********************
 * PANIER
 **********************/
let cart = [];

const cartBox = document.getElementById("cart");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const openCartBtn = document.getElementById("open-cart");
const closeCartBtn = document.getElementById("close-cart");

// Ajouter un produit au panier
document.addEventListener("click", event => {
  if (event.target.classList.contains("add-to-cart")) {
    const name = event.target.dataset.name;
    const price = Number(event.target.dataset.price);

    cart.push({ name, price });
    updateCart();
  }
});

// Mettre à jour l'affichage du panier
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const itemEl = document.createElement("p");
    itemEl.innerHTML = `
      ${item.name} – ${item.price} €
      <button onclick="removeItem(${index})">❌</button>
    `;
    cartItems.appendChild(itemEl);
  });

  cartTotal.textContent = total.toFixed(2);
}

// Supprimer un article du panier
function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

// Ouvrir / fermer le panier
openCartBtn.addEventListener("click", () => {
  cartBox.classList.remove("hidden");
});

closeCartBtn.addEventListener("click", () => {
  cartBox.classList.add("hidden");
});

