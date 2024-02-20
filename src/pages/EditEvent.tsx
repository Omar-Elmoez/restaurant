import { useRouteLoaderData } from "react-router-dom";
import { EventForm } from "../components";
import Event from "../types/event.types";

function EditEvent() {
  const { event } = useRouteLoaderData('event-detail') as { event: Event };
  return <EventForm event={event} />;
}

export default EditEvent;
