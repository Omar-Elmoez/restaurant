import { ActionFunction, json, redirect } from "react-router-dom"

type Mode = 'login' | 'signup'

const authAction: ActionFunction = async ({ request }) => {
  const mode = (new URL(request.url).searchParams.get('mode') as Mode) || 'login';
  const data = await request.formData();

  const userData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })

  if (response.status === 422 || response.status === 401) {
    return response
  }

  if (!response.ok) {
    throw json({ message: 'Could not authenticate user.' }, { status: 500 })
  }

  return redirect('/');

}

export default authAction
