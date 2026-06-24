import styles from "./input.module.css";

interface propsInput {
  id?: string;
  class?: string;
  type: number;
  label?: string;
  placeholder?: string;
}

export default function Input(props: propsInput) {
  if (props.type == 1) {
    return (
      <div className={styles.contain_inputs}>
        <label htmlFor={props.id} className={styles.input_labels}>
          {props.label}
        </label>
        <input
          type="text"
          id={styles.id}
          className={`${styles.inputs} ${props.class}`}
          placeholder={props.placeholder}
        />
      </div>
    );
  } else if (props.type == 2) {
    return (
      <input
        type="password"
        id={styles.id}
        className={`${styles.inputs} ${props.class}`}
        placeholder={props.placeholder}
      />
    );
  } else if (props.type == 3) {
    return (
      <input
        type="number"
        id={styles.id}
        className={`${styles.inputs} ${props.class}`}
        placeholder={props.placeholder}
      />
    );
  } else if (props.type == 4) {
    return (
      // <input
      //   type="text"
      //   id={styles.id}
      //   className={`${styles.input_type_4} ${props.class}`}
      //   placeholder={props.placeholder}
      // />
      <div className={styles.contain_inputs}>
        <label htmlFor={props.id} className={styles.input_labels}>
          {props.label}
        </label>
        <textarea
          id={styles.id}
          className={`${styles.text_area} ${props.class}`}
          placeholder={props.placeholder}
        />
      </div>
    );
  } else if (props.type == 5) {
    return (
      <input
        type="search"
        id={styles.id}
        className={`${styles.inputs} ${props.class}`}
        placeholder={props.placeholder}
      />
    );
  } else {
    <span>Tipo do Input não informado</span>;
  }
}
