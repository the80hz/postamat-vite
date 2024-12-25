// ...existing code...
import React from "react";

export default function Keyboard({ onDigitPress, onClear, disabled }) {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  return (
    <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
      {digits.map((digit) => (
        <button
          key={digit}
          onClick={() => !disabled && onDigitPress(digit)}
          className="p-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {digit}
        </button>
      ))}
      <button
        className="col-span-3 p-4 bg-red-500 text-white rounded hover:bg-red-600"
        onClick={() => !disabled && onClear()}
      >
        Сброс
      </button>
    </div>
  );
}
// ...existing code...