import styles from "./page.module.css";

import { Section } from "@/components/shared/section/section";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Section><h1>Seção 1</h1></Section>
        <Section><h1>Seção 2</h1></Section>
        <Section><h1>Seção 3</h1></Section>
        <Section><h1>Seção 4</h1></Section>
        <Section><h1>Seção 5</h1></Section>
      </main>
    </div>
  );
}
