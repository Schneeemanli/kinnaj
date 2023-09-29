import React from "react";
import Link from "next/link";
import {useTranslations} from "next-intl";

export default function Kinnaj() {
    const t = useTranslations("Home");
    return (
        <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <img src="./portrait.png" alt="Bild" className="w-full h-auto" />
            </div>
            <div className="w-full sm:w-2/3 sm:ps-5 p-4">
                <h2 className="text-2xl font-semibold mb-2">Kinnaj Films</h2>
                <p className="text-primary-100 pb-8">{t("kinajBeschreibung")}</p>
                <Link href="/about" className="bg-primary-200 hover:bg-primary-300 text-white font-semibold py-2 px-4 rounded-full">
                    About Jannik Hug
                </Link>
            </div>
        </div>
    )
}