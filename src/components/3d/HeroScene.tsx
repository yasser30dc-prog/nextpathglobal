"use client";

import Image from "next/image";

export default function HeroScene() {
    return (
        <div className="w-full h-full absolute inset-0 z-0">
            <Image
                src="/assets/hero-background.png"
                alt="NextPath Global Background"
                fill
                priority
                className="object-cover object-center"
                quality={85}
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40 z-10" />
        </div>
    );
}
