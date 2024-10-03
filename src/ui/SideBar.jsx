import { HiHome } from "react-icons/hi";
import CustomLink from "./CustomLink";
import { TbBriefcase2Filled } from "react-icons/tb";
import Button from "./Button";
import { LuLogOut } from "react-icons/lu";
import useLogOut from "../features/user/useLogOut";

function SideBar() {
  const { logout, isLoading } = useLogOut();
  return (
    <div className=" flex flex-col justify-between border-r-2 pt-10">
      <div className="p-4">
        <CustomLink icon={<HiHome />} to={"/"}>
          Home
        </CustomLink>
        <CustomLink icon={<TbBriefcase2Filled />} to={"/certificates"}>
          Certificates
        </CustomLink>
      </div>
      <div className="border-t-2 p-6">
        <Button
          icon={<LuLogOut className="text-red-500" />}
          disabled={isLoading}
          onClick={() => logout()}
          type={"logout"}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
