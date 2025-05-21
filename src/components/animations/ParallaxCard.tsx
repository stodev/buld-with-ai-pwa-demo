import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useMotionValueEvent } from "framer-motion";

interface ParallaxCardProps {
  index: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

const ParallaxCard: React.FC<ParallaxCardProps> = ({ index, icon, title, desc, color }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });

  const x = useTransform(scrollYProgress, [0, 1], index === 0 ? [80, 0] : [-60, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], index === 0 ? [1.08, 1] : [0.92, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], index === 0 ? [0, 0] : [8, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  // Workaround: use a local state for blur string
  const [blurString, setBlurString] = React.useState("blur(0px)");
  useMotionValueEvent(blur, "change", (latest) => {
    setBlurString(`blur(${latest}px)`);
  });

  return (
    <motion.div
      ref={ref}
      className="reminder-card"
      style={{
        x,
        scale,
        filter: blurString,
        opacity,
        zIndex: index === 0 ? 2 : 1,
      }}
    >
      <span className="reminder-card-icon" style={{ background: color }}>
        {icon}
      </span>
      <div>
        <div className="reminder-card-title">{title}</div>
        <div className="reminder-card-desc">{desc}</div>
      </div>
    </motion.div>
  );
};

export default ParallaxCard;
