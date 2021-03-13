import sessionChange from "./sessionChange.js";

function onLogout(e) {
  localStorage.removeItem("jwt");
  const listElement = document.querySelectorAll("#videos li") || [];
  listElement.forEach(item => item.remove());
  console.log("User has ended session");
  document.querySelector(".viewer").src = "./652333414.mp4";
  sessionChange();
  const library = document.querySelector(".videos");
  library.innerHTML =  `
    <ul id="videos">
      <li>Upload your videos here...</li>
    </ul>
  `;
  
}

export default onLogout;