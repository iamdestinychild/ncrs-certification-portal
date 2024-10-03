import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout() {
  return (
    <div className="grid grid-rows-[5em_auto] h-screen bg-white w-full">
      <Header />
      <main className="grid overflow-y-auto md:grid-cols-[14em_auto] lg:grid-cols-[20em_auto]">
        <SideBar />
        <div className="pt-10 px-2">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AppLayout;
