import React from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  return (
    <div className="flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-4">{t("title")}</h2>
        <p className="text-primary-100">{t("title")}</p>
        <p className="text-primary-100">{t("unsure")}</p>
        <p className="text-primary-100">{t("contact")}</p>
        <p className="text-primary-100">{t("email")}</p>
        <p className="text-primary-100">{t("or")}</p>
        <p className="text-primary-100">{t("insta")}</p>
        <p className="text-primary-100">{t("exited")}</p>
      </div>
      <div className="md:w-1/2">
        <img src="ai1.png" alt="Bildbeschreibung" className="w-full h-auto" />
      </div>
    </div>
  );
}
