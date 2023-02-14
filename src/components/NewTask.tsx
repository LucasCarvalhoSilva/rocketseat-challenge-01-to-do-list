
import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import styles from './NewTask.module.css'

interface NewTaskProps {
    onCreateNewTask: (newTask:string) => void;
}

export function NewTask({onCreateNewTask}:NewTaskProps) {
    const [newTask, setNewTask] = useState('')
    
    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault()
        setNewTask('')
        onCreateNewTask(newTask)
    }

    function handleNewTaskChanged(event:ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("")
        setNewTask(event.target.value)
    }

    function handleNewTaskInvalid (event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    return (
        <form onSubmit={handleCreateNewTask} className={styles.container}>
            <input 
                required 
                className={styles.newTaskInput} 
                onChange={handleNewTaskChanged} 
                onInvalid={handleNewTaskInvalid} 
                type="text" 
                placeholder='Adicione uma nova tarefa'
            />
            <button type='submit' onSubmit={handleCreateNewTask} className={styles.submitButton} > Criar <PlusCircle size={16}/></button>
        </form>
    )
}