function onLogout(e) {
  localStorage.removeItem("jwt");
  localStorage.removeItem("videos");
  const listElement = document.querySelectorAll("#videos li") || [];
  listElement.forEach(item => item.remove());
}

export default onLogout;