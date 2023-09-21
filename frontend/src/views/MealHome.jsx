import { useEffect } from "react"
import { useMealsContext } from "../hooks/useMealsContext"
import { useAuthContext } from "../hooks/useAuthContext"

import MealDetails from "../components/MealDetails"
import NewMeal from "../components/NewMeal"

const MealHome = () => {
    const {meals, dispatch} = useMealsContext()
    const {user} = useAuthContext()
  
    useEffect(() => {
      const fetchMeals = async () => {
        const response = await fetch('/api/meals', {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        })
        const json = await response.json()
  
        if (response.ok) {
          dispatch({type: 'SET_MEALS', payload: json})
        }
      }
      if (user) {
        fetchMeals()
      }

    }, [dispatch, user])
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