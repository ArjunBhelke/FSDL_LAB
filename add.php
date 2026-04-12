<?php include 'db.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $department = $_POST['department'];

    if ($name != "" && $email != "" && $mobile != "" && $department != "") {
        mysqli_query($conn, "INSERT INTO student (name,email,mobile,department)
        VALUES ('$name','$email','$mobile','$department')");
        header("Location: index.php");
    } else {
        echo "All fields are required!";
    }
}
?>

<!DOCTYPE html>
<html>
<head><title>Add Student</title></head>
<body>

<h2>Add Student</h2>

<form method="POST">
Name: <input type="text" name="name"><br><br>
Email: <input type="text" name="email"><br><br>
Mobile: <input type="text" name="mobile"><br><br>
Department: <input type="text" name="department"><br><br>

<input type="submit" value="Add">
<a href="index.php">Back</a>
</form>

</body>
</html>