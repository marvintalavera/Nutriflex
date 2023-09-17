import { useState } from "react"

const NewMeal = () => {
    const [ title, setTitle] = useState('')
    const [ calories, setCalories] = useState('')
    const [ portion, setPortion] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const meal = { title, calories, portion }

        const response = await fetch('/api/meals', {
            method: 'POST',
            body: JSON.stringify(meal),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setTitle('')
            setCalories('')
            setPortion('')
            setError(null)
            console.log('new meal added', json)        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Meal</h3>

            <label>Meal Title:</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />

            <label>:Calories:</label>
            <input
            type="number"
            onChange={(e) => setCalories(e.target.value)}
            value={calories}
            />

            <label>Portion (oz):</label>
            <input
            type="number"
            onChange={(e) => setPortion(e.target.value)}
            value={portion}
            />

            <button>Submit Meal</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default NewMeal