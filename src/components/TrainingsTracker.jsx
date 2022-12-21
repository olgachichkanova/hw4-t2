import TrainingsForm from "./TrainingsForm";
import TrainingsList from "./TrainingsList";

import { useState } from "react";

const TrainingsTracker = () => {
    const [trainings, setTrainings] = useState([
        { id: 1, date: "2022-12-20", distance: 5},
        { id: 2, date: "2022-12-19", distance: 5}
    ])

    const filterTrainings = (trainings) => {
        return trainings.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    return (
        <div className="TrainingsTracker">
            <TrainingsForm trainings={trainings} setTrainings={setTrainings} />
            <TrainingsList trainings={filterTrainings(trainings)} setTrainings={setTrainings} />
        </div>
    )
}

export default TrainingsTracker;