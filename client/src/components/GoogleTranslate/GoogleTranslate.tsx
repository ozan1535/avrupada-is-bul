/* "use client";

import { useEffect, useRef } from "react";

export default function GoogleTranslate() {
  const initialized = useRef(false);

  useEffect(() => {
    // Prevent double initialization
    if (initialized.current) return;
    initialized.current = true;

    // Declare the callback globally for Google
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: (window as any).google.translate.TranslateElement.InlineLayout
            .SIMPLE,
        },
        "google_translate_element"
      );
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="g_translater" className="translate" data-show="true">
      <div id="google_translate_element" data-show="true"></div>
    </div>
  );
}
 */

"use client";

import { useEffect, useRef } from "react";

export default function GoogleTranslate() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Define the callback globally
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );

      // Fix for translation not updating on 2nd selection
      setTimeout(() => {
        const combo =
          document.querySelector<HTMLSelectElement>(".goog-te-combo");
        if (combo) {
          combo.addEventListener("change", () => {
            const evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", true, true);
            combo.dispatchEvent(evt);
          });
        }
      }, 1000);
    };

    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="google-translate-container">
      <div id="google_translate_element" />
    </div>
  );
}
