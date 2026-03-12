import { motion } from "framer-motion";

function Greeting() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    },
  };

  return (
    <motion.div 
      className="greeting"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 variants={itemVariants}>
        Selamat Hari Raya Idul Fitri 1447 H
      </motion.h1>
      <motion.p className="arabic" variants={itemVariants}>
        تَقَبَّلَ اللَّهُ مِنَّا وَمِنْكُمْ
      </motion.p>
      <motion.p className="arabic" variants={itemVariants}>
        مِنَ الْعَائِدِين وَالْفَائِزِين
      </motion.p>
      <motion.p style={{ fontSize: "1.8rem" }} variants={itemVariants}>
        Mohon maaf lahir dan batin.
      </motion.p>
      <motion.p className="desc" style={{ marginTop: "1rem", fontSize: "1.5rem" }} variants={itemVariants}>
        Semoga di hari yang suci ini, hati kembali bersih, langkah kembali
        ringan, dan kebahagiaan selalu menyertai.
      </motion.p>
    </motion.div>
  );
}

export default Greeting;
