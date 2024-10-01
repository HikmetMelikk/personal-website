import i18next from "i18next";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import App from "./App.tsx";
import global_en from "./translations/en/global.json";
import global_tr from "./translations/tr/global.json";

i18next.init({
    interpolation: { escapeValue: false },
    lng: "en",
    resources: {
        tr: {
            global: global_tr,
        },
        en: {
            global: global_en,
        },
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <I18nextProvider i18n={i18next}>
            <App />
        </I18nextProvider>
    </StrictMode>
);
