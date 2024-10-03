import { useSearchParams } from "react-router-dom";
import Select from "./CustomSelect";


const options = [
  { value: "default", label: "Default" },
  { value: "status", label: "Popularity (Ascending)" },
  { value: "name-asc", label: "Sort by name (A-Z)" },
  { value: "name-desc", label: "Sort by name (Z-A)" },
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
