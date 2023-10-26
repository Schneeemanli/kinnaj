import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import TextAnimation from "@/app/[locale]/components/TextAnimation";

export default function Kinnaj() {
  const t = useTranslations("Home");
  return (
    <div className="flex flex-col items-center justify-center sm:flex-row">
      <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
        <div className="image-with-sloped-border">
          <img
            src="/logo_drone_bk_white.svg"
            alt="Bild"
            className="w-full h-auto"
          />
        </div>
      </div>
      <div className="w-full sm:w-2/3 sm:ps-5 p-4">
        <TextAnimation
          text={["Kinnaj Films", "Jannik Hug"]}
          classes={"text-2xl md:text-4xl sm:text-xl lg:text-6xl font-bold"}
        />
        <p className="text-primary-100 pb-8">{t("kinajBeschreibung1")}</p>
        <p className="text-primary-100 pb-8">{t("kinajBeschreibung2")}</p>
        <p className="text-primary-100 pb-8">{t("kinajBeschreibung3")}</p>
        <p className="text-primary-100 pb-8">{t("kinajBeschreibung4")}</p>
        <p className="text-primary-100 pb-8">{t("kinajBeschreibung5")}</p>
        <p className="text-primary-100 pb-8">{t("kinajBeschreibung6")}</p>
        <p className="text-primary-100 pb-8">{t("kinajBeschreibung7")}</p>
        <Link
          href="/about"
          className="bg-primary-200 hover:bg-primary-300 text-white font-semibold py-2 px-4 rounded-full"
        >
          {t("buttonAbout")}
        </Link>
      </div>
    </div>
  );
}
