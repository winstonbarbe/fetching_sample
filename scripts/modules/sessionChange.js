function sessionChange () {
  const logout = document.querySelector(".logout");
  const login = document.querySelector(".login");
  const signup = document.querySelector(".signup");
  logout.classList.toggle("hidden");
  login.classList.toggle("hidden");
  signup.classList.toggle("hidden");
}

export default sessionChange;