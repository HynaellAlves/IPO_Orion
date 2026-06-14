import styles from "./Section.module.css";

interface propsSection {
  id?: string,
  class?: string,
  data_type: number;
  children: React.ReactNode;
}

export function Section(props: propsSection) {
  return (
    <div id={props.id} data-type={props.data_type} className={`${styles.section} ${props.class}`}>
      {props.children}
    </div>
  );
}
