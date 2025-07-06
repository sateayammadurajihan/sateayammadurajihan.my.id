<?php session_start(); ?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>Registrasi - Sate Jihan</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
</head>
<body>
  <div class="login-wrapper">
    <div class="login-card">
      <div class="login-avatar">
        <i class="fas fa-user-plus"></i>
      </div>
      <h2>Form Registrasi</h2>
      <form method="post" action="register_process.php">
        <div class="input-group">
          <i class="fas fa-user"></i>
          <input type="text" name="fullname" placeholder="Nama Lengkap" required>
        </div>
        <div class="input-group">
          <i class="fas fa-envelope"></i>
          <input type="email" name="email" placeholder="Email" required>
        </div>
        <div class="input-group">
          <i class="fas fa-lock"></i>
          <input type="password" name="password" placeholder="Password" required>
        </div>
        <div class="input-group">
          <i class="fas fa-key"></i>
          <input type="text" name="admin_code" placeholder="Kode Admin (Kosongkan jika user biasa)">
        </div>
        <button type="submit">Daftar</button>
      </form>
      <p>Sudah punya akun? <a href="login.php">Login di sini</a></p>
    </div>
</body>
</html>