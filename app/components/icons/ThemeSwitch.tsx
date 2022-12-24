"use client"
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4"
      onClick={() => setTheme(theme === 'dark' || resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? (
          <SunIcon className="h-6 w-6" />
        ) : (
          <MoonIcon className="h-6 w-6" />
        )}
    </button>
  )
}

export default ThemeSwitch