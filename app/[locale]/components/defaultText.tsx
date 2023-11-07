import React from "react";

export default function DefaultText({title, text, logo, width = "w-40"}: {
    title: string;
    text: string[];
    logo?: string;
    width?: string;
}) {
    return (
        <div className="w-full sm:w-3/5 sm:ps-5 p-6 m-4 relative">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            {text.map((textItem, index) => (
                <p key={index}>
                    {textItem}
                </p>
            ))}
            {logo && (
                <div className="absolute top-0 right-0">
                    <img src={logo} alt="Dein Logo" className={width}/>
                </div>
            )}
        </div>
    );
}
