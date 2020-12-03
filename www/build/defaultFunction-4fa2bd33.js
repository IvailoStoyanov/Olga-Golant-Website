const scrollToDesiredLocation = (element) => {
  element.scrollIntoView({ behavior: 'smooth', block: "center", inline: "center" });
};

export { scrollToDesiredLocation as s };
