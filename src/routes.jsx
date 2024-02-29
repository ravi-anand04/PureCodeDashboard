// import { lazy, Suspense } from "react";
// import { Navigate } from "react-router-dom";
// import useSettings from "hooks/useSettings";
// import LoadingScreen from "components/LoadingScreen";
// import LayoutV1 from "layouts/layout-v1/DashboardLayout";
// import LayoutV2 from "layouts/layout-v2/LayoutV2";
// import LayoutV3 from "layouts/layout-v3/DashboardLayout";

// const Loadable = (Component) => (props) => {
//   return (
//     <Suspense fallback={<LoadingScreen />}>
//       <Component {...props} />
//     </Suspense>
//   );
// }; // dashboards

// const CRM = Loadable(lazy(() => import("./pages/dashboards/crm")));
// const Sales = Loadable(lazy(() => import("./pages/dashboards/sales")));
// const SalesV2 = Loadable(lazy(() => import("./pages/dashboards/sales-v2")));
// const SaaS = Loadable(lazy(() => import("./pages/dashboards/saas")));
// const ProjectManagement = Loadable(
//   lazy(() => import("./pages/dashboards/project-management"))
// );
// const ProjectManagementV2 = Loadable(
//   lazy(() => import("./pages/dashboards/project-management-v2"))
// );
// const JobManagement = Loadable(
//   lazy(() => import("./pages/dashboards/job-management"))
// );
// const LearningManagement = Loadable(
//   lazy(() => import("./pages/dashboards/learning-management"))
// ); // account

// const ProjectDetails = Loadable(
//   lazy(() => import("./pages/projects/project-details"))
// );
// const ProjectV1 = Loadable(lazy(() => import("./pages/projects/project-v1")));
// const ProjectV2 = Loadable(lazy(() => import("./pages/projects/project-v2")));
// const TeamMember = Loadable(lazy(() => import("./pages/projects/team-member")));
// const ProjectV3 = Loadable(lazy(() => import("./pages/projects/project-v3"))); // Landing page

// const Error = Loadable(lazy(() => import("./pages/404")));

// const ActiveLayout = () => {
//   const { settings } = useSettings(); // console.log(settings);

//   switch (settings.activeLayout) {
//     case "layout1":
//       return <LayoutV1 />;

//     case "layout2":
//       return <LayoutV2 />;

//     case "layout3":
//       return <LayoutV3 />;

//     default:
//       return <LayoutV1 />;
//   }
// };

// const routes = () => {
//   return [
//     ...authRoutes,
//     {
//       path: "dashboard",
//       element: <ActiveLayout />,
//       children: dashboardRoutes,
//     },
//     {
//       path: "*",
//       element: <Error />,
//     },
//   ];
// };

// const authRoutes = [
//   {
//     path: "/",
//     element: <Navigate to="/dashboard" />,
//   },
// ];
// const dashboardRoutes = [
//   {
//     path: "",
//     element: <LearningManagement />,
//   },
//   {
//     path: "job-management",
//     element: <JobManagement />,
//   },
//   {
//     path: "sales",
//     element: <Sales />,
//   },
//   {
//     path: "sales-v2",
//     element: <SalesV2 />,
//   },
//   {
//     path: "crm",
//     element: <CRM />,
//   },
//   {
//     path: "saas",
//     element: <SaaS />,
//   },
//   {
//     path: "sub-child-v1",
//     element: <SalesV2 />,
//   },
//   {
//     path: "sub-child-v2",
//     element: <ProjectManagement />,
//   },
//   {
//     path: "sub-child-v3",
//     element: <ProjectManagementV2 />,
//   },
//   {
//     path: "project-management",
//     element: <ProjectManagement />,
//   },
//   {
//     path: "project-management-v2",
//     element: <ProjectManagementV2 />,
//   },
//   {
//     path: "project-v1",
//     element: <ProjectV1 />,
//   },
//   {
//     path: "project-v2",
//     element: <ProjectV2 />,
//   },
//   {
//     path: "project-v3",
//     element: <ProjectV3 />,
//   },
//   {
//     path: "team-member",
//     element: <TeamMember />,
//   },
//   {
//     path: "project-details",
//     element: <ProjectDetails />,
//   },
// ];
// export default routes;
