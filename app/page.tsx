"use client"

import React from 'react'
import FPV from "@/app/components/FPV";
import Kinnaj from "@/app/components/kinnaj";

export default function Home() {
    return (
        <main className="relative flex flex-col items-center justify-between p-5">
            <div className="relative">
                <video autoPlay loop muted className="w-full object-cover">
                    <source src="/titleVideo.mp4" type="video/mp4" />
                </video>
            </div>
            <div className="pt-5">
                <FPV />
                <Kinnaj />
            </div>
        </main>
    );
}
