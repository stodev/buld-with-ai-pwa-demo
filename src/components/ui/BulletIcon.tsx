import React from "react";

interface BulletIconProps {
  className?: string;
  size?: number;
}

const BulletIcon: React.FC<BulletIconProps> = ({ className = "", size = 20 }) => (
  <img
    src="/bullet-icon.svg"
    alt="Bullet"
    className={className}
    style={{ width: size, height: size, minWidth: size, minHeight: size, maxWidth: size, maxHeight: size, display: "inline-block", verticalAlign: "middle" }}
    draggable={false}
  />
);

export default BulletIcon;
