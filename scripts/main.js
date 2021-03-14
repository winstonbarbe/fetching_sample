import onSignup from "./modules/signup.js";
import onLogin from "./modules/login.js";
import onLogout from "./modules/logout.js";
import onUpload from "./modules/upload.js";
import onPageLoad from "./modules/pageLoad.js";
import chooseVideo from "./modules/videoSelect.js";

// Session Dependent Actions
import uploadToView from "./modulesNotLogged/uploadToView.js";

const signup = document.querySelector("#signup");
const signupDisplay = document.querySelector(".signup");
const login = document.querySelector("#login");
const loginDisplay = document.querySelector(".login");
const logout = document.querySelector(".logout");
const videosList = document.querySelector("#videos");
const videoUpload = document.querySelector("#upload");
const player = document.querySelector(".player");

// Session Independent 
player.classList.replace("hidden_player", "visible_player");

// Session Dependent 
videoUpload.addEventListener("change", localStorage.getItem("jwt") ? onUpload : uploadToView);

// Active Session Actions
videosList.addEventListener("click", chooseVideo);

// Session Actions
signup.addEventListener("submit", onSignup);
login.addEventListener("submit", onLogin);
logout.addEventListener("click", onLogout);

if (localStorage.getItem("jwt")) {
  loginDisplay.classList.replace("visible", "hidden");
  signupDisplay.classList.replace("visible", "hidden");
  logout.classList.replace("hidden", "visible");
  onPageLoad(videosList);
} else {
  loginDisplay.classList.replace("hidden", "visible");
  signupDisplay.classList.replace("hidden", "visible");
  logout.classList.replace("visible", "hidden");
} 






