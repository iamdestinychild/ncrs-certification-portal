import Button from "./Button";

function ConfirmDelete({
  onConfirm,
  suspend = false,
  disabled,
  title,
  onCloseModal,
}) {
  return (
    <div className="flex w-80 flex-col gap-3 p-4">
      <h1 className="text-center font-semibold">{suspend? 'Suspend' : 'Delete'} Certificate</h1>
      <p className="mb-3 text-center text-neutral-500">
       {` Are you sure you want to ${suspend ? 'suspend' :"delete"} this certificate? ${!suspend && 'This action cannot be undone'}.`}
      </p>

      {title && <p>{title}</p>}

      <div className="flex justify-around gap-3">
        <Button
          type="accent-black"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          type="danger"
          disabled={disabled}
          onClick={onConfirm}
        >
         {suspend ? "Suspend" : 'Delete'}
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
