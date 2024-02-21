import { useRef } from "react";
import mezban from "../images/mezban.jpg";
import myntra from "../images/myntra.jpg";
import hustbee from "../images/hustbee.jpg";

import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Mezban",
    src: mezban,
    description:
      "A frontend restaurant website built with Bootstrap for responsive design and JavaScript for interactivity, recreating functionality like menus, ordering, and reservations. Focused on delivering engaging user flows utilizing modal dialogs, dynamic generation of content, and smooth scrolling while emphasizing clean, modular frontend architecture. Achieves rich visuals and interactions without a backend by leveraging client-side scripting and bootstrap's extensive library of CSS components",
  },
  {
    id: 2,
    title: "Myntra Clone",
    src: myntra,
    description:
      " frontend responsive e-commerce web application built using Vite, React, and Bootstrap that recreates core Myntra functionalities like product catalogue browsing, filtering, and cart management leveraging reusable components, state management hooks, and declarative rendering for a fast and optimal user experience. The focus is on modular frontend architecture, design and workflows",
  },
  {
    id: 3,
    title: "Hustbee",
    src: hustbee,
    description:
      "A site for freelance services with responsive page layouts using HTML and CSS. Showcases creative web design with modular, reusable front-end code components for an optimized and adaptable UX",
  },
  // {
  //   id: 4,
  //   title: "Myntra Clone",
  //   src: mezban,
  //   description:
  //     "this image is very good and amazing to see and it have landscape scenery or many mountains and other things",
  // },
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
