//Login or signup functions
const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

//signup function
const signupFormHandler = async (event) => {
  event.preventDefault();

  const fname = document.getElementById('#firstName').value.trim();
  const lname = document.getElementById('#lastName').value.trim();
  const uname = document.getElementById('#userName').value.trim();
  const email = document.querySelector("#emailAddress").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (fname && lname && uname && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ fname, lname, uname, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert(response.statusText);
    }
  }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);


document
  .getElementById("login-btn")
  .addEventListener("click", loginFormHandler);
