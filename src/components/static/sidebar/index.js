import {
    PeopleOutlinedIcon,
    ContactsOutlinedIcon,
    ReceiptOutlinedIcon,
    PersonOutlinedIcon,
    CalendarTodayOutlinedIcon,
    HelpOutlineOutlinedIcon,
    BarChartOutlinedIcon,
    PieChartOutlineOutlinedIcon,
    TimelineOutlinedIcon,
    MapOutlinedIcon,
  } from "../../../route/components/sidebar";
  

const DataNavItems = [
  {
    title: "Manage Team",
    endPoint: "/team",
    icon: <PeopleOutlinedIcon />,
  },
  {
    title: "Contacts Information",
    endPoint: "/contacts",
    icon: <ContactsOutlinedIcon />,
  },
  {
    title: "Invoices Balances",
    endPoint: "/invoices",
    icon: <ReceiptOutlinedIcon />,
  },
]

const PagesNavItems = [
  {
    title: "Profile Form",
    endPoint: "/form",
    icon: <PersonOutlinedIcon />,
  },
  {
    title: "Calendar",
    endPoint: "/calendar",
    icon: <CalendarTodayOutlinedIcon />,
  },
  {
    title: "FAQ",
    endPoint: "/faq",
    icon: <HelpOutlineOutlinedIcon />,
  },
];

const ChartsNavItems = [
  {
    title: "Bar Chart",
    endPoint: "/bar",
    icon: <BarChartOutlinedIcon />,
  },
  {
    title: "Pie Chart",
    endPoint: "/pie",
    icon: <PieChartOutlineOutlinedIcon />,
  },
  {
    title: "Line Chart",
    endPoint: "/line",
    icon: <TimelineOutlinedIcon />,
  },
  {
    title: "Geography Chart",
    endPoint: "/geography",
    icon: <MapOutlinedIcon />,
  },
];

export { DataNavItems, PagesNavItems, ChartsNavItems}