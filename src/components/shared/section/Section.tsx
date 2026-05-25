import styles from "./Section.module.css";

interface propsSection {
  children: React.ReactNode;
}

export function Section(props: propsSection) {
  return( 
  <div className={styles.section}>
    {props.children}
    </div>
  )
}
