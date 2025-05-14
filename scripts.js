const menuData = [
  { name: "Sate Kambing", price: 18000, priceStr: "Rp 18.000", image: "image/sate-kambing.jpg", detail: "10 tusuk" },
  { name: "Sate Sapi", price: 18000, priceStr: "Rp 18.000", image: "image/sate-sapi.jpg", detail: "10 tusuk" },
  { name: "Sate Thaican", price: 18000, priceStr: "Rp 18.000", image: "image/sate-thaican.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Campur Kulit", price: 15000, priceStr: "Rp 15.000", image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Polos", price: 18000, priceStr: "Rp 18.000", image: "image/sate-ayam.jpg", detail: "10 tusuk" },
  { name: "Sate Kambing + Lontong", price: 23000, priceStr: "Rp 23.000", image: "image/sate-kambing.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Sapi + Lontong", price: 23000, priceStr: "Rp 23.000", image: "image/sate-sapi.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Thaican + Lontong", price: 23000, priceStr: "Rp 23.000", image: "image/sate-thaican.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit + Lontong", price: 20000, priceStr: "Rp 20.000", image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Polos + Lontong", price: 23000, priceStr: "Rp 23.000", image: "image/sate-ayam.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Kambing + Nasi", price: 23000, priceStr: "Rp 23.000", image: "image/sate-kambing.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi + Nasi", price: 23000, priceStr: "Rp 23.000", image: "image/sate-sapi.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican + Nasi", price: 20000, priceStr: "Rp 20.000", image: "image/sate-thaican.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit + Nasi", price: 20000, priceStr: "Rp 20.000", image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Polos + Nasi", price: 23000, priceStr: "Rp 23.000", image: "image/sate-ayam.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Kambing", price: 27000, priceStr: "Rp 27.000", image: "image/sate-kambing.jpg", detail: "15 tusuk" },
  { name: "Sate Sapi", price: 27000, priceStr: "Rp 27.000", image: "image/sate-sapi.jpg", detail: "15 tusuk" },
  { name: "Sate Thaican", price: 23000, priceStr: "Rp 23.000", image: "image/sate-thaican.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Campur Kulit", price: 23000, priceStr: "Rp 23.000", image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Polos", price: 27000, priceStr: "Rp 27.000", image: "image/sate-ayam.jpg", detail: "15 tusuk" },
  { name: "Sate Kambing + Lontong", price: 32000, priceStr: "Rp 32.000", image: "image/sate-kambing.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Sapi + Lontong", price: 32000, priceStr: "Rp 32.000", image: "image/sate-sapi.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Polos + Lontong", price: 32000, priceStr: "Rp 32.000", image: "image/sate-ayam.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit + Lontong", price: 28000, priceStr: "Rp 28.000", image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Thaican + Lontong", price: 28000, priceStr: "Rp 28.000", image: "image/sate-thaican.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Kambing + Nasi", price: 32000, priceStr: "Rp 32.000", image: "image/sate-kambing.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi + Nasi", price: 32000, priceStr: "Rp 32.000", image: "image/sate-sapi.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Polos + Nasi", price: 32000, priceStr: "Rp 32.000", image: "image/sate-ayam.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit + Nasi", price: 28000, priceStr: "Rp 28.000", image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican + Nasi", price: 28000, priceStr: "Rp 28.000", image: "image/sate-thaican.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Soto Ayam", price: 15000, priceStr: "Rp 15.000", image: "image/soto-ayam.jpg", detail: "Tanpa tambahan" },
  { name: "Soto Ayam + Lontong", price: 20000, priceStr: "Rp 20.000", image: "image/soto-ayam.jpg", detail: "Dengan lontong" },
  { name: "Soto Ayam + Nasi", price: 20000, priceStr: "Rp 20.000", image: "image/soto-ayam.jpg", detail: "Dengan nasi" },
  { name: "Lontong", price: 5000, priceStr: "Rp 5.000", image: "image/lontong.jpg", detail: "2 buah lontong" },
  { name: "Nasi", price: 5000, priceStr: "Rp 5.000", image: "image/nasi.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Udang", price: 2000, priceStr: "Rp 2.000", image: "image/kerupuk-udang.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Black", price: 2500, priceStr: "Rp 2.500", image: "image/kerupuk-black.jpg", detail: "2 kerupuk" }
];

let cart = [];

const menuList = document.getElementById('menuList');
const cartCount = document.getElementById('cartCount');
const checkoutList = document.getElementById('checkoutList');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutBtn = document.getElementById('checkoutBtn');

function renderMenu() {
  menuList.innerHTML = "";
  menuData.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.tabIndex = 0;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    li.appendChild(img);

    const desc = document.createElement('p');
    desc.className = 'description';
    desc.textContent = item.name;
    li.appendChild(desc);

    const price = document.createElement('p');
    price.className = 'price';
    price.textContent = item.priceStr;
    li.appendChild(price);

    if(item.detail) {
      const note = document.createElement('p');
      note.className = 'note';
      note.textContent = item.detail;
      li.appendChild(note);
    }

    const btn = document.createElement('button');
    btn.className = 'add-to-cart-btn';
    btn.textContent = 'Tambah ke Keranjang';
    btn.onclick = () => addToCart(index);
    li.appendChild(btn);

    menuList.appendChild(li);
  });
}

function addToCart(index) {
  const item = menuData[index];
  const existing = cart.find(i => i.name === item.name);
  if(existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCartCount();
  alert(`"${item.name}" berhasil ditambahkan ke keranjang!`);
}

function updateCartCount() {
  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
  cartCount.textContent = totalQty;
}

function renderCheckout() {
  checkoutList.innerHTML = "";
  let total = 0;
  cart.forEach((item, idx) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - ${item.priceStr} x ${item.qty}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '✖';
    removeBtn.style.marginLeft = '8px';
    removeBtn.onclick = () => {
      cart.splice(idx, 1);
      renderCheckout();
      updateCartCount();
    };

    li.appendChild(removeBtn);
    checkoutList.appendChild(li);

    total += item.price * item.qty;
  });

  checkoutTotal.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
}

function sendToWhatsApp() {
  if(cart.length === 0) {
    alert('Keranjang kosong!');
    return;
  }
  const phoneNumber = "62882000611588";
  let message = "Halo, saya ingin memesan:\n";
  cart.forEach(item => {
    message += `- ${item.name} x${item.qty}\n`;
  });
  message += `Total: Rp ${cart.reduce((acc, item) => acc + item.price * item.qty, 0).toLocaleString('id-ID')}\nTerima kasih!`;

  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
}

// Navigation
const navLinks = document.querySelectorAll('nav a.nav-link');
const sections = {
  menuSection: document.getElementById('menuSection'),
  aboutSection: document.getElementById('aboutSection'),
  checkoutSection: document.getElementById('checkoutSection'),
};

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    const sectionToShow = sections[link.getAttribute('data-section')];
    Object.values(sections).forEach(s => s.classList.add('hidden'));
    sectionToShow.classList.remove('hidden');

    // Render checkout page everytime opened to update
    if(link.getAttribute('data-section') === 'checkoutSection') {
      renderCheckout();
    }
  });
});

// Initialize
renderMenu();
updateCartCount();
