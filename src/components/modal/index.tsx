import React, { useState } from "react";

interface IModal {
  children: React.ReactNode;
}

const Modal: React.FC<IModal> = ({ children }) => {
  return (
    <div className="fixed z-50 inset-0 px-4 md:px-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-black/70"></div>
        <div className="bg-secondary-background rounded-md py-10 px-4 md:px-7 z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
