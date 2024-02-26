import { defer } from "react-router-dom";
import loadEvents from "../utils/LoadEvents";

function EventsLoader() {
  return defer({
    events: loadEvents(),
  })
}

export default EventsLoader;

