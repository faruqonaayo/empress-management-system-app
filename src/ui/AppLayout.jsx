import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import Sidebar from "./Sidebar";

export default function AppLayout() {
  return (
    <>
      <AppHeader />
      <main className="font-lato flex h-[91vh] w-full">
        <Sidebar />
        <div className="h-full overflow-y-scroll w-full">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
