import { useRef } from "react";
import styles from "./changepagebutton.module.css";

export default function ChangePageButton({ message, targetId }) {
  const buttonRef = useRef(null);

  function handleClick() {
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        {message}
      </button>
    </>
  );
}
