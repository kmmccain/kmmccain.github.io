function clearCart() {
    localStorage.removeItem("cart");
}

function goHome() {
    window.location.href = "index.html"; 
    // change this if your gallery page has a different name
}

document.addEventListener("DOMContentLoaded", () => {
    // Clear cart when page loads
    clearCart();

});