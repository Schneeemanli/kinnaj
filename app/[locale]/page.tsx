"use client"

import React from 'react'
import Fpv from "@/app/[locale]/components/fpv";
import Kinnaj from "@/app/[locale]/components/kinnaj";
import Project from "@/app/[locale]/components/project";
import Contact from "@/app/[locale]/components/contact";
import Header from "@/app/[locale]/components/header";
import {CookieConsent} from "react-cookie-consent";
import Cookie from "@/app/[locale]/components/cookie";

export default function Home() {
    return (
        <main className="white">
            <Header/>
            <div className="relative">
                <video autoPlay loop muted className="w-full object-cover">
                    <source src="/proj_videos/Showreel_HD.mp4" type="video/mp4"/>
                </video>
            </div>
            <Fpv/>
            <Kinnaj/>
            <Project/>
            <Contact/>
            <Cookie/>
        </main>
    );
}
