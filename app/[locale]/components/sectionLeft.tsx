import React from "react";

export default function SectionLeft({image, title, text, dark}: {
    image: string;
    title: string;
    text: string[];
    dark: boolean
}) {
    const classes = dark ? "flex flex-col-reverse md:flex-row bg-primary-50 text-white" : "flex flex-col-reverse md:flex-row";
    return (
        <div className={classes}>
            <div className="md:w-2/3 p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                {text.map((textItem, index) => (
                    <p key={index}>
                        {textItem}
                    </p>
                ))}
            </div>
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <div className="image-with-sloped-border-left">
                    <img src={image} alt="Bild" className="w-full h-auto"/>
                </div>
            </div>
        </div>
    );
}
