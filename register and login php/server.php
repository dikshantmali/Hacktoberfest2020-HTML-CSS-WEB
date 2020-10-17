<?php
session_start();
$username = "";
$email    = "";
$errors = array(); 
// connect to the database
$db = mysqli_connect("localhost", "root", "", "muxa");
if (isset($_POST['register'])) {
  $username =  $_POST['username'];
  $email = $_POST['email'];
  $password_1 = $_POST['password_1'];
  $password_2 =  $_POST['password_2'];

  // form validation: ensure that the form is correctly filled ...
  // by adding (array_push()) corresponding error into $errors array
  if (empty($username)) { 
    array_push($errors, "Username is required");
  }
  if (empty($email)) {
    array_push($errors, "Email is required");
  }
  if (empty($password_1)) {
    array_push($errors, "Password is required"); 
  }
  if ($password_1 != $password_2) {
  array_push($errors, "The two passwords do not match");
  }
  // first check the database to make sure 
  // a user does not already exist with the same username and/or email
  $user_check = "SELECT * FROM users WHERE username='$username' OR email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check);
  $user = mysqli_fetch_assoc($result);
   //check if the username exists
  if ($user) { // if user exists
    if ($user['username'] === $username) {
      array_push($errors, "Username already exists");
    }

    if ($user['email'] === $email) {
      array_push($errors, "email already exists");
    }
  }
  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
    $pass = md5($password_1);//encrypt the password before saving in the database
    $query = "INSERT INTO users (username, email, password) VALUES('$username', '$email', '$pass')";
    mysqli_query($db, $query);
    $_SESSION['username'] = $username;
    $_SESSION['success'] = "You are now logged in";
    header('location: index.php');
  }
}

// LOGIN USER
if (isset($_POST['login_user'])) {
  $username = $_POST['username'];
  $password =$_POST['password'];

  if (empty($username)) {
    array_push($errors, "Username is required");
  }
  if (empty($password)) {
    array_push($errors, "Password is required");
  }

  if (count($errors) == 0) {
    $pass1 = md5($password);
    $query = "SELECT * FROM users WHERE username='$username' AND password='$pass1'";
    $results = mysqli_query($db, $query);
    if (mysqli_num_rows($results) == 1) {
      $_SESSION['username'] = $username;
      $_SESSION['success'] = "You are now logged in";
      header('location: index.php');
    }else {
      array_push($errors, "Wrong username/password combination");
    }
  }
}

// Change password
if (isset($_POST['changepassword'])) {
  $username_ =  $_POST['username_'];
  $oldpassword = $_POST['oldpassword'];
  $password1 = $_POST['password1'];
  $password2 =  $_POST['password2'];
  if (empty($username_)) {
    array_push($errors, "You Need To Confirm Your Username");
  }
   if (empty($password1)) {
    array_push($errors, "New Password is required"); 
  }
  if (empty($oldpassword)) {
    array_push($errors, "Current Password is required"); 
  }
  if ($password1 != $password2) {
  array_push($errors, "The two passwords do not match");
  }
  $pass2 = md5($oldpassword);
  $pass3 = md5($password1);
  $query = "SELECT * FROM users WHERE username='$username_' AND password='$pass2'";
  $results = mysqli_query($db, $query);
    if (!$results) {
       array_push($errors, "Current Password/Username is Wrong");
    }
    if (count($errors) == 0) {
      $change = "UPDATE users SET password='$pass3' where username ='$username_'";
      $sqli = mysqli_query($db, $change);
      if($sqli) {
        $_SESSION['username'] = $username;
        $_SESSION['success'] = "Password Changed Suscessfully";
        header('location: index.php');
      }
    }
}
?>