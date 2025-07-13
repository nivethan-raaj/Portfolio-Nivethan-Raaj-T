"use client"

import { useState, useEffect, useRef } from "react"

const welcomeMessages = [
  { text: "Welcome", lang: "English", flag: "🇺🇸" },
  { text: "வணக்கம்", lang: "Tamil", flag: "🇮🇳" },
  { text: "नमस्ते", lang: "Hindi", flag: "🇮🇳" },
  { text: "안녕하세요", lang: "Korean", flag: "🇰🇷" },
  { text: "こんにちは", lang: "Japanese", flag: "🇯🇵" },
]

export function MultilingualWelcome({ onComplete }: { onComplete: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [animationComplete, setAnimationComplete] = useState(false) // New state to signal internal animation completion
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Start the interval for message cycling
    intervalRef.current = setInterval(() => {
      setIsVisible(false) // Start fade out for current message

      setTimeout(() => {
        setCurrentIndex((prev) => {
          const next = prev + 1
          if (next < welcomeMessages.length) {
            setIsVisible(true) // Fade in for the next message
            return next
          } else {
            // Sequence completed: This is the last message.
            if (intervalRef.current) {
              clearInterval(intervalRef.current) // Stop the interval
            }
            setAnimationComplete(true) // Signal that internal animation is done
            return prev // Stay on the last message
          }
        })
      }, 300) // Duration of fade out
    }, 800) // Interval between messages

    // Cleanup function to clear interval on component unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, []) // Empty dependency array means this effect runs once on mount

  // Separate useEffect to call onComplete when internal animation is truly done
  useEffect(() => {
    if (animationComplete) {
      // Add a small delay to ensure the last message is fully visible before unmounting
      const timer = setTimeout(() => {
        onComplete()
      }, 500) // Adjust delay as needed
      return () => clearTimeout(timer)
    }
  }, [animationComplete, onComplete]) // Depend on animationComplete and onComplete

  const currentMessage = welcomeMessages[currentIndex]

  return (
    <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
      <div className="text-center">
        <div className={`transition-all duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <div className="text-6xl mb-4">{currentMessage.flag}</div>
          <h1 className="text-5xl font-bold text-emerald-400 mb-2">{currentMessage.text}</h1>
          <p className="text-slate-400 text-lg">{currentMessage.lang}</p>
        </div>

        <div className="mt-8 flex justify-center space-x-2">
          {welcomeMessages.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                index === currentIndex ? "bg-emerald-400" : "bg-slate-600"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
