import styles from "./Title.module.css";

interface propTitle {
  id?: string;
  class?: string;
  childreen: React.ReactNode;
}

export default function Title(props: propTitle) {
  return <h1>{props.childreen}</h1>;
}
