import { createBrowserRouter } from "react-router"
import {
  AnalyticsPage,
  DashboardPage,
  HomePage,
  LearnPage,
  LoginPage,
  NotFoundPage,
  ReportsPage,
  ScreeningPage,
} from "./screens"

export const router = createBrowserRouter([
  { path: "/", Component: HomePage },
  { path: "/learn", Component: LearnPage },
  { path: "/sign-in", Component: LoginPage },
  { path: "/dashboard", Component: DashboardPage },
  { path: "/screening", Component: ScreeningPage },
  { path: "/reports", Component: ReportsPage },
  { path: "/analytics", Component: AnalyticsPage },
  { path: "*", Component: NotFoundPage },
])
