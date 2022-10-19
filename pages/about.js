import React from 'react'
import styles from '../styles/Home.module.css'

export default function about() {
  const name = '노수빈'
  return (
    <div>
      <head>
        <title>About</title>
      </head>
      <main className={styles.main}>
        <h1>About</h1>
        <p>안녕하세요 {name} 님!</p>
      </main>
    </div>
  )
}
