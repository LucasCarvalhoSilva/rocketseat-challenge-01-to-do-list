

import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface Task {
    description: string;
    isCompleted: boolean;
    onDeleteTask: (taskToDelete:string) => void;
}

export function Task ({description, isCompleted, onDeleteTask}: Task) {
    
    function handleDeleteTask() {
        onDeleteTask(description)
    }
    
    
    return (
        <div className={styles.task}>
            <form className={styles.chekRounded}>
                <input title='check' type="checkbox" /* checked={isCompleted} */ id="1" name='1' />
                <label htmlFor='1'></label>
            </form>
            <p>{description}</p>
            <button title='deletar tarefa' onClick={handleDeleteTask} className={styles.trash}><Trash size={14}/></button>
        </div>
    )
}