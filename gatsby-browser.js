import "./src/styles/global.css"
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const onInitialClientRender = () => {
    if (typeof window !== "undefined") {
      const storedDarkMode = localStorage.getItem("darkMode");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
      const darkMode = storedDarkMode === "true" || (storedDarkMode === null && prefersDark);
  
      if (darkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };
