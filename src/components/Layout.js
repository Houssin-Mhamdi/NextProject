import React from 'react'
import styles from '../styles/layout.module.css'
export default function Layout({children}) {
    const name = 'Houssin mhamdi';
  return (
    <div className={styles.container}>{children}</div>
  )
}
