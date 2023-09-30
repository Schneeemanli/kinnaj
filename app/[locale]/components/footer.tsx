import React from "react";
import Link from "next/link";
import {TiktokIcon} from "@/app/[locale]/assets/tiktokIcon";
import {InstaIcon} from "@/app/[locale]/assets/instaIcon";
import {YoutubeIcon} from "@/app/[locale]/assets/youtubeIcon";

export default function Footer() {
    return (
        <footer className="text-white shadow bg-primary-50  mt-auto">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a
                    href="https://kinnajfilms.ch/"
                    className="hover:underline">Kinnaj Films</a>. All Rights Reserved.</span>
                <ul>
                    <li className="pt-4 sm:pt-0 md:pt-0">
                        <span className="text-white dark:text-gray-400">Made in <span className="fi fi-ch ms-1"></span></span>
                    </li>
                </ul>
                <ul className="flex flex-wrap items-center text-sm font-medium dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/private" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/impressum" className="mr-4 hover:underline md:mr-6">Impressum</Link>
                    </li>
                    <li className="px-2">
                        <a href="https://www.tiktok.com/@kinnajfilms" className="px-2"><TiktokIcon/></a>
                    </li>
                    <li className="px-2">
                        <a href="https://www.instagram.com/kinnajfilms" className="px-2"><InstaIcon/></a>
                    </li>
                    <li className="px-2">
                        <a href="https://www.youtube.com/@kinnajfilms" className="px-2"><YoutubeIcon/></a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}