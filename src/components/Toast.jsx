// src/components/Toast.jsx
import React from "react";

const Toast = ({ message }) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-purple-700 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade">
      {message}
    </div>
  );
};

export default Toast;
