import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import Bayan from "../Components/Bayan/Bayan";
import IslamicIssues from "../Components/IslamicIssues/IslamicIssues";
import DashboardLayout from "../Components/DashboardLayout/DashboardLayout";
import Naats from "../Components/Naats/Naats";
import Hadiths from "../Components/Hadiths/Hadiths";
import IslamicCalendar from "../Components/IslamicCalendar/IslamicCalendar";
import BayanDetail from "../Components/BayanDetail/BayanDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "bayan",
        element: <Bayan />,
      },
      {
        path: "bayan-deatil",
        element: <BayanDetail />,
      },
      {
        path: "islamic-issues",
        element: <IslamicIssues />,
      },
      {
        path: "islamic-naats",
        element: <Naats />,
      },
      {
        path: "hadiths",
        element: <Hadiths />,
      },
      {
        path: "islamic-calendar",
        element: <IslamicCalendar />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
