import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EditEvent, ErrorPage, EventDetails, Events, Home, NewEvent } from "../pages";
import RootLayout from "./RootLayout";
import EventsLayout from "./EventsLayout";
import EventsLoader from "../loaders/Events";
import EventDetailsLoader from "../loaders/EventDetails";

const Routes = () => {
  // const MainRoutes = [
  //   {
  //     path: "/",
  //     element: <RootLayout />,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home />
  //       },
  //       {
  //         path: "events",
  //         element: <EventsLayout />,
  //         children: [
  //           {
  //             index: true,
  //             element: <Events />
  //           },
  //           {
  //             path: ":id",
  //             element: <EventDetails />
  //           },
  //           {
  //             path: "new",
  //             element: <NewEvent />
  //           },
  //           {
  //             path: ":id/edit",
  //             element: <EditEvent />
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]

  // const EventsRoutes = [
  //   {
  //     path: "/",
  //     element: <EventsLayout />,
  //     children: [
  //       {
  //         path: "events/:id",
  //         element: <EventDetails />
  //       },
  //       {
  //         path: "events/new",
  //         element: <NewEvent />
  //       },
  //       {
  //         path: "events/:id/edit",
  //         element: <EditEvent />
  //       }
  //     ]
  //   }
  // ]

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "events",
          element: <EventsLayout />,
          children: [
            {
              index: true,
              element: <Events />,
              loader: EventsLoader,
            },
            {
              path: ":id",
              id: "event-detail",
              loader: EventDetailsLoader,
              children: [
                {
                  index: true,
                  element: <EventDetails />,               
                },
                {
                  path: "edit",
                  element: <EditEvent />,
                },
              ]
            },
            {
              path: "new",
              element: <NewEvent />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
