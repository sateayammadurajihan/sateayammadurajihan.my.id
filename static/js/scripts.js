// scripts.js (FINAL VERSION TERINTEGRASI LOGIN VIA USER ICON)

// === Data Menu ===
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
  let totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  if(cartCountNav) cartCountNav.textContent = `(${totalCount})`;
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

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `${item.name} - ${formatCurrency(item.price * item.quantity)}`;
    li.appendChild(nameSpan);

    const decBtn = document.createElement('button');
    decBtn.textContent = "-";
    decBtn.addEventListener('click', () => {
      item.quantity > 1 ? item.quantity-- : cartItems.splice(index, 1);
      updateCartCount();
      updateCartUI();
    });
    li.appendChild(decBtn);

    const qtySpan = document.createElement('span');
    qtySpan.textContent = item.quantity;
    li.appendChild(qtySpan);

    const incBtn = document.createElement('button');
    incBtn.textContent = "+";
    incBtn.addEventListener('click', () => {
      item.quantity++;
      updateCartCount();
      updateCartUI();
    });
    li.appendChild(incBtn);

    const remBtn = document.createElement('button');
    remBtn.textContent = "✕";
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
  index >= 0 ? cartItems[index].quantity++ : cartItems.push({...item, quantity: 1});
  updateCartCount();
  updateCartUI();
}

function animateAboutSection() {
  const aboutParagraphs = document.querySelectorAll('#aboutSection .about-paragraph');
  aboutParagraphs.forEach((p, index) => {
    p.style.opacity = '0';
    p.style.transform = 'translateY(20px)';
    p.style.transition = `opacity 0.8s ease ${index * 0.2}s, transform 0.8s ease ${index * 0.2}s`;
    setTimeout(() => {
      p.style.opacity = '1';
      p.style.transform = 'translateY(0)';
    }, 50);
  });
}

function fetchTestimonials() {
  fetch('http://localhost:8080/api/testimonials')
    .then(response => response.json())
    .then(data => {
      const testimonialsList = document.getElementById('testimonialsList');
      testimonialsList.innerHTML = '';
      data.forEach(testimonial => {
        const div = document.createElement('div');
        div.className = 'testimonial-item';

        const name = document.createElement('p');
        name.className = 'testimonial-name';
        name.textContent = testimonial.name;
        div.appendChild(name);

        const message = document.createElement('p');
        message.className = 'testimonial-message';
        message.textContent = testimonial.message;
        div.appendChild(message);

        const rating = document.createElement('p');
        rating.className = 'testimonial-rating';
        for (let i = 0; i < 5; i++) {
          const star = document.createElement('i');
          star.className = i < testimonial.rating ? 'fas fa-star' : 'far fa-star';
          rating.appendChild(star);
        }
        div.appendChild(rating);
        testimonialsList.appendChild(div);
      });
    })
    .catch(() => {
      const testimonialsList = document.getElementById('testimonialsList');
      testimonialsList.innerHTML = '<p>Gagal memuat testimoni.</p>';
    });
}

function submitTestimonial() {
  const form = document.getElementById('testimonialForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const rating = parseInt(document.getElementById('rating').value);

    fetch('http://localhost:8080/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, message, rating })
    })
    .then(res => res.ok ? res : Promise.reject())
    .then(() => {
      alert('Testimoni berhasil dikirim!');
      form.reset();
      fetchTestimonials();
    })
    .catch(() => alert('Gagal menyimpan testimoni.'));
  });
}

function checkoutViaWA() {
  if (cartItems.length === 0) return alert('Keranjang belanja kosong!');
  let pesan = "Halo, saya ingin memesan:%0A";
  cartItems.forEach(item => {
    pesan += `- ${item.name} x${item.quantity} = ${formatCurrency(item.price * item.quantity)}%0A`;
  });
  const totalHarga = cartItems.reduce((acc, i) => acc + i.price * i.quantity, 0);
  pesan += `Total: ${formatCurrency(totalHarga)}%0A%0ATerima kasih!`;
  const urlWA = `https://wa.me/6285759858593?text=${encodeURIComponent(pesan)}`;
  window.open(urlWA, '_blank');
}

function addMenuItem(item) {
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

  document.getElementById('menuGrid').appendChild(li);
}

// === DOM Loaded ===
document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menuGrid');
  if (menuList) menuData.forEach(addMenuItem);

  document.querySelectorAll('.nav-link, .cta-button').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === "/login" || href === "/register") return;
      const targetId = link.getAttribute('data-target') || (href && href.startsWith('#') ? href.substring(1) : null);
      if (!targetId) return;
      e.preventDefault();
      document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.add('active');
        link.classList.add('active');
        if (targetId === 'aboutSection') animateAboutSection();
        if (targetId === 'testimonialsSection') {
          fetchTestimonials();
          submitTestimonial();
        }
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const clearCartBtn = document.getElementById('clearCartBtn');
  if (clearCartBtn) clearCartBtn.addEventListener('click', () => { cartItems = []; updateCartCount(); updateCartUI(); });
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', checkoutViaWA);

  const cartSection = document.getElementById("checkoutSection");
  const cookies = document.cookie.split(';').map(c => c.trim());
  const sessionUser = cookies.find(c => c.startsWith("session_user="));
  const userLoggedIn = Boolean(sessionUser);
  if (!userLoggedIn && cartSection) cartSection.innerHTML = "<p>Silakan login untuk mengakses keranjang belanja.</p>";

  updateCartCount();
  updateCartUI();

  const urlParams = new URLSearchParams(window.location.search);
  const target = urlParams.get('target');
  if (target) {
    const targetLink = document.querySelector(`[data-target="${target}"]`);
    if (targetLink) targetLink.click();
  }

  const userIcon = document.querySelector(".user-icon");
  const userMenu = document.getElementById("userMenu");

  if (userIcon && userMenu) {
    userIcon.addEventListener("click", () => {
      userMenu.classList.toggle("hidden");
    });

    if (sessionUser) {
      const username = decodeURIComponent(sessionUser.split("=")[1]);
      const nameEl = document.getElementById("userMenuName");
      const guestEl = document.getElementById("userMenuGuest");
      const loggedEl = document.getElementById("userMenuLogged");
      if (nameEl) nameEl.textContent = `Halo, ${username}`;
      if (guestEl) guestEl.classList.add("hidden");
      if (loggedEl) loggedEl.classList.remove("hidden");
    } else {
      const guestEl = document.getElementById("userMenuGuest");
      const loggedEl = document.getElementById("userMenuLogged");
      if (guestEl) guestEl.classList.remove("hidden");
      if (loggedEl) loggedEl.classList.add("hidden");
    }
  }
});


// === Login/Register Popup Toggle ===
document.addEventListener('DOMContentLoaded', () => {
  const guestLoginBtn = document.getElementById('userMenuGuestLogin');
  const loginPopup = document.getElementById('loginPopup');
  const registerPopup = document.getElementById('registerPopup');
  const userIcon = document.querySelector('.user-icon');
  const userMenu = document.getElementById('userMenu');

  // Toggle menu user
  if (userIcon && userMenu) {
    userIcon.addEventListener('click', () => {
      userMenu.classList.toggle('hidden');
      loginPopup.classList.add('hidden');
      registerPopup.classList.add('hidden');
    });
  }

  // Tombol login dari user menu
  if (guestLoginBtn) {
    guestLoginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      loginPopup.classList.toggle('hidden');
      registerPopup.classList.add('hidden');
      userMenu.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Delegasi event untuk #showRegister & #showLogin (karena popup belum render saat awal)
  document.body.addEventListener('click', (e) => {
    if (e.target.id === 'showRegister') {
      e.preventDefault();
      registerPopup.classList.remove('hidden');
      loginPopup.classList.add('hidden');
      userMenu.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (e.target.id === 'showLogin') {
      e.preventDefault();
      loginPopup.classList.remove('hidden');
      registerPopup.classList.add('hidden');
      userMenu.classList.add('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});

