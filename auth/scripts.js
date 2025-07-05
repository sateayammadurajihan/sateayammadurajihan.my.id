const container = document.getElementById('container');
const switchBtn = document.getElementById('switch-btn');
const switchText = document.getElementById('switch-text');

let isRegister = false;

switchBtn.addEventListener('click', () => {
  container.classList.toggle('active');
  isRegister = !isRegister;
  switchText.innerText = isRegister ? 'Sudah punya akun?' : 'Belum punya akun?';
  switchBtn.innerText = isRegister ? 'Login di sini' : 'Daftar di sini';
});
