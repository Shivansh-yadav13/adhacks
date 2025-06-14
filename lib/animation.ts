// Common animation object for motion components
export const fadeInUp = {
  initial: { y: 20, opacity: 0, filter: "blur(10px)" },
  animate: { y: 0, opacity: 1, filter: "blur(0px)" },
  transition: {
    duration: 0.8,
    ease: [0.4, 0, 0.2, 1],
  },
};
