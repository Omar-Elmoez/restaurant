import { Await, useRouteLoaderData } from "react-router-dom";
import { EventItem, EventsList } from "../components";
import Event from "../types/event.types";
import { Suspense } from "react";


function EventDetails() {
  const { event, events } = useRouteLoaderData("event-detail") as {
    event: Event;
    events: Event[];
  };
  return (
    <>
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={event}>
        {(event) => <EventItem event={event as Event} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(events) => <EventsList events={events as Event[]} />}
      </Await>
    </Suspense>
    </>
  );
}

export default EventDetails;
