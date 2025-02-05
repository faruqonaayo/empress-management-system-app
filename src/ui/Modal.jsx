import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

export default function Modal({ children }) {
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState("");

  function open() {
    setModal(true);
  }

  function close() {
    setModal(false);
  }

  return (
    <ModalContext.Provider value={{ modal, open, close, content, setContent }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window() {
  const { modal, close, content } = useContext(ModalContext);

  if (!modal) {
    return;
  }

  return createPortal(
    <div className="absolute top-0 flex h-dvh w-full items-center justify-center bg-[#333533]/50 backdrop-blur-xs">
      <div className="rounded-md bg-[#EDEDED] p-2">
        <div className="flex w-full justify-end">
          <button
            className="cursor-pointer rounded-sm bg-red-500 p-1 transition-all hover:bg-red-600"
            onClick={() => close()}
          >
            <img src="./icons/close.svg" alt="close icon" className="w-6" />
          </button>
        </div>
        {content}
      </div>
    </div>,
    document.body,
  );
}

function Open({ children, content }) {
  const { open, setContent } = useContext(ModalContext);

  return (
    <div
      className="h-fit w-fit"
      onClick={() => {
        setContent(content);
        open();
      }}
    >
      {children}
    </div>
  );
}

Modal.Window = Window;
Modal.Open = Open;
