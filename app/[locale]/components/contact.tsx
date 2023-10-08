import React from "react";
import {useTranslations} from "next-intl";

export default function Contact() {
    const t = useTranslations("Contact");
    return (
        <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>

                <p className="text-primary-100">Hier können Sie Ihren Text eingeben.</p>

            </div>
            <div className="md:w-1/2">
                <img src="/contact.jpeg" alt="Bildbeschreibung" className="w-full h-auto" />
            </div>
        </div>

    )
}