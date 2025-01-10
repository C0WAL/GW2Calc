import React from "react";

export const onRenderBody = ({ setHtmlAttributes,setPreBodyComponents }) => {
    setHtmlAttributes({ lang: "en" });
    setPreBodyComponents([
        <script
            key="dark-mode-script"
            dangerouslySetInnerHTML={{
                __html: `
                (function() {
                    const darkMode = localStorage.getItem('darkMode') === 'true';
                    if (darkMode) {
                        document.documentElement.classList.add('dark');
                    } else {
                        document.documentElement.classList.remove('dark');
                    }
                })();
                `,
            }}
        />,
    ]);
};