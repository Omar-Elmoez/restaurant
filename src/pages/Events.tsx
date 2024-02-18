import { useLoaderData } from "react-router-dom";
import { EventsList } from "../components";
import Data from "../types/data.types";

function EventsPage() {
  const { events } = useLoaderData() as Data;

  return <EventsList events={events} />;
}

export default EventsPage;
