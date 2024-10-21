import pumkin from "../assets/pumkin-bg.png";
import ChangePageButton from "../components/ChangePageButton";
import styles from "./home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles["main-container"]}>
        <img src={pumkin} alt="" />
        <ChangePageButton message={"Let's play"} />
      </div>
    </>
  );
}
