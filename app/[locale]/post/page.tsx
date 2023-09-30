import React from "react";
import Header from "@/app/[locale]/components/header";
import Section from "@/app/[locale]/components/section";
import SectionLeft from "@/app/[locale]/components/sectionLeft";
import path from "path";
import * as fs from "fs";

export default function Page() {
    // read all files from public/posts and get the paths
    const paths = fs.readdirSync(path.join(process.cwd(), "public/posts"));
    return (
        <div>
            <Header/>
            {paths.map((path) => `/posts/${path}`).map((path) => {
                return (
                    <div className="relative">
                        <video autoPlay loop muted className="w-full object-cover">
                            <source src={path} type="video/mp4"/>
                        </video>
                    </div>
                )
            })}
        </div>
    )
}