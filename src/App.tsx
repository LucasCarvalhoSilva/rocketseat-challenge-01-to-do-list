import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { TaskList } from './components/TaskList'

export function App() {

const task = [
  {
    isCompleted: true,
    description: "Lavar as panelas da janta"
  },
  {
    isCompleted: true,
    description: "estudar React"
  },
  {
    isCompleted: false,
    description: "Fazer café"
  }
]


  return (
    <div className={styles.bodyContent}>
      <Header />
      <NewTask />
      <TaskList tasks={task}/>
    </div>
  );
}

