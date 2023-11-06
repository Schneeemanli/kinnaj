import React from "react";
import Link from "next/link";
import {TiktokIcon} from "@/app/[locale]/assets/tiktokIcon";
import {InstaIcon} from "@/app/[locale]/assets/instaIcon";
import {YoutubeIcon} from "@/app/[locale]/assets/youtubeIcon";
import {Haerd} from "@/app/[locale]/assets/haerd";

export default function Footer() {
    return (
        <footer className="text-white shadow bg-primary-50 mt-auto">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2023 <a
        href="https://kinnajfilms.ch/"
        className="hover:underline">Kinnaj Films</a>. All Rights Reserved.</span>
                <div className="flex items-center">
                    <span className="text-white dark:text-gray-400">Made in<span className="fi fi-ch ms-1 rounded-sm ml-2"></span></span><span className="px-2">with</span><Haerd/>
                </div>
                <div className="flex items-center">
                        <Link href="/private" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>

                        <Link href="/impressum" className="mr-4 hover:underline md:mr-6">Impressum</Link>

                        <Link href="https://www.tiktok.com/@kinnajfilms" className="px-2"><TiktokIcon/></Link>

                        <Link href="https://www.instagram.com/kinnajfilms" className="px-2"><InstaIcon/></Link>

                        <Link href="https://www.youtube.com/@kinnajfilms" className="px-2"><YoutubeIcon/></Link>
                </div>

            </div>
        </footer>

    );
}