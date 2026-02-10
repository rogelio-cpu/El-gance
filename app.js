// Data - Products
const products = [
    {
        id: 1,
        name: "Collier Perle Rose",
        category: "Colliers",
        price: 85000,
        image: "./img/1.avif"
    },
    {
        id: 2,
        name: "Bague Diamant Rubis",
        category: "Bagues",
        price: 125000,
        image: "./img/2.jpg"
    },
    {
        id: 3,
        name: "Boucles d'Oreilles Or",
        category: "Boucles d'Oreilles",
        price: 45000,
        image: "./img/3.jpg"
    },
    {
        id: 4,
        name: "Bracelet Argent Élégant",
        category: "Bracelets",
        price: 62000,
        image: "./img/4.png"
    },
    {
        id: 5,
        name: "Pendentif Cristal Bleu",
        category: "Colliers",
        price: 95000,
        image: "./img/5.jpg"
    },
    {
        id: 6,
        name: "Alliante Platine Luxe",
        category: "Bagues",
        price: 210000,
        image: "./img/6.avif"
    },
    {
        id: 7,
        name: "Boucles Saphir Nuit",
        category: "Boucles d'Oreilles",
        price: 78000,
        image: "./img/7.avif"
    },
    {
        id: 8,
        name: "Bracelet Perles d'Eau",
        category: "Bracelets",
        price: 54000,
        image: "./img/8.avif"
    }
];

// Cart State
let cart = JSON.parse(localStorage.getItem('jewelry_cart')) || [];

// DOM Elements
const productContainer = document.getElementById('product-container');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');
const paymentModal = document.getElementById('payment-modal');
const closePayment = document.getElementById('close-payment');
const paymentForm = document.getElementById('payment-form');
const paymentAmount = document.getElementById('payment-amount');
const payText = document.getElementById('pay-text');
const paySpinner = document.getElementById('pay-spinner');
const successMessage = document.getElementById('success-message');
const closeSuccess = document.getElementById('close-success');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    updateUI();
});

// Render Product Grid
function renderProducts() {
    if (!productContainer) return;
    productContainer.innerHTML = products.map(product => `
        <article class="product-card">
            <div class="product-img">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <div>
                    <p class="product-category">${product.category}</p>
                    <h3 class="product-name">${product.name}</h3>
                </div>
                <p class="product-price">${product.price.toLocaleString()} FC</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    Ajouter au Panier
                </button>
            </div>
        </article>
    `).join('');
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateUI();
    openCartSidebar();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateUI();
}

function saveCart() {
    localStorage.setItem('jewelry_cart', JSON.stringify(cart));
}

// UI Updates
function updateUI() {
    // Update Badge
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = count;

    // Render Cart Items
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="text-align:center; padding-top:2rem;">Votre panier est vide.</p>';
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-price">${item.quantity} x ${item.price.toLocaleString()} FC</p>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Supprimer</button>
                </div>
            </div>
        `).join('');
    }

    // Update Total
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.innerText = total.toLocaleString();
}

// Sidebar Controls
function openCartSidebar() {
    cartSidebar.classList.add('open');
    overlay.classList.add('active');
}

function closeCartSidebar() {
    cartSidebar.classList.remove('open');
    overlay.classList.remove('active');
}

cartBtn.addEventListener('click', openCartSidebar);
closeCart.addEventListener('click', closeCartSidebar);
overlay.addEventListener('click', () => {
    closeCartSidebar();
    closePaymentModal();
});

// Payment Flows
checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    paymentAmount.innerText = total.toLocaleString();
    closeCartSidebar();
    openPaymentModal();
});

function openPaymentModal() {
    paymentModal.classList.add('open');
    overlay.classList.add('active');
    paymentForm.style.display = 'block';
    successMessage.style.display = 'none';
}

function closePaymentModal() {
    paymentModal.classList.remove('open');
    if (!cartSidebar.classList.contains('open')) {
        overlay.classList.remove('active');
    }
}

closePayment.addEventListener('click', closePaymentModal);

paymentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simulate Payment Loading
    payText.style.display = 'none';
    paySpinner.style.display = 'inline-block';

    setTimeout(() => {
        paySpinner.style.display = 'none';
        payText.style.display = 'inline-block';

        // Show Success
        paymentForm.style.display = 'none';
        successMessage.style.display = 'block';

        // Clear Cart
        cart = [];
        saveCart();
        updateUI();
    }, 2000);
});

closeSuccess.addEventListener('click', closePaymentModal);
