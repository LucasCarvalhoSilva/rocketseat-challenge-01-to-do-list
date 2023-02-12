
import {ClipboardText} from 'phosphor-react'

import styles from './TaskList.module.css'


export function TaskList() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.createdTaskInfos}>
                    <p>Tarefas Criadas</p>
                    <span>0</span>
                </div>
                <div className={styles.completedTaskInfos}>
                    <p>Concluídas</p>
                    <span>0</span>
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