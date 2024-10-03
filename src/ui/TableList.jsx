import { VscKebabVertical } from "react-icons/vsc";
import Menus from "./Menus";
import { formatDate, truncateText } from "../utils/helpers";

function TableList({ data, hasCheck = false, isChecked, onCheck }) {
  const { name, certificate_id: id, status, date_awarded, title } = data;

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
      <p className="w-1/4 uppercase">{id}</p>
      <p className="w-1/4 text-center">{formatDate(date_awarded)}</p>
      <p className="py-1 px-7 rounded-lg bg-red-50 w-1/5 capitalize text-center">
        {status}
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
    </li>
  );
}

export default TableList;
