const productCatalog = document.querySelector('.product-catalog');
const productDetails = document.querySelector('.product-details');
const productImage = document.querySelector('.product-image');
const productName = document.querySelector('.product-name');
const productDescription = document.querySelector('.product-description');
const productPrice = document.querySelector('.product-price');

// Datos de ejemplo para los productos
const products = [
    {
        id: 1,
        name: 'Zapato de gala ',
        description: 'Zapato de vestir color negro de tiros para caballero.',
        price: 59.99,
        image: '/Imagenes/Cat.Hombre/imgM1.jpg'
    },
    { 
        id: 2,
        name: 'Zapato de vestir',
        description: 'Zapato de vestir color nego de uso casual para caballeros.',
        price: 89.99,
        image: '/Imagenes/Cat.Hombre/imgM2.jpg'
    },
    // Agrega más productos aquí
    {
        id: 3,
        name: 'Zapato de uso casual',
        description: 'Zapato de uso casual color crema de tirantes.',
        price: 69.99,
        image: '/Imagenes/Cat.Hombre/imgM3.jpg'
    },
    {
        id: 4,
        name: 'Zapato de Piel',
        description: 'Zapato de piel color negro y tirantes para caballeros.',
        price: 49.99,
        image: '/Imagenes/Cat.Hombre/imgM4.jpg'
    },
    {
        id: 5,
        name: 'Botas de cuero',
        description: 'Botas de cuero color nego y tirantes para caballeros .',
        price: 99.99,
        image: '/Imagenes/Cat.Hombre/imgM5.jpg'
    },
    {
        id: 6,
        name: 'Tenis de uso casual',
        description: 'Zapato de uso casual color gris y blanco con tirantes para caballeros',
        price: 39.99,
        image: '/Imagenes/Cat.Hombre/imgM6.jpg'
    },
    {
        id: 7,
        name: 'Tenis sport negro',
        description: 'Tinis Sport color negro para caballeros.',
        price: 69.99,
        image: '/Imagenes/Cat.Hombre/imgM7.jpg'
    },
    {
        id: 8,
        name: 'Tenis sport',
        description: 'Tenis sport color blanco y azul para caballeros.',
        price: 89.99,
        image: '/Imagenes/Cat.Hombre/imgM8.jpg'
    },
    {
        id: 9,
        name: 'Alpargata de cuero',
        description: 'Alpargata de cuero color negro para caballeros.',
        price: 29.99,
        image: '/Imagenes/Cat.Hombre/imgM9.jpg'
    },
    {
        id: 10,
        name: 'Tenis sport',
        description: 'Tenis sports color blanco para caballeros.',
        price: 59.99,
        image: '/Imagenes/Cat.Hombre/imgM10.jpg'
    },
    {
        id: 11,
        name: 'Converse altos',
        description: 'Converse altos de color blanco  par caballeros.',
        price: 39.99,
        image: '/Imagenes/Cat.Hombre/imgM11.jpg'
    },
    {
        id: 12,
        name: 'Tenis sport negro',
        description: 'Tenis sport de color negro para caballeros.',
        price: 29.99,
        image: '/Imagenes/Cat.Hombre/imgM12.jpg'
    },
    {
        id: 13,
        name: 'Tenis deportivo',
        description: 'Tenis deportivo para atleta color negro y gris.',
        price: 39.99,
        image: '/Imagenes/Cat.Hombre/imgM13.jpg'
    },
    {
        id: 14,
        name: 'Tenis uso casual',
        description: 'Tenis uso casual color negro para caballeros.',
        price: 29.99,
        image: '/Imagenes/Cat.Hombre/imgM14.jpg'
    },
    {
        id: 15,
        name: 'Tenis deportivo',
        description: 'Tenis deportivo color crema y negro para caballeros.',
        price: 29.99,
        image: '/Imagenes/Cat.Hombre/imgM15.jpg'
    },
    {
        id: 16,
        name: 'Tenis sport',
        description: 'Tenis sport para uso casul para caballeros.',
        price: 39.99,
        image: '/Imagenes/Cat.Hombre/imgM16.jpg'
    },
    {
        id: 17,
        name: 'Tenis altos',
        description: 'Tenis altos color blanco y verte para caballeros.',
        price: 89.99,
        image: '/Imagenes/Cat.Hombre/imgM17.jpg'
    },
    {
        id: 18,
        name: 'Botas de cuero',
        description: 'Botas de cuero color negro para caballeros.',
        price: 89.99,
        image: '/Imagenes/Cat.Hombre/imgM18.jpg'
    },
    {
        id: 19,
        name: 'Botas de Piel',
        description: 'Botas de pierl color marron para caballeros.',
        price: 79.99,
        image: '/Imagenes/Cat.Hombre/imgM19.jpg'
    },
    {
        id: 20,
        name: 'Botines de gala',
        description: 'Botines de gala color marron para caballeros.',
        price: 99.99,
        image: '/Imagenes/Cat.Hombre/imgM20.jpg'
    },
    

];

// Función para renderizar el catálogo de productos
function renderProductCatalog() {
    products.forEach(product => {
        const productBox = document.createElement('div');
        productBox.classList.add('product-box');
        productBox.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button class="buy-button" data-id=1"${product.id}">Comprar</button>
        `;
        productBox.querySelector('.buy-button').addEventListener('click', (event) => {
            event.stopPropagation();
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            window.location.href = '/Html/VistaPago.html';
        });
        productBox.addEventListener('click', () => showProductDetails(product));
        productCatalog.appendChild(productBox);
    });
}

// Función para mostrar los detalles del producto
function showProductDetails(product) {
    productImage.src = product.image;
    productName.textContent = product.name;
    productDescription.textContent = product.description;
    productPrice.textContent = `$${product.price}`;
    productDetails.style.display = 'flex';
}

// Función para cerrar los detalles del producto
function closeProductDetails() {
    productDetails.style.display = 'none';
}

// Agrega un evento de clic al documento para cerrar los detalles del producto
document.addEventListener('click', (event) => {
    if (event.target === productDetails) {
        closeProductDetails();
    }
});

// Renderiza el catálogo de productos
renderProductCatalog();
