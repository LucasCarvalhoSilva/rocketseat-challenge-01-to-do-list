import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'

export function App() {

  return (
    <div className={styles.bodyContent}>
      <Header />
    </div>
  );
}

