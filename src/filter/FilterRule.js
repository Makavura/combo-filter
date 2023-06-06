import * as React from "react";

import Style from "./FilterRule.module.css";
import { fieldsEnum, clauseEnums, operatorsEnum } from "../utils";
import { ReactComponent as DeleteIcon } from "../assets/delete.svg";

function FilterRule({ filter, handleChange, handleRemoveFilterRule }) {
  return (
    <div className={Style.FilterRuleWrapper}>
      {filter?.index === 0 ? (
        <div className={Style.WhereLabel}>Where</div>
      ) : (
        <select
          id="condition"
          onChange={(e) => handleChange(filter?.index, e)}
          className={Style.Combinator}
        >
          {Object.values(clauseEnums).map((field, index) => (
            <option value={field} key={index}>
              {field}
            </option>
          ))}
        </select>
      )}
      <select
        id="field"
        onChange={(e) => handleChange(filter?.index, e)}
        className={Style.Select}
      >
        {Object.values(fieldsEnum).map((field, index) => (
          <option value={field} key={index}>
            {field}
          </option>
        ))}
      </select>
      <select
        id="operator"
        onChange={(e) => handleChange(filter?.index, e)}
        className={Style.Select}
      >
        {Object.values(operatorsEnum).map((field, index) => (
          <option value={field} key={index}>
            {field}
          </option>
        ))}
      </select>
      <input
        id="value"
        type="text"
        name="value"
        onChange={(e) => handleChange(filter?.index, e)}
        className={Style.Input}
      />
      <div className={Style.DeleteIconWrapper}>
        <DeleteIcon
          onClick={() => handleRemoveFilterRule(filter?.index)}
          className={Style.DeleteIcon}
        />
      </div>
    </div>
  );
}

export default FilterRule;
