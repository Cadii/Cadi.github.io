const totop = () => window.scrollTo({top: 0, behavior: 'smooth'});
const isDarkMode = () => {
  window.matchMedia('(prefers-color-scheme: dark)').matches;
}
