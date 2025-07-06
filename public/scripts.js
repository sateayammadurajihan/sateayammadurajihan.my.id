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

  // FETCH MENU DARI DATABASE
  fetch('get_menu.php')
    .then(res => res.json())
    .then(menuData => {
      menuData.forEach(item => {
        const li = document.createElement('li');
        li.className = 'menu-item';
        li.tabIndex = 0;

        if(item.image_url) {
          const img = document.createElement('img');
           img.src = item.image_url;
          img.alt = item.name;
          img.className = 'menu-image';
          li.appendChild(img);
        }

        const desc = document.createElement('p');
        desc.textContent = item.name;
        desc.className = 'description';
        li.appendChild(desc);

        const price = document.createElement('p');
        price.textContent = formatCurrency(Number(item.price));
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
