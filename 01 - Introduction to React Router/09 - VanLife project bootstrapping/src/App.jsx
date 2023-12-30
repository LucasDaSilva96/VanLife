import React from "react";
import Home from "./ui/Home";
import About from "./ui/About";
import "./css/Header.css";
import Vans from "./ui/Vans.jsx";
import "./server/server.js";
import VanDetails from "./ui/VanDetails.jsx";
import Layout from "./ui/Layout.jsx";
import Income from "./ui/host_ui/Income.jsx";
import Reviews from "./ui/host_ui/Reviews.jsx";
import HostLayout from "./ui/host_ui/HostLayout.jsx";
import Dashboard from "./ui/host_ui/Dashboard.jsx";
import HostVans from "./ui/host_ui/HostVans.jsx";
import HostVanDetail from "./ui/host_ui/HostVanDetail.jsx";
import HostVanInfo from "./ui/host_ui/HostVanInfo.jsx";
import HostVanPricing from "./ui/host_ui/HostVanPricing.jsx";
import HostVanPhotos from "./ui/host_ui/HostVanPhotos.jsx";
import PageNotFound from "./ui/PageNotFound.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getHostVans } from "./api/fetchVans.js";

// function App() {
//   return (
//     <React.Fragment>
//       <div className="container">
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route path="*" element={<PageNotFound />} />
//               <Route index element={<Home />} />
//               <Route path="about" element={<About />} />
//               <Route path="vans" element={<Vans />} />
//               <Route path="vans/:id" element={<VanDetails />} />
//               // ↓ ***** HOST-UI ****************** ↓
//               <Route path="host" element={<HostLayout />}>
//                 <Route index element={<Dashboard />} />
//                 <Route path="income" element={<Income />} />
//                 <Route path="vans" element={<HostVans />} />
//                 <Route path="vans/:id" element={<HostVanDetail />}>
//                   <Route index element={<HostVanInfo />} />
//                   <Route path="pricing" element={<HostVanPricing />} />
//                   <Route path="photos" element={<HostVanPhotos />} />
//                 </Route>
//                 <Route path="reviews" element={<Reviews />} />
//               </Route>
//             </Route>
//           </Routes>
//         </BrowserRouter>
//       </div>
//       <footer>Ⓒ 2022 #VANLIFE</footer>
//     </React.Fragment>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "vans",
        element: <Vans />,
      },
      {
        path: "vans/:id",
        element: <VanDetails />,
      },
      {
        path: "host",
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "income",
            element: <Income />,
          },
          {
            path: "vans",
            element: <HostVans />,
            loader: async () => {
              return await getHostVans();
            },
          },
          {
            path: "vans/:id",
            element: <HostVanDetail />,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
              },
              {
                path: "pricing",
                element: <HostVanPricing />,
              },
              {
                path: "photos",
                element: <HostVanPhotos />,
              },
            ],
          },
          {
            path: "reviews",
            element: <Reviews />,
          },
        ],
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
