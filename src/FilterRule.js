import Style from "./FilterRule.module.css";
import { fieldsEnum, clauseEnums } from "./utils";
import { ReactComponent as DeleteIcon } from "./assets/delete.svg";

export default function FilterRule({
  filter,
  handleChange,
  handleRemoveFilterRule,
}) {
  return (
    <div className={Style.FilterRuleWrapper}>
      {filter?.index === 0 ? (
        <div className={Style.WhereLabel}>Where</div>
      ) : (
        <select onChange={handleChange} className={Style.Combinator}>
          {Object.values(clauseEnums).map((field, index) => (
            <option value={field} key={index}>
              {field}
            </option>
          ))}
        </select>
      )}
      <select onChange={handleChange} className={Style.Select}>
        {Object.values(fieldsEnum).map((field, index) => (
          <option value={field} key={index}>
            {field}
          </option>
        ))}
      </select>
      <select onChange={handleChange} className={Style.Select}>
        {Object.values(fieldsEnum).map((field, index) => (
          <option value={field} key={index}>
            {field}
          </option>
        ))}
      </select>
      <input
        type="text"
        name="value"
        onChange={handleChange}
        className={Style.Input}
      />
      <button className={Style.DeleteIconWrapper}>
        <DeleteIcon
          onClick={handleRemoveFilterRule(filter?.index)}
          className={Style.DeleteIcon}
        />
      </button>
    </div>
  );
}
