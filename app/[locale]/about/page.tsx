import React from "react";
import Footer from "@/app/[locale]/components/footer";
import Header from "@/app/[locale]/components/header";
import Section from "@/app/[locale]/components/section";
import SectionLeft from "@/app/[locale]/components/sectionLeft";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("About");
  return (
    <div>
      <Header />
      <Section
        image="/about_me/about1.jpg"
        title={t("titleJannik")}
        text={[t("descriptionJannik1"), t("descriptionJannik2")]}
        dark={true}
      />
      <SectionLeft
        image="/about_me/about_drone.jpg"
        title={t("titleDrones")}
        text={[t("descriptionDrones1"), t("descriptionDrones2")]}
        dark={false}
      />
      <Section
        image="/about_me/about2.jpg"
        title={t("titleMot")}
        text={[t("descriptionMot1"), t("descriptionMot2")]}
        dark={true}
      />
    </div>
  );
}
