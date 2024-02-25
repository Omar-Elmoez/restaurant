import {
  Form,
  useActionData,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import classes from "./EventForm.module.css";
import Event from "../../types/event.types";
import ValidationResponse from "../../types/ValidationResponse";

function EventForm({ event, method }: { event?: Event, method: 'post' | 'patch' }) {
  const navigate = useNavigate();

  const data = useActionData() as ValidationResponse;

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  function cancelHandler() {
    navigate("..");
  }

  return (
    <Form method={method} className={classes.form}>
      {data && data.errors && (
        <p style={{ color: "red", fontWeight: "bold", textAlign: "center" }}>
          {data.message}
        </p>
      )}
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          // required
          defaultValue={event?.title}
        />
        {data && data.errors.title}
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          // required
          defaultValue={event?.image}
        />
        {data && data.errors.image}
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          // required
          defaultValue={event?.date}
        />
        {data && data.errors.date}
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows={5}
          // required
          defaultValue={event?.description}
        />
      </p>
      <div style={{ color: "red" }}>{data && data.errors.description}</div>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler} disabled={isSubmitting}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Save"}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
