import { ActionFunction } from "react-router-dom";

const NewsletterAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  if (!email) {
    return { message: 'Please enter your email..' };
  }
  return { message: 'Signup successful!' };
}

export default NewsletterAction