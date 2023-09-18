import React from 'react'
import { useMealsContext } from '../hooks/useMealsContext'

const MealDetails = ({ meal }) => {
  const { dispatch } = useMealsContext()

  const handleClick = async () => {
    const response = await fetch('/api/meals/' + meal._id, {
      method: 'DELETE'
  })
  const json = await response.json()

  if (response.ok) {
  dispatch({type: 'DELETE_MEAL', payload: json})
  }
}
  return (
    <div className='meal-details'>
        <h4>{meal.title}</h4>
        <p><strong>Calories: </strong>{meal.calories}</p>
        <p><strong>Portion (oz): </strong>{meal.portion}</p>
        <p>{meal.createdAt}</p>
        <span onClick={handleClick}>delete</span>
    </div>
  )
}

export default MealDetails
