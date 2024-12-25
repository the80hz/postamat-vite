import React, { useState } from "react";
import Keyboard from "./Keyboard";

export default function PinScreen({ onSubmit, disabled }) {
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
    <div className="p-4 text-center">
      <h1 className="text-2xl mb-4">Введите PIN (6 цифр)</h1>
      <div className="text-3xl font-mono tracking-widest mb-4">{pin}</div>
      <Keyboard onDigitPress={handleDigit} onClear={handleClear} disabled={disabled} />
      {disabled && <div className="text-red-500 mt-2">Экран временно заблокирован</div>}
    </div>
  );
}
