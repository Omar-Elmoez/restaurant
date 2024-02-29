import { useRouteError } from "react-router-dom";
import { PageContent } from "../components";
import Response from "../types/response.types";

function ErrorPage() {

  const error = useRouteError() as Response;

  let title = "An Error Occurred!";
  let errorMessage = "Oops! Something went wrong.";

  if (error.status === 500) {
    errorMessage = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found";
    errorMessage = "Could not find resource or page.";
  }

  return (
    <>
    <PageContent title={title}>
      <p>{errorMessage}</p>
    </PageContent>
    </>
  );
}

export default ErrorPage