// Menu data
const menuData = [
  { name: "Sate Kambing (10 tusuk)", price: "Rp 18.000", image: "image/sate-kambing.jpg" },
  { name: "Sate Sapi (10 tusuk)", price: "Rp 18.000", image: "image/sate-sapi.jpg" },
  { name: "Sate Thaican (10 tusuk)", price: "Rp 18.000", image: "image/sate-thaican.jpg" },
  { name: "Sate Ayam Campur Kulit (10 tusuk)", price: "Rp 15.000", image: "image/sate-ayam-kulit.jpg" },
  { name: "Sate Ayam Polos (10 tusuk)", price: "Rp 18.000", image: "image/sate-ayam.jpg" },
  { name: "Sate Kambing + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000", image: "image/sate-kambing.jpg" },
  { name: "Sate Sapi + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000", image: "image/sate-sapi.jpg" },
  { name: "Sate Thaican + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000", image: "image/sate-thaican.jpg" },
  { name: "Sate Ayam Campur Kulit + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 20.000", image: "image/sate-ayam-kulit.jpg" },
  { name: "Sate Ayam Polos + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000", image: "image/sate-ayam.jpg" },
  { name: "Sate Kambing + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000",  image: "image/sate-kambing.jpg" },
  { name: "Sate Sapi + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000",  image: "image/sate-sapi.jpg" },
  { name: "Sate Thaican + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 20.000",  image: "image/sate-thaican.jpg" },
  { name: "Sate Ayam Campur Kulit + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 20.000",  image: "image/sate-ayam-kulit.jpg" },
  { name: "Sate Ayam Polos + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000",  image: "image/sate-ayam.jpg" },
  { name: "Sate Kambing (15 tusuk)", price: "Rp 27.000",  image: "image/sate-kambing.jpg" },
  { name: "Sate Sapi (15 tusuk)", price: "Rp 27.000",  image: "image/sate-sapi.jpg" },
  { name: "Sate Thaican (15 tusuk)", price: "Rp 23.000",  image: "image/sate-thaican.jpg" },
  { name: "Sate Ayam Campur Kulit (15 tusuk)", price: "Rp 23.000",  image: "image/sate-ayam-kulit.jpg" },
  { name: "Sate Ayam Polos (15 tusuk)", price: "Rp 27.000",  image: "image/sate-ayam.jpg" },
  { name: "Sate Kambing + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000",  image: "image/sate-kambing.jpg" },
  { name: "Sate Sapi + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000",  image: "image/sate-sapi.jpg" },
  { name: "Sate Ayam Polos + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000",  image: "image/sate-ayam.jpg" },
  { name: "Sate Ayam Campur Kulit + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 28.000",  image: "image/sate-ayam-kulit.jpg"},
  { name: "Sate Thaican + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 28.000",  image: "image/sate-thaican.jpg" },
  { name: "Sate Kambing + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000",  image: "image/sate-kambing.jpg" },
  { name: "Sate Sapi + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000",  image: "image/sate-sapi.jpg" },
  { name: "Sate Ayam Polos + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000",  image: "image/sate-ayam.jpg" },
  { name: "Sate Ayam Campur Kulit + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 28.000",  image: "image/sate-ayam-kulit.jpg" },
  { name: "Sate Thaican + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 28.000",  image: "image/sate-thaican.jpg" },
  { name: "Soto Ayam", price: "Rp 15.000",  image: "image/soto-ayam.jpg" },
  { name: "Soto Ayam + Lontong", price: "Rp 20.000",  image: "image/soto-ayam.jpg" },
  { name: "Soto Ayam + Nasi", price: "Rp 20.000",  image: "image/soto-ayam.jpg" },
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

    // Tambah gambar jika ada
    if (item.image) {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;
      img.className = 'menu-image';
      li.appendChild(img);
    }

    // Nama menu
    const title = document.createElement('h3');
    title.textContent = item.name;
    li.appendChild(title);

    // Harga
    const price = document.createElement('p');
    price.textContent = item.price;
    price.className = 'price';
    li.appendChild(price);

    menuList.appendChild(li);
  });
});
