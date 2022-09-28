import Link from "next/link";

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <section className={styles.container}>
      <div className={styles.login}>
        <h1>Next Auth</h1>
        <div>
          <label>Username</label>
          <input />
        </div>
        <div>
          <label>Password</label>
          <input />
        </div>
        <button>Sign in</button>
      </div>
    </section>
  )
}
