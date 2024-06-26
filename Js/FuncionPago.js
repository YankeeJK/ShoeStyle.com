document.addEventListener('DOMContentLoaded', function() {
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));
    
    if (selectedProduct) {
        document.querySelector('.product-image').src = selectedProduct.image;
        document.querySelector('.product-name').textContent = selectedProduct.name;
        document.querySelector('.product-description').textContent = selectedProduct.description;
        document.querySelector('.product-price').textContent = `$${selectedProduct.price}`;
    }

    // Manejar el botón de pago
    const payButton = document.getElementById('pay-button');
    payButton.addEventListener('click', handlePayment);

    // Mostrar detalles adicionales de tarjeta de crédito si se selecciona
    document.getElementById('credit-card').addEventListener('change', toggleCardDetails);
    document.getElementById('paypal').addEventListener('change', toggleCardDetails);
    document.getElementById('bank-transfer').addEventListener('change', toggleCardDetails);
});

function toggleCardDetails() {
    const cardDetails = document.getElementById('credit-card-details');
    if (document.getElementById('credit-card').checked) {
        cardDetails.style.display = 'block';
    } else {
        cardDetails.style.display = 'none';
    }
}

function handlePayment() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    let card = null;

    if (paymentMethod === 'credit-card') {
        card = document.getElementById('card').value;
    }

    if (name && email && address && (paymentMethod !== 'credit-card' || card)) {
        const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

        // Simular el registro de la compra en una base de datos
        const purchaseData = {
            productId: selectedProduct.id,
            name: name,
            email: email,
            address: address,
            paymentMethod: paymentMethod,
            card: card,
            price: selectedProduct.price
        };

        console.log('Compra registrada:', purchaseData);
        alert('Compra realizada con éxito');

        // Aquí puedes agregar el código para enviar `purchaseData` a tu servidor o base de datos
        // Ejemplo:
        // fetch('/your-server-endpoint', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(purchaseData)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log('Success:', data);
        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        // });
    } else {
        alert('Por favor, complete todos los campos');
    }
}
