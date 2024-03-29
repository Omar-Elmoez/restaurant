import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { EditEvent, ErrorPage, EventDetails, Events, Home, NewEvent, NewsletterPage } from "../pages";
import RootLayout from "./RootLayout";
import EventsLayout from "./EventsLayout";
import EventsLoader from "../loaders/Events";
import EventDetailsLoader from "../loaders/EventDetails";
import NewEventAction from "../actions/NewEvent";
import DeleteEvent from "../actions/DeleteEvent";
import NewsletterAction from "../actions/Newsletter";
import AuthenticationPage from "../pages/Authentication";
import authAction from "../actions/Auth";
import tokenLoader from "../loaders/Token";
import checkAuthLoader from "../loaders/CheckAuth";

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
      loader: tokenLoader,
      id: 'root',
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
                  action: DeleteEvent           
                },
                {
                  path: "edit",
                  element: <EditEvent />,
                  action: NewEventAction,
                  loader: checkAuthLoader,
                },
              ]
            },
            {
              path: "new",
              element: <NewEvent />,
              action: NewEventAction,
              loader: checkAuthLoader,
            },
          ],
        },
        {
          path: 'newsletter',
          element: <NewsletterPage />,
          action: NewsletterAction,
        },
        {
          path: 'auth',
          element: <AuthenticationPage />,
          action: authAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
