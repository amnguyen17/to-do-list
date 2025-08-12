import React from 'react'
import { motion } from 'framer-motion'

const Task = ({task, toggleComplete,removeTask}) => {
    return (
        <motion.div
        className={'task ${task.completed ? "completed" : ""}'}
        initial= {{opacity:0, scale : 0.8}}
        animate={{opacity:1, scale:1}}
        exit={{opacity:0, scale:0.8}}
        whileHover={{scale:1.1 , boxShadow: "0px 0px 10px 5px rgba(255,255,255,0.5"}}
        >
    <p onClick={()=> toggleComplete(task.id)}>{task.text}</p>    
    <button onClick={()=> removeTask(task.id)}>X</button>
        </motion.div>
    )
}

export default Task