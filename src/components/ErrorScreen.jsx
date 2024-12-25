import React from "react";

export default function ErrorScreen({ lockTimer }) {
  return (
    <div className="p-6 bg-white rounded shadow-md max-w-sm w-full text-center text-red-700">
      <h1 className="text-2xl mb-4">3 неверных попытки ввода PIN</h1>
      <p>Экран заблокирован на {lockTimer} сек.</p>
    </div>
  );
}
