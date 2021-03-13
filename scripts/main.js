import onSignup from "./modules/signup.js";
import onLogin from "./modules/login.js";
import onLogout from "./modules/logout.js";
import onUpload from "./modules/upload.js";
import onPageLoad from "./modules/pageLoad.js";
import chooseVideo from "./modules/videoSelect.js";

// Not Logged In Modules
import upload from "./modulesNotLogged/upload.js";

const signup = document.querySelector("#signup");
const login = document.querySelector("#login");
const logout = document.querySelector(".logout");
const videosList = document.querySelector("#videos");
const videoUpload = document.querySelector("#upload");



videoUpload.addEventListener("change", localStorage.getItem("jwt") ? onUpload : upload);
videosList.addEventListener("click", chooseVideo);

signup.addEventListener("submit", onSignup);
login.addEventListener("submit", onLogin);
logout.addEventListener("click", onLogout);

if (localStorage.getItem("jwt")) {
  onPageLoad(videosList);
} 





