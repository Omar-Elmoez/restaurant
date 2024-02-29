function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");

  if (!storedExpirationDate) {
    return null;
  }

  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();

  return duration;
}

export default getTokenDuration;
