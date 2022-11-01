import React from "react";

import { useState } from "react";

// const tasks =

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: false
        },
        {
            id: 2,
            text: 'Visit Parents',
            day: 'Feb 6th at 4:30pm',
            reminder: false
        },
        {
            id: 3,
            text: 'Finish Api Coding',
            day: 'Feb 5th at 11am',
            reminder: true
        },
    ])

    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks;