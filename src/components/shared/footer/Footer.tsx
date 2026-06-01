import styles from "./Footer.module.css"

interface propsFooter{
  id?: string,
  class?: string,
}

export function Footer(props: propsFooter){
  return(
    <footer id={props.id} className={`${styles.footer} ${props.class}`}>

    </footer>
  )
}