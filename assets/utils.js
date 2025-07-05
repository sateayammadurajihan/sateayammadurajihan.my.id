// Format angka menjadi Rupiah
function formatRupiah(angka) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(angka);
}

// Validasi email (basic)
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Menampilkan notifikasi
function showToast(message) {
  alert(message); // ganti dengan custom toast jika mau
}
