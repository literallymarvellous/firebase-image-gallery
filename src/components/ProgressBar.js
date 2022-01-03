import React from "react";
import { useEffect } from "react/cjs/react.development";
import { useStorage } from "../hooks/useStorage";
import { motion } from "framer-motion";

export const ProgressBar = ({ file, setFile }) => {
  const [progress, url, error] = useStorage(file);

  useEffect(() => {
    url && setFile(null);
  }, [url]);

  return (
    <motion.div
      className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + "%" }}
    ></motion.div>
  );
};
