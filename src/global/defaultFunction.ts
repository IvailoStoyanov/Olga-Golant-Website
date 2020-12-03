
export const scrollToDesiredLocation = (element) => {
  element.scrollIntoView({behavior: 'smooth', block: "center", inline: "center"});
};