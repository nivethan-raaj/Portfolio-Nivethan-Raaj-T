"use client"

import { useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export function RotatingCard() {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div className="relative w-80 h-96 perspective-1000">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d cursor-pointer ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden bg-slate-800 border-slate-700 overflow-hidden group">
          <div className="relative h-full">
            <div className="absolute -inset-4 bg-emerald-400 rounded-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-emerald-400 rounded-lg p-1 h-full">
              <Image
                src="/profile-photo.jpg"
                alt="Nivethan Raaj T"
                fill
                className="rounded-lg grayscale group-hover:grayscale-0 transition-all duration-500 object-cover"
              />
            </div>
          </div>
        </Card>

        {/* Back Side */}
        <Card className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-800 border-emerald-400 overflow-hidden">
          <div className="relative h-full">
            <div className="absolute -inset-4 bg-blue-400 rounded-lg opacity-25 hover:opacity-40 transition-opacity duration-300"></div>
            <div className="relative bg-blue-400 rounded-lg p-1 h-full">
              <Image
                src="/second-image.jpg"
                alt="Nivethan professional photo"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
