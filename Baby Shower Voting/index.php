<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>David & Anabella Baby Boy or Girl!!!!</title>
    <meta property="og:title" content="David & Anabella Baby Boy or Girl!!!!" />
	<meta property="og:image" content="https://vote.devacod.com/images/promo.png" />
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Lora&family=Montserrat&family=Work+Sans:wght@300;400;500;700&display=swap">
    <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://use.fontawesome.com/releases/v5.10.1/css/all.css" crossorigin="anonymous">
    <!-- Styles -->
    <link href="css/website.css" rel="stylesheet">
    <link href="css/bootstrap/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<script>
    $(document).ready(function(){
    $("#myModal").modal('show');
    });
function boy() {

    radiobtn = document.getElementById("boy");
    radiobtn.checked = true;
    document.getElementById("name").focus();
    document.getElementById("name").select();
}

function girl() {
    radiobtn = document.getElementById("girl");
    radiobtn.checked = true;
    document.getElementById("name").focus();
    document.getElementById("name").select();
}
</script>
<?php 
if ($_SERVER['REQUEST_METHOD'] === 'POST') { }else{ ?>
<div class="modal" data-backdrop="false" tabindex="-1" role="dialog" id="myModal" >
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Sintomas</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <img src="images/sintomas.jpeg" width="100%">
      </div>
    </div>
  </div>
</div>
<?php } ?>
<body class="bg">
    <div class="container ">
        <div class="row justify-content-md-center">
            <div class="msgbox">
                <div class="row ">
                    <div class="form">
                    <?php 
                        if ($_SERVER['REQUEST_METHOD'] === 'POST') { 
                        $servername = "localhost";
                        $username = "";
                        $password = "";
                        $dbname = "";
                        $name  = $_POST["name"];
                        $gender  = $_POST["gender"];
                        ?>
                        <p class="votername">Thanks you <strong><?php echo $_POST["name"];?></strong></p>
                        <?php
                        $conn = mysqli_connect($servername, $username, $password, $dbname);
                        if (!$conn) {
                            die("Connection failed: ");
                        }
                    
                        $sql = "INSERT INTO `gender` (`id`, `name`, `gender`)  
                            VALUES (NULL,'$name','$gender')";
                    
                        if (mysqli_query($conn, $sql)) {
                        } else {
                            echo "Error: " . $sql . "<br>" . mysqli_error($conn);
                            die('Error: SQL Server');
                        }
                        mysqli_close($conn); 
                        $conn = new mysqli($servername, $username, $password, $dbname);
                        if ($conn->connect_error) {
                            die("Connection failed: " . $conn->connect_error);
                        }

                        $boy = "SELECT COUNT(gender) as boy FROM gender WHERE gender = 'b'";
                        $girl = "SELECT COUNT(gender) as girl FROM gender WHERE gender = 'g'";
                        $bresult = $conn->query($boy);
                        
                        if ($bresult->num_rows > 0) {
                            // output data of each row
                            while($row = $bresult->fetch_assoc()) {
                                ?>
                            <p class="voter"><img src="images/boy.png" width="100px" height="70px"> <?php echo $row["boy"];?></p>
                                <?php
                            }
                        } else {
                            echo "0";
                        }
                        $gresult = $conn->query($girl);
                        
                        if ($gresult->num_rows > 0) {
                            // output data of each row
                            while($row = $gresult->fetch_assoc()) {
                                ?>
                                <p class="voter"><img src="images/girl.png" width="100px" height="70px"> <?php echo $row["girl"];?> </p><br>
                                <?php
                            }
                        } else {
                            echo "0";
                        }
                        $conn->close();
                        
                        ?>
                        
                    
                    

                    <?php }else{ ?>
                        <form action="?go=vote" method="POST">
                        <div class="baby-selector ">
                            <input id="girl" type="radio" id="girl" name="gender"value="g" required/>
                            <label class="drink-baby girl" for="girl" ></label>
                             Or
                            <input id="boy" type="radio" id="boy" name="gender" value="b" />
                            <label class="drink-baby boy"for="boy"></label>
                        </div>
                        <input type="text" class="form-control" name="name" placeholder="Tu Nombre" required="">
                        <br>
                        <button type="submit" class="btn btn-primary btn-lx">
                                Votar</button>
                                </form>

                                <a href="#" data-toggle="modal" data-target="#myModal">Ver Sintomas</a>
                    <?php } ?>
                    
                    </div>
                </div>
        </div>
        <div class="row">
            <div class="vboy" onclick="boy();"></div>
            <div class="vgirl" onclick="girl();"></div>
        </div>
    </div>

</body>
</html>