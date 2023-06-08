import combineClasses from "../utils/combineClasses";
import Style from "./Button.module.css";

const Button = ({
  style = "",
  children = null,
  className = "",
  ...attributes
}) => (
  <button
    className={combineClasses(
      className,
      style === "primary" ? Style.PrimaryButton : Style.Button
    )}
    {...attributes}
  >
    {children}
  </button>
);

export default Button;
