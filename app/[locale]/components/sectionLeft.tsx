import React from "react";
import DefaultText from "@/app/[locale]/components/defaultText";

export default function SectionLeft({image, title, text, dark}: {
    image: string;
    title: string;
    text: string[];
    dark: boolean
}) {
    const classes = dark ? "flex flex-col-reverse md:flex-row bg-primary-50 text-white" : "flex flex-col-reverse md:flex-row";
    return (
        <div className={classes}>
            <DefaultText title={title} text={text}/>
            <div className="w-full sm:w-2/5 mb-4 sm:mb-0">
                <div className="image-with-sloped-border-left">
                    <img src={image} alt="Bild" className="w-full h-auto"/>
                </div>
            </div>
        </div>
    );
}
