import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import { useModal } from "../hooks/useModal";
import useCloseOnScroll from "../hooks/useCloseOnScroll";
import { useOutsideClick } from "../hooks/useOutsideClick";

const MenusContext = createContext();

function Menus({ children }) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);
  const close = () => setOpenId("");
  const open = (id) => {
    close();
    setOpenId(id);
  };

  useCloseOnScroll(openId !== "", close);

  return (
    <MenusContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const { open, setPosition } = useContext(MenusContext);

  function handleClick(e) {
    e.stopPropagation();
    const rect = e.target.closest("button").getBoundingClientRect();
    const x = window.innerWidth - rect.width - rect.x;
    const y = rect.y + rect.height + 8;

    setPosition({
      x: x,
      y: y,
    });

    open(id); // Open the menu, handled in the Menus context
  }

  return (
    <button
      className="p-2 bg-transparent hover:bg-gray-100 rounded-md transition-transform transform"
      onClick={handleClick}
    >
      <HiEllipsisVertical className="w-6 h-6 text-gray-700" />
    </button>
  );
}

function List({ id, children }) {
  const { openId, position, close } = useContext(MenusContext);
  const ref = useOutsideClick(close);

  if (openId !== id) return null;

  return createPortal(
    <ul
      ref={ref}
      className="fixed w-32 bg-[#1C5237] shadow-md rounded-sm"
      style={{
        right: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {children}
    </ul>,
    document.body
  );
}

function Button({ children, onClick }) {
  const { close } = useContext(MenusContext);

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <button
        className="w-full text-left hover:bg-[#216443] font-normal text-xs text-white bg-transparent p-3 flex items-center gap-4"
        onClick={handleClick}
      >
        <span>{children}</span>
      </button>
    </li>
  );
}

Menus.Menu = ({ children }) => (
  <div className="flex items-center justify-end">{children}</div>
);
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
