const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "vikas" && password === "1234") {
        alert("You have successfully logged in.");
        window.location.href = "https://app.powerbi.com/view?r=eyJrIjoiNGE4MzExOWQtOGIwMC00OThmLTk5OGMtZGFiYmQ0YzBkZjcxIiwidCI6IjY1OWNjYWZiLWQxYzAtNGZjNS1iYmIzLTZhMmMzZjA1ZDA1ZSJ9&pageName=ReportSection";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})