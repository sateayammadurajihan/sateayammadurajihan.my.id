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

window.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menuList');
  const cartList = document.getElementById('cartList');
  const cartTotal = document.getElementById('cartTotal');
  const clearCartBtn = document.getElementById('clearCartBtn');

  function renderCart() {
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(cartItem => {
      const li = document.createElement('li');
      li.textContent = `${cartItem.item.name} x${cartItem.qty}`;
      const priceSpan = document.createElement('span');
      priceSpan.textContent = `Rp ${(cartItem.item.price * cartItem.qty).toLocaleString('id-ID')}`;
      li.appendChild(priceSpan);
      cartList.appendChild(li);
      total += cartItem.item.price * cartItem.qty;
    });
    cartTotal.textContent = `Total: Rp ${total.toLocaleString('id-ID')}`;
  }

  function addToCart(item) {
    const found = cart.find(ci => ci.item.name === item.name);
    if (found) {
      found.qty++;
    } else {
      cart.push({ item, qty: 1 });
    }
    renderCart();
  }

  menuData.forEach(item => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.tabIndex = 0;

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.className = 'menu-image';
    li.appendChild(img);

    const desc = document.createElement('p');
    desc.textContent = item.name;
    desc.className = 'description';
    li.appendChild(desc);

    const price = document.createElement('p');
    price.textContent = item.priceStr;
    price.className = 'price';
    li.appendChild(price);

    if (item.detail) {
      const note = document.createElement('p');
      note.textContent = item.detail;
      note.className = 'note';
      li.appendChild(note);
    }

    const addBtn = document.createElement('button');
    addBtn.textContent = 'Tambah ke Keranjang';
    addBtn.className = 'add-to-cart-btn';
    addBtn.addEventListener('click', () => addToCart(item));
    li.appendChild(addBtn);

    menuList.appendChild(li);
  });

  clearCartBtn.addEventListener('click', () => {
    cart = [];
    renderCart();
  });

  renderCart();
});
