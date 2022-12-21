import { useState } from "react";
import shortid from "shortid";

const TrainingsForm = ({trainings, setTrainings}) => {
    const [form, setForm] = useState({
        date: "",
        distance: ""
    })

    const handleAddTraining = (evt) => {
        evt.preventDefault()
        if(trainings.some(training => training.date === form.date)) {
            setTrainings(prevTrainings => 
                [...prevTrainings].map(el => 
                    el.date === form.date ? ({...el, distance: +el.distance + +form.distance}) : el
                ))
            setForm({
                date: "",
                distance: ""
            })
            
        } else {
            const newTraining = {
                id: shortid.generate(),
                date: form.date,
                distance: form.distance
            }
            
            setTrainings((prevTrainings) => [...prevTrainings, newTraining])
            setForm({
                date: "",
                distance: ""
            })
        }
    }

    const handleFormChange = (evt) => {
        const {name, value} = evt.target
        setForm((prevForm) => ({...prevForm, [name]: value}))
    }
    
    return (
        <form className="TrainingsForm" onSubmit={handleAddTraining}>
            <label htmlFor="date">
                <span>Date:</span>
                <input type="date" name="date" value={form.date} onChange={handleFormChange} />
            </label>
            <label htmlFor="distance">
                <span>Distance: </span>
                <input type="text" name="distance" value={form.distance} onChange={handleFormChange} />
            </label>
            
            <button>OK</button>
        </form>
    )
}

export default TrainingsForm;