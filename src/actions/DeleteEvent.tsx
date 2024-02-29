import { ActionFunction, json, redirect } from "react-router-dom";
import getAuthToken from "../utils/auth";

const DeleteEvent: ActionFunction = async ({ params, request }) => {
  const token = getAuthToken();
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    // method: "DELETE"
    method: request.method,
    headers: {
      'Authorization': 'Bearer ' + token
    }
  });

  if (!response.ok) {
    throw json({ message: "You're not allowed to delete this event" }, { status: 500 });
  }

  return redirect("/events");
};

export default DeleteEvent;