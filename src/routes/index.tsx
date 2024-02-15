import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { EditEvent, EventDetails, Events, Home, NewEvent } from "../pages";
import RootLayout from "./RootLayout";
import EventsLayout from "./EventsLayout";

const Routes = () => {

  const MainRoutes = [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/events",
          element: <Events />
        }
      ]
    }
  ]

  const EventsRoutes = [
    {
      path: "/",
      element: <EventsLayout />,
      children: [
        {
          path: "/events/:id",
          element: <EventDetails />
        },
        {
          path: "/events/new",
          element: <NewEvent />
        },
        {
          path: "/events/:id/edit",
          element: <EditEvent />
        }
      ]
    }
  ]

  const router = createBrowserRouter([
    ...MainRoutes,
    ...EventsRoutes
  ]);

  return <RouterProvider router={router} />
}

export default Routes