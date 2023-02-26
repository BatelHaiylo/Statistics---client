import { lazy } from "react";
import LoadingGif from "../components/loading/LoadingGif";

const SignUp = LoadingGif(lazy(() => import("../pages/access/SignUp")));
const SignIn = LoadingGif(lazy(() => import("../pages/access/SignIn")));
const Dashboard = LoadingGif(lazy(() => import("../pages/dashboard/Dashboard")));
const Team = LoadingGif(lazy(() => import("../pages/team/Team")));
const Contacts = LoadingGif(lazy(() => import("../pages/contacts/Contacts")));
const Invoices = LoadingGif(lazy(() => import("../pages/invoices/Invoices")));
const Form = LoadingGif(lazy(() => import("../pages/charts/Form")));
const Bar = LoadingGif(lazy(() => import("../pages/charts/Bar")));
const Pie = LoadingGif(lazy(() => import("../pages/charts/Pie")));
const Line = LoadingGif(lazy(() => import("../pages/charts/Line")));
const FAQ = LoadingGif(lazy(() => import("../pages/access/SignIn")));
const Geography = LoadingGif(lazy(() => import("../pages/charts/Geography")));
const Calendar = LoadingGif(lazy(() => import("../pages/team/Team")));
const NotFound = LoadingGif(lazy(() => import("../pages/error/NotFound")));

export { SignUp, SignIn, Dashboard, Team, Contacts, Invoices, Form, Bar, Pie, Line, FAQ, Geography, Calendar, NotFound}
