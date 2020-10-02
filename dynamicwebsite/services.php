<!DOCTYPE html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
 <link href = "https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap" rel="stylesheet">
</head>
<body>

<?php include 'menu.php'; ?>

<div class="jumbotron">
  <h1>Funny Dogs</h1>
  <p>We make people happy :) </p>
</div>

<section class="my-5">
  <div class="py-5">
    <h2 class="text-center">Our Services</h2>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4 col-md-4 col-12">
        <div class="card">
            <img class="card-img-top" src="images/7.jpg" alt="Card image">
            <div class="card-body">
                 <h4 class="card-title">Pictures</h4>
                 <p class="card-text">Get funny pictures.</p>
                 <a href="services.php" class="btn btn-success">See Profile</a>
            </div>
        </div>
        
      </div>

      <div class="col-lg-4 col-md-4 col-12">
        <div class="card">
            <img class="card-img-top" src="images/giphy1.gif" alt="Card image">
            <div class="card-body">
                 <h4 class="card-title">Videos</h4>
                 <p class="card-text">Get funny videos.</p>
                 <a href="services.php" class="btn btn-success">See Profile</a>
            </div>
        </div>
        
      </div>
      <div class="col-lg-4 col-md-4 col-12">
        <div class="card">
            <img class="card-img-top" src="images/8.jpg" alt="Card image">
            <div class="card-body">
                 <h4 class="card-title">Get featured</h4>
                 <p class="card-text">See your pet here.</p>
                 <a href="services.php" class="btn btn-success">See Profile</a>
            </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

<footer>
  <p class="p-3 bg-dark text-white text-center">@funnydogs</p>
</footer>
</body>

</html>