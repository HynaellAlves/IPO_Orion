import styles from "./Play_button.module.css";

interface propPlayButton {
  id?: string;
  class?: string;
}

export default function Play_button(props: propPlayButton) {
  return <button id={props.id} className={` ${styles.play_button} ${props.class}`}>
    <div className={styles.play_icon}/>
  </button>;
}
