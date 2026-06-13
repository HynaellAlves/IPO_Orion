import Title from "../../title/Title";
import styles from "./Courses_main.module.css";

interface propsCoursesMain {
  id?: string;
  class?: string;
  icon: string;
  title: string;
  text: string;
}

export function Courses_main(props: propsCoursesMain) {
  return (
    <div className={styles.courses_main}>
      <div className={styles.courses_main_icon}>
        <img src={props.icon} alt="Ícone de Estudante" />
      </div>
      <Title id={styles.title_courses_main} class={styles.title_courses_main}>
        {props.title}
      </Title>
      <p className={styles.courses_main_text}>{props.text}</p>
      <span className={styles.courses_main_link}>Saiba mais</span>
    </div>
  );
}
