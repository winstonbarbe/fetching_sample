import onSignup from "./modules/signup.js";
import onLogin from "./modules/login.js";
import onLogout from "./modules/logout.js";
import { populateList } from "./modules/library.js";
import onUpload from "./modules/upload.js";

const signup = document.querySelector("#signup");
const login = document.querySelector("#login");
const logout = document.querySelector(".logout");
const videosList = document.querySelector("#videos");
const userVideos = JSON.parse(localStorage.getItem("videos")) || [];
const videoUpload = document.querySelector("#upload");


videoUpload.addEventListener("submit", onUpload);

signup.addEventListener("submit", onSignup);
login.addEventListener("submit", onLogin);
logout.addEventListener("click", onLogout);

populateList(userVideos, videosList);