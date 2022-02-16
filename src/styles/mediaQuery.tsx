const size = {
  laptop: "1024px",
  desktop: "2560px",
  mobileS: "320px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
