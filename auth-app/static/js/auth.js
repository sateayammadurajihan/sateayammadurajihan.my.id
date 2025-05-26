document.addEventListener("DOMContentLoaded", () => {
  // Validasi password register seperti sebelumnya
  const registerForm = document.querySelector("form[action='/register']");
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      const pass = registerForm.password.value;
      const confirm = registerForm.confirm_password.value;

      if (pass !== confirm) {
        e.preventDefault();
        alert("Password dan konfirmasi password harus sama!");
      }
    });
  }

  // Simulasi menyimpan status login setelah submit form login
  const loginForm = document.querySelector("form[action='/login']");
  if (loginForm) {
    loginForm.addEventListener("submit", () => {
      // Setelah submit, kita set userLoggedIn = true
      // NOTE: Ini contoh sederhana, sebaiknya diset setelah login berhasil di backend
      localStorage.setItem("userLoggedIn", "true");
    });
  }

  // Cek akses keranjang
  const cartLinks = document.querySelectorAll('a[href="#checkoutSection"], a[href="/checkout"]');
  cartLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      const isLoggedIn = localStorage.getItem("userLoggedIn");
      if (!isLoggedIn) {
        e.preventDefault();
        alert("Silakan login terlebih dahulu untuk mengakses keranjang!");
        window.location.href = "/login"; // atau alamat halaman login kamu
      }
    });
  });
});
