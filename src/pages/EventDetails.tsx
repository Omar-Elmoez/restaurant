import { useParams } from "react-router-dom";

function EventDetails() {

  const { id } = useParams();

  return (
    <div>
      <h1>EventDetails</h1>
      <p>Event ID: {id}</p>
    </div>
  );
}

export default EventDetails;
