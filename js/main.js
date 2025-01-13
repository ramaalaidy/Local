document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault(); 

  const email = document.querySelector('input[type="email"]').value.trim();
  const password = document.querySelector('input[type="password"]').value.trim();

  if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
  }

  if (password === "") {
      alert("Password cannot be empty!");
      return;
  }

  alert("Login successful!");
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}


window.location.href 

        
