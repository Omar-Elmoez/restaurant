import { Outlet, useNavigate } from "react-router-dom";
import { MainNavigation } from "../components";
import { useEffect } from "react";
import getAuthToken from "../utils/auth";
import Logout from "../utils/Logout";


function RootLayout() {
  const navigate = useNavigate();

  const token = getAuthToken();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      return navigate("/auth?mode=login");
    }

    const timeoutId = setTimeout(() => {
      Logout();
      navigate("/auth?mode=login");
    }, 1 * 60 * 60 * 1000); // => 1 hour
  
    return () => clearTimeout(timeoutId); // => 1 hour
  }, [token, navigate]);

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
