import pumkin from "../assets/pumkin-bg.png";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles["main-container"]}>
        <img src={pumkin} alt="" />
        <p>Lets play</p>
      </div>
    </>
  );
}
