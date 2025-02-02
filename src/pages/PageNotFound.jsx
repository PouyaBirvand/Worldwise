import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.pageNotFound}>
      <div className={styles.content}>
        <h1>Page not found 😢</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
      </div>
    </div>
  );
}