import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Sidebar } from "@/components";
import { Home, Dashboard, Settings } from "@/pages";
import { AdminLayout, UserLayout } from "./layouts";

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        {/* <UserLayout>
          <div className="wrapper">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </UserLayout> */}

        <AdminLayout>
        <div className="wrapper">
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/settings" element={<Settings/>} />
            </Routes>
          </div>
        </AdminLayout>

      </div>
    </BrowserRouter>
  );
}

export default App;
