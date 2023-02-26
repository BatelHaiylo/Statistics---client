import { useRoutes } from "react-router-dom";
import { SignUp, SignIn, Dashboard, Team, Contacts, Invoices, Form, Bar, Pie, Line, FAQ, Geography, Calendar, NotFound} from "./lazyLoading"
export default function Router() {
  return useRoutes([
    {
      path: "/auth/signUp",
      element: <SignUp />,
    },
    {
      path: "/auth/signIn",
      element: <SignIn />,
    },
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/team",
      element: <Team />,
    },
    {
      path: "/contacts",
      element: <Contacts />,
    },
    {
      path: "/invoices",
      element: <Invoices />,
    },
    {
      path: "/form",
      element: <Form />,
    },
    {
      path: "/bar",
      element: <Bar />,
    },
    {
      path: "/pie",
      element: <Pie />,
    },
    {
      path: "/line",
      element: <Line />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/geography",
      element: <Geography />,
    },
    {
      path: "/calendar",
      element: <Calendar />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
}
