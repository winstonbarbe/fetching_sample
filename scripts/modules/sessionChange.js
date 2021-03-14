function sessionChange () {
  const logout = document.querySelector(".logout");
  const login = document.querySelector(".login");
  const signup = document.querySelector(".signup");
  logout.classList.toggle("hidden");
  logout.classList.toggle("visible");
  login.classList.toggle("hidden");
  login.classList.toggle("visible");
  signup.classList.toggle("hidden");
  signup.classList.toggle("visible");
}

export default sessionChange;