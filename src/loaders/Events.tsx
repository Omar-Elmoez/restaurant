import { json } from "react-router-dom";

async function EventsLoader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  }

  return response;
}

export default EventsLoader;
