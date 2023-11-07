import React from "react";
import {useTranslations} from "next-intl";
import TextAnimation from "@/app/[locale]/components/TextAnimation";

export default function Contact() {
    const t = useTranslations("Contact");
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2 p-4 flex flex-col justify-center m-4">
                <div className="flex mb-4">
                    <p className={"text-xl md:text-2xl sm:text-sm lg:text-4xl font-bold"}>{t('title')}</p>
                    <TextAnimation
                        text={[t('title2')]}
                        classes={"text-xl md:text-2xl sm:text-sm lg:text-4xl font-bold"}
                    />
                </div>
                <p className="my-2">{t("unsure")}</p>
                <p className="my-2 font-bold">{t("contact")}</p>
                <p className="my-2 underline">
                    <a href="mailto:kinnajfilms@gmail.com">{t("email")}</a>
                </p>
                <p className="my-2">{t("or")}</p>
                <p className="my-2">{t("insta")}</p>
                <p className="my-2">{t("exited")}</p>
            </div>
            <div className="md:w-1/2">
                <img src="/ai/ai3.png" alt="Bildbeschreibung" className="w-full h-auto"/>
            </div>
        </div>
    );
}
