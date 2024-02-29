import { LoaderFunction } from "react-router-dom";
import getAuthToken from "../utils/auth"

const tokenLoader: LoaderFunction = () => {
  return getAuthToken();
}

export default tokenLoader