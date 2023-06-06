import * as React from "react";

import Style from "./App.module.css";
import Modal from "./modal/Modal";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={open ? Style.Backdrop : Style.None}>
      <div className={Style.App} onClick={() => (open ? setOpen(!open) : null)}>
        <div className={Style.Header}>Combo Filter.</div>
        <button className={Style.Button} onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Show"} combo filter
        </button>
      </div>
      {open && <Modal title={"In this view show records"}></Modal>}
    </div>
  );
}

export default App;
