const products = [
    { id: 1, name: "Placa de video MSI 1080TI", price: 175000 },
    { id: 2, name: "Mouse Hyperx", price: 45000 },
    { id: 3, name: "Auriculares", price: 78000 }
];

const cart = JSON.parse(localStorage.getItem('cart')) || [];

function showProducts() {
    const productListUl = document.getElementById('product-list-ul');
    products.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${product.name} - $${product.price.toFixed(2)}
            <button class="add-button" data-id="${product.id}">Agregar</button>
        `;
        productListUl.appendChild(listItem);
    });
   
    const addButtons = document.querySelectorAll('.add-button');
    addButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const selectedProduct = products.find(product => product.id === productId);
            if (selectedProduct) {
                cart.push(selectedProduct);
                updateCart();
            }
        });
    });
}

function updateCart() {
    const cartList = document.getElementById('cart-list');  
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach((product, index) => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price.toFixed(2)}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.addEventListener('click', () => {
            cart.splice(index, 1);
            updateCart();
        });
        cartItem.appendChild(removeButton);
        cartList.appendChild(cartItem);
        total += product.price;
    });
    const totalElement = document.getElementById('total');
    totalElement.textContent = total.toFixed(2);

    localStorage.setItem('cart', JSON.stringify(cart));
}

showProducts();
updateCart();
const checkoutButton = document.getElementById('checkout-button');
checkoutButton.addEventListener('click', () => {
    alert('Muchas gracias por su compra');
    cart.length = 0;
    updateCart();
});
