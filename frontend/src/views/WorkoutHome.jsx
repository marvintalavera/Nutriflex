import { useEffect } from "react"
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"

import WorkoutDetails from "../components/WorkoutDetails"
import NewWorkout from "../components/NewWorkout"

const WorkoutHome = () => {
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
    }, [dispatch])
    return (
      <div>
              <h1>Workouts</h1>
        <div className="workouts">
          {workouts && workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout}/>
          ))}
        </div>
        <NewWorkout/>
    </div>
  )
}

export default WorkoutHome