const TrainingsList = ({trainings, setTrainings}) => {
    const handleRemove = (training) => {
        setTrainings(prevTraining => prevTraining.filter(i => i.id !== training.id))
    }

    return (
        <table className="TrainingsList">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Distance</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {trainings.map(training => 
                    <tr key={training.id}>
                    <td>{training.date}</td>
                    <td>{training.distance} km</td>
                    <td>
                    <button onClick={() => handleRemove(training)}>Delete</button>
                    </td>
                </tr>
                )}
            </tbody>
        </table>
    )
}

export default TrainingsList;