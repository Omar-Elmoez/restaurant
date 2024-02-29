import { redirect } from "react-router-dom";
import getAuthToken from "../utils/auth";

export default function checkAuthLoader() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null
}