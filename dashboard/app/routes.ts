import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  //protected routes
  layout("routes/ProtectRoute.tsx", [
    layout("layout/MainLayout.tsx", [
      index("routes/home.tsx")
    ])
  ]),

  //public routes
  route("auth/login", "routes/auth/login.tsx"),
  route("auth/register", "routes/auth/register.tsx"),
  route("auth/admin/login", "routes/auth/admin/login.tsx"),
] satisfies RouteConfig;
