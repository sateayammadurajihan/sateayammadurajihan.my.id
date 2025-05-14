const menuData = [
  { name: "Sate Kambing", price: "Rp 18.000", image: "image/sate-kambing.jpg", detail: "10 tusuk" },
  { name: "Sate Sapi", price: "Rp 18.000", image: "image/sate-sapi.jpg", detail: "10 tusuk" },
  { name: "Sate Thaican", price: "Rp 18.000", image: "image/sate-thaican.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Campur Kulit", price: "Rp 15.000", image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk" },
  { name: "Sate Ayam Polos", price: "Rp 18.000", image: "image/sate-ayam.jpg", detail: "10 tusuk" },
  { name: "Sate Kambing + Lontong", price: "Rp 23.000", image: "image/sate-kambing.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Sapi + Lontong", price: "Rp 23.000", image: "image/sate-sapi.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Thaican + Lontong", price: "Rp 23.000", image: "image/sate-thaican.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit + Lontong", price: "Rp 20.000", image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Polos + Lontong", price: "Rp 23.000", image: "image/sate-ayam.jpg", detail: "10 tusuk + 2 buah lontong" },
  { name: "Sate Kambing + Nasi", price: "Rp 23.000", image: "image/sate-kambing.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi + Nasi", price: "Rp 23.000", image: "image/sate-sapi.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican + Nasi", price: "Rp 20.000", image: "image/sate-thaican.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit + Nasi", price: "Rp 20.000", image: "image/sate-ayam-kulit.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Polos + Nasi", price: "Rp 23.000", image: "image/sate-ayam.jpg", detail: "10 tusuk + 1 bungkus nasi" },
  { name: "Sate Kambing", price: "Rp 27.000", image: "image/sate-kambing.jpg", detail: "15 tusuk" },
  { name: "Sate Sapi", price: "Rp 27.000", image: "image/sate-sapi.jpg", detail: "15 tusuk" },
  { name: "Sate Thaican", price: "Rp 23.000", image: "image/sate-thaican.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Campur Kulit", price: "Rp 23.000", image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk" },
  { name: "Sate Ayam Polos", price: "Rp 27.000", image: "image/sate-ayam.jpg", detail: "15 tusuk" },
  { name: "Sate Kambing + Lontong", price: "Rp 32.000", image: "image/sate-kambing.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Sapi + Lontong", price: "Rp 32.000", image: "image/sate-sapi.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Polos + Lontong", price: "Rp 32.000", image: "image/sate-ayam.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Ayam Campur Kulit + Lontong", price: "Rp 28.000", image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Thaican + Lontong", price: "Rp 28.000", image: "image/sate-thaican.jpg", detail: "15 tusuk + 2 buah lontong" },
  { name: "Sate Kambing + Nasi", price: "Rp 32.000", image: "image/sate-kambing.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Sapi + Nasi", price: "Rp 32.000", image: "image/sate-sapi.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Polos + Nasi", price: "Rp 32.000", image: "image/sate-ayam.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Ayam Campur Kulit + Nasi", price: "Rp 28.000", image: "image/sate-ayam-kulit.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Sate Thaican + Nasi", price: "Rp 28.000", image: "image/sate-thaican.jpg", detail: "15 tusuk + 1 bungkus nasi" },
  { name: "Soto Ayam", price: "Rp 15.000", image: "image/soto-ayam.jpg", detail: "Tanpa tambahan" },
  { name: "Soto Ayam + Lontong", price: "Rp 20.000", image: "image/soto-ayam.jpg", detail: "Dengan lontong" },
  { name: "Soto Ayam + Nasi", price: "Rp 20.000", image: "image/soto-ayam.jpg", detail: "Dengan nasi" },
  { name: "Lontong", price: "Rp 5.000", image: "image/lontong.jpg", detail: "2 buah lontong" },
  { name: "Nasi", price: "Rp 5.000", image: "image/nasi.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Udang", price: "Rp 2.000", image: "image/kerupuk-udang.jpg", detail: "1 bungkus" },
  { name: "Kerupuk Black", price: "Rp 2.500", image: "image/kerupuk-black.jpg", detail: "2 kerupuk" }
];

let cart = [];

function loadCartFromStorage() {
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
}

function saveCartToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

window.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menuList');
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');
  const clearCartBtn = document.getElementById('clearCartBtn');

  function formatPriceToNumber(priceStr) {
    return Number(priceStr.replace(/[^0-9,-]+/g,"").replace(",",""));
  }

  function formatNumberToPrice(num) {
    return "Rp " + num.toLocaleString("id-ID");
  }

  function updateCartUI() {
    cartList.innerHTML = "";
    let total = 0;

    if(cart.length === 0) {
      cartList.innerHTML = '<li style="text-align:center; color:#7c3b00;">Keranjang kosong</li>';
      cartTotal.textContent = "Total: Rp 0";
      return;
    }

    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.className = "cart-item";

      li.innerHTML = `
        <span>${item.name} - ${item.price}</span>
        <div>
          <button class="qty-btn" data-action="dec" data-index="${index}">-</button>
          <span style="margin: 0 8px;">${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-index="${index}">+</button>
          <button class="remove-btn" data-index="${index}" title="Hapus item">✕</button>
        </div>
      `;

      cartList.appendChild(li);

      total += formatPriceToNumber(item.price) * item.qty;
    });

    cartTotal.textContent = `Total: ${formatNumberToPrice(total)}`;

    // Event listener untuk tombol tambah/kurang/hapus
    document.querySelectorAll('.qty-btn').forEach(button => {
      button.addEventListener('click', e => {
        const idx = e.target.getAttribute('data-index');
        const action = e.target.getAttribute('data-action');

        if(action === 'inc') {
          cart[idx].qty++;
        } else if(action === 'dec') {
          if(cart[idx].qty > 1) {
            cart[idx].qty--;
          }
        }
        saveCartToStorage();
        updateCartUI();
      });
    });

    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', e => {
        const idx = e.target.getAttribute('data-index');
        cart.splice(idx, 1);
        saveCartToStorage();
        updateCartUI();
      });
    });
  }

  function addToCart(item) {
    const found = cart.find(i => i.name === item.name);
    if (found) {
      found.qty++;
    } else {
      cart.push({ ...item, qty: 1 });
    }
    saveCartToStorage();
    updateCartUI();
  }

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
    price.textContent = item.price;
    price.className = 'price';
    li.appendChild(price);

    if (item.detail) {
      const note = document.createElement('p');
      note.textContent = item.detail;
      note.className = 'note';
      li.appendChild(note);
    }

    li.onclick = () => addToCart(item);

    menuList.appendChild(li);
  });

  clearCartBtn.onclick = () => {
    cart = [];
    saveCartToStorage();
    updateCartUI();
  }

  loadCartFromStorage();
  updateCartUI();
});
