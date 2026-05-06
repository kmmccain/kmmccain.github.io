const products = [
    { id: 1, name: 'Expectations Vol 2', image: "image/aden1.jpg", price: 25.00},
    { id: 2, name: 'Home Decor', image: "image/buch2.jpg", price: 40.00},
    { id: 3, name: 'Kylie', image: "image/char1.jpg", price: 35.00},
    { id: 4, name: 'Ethereal', image: "image/val1.jpg", price: 30.00},
    { id: 5, name: 'Groovy', image: "image/kas1.png", price: 30.00},
	{ id: 6, name: 'Beauty is Pain', image: "image/kas2.jpg", price: 40.00}
];

function getCart() {
    const cartText = localStorage.getItem('cart');
    return cartText ? JSON.parse(cartText) : [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function findProduct(productId) {
    return products.find(p => p.id === productId);
}

function getCartTotal(cart) {
    return cart.reduce((total, item) => total + (item.price), 0);
}

function buildSelect(options, id, selectedValue) {
    let html = `<select id="${id}">`;
    options.forEach(opt => {
        const selected = String(opt) === String(selectedValue) ? 'selected' : '';
        html += `<option value="${opt}" ${selected}>${opt}</option>`;
    });
    return html + '</select>';
}

function buildCartSelect(options, selectedValue, index, fieldName) {
    let html = `<select onchange="changeOption(${index}, '${fieldName}', this.value)">`;
    options.forEach(opt => {
        const selected = String(opt) === String(selectedValue) ? 'selected' : '';
        html += `<option value="${opt}" ${selected}>${opt}</option>`;
    });
    return html + '</select>';
}