import styles from "./page.module.css";

import { Movies } from "@/components/UI/movies/Movies";
import { Section } from "@/components/shared/section/Section";

import Title from "@/components/UI/title/Title";
import Confirm_button from "@/components/UI/buttons/confirm/Confirm_button";
import Play_button from "@/components/UI/buttons/play_button/Play_button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Section data_type={1}>
          <Movies src="">
            <div className={styles.contain_movies_elements}>
              <Play_button/>
              <Title id={styles.title_movies}>
                A decisão que define o seu futuro
              </Title>
              <Confirm_button label="Comece agora" />
            </div>
          </Movies>
        </Section>
        <Section data_type={2}>
          <h1>Seção 2</h1>
        </Section>
        <Section data_type={1}>
          <h1>Seção 3</h1>
        </Section>
        <Section data_type={2}>
          <h1>Seção 4</h1>
        </Section>
        <Section data_type={1}>
          <h1>Seção 5</h1>
        </Section>
      </main>
    </div>
  );
}
