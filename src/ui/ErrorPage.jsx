import Button from "./Button";
import ErrorImage from "../assets/errorImage.png"

function ErrorPage({ onClick }) {
  return (
    <div className="absolute bg-white flex-col gap-4 inset-0 h-screen flex items-center justify-center w-full">
      <img src={ErrorImage} alt="error_image" className="pointer-events-none" />
      <p>Something went wrong.</p>
      <Button type={'primary'} onClick={onClick}>Try Again</Button>
    </div>
  )
}

export default ErrorPage;
