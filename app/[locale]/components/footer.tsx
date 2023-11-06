import React from "react";
import Link from "next/link";
import {TiktokIcon} from "@/app/[locale]/assets/tiktokIcon";
import {InstaIcon} from "@/app/[locale]/assets/instaIcon";
import {YoutubeIcon} from "@/app/[locale]/assets/youtubeIcon";
import {Haerd} from "@/app/[locale]/assets/haerd";

export default function Footer() {
    return (
        <footer className="text-white shadow bg-primary-50 mt-auto">
            <div className="w-full mx-auto max-w-screen-xl p-2 md:flex md:items-center md:justify-between">
    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a
        href="https://kinnajfilms.ch/"
        className="hover:underline">Kinnaj Films</a>. All Rights Reserved.</span>
                <div className="flex items-center">
                    <span className="text-white dark:text-gray-400">Made in<span className="fi fi-ch ms-1 rounded-sm ml-2"></span></span><span className="px-2">with</span><Haerd/>
                </div>
                <ul className="flex flex-wrap items-center text-sm font-medium dark:text-gray-400 sm:mt-0">
                    <li>
                        <Link href="/private" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                    </li>
                    <li>
                        <Link href="/impressum" className="mr-4 hover:underline md:mr-6">Impressum</Link>
                    </li>
                    <li className="px-2">
                        <Link href="https://www.tiktok.com/@kinnajfilms" className="px-2"><TiktokIcon/></Link>
                    </li>
                    <li className="px-2">
                        <Link href="https://www.instagram.com/kinnajfilms" className="px-2"><InstaIcon/></Link>
                    </li>
                    <li className="px-2">
                        <Link href="https://www.youtube.com/@kinnajfilms" className="px-2"><YoutubeIcon/></Link>
                    </li>
                </ul>
            </div>
        </footer>

    );
}