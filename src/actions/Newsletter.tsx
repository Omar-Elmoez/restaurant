import { ActionFunction } from "react-router-dom";

const NewsletterAction: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const email = data.get('email');

  // send to backend newsletter server ...
  console.log(email);
  return { message: 'Signup successful!' };
}

export default NewsletterAction