import Logo from "../ui/Logo"
import Box from "../assets/Boxes.png";


function ResetPassword() {
    return (
        <div className="flex md:gap-20 lg:gap-2 flex-col items-center justify-center">
        <header className="w-full z-10 flex items-center justify-between py-3 px-6">
          <Logo />
        </header>
  
        <img
          className="absolute pointer-events-none hidden md:block right-0 top-0"
          src={Box}
          alt="alt_image"
        />
        <img
          className="absolute pointer-events-none hidden md:block left-0 rotate-180 bottom-0"
          src={Box}
          alt="alt_image"
        />
        </div>
    )
}

export default ResetPassword