
import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brand-lightBg font-sans text-slate-900 transition-colors duration-300 dark:bg-brand-darkBg dark:text-slate-100">
      <div
        className="noise-bg pointer-events-none fixed inset-0 z-50 opacity-[0.03]"
        aria-hidden="true"
      />

      <NavBar />

      <main className="mx-auto max-w-6xl">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
