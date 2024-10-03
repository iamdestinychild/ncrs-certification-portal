import Button from "./Button";
import MiniLoader from "./MiniLoader";

function ConfirmDelete({
  onConfirm,
  loading,
  suspend = false,
  disabled,
  title,
  onCloseModal,
}) {
  return (
    <div className="flex w-80 flex-col gap-5 p-4">
      <h1 className="text-center font-semibold">{suspend? 'Suspend' : 'Delete'} Certificate</h1>
      <p className=" text-center text-neutral-500">
       {` Are you sure you want to ${suspend ? 'suspend' :"delete"} this certificate? ${!suspend && 'This action cannot be undone'}.`}
      </p>

      {title && <p className="text-xs text-center bg-red-100 p-2 text-red-500">{title}</p>}

      <div className="flex justify-around gap-3">
        <Button
          type="accent-black"
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          type="danger"
          disabled={disabled}
          onClick={onConfirm}
        >
          {loading ? <MiniLoader /> : suspend ? "Suspend" : 'Delete'}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
