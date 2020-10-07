
//login form validation

function validate(){
  var x = document.forms["login"]["email"].value;
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(x))
  {
    console.log("true");
    return (true)
  }else{
    alert("Invalid email address!")
    console.log("error");
    return (false)

  }
}


// register form validation

function validateForm2(){
  var x = document.forms["register"]["email"].value;
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(x))
  {
    var y = document.forms["register"]["password"].value;
    if(y.length < 6){
      alert("Password must have more than 6 characters.")
      console.log("error");
      return (false)
    }else{
      return true
    }

  }else{
    alert("Invalid email address!")
    console.log("error");
    return (false)

  }
}
