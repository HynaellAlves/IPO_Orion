// Folha de estilo módulo
import styles from "./Header.module.css";

// Importando componentes de UI
import Option from "@/components/UI/buttons/Header_options/Options";

// Objeto de interface para tipagem do componente
interface propHeader {
  id?: string;
  class?: string;
  src_image?: string;
}

export function Header(props: propHeader) {
  return (
    <header id={props.id} className={`${styles.header} ${props.class}`}>
      <div className={styles.content_logo_main}>
        <img className={styles.image_logo_main} src={props.src_image} alt="Logo da Instituição" />
      </div>
      <nav className={styles.content_options_header}>
        <Option icon="#" link="/" label="Início"/>
        <Option icon="#" link="/courses" label="Cursos"/>
        <Option icon="#" link="/student_area" label="Área do Aluno"/>
        <Option icon="#" link="/units" label="Unidades"/>
        <Option icon="#" link="/contacts" label="Contato"/>
      </nav>
    </header>
  );
}
