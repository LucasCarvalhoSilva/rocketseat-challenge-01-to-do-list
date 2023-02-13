

import { Trash } from 'phosphor-react'
import styles from './Task.module.css'

interface Task {
    description: string;
    isCompleted: boolean;
}

export function Task ({description, isCompleted}: Task) {
    return (
        <div className={styles.task}>
            <form className={styles.chekRounded}>
                <input title='check' type="checkbox" /* checked={isCompleted} */ id="1" name='1' />
                <label htmlFor='1'></label>
            </form>
            <p>{description}</p>
            <div className={styles.trash}><Trash size={14}/></div>
        </div>
    )
}