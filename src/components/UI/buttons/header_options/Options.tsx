import styles from './Options.module.css'

interface propOptions {
  id?: string,
  class?: string,
  icon?: string,
  label: string,
  link: string
}

export default function Options(props: propOptions){
  return(
    <a className={styles.options} href={props.link || "#"}> <img className={styles.icon_options} src={props.icon || "#"}/>{props.label || "Opção"}</a>
  )
}