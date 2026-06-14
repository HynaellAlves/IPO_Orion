import styles from "./Title.module.css";

interface propTitle {
  id?: string;
  class?: string;
  children: React.ReactNode;
}

export default function Title(props: propTitle) {
  return <div id={props.id} className={styles.content_title}><h1 className={`${styles.title} ${props.class}`}>{props.children}</h1></div>
}
