import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";
const Cursor = () => {
  const [positon, setPostion] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const mouseMove = (e) => {
      setPostion({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  });
  // console.log(positon);
  return (
    <motion.div
      className="cursor"
      animate={{ x: positon.x + 10, y: positon.y + 10 }}></motion.div>
  );
};
export default Cursor;
