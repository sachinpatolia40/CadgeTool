import React, { ReactNode } from 'react';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black overflow-scroll bg-opacity-50 flex justify-center items-center z-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl p-6">
                <div className='text-right'>
                    <button onClick={onClose} className="text-xl  font-bold text-gray-600">
                        X
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
