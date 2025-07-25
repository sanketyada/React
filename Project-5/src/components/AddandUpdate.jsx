import React from "react";
import Model from "./Model";

function AddandUpdate({isOpen,onClose}) {
  return (
    <div>
      <Model isOpen={isOpen} onClose={onClose}>
        Hii
      </Model>
    </div>
  );
}

export default AddandUpdate;
