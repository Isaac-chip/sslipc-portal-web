import { useState } from "react";

const Modal = ({ show, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(show);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-y-auto ${isOpen ? "" : "hidden"}`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          aria-hidden="true"
          onClick={handleClose}
        />
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
