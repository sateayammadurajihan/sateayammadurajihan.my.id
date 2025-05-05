// Daftar menu sesuai data user, bisa diupdate jadi dinamis dari API nanti
const menuData = [
  // Menu 10 tusuk
  { name: "Sate Kambing (10 tusuk)", price: "Rp 18.000" },
  { name: "Sate Sapi (10 tusuk)", price: "Rp 18.000" },
  { name: "Sate Thaican (10 tusuk)", price: "Rp 18.000" },
  { name: "Sate Ayam Campur Kulit (10 tusuk)", price: "Rp 15.000" },
  { name: "Sate Ayam Polos (10 tusuk)", price: "Rp 15.000" },

  // Menu 10 tusuk + lontong
  { name: "Sate Kambing + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000" },
  { name: "Sate Sapi + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000" },
  { name: "Sate Thaican + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 23.000" },
  { name: "Sate Ayam Campur Kulit + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 20.000" },
  { name: "Sate Ayam Polos + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 20.000" },
  { name: "Soto Ayam + Lontong (10 tusuk + 2 buah lontong)", price: "Rp 20.000" },

  // Menu 10 tusuk + nasi
  { name: "Sate Kambing + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000" },
  { name: "Sate Sapi + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000" },
  { name: "Sate Thaican + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 23.000" },
  { name: "Sate Ayam Campur Kulit + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 20.000" },
  { name: "Sate Ayam Polos + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 20.000" },
  { name: "Soto Ayam + Nasi (10 tusuk + 1 bungkus nasi)", price: "Rp 20.000" },

  // Soto ayam (standalone)
  { name: "Soto Ayam", price: "Rp 15.000" },

  // Menu 15 tusuk
  { name: "Sate Kambing (15 tusuk)", price: "Rp 27.000" },
  { name: "Sate Sapi (15 tusuk)", price: "Rp 27.000" },
  { name: "Sate Thaican (15 tusuk)", price: "Rp 23.000" },
  { name: "Sate Ayam Campur Kulit (15 tusuk)", price: "Rp 23.000" },
  { name: "Sate Ayam Polos (15 tusuk)", price: "Rp 27.000" },

  // Menu 15 tusuk + lontong
  { name: "Sate Kambing + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000" },
  { name: "Sate Sapi + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000" },
  { name: "Sate Ayam Polos + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 32.000" },
  { name: "Sate Ayam Campur Kulit + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 28.000" },
  { name: "Sate Thaican + Lontong (15 tusuk + 2 buah lontong)", price: "Rp 28.000" },

  // Menu 15 tusuk + nasi
  { name: "Sate Kambing + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000" },
  { name: "Sate Sapi + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000" },
  { name: "Sate Ayam Polos + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 32.000" },
  { name: "Sate Ayam Campur Kulit + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 28.000" },
  { name: "Sate Thaican + Nasi (15 tusuk + 1 bungkus nasi)", price: "Rp 28.000" },

  // Menu tambahan
  { name: "Lontong (2 buah lontong)", price: "Rp 5.000" },
  { name: "Nasi", price: "Rp 5.000" },
  { name: "Kerupuk Udang", price: "Rp 2.000" },
  { name: "Kerupuk Black", price: "Rp 2.000" },
];


// Render menu items
const menuList = document.getElementById("menuList");
menuData.forEach((item) => {
  const li = document.createElement("li");
  li.className = "menu-item";
  li.innerHTML =<span>${item.name<span class="price">${item.price</span>`;
  menuList.appendChild(li);
});

// Chatbot logic (simple canned responses)
const chatbotMessages = document.getElementById("chatbotMessages");
const chatbotForm = document.getElementById("chatbotForm");
const chatbotInput = document.getElementById("chatbotInput");
const botReplies = {
  "halo": "Halo! Ada yang bisa saya bantu?",
  "menu": "Silakan lihat menu lengkap di bagian Menu pada halaman ini.",
  "buka": "Warung buka setiap hari dari jam 08.00 hingga 21.00 WIB.",
  "alamat": "Alamat kami di Jl. Sate Ayam No.10, Kota Contoh.",
  "kontak": "Nomor telepon kami +62 812-3456-7890.",
  "terima kasih": "Sama-sama! Jika ada pertanyaan lain, jangan ragu hubungi kami.",
};

function appendMessage(text, sender) {
  const div = document.createElement("div");
  div.classList.add("message", sender);
  div.textContent = text;
  chatbotMessages.appendChild(div);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function getBotReply(message) {
  const msg = message.toLowerCase();
  for (const key in botReplies) {
    if (msg.includes(key)) return botReplies[key];
  }
  return "Maaf, saya tidak mengerti. Bisa ulangi dengan kata lain?";
}

chatbotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userMsg = chatbotInput.value.trim();
  if (!userMsg) return;
  appendMessage(userMsg, "user");
  chatbotInput.value = "";
  setTimeout(() => {
    appendMessage(getBotReply(userMsg), "bot");
  }, 700);
});
