import { LoaderFunction, json } from "react-router-dom";

const EventDetailsLoader: LoaderFunction<{ params: { id: string } }> = async ({
  params,
}) => {

  const id = params.id;
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: "Could not fetch event." }, { status: 500 });
  }

  return response;
};

export default EventDetailsLoader;
