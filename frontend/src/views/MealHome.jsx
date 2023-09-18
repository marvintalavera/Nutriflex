import { useEffect } from "react"
import { useMealsContext } from "../hooks/useMealsContext"

import MealDetails from "../components/MealDetails"
import NewMeal from "../components/NewMeal"

const MealHome = () => {
    const {meals, dispatch} = useMealsContext()
  
    useEffect(() => {
      const fetchMeals = async () => {
        const response = await fetch('/api/meals')
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_MEALS', payload: json})
        }
      }
  
      fetchMeals()
    }, [dispatch])
    return (
      <div>
              <h1>Meals</h1>
        <div className="meals">
          {meals && meals.map((meal) => (
            <MealDetails key={meal._id} meal={meal}/>
          ))}
        </div>
        <NewMeal/>
    </div>
  )
}

export default MealHome