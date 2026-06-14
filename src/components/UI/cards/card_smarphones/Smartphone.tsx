import styles from "./Smartphone.module.css";

interface propsSmartphone {
  id?: string,
  class?: string,
  src: string,
}

export function Smartphone(props: propsSmartphone) {
  return (
    <div id={props.id} className={`${styles.smartphone} ${props.class}`}>
      <img className={styles.media_image} src={props.src} alt="Mídia de Instagram"/>
    </div>
  );
}
