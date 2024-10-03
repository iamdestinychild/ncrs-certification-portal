import { VscKebabVertical } from "react-icons/vsc";
import Menus from "./Menus";
import { formatDate, truncateText } from "../utils/helpers";
import useDeleteCertificate from "../features/certificates/useDeleteCertificate";
import Modal from "./Modal";
import ConfirmDelete from "./ConfirmDelete";

function TableList({
  data,
  hasCheck = false,
  id,
  isChecked,
  onCheck,
  onCloseModal,
}) {
  const { deleteCertificate, isLoading } = useDeleteCertificate();
  const { name, certificate_id, status, date_awarded, title } = data;


  function handleDelete() {
    deleteCertificate(id, {
      onSettled: () => {
        onCloseModal?.();
      },
    });
  }

  return (
    <li className="w-full gap-2 text-xs text-center lg:text-sm hover:bg-gray-100 py-2 px-4 rounded-md flex items-center bg-gray-50">
      {hasCheck && (
        <input
          className="cursor-pointer"
          type="checkbox"
          checked={isChecked}
          onChange={() => onCheck(id)}
        />
      )}
      <p className="w-1/4">{name}</p>
      <p className="w-1/4 capitalize">{truncateText(title)}</p>
      <p className="w-1/4 uppercase">{certificate_id}</p>
      <p className="w-1/4 text-center">{formatDate(date_awarded)}</p>
      <p
        className={`py-1 px-7 ${
          status === "active" ? "text-lime-600" : "text-red-500"
        } w-1/5 capitalize text-center`}
      >
        {status}
      </p>
      <Modal>
        <Menus>
          <Menus.Toggle id={certificate_id}>
            <VscKebabVertical className="cursor-pointer" />
          </Menus.Toggle>

          <Menus.List id={certificate_id}>
            {/* Open delete confirmation modal */}
            <Modal.Open opens={"deleteCertificate"}>
              <Menus.Button>Delete</Menus.Button>
            </Modal.Open>
            <Menus.Button>View Details</Menus.Button>
            {/* Open suspend confirmation modal */}
            <Modal.Open opens={"suspendCertificate"}>
              <Menus.Button>Suspend</Menus.Button>
            </Modal.Open>
          </Menus.List>
        </Menus>

        {/* Delete Confirmation Modal */}
        <Modal.Window name={"deleteCertificate"}>
          <ConfirmDelete
          loading={isLoading}
          disabled={isLoading}
            onConfirm={handleDelete} // Call handleDelete on confirmation
            title={title}
          />
        </Modal.Window>

        {/* Suspend Confirmation Modal */}
        <Modal.Window name={"suspendCertificate"}>
          <ConfirmDelete suspend={true} title={title} />
        </Modal.Window>
      </Modal>
    </li>
  );
}

export default TableList;
