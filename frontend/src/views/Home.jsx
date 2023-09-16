import { useEffect, useState } from "react"
import WorkoutDetails from "../components/WorkoutDetails"
import MealDetails from "../components/MealDetails"

const Home = () => {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const json = await response.json()

      if (response.ok) {
        setWorkouts(json)
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
      <h1>Meals</h1>
      <div className="meals">
        {meals && meals.map((meal) => (
          <MealDetails key={meal._id} meal={meal}/>
        ))}
      </div>
    </div>
  )
}

export default Home
