import React, { useState, useEffect } from "react";
import PinScreen from "./components/PinScreen";
import DeliveryScreen from "./components/DeliveryScreen";
import ErrorScreen from "./components/ErrorScreen";

const VALID_PINS = ["123456", "234567", "345678", "456789"];

function App() {
  const [screen, setScreen] = useState("pin"); // pin | delivery | error
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);

  const handlePinSubmit = (pin) => {
    if (VALID_PINS.includes(pin)) {
      setScreen("delivery");
      setAttempts(0);
      setTimeout(() => setScreen("pin"), 30000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      if (newAttempts >= 3) {
        setScreen("error");
        setIsLocked(true);
        setLockTimer(30);
      }
    }
  };

  useEffect(() => {
    let timer;
    if (isLocked && lockTimer > 0) {
      timer = setInterval(() => {
        setLockTimer((prev) => prev - 1);
      }, 1000);
    }
    if (lockTimer === 0 && isLocked) {
      setIsLocked(false);
      setAttempts(0);
      setScreen("pin");
    }
    return () => clearInterval(timer);
  }, [isLocked, lockTimer]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {screen === "pin" && (
        <PinScreen onSubmit={handlePinSubmit} disabled={isLocked} />
      )}
      {screen === "delivery" && <DeliveryScreen />}
      {screen === "error" && <ErrorScreen lockTimer={lockTimer} />}
    </div>
  );
}

export default App;
