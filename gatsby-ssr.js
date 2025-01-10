import React from "react";

export const onRenderBody = ({ setHtmlAttributes, setPreBodyComponents }) => {
    setHtmlAttributes({ lang: "en" });
    setPreBodyComponents([
        <script
            key="dark-mode-script"
            dangerouslySetInnerHTML={{
                __html: `
                (function() {
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
                })();
                `,
            }}
        />,
    ]);
};