import { ActionFunction, json, redirect } from "react-router-dom";

const DeleteEvent: ActionFunction = async ({ params, request }) => {
  const response = await fetch("http://localhost:8080/events/" + params.id, {
    // method: "DELETE"
    method: request.method
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
};

export default DeleteEvent;