import { Link } from "react-router-dom";

function Events() {
  const events = [
    {
      id: "e1",
      title: "Event ONe",
      date: "2023-04-2",
      image:
        "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
      description:
        "Join this amazing event and connect with fellow developers.",
    },
    {
      id: "e2",
      title: "A dummy event Two",
      date: "2023-02-22",
      image:
        "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
      description:
        "Join this amazing event and connect with Fellow developers.",
    },
    {
      id: "e3",
      title: "Event THree",
      date: "2023-07-06",
      image:
        "https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Marketing%20Events%20DACH%202021.jpg",
      description:
        "Join this amazing event and connect with Fellow developers.",
    },
  ];

  return (
    <div>
      <h1>All Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to= {`/events/${event.id}`}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
