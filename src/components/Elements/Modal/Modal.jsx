import { useEffect } from "react";
import Cross from "@/assets/icons/cross.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

export const Modal = ({
  isOpen,
  onClose,
  children,
  className,
  WrapperClassName,
  childrenClassName,
}) => {
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const closeModal = () => {
    setModalOpen(false);
    onClose();
  };

  return (
    <div
      className={twMerge(
        `fixed z-50 inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 ${
          isOpen ? "visible" : "invisible"
        }`,
        WrapperClassName
      )}
    >
      <div className={twMerge("bg-white rounded-lg p-6", className)}>
        <div className="flex justify-end mt-1 mb-10">
          <button onClick={closeModal}>
            <Image
              src={Cross}
              className="hover:cursor-pointer"
              alt="CrossIcon"
            />
          </button>
        </div>
        <div className={twMerge("w-full", childrenClassName)}>{children}</div>
      </div>
    </div>
  );
};
