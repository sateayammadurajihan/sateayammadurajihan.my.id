const menuData = [
  { name: "Sate Kambing", price: 18000, image: "image/sate-kambing.jpg", detail: "10 tusuk" },
  { name: "Sate Sapi", price: 18000, image: "image/sate-sapi.jpg", detail: "10 tusuk" },
  { name: "Sate Thaican", price: 18000, image: "image/sate-thaican.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Campur Kulit", price: 15000, image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Polos", price: 18000, image: "image/sate-ayam.jpg", detail: "10 tusuk" },
  { name: "Sate Kambing + Lontong", price: 23000, image: "image/sate-kambing.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Sapi + Lontong", price: 23000, image: "image/sate-sapi.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Thaican + Lontong", price: 23000, image: "image/sate-thaican.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit + Lontong", price: 20000, image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Polos + Lontong", price: 23000, image: "image/sate-ayam.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Kambing + Nasi", price: 23000, image: "image/sate-kambing.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi + Nasi", price: 23000, image: "image/sate-sapi.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican + Nasi", price: 20000, image: "image/sate-thaican.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit + Nasi", price: 20000, image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Polos + Nasi", price: 23000, image: "image/sate-ayam.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Kambing", price: 27000, image: "image/sate-kambing.jpg", detail: "15 tusuk" },
  { name: "Sate Sapi", price: 27000, image: "image/sate-sapi.jpg", detail: "15 tusuk" },
  { name: "Sate Thaican", price: 23000, image: "image/sate-thaican.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Campur Kulit", price: 23000, image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Polos", price: 27000, image: "image/sate-ayam.jpg", detail: "15 tusuk" },
  { name: "Sate Kambing + Lontong", price: 32000, image: "image/sate-kambing.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Sapi + Lontong", price: 32000, image: "image/sate-sapi.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Polos + Lontong", price: 32000, image: "image/sate-ayam.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit + Lontong", price: 28000, image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Thaican + Lontong", price: 28000, image: "image/sate-thaican.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Kambing + Nasi", price: 32000, image: "image/sate-kambing.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi + Nasi", price: 32000, image: "image/sate-sapi.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Polos + Nasi", price: 32000, image: "image/sate-ayam.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit + Nasi", price: 28000, image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican + Nasi", price: 28000, image: "image/sate-thaican.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Soto Ayam", price: 15000, image: "image/soto-ayam.jpg", detail: "Tanpa tambahan" },
  { name: "Soto Ayam + Lontong", price: 20000, image: "image/soto-ayam.jpg", detail: "Dengan lontong" },
  { name: "Soto Ayam + Nasi", price: 20000, image: "image/soto-ayam.jpg", detail: "Dengan nasi" },
  { name: "Lontong", price: 5000, image: "image/lontong.jpg", detail: "2 buah lontong" },
  { name: "Nasi", price: 5000, image: "image/nasi.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Udang", price: 2000, image: "image/kerupuk-udang.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Black", price: 2500, image: "image/kerupuk-black.jpg", detail: "2 kerupuk" }
];

let cartItems = [];

function formatCurrency(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function updateCartCount() {
  const cartCountNav = document.getElementById('cartCountNav');
  let totalCount = 0;
  cartItems.forEach(item => totalCount += item.quantity);
  if(cartCountNav) cartCountNav.textContent = `${totalCount}`;
}

function updateCartUI() {
  const cartList = document.getElementById('checkoutList');
  const cartTotal = document.getElementById('checkoutTotal');
  cartList.innerHTML = "";

  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalPrice += item.price * item.quantity;

    const li = document.createElement('li');

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${item.name} - ${formatCurrency(item.price * item.quantity)}`;
    li.appendChild(nameSpan);

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

    const qtySpan = document.createElement('span');
    qtySpan.textContent = item.quantity;
    qtySpan.setAttribute('aria-label', `Jumlah ${item.name}`);
    qtySpan.style.margin = "0 8px";
    li.appendChild(qtySpan);

    const incBtn = document.createElement('button');
    incBtn.textContent = "+";
    incBtn.setAttribute('aria-label', `Tambah jumlah ${item.name}`);
    incBtn.addEventListener('click', () => {
      item.quantity++;
      updateCartCount();
      updateCartUI();
    });
    li.appendChild(incBtn);

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

  if(cartTotal) cartTotal.textContent = `Total: ${formatCurrency(totalPrice)}`;
}

function addToCart(item) {
  const index = cartItems.findIndex(i => i.name === item.name);
  if(index >= 0) {
    cartItems[index].quantity++;
  } else {
    cartItems.push({...item, quantity: 1});
  }
  updateCartCount();
  updateCartUI();
}

function animateAboutSection() {
  const aboutParagraphs = document.querySelectorAll('#aboutSection .about-paragraph');
  aboutParagraphs.forEach((p, index) => {
    p.style.opacity = '0';
    p.style.transform = 'translateY(20px)';
    p.style.transition = `opacity 0.8s ease ${index * 0.5}s, transform 0.8s ease ${index * 0.5}s`;
    setTimeout(() => {
      p.style.opacity = '1';
      p.style.transform = 'translateY(0)';
    }, 50);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menuGrid');

  menuData.forEach(item => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.tabIndex = 0;

    if(item.image) {
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

    if(item.detail) {
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

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');

      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));

      document.getElementById(targetId).classList.add('active');
      link.classList.add('active');

      if (targetId === 'aboutSection') {
        animateAboutSection();
      }
    });
  });

  const clearCartBtn = document.getElementById('clearCartBtn');
  if(clearCartBtn) {
    clearCartBtn.addEventListener('click', () => {
      cartItems = [];
      updateCartCount();
      updateCartUI();
    });
  }

  const checkoutBtn = document.getElementById('checkoutBtn');
  if(checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if(cartItems.length === 0) {
        alert('Keranjang belanja kosong!');
        return;
      }
      let pesan = "Halo, saya ingin memesan:\n";
      cartItems.forEach(item => {
        pesan += `- ${item.name} x${item.quantity} = ${formatCurrency(item.price * item.quantity)}\n`;
      });
      const totalHarga = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
      pesan += `Total: ${formatCurrency(totalHarga)}\n\nTerima kasih!`;

      const nomorWA = '6285759858593';
      const urlWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
      window.open(urlWA, '_blank');
    });
  }

  updateCartCount();
  updateCartUI();
});
