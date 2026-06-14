import styles from "./Options.module.css";

interface propsOptions {
  id?: string;
  class?: string;
  icon?: string;
  label: string;
  link: string;
}

export default function Options(props: propsOptions) {
  return (
    <a className={styles.options} href={props.link || "#"}>
      {" "}
      {props.icon && (<img className={styles.icon_options} src={props.icon} />)}
      {props.label || "Opção"}
    </a>
  );
}
