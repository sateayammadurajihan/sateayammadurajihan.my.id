// Menu data (same as before)
const menuData = [
  { name: "Sate Kambing (10 tusuk)", price: "Rp 18.000", image: "images/sate-kambing.jpg" },
  { name: "Sate Sapi (10 tusuk)", price: "Rp 18.000" },
  { name: "Sate Thaican (10 tusuk)", price: "Rp 18.000" },
  { name: "Sate Ayam Campur Kulit (10 tusuk)", price: "Rp 15.000" },
  { name: "Sate Ayam Polos (10 tusuk)", price: "Rp 18.000" },
  { name: "Sate Kambing + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000" },
  { name: "Sate Sapi + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000" },
  { name: "Sate Thaican + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000" },
  { name: "Sate Ayam Campur Kulit + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 20.000" },
  { name: "Sate Ayam Polos + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000" },
  { name: "Soto Ayam + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 20.000" },
  { name: "Sate Kambing + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000" },
  { name: "Sate Sapi + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000" },
  { name: "Sate Thaican + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 20.000" },
  { name: "Sate Ayam Campur Kulit + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 20.000" },
  { name: "Sate Ayam Polos + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000" },
  { name: "Soto Ayam + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 20.000" },
  { name: "Soto Ayam", price: "Rp 15.000" },
  { name: "Sate Kambing (15 tusuk)", price: "Rp 27.000" },
  { name: "Sate Sapi (15 tusuk)", price: "Rp 27.000" },
  { name: "Sate Thaican (15 tusuk)", price: "Rp 23.000" },
  { name: "Sate Ayam Campur Kulit (15 tusuk)", price: "Rp 23.000" },
  { name: "Sate Ayam Polos (15 tusuk)", price: "Rp 27.000" },
  { name: "Sate Kambing + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000" },
  { name: "Sate Sapi + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000" },
  { name: "Sate Ayam Polos + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000" },
  { name: "Sate Ayam Campur Kulit + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 28.000" },
  { name: "Sate Thaican + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 28.000" },
  { name: "Sate Kambing + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000" },
  { name: "Sate Sapi + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000" },
  { name: "Sate Ayam Polos + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000" },
  { name: "Sate Ayam Campur Kulit + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 28.000" },
  { name: "Sate Thaican + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 28.000" },
  { name: "Lontong (2 buah lontong)", price: "Rp 5.000" },
  { name: "Nasi", price: "Rp 5.000" },
  { name: "Kerupuk Udang", price: "Rp 2.000" },
  { name: "Kerupuk Black", price: "Rp 2.000" },
];

window.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menuList');
  menuData.forEach(item => {
    const li = document.createElement('li');
    li.className = 'menu-item';
    li.tabIndex = 0;
    li.textContent = `${item.name} — ${item.price}`;
    menuList.appendChild(li);
  });
});
