import { useLayoutEffect, useState } from "react";
import ReactDOM from "react-dom";

const MODAL_ROOT_ID = "boxhero-modal-root";
let modalRootStore = null;

const initModalRoot = () => {
  const newModalRoot = document.createElement("div");
  newModalRoot.id = MODAL_ROOT_ID;
  document.body.appendChild(newModalRoot);

  modalRootStore = newModalRoot;

  return modalRootStore;
};

const getModalRoot = () => {
  if (modalRootStore) return modalRootStore;

  return initModalRoot();
};

const RootMounted = ({ children }) => {
  const [container, setContainer] = useState(null);

  useLayoutEffect(() => {
    const newContainer = document.createElement("div");
    setContainer(newContainer);

    const modalRoot = getModalRoot();
    modalRoot.appendChild(newContainer);

    return () => {
      newContainer.remove();
    };
  }, []);

  if (!container) return null;

  return ReactDOM.createPortal(children, container);
};

export default RootMounted;
