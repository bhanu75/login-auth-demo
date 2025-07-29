function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // 👇 Simple hardcoded check (just for demo purposes)
  if (user === "bhanu" && pass === "1234") {
    document.getElementById("message").textContent = "Login successful!";
    document.getElementById("message").style.color = "green";
  } else {
    document.getElementById("message").textContent = "Invalid login";
    document.getElementById("message").style.color = "red";
  }
}
