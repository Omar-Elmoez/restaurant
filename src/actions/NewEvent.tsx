import { ActionFunction, json, redirect } from "react-router-dom";

const NewEventAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  
  const eventData = {
    title: data.get('title'),
    description: data.get('description'),
    date: data.get('date'),
    image: data.get('image'),
  }

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })

  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 })
  }

  return redirect('/events');

}

export default NewEventAction