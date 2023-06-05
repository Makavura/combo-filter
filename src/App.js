import * as React from "react";

import Style from "./App.module.css";
import Modal from "./Modal";

function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className={Style.App} onClick={() => (open ? setOpen(!open) : null)}>
        <div className={Style.SplitTop}>
          <h1>Filter modal.</h1>
        </div>
        <div className={Style.SplitBottom}></div>
        <button className={Style.Button} onClick={() => setOpen(!open)}>
          {open ? "Hide" : "Show"} Filter Modal
        </button>
      </div>
      {open && <Modal title={"In this view show records"}></Modal>}
    </>
  );
}

export default App;
