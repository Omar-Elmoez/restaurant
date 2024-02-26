import { LoaderFunction, defer, json } from "react-router-dom";
import Event from "../types/event.types";
import loadEvents from "../utils/LoadEvents";

async function loadEvent(id: string) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: "Could not fetch event." }, { status: 500 });
  }
  const resData = await response.json() as { event: Event };
  return resData.event;
}

const EventDetailsLoader: LoaderFunction<{ params: { id: string } }> = async ({
  params,
}) => {
  const id = params.id;

  return defer({
    event: await loadEvent(id as string),
    events: loadEvents(),
  })

};

export default EventDetailsLoader;
