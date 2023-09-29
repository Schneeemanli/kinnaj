import React from "react";
import Link from "next/link";
import RevealOnScroll from "./revealOnScroll";

export default function Fpv() {
    return (
        <div className="bg-primary-50 p-5 md:p-8 lg:p-11 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <RevealOnScroll axis="x">
                    <div className="p-4 bg-white shadow-lg rounded-3xl animate-move-left">
                        <h2 className="text-2xl text-gray-700 font-semibold mb-4">Was ist FPV?</h2>
                        <p className="text-gray-700">FPV steht für First-Person View und bezieht sich auf eine Art des
                            Fliegens, bei dem ein Pilot eine Drohne oder ein Flugzeug aus der Sicht eines Cockpit-Pilots
                            steuert.</p>
                        <p className="text-gray-700 mt-4">Mit FPV können Sie ein immersives Flugerlebnis genießen und
                            das Gefühl haben, selbst im Cockpit zu sitzen.</p>
                    </div>
                </RevealOnScroll>
                <RevealOnScroll axis="x">
                    <div className="p-4 bg-white shadow-lg rounded-3xl animate-move-right">
                        <h2 className="text-2xl text-gray-700 font-semibold mb-4">Ausrüstung</h2>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>FPV-Brille oder -Monitor</li>
                            <li>Drohne oder Flugzeug mit FPV-Kamera</li>
                            <li>Sender und Empfänger</li>
                            <li>Steuerungskonsole</li>
                        </ul>
                    </div>
                </RevealOnScroll>
            </div>
            <div className="flex items-center justify-center pt-5">
                <Link href="/drone"
                      className="bg-primary-200 hover:bg-primary-300 text-white font-semibold py-2 px-4 rounded-full">
                    More about Equipment
                </Link>
            </div>
        </div>
    );
}
