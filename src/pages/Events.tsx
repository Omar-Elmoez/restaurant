import { useLoaderData } from "react-router-dom";
import { EventsList } from "../components";
import Data from "../types/data.types";



function EventsPage() {
  const data = useLoaderData() as Data;

  return <EventsList events={data.events} />;
}

export default EventsPage;
