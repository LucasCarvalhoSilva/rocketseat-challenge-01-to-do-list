import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
//import { TaskList } from './components/TaskList'

export function App() {

  return (
    <div className={styles.bodyContent}>
      <Header />
      <NewTask />
    </div>
  );
}

