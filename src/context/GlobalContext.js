import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext(null)

export function GlobalProvider({ children }) {
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (finished) {
      window.localStorage.setItem('finished', true)
    } else {
      try {
        const lsFinished = window.localStorage.getItem('finished')
        if (lsFinished) setFinished(true)
      } catch (e) {}
    }
  }, [finished])

  return (
    <GlobalContext.Provider value={{ finished, setFinished }}>{children}</GlobalContext.Provider>
  )
}
