import { Outlet } from "react-router-dom";
import { EventsNavigation } from "../components";

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
