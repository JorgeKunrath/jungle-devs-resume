import { createContext, useState } from 'react'

export const GlobalContext = createContext(null)

export function GlobalProvider({ children }) {
  const [finished, setFinished] = useState(false)

  // TODO: get/set finished from LS

  return (
    <GlobalContext.Provider value={{ finished, setFinished }}>{children}</GlobalContext.Provider>
  )
}
