import styles from './Movies.module.css'

interface propsMovies {
  id?: string,
  class?: string,
  src: string,
}

export function Movies(prop: propsMovies){
  return(
    <video className={styles.movies}>

    </video>
  )
}