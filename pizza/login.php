<?php
session_start();

if (isset($_POST['username']) && isset($_POST['password'])) {
    $db = new mysqli('localhost', 'root', '', 'cie3');
    function function_alert($message) {
        echo "<script>alert('$message');</script>";
    }   
    $username = mysqli_real_escape_string($db, $_POST['username']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
    $query = "SELECT * FROM `user` WHERE `Username` LIKE '$username' AND `Password` LIKE '$password'";

    $result = mysqli_query($db, $query);
    if (mysqli_num_rows($result) == 1) {
        // Set the session variables
        $_SESSION['username'] = $username;
        $_SESSION['loggedin'] = true;
        header('Location: My-project/Html/index.html');
        // header('Location: index.html');
        exit();
    } else {
        function_alert("Invalid username or password");
			header("refresh:0;url=login.html");
    }
}

?>
