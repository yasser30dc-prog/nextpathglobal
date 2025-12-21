"use client";

export default function HeroScene() {
    return (
        <div
            className="w-full h-full absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/assets/hero-background.jpg)',
            }}
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />
        </div>
    );
}
