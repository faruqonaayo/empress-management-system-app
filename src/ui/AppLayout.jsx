import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <main className="flex h-[91vh] w-full">
        <Sidebar />
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
