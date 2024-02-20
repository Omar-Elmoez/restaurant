import { useRouteLoaderData } from "react-router-dom";
import { EventItem } from "../components";
import Event from "../types/event.types";

function EventDetails() {
  const { event } = useRouteLoaderData('event-detail') as { event: Event };
  return <EventItem event={event} />;
}

export default EventDetails;
