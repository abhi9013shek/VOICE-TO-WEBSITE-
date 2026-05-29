"use client"
import { MeshGradient } from "@paper-design/shaders-react"

export default function GlobalBackground() {
    return (
        <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none">
            <MeshGradient
                className="absolute inset-0 w-full h-full"
                colors={["#000000", "#06b6d4", "#0891b2", "#164e63", "#f97316"]}
                speed={0.3}
            />
            <MeshGradient
                className="absolute inset-0 w-full h-full opacity-60"
                colors={["#000000", "#ffffff", "#06b6d4", "#f97316"]}
                speed={0.2}
            />
        </div>
    )
}
