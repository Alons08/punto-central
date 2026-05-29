// Array completo de productos
const products = [
    // POLLOS A LA BRASA
    {
        id: 1,
        name: "1/4 Pollo a la Brasa",
        category: "pollos-a-la-brasa",
        price: 15.00,
        specialPrice: null, // Si aplica, ej: { days: [3, 6], price: 12.00 }
        description: "1/4 de pollo a la brasa acompañado con papas y ensalada.",
        image: "./images/menu/pollo-un-cuarto.jpg",
        available: true
    },
    {
        id: 2,
        name: "1/2 Pollo a la Brasa",
        category: "pollos-a-la-brasa",
        price: 28.00,
        specialPrice: null,
        description: "1/2 pollo a la brasa acompañado con papas y ensalada.",
        image: "./images/menu/pollo-medio.jpg",
        available: true
    },
    {
        id: 3,
        name: "1 Pollo Entero",
        category: "pollos-a-la-brasa",
        price: 55.00,
        specialPrice: null,
        description: "1 pollo entero a la brasa acompañado con papas y ensalada.",
        image: "./images/menu/pollo-entero.jpg",
        available: true
    },

    // SALCHIPAPAS
    {
        id: 4,
        name: "Salchipapa Simple",
        category: "salchipapas",
        price: 9.00,
        specialPrice: null,
        description: "Clásica salchipapa con papas fritas y hot dog seleccionados.",
        image: "./images/menu/salchipapa-simple.jpg",
        available: true
    },
    {
        id: 5,
        name: "Salchipapa Alemana",
        category: "salchipapas",
        price: 12.00,
        specialPrice: null,
        description: "Deliciosa salchipapa con salchicha ahumada tipo alemana.",
        image: "./images/menu/salchipapa-alemana.jpg",
        available: true
    },
    {
        id: 6,
        name: "Salchipapa Escolar",
        category: "salchipapas",
        price: 5.00,
        specialPrice: null,
        description: "Porción ideal personal de salchipapa económica.",
        image: "./images/menu/salchipapa-escolar.jpg",
        available: true
    },

    // PLATOS EXTRAS
    {
        id: 7,
        name: "Mostro",
        category: "platos-extras",
        price: 17.00,
        specialPrice: null,
        description: "Contundente combinación de arroz chaufa con 1/4 de pollo a la brasa y papas.",
        image: "./images/menu/mostro.jpg",
        available: true
    },
    {
        id: 8,
        name: "1/8 Mostrito",
        category: "platos-extras",
        price: 11.00,
        specialPrice: null,
        description: "Arroz chaufa acompañado de 1/8 de pollo a la brasa y papas fritas.",
        image: "./images/menu/mostrito.jpg",
        available: true
    },
    {
        id: 9,
        name: "Chaufa de Pollo",
        category: "platos-extras",
        price: 12.00,
        specialPrice: null,
        description: "Clásico arroz chaufa al estilo chifa con trozos de pollo.",
        image: "./images/menu/chaufa-pollo.jpg",
        available: true
    },
    {
        id: 10,
        name: "Aeropuerto",
        category: "platos-extras",
        price: 12.00,
        specialPrice: null,
        description: "Combinación de arroz chaufa, tallarín saltado y frijolito chino.",
        image: "./images/menu/aeropuerto.jpg",
        available: true
    },

    // BEBIDAS (SIN ALCOHOL)
    {
        id: 11,
        name: "Jarra Maracuyá 1 Litro",
        category: "bebidas",
        price: 10.00,
        specialPrice: null,
        description: "Refrescante jugo natural de maracuyá de 1 litro.",
        image: "./images/menu/jarra-maracuya.jpg",
        available: true
    },
    {
        id: 12,
        name: "Maracuyá Frozen 1 Litro",
        category: "bebidas",
        price: 12.00,
        specialPrice: null,
        description: "Jugo de maracuyá granizado ultra helado de 1 litro.",
        image: "./images/menu/maracuya-frozen.jpg",
        available: true
    },
    {
        id: 13,
        name: "Media Jarra Maracuyá",
        category: "bebidas",
        price: 6.00,
        specialPrice: null,
        description: "Media jarra de jugo natural de maracuyá.",
        image: "./images/menu/media-jarra-maracuya.jpg",
        available: true
    },
    {
        id: 14,
        name: "Jarra Limonada 1 Litro",
        category: "bebidas",
        price: 10.00,
        specialPrice: null,
        description: "Limonada clásica preparada al momento de 1 litro.",
        image: "./images/menu/jarra-limonada.jpg",
        available: true
    },
    {
        id: 15,
        name: "Limonada Frozen 1 Litro",
        category: "bebidas",
        price: 12.00,
        specialPrice: null,
        description: "Limonada granizada y refrescante de 1 litro.",
        image: "./images/menu/limonada-frozen.jpg",
        available: true
    },
    {
        id: 16,
        name: "Media Jarra Limonada",
        category: "bebidas",
        price: 6.00,
        specialPrice: null,
        description: "Media jarra de limonada clásica natural.",
        image: "./images/menu/media-jarra-limonada.jpg",
        available: true
    },
    {
        id: 17,
        name: "Inka Cola 1 Litro",
        category: "bebidas",
        price: 9.00,
        specialPrice: null,
        description: "Gaseosa Inka Cola de 1 litro ideal para compartir.",
        image: "./images/menu/inkacola-1l.jpg",
        available: true
    },
    {
        id: 18,
        name: "Inka Cola 1 1/2 Litro",
        category: "bebidas",
        price: 12.00,
        specialPrice: null,
        description: "Gaseosa Inka Cola de 1.5 litros mediano.",
        image: "./images/menu/inkacola-1.5l.jpg",
        available: true
    },
    {
        id: 19,
        name: "Inka Cola Gordita",
        category: "bebidas",
        price: 6.00,
        specialPrice: null,
        description: "Gaseosa Inka Cola formato botella gordita.",
        image: "./images/menu/inkacola-gordita.jpg",
        available: true
    },
    {
        id: 20,
        name: "Inka Cola Personal Vidrio",
        category: "bebidas",
        price: 3.50,
        specialPrice: null,
        description: "Inka Cola personal en botella de vidrio retornable.",
        image: "./images/menu/inkacola-personal.jpg",
        available: true
    },
    {
        id: 21,
        name: "Coca Cola 1 Litro",
        category: "bebidas",
        price: 9.00,
        specialPrice: null,
        description: "Gaseosa Coca Cola sabor original de 1 litro.",
        image: "./images/menu/cocacola-1l.jpg",
        available: true
    },
    {
        id: 22,
        name: "Coca Cola 1 1/2 Litro",
        category: "bebidas",
        price: 12.00,
        specialPrice: null,
        description: "Gaseosa Coca Cola de 1.5 litros.",
        image: "./images/menu/cocacola-1.5l.jpg",
        available: true
    },
    {
        id: 23,
        name: "Coca Cola Personal",
        category: "bebidas",
        price: 3.50,
        specialPrice: null,
        description: "Gaseosa Coca Cola en formato personal.",
        image: "./images/menu/cocacola-personal.jpg",
        available: true
    },

    // CERVEZAS
    {
        id: 24,
        name: "Cerveza Cusqueña Trigo Grande",
        category: "cervezas",
        price: 12.00,
        specialPrice: null,
        description: "Cerveza Cusqueña de trigo en presentación botella grande.",
        image: "./images/menu/cerveza-cusquena-trigo.jpg",
        available: true
    },
    {
        id: 25,
        name: "Cerveza Pilsen Grande",
        category: "cervezas",
        price: 10.00,
        specialPrice: null,
        description: "Cerveza Pilsen Callao tradicional en botella grande.",
        image: "./images/menu/cerveza-pilsen.jpg",
        available: true
    },
    {
        id: 26,
        name: "Cerveza Negra Grande",
        category: "cervezas",
        price: 12.00,
        specialPrice: null,
        description: "Cerveza negra Cusqueña / Pilsen en botella grande.",
        image: "./images/menu/cerveza-negra.jpg",
        available: true
    },
    {
        id: 27,
        name: "Cerveza Cristal Grande",
        category: "cervezas",
        price: 10.00,
        specialPrice: null,
        description: "Cerveza Cristal en presentación botella grande.",
        image: "./images/menu/cerveza-cristal.jpg",
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

function renderProducts(category = 'pollos-a-la-brasa') {
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
    renderProducts('pollos-a-la-brasa');
    setupFilters();
    setupProductEvents();
}

document.addEventListener('DOMContentLoaded', initProducts);
