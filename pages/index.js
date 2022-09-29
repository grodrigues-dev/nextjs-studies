import { signIn, signOut, useSession } from "next-auth/react";
import styles from '../styles/Home.module.scss'
import Image from "next/image"
import Link from "next/link";

export default function Home() {
  const { data: session, status} = useSession();
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
          <div className={!session && status === 'loading' ? styles.loading : status.loaded}>
            {
            !session && status!='authenticated' && <p>*You are not authenticated</p>
            }
            {
              session && 
              <Link href='/pokemons'>
               <a>Welcome user :)</a>
              </Link>
            }
          </div>
        </section>
      </div>
    </div>
  )
}
