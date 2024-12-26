import React, { useState, useEffect } from "react";
import PinScreen from "./components/PinScreen";
import DeliveryScreen from "./components/DeliveryScreen";
import ErrorScreen from "./components/ErrorScreen";
import Modal from "./components/Modal";

const VALID_PINS = ["123456", "234567", "345678", "456789"];

function App() {
  const [screen, setScreen] = useState("pin"); // pin | delivery | error
  const [attempts, setAttempts] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimer, setLockTimer] = useState(0);
  const [showModal, setShowModal] = useState(false); // Для модального окна

  const attemptsLeft = 3 - attempts;

  const handlePinSubmit = (pin) => {
    if (VALID_PINS.includes(pin)) {
      setScreen("delivery");
      setAttempts(0);
      setTimeout(() => setScreen("pin"), 30000);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setShowModal(true); // Показываем модальное окно

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 p-4">
      {screen === "pin" && (
        <PinScreen
          onSubmit={handlePinSubmit}
          disabled={isLocked}
          attemptsLeft={attemptsLeft}
        />
      )}
      {screen === "delivery" && (
        <DeliveryScreen onReturn={() => setScreen("pin")} />
      )}
      {screen === "error" && <ErrorScreen lockTimer={lockTimer} />}
      <Modal
        isVisible={showModal}
        message={`Неверный PIN. Осталось попыток: ${attemptsLeft}`}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}

export default App;
