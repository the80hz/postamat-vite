import React from "react";

export default function Keyboard({ onDigitPress, onClear, disabled }) {
  const digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  return (
    <div className="grid grid-cols-3 gap-2 w-48 mx-auto">
      {digits.map((digit) => (
        <button
          key={digit}
          onClick={() => !disabled && onDigitPress(digit)}
          className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform active:scale-95"
        >
          {digit}
        </button>
      ))}
      <div></div>
      <button
        className="p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-transform active:scale-95"
        onClick={() => !disabled && onDigitPress("0")}
      >
        0
      </button>
      <button
        className="p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 flex justify-center items-center transition-transform active:scale-95"
        onClick={() => !disabled && onClear()}
      >
        Сброс
      </button>
    </div>
  );
}
