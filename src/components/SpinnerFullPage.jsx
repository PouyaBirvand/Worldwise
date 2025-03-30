import Spinner from "./Spinner";
import styles from "./SpinnerFullPage.module.css";

function SpinnerFullPage() {
  return (
    <div className={styles.spinnerFullpage}>
      <div className={styles.spinnerWrapper}>
        <Spinner />
      </div>
    </div>
  );
}

export default SpinnerFullPage;