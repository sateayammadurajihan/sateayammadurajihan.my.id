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

let cartItems = [];

function formatCurrency(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  let totalCount = 0;
  cartItems.forEach(item => {
    totalCount += item.quantity;
  });
  cartCount.textContent = totalCount;
}

function updateCartUI() {
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');
  cartList.innerHTML = "";

  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalPrice += item.price * item.quantity;

    const li = document.createElement('li');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${item.name} - ${formatCurrency(item.price)}`;
    li.appendChild(nameSpan);

    // Button decrement
    const decBtn = document.createElement('button');
    decBtn.textContent = "-";
    decBtn.setAttribute('aria-label', `Kurangi jumlah ${item.name}`);
    decBtn.addEventListener('click', () => {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cartItems.splice(index, 1);
      }
      updateCartCount();
      updateCartUI();
    });
    li.appendChild(decBtn);

    // Quantity text
    const qtySpan = document.createElement('span');
    qtySpan.textContent = item.quantity;
    qtySpan.setAttribute('aria-label', `Jumlah ${item.name}`);
    qtySpan.style.margin = "0 8px";
    li.appendChild(qtySpan);

    // Button increment
    const incBtn = document.createElement('button');
    incBtn.textContent = "+";
    incBtn.setAttribute('aria-label', `Tambah jumlah ${item.name}`);
    incBtn.addEventListener('click', () => {
      item.quantity++;
      updateCartCount();
      updateCartUI();
    });
    li.appendChild(incBtn);

    // Button remove
    const remBtn = document.createElement('button');
    remBtn.textContent = "✕";
    remBtn.setAttribute('aria-label', `Hapus ${item.name} dari keranjang`);
    remBtn.addEventListener('click', () => {
      cartItems.splice(index, 1);
      updateCartCount();
      updateCartUI();
    });
    li.appendChild(remBtn);

    cartList.appendChild(li);
  });

  cartTotal.textContent = `Total: ${formatCurrency(totalPrice)}`;
}

function addToCart(item) {
  const index = cartItems.findIndex(i => i.name === item.name);
  if (index >= 0) {
    cartItems[index].quantity += 1;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }
  updateCartCount();
  updateCartUI();
}

document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menuList');

  menuData.forEach(item => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.tabIndex = 0;

    if (item.image) {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.className = 'menu-image';
      li.appendChild(img);
    }

    const desc = document.createElement('p');
    desc.textContent = item.name;
    desc.className = 'description';
    li.appendChild(desc);

    const price = document.createElement('p');
    price.textContent = formatCurrency(item.price);
    price.className = 'price';
    li.appendChild(price);

    if (item.detail) {
      const note = document.createElement('p');
      note.textContent = item.detail;
      note.className = 'note';
      li.appendChild(note);
    }

    const btn = document.createElement('button');
    btn.textContent = "Tambah ke Keranjang";
    btn.className = "btn-add-cart";
    btn.addEventListener('click', () => addToCart(item));
    li.appendChild(btn);

    menuList.appendChild(li);
  });

  // Clear cart button
  document.getElementById('clearCartBtn').addEventListener('click', () => {
    cartItems = [];
    updateCartCount();
    updateCartUI();
  });
});
