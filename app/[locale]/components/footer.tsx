import React from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="text-white shadow bg-primary-50  mt-auto">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a href="https://kinnajfilms.ch/"
                                                                                          className="hover:underline">Kinnaj Films</a>. All Rights Reserved.
    </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link className="mr-4 hover:underline md:mr-6 " href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/private" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/impressum" className="mr-4 hover:underline md:mr-6">Impressum</Link>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}