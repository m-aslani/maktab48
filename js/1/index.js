let message_num = document.getElementById("invalid-num");
let message_email = document.getElementById("invalid-email");
let num = document.getElementById("phone");
let email = document.getElementById("email");
let flag0 = false;
let flag1 = false;

num.onkeyup = function () {
    if(num.value == null){
        message_num.style.display = "none";
    }
   else if(validatePhone(num.value)){
    message_num.style.display = "none";
    }
    else{
        flag0 = true;
        message_num.style.display = "block";
    }
};
email.onkeyup = function(){
    if(email.value == null){
        message_email.style.display = "none";
    }
    else if(validateEmail(email.value)){
        message_email.style.display = "none";
    }
    else{
        flag1 = true;
        message_email.style.display = "block";
    }
}

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
function validatePhone(phoneNumber) {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phoneNumber));
}

function submite(){
    console.log("1 "+flag0);
    console.log("2 "+flag1);
    if(!flag1 || !flag0){
        alert("fill the blank")
    }
    else{
        alert("your information submited succsesfully!")
        document.getElementById("in1").style.display = "none";
        document.getElementById("in2").style.display = "block";
        document.getElementById("name").innerHTML = document.getElementById("f-name").value;
        document.getElementById("last").innerHTML = document.getElementById("l-name").value;
        document.getElementById("phone-n").innerHTML = document.getElementById("phone").value;
        document.getElementById("e-mail").innerHTML = document.getElementById("email").value;
        document.getElementById("Country").innerHTML = document.getElementById("country").value;
        document.getElementById("sub").innerHTML = document.getElementById("text").value;
    }
}