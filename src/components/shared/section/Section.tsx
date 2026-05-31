import styles from "./Section.module.css";

interface propsSection {
  data_type: number;
  children: React.ReactNode;
}

export function Section(props: propsSection) {
  return (
    <div data-type={props.data_type} className={styles.section}>
      {props.children}
    </div>
  );
}
