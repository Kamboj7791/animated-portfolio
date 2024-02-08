import { useState, useEffect } from "react";
import "./Sidebar.scss";
import Links from "./links/Links";
import Togglebutton from "./toggleButton/Togglebutton";
import { motion } from "framer-motion";
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <>
      {hasMounted && (
        <motion.div
          className="sidebar"
          initial="closed"
          animate={open ? "open" : "closed"}>
          <motion.div className="bg" variants={variants}>
            <Links />
          </motion.div>
          <Togglebutton setOpen={setOpen} />
        </motion.div>
      )}
      {/* <motion.div
        className="sidebar"
        initial={{ pointerEvents: "none" }}
        animate={open ? "open" : "closed"}>
       
      </motion.div> */}
    </>
  );
};
export default Sidebar;
