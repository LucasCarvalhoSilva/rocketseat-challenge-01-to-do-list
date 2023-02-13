
import {ClipboardText} from 'phosphor-react'
import { useState } from 'react';
import { Task } from './Task';

import styles from './TaskList.module.css'

interface Task{
    isCompleted: boolean;
    description: string;
}

interface tasksProsp {
    tasks:Task[]
}

export function TaskList({tasks}:tasksProsp) {
    const [quantityOfTask,setQuantityOfTask] = useState(tasks.length) 
    let countOfQuantityOfCompletedTasks = 0
    
    tasks.forEach(task => {
        if(task.isCompleted) {
            countOfQuantityOfCompletedTasks++
        }
    })
    const [quantityOfCompletedTasks, setQuantityOfCompletedTask] = useState(countOfQuantityOfCompletedTasks)

    if(tasks !== null) {
        return(
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.createdTaskInfos}>
                        <p>Tarefas Criadas</p>
                        <span className={styles.quantityOfTask}>{quantityOfTask}</span>
                    </div>
                    <div className={styles.completedTaskInfos}>
                        <p>Concluídas</p>
                        <span className={styles.quantityOfCompletedTasks}>{0} de {quantityOfTask}</span>
                    </div>
                </header>
                <Task />
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <header className={styles.header}>
                    <div className={styles.createdTaskInfos}>
                        <p>Tarefas Criadas</p>
                        <span className={styles.quantityOfTask}>0</span>
                    </div>
                    <div className={styles.completedTaskInfos}>
                        <p>Concluídas</p>
                        <span className={styles.quantityOfTask}>0</span>
                    </div>
                </header>
                <main className={styles.emptyTaskListContainer}>
                    <ClipboardText size={56}/>
                    <p>Você não tem tarefas cadastradas</p>
                    <span>Crie Tarefas e organize seus itens a fazer</span>
                </main>
            </div>
        );
    }
}