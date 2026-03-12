import { motion } from "framer-motion";

function SupportButton({ onClick }) {
  const handleClick = () => {
    if (onClick) onClick();

    window.open(
      "https://link.dana.id/minta?full_url=https://qr.dana.id/v1/281012012026022639740658",
      "_blank"
    );
  };

  return (
    <motion.button
      className="support-btn"
      onClick={handleClick}
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 200 }}
    >
      ✨ Berbagi Berkah ✨
    </motion.button>
  );
}

export default SupportButton;