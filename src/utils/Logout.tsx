function Logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("expiration");
}

export default Logout