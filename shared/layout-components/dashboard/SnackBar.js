"use client"
import { useUserContext } from '@/shared/userContext/userContext';
import { useEffect } from 'react';

const Snackbar = ({ content, isOpen, duration = 4000 }) => {
  const { closeSnackBar } = useUserContext()
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        closeSnackBar();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isOpen, duration]);

  return (
    <div className={`fixed w-full md:w-auto top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-200 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} capitalize text-xs sm:text-sm font-medium bg-${content.bg} border border-gray-300 alert ${content.txt} flex items-center justify-between gap-2`} role="alert">
        <div>
          {(content.txt === "text-success" || content.bg === "success") && <i className="ri-checkbox-circle-fill"></i>} {" "}
          {content.message}
        </div>
        <button onClick={closeSnackBar}>
          <i className="text-gray-600 ri-close-line"></i>
        </button>
    </div>
  );
};

export default Snackbar;
