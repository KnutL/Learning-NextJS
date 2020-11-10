import styles from "../styles/Home.module.css";
import Card from "react-bootstrap/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome!</h1>

        <p className={styles.description}>
          Knuts <a href="https://nextjs.org">Next.js</a> project.
        </p>

        <div className={styles.grid}>
          <a href="/accountspage" className={styles.card}>
            <h3>Accounts &rarr;</h3>
            <p>
              Using static props to fetch a sample api about fake bank accounts
            </p>
          </a>

          <a href="/states" className={styles.card}>
            <h3>States of America &rarr;</h3>
            <p>
              Using static paths and props to fetch a sample api about the
              states of America.
            </p>
          </a>
        </div>
      </main>
    </div>
  );
}
