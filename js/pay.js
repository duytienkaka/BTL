const productPriceInput = document.getElementById('productPrice');
const productQuantityInput = document.getElementById('productQuantity');
const totalPriceInput = document.getElementById('totalPrice');
function calculateTotalPrice() {
    const price = parseFloat(productPriceInput.value);
    const quantity = parseInt(productQuantityInput.value);
    const total = (price * quantity).toFixed(2);
    totalPriceInput.value = total;
}
productQuantityInput.addEventListener('input', calculateTotalPrice);
calculateTotalPrice();