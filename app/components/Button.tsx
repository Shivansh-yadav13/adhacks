"use client";
import React from "react";
import clsx from "clsx";
import { motion, HTMLMotionProps } from "motion/react";
import { fadeInUp } from "../../lib/animation";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "light" | "dark";
  children: React.ReactNode;
}

const baseStyles =
  "cursor-pointer px-6 py-2 rounded-full font-medium transition-colors focus:outline-none backdrop-blur-md shadow-md text-lg";

const variantStyles = {
  primary:
    "bg-gradient-to-br border border-blue-700 from-blue-400 via-blue-500 to-blue-700 text-white shadow-[0_2px_8px_0_rgba(96,170,255,0.15)] hover:from-blue-500 hover:to-blue-800",
  light:
    "bg-white/80 border border-white text-zinc-900 border border-white/60 hover:bg-white/90",
  dark: "bg-zinc-900/80 text-white border border-zinc-700 hover:bg-zinc-900/90",
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  return (
    <motion.button
      className={clsx(baseStyles, variantStyles[variant], className)}
      initial={fadeInUp.initial}
      animate={fadeInUp.animate}
      transition={fadeInUp.transition}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
