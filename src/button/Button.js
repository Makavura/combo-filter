import Style from "./Button.module.css";

const Button = ({ style = "", children = null }) => (
  <button className={style == "primary" ? Style.PrimaryButton : Style.Button}>
    {children}
  </button>
);

export default Button;
