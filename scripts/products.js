// Array completo de productos
const products = [
    // PLATOS
    {
        id: 1,
        name: "1/4 Pollo a la Brasa",
        category: "platos",
        price: 15.00,
        specialPrice: { days: [3, 6], price: 12.00 }, // Miércoles (3) y Sábado (6)
        description: "1/4 de pollo a la brasa con papas, cremas y ensalada.",
        image: "./images/menu/brasa-cuarto.jpg",
        available: true
    },
    {
        id: 102,
        name: "1/2 Pollo a la Brasa",
        category: "platos",
        price: 30.00,
        specialPrice: { days: [3, 6], price: 24.00 }, // Miércoles (3) y Sábado (6)
        description: "1/2 pollo a la brasa con papas, cremas y ensalada.",
        image: "./images/menu/medio-pollo.jpg",
        available: true
    },
    {
        id: 3,
        name: "Pollo a la Brasa Entero",
        category: "platos",
        price: 60.00,
        specialPrice: { days: [3, 6], price: 48.00 }, // Miércoles (3) y Sábado (6)
        description: "Pollo entero con papa, cremas, ensalada, porción de chaufa y gaseosa Pepsi 1.5L.",
        image: "./images/menu/pollo-entero.jpg",
        available: true
    },
    {
        id: 5,
        name: "Broaster",
        category: "platos",
        price: 12.00,
        description: "Porción de pollo broaster con papas.",
        image: "./images/menu/broaster-12.jpg",
        available: true
    },
    {
        id: 104,
        name: "Broaster",
        category: "platos",
        price: 18.00,
        description: "Porción de pollo, chaufa, papas, ensalada y cremas.",
        image: "./images/menu/broaster-18.jpg",
        available: true
    },
    {
        id: 6,
        name: "Mostrito",
        category: "platos",
        price: 13.00,
        description: "Porción de pollo broaster con chaufa y papas.",
        image: "./images/menu/mostritoo.jpg",
        available: true
    },
    {
        id: 7,
        name: "Hamburguesa de Carne",
        category: "platos",
        price: 5.00,
        description: "Hamburguesa de carne con papas.",
        image: "./images/menu/hamburguesa-carne.jpg",
        available: true
    },
    {
        id: 8,
        name: "Hamburguesa Broaster",
        category: "platos",
        price: 8.00,
        description: "Hamburguesa de pollo broaster con papas.",
        image: "./images/menu/hamburguesa-broaster.jpg",
        available: true
    },
    {
        id: 9,
        name: "Caldo de Gallina",
        category: "platos",
        price: 10.00,
        description: "Caldo de gallina tradicional.",
        image: "./images/menu/caldo-gallina.jpg",
        available: true
    },
    {
        id: 100,
        name: "Brasa Mostrito",
        category: "platos",
        price: 16.00,
        specialPrice: { days: [3, 6], price: 13.00 }, // Miércoles (3) y Sábado (6)
        description: "Brasa mostrito: pollo a la brasa con chaufa y papas.",
        image: "./images/menu/brasa-mostrito.jpg",
        available: true
    },
    {
        id: 101,
        name: "Salchipapa",
        category: "platos",
        price: 10.00,
        description: "Salchipapa tradicional.",
        image: "./images/menu/salchipapa.jpg",
        available: true
    },
    {
        id: 101,
        name: "Salchibrasa",
        category: "platos",
        price: 18.00,
        description: "Salchibrasa tradicional.",
        image: "./images/menu/salchibrasa.jpg",
        available: true
    },
    {
        id: 10,
        name: "Barco Meche",
        category: "platos",
        price: 100.00,
        description: "1 Pollo entero + 4 porciones broaster + salchipapa + 2 hamburguesas + 1 jarra chicha + 2 porciones de chaufa + cremas + ensalada + chorizo + papa.",
        image: "./images/menu/combo-barco.jpg",
        available: true
    },
    {
        id: 11,
        name: "Combo Broaster",
        category: "platos",
        price: 50.00,
        description: "4 piezas de broaster, papa, cremas, ensalada, porción de chaufa y gaseosa Pepsi 1.5L.",
        image: "./images/menu/combo-broaster.jpg",
        available: true
    },
    // BEBIDAS
    {
        id: 20,
        name: "Agua Cielo",
        category: "bebidas",
        price: 2.00,
        description: "Botella de agua Cielo.",
        image: "./images/menu/agua-mineral.jpg",
        available: true
    },
    {
        id: 21,
        name: "Coca Cola 500ml",
        category: "bebidas",
        price: 3.00,
        description: "Botella de Coca Cola 500ml.",
        image: "./images/menu/gaseosa-coca-500ml.jpg",
        available: true
    },
    {
        id: 22,
        name: "Inka Kola 500ml",
        category: "bebidas",
        price: 3.00,
        description: "Botella de Inka Kola 500ml.",
        image: "./images/menu/gaseosa-inka-500ml.jpg",
        available: true
    },
    {
        id: 22,
        name: "Pepsi",
        category: "bebidas",
        price: 2.00,
        description: "Botella de Pepsi.",
        image: "./images/menu/gaseosa-pepsi.jpg",
        available: true
    },
    {
        id: 23,
        name: "Coca Cola 1.5L",
        category: "bebidas",
        price: 8.00,
        description: "Botella de Coca Cola 1.5L.",
        image: "./images/menu/gaseosa-coca-1-5lt.jpg",
        available: true
    },
    {
        id: 24,
        name: "Inka Kola 1.5L",
        category: "bebidas",
        price: 8.00,
        description: "Botella de Inka Kola 1.5L.",
        image: "./images/menu/gaseosa-inca-1-5lt.jpg",
        available: true
    },
    {
        id: 24,
        name: "Fanta 500ml",
        category: "bebidas",
        price: 4.00,
        description: "Botella de Fanta 500ml.",
        image: "./images/menu/gaseosa-fanta.jpg",
        available: true
    },
    {
        id: 25,
        name: "Gordita Inka",
        category: "bebidas",
        price: 5.00,
        description: "Botella de Inka Kola grande.",
        image: "./images/menu/gaseosa-gordita.jpg",
        available: true
    },
    {
        id: 26,
        name: "Gatorade",
        category: "bebidas",
        price: 3.00,
        description: "Botella de Gatorade.",
        image: "./images/menu/gatorade.jpg",
        available: true
    },
    {
        id: 27,
        name: "Chicha 1L Jarra",
        category: "bebidas",
        price: 8.00,
        description: "Jarra de chicha de 1 litro.",
        image: "./images/menu/chicha-morada.jpg",
        available: true
    },
    // TRAGOS
    {
        id: 30,
        name: "Cerveza Pilsen",
        category: "tragos",
        price: 9.00,
        description: "Botella de cerveza Pilsen.",
        image: "./images/menu/cerveza-pilsen.jpg",
        available: true
    },
    {
        id: 31,
        name: "Cusqueña Trigo",
        category: "tragos",
        price: 9.00,
        description: "Botella de Cusqueña Trigo.",
        image: "./images/menu/cerveza-trigo.jpg",
        available: true
    },
    {
        id: 32,
        name: "Cusqueña Negra",
        category: "tragos",
        price: 9.00,
        description: "Botella de Cusqueña Negra.",
        image: "./images/menu/cerveza-negra.jpg",
        available: true
    },
    {
        id: 33,
        name: "Pisco Sour",
        category: "tragos",
        price: 28.00,
        description: "Copa de Pisco Sour.",
        image: "./images/menu/pisco-sour.jpg",
        available: true
    },
    {
        id: 34,
        name: "Vino Tabernero Rosé",
        category: "tragos",
        price: 29.00,
        description: "Botella de vino Tabernero Rosé.",
        image: "./images/menu/vino-rose.jpg",
        available: true
    },
    {
        id: 35,
        name: "Vino Tabernero Borgoña",
        category: "tragos",
        price: 29.00,
        description: "Botella de vino Tabernero Borgoña.",
        image: "./images/menu/vino-borgona.jpg",
        available: true
    },
    {
        id: 36,
        name: "Chilcano 275ml",
        category: "tragos",
        price: 11.00,
        description: "Botella de Chilcano 275ml.",
        image: "./images/menu/chilcano.jpg",
        available: true
    },
    {
        id: 37,
        name: "Whisky Red Label",
        category: "tragos",
        price: 60.00,
        description: "Botella de Whisky Red Label.",
        image: "./images/menu/whisky-red-label.jpg",
        available: true
    },
    {
        id: 38,
        name: "Monster",
        category: "tragos",
        price: 10.00,
        description: "Lata de Monster.",
        image: "./images/menu/monster.jpg",
        available: true
    },
    {
        id: 39,
        name: "Heineken 473ml",
        category: "tragos",
        price: 8.00,
        description: "Lata de Heineken 473ml.",
        image: "./images/menu/heineken.jpg",
        available: true
    },
    {
        id: 40,
        name: "Red Bull",
        category: "tragos",
        price: 9.00,
        description: "Lata de Red Bull.",
        image: "./images/menu/redbull.jpg",
        available: true
    }
];

// Hacer el array accesible globalmente
window.restaurantProducts = products;

function getProductPrice(product) {
    const today = new Date().getDay();
    if (product.specialPrice && product.specialPrice.days.includes(today)) {
        return product.specialPrice.price;
    }
    return product.price;
}

function renderProducts(category = 'comidas') {
    const menuItemsContainer = document.getElementById('menu-items');
    if (!menuItemsContainer) return;

    menuItemsContainer.innerHTML = '';

    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        menuItemsContainer.innerHTML = `
            <div class="no-products">
                <i class="fas fa-utensils"></i>
                <p>No hay productos disponibles en esta categoría</p>
            </div>
        `;
        return;
    }

    filteredProducts.forEach(product => {
        const price = getProductPrice(product);
        const isSpecial = product.specialPrice && product.specialPrice.days.includes(new Date().getDay());
        const productElement = document.createElement('div');
        productElement.className = 'menu-item';
        productElement.innerHTML = `
            <div class="item-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${!product.available ? '<span class="sold-out">Agotado</span>' : ''}
            </div>
            <div class="item-info">
                <h3>${product.name}</h3>
                <p class="description">${product.description}</p>
                <span class="price">S/ ${price.toFixed(2)}${isSpecial ? ' <span class="special-price">(Precio especial)</span>' : ''}</span>
                ${product.available ? `
                <div class="item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${product.id}">-</button>
                        <input type="number" class="quantity-input" value="1" min="1" data-id="${product.id}">
                        <button class="quantity-btn plus" data-id="${product.id}">+</button>
                    </div>
                    <button class="add-to-cart" data-id="${product.id}">
                        Añadir al carrito
                    </button>
                </div>
                ` : ''}
            </div>
        `;
        menuItemsContainer.appendChild(productElement);
    });
}

function setupFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(this.dataset.category);
        });
    });
}

function setupProductEvents() {
    // Evento delegado para controles de cantidad
    document.addEventListener('click', function(e) {
        // Control de cantidad
        const quantityBtn = e.target.closest('.quantity-btn');
        if (quantityBtn) {
            const input = quantityBtn.parentElement.querySelector('.quantity-input');
            let value = parseInt(input.value);
            
            if (quantityBtn.classList.contains('minus') && value > 1) {
                input.value = value - 1;
            } else if (quantityBtn.classList.contains('plus')) {
                input.value = value + 1;
            }
            return; // Salir para no procesar el clic como add-to-cart
        }
        
        // Evento para añadir al carrito
        const addToCartBtn = e.target.closest('.add-to-cart');
        if (addToCartBtn) {
            const productId = parseInt(addToCartBtn.dataset.id);
            const product = window.restaurantProducts.find(p => p.id === productId);
            if (product) {
                const quantityInput = addToCartBtn.closest('.item-actions').querySelector('.quantity-input');
                const quantity = parseInt(quantityInput.value) || 1;
                // Usar el precio correcto según el día
                const price = getProductPrice(product);
                // Disparar evento personalizado con la cantidad y precio correcto
                const event = new CustomEvent('productAddedToCart', {
                    detail: { product: { ...product, price }, quantity }
                });
                document.dispatchEvent(event);
                // Mostrar feedback visual
                const notification = document.createElement('div');
                notification.className = 'add-to-cart-feedback';
                notification.textContent = `+${quantity}`;
                addToCartBtn.appendChild(notification);
                setTimeout(() => {
                    notification.remove();
                }, 1000);
            }
        }
    });
}

function initProducts() {
    renderProducts('platos');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);
