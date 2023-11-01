"use client"

import React from "react";
import DefaultText from "@/app/[locale]/components/defaultText";
import TextAnimation from "@/app/[locale]/components/TextAnimation";

export default function SectionAnimation({image, title, text, dark}: {
    image: string;
    title: string[];
    text: string[];
    dark: boolean
}) {
    const classes = dark ? "flex flex-col items-center justify-center sm:flex-row bg-primary-50 text-white" : "flex flex-col items-center justify-center sm:flex-row";
    return (
        <div className={classes}>
            <div className="w-full sm:w-2/5 mb-4 sm:mb-0">
                <div className="image-with-sloped-border">
                    <img src={image} alt="Bild" className="w-full h-auto"/>
                </div>
            </div>
            <div className="w-full sm:w-3/5 sm:ps-5 p-4">
                <TextAnimation
                    text={title}
                    classes={"text-lg md:text-xl sm:text-sm lg:text-2xl font-bold"}
                />
                {text.map((textItem, index) => (
                    <p key={index}>
                        {textItem}
                    </p>
                ))}
            </div>
        </div>
    );
}
