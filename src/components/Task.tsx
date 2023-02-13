

import { Trash } from 'phosphor-react'
import styles from './Task.module.css'



export function Task () {
    return (
        <div className={styles.task}>
            <form className={styles.chekRounded}>
                <input title='check' type="checkbox"  id="1" name='1' />
                <label htmlFor='1'></label>
            </form>
            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <div className={styles.trash}><Trash size={14}/></div>
        </div>
    )
}


