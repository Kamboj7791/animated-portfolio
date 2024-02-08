import { useRef } from "react";
import myntra from "../images/myntra.jpg";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Myntra Clone",
    src: myntra,
    description:
      "this image is very good and amazing to see and it have landscape scenery or many mountains and other things",
  },
  {
    id: 2,
    title: "Myntra Clone",
    src: myntra,
    description:
      "this image is very good and amazing to see and it have landscape scenery or many mountains and other things",
  },
  {
    id: 3,
    title: "Myntra Clone",
    src: myntra,
    description:
      "this image is very good and amazing to see and it have landscape scenery or many mountains and other things",
  },
  {
    id: 4,
    title: "Myntra Clone",
    src: myntra,
    description:
      "this image is very good and amazing to see and it have landscape scenery or many mountains and other things",
  },
];
const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {" "}
            <img src={item.src} alt=".." />
          </div>

          <motion.div className="textContainer" style={{ y }}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item, index) => (
        <Single item={item} key={index} />
      ))}
    </div>
  );
};
export default Portfolio;
