const $loginInput = document.querySelector("#login-form input");
const $loginForm = document.querySelector("#login-form");
const $loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  const username = $loginInput.value;
  $loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
  
const savedUsername = localStorage.getItem(USERNAME_KEY);


if (savedUsername === null) {
  $loginForm.classList.remove(HIDDEN_CLASSNAME);
   $loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

$loginForm.addEventListener("submit", onLoginSubmit);