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
        name: 'Zapatillas De Correa',
        description: 'Zapatillas de correa cómodas y ligeras para damas.',
        price: 59.99,
        image: '/Imagenes/Cat.Mujer/img1.jpg'
    },
    {
        id: 2,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img2.jpg'
    },
    // Agrega más productos aquí
    {
        id: 3,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img3.jpg'
    },
    {
        id: 4,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img4.jpg'
    },
    {
        id: 5,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img5.jpg'
    },
    {
        id: 6,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img6.jpg'
    },
    {
        id: 7,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img7.jpg'
    },
    {
        id: 8,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img8.jpg'
    },
    {
        id: 9,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img9.jpg'
    },
    {
        id: 10,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img10.jpg'
    },
    {
        id: 11,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img11.jpg'
    },
    {
        id: 12,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img12.jpg'
    },
    {
        id: 13,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img13.jpg'
    },
    {
        id: 14,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img14.jpg'
    },
    {
        id: 15,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img15.jpg'
    },
    {
        id: 16,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img16.jpg'
    },
    {
        id: 17,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img17.jpg'
    },
    {
        id: 18,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img18.jpg'
    },
    {
        id: 19,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img19.jpg'
    },
    {
        id: 20,
        name: 'Botas de Piel',
        description: 'Botas de piel color negro de alta calidad para mujer.',
        price: 89.99,
        image: '/Imagenes/Cat.Mujer/img20.jpg'
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
