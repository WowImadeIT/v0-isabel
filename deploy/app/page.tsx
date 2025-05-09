"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { playfair } from "@/app/fonts"
import { fetchWordData } from "@/lib/gemini-service"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [currentWord, setCurrentWord] = useState("effulgent")
  const [definition, setDefinition] = useState("LITERARY shining brightly; radiant. (of a person or their expression) emanating joy or goodness.")
  const [synonyms, setSynonyms] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [hasSearched, setHasSearched] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!searchTerm.trim()) {
      setError("Please enter a word to search")
      return
    }

    setIsLoading(true)
    setError("")
    setHasSearched(true)

    try {
      console.log("Fetching data for word:", searchTerm);
      const data = await fetchWordData(searchTerm);
      console.log("API response:", data);
      setCurrentWord(searchTerm)
      setDefinition(data.definition)
      setSynonyms(data.synonyms)
    } catch (err) {
      console.error("Error in search:", err)
      setError("Failed to fetch dictionary data. Please try again.")
      // Clear the current word when there's an error
      if (hasSearched) {
        setCurrentWord("")
        setDefinition("")
        setSynonyms([])
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Display nothing in the definition area if there's an error and user has searched
  const shouldShowDefinition = !hasSearched || (!error && !isLoading);

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--background-color)', color: 'var(--text-color)' }}>
      <header className="p-4 flex justify-between items-center bg-black text-white">
        <h1 className={`text-2xl ${playfair.className}`}>Dictionary</h1>
        <Link href="/settings">
          <Menu className="w-6 h-6" />
        </Link>
      </header>

      <div className="p-4 bg-black">
        <div style={{ 
          backgroundColor: isDark ? '#333' : '#e8e3d7', 
          color: isDark ? 'white' : 'black',
          padding: '12px',
          borderRadius: '4px',
          minHeight: '120px' // Add min-height to prevent layout shifts
        }}>
          {isLoading ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <p>Loading definition...</p>
            </div>
          ) : error ? (
            <div style={{ 
              color: 'red', 
              textAlign: 'center', 
              padding: '10px', 
              backgroundColor: isDark ? '#444' : '#fff0f0', 
              borderRadius: '4px',
              margin: '10px 0'
            }}>
              {error}
            </div>
          ) : shouldShowDefinition && currentWord ? (
            <>
              <p style={{ 
                fontSize: '0.875rem', 
                color: isDark ? '#ccc' : '#666',
                marginBottom: '4px'
              }}>
                {currentWord.toLowerCase()} <span style={{ fontSize: '0.75rem' }}>/pronunciation/</span>
              </p>
              <p style={{ fontSize: '0.875rem', marginBottom: '4px' }}>
                <span style={{ fontWeight: 'bold' }}>def.</span> {definition}
              </p>
            </>
          ) : null}
        </div>
      </div>

      <main className="p-6 rounded-t-3xl -mt-4" style={{ backgroundColor: 'var(--background-color)' }}>
        <div className="rounded-t-3xl p-6" style={{ 
          backgroundColor: isDark ? '#111' : 'white', 
          color: isDark ? 'white' : 'black'
        }}>
          <h2 className="text-3xl font-bold text-center mb-6" style={{ 
            color: isDark ? 'white' : 'black' 
          }}>Hello Isabel</h2>

          <div className="space-y-4">
            <form onSubmit={handleSearch}>
              <p style={{ 
                fontSize: '0.75rem', 
                textTransform: 'uppercase', 
                color: isDark ? '#ccc' : '#666',
                marginBottom: '8px' 
              }}>
                ENTER A WORD
              </p>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 rounded-md"
                placeholder=""
                style={{ 
                  backgroundColor: isDark ? '#333' : '#f2f2f2', 
                  color: isDark ? 'white' : 'black',
                  border: isDark ? '1px solid #555' : 'none',
                  marginBottom: '12px'
                }}
                disabled={isLoading}
              />

              <button 
                className="w-full p-3 rounded-md"
                style={{ 
                  backgroundColor: isDark ? 'white' : 'black', 
                  color: isDark ? 'black' : 'white',
                  fontWeight: '500',
                  marginBottom: '16px',
                  cursor: isLoading ? 'not-allowed' : 'pointer',
                  opacity: isLoading ? 0.7 : 1
                }}
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? 'Searching...' : 'Search'}
              </button>
            </form>

            <div className="space-y-3">
              {synonyms.length > 0 ? (
                synonyms.map((synonym, i) => (
                  <div 
                    key={i} 
                    className="w-full h-12 rounded-md flex items-center justify-center" 
                    style={{ 
                      backgroundColor: isDark ? '#333' : '#f2f2f2',
                      border: isDark ? '1px solid #555' : 'none'
                    }}
                  >
                    <span style={{ color: isDark ? 'white' : 'black' }}>{synonym}</span>
                  </div>
                ))
              ) : (
                // Empty placeholder boxes when no synonyms
                Array(5).fill(null).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-full h-12 rounded-md" 
                    style={{ 
                      backgroundColor: isDark ? '#333' : '#f2f2f2',
                      border: isDark ? '1px solid #555' : 'none'
                    }}
                  ></div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
