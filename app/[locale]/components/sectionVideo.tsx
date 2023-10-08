import React from "react";
import DefaultText from "@/app/[locale]/components/defaultText";

export default function SectionVideo({video, title, text, dark}: {
    video: string;
    title: string;
    text: string[];
    dark: boolean
}) {
    const classes = dark ? "flex flex-col items-center justify-center sm:flex-row bg-primary-50 text-white" : "flex flex-col items-center justify-center sm:flex-row";
    return (
        <div className={classes}>
            <div className="w-full sm:w-2/5 mb-4 sm:mb-0">
                <div className="image-with-sloped-border">
                    <video autoPlay loop muted className="w-full object-cover">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
            <DefaultText title={title} text={text} />
        </div>

    );
}
