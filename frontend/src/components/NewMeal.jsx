import { useState } from "react"
import { useMealsContext } from "../hooks/useMealsContext"
import { useAuthContext } from "../hooks/useAuthContext"

const NewMeal = () => {
    const { dispatch } = useMealsContext()
    const { user } = useAuthContext()

    const [ title, setTitle] = useState('')
    const [ calories, setCalories] = useState('')
    const [ portion, setPortion] = useState('')
    const [error, setError] = useState('')
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!user) {
            setError('You must be logged in')
            return
        }

        const meal = { title, calories, portion }

        const response = await fetch('/api/meals', {
            method: 'POST',
            body: JSON.stringify(meal),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setCalories('')
            setPortion('')
            setError(null)
            setEmptyFields([])
            console.log('new meal added', json)
            dispatch({type: 'CREATE_MEAL', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Meal</h3>

            <label>Meal Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>:Calories:</label>
            <input
            type="number"
            onChange={(e) => setCalories(e.target.value)}
            value={calories}
            className={emptyFields.includes('calories') ? 'error' : ''}
            />

            <label>Portion (oz):</label>
            <input
            type="number"
            onChange={(e) => setPortion(e.target.value)}
            value={portion}
            className={emptyFields.includes('portion') ? 'error' : ''}
            />

            <button>Submit Meal</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default NewMeal