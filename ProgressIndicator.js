import React from 'react'
import {CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css"
const ProgressIndicator = ({tasks}) => {
    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks=tasks.length;
    const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    return (
        <div className='progress-indicator'>
        <CircularProgressbar value={percentage} text={'${Math.round(percentage)}%'}/>
            </div>
    )
}

export default ProgressIndicator
