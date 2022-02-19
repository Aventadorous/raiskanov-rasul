let password = document.getElementById('password');
let names = document.getElementById('names');
let email = document.getElementById('email');

function check(){
  if (email.value === "aventador" && password.value === "212514"){
    alert("You have succsecfully joined");
    window.open("profile.html");
  }
  else if (email.value === "faceislove" && password.value === "123456"){
    alert("You have succsecfully joined");
    window.open("profile.html");
  }
  else{
    alert("You email or password is wrong!");
  }
}
