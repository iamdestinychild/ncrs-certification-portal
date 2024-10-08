import { useState } from "react";
import useFetchCertificates from "../features/certificates/useFetchCertificates";
import Loader from "../ui/Loader";
import TableList from "../ui/TableList";
import ErrorPage from "../ui/ErrorPage";
import CertificateOptions from "../ui/CertificateOptions";
import Filter from "../ui/Filter";
import { useSearchParams } from "react-router-dom";

function Certificates() {
  const { certificates, isLoading, error, refetch } = useFetchCertificates();
  const [checkedItems, setCheckedItems] = useState({});
  const [checkAll, setCheckAll] = useState(false);
  const [searchParams] = useSearchParams();

  const filterBy = searchParams.get("filterBy")


  const handleCheck = (id) => {
    setCheckedItems((prev) => {
      const newCheckedItems = {
        ...prev,
        [id]: !prev[id],
      };

      setCheckAll(
        Object.keys(newCheckedItems).length === certificates.length &&
          Object.values(newCheckedItems).every((checked) => checked)
      );
      return newCheckedItems;
    });
  };

  const handleCheckAll = () => {
    const newCheckAll = !checkAll;
    const newCheckedItems = {};
    certificates.forEach((item) => {
      newCheckedItems[item._id] = newCheckAll;
    });

    setCheckedItems(newCheckedItems);
    setCheckAll(newCheckAll);
  };

  if (isLoading) return <Loader />;

  if (error) return <ErrorPage onClick={() => refetch()} />;


  const checkedIds = Object.keys(checkedItems).filter((id) => checkedItems[id])

  const filteredCertificates = certificates.filter((certificate) => {
    if (filterBy === "status-act") {
      return certificate.status === "active"; // Assuming 'status' field represents the certificate's status
    } else if (filterBy === "status-inc") {
      return certificate.status === "inactive";
    }
    return true; // Return all if no specific filter is applied
  });


  const EmptyCertificates = Boolean(certificates.length === 0);

  return (
    <div className="p-2 space-y-3">
      <div className="flex justify-between px-5">
        <Filter />
        <CertificateOptions items={checkedIds} />
      </div>
      {/* <Modal>
        <Modal.Open opens={"add-certificate"}>
          <Button type={"primary"}>Add</Button>
        </Modal.Open>

        <Modal.Window name={"add-certificate"}>
          <div className="w-40 bg-white h-44"></div>
        </Modal.Window> */}

      <div className="px-4 flex flex-col gap-4">
        <div className="w-full gap-2 text-xs lg:text-sm py-2 px-4 text-center flex items-center font-semibold">
          <input
            className="cursor-pointer"
            checked={checkAll}
            onChange={handleCheckAll}
            type="checkbox"
          />

          <p className="w-1/4">Name</p>
          <p className="w-1/4">Certificate Title</p>
          <p className="w-1/4">Certificate Id</p>
          <p className="w-1/4">Date Awarded</p>
          <p className="w-1/4">Status</p>
          <p className="w-12"></p>
        </div>
        <ul className="flex flex-col gap-2">
          {!EmptyCertificates ? (
            filteredCertificates.map((item) => (
              <TableList
                key={item.certificate_id}
                id={item._id}
                data={item}
                hasCheck={true}
                isChecked={!!checkedItems[item._id]}
                onCheck={handleCheck}
              />
            ))
          ) : (
            <li className=" text-center mt-20 text-3xl">
              No Cerificates Added yet.
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Certificates;
