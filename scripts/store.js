function displayProducts() {
    const productList = document.getElementById('product-list');
    if (!productList) return;

    let html = '';
    products.forEach(product => {
        html += `<div class="product-card">
            <h2>${product.name}</h2>
            <img src="${product.image}" />
            <p>$${product.price.toFixed(2)}</p>
            <button class="button secondary" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>`;
    });
    productList.innerHTML = html;
}

function addToCart(productId) {
    const product = findProduct(productId);
    const cart = getCart();

    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }

    saveCart(cart);
    alert(`${product.name} added to cart.`);
}