import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import "./Navbar.css";

const Navbar = () => {
  const [hamOpen, setHamOpen] = useState(false);
  const hamRef = useRef(null);

  useEffect(() => {
    const hamElement = hamRef.current;

    const handleMouseMove = (event) => {
      const { left, top, width, height } = hamElement.getBoundingClientRect();
      const mouseX = event.clientX - left - width / 2;
      const mouseY = event.clientY - top - height / 2;

      gsap.to(hamElement, {
        x: mouseX * 0.3,
        y: mouseY * 0.3,
        scale: 1.1,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(hamElement, {
        x: 0,
        y: 0,
        scale: 1,
        ease: "power3.out",
        duration: 0.5,
      });
    };

    hamElement.addEventListener("mousemove", handleMouseMove);
    hamElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hamElement.removeEventListener("mousemove", handleMouseMove);
      hamElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleHamClick = () => setHamOpen(!hamOpen);

  const itemVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i) => ({
      y: "0%",
      opacity: 1,
      transition: { delay: i * 0.3, duration: 1, ease: [0.85, 0, 0.15, 1] },
    }),
  };

  return (
    <div className="main-navbar">
      <div className="ham-parent">
        <motion.div className="ham" ref={hamRef} onClick={handleHamClick}>
          <motion.div
            animate={{ rotate: hamOpen ? 47 : 0 }}
            className="line1"
          />
          <motion.div
            animate={{
              marginTop: hamOpen ? -5 : 0,
              rotate: hamOpen ? -47 : 0,
            }}
            className="line2"
          />
        </motion.div>
      </div>
      <div className="nav-parent">
        <motion.div
          style={{ display: hamOpen ? "none" : "block" }}
          className="header"
        >
          <h1 onClick={() => (window.location.href = "/")}>
            MohitTiwariDev
          </h1>
        </motion.div>
      </div>
      <motion.div
        transition={{ duration: 0.6, ease: [0.85, 0, 0.15, 1] }}
        animate={{
          display: hamOpen ? "flex" : "none",
          marginTop: hamOpen ? 0 : -4700,
        }}
        className="ham-items-parent"
      >
        <div onClick={handleHamClick} className="text">
          <h1>Mohit Tiwari Dev.</h1>
        </div>
        <div className="divider" />
        <motion.div
          className="ham-items"
          initial="hidden"
          animate={hamOpen ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          <motion.a href="/">Home</motion.a>
          {["About", "Projects"].map((item, i) => (
            <motion.a
              key={item}
              initial="hidden"
              animate={hamOpen ? "visible" : "hidden"}
              variants={itemVariants}
              custom={i}
              href={`/${item.toLowerCase()}`}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Navbar;
