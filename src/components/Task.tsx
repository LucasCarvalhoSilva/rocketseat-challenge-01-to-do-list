

import { Trash } from 'phosphor-react'
import { useState } from 'react';
import styles from './Task.module.css'

interface Task {
    id: number
    description: string;
    isCompleted: boolean;
    onDeleteTask: (taskToDelete:string) => void;
    onChangeStatusTask: (id:number, descriptionOfTaskToChage:string, isCompleted:boolean) => void;
}

export function Task ({ id, description, isCompleted, onDeleteTask, onChangeStatusTask}: Task) {

    console.log(id)

    function handleDeleteTask() {
        onDeleteTask(description)
    }

    function handleChangeCompletedStatus() {
        isCompleted ? isCompleted = false : isCompleted = true 
        console.log(isCompleted)

        onChangeStatusTask(id, description, isCompleted)
    }
    return (
        
        <div className={styles.task}>
            <form className={styles.chekRounded}>
                <input onChange={handleChangeCompletedStatus} title='check' type="checkbox" checked={isCompleted} id={id.toString()} />
                <label htmlFor={id.toString()}></label>
            </form>
            <p className={isCompleted ? styles.completedTask : styles.incompletedTask}>{description}</p>
            <button title='deletar tarefa' onClick={handleDeleteTask} className={styles.trash}><Trash size={14}/></button>
        </div>
    )
}