import { NavLink } from "react-router-dom";

export default function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b-2 border-[#e9eee9] px-10">
      <NavLink to="/">
        <div>
          <img
            src="./empress-logo.png"
            alt="empress logo"
            className="w-16 cursor-pointer"
          />
        </div>
      </NavLink>
    </header>
  );
}
