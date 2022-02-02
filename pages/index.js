import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tech Challenge revisited</title>
        <meta name="Colchis app" content="Kingdom of Colchis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>TEST</main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
