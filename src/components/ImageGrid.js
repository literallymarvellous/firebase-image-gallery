import React from "react";
import { useFirestore } from "../hooks/useFirestore";
import { motion } from "framer-motion";

export const ImageGrid = ({ setImg, setModalOpen }) => {
  const [docs] = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => {
              setImg(doc.url);
            }}
          >
            <motion.img
              src={doc.url}
              alt={doc.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};
