import useDashboard from "../features/dashboard/useDashboard";
import defaultImage from "../assets/defaultImage.jpg";

function User() {
  const { userDetails, isLoading, error } = useDashboard();

  if (isLoading) return <p>...</p>;

  if (error) return null;

  const name = userDetails?.fullname;
  const role = userDetails?.role;

  return (
    <div className=" flex items-center cursor-default p-2 gap-2 ">
      <div className="border-r-2 p-2 text-right">
        <h3 className="text-base capitalize">{name}</h3>
        <p className="text-xs capitalize">{role}</p>
      </div>

      <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-300">
        <img
          src={defaultImage}
          className="object-contain aspect-auto"
          alt="default_image"
        />
      </div>
    </div>
  );
}

export default User;
