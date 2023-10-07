import React from "react";

export default function Section({image, title, text, dark}: {
    image: string;
    title: string;
    text: string[];
    dark: boolean
}) {
    const classes = dark ? "flex flex-col items-center justify-center sm:flex-row bg-primary-50 text-white" : "flex flex-col items-center justify-center sm:flex-row";
    return (
        <div className={classes}>
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <div className="image-with-sloped-border">
                    <img src={image} alt="Bild" className="w-full h-auto"/>
                </div>
            </div>
            <div className="w-full sm:w-2/3 sm:ps-5 p-4">
                <h2 className="text-2xl font-semibold mb-2">{title}</h2>
                {text.map((textItem, index) => (
                    <p key={index}>
                        {textItem}
                    </p>
                ))}
            </div>
        </div>

    );
}
