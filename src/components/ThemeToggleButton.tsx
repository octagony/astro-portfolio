import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ThemeToggle = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (import.meta.env.SSR) {
      return undefined
    }
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme')
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  })

  const toggleTheme = () => {
    const t = theme === 'light' ? ' dark' : 'light'
    localStorage.setItem('theme', t)
    setTheme(t)
  }

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.remove('dark')
    } else {
      root.classList.add('dark')
    }
  }, [theme])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return isMounted ? (
    <div
      className="absolute bottom-7 right-7 p-2 cursor-pointer transition-opacity"
      onClick={toggleTheme}
      aria-label="Toggle Theme"
    >
      {theme === 'light' ? <FaMoon size={25} /> : <FaSun size={25} />}
    </div>
  ) : (
    <div />
  )
}

export default ThemeToggle
