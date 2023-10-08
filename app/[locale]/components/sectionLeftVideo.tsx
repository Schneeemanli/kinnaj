import React from "react";
import DefaultText from "@/app/[locale]/components/defaultText";

export default function SectionLeftVideo({video, title, text, dark}: {
    video: string;
    title: string;
    text: string[];
    dark: boolean
}) {
    const classes = dark ? "flex flex-col-reverse md:flex-row bg-primary-50 text-white" : "flex flex-col-reverse md:flex-row";
    return (
        <div className={classes}>
            <div className="md:w-3/5 p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                {text.map((textItem, index) => (
                    <p key={index}>
                        {textItem}
                    </p>
                ))}
            </div>
            <DefaultText title={title} text={text} />
        </div>
    );
}
