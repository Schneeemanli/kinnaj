import {CookieConsent} from "react-cookie-consent";
import React from "react";
import {useTranslations} from "next-intl";

export default function Cookie() {
    const t = useTranslations("Home");
    return (
        <CookieConsent
            location="bottom"
            buttonText={t("cookieButton")}
            cookieName="cookieConsent"
            style={{background: "#2B373B"}}
            buttonStyle={{color: "#ffffff", fontSize: "13px", background: "#7318A2", borderRadius: "15px"}}
            expires={150}
        >
            {t("cookie")}
        </CookieConsent>
    );
}