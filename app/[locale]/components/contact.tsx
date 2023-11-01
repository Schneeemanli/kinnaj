import React from "react";
import {useTranslations} from "next-intl";
import TextAnimation from "@/app/[locale]/components/TextAnimation";

export default function Contact() {
    const t = useTranslations("Contact");
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2 p-4 flex flex-col justify-center">
                <TextAnimation
                    text={[t('title')]}
                    classes={"text-xl md:text-2xl sm:text-sm lg:text-4xl font-bold"}
                />
                <p className="text-primary-100">{t("unsure")}</p>
                <p className="text-primary-100">{t("contact")}</p>
                <p className="text-primary-100">{t("email")}</p>
                <p className="text-primary-100">{t("or")}</p>
                <p className="text-primary-100">{t("insta")}</p>
                <p className="text-primary-100">{t("exited")}</p>
            </div>
            <div className="md:w-1/2">
                <img src="ai1.png" alt="Bildbeschreibung" className="w-full h-auto"/>
            </div>
        </div>
    );
}
