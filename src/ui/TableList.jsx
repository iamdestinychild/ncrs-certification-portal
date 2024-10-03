import { VscKebabVertical } from "react-icons/vsc";
import Menus from "./Menus";
import { formatDate } from "../utils/helpers";

function TableList({ data, hasCheck = false, isChecked, onCheck }) {
  const { name, certificate_id: id, status, dateCreated, active } = data;

  return (
    <div className="w-full gap-2 text-xs lg:text-sm hover:bg-gray-100 py-2 px-4 rounded-md flex items-center bg-gray-50">
      {hasCheck && (
        <div className="w-1/6">
          <input
            className="cursor-pointer"
            type="checkbox"
            checked={isChecked}
            onChange={() => onCheck(id)}
          />
        </div>
      )}
      <p className="w-1/4">{name}</p>
      <p className="w-1/4 capitalize">{status}</p>
      <p className="w-1/4 uppercase">{id}</p>
      <p className="w-1/4">{formatDate(dateCreated)}</p>
      <p className="py-1 px-7 rounded-lg bg-red-50 w-1/5 capitalize text-center">
        {active ? "active" : "inactive"}
      </p>
      <Menus>
        <Menus.Toggle id={id}>
          <VscKebabVertical className="cursor-pointer" />
        </Menus.Toggle>

        <Menus.List id={id}>
          <Menus.Button>Delete</Menus.Button>
          <Menus.Button>View Details</Menus.Button>
          <Menus.Button>Suspend</Menus.Button>
        </Menus.List>
      </Menus>
    </div>
  );
}

export default TableList;
