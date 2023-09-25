"use client"

import React from 'react'
import Fpv from "@/app/components/fpv";
import Kinnaj from "@/app/components/kinnaj";
import Project from "@/app/components/project";
import Footer from "@/app/components/footer";
import Contact from "@/app/components/contact";

export default function Home() {
    return (
        <main>
            <div className="relative">
                <video autoPlay loop muted className="w-full object-cover">
                    <source src="/titleVideo.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 p-4 text-white animate-client-card-one">
                    <p className="text-xl md:text-6xl sm:text-2xl lg:text-9xl font-bold">Kinnaj</p>
                    <p className="text-xl md:text-6xl sm:text-2xl lg:text-9xl font-bold">Films</p>
                    <p className="text-xl md:text-6xl sm:text-2xl lg:text-9xl font-bold">Jannik Hug</p>
                </div>
            </div>
            <Fpv/>
            <Kinnaj/>
            <Project/>
            <Contact/>
            <Footer/>
        </main>
    );
}
