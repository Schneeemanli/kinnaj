import React from "react";

export default function DefaultText({title, text}: {
    title: string;
    text: string[];
}) {
    return (
        <div className="w-full sm:w-3/5 sm:ps-5 p-4">
            <h2 className="text-2xl font-semibold mb-2">{title}</h2>
            {text.map((textItem, index) => (
                <p key={index}>
                    {textItem}
                </p>
            ))}
        </div>
    );
}
