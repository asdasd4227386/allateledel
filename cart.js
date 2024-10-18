// Kosár kezelése (localStorage segítségével a kosár adatok megőrzése)
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let total = 0;

function addToCart(productName, price) {
    // Termék hozzáadása a kosárhoz
    cart.push({ name: productName, price: price });
    
    // Kosár mentése a localStorage-be
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Kosár frissítése
    updateCart();
}

function updateCart() {
    // Kosár termékeinek megjelenítése
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    cart.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.textContent = item.name + ' - ' + item.price + ' Ft';
        cartItemsDiv.appendChild(productDiv);
    });

    // Összeg frissítése
    total = cart.reduce((acc, item) => acc + item.price, 0);
    document.getElementById('total').textContent = 'Összesen: ' + total + ' Ft';
}

// Kosár betöltése oldal betöltésekor
window.onload = updateCart;
