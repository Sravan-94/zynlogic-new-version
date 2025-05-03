import React, { Suspense, lazy } from "react";
import Navbar from "./Navbar";

// Lazy load the Footer component
const Footer = lazy(() => import("./Footer"));

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow pt-20 md:pt-24">
        {children}
      </main>
      <Suspense fallback={<div className="h-40 bg-gray-50"></div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Layout;
