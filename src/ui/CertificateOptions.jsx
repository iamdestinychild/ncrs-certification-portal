import { CiCirclePlus, CiNoWaitingSign } from "react-icons/ci";
import Button from "./Button";
import { GoTrash } from "react-icons/go";
import Modal from "./Modal";
import AddCertificate from "../forms/addCertificate";
import ConfirmDelete from "./ConfirmDelete";

function CertificateOptions() {
  return (
    <div className="flex gap-4">
      <Modal>
        <Modal.Open opens={'suspendCertificate'}>
          <Button icon={<CiNoWaitingSign />} type={"accent-red"}>
            Suspend
          </Button>
        </Modal.Open>
        <Modal.Open opens={'deleteCertificate'}>
          <Button icon={<GoTrash />} type={"accent-red"}>
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
