import styles from "./Menu.module.css";

interface propsMenu {
  id?: string,
  class?: string,
  onClick: () => void,
}

export default function Menu(props: propsMenu) {
  return (
    <button onClick={props.onClick} className={`${styles.menu_button} ${props.class}`}>
      <img
        className={styles.menu_icon}
        src="/icons/menu_icon.svg"
        alt="Ícone de Menu"
      />
    </button>
  );
}
