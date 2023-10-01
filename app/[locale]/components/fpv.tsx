import React from "react";
import Link from "next/link";
import RevealOnScroll from "./revealOnScroll";
import {useTranslations} from "next-intl";

export default function Fpv() {
    const t = useTranslations("Home");
    return (
        <div className="bg-primary-50 p-5 md:p-8 lg:p-11 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <RevealOnScroll axis="x">
                    <div className="p-4 bg-white shadow-lg rounded-3xl animate-move-left">
                        <h2 className="text-2xl text-gray-700 font-semibold mb-4">{t("fpvTitel")}</h2>
                        <p className="text-gray-700">{t("whatIsFpv")}</p>
                        <p className="text-gray-700 mt-4">{t("offersFPV")}</p>
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
                <Link href="/drone" className="bg-primary-200 hover:bg-primary-300 text-white font-semibold py-2 px-4 rounded-full">
                    {t("buttonEquipment")}
                </Link>
            </div>
        </div>
    );
}
