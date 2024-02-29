import getTokenDuration from "./ExpiredDuration";

export default function getAuthToken() {
  const token = localStorage.getItem('token');
  const tokenDuration = getTokenDuration();

  if (!token) {
    return null;
  }

  if (tokenDuration && tokenDuration < 0) {
    return 'EXPIRED';
  }

  return token;
}