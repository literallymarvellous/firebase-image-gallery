import React from "react";
import { motion } from "framer-motion";

export const Modal = ({ img, setImg }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setImg(null);
    }
  };
  return (
    <motion.div
      className="backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={img}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};
