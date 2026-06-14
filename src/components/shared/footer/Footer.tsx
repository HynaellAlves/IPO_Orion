import styles from "./Footer.module.css";

import Options from "@/components/UI/buttons/footer_options/Options";

interface propsFooter {
  id?: string;
  class?: string;
  src_image_logo: string;
}

export function Footer(props: propsFooter) {
  return (
    <footer id={props.id} className={`${styles.footer} ${props.class}`}>
      <div className={styles.content_footer_top}>
        <div className={styles.content_logo_main}>
          <img
            className={styles.image_logo}
            src={props.src_image_logo}
            alt="Logo da Instituição"
          />
        </div>
      </div>
      <div className={styles.content_footer_middle}>
        <div className={styles.content_options}>
          <Options icon="/icons/instagram_icon.svg" label="Instagram" link={"#"} />
          <Options icon="/icons/facebook_icon.svg" label="Facebook" link={"#"} />
          <Options icon="/icons/whatsapp_icon.svg" label="Whatsapp" link={"#"} />
          <Options icon="/icons/notes_icon.svg" label="Política de Privacidade" link={"#"} />
          <Options icon="/icons/archive_icon.svg" label="Termos de Uso" link={"#"} />
          <Options icon="/icons/notice_icon.svg" label="Aviso Legal" link={"#"} />
        </div>
        <div className={styles.content_data}>
          <Options label="Av. Horizonte, 1450 – São Celestino/SP" link={""}></Options>
          <Options label="(11) 3875-2294" link={""}></Options>
          <Options label="contato@ipo.edu.br" link={""}></Options>
        </div>
      </div>
      <div className={styles.content_footer_bottom}>
        <h5>
          © 2025 Instituto Profissional Orion. Todos os direitos reservados.
        </h5>
      </div>
    </footer>
  );
}
