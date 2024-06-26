document.addEventListener('DOMContentLoaded', function() {
    const buyButton = document.getElementById('pay-button');
    const printButton = document.getElementById('print-button');
    
    buyButton.addEventListener('click', function() {
        const customerName = document.getElementById('name').value;
        const customerEmail = document.getElementById('email').value;
        const customerAddress = document.getElementById('address').value;
        
        const productName = document.querySelector('.product-name').textContent;
        const productDescription = document.querySelector('.product-description').textContent;
        const productPrice = document.querySelector('.product-price').textContent;
        
        const selectedSizes = [];
        document.querySelectorAll('.product-sizes input[type="checkbox"]:checked').forEach(checkbox => {
            selectedSizes.push(checkbox.nextElementSibling.textContent);
        });
        
        // Llenar los datos de la factura
        document.getElementById('invoice-customer-name').textContent = `Nombre: ${customerName}`;
        document.getElementById('invoice-customer-email').textContent = `Email: ${customerEmail}`;
        document.getElementById('invoice-customer-address').textContent = `Dirección: ${customerAddress}`;
        document.getElementById('invoice-product-name').textContent = `Producto: ${productName}`;
        document.getElementById('invoice-product-description').textContent = `Descripción: ${productDescription}`;
        document.getElementById('invoice-product-price').textContent = productPrice;
        document.getElementById('invoice-product-sizes').textContent = `Tamaños: ${selectedSizes.join(', ')}`;
        
        // Mostrar la factura
        document.getElementById('invoice').style.display = 'block';
    });
    
    printButton.addEventListener('click', function() {
        window.print();
    });
});

