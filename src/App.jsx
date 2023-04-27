import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { Sidebar } from "@/components";
import { Home, Discount, Dashboard, Settings, Notifications, Messages } from "@/pages";
import { AdminLayout, UserLayout } from "./layouts";
import { AboutUs, Appearance, NotificationsSettings, ProductsManagement, Security, YourRestaurant } from "./components";

function App() {
  const isAdmin = true;


  return (
    <BrowserRouter>
      <div className="container">

        {isAdmin ? (
          <AdminLayout>
            <div className="wrapper">
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/discount" element={<Discount />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/messages" element={<Messages />} />
                <Route path="/notifications" element={<Notifications />} />
                <Route path="/settings" element={<Settings />}/>
                <Route path="*" element={<Navigate to="/home" />} />
              </Routes>
            </div>
          </AdminLayout>
        ) : (
            <UserLayout>
              <div className="wrapper">
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/discount" element={<Discount />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/notifications" element={<Notifications />} />
                  <Route path="*" element={<Navigate to="/home" />} />
                </Routes>
              </div>
            </UserLayout>
        )}

        {/* <Routes>
          <Route element={<AdminLayout/>}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Route>
        </Routes> */}





      </div>
    </BrowserRouter>
  );
}

export default App;
