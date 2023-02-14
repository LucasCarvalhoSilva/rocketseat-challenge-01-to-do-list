
import {ClipboardText} from 'phosphor-react'
import { ChangeEvent, useState } from 'react';
import { NewTask } from './NewTask';
import { Task } from './Task';

import styles from './TaskList.module.css'

export function TaskList() {
    const [tasks, setTasks] = useState([{
        description: "Primeira tarefa",
        isCompleted: true
    }])

    const [quantityOfTask,setQuantityOfTask] = useState(tasks.length) 
    let countOfQuantityOfCompletedTasks = 0
    
    console.log(tasks.length)

    tasks.forEach(task => {
        if(task.isCompleted) {
            countOfQuantityOfCompletedTasks++
        }
    })
    const [quantityOfCompletedTasks, setQuantityOfCompletedTask] = useState(countOfQuantityOfCompletedTasks)

    function onCreatedNewTask(newTask: string) {
        setTasks([...tasks, {description: newTask, isCompleted:false}])
    }

    function onDeleteTask(tasktToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task =>{
            if(task.description !== tasktToDelete) {
                return task
            }
        })
        setTasks(tasksWithoutDeletedOne)
    }

    if(tasks.length > 0) {
        return(
            <div className={styles.container}>
                <NewTask onCreateNewTask={onCreatedNewTask}/>
                <header className={styles.header}>
                    <div className={styles.createdTaskInfos}>
                        <p>Tarefas Criadas</p>
                        <span className={styles.quantityOfTask}>{quantityOfTask}</span>
                    </div>
                    <div className={styles.completedTaskInfos}>
                        <p>Concluídas</p>
                        <span className={styles.quantityOfCompletedTasks}>{quantityOfCompletedTasks} de {quantityOfTask}</span>
                    </div>
                </header>
                {tasks.map(task => {
                    console.log(task)
                    return (
                        <div key={task.description} className={styles.task}>
                            <Task
                                description={task.description}
                                isCompleted={task.isCompleted}
                                onDeleteTask={onDeleteTask}
                            />
                        </div>
                    );
                })}
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