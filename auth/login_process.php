<?php
session_start();
require '../config/db.php';

$email = $_POST['email'];
$password = $_POST['password'];

$stmt = $conn->prepare("SELECT * FROM users WHERE email = ?");
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

if ($user && password_verify($password, $user['password'])) {
  $_SESSION['user_id'] = $user['id'];
  $_SESSION['fullname'] = $user['fullname'];
  $_SESSION['role'] = $user['role'];

  if ($user['role'] === 'admin') {
    header("Location: ../admin/index.php");
  } else {
    header("Location: ../public/index.html");
  }
} else {
  echo "Login gagal: email atau password salah.";
}
?>
