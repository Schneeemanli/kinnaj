import React from "react";
import Footer from "@/app/[locale]/components/footer";
import Header from "@/app/[locale]/components/header";
import Link from "next/link";
import Section from "@/app/[locale]/components/section";
import SectionLeft from "@/app/[locale]/components/sectionLeft";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations("Equipment");
  return (
    <div>
      <Header />
      <Section
        image="/equipment/v2.jpg"
        title={t("v2t")}
        text={[t("v2d")]}
        dark={true}
      />
      <SectionLeft
        image="/equipment/cinebot30.jpg"
        title={t("cinebot30t")}
        text={[t("cinebot30d")]}
        dark={false}
      />
      <Section
        image="/equipment/pico.jpg"
        title={t("picot")}
        text={[t("picod")]}
        dark={true}
      />
      <SectionLeft
        image="/equipment/avata.jpg"
        title={t("avatat")}
        text={[t("avatad")]}
        dark={false}
      />
      <Section
        image="/equipment/v1.jpg"
        title={t("v1t")}
        text={[t("v1d")]}
        dark={true}
      />
      <SectionLeft
        image="/equipment/googles2.jpg"
        title={t("6t")}
        text={[t("6t")]}
        dark={false}
      />
      <Section
        image="/equipment/analog.jpg"
        title={t("analogt")}
        text={[t("analogd")]}
        dark={true}
      />
      <SectionLeft
        image="/equipment/tango2.jpg"
        title={t("6t")}
        text={[t("6t")]}
        dark={false}
      />
      <Section
        image="/equipment/tx16.jpg"
        title={t("tx16t")}
        text={[t("tx16d")]}
        dark={true}
      />
      <SectionLeft
        image="/equipment/nd_filters.jpg"
        title={t("ndt")}
        text={[t("ndd")]}
        dark={false}
      />
      <Section
        image="/equipment/goPro.jpg"
        title={t("goProt")}
        text={[t("goProd")]}
        dark={true}
      />
      <SectionLeft
        image="/equipment/sony_camera.jpg"
        title={t("sonyCamerat")}
        text={[t("sonyCamerad")]}
        dark={false}
      />
      <Section
        image="/equipment/batteries.jpg"
        title={t("batteriest")}
        text={[t("batteriesd")]}
        dark={true}
      />
    </div>
  );
}
