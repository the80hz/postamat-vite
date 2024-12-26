import React from "react";

export default function DeliveryScreen({ onReturn }) {
  return (
    <div className="p-6 bg-white rounded shadow-md max-w-sm w-full text-center">
      <h1 className="text-2xl mb-4 text-green-600">Получите ваш заказ</h1>
      <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600"></div>
      </div>
      <button
        onClick={onReturn}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Вернуться на главное меню
      </button>
    </div>
  );
}
