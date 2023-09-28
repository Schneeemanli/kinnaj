import React from "react";
import Link from "next/link";

export default function Kinnaj() {
    return (
        <div className="flex flex-col items-center justify-center sm:flex-row">
            <div className="w-full sm:w-1/3 mb-4 sm:mb-0">
                <img src="./portrait.png" alt="Bild" className="w-full h-auto" />
            </div>
            <div className="w-full sm:w-2/3 sm:ps-5 p-4">
                <h2 className="text-2xl font-semibold mb-2">Kinnaj Films</h2>
                <p className="text-gray-700 pb-8">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                <Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                    About Jannik Hug
                </Link>
            </div>
        </div>

    )
}