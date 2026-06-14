import styles from "./Movies.module.css";

interface propsMovies {
  id?: string;
  class?: string;
  src: string;
  children?: React.ReactNode;
}

export function Movies(props: propsMovies) {
  return (
    <div className={styles.content_movies}>
      {props.children}
      <video className={`${styles.movies} ${props.class}`}></video>
    </div>
  );
}
