export const fadeIn = (direction) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "down" ? -85 : 85,
    },
    visible: { opacity: 1, y: 0 },
  };
};
export const fadeHorizontal = (direction) => {
  return {
    hidden: {
      opacity: 0,
      x: direction === "right" ? -85 : 85,
    },
    visible: { opacity: 1, y: 0 },
  };
};

export const reveal = () => {
  return {
    hidden: {
      left: 0,
    },
    visible: { left: "100%" },
  };
};

export const scale = () => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: { scale: 1, opacity: 1 },
  };
};
