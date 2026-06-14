import styles from "./Confirm_button.module.css";

interface propButton {
  id?: string;
  class?: string;
  label: string;
}

export default function Confirm_button(props: propButton) {
  return <button id={props.id} className={` ${styles.confirm_button} ${props.class}`}>{props.label}</button>
}
