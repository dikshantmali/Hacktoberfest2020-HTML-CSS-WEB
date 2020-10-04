<?php
$angka = $_POST['angka'];
$angka2 = $_POST['angka2'];
$operator = $_POST['operator'];

$message = "";

if(!isset($_POST['submit'])) {
    echo "ERROR";
}else{
    if($operator == "+") {
        $message = $angka + $angka2;
    }elseif($operator == "x") {
        $message = $angka * $angka2;
    }elseif($operator == "-") {
        $message = $angka - $angka2;
    }elseif($operator == "/") {
        $message = $angka / $angka2;
    }else{
        $message = "ERROR";
    }
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator PHP Web Version 0.1</title>
</head>
<body>
    <?php echo $message; ?>
    <form action="" method="POST">
    <input type="text" name="angka" placeholder="Number">
    <input type="text" name="angka2" placeholder="Number 2">
    <select name="operator">
        <option value="x">x</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="/">/</option>
    </select>
    <input type="submit" name="submit">
    </form>
</body>
</html>