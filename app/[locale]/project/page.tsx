import React from "react";
import Footer from "@/app/[locale]/components/footer";
import Header from "@/app/[locale]/components/header";
import Section from "@/app/[locale]/components/section";
import SectionLeft from "@/app/[locale]/components/sectionLeft";
import SectionVideo from "@/app/[locale]/components/sectionVideo";
import SectionLeftVideo from "@/app/[locale]/components/sectionLeftVideo";

export default function Page() {
    return (
        <div>
            <Header/>
            <SectionVideo video="/titleVideo.mp4" title="Titel1" text={["lorem ipsum"]} dark={true}/>
            <SectionLeftVideo video="/titleVideo.mp4" title="Titel1" text={["lorem ipsum"]} dark={false}/>
            <SectionVideo video="/titleVideo.mp4" title="Titel1" text={["lorem ipsum"]} dark={true}/>
        </div>
    )
}