import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <div className={styles.overlay}></div>
      <PageNav />
      <section className={styles.heroSection}>
        <h1 className={styles.title}>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2 className={styles.subtitle}>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/login" className={styles.cta}>
          Start tracking now
        </Link>
      </section>
    </main>
  );
}