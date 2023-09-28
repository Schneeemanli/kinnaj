import React from "react";

export default function Contact() {
    return (

        <div className="flex flex-col-reverse md:flex-row">
            <div className="md:w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-semibold mb-4">Ihr Text hier</h2>
                <p className="text-gray-700">Hier können Sie Ihren Text eingeben.</p>
            </div>
            <div className="md:w-1/2">
                <img src="/contact.jpeg" alt="Bildbeschreibung" className="w-full h-auto" />
            </div>
        </div>

    )
}