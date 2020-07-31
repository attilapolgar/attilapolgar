import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Attila Polgar [dev]</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h2>hey</h2>
    </div>
  );
}
