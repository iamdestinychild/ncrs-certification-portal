import { CiCirclePlus, CiNoWaitingSign } from "react-icons/ci";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import Modal from "./Modal";
import AddCertificate from "../forms/AddCertificate";
import ConfirmDelete from "./ConfirmDelete";
import useDeleteCertificate from "../features/certificates/useDeleteCertificate";

function CertificateOptions({items}) {

  const noItems = Boolean(items?.length === 0)

  console.log(items)
  
  return (
    <div className="flex gap-4">
      <Modal>
        <Modal.Open opens={'suspendCertificate'}>
          <Button disabled={noItems} icon={<CiNoWaitingSign />} type={"accent-red"}>
            Suspend
          </Button>
        </Modal.Open>
        <Modal.Open opens={'deleteCertificate'}>
          <Button disabled={noItems} icon={<GoTrash />} type={"accent-red"}>
            Delete
          </Button>
        </Modal.Open>
        <Modal.Open opens={"addCertificate"}>
          <Button icon={<CiCirclePlus />} type={"accent-black"}>
            Add
          </Button>
        </Modal.Open>

        <Modal.Window name={'addCertificate'}>
            <AddCertificate />
        </Modal.Window>
        <Modal.Window name={'deleteCertificate'}>
            <ConfirmDelete  />
        </Modal.Window>
        <Modal.Window name={'suspendCertificate'}>
            <ConfirmDelete suspend={true}  />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default CertificateOptions;
