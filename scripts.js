const menuData = [
  { name: "Sate Kambing", price: "Rp 18.000", image: "./image/sate-kambing.jpg", detail: "10 tusuk" },
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
  { name: "Lontong", price: "Rp 5.000", detail: "2 buah lontong" },
  { name: "Nasi", price: "Rp 5.000", detail: "1 bungkus" },
  { name: "Kerupuk Udang", price: "Rp 2.000", detail: "1 bungkus" },
  { name: "Kerupuk Black", price: "Rp 2.000", detail: "1 bungkus" }
];

    window.addEventListener('DOMContentLoaded', () => {
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
        price.textContent = item.price;
        price.className = 'price';
        li.appendChild(price);

        if (item.detail) {
          const note = document.createElement('p');
          note.textContent = item.detail;
          note.className = 'note';
          li.appendChild(note);
        }

        menuList.appendChild(li);
      });
    });