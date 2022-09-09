import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

const AppContext = React.createContext()
const MealsAPI = {
  'allMealsUrl': 'https://www.themealdb.com/api/json/v1/1/search.php?s=ar',
  'randomMealUrl': 'https://www.themealdb.com/api/json/v1/1/random.php'
}
const RandomUserAPI = {
  'randomUserUrl': 'https://randomuser.me/api/'
}

const AppProvider = ({ children }) => {
  const [meals, setMeals] = useState([])

  const fetchMeals = async (url) => {
    try {
      const { data } = await axios.get(url)
      setMeals(data.meals)
    } catch (error) {
      console.error(error.response)
    }
  }
  // By default run after every render
  // if we pass [] (dependency array), it will just run when the component loads
  // catch: we cannot turn it async, you have to set up a separate function
  useEffect(() => {
    //fetchData(RandomUserAPI.randomUserUrl)
    fetchMeals(MealsAPI.allMealsUrl)
  }, [])

  return (
    <AppContext.Provider
      value={{ meals }} >
      {children}
    </AppContext.Provider>
  )
}

// Hook use<<>>
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }