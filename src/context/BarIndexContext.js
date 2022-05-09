import React, { useState, createContext } from 'react'

const BarIndexContext = createContext()

export const BarIndexProvider = ({ children }) => {

  const [index, setIndex] = useState(0)

  const updateIndex = (value) => {
    setIndex(value)
  }

  const value = {
    index,
    updateIndex
  }

  return <BarIndexContext.Provider value={value}>{children}</BarIndexContext.Provider>
}

export default BarIndexContext