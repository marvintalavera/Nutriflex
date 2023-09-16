import React from 'react'

const WorkoutDetails = ({ workout }) => {
  return (
    <div className='workout-details'>
        <h4>{workout.title}</h4>
        <p><strong>Weight (lbs): </strong>{workout.weight}</p>
        <p><strong>Reps (lbs): </strong>{workout.reps}</p>
        <p>{workout.createdAt}</p>
    </div>
  )
}

export default WorkoutDetails
