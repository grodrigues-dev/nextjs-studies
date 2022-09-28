import { signIn, signOut } from "next-auth/react";
import styles from '../styles/Home.module.scss'
import Image from "next/image"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <section className={styles.signout}>
          <span onClick={() => {
            signOut()
          }}>
            <Image  src={`/logout.png`} width='30' height='30'/>
          </span>
        </section>
        <section className={styles.form}>
          <h1>Next Auth</h1>
          <div>
            <label>Username</label>
            <input />
          </div>
          <div>
            <label>Password</label>
            <input />
          </div>
          <button onClick={()=> {
            signIn()
          }}>Sign in</button>
        </section>
      </div>
    </div>
  )
}
