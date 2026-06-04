"use client";

// Folha de estilo módulo
import styles from "./Header.module.css";

// Hooks React
import { useState } from "react";

// Importando componentes de UI
import Option from "@/components/UI/buttons/header_options/Options";
import Menu from "@/components/UI/buttons/menu/Menu";

// Objeto de interface para tipagem do componente
interface propHeader {
  id?: string;
  class?: string;
  src_image_logo?: string;
}

export function Header(props: propHeader) {
  const [toogle, setToogle] = useState(false);

  return (
    <header id={props.id} className={`${styles.header} ${props.class}`}>
      <div className={styles.content_logo_main}>
        <img
          className={styles.image_logo_main}
          src={props.src_image_logo}
          alt="Logo da Instituição"
        />
      </div>
      <nav
        className={`${styles.content_options_header} ${toogle && styles.enabled}`}
      >
        <Option icon="/icons/home_icon.svg" link="/" label="Início" />
        <Option icon="/icons/courses_icon.svg" link="/courses" label="Cursos" />
        <Option
          icon="/icons/student_personal_icon.svg"
          link="/student_area"
          label="Área do Aluno"
        />
        <Option icon="/icons/units_icon.svg" link="/units" label="Unidades" />
        <Option
          icon="/icons/contact_icon.svg"
          link="/contacts"
          label="Contato"
        />
      </nav>
      <Menu
        onClick={() => {
          setToogle((prev) => !prev);
          console.log(toogle);
        }}
        class={styles.menu_button}
      />
    </header>
  );
}
