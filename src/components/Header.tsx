import styles from './Header.module.css'

import toDoLogo from '../assets/toDoLogo.svg'

export function Header() {
    return (
        <div className={styles.header}>
            <img src={toDoLogo} alt="todo logo" />
            <div className={styles.title}>
            <h1 className={styles.to}>to</h1>
            <h1 className={styles.do}>do</h1>
            </div>
        </div>
    )
}