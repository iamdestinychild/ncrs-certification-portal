import { NavLink } from "react-router-dom";

function CustomLink({ children, to, icon }) {
  return (
    <NavLink
      className={({ isActive }) =>
        `p-4 flex items-center mb-2 text-base rounded-md gap-2 ${isActive ? "bg-red-100 " : "hover:bg-red-50/50"}`
      }
      to={to}
    >
      <span>{icon}</span>
      {children}
    </NavLink>
  );
}

export default CustomLink;
