import React, { useState } from "react";
import Keyboard from "./Keyboard";

export default function PinScreen({ onSubmit, disabled, attemptsLeft }) {
  const [pin, setPin] = useState("");

  const handleDigit = (digit) => {
    if (pin.length < 6) {
      setPin((prev) => prev + digit);
    }
  };

  const handleClear = () => setPin("");

  if (pin.length === 6) {
    onSubmit(pin);
    setPin("");
  }

  return (
    <div className="p-6 bg-white rounded shadow-md text-center max-w-sm w-full">
      <h1 className="text-2xl mb-4 text-gray-800">Введите PIN (6 цифр)</h1>
      <div className="flex justify-center space-x-2 mb-4">
        {Array(6).fill(null).map((_, i) => (
          <div
            key={i}
            className="w-10 h-12 border border-gray-300 rounded-lg flex items-center justify-center text-2xl font-mono text-gray-700"
          >
            {pin[i] ?? ""}
          </div>
        ))}
      </div>
      <Keyboard onDigitPress={handleDigit} onClear={handleClear} disabled={disabled} />
      {!disabled && attemptsLeft > 0 && (
        <div className="text-gray-600 mt-2">
          Осталось {attemptsLeft} попыток
        </div>
      )}
      {disabled && <div className="text-red-500 mt-2">Экран временно заблокирован</div>}
    </div>
  );
}
