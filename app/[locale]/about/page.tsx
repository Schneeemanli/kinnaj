import React from "react";
import Footer from "@/app/[locale]/components/footer";
import Header from "@/app/[locale]/components/header";
import Section from "@/app/[locale]/components/section";
import SectionLeft from "@/app/[locale]/components/sectionLeft";
import {useTranslations} from "next-intl";

export default function Page() {
    const t = useTranslations("About");
    return (
        <div>
            <Header/>
            <Section image="/about_me/about1.jpg" title={t("titleJannik")} text={[t("description1")]} dark={true}/>
            <SectionLeft image="/about_me/about_drone.jpg" title={t("titleDrones")} text={[t("description2")]} dark={false}/>
            <Section image="/about_me/about2.jpg" title="Titel1" text={["lorem ipsum"]} dark={true}/>
        </div>
    )
}