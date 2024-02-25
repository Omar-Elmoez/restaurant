import { ActionFunction, json, redirect } from "react-router-dom";

const NewEventAction: ActionFunction = async ({ request, params }) => {
  const data = await request.formData();
  
  const eventData = {
    title: data.get('title'),
    description: data.get('description'),
    date: data.get('date'),
    image: data.get('image'),
  }

  let url = 'http://localhost:8080/events'

  if (request.method === 'PATCH') {
    url = 'http://localhost:8080/events/' + params.id
  }

  const response = await fetch(url, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(eventData)
  })

  if (response.status === 422) {
    return response
  }

  if (!response.ok) {
    throw json({ message: 'Could not save event.' }, { status: 500 })
  }

  return redirect('/events');

}

export default NewEventAction