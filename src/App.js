import {useState} from "react";
import Header from './components/Header'
import Tasks from "./components/Tasks";

function App() {
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

    const deleteTask = (id)  => {
        console.log('delete', id)
    }

    return ( 
        <div className = "container" >
            <Header title={'Task Tracker'} />
            <Tasks tasks={tasks} onDelete={deleteTask}/>
        </div>
    );
}


export default App;