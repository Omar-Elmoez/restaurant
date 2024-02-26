import { json, defer } from "react-router-dom";
import Data from "../types/data.types";

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  }

  const resData = await response.json() as Data;
  return resData.events;
}

function EventsLoader() {
  return defer({
    events: loadEvents(),
  })
}

export default EventsLoader;

