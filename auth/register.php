<?php
session_start();
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Registrasi - Sate Jihan</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="auth-container">
    <h2>Form Registrasi</h2>
    <form action="register_process.php" method="POST">
      <input type="text" name="fullname" placeholder="Nama Lengkap" required>
      <input type="email" name="email" placeholder="Email" required>
      <input type="password" name="password" placeholder="Password" required>
      <input type="text" name="admin_code" placeholder="Kode Admin (Kosongkan jika user biasa)">
      <button type="submit">Daftar</button>
    </form>
    <p>Sudah punya akun? <a href="login.php">Login di sini</a></p>
  </div>
</body>
</html>
