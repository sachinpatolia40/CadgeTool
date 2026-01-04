import React, { ReactNode, useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 overflow-y-auto"
      onClick={onClose}
    >
      {/* wrapper for top spacing */}
      <div className="min-h-full flex items-start justify-center p-4 md:p-8">
        <div
          className="bg-white rounded-lg shadow-lg w-full max-w-4xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* sticky header */}
          <div className="sticky top-0 bg-white flex justify-end p-4 border-b z-10">
            <button
              onClick={onClose}
              className="text-xl font-bold text-gray-600 hover:text-gray-900"
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>

          <div className="p-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
