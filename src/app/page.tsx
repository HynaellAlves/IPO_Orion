import styles from "./page.module.css";

import { Movies } from "@/components/UI/movies/Movies";
import { Section } from "@/components/shared/section/Section";
import { Smartphone } from "@/components/UI/cards/card_smarphones/Smartphone";

import Title from "@/components/UI/title/Title";
import Confirm_button from "@/components/UI/buttons/confirm/Confirm_button";
import Play_button from "@/components/UI/buttons/play_button/Play_button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content_letters_animation}>
          <div className={styles.contain_letters}>
            <h3>Instituto</h3>
            <h3 id={styles.letter_orion}>Orion</h3>
          </div>
        </div>
        <Section data_type={1}>
          <Movies src="">
            <div className={styles.contain_movies_elements}>
              <Play_button />
              <Title id={styles.title_movies}>
                A decisão que define o seu futuro
              </Title>
              <Confirm_button
                id={styles.confirm_button_hero}
                label="Comece agora"
              />
            </div>
          </Movies>
        </Section>

        <Section id={styles.media_section} data_type={1}>
          <Title class={styles.title_medias}>Veja o dia a dia de quem estuda no Orion !</Title>
          <div className={styles.content_section_media}>
            <Smartphone src="/medias/instagram_2.png"/>
            <Smartphone src="/medias/instagram_center.png" id={styles.media_center}/>
            <Smartphone src="/medias/instagram_1.png"/>
            <button className={styles.media_button_section}>
              <img className={styles.media_button_icon} src="/icons/arrow_icon.svg"/>
            </button>
          </div>
        </Section>
        <Section data_type={1}>
          <h1>Seção 3</h1>
        </Section>
        <Section id={styles.micro_section} data_type={2}>
          <div className={styles.content_micro_section}>
            <Title class={styles.micro_section_label}>
              <img
                className={styles.micro_section_icons}
                src="/icons/school_icon.svg"
                alt="Ícone de Escola"
              />
              +6.500 alunos formados
            </Title>
            <Title class={styles.micro_section_label}>
              <img
                className={styles.micro_section_icons}
                src="/icons/work_icon.svg"
                alt="Ícone de Escola"
              />
              87% de empregabilidade
            </Title>
            <Title class={styles.micro_section_label}>
              <img
                className={styles.micro_section_icons}
                src="/icons/star_icon.svg"
                alt="Ícone de Escola"
              />
              12 anos de atuação
            </Title>
          </div>
          <div className={styles.content_micro_section}>
            <Title class={styles.micro_section_label}>
              <img
                className={styles.micro_section_icons}
                src="/icons/school_icon.svg"
                alt="Ícone de Escola"
              />
              +6.500 alunos formados
            </Title>
            <Title class={styles.micro_section_label}>
              <img
                className={styles.micro_section_icons}
                src="/icons/work_icon.svg"
                alt="Ícone de Escola"
              />
              87% de empregabilidade
            </Title>
            <Title class={styles.micro_section_label}>
              <img
                className={styles.micro_section_icons}
                src="/icons/star_icon.svg"
                alt="Ícone de Escola"
              />
              12 anos de atuação
            </Title>
          </div>
        </Section>
        <Section data_type={1}>
          <h1>Seção 5</h1>
        </Section>
      </main>
    </div>
  );
}
