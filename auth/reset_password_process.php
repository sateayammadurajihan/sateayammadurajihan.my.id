<?php
session_start();
include_once(__DIR__ . '/../config/db.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $token = $_POST['token'];
  $newPassword = $_POST['new_password'];
  $confirmPassword = $_POST['confirm_password'];

  // Validasi password
  if ($newPassword !== $confirmPassword) {
    echo "Password dan konfirmasi tidak cocok!";
    exit;
  }

  // Cari user dengan token valid
  $query = mysqli_query($conn, "SELECT * FROM users WHERE reset_token = '$token' AND reset_expires > NOW()");
  if (mysqli_num_rows($query) === 0) {
    echo "Token tidak valid atau sudah expired!";
    exit;
  }

  $user = mysqli_fetch_assoc($query);
  $userId = $user['id'];

  // Hash password baru
  $hashed = password_hash($newPassword, PASSWORD_DEFAULT);

  // Update password dan hapus token
  $update = mysqli_query($conn, "UPDATE users SET password = '$hashed', reset_token = NULL, reset_expires = NULL WHERE id = $userId");

  if ($update) {
    echo "<script>alert('Password berhasil direset! Silakan login.'); window.location='login.php';</script>";
  } else {
    echo "Gagal menyimpan password.";
  }
}
?>
