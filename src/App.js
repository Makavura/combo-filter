import * as React from "react";

import Style from "./App.module.css";
import Modal from "./modal/Modal";
import Button from "./button/Button";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={open ? Style.Backdrop : Style.None}>
      <div className={Style.App} onClick={() => (open ? setOpen(!open) : null)}>
        <div className={Style.Header}>Combo Filter.</div>
        <Button className={Style.ToggleButton} onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Show"} combo filter
        </Button>
      </div>
      {open && (
        <Modal
          className={Style.ModalWrapper}
          title={"In this view show records"}
        ></Modal>
      )}
    </div>
  );
}

export default App;
