import React, { useContext, useEffect } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  // By default run after every render
  // if we pass [] (dependency array), it will just run when the component loads
  // catch: we cannot turn it async, you have to set up a separate function
  useEffect(() => {
    console.log('fetch data')
  }, [])

  return (
    <AppContext.Provider
      value={{ name: 'John', role: 'student' }} >
      {children}
    </AppContext.Provider>
  )
}

// Hook use<<>>
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }