import React from "react";

import Style from "./Modal.module.css";
import Button from "../button/Button";
import FilterRule from "../filter/FilterRule";
import { ReactComponent as PlusIcon } from "../assets/plus.svg";

function Modal({ title }) {
  let primaryFilter = {
    condition: "",
    operator: "",
    value: "",
    field: "",
    index: 0,
  };

  const [filters, setFilters] = React.useState([]);

  React.useEffect(() => {
    if (!filters) {
      console.warn("no filters");
    }
  }, [filters]);

  const handleAddFilterRule = () => {
    const newFilters = [
      {
        condition: "",
        operator: "",
        value: "",
        field: "",
        index: (Math.random() * 1000000000).toLocaleString(),
      },
      ...filters,
    ];
    setFilters(newFilters);
  };

  const handleRemoveFilterRule = (index) => {
    if (index) {
      const filtersSnapshot = JSON.parse(JSON.stringify(filters));
      const i = filtersSnapshot.findIndex((filter) => filter.index === index);
      filtersSnapshot.splice(i, 1);
      setFilters(filtersSnapshot);
    }
  };

  const handleChange = (filterIndex, e) => {
    const value = e.target.value;
    const input = e.target.id;
    e.preventDefault();
    const filtersSnapshot = JSON.parse(JSON.stringify(filters));
    const i = filtersSnapshot.findIndex(
      (filter) => filter.index === filterIndex
    );

    const update = i === -1 ? primaryFilter : filtersSnapshot[i];
    if (!update) console.warn("no update");
    if (update) {
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
        default:
          console.log("No rule updated");
      }
      if (i === -1) {
        primaryFilter = update;
      } else {
        filtersSnapshot.splice(i, 1);
        filtersSnapshot.push({
          ...update,
        });
        setFilters(filtersSnapshot);
      }
    }
  };

  return (
    <div className={Style.Modal}>
      <h6>{title}</h6>
      <form>
        <FilterRule
          filter={primaryFilter}
          handleChange={handleChange}
          handleRemoveFilterRule={handleRemoveFilterRule}
        />
        {filters.length > 0 &&
          filters?.map((filter, index) => (
            <FilterRule
              filter={filter}
              key={`${index}`}
              handleChange={handleChange}
              handleRemoveFilterRule={handleRemoveFilterRule}
            />
          ))}
      </form>
      <Button className={Style.AddFilterBtn} onClick={handleAddFilterRule}>
        <PlusIcon />
        Add filter rule
      </Button>
    </div>
  );
}

export default Modal;
