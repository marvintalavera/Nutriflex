import React from 'react'

const MealDetails = ({ meal }) => {
  return (
    <div className='meal-details'>
        <h4>{meal.title}</h4>
        <p><strong>Calories: </strong>{meal.calories}</p>
        <p><strong>Portion (oz): </strong>{meal.portion}</p>
        <p>{meal.createdAt}</p>
    </div>
  )
}

export default MealDetails
