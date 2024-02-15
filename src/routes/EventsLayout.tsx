import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/events-navigation/EventsNavigation";

function EventsLayout() {
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default EventsLayout;
