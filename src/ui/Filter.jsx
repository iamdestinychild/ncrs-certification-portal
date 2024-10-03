import { useSearchParams } from "react-router-dom";
import Select from "./CustomSelect";

const options = [
  { value: "default", label: "Default" },
  { value: "status-act", label: "Active" },
  { value: "status-inc", label: "Inactive" },
];

function Filter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterBy = searchParams.get("filterBy") || "";

  function handleChange(e) {
    searchParams.set("filterBy", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      value={filterBy}
      onChange={handleChange}
    />
  );
}

export default Filter;
