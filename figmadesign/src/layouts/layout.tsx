import React from "react";
import Navbar from "@/shared/components/organisms/Navbar";
import Footer from "@/shared/components/organisms/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet /> {/* Page content gets injected here */}
      </main>
      <Footer />
    </div>
  );
}
