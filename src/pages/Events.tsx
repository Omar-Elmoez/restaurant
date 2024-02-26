import { Await, useLoaderData } from "react-router-dom";
import { EventsList } from "../components";
import Data from "../types/data.types";
import { Suspense } from "react";
import Event from "../types/event.types";

function EventsPage() {
  const { events } = useLoaderData() as Data;
  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events as Event[]} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
