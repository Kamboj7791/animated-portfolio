import "./Navbar.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { GrResume } from "react-icons/gr";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Sidebar />
        <div className="wrapper">
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}>
            kunal
          </motion.span>
          <div className="social">
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <GrResume />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
