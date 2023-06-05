import React from "react";
import FilterRule from "./FilterRule";
import Style from "./Modal.module.css";
import { ReactComponent as PlusIcon } from "./assets/plus.svg";

export default function Modal({ title }) {
  const primaryFilter = {
    condition: "", // hold form values
    operator: "",
    value: "",
    field: "",
    index: 0, // could be done by uuid
  };

  const [filters, setFilters] = React.useState([]); // placeholder for filter rule

  React.useEffect(() => {
    console.log(filters);
  }, [filters]);

  const handleAddFilterRule = () => {
    setFilters([
      ...filters,
      {
        condition: "",
        operator: "",
        value: "",
        field: "",
        index: filters.length + 1,
      },
    ]);
  };

  const handleRemoveFilterRule = (index) => {
    // const filtersSnapshot = [...filters];
    // const i = filtersSnapshot.findIndex((filter) => filter.index === index);
    // filtersSnapshot.splice(i, 1);
    // setFilters(...filtersSnapshot);
    console.log(index);
  };

  const handleChange = (filterIndex, e) => {
    // is this necessary or will it automatically be picked up by form?
    const value = e.target.value;
    const input = e.target.id;
    const update = {};
    switch (input) {
      case "condition":
        update.condition = value;
        break;
      case "field":
        update.field = value;
        break;
      case "operator":
        update.operator = value;
        break;
      case "value":
        update.value = value;
        break;
    }
    console.log(update);
    // update state
    const filtersSnapshot = [...filters];
    const i = filtersSnapshot.findIndex(
      (filter) => filter.index === filterIndex
    );
    filtersSnapshot.splice(i, 1);
    filtersSnapshot.push({
      ...update,
      index: filterIndex,
    });
    setFilters(...filtersSnapshot);
  };

  return (
    <div className={Style.Modal}>
      <h6>{title}</h6>
      <FilterRule
        filter={primaryFilter}
        handleChange={handleChange}
        handleRemoveFilterRule={handleRemoveFilterRule}
      />
      {filters?.map((filter, index) => (
        <FilterRule
          key={`${filter.index + Date.now()}`}
          handleChange={handleChange}
          handleRemoveFilterRule={handleRemoveFilterRule}
        />
      ))}

      <button className={Style.AddFilterBtn} onClick={handleAddFilterRule}>
        <PlusIcon />
        Add filter rule
      </button>
    </div>
  );
}
