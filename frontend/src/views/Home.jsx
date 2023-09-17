import { useEffect, useState} from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

import WorkoutDetails from "../components/WorkoutDetails"
import NewWorkout from "../components/NewWorkout"
import MealDetails from "../components/MealDetails"
import NewMeal from "../components/NewMeal"

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: json})
      }
    }

    fetchWorkouts()
  }, [])
  const [meals, setMeals] = useState(null)

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('/api/meals')
      const json = await response.json()

      if (response.ok) {
        setMeals(json)
      }
    }

    fetchMeals()
  }, [])
  return (
    <div>
            <h1>Workouts</h1>
      <div className="workouts">
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/>
        ))}
      </div>
      <NewWorkout/>
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

export default Home
