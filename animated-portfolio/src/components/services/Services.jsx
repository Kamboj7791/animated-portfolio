import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,

    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const inView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      className="services"
      variants={variants}
      initial="initial"
      animate={inView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>
          focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="./people.webp" alt="..." />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Company
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            possimus fugit perferendis adipisci ducimus iusto, magni aperiam
            deleniti a laborum nostrum nulla impedit quasi, dignissimos vitae
            dolor consectetur hic perspiciatis?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            possimus fugit perferendis adipisci ducimus iusto, magni aperiam
            deleniti a laborum nostrum nulla impedit quasi, dignissimos vitae
            dolor consectetur hic perspiciatis?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            possimus fugit perferendis adipisci ducimus iusto, magni aperiam
            deleniti a laborum nostrum nulla impedit quasi, dignissimos vitae
            dolor consectetur hic perspiciatis?
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ backgroundColor: "lightgray", color: "black" }}>
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            possimus fugit perferendis adipisci ducimus iusto, magni aperiam
            deleniti a laborum nostrum nulla impedit quasi, dignissimos vitae
            dolor consectetur hic perspiciatis?
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
