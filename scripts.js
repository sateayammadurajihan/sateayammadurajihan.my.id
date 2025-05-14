// Data menu lengkap
const menuData = [
  { name: "Sate Ayam Polos 10 Tusuk", price: 15000, image: "image/sate-ayam.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Campur Kulit 10 Tusuk", price: 15000, image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk" },
  { name: "Sate Thaican 10 Tusuk", price: 18000, image: "image/sate-thaican.jpg", detail: "10 tusuk" },
  { name: "Sate Sapi 10 Tusuk", price: 18000, image: "image/sate-sapi.jpg", detail: "10 tusuk" },
  { name: "Sate Kambing 10 Tusuk", price: 18000, image: "image/sate-kambing.jpg", detail: "10 tusuk" },

  { name: "Sate Ayam Polos 15 Tusuk", price: 27000, image: "image/sate-ayam.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Campur Kulit 15 Tusuk", price: 23000, image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk" },
  { name: "Sate Thaican 15 Tusuk", price: 23000, image: "image/sate-thaican.jpg", detail: "15 tusuk" },
  { name: "Sate Sapi 15 Tusuk", price: 27000, image: "image/sate-sapi.jpg", detail: "15 tusuk" },
  { name: "Sate Kambing 15 Tusuk", price: 27000, image: "image/sate-kambing.jpg", detail: "15 tusuk" },

  { name: "Lontong", price: 5000, image: "image/lontong.jpg", detail: "2 buah lontong" },

  { name: "Sate Ayam Polos 10 Tusuk + Lontong", price: 20000, image: "image/sate-ayam.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit 10 Tusuk + Lontong", price: 20000, image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Thaican 10 Tusuk + Lontong", price: 23000, image: "image/sate-thaican.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Sapi 10 Tusuk + Lontong", price: 23000, image: "image/sate-sapi.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Kambing 10 Tusuk + Lontong", price: 23000, image: "image/sate-kambing.jpg", detail: "10 tusuk + 2 buah lontong" },

  { name: "Sate Ayam Polos 15 Tusuk + Lontong", price: 28000, image: "image/sate-ayam.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit 15 Tusuk + Lontong", price: 28000, image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Thaican 15 Tusuk + Lontong", price: 28000, image: "image/sate-thaican.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Sapi 15 Tusuk + Lontong", price: 32000, image: "image/sate-sapi.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Kambing 15 Tusuk + Lontong", price: 32000, image: "image/sate-kambing.jpg", detail: "15 tusuk + 2 buah lontong" },

  { name: "Nasi", price: 5000, image: "image/nasi.jpg", detail: "1 bungkus" },

  { name: "Sate Ayam Polos 10 Tusuk + Nasi", price: 20000, image: "image/sate-ayam.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit 10 Tusuk + Nasi", price: 20000, image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican 10 Tusuk + Nasi", price: 23000, image: "image/sate-thaican.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi 10 Tusuk + Nasi", price: 23000, image: "image/sate-sapi.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Kambing 10 Tusuk + Nasi", price: 23000, image: "image/sate-kambing.jpg", detail: "10 tusuk + 1 bungkus nasi" },

  { name: "Sate Ayam Polos 15 Tusuk + Nasi", price: 32000, image: "image/sate-ayam.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit 15 Tusuk + Nasi", price: 28000, image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican 15 Tusuk + Nasi", price: 28000, image: "image/sate-thaican.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi 15 Tusuk + Nasi", price: 32000, image: "image/sate-sapi.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Kambing 15 Tusuk + Nasi", price: 32000, image: "image/sate-kambing.jpg", detail: "15 tusuk + 1 bungkus nasi" },

  { name: "Soto Ayam", price: 15000, image: "image/soto-ayam.jpg", detail: "Tanpa tambahan" },
  { name: "Soto Ayam + Lontong", price: 20000, image: "image/soto-ayam.jpg", detail: "Dengan lontong" },
  { name: "Soto Ayam + Nasi", price: 20000, image: "image/soto-ayam.jpg", detail: "Dengan nasi" },

  { name: "Kerupuk Udang", price: 2000, image: "image/kerupuk-udang.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Black", price: 2500, image: "image/kerupuk-black.jpg", detail: "2 kerupuk" }
];

// Keranjang belanja
const cart = [];

// Elemen DOM penting
const menuGrid = document.getElementById('menuGrid');
const checkoutList = document.getElementById('checkoutList');
const checkoutTotal = document.getElementById('checkoutTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const cartCountNav = document.getElementById('cartCountNav');

// Fungsi format harga menjadi "Rp 15.000"
function formatPrice(price) {
  return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
}

// Render menu ke halaman
function renderMenu() {
  menuGrid.innerHTML = '';
  menuData.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'menu-item';
    div.tabIndex = 0;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.className = 'menu-image';

    const desc = document.createElement('p');
    desc.textContent = item.name;
    desc.className = 'description';

    const price = document.createElement('p');
    price.textContent = formatPrice(item.price);
    price.className = 'price';

    const note = document.createElement('p');
    note.textContent = item.detail;
    note.className = 'note';

    const btn = document.createElement('button');
    btn.textContent = 'Tambah ke Keranjang';
    btn.addEventListener('click', () => addToCart(index));

    div.append(img, desc, price, note, btn);
    menuGrid.appendChild(div);
  });
}

// Render isi keranjang di halaman checkout
function renderCheckout() {
  checkoutList.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.qty;

    const li = document.createElement('li');
    li.textContent = `${item.name} - ${formatPrice(item.price)} × ${item.qty}`;

    const minusBtn = document.createElement('button');
    minusBtn.textContent = '-';
    minusBtn.addEventListener('click', () => {
      if (item.qty > 1) {
        item.qty--;
      } else {
        cart.splice(index, 1);
      }
      updateCart();
    });

    const plusBtn = document.createElement('button');
    plusBtn.textContent = '+';
    plusBtn.addEventListener('click', () => {
      item.qty++;
      updateCart();
    });

    const delBtn = document.createElement('button');
    delBtn.textContent = '×';
    delBtn.addEventListener('click', () => {
      cart.splice(index, 1);
      updateCart();
    });

    li.appendChild(minusBtn);
    li.appendChild(plusBtn);
    li.appendChild(delBtn);

    checkoutList.appendChild(li);
  });

  checkoutTotal.textContent = `Total: ${formatPrice(total)}`;
  cartCountNav.textContent = `(${cart.reduce((acc, cur) => acc + cur.qty, 0)})`;
}

// Tambah item ke keranjang
function addToCart(index) {
  const item = menuData[index];
  const existing = cart.find(c => c.name === item.name);

  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCart();
}

// Update tampilan keranjang
function updateCart() {
  renderCheckout();
}

// Event klik tombol checkout, kirim WA otomatis
checkoutBtn.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('Keranjang masih kosong!');
    return;
  }

  let message = 'Pesanan saya:%0A';
  cart.forEach(item => {
    message += `- ${item.name} x${item.qty} = ${formatPrice(item.price * item.qty)}%0A`;
  });
  message += `Total: ${formatPrice(cart.reduce((acc, cur) => acc + cur.price * cur.qty, 0))}`;

  const waLink = `https://wa.me/62882000611588?text=${message}`;
  window.open(waLink, '_blank');
});

// Navigasi dan inisialisasi halaman
window.addEventListener('DOMContentLoaded', () => {
  renderMenu();

  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');

  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      navLinks.forEach(l => l.classList.remove('active'));
      sections.forEach(sec => sec.classList.remove('active'));

      link.classList.add('active');
      const targetId = link.getAttribute('data-target');
      document.getElementById(targetId).classList.add('active');

      if (targetId === 'checkoutSection') {
        renderCheckout();
      }
    });
  });
});
