import { CiCirclePlus, CiNoWaitingSign } from "react-icons/ci"
import Button from "./Button"
import { GoTrash } from "react-icons/go"

function CertificateOptions() {
    return (
        <div className="flex gap-4">
            <Button icon={<CiNoWaitingSign />} type={'accent-red'} >Suspend</Button>
            <Button icon={<GoTrash />} type={'accent-red'} >Delete</Button>
            <Button icon={<CiCirclePlus />} type={'accent-black'} >Add</Button>
        </div>
    )
}

export default CertificateOptions