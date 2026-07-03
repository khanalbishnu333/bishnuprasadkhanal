"use client"

import { createContext, useContext, useEffect } from "react"

const ThemeContext = createContext()

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

/**
 * The portfolio now uses a single warm-editorial light theme.
 * We keep the provider (so existing imports keep working) but force light mode
 * and strip any legacy `dark` class / saved preference that could tint the UI.
 */
export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    document.documentElement.classList.remove("dark")
    document.documentElement.style.colorScheme = "light"
    try {
      localStorage.removeItem("theme")
    } catch {
      /* ignore */
    }
  }, [])

  return <ThemeContext.Provider value={{ darkMode: false, toggleDarkMode: () => {} }}>{children}</ThemeContext.Provider>
}
