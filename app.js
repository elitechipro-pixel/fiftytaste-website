let cart = [];
let total = 0;

function scrollToMenu() {
  document.getElementById('menu').scrollIntoView({
    behavior: 'smooth'
  });
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;

  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById('cartItems');
  const totalDisplay = document.getElementById('total');

  cartItems.innerHTML = '';

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ₦${item.price}`;
    cartItems.appendChild(li);
  });

  totalDisplay.textContent = total;
}

function placeOrder() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;

  if (!name || !phone || !address) {
    alert('Please fill all fields');
    return;
  }

  let orderMessage = `NEW ORDER%0A%0A`;

  cart.forEach(item => {
    orderMessage += `${item.name} - ₦${item.price}%0A`;
  });

  orderMessage += `%0ATotal: ₦${total}`;
  orderMessage += `%0A%0AName: ${name}`;
  orderMessage += `%0APhone: ${phone}`;
  orderMessage += `%0AAddress: ${address}`;

  const whatsappNumber = "2349020200061";

  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${orderMessage}`;

  window.open(whatsappURL, '_blank');
}
