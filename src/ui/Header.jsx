import Logo from "./Logo";
import User from "./User";

function Header() {
  return (
    <header className="w-full z-10 flex items-center justify-between py-3 shadow-md px-6">
      <Logo />
      <User />
    </header>
  );
}

export default Header;
