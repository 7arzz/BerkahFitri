import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import Greeting from "./components/Greeting";
import SupportButton from "./components/SupportButton";
import "./App.css";
import LenteraRamadhan from "./assets/lenteraRamadhan.png";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSupportClick = () => {
    setShowConfetti(true);
    setTimeout(() => {
      setShowConfetti(false);
    }, 6000);
  };

  return (
    <>
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", top: 0, left: 0, zIndex: 100, pointerEvents: "none" }}
          >
            <Confetti
              width={windowDimension.width}
              height={windowDimension.height}
              recycle={false}
              numberOfPieces={500}
              gravity={0.15}
              colors={['#fbbf24', '#f59e0b', '#d97706', '#ffffff']}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="container"
        initial={{ opacity: 0, scale: 0.95, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="lanterns-wrapper">
          <motion.img
            src={LenteraRamadhan}
            alt="Lentera Kiri"
            className="lantern left-lantern"
            initial={{ y: -80, opacity: 0, rotate: -5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 60, damping: 12 }}
          />
          <motion.img
            src={LenteraRamadhan}
            alt="Lentera Kanan"
            className="lantern right-lantern"
            initial={{ y: -80, opacity: 0, rotate: 5 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 60, damping: 12 }}
          />
        </div>
        <Greeting />
        <SupportButton onClick={handleSupportClick} />
      </motion.div>
    </>
  );
}

export default App;
