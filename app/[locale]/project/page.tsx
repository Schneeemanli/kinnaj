import React from "react";
import { useTranslations } from "next-intl";

import Header from "@/app/[locale]/components/header";
import SectionVideo from "@/app/[locale]/components/sectionVideo";
import SectionLeftVideo from "@/app/[locale]/components/sectionLeftVideo";

export default function Page() {
  const t = useTranslations("Projects");
  return (
    <div>
      <Header />
      <SectionVideo
        video="/titleVideo.mp4"
        title={t("bastellaTitle")}
        text={[t("bastellaDescription")]}
        dark={true}
        logo={"/client_logos/bastella.png"}
      />
      <SectionLeftVideo
        video="/titleVideo.mp4"
        title={t("castiglioneTitle")}
        text={[t("castiglioneDescription")]}
        dark={false}
        logo={"/client_logos/Castiglione_Falletto.png"}
        width={"w-16"}
      />
      <SectionVideo
        video="/titleVideo.mp4"
        title={t("tcmTitle")}
        text={[t("tcmDescription")]}
        dark={true}
        logo={"/client_logos/tennisclub_murten.png"}
      />
    </div>
  );
}
