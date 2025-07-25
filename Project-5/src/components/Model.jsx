import React from "react";
import { createPortal } from 'react-dom';
import { AiOutlineClose } from "react-icons/ai";
function Model({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className=" m-auto z-50 relative p-4 min-h-[200px] max-w-[80%] bg-white">
            <div className="flex justify-end ">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl self-end "
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute top-0 z-40 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>,
    document.getElementById("model-root")
  );
}

export default Model;
