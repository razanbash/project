//this code belongs to login.html

var form = document.getElementById("loginForm");     
var email = document.getElementById("email");        
var password = document.getElementById("password");   

email.addEventListener("input", function() {        
email.setCustomValidity("");                       
});
password.addEventListener("input", function() {      
password.setCustomValidity("");                   
});

form.addEventListener("submit", function(e) {        
e.preventDefault();                                

  if (!email.value.trim()) {
    email.setCustomValidity("Please fill out the Email field");          
    email.reportValidity();                                                 
    return;                                                              
  }

  if (!password.value.trim()) {                                          
    password.setCustomValidity("Please fill out the Password field");       
    password.reportValidity();                                              
    return;
  }
  alert("Login successful!");                                              
});



//this code belongs to reviews.html

function addLike(btn) {
    const span = btn.querySelector("span");
    let count = parseInt(span.innerText);
    span.innerText = count + 1;
  }

