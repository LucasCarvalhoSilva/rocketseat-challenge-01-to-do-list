
import { PlusCircle } from 'phosphor-react'

import styles from './NewTask.module.css'

export function NewTask() {
    return (
        <form className={styles.container}>
            <input className={styles.newTaskInput} type="text" placeholder='Adicione uma nova tarefa'/>
            <button className={styles.submitButton}> Criar <PlusCircle size={16}/></button>
        </form>
    )
}