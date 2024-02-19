import { useLoaderData } from "react-router-dom";
import { EventItem } from "../components";
import Event from "../types/event.types";

function EventDetails() {
  const { event } = useLoaderData() as { event: Event };
  return <EventItem event={event} />;
}

export default EventDetails;
