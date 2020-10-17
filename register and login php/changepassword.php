<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Change Password</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <div class="header">
    <h2>Change Password</h2>
  </div>
  
  <form method="post" action="changepassword.php">
    <?php include('errors.php'); ?>
     <div class="input-group">
      <label>Confirm Your Username</label>
      <input type="text" name="username_" placeholder= "Username Here">
  </div>
  </div>
  <div class="input-group">
      <label>Current Password</label>
      <input type="password" name="oldpassword" placeholder= "Current Password Here">
  </div>
  <div class="input-group">
      <label>New Password</label>
      <input type="password" name="password1" placeholder= "New Password Here">
  </div>
  <div class="input-group">
      <label>Confirm New password</label>
      <input type="password" name="password2" placeholder= "Renter New Password Here">
  <div class="input-group">
      <button type="submit" class="btn" name="changepassword">Change Password</button>
  </div>
  <p>
    <a href="index.php">Home</a>
  </p>
  </form>
</body>
</html>