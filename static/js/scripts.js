const BASE_URL = window.location.origin;

const menuData = [
  { name: "Sate Kambing", price: 18000, image: "/static/image/sate-thaican.jpg", detail: "10 tusuk" },
  { name: "Sate Sapi", price: 18000, image: "/static/image/sate-sapi.jpg", detail: "10 tusuk" },
  { name: "Sate Thaican", price: 18000, image: "/static/image/sate-thaican.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Campur Kulit", price: 15000, image: "/static/image/sate-ayam-kulit.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Polos", price: 18000, image: "/static/image/sate-ayam.jpg", detail: "10 tusuk" },
  { name: "Sate Kambing + Lontong", price: 23000, image: "/static/image/sate-kambing.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Sapi + Lontong", price: 23000, image: "/static/image/sate-sapi.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Thaican + Lontong", price: 23000, image: "/static/image/sate-thaican.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit + Lontong", price: 20000, image: "/static/image/sate-ayam-kulit.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Polos + Lontong", price: 23000, image: "/static/image/sate-ayam.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Kambing + Nasi", price: 23000, image: "/static/image/sate-kambing.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi + Nasi", price: 23000, image: "/static/image/sate-sapi.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican + Nasi", price: 20000, image: "/static/image/sate-thaican.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit + Nasi", price: 20000, image: "/static/image/sate-ayam-kulit.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Polos + Nasi", price: 23000, image: "/static/image/sate-ayam.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Kambing", price: 27000, image: "/static/image/sate-kambing.jpg", detail: "15 tusuk" },
  { name: "Sate Sapi", price: 27000, image: "/static/image/sate-sapi.jpg", detail: "15 tusuk" },
  { name: "Sate Thaican", price: 23000, image: "/static/image/sate-thaican.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Campur Kulit", price: 23000, image: "/static/image/sate-ayam-kulit.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Polos", price: 27000, image: "/static/image/sate-ayam.jpg", detail: "15 tusuk" },
  { name: "Sate Kambing + Lontong", price: 32000, image: "/static/image/sate-kambing.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Sapi + Lontong", price: 32000, image: "/static/image/sate-sapi.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Polos + Lontong", price: 32000, image: "/static/image/sate-ayam.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit + Lontong", price: 28000, image: "/static/image/sate-ayam-kulit.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Thaican + Lontong", price: 28000, image: "/static/image/sate-thaican.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Kambing + Nasi", price: 32000, image: "/static/image/sate-kambing.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi + Nasi", price: 32000, image: "/static/image/sate-sapi.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Polos + Nasi", price: 32000, image: "/static/image/sate-ayam.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit + Nasi", price: 28000, image: "/static/image/sate-ayam-kulit.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican + Nasi", price: 28000, image: "/static/image/sate-thaican.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Soto Ayam", price: 15000, image: "/static/image/soto-ayam.jpg", detail: "Tanpa tambahan" },
  { name: "Soto Ayam + Lontong", price: 20000, image: "/static/image/soto-ayam.jpg", detail: "Dengan lontong" },
  { name: "Soto Ayam + Nasi", price: 20000, image: "/static/image/soto-ayam.jpg", detail: "Dengan nasi" },
  { name: "Lontong", price: 5000, image: "/static/image/lontong.jpg", detail: "2 buah lontong" },
  { name: "Nasi", price: 5000, image: "/static/image/nasi.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Udang", price: 2000, image: "/static/image/kerupuk-udang.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Black", price: 2500, image: "/static/image/kerupuk-black.jpg", detail: "2 kerupuk" }
];

let cartItems = [];

function formatCurrency(num) {
  return "Rp " + num.toLocaleString("id-ID");
}

function updateCartCount() {
  const cartCountNav = document.getElementById('cartCountNav');
  let totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCountNav) cartCountNav.textContent = `(${totalCount})`;
}

function updateCartUI() {
  const cartList = document.getElementById('checkoutList');
  const cartTotal = document.getElementById('checkoutTotal');
  cartList.innerHTML = "";
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalPrice += item.price * item.quantity;
    const li = document.createElement('li');
    li.className = 'checkout-item';
    li.innerHTML = `
      <span>${item.name} - ${formatCurrency(item.price * item.quantity)}</span>
      <button onclick="changeQty(${index}, -1)">-</button>
      <span>${item.quantity}</span>
      <button onclick="changeQty(${index}, 1)">+</button>
      <button onclick="removeItem(${index})">✕</button>
    `;
    cartList.appendChild(li);
  });

  if (cartTotal) cartTotal.textContent = `Total: ${formatCurrency(totalPrice)}`;
}

function changeQty(index, delta) {
  cartItems[index].quantity += delta;
  if (cartItems[index].quantity <= 0) cartItems.splice(index, 1);
  updateCartCount();
  updateCartUI();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  updateCartCount();
  updateCartUI();
}

function addToCart(item) {
  const found = cartItems.find(i => i.name === item.name);
  if (found) {
    found.quantity++;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }
  updateCartCount();
  updateCartUI();
}

function animateAboutSection() {
  document.querySelectorAll('#aboutSection .about-paragraph').forEach((p, i) => {
    p.style.opacity = '0';
    p.style.transform = 'translateY(20px)';
    p.style.transition = `opacity 0.8s ease ${i * 0.2}s, transform 0.8s ease ${i * 0.2}s`;
    setTimeout(() => {
      p.style.opacity = '1';
      p.style.transform = 'translateY(0)';
    }, 50);
  });
}

function fetchTestimonials() {
  fetch(`${BASE_URL}/api/testimonials`)
    .then(res => res.json())
    .then(data => {
      const list = document.getElementById('testimonialsList');
      list.innerHTML = '';
      data.forEach(t => {
        const div = document.createElement('div');
        div.className = 'testimonial-item';
        div.innerHTML = `
          <p class="testimonial-name">${t.name}</p>
          <p class="testimonial-message">${t.message}</p>
          <p class="testimonial-rating">${'★'.repeat(t.rating)}${'☆'.repeat(5 - t.rating)}</p>
        `;
        list.appendChild(div);
      });
    })
    .catch(() => {
      const list = document.getElementById('testimonialsList');
      list.innerHTML = '<p>Gagal memuat testimoni.</p>';
    });
}

function submitTestimonial() {
  const form = document.getElementById('testimonialForm');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const rating = parseInt(document.getElementById('rating').value);

    fetch(`${BASE_URL}/api/testimonials`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message, rating })
    })
    .then(res => {
      if (!res.ok) throw new Error();
      alert('Testimoni berhasil dikirim!');
      form.reset();
      fetchTestimonials();
    })
    .catch(() => alert('Gagal menyimpan testimoni.'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menuGrid');
  menuData.forEach(item => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="menu-image">
      <p class="description">${item.name}</p>
      <p class="price">${formatCurrency(item.price)}</p>
      <p class="note">${item.detail}</p>
      <button class="btn-add-cart">Tambah ke Keranjang</button>
    `;
    li.querySelector('button').addEventListener('click', () => addToCart(item));
    menuList.appendChild(li);
  });

  document.querySelectorAll('.nav-link, .cta-button').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const id = link.dataset.target || link.getAttribute('href').substring(1);
      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const target = document.getElementById(id);
      if (target) {
        target.classList.add('active');
        link.classList.add('active');
        if (id === 'aboutSection') animateAboutSection();
        if (id === 'testimonialsSection') {
          fetchTestimonials();
          submitTestimonial();
        }
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const clearCartBtn = document.getElementById("clearCartBtn");
  const checkoutBtn = document.getElementById("checkoutBtn");

  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      cartItems = [];
      updateCartCount();
      updateCartUI();
    });
  }

  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      if (!cartItems.length) return alert("Keranjang kosong!");
      let msg = "Halo, saya ingin memesan:\n" + cartItems.map(i => `- ${i.name} x${i.quantity} = ${formatCurrency(i.price * i.quantity)}`).join("\n");
      msg += `\nTotal: ${formatCurrency(cartItems.reduce((a, b) => a + b.price * b.quantity, 0))}\n\nTerima kasih!`;
      window.open(`https://wa.me/6285759858593?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  const loggedIn = document.cookie.includes("session_user=");
  if (!loggedIn) {
    const cart = document.getElementById("checkoutSection");
    if (cart) cart.innerHTML = "<p>Silakan login untuk mengakses keranjang belanja.</p>";
  }

  const userWelcome = document.getElementById("userWelcome");
  const cookies = Object.fromEntries(document.cookie.split('; ').map(c => c.split('=')));
  if (cookies.session_user && userWelcome) {
    userWelcome.textContent = `Halo, ${cookies.session_user}`;
    userWelcome.style.display = 'inline';
    document.getElementById("loginNav").style.display = "none";
    const nameLabel = document.getElementById("userMenuName");
    if (nameLabel) nameLabel.textContent = `Halo, ${cookies.session_user}`;
  }

  const userIcon = document.querySelector(".user-icon");
  const userMenu = document.getElementById("userMenu");
  if (userIcon && userMenu) {
    userIcon.addEventListener("click", () => {
      userMenu.classList.toggle("hidden");
    });
  }

  const params = new URLSearchParams(window.location.search);
  const section = params.get('target');
  if (section) {
    const link = document.querySelector(`[data-target="${section}"]`);
    if (link) link.click();
  }

  updateCartCount();
  updateCartUI();
});
