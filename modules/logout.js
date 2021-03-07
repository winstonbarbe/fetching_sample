function onLogout(e) {
  localStorage.removeItem("jwt");
  const listElement = document.querySelectorAll("#videos li") || [];
  listElement.forEach(item => item.remove());
  console.log("User has ended session");
}

export default onLogout;