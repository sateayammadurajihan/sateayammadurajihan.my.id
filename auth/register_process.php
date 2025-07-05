<?php
require '../config/db.php';

$fullname = $_POST['fullname'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$admin_code = $_POST['admin_code'] ?? '';

$valid_admin_code = 'ADMINSATEJIHAN';
$role = ($admin_code === $valid_admin_code) ? 'admin' : 'user';

$stmt = $conn->prepare("INSERT INTO users (fullname, email, password, role) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $fullname, $email, $password, $role);

if ($stmt->execute()) {
  echo "Registrasi berhasil. Silakan <a href='login.php'>Login</a>";
} else {
  echo "Registrasi gagal: " . $conn->error;
}
?>
