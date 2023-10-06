import React from "react";
import Footer from "@/app/[locale]/components/footer";
import Header from "@/app/[locale]/components/header";
import Link from "next/link";
import Section from "@/app/[locale]/components/section";
import SectionLeft from "@/app/[locale]/components/sectionLeft";
import {useTranslations} from "next-intl";

export default function Page() {
    const t = useTranslations('Equipment');
    return (
        <div>
            <Header/>
            <Section image="/equipment/custom5.jpg" title={t("1t")} text={t("1d")} dark={true}/>
            <SectionLeft image="/equipment/customO3.jpg" title={t("2t")} text={t("2t")} dark={false}/>
            <Section image="/equipment/cine.jpg" title={t("3t")} text={t("3t")} dark={true}/>
            <SectionLeft image="/equipment/avata.jpg" title={t("4t")} text={t("4t")} dark={false}/>
            <Section image="/equipment/googles2.jpg" title={t("5t")} text={t("5t")} dark={true}/>
            <SectionLeft image="/equipment/googlesV2.jpg" title={t("6t")} text={t("6t")} dark={false}/>
            <Section image="/equipment/portrait.png" title={t("7t")} text={t("7t")} dark={true}/>
        </div>
    )
}