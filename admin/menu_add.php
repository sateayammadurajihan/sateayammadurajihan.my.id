<?php
require '../config/db.php';

$name = $_POST['menuName'];
$price = $_POST['menuPrice'];
$image = $_POST['menuImage'];

$stmt = $conn->prepare("INSERT INTO menu (name, price, image) VALUES (?, ?, ?)");
$stmt->bind_param("sis", $name, $price, $image);
$stmt->execute();
?>
