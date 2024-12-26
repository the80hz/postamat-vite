import React from "react";

export default function Modal({ isVisible, message, onClose }) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-sm w-full text-center">
        <p className="text-lg mb-4 text-red-700">{message}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Закрыть
        </button>
      </div>
    </div>
  );
}
