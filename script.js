document.getElementById("kontakForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Terima kasih! Pesan Anda telah dikirim.");
    this.reset();
  });
  