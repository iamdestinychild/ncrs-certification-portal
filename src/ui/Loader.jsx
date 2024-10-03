import { ClipLoader } from "react-spinners";

function Loader() {
  return (
    <div className="absolute inset-0 bg-white flex items-center justify-center">
      <ClipLoader
        color={"#1C5237"}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
