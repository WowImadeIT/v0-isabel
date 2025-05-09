"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { Switch } from "@/components/ui/switch"
import { playfair } from "@/app/fonts"

export default function SettingsPage() {
  const { theme, setTheme } = useTheme()
  const isDark = theme === "dark"

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: isDark ? 'black' : 'white', color: isDark ? 'white' : 'black' }}>
      {/* Top section with dark background */}
      <div className="bg-black text-white">
        <header className="p-4 flex justify-between items-center">
          <h1 className={`text-2xl ${playfair.className}`}>settings</h1>
          <Link href="/">
            <Menu className="w-6 h-6" />
          </Link>
        </header>

        {/* Decorative swirl for top section */}
        <div className="relative h-32 overflow-hidden">
          <svg
            className="absolute right-0 top-0"
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80 10C65 5 50 25 65 45C80 65 65 85 50 75"
              stroke="white"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Bottom section with theme-dependent background */}
      <div className="flex-1 rounded-t-3xl -mt-6 p-6" style={{ backgroundColor: isDark ? 'black' : 'white' }}>
        <div className="flex items-center justify-between rounded-full p-2 px-4 mb-10 w-64 mx-auto mt-6" 
             style={{ 
               backgroundColor: isDark ? '#333' : '#f2f2f2',
               border: isDark ? '1px solid #555' : 'none'
             }}>
          <span className="font-medium text-sm" style={{ color: isDark ? 'white' : 'black' }}>Dark/Light mode</span>
          <Switch checked={isDark} onCheckedChange={toggleTheme} />
        </div>

        {/* Decorative swirls for bottom section */}
        <div className="relative h-80">
          {/* Right swirl */}
          <svg
            className="absolute right-0 top-40"
            width="150"
            height="120"
            viewBox="0 0 150 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M110 20C90 15 70 40 90 60C110 80 90 100 70 85"
              stroke={isDark ? "white" : "black"}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>

          {/* Left swirl */}
          <svg
            className="absolute left-0 top-20"
            width="150"
            height="120"
            viewBox="0 0 150 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 20C60 15 80 40 60 60C40 80 60 100 80 85"
              stroke={isDark ? "white" : "black"}
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
