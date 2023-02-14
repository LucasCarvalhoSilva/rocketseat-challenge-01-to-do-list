
import {ClipboardText} from 'phosphor-react'
import { ChangeEvent, useState } from 'react';
import { NewTask } from './NewTask';
import { Task } from './Task';

import styles from './TaskList.module.css'

export function TaskList() {
    const [tasks, setTasks] = useState([{
        id: 1,
        description: "Primeira tarefa",
        isCompleted: false
    }])

    const [quantityOfTask,setQuantityOfTask] = useState(tasks.length) 

    const [quantityOfCompletedTasks, setQuantityOfCompletedTask] = useState(0)

    function onCreatedNewTask(newTask: string) {
        setTasks([...tasks, {id:tasks.length + 1, description: newTask, isCompleted:false}])
        setQuantityOfTask(tasks.length + 1)
    }

    function onDeleteTask(tasktToDelete: string) {
        const tasksWithoutDeletedOne = tasks.filter(task =>{
            if(task.description !== tasktToDelete) {
                return task
            }
        })
        setTasks(tasksWithoutDeletedOne)
    }

    function onChangeCompletedStatus(id:number, descriptionOfTaskToChage:string, isCompleted:boolean) {

        const taskUpdated = tasks.map(task => {
            if (task.id === id) {
                return ({id:task.id, description: task.description, isCompleted: isCompleted})
            } else {
                return task
            }
        })
        setTasks(taskUpdated)
        if(isCompleted) {
            changeQuantityOfCompletedTasks(1)
        } else {
            changeQuantityOfCompletedTasks(-1)
        }
    }

    function changeQuantityOfCompletedTasks(infoIsToAcressOrDecres: number) {
        const sum = tasks.reduce((qtdOfCompletedTask:number,currentTask) => {
            if(currentTask.isCompleted) {
                return qtdOfCompletedTask + 1
            } else {
                return qtdOfCompletedTask
            }
        },0 )

        setQuantityOfCompletedTask(sum + infoIsToAcressOrDecres)
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
                                id={task.id}
                                description={task.description}
                                isCompleted={task.isCompleted}
                                onDeleteTask={onDeleteTask}
                                onChangeStatusTask={onChangeCompletedStatus}
                            />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div className={styles.container}>
                <NewTask onCreateNewTask={onCreatedNewTask}/>   
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