<?php
session_start();
include_once(__DIR__ . '/../config/db.php');

// Autoload PHPMailer
require_once __DIR__ . '/../vendor/autoload.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

if (isset($_POST['email'])) {
    $email = mysqli_real_escape_string($conn, $_POST['email']);

    // Cek apakah email terdaftar
    $query = mysqli_query($conn, "SELECT * FROM users WHERE email = '$email'");
    if (mysqli_num_rows($query) > 0) {
        // Generate token dan waktu kadaluarsa
        $token = bin2hex(random_bytes(32));
        $expired = date("Y-m-d H:i:s", strtotime("+1 hour"));

        // Simpan token ke DB
        mysqli_query($conn, "UPDATE users SET reset_token = '$token', reset_expires = '$expired' WHERE email = '$email'");

        // Buat link reset password
        $resetLink = "http://localhost/sateayammadurajihan.my.id/auth/reset_password.php?token=$token";

        // Kirim email menggunakan PHPMailer
        $mail = new PHPMailer(true);

        try {
            // Konfigurasi SMTP Gmail
            $mail->isSMTP();
            $mail->Host       = 'smtp.gmail.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'sateayammadurajihan@gmail.com';     
            $mail->Password   = 'gvrs rpxf euwn zagi';               
            $mail->SMTPSecure = 'tls';
            $mail->Port       = 587;

            // Pengirim dan penerima
            $mail->setFrom('sateayammadurajihan@gmail.com', 'Sate Ayam Madura Jihan');
            $mail->addAddress($email);

            // Konten email
            $mail->isHTML(true);
            $mail->Subject = 'Reset Password Akun Sate Jihan';
            $mail->Body    = "Klik link berikut untuk reset password Anda:<br><a href='$resetLink'>$resetLink</a><br><br>Link ini berlaku selama 1 jam.";

            $mail->send();
            $_SESSION['notif'] = "✅ Link reset sudah dikirim ke email Anda. Silakan cek inbox atau folder spam.";
            $_SESSION['notif_type'] = "success";
        } catch (Exception $e) {
            $_SESSION['notif'] = "❌ Gagal mengirim email: " . $mail->ErrorInfo;
            $_SESSION['notif_type'] = "error";
        }
    } else {
        $_SESSION['notif'] = "❌ Email tidak ditemukan di database.";
        $_SESSION['notif_type'] = "error";
    }

    // Redirect balik ke halaman forgot password
    header("Location: forgot_password.php");
    exit;
}
