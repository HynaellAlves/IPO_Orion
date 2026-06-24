"use client";

import styles from "./page.module.css";

import { getCourses } from "@/services/courses";

import { useEffect, useState } from "react";

import { Movies } from "@/components/UI/movies/Movies";
import { Section } from "@/components/shared/section/Section";
import { Smartphone } from "@/components/UI/cards/card_smarphones/Smartphone";
import { Courses_main } from "@/components/UI/cards/courses_main/Courses_main";

import Input from "@/components/UI/inputs/input_form/input";
import Title from "@/components/UI/title/Title";
import Confirm_button from "@/components/UI/buttons/confirm/Confirm_button";
import Play_button from "@/components/UI/buttons/play_button/Play_button";

export default function Home() {
  useEffect(() => {
    const load = async () => {
      const courses = await getCourses();
      return courses;
    };
    console.log(load());
  }, []);

  const [onCourses, setOnCourses] = useState<boolean>(false);

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
          <Title id={styles.title_medias} class={styles.title_medias}>
            Veja o dia a dia de quem estuda no Orion !
          </Title>
          <div className={styles.content_section_media}>
            <div className={styles.contain_smartphones}>
              <Smartphone src="/medias/instagram_2.png" />
              <Smartphone
                src="/medias/instagram_center.png"
                id={styles.media_center}
              />
              <Smartphone src="/medias/instagram_1.png" />
            </div>

            {onCourses && (
              <>
                <Title
                  id={styles.title_media_courses}
                  class={styles.title_media_courses}
                >
                  Conheça alguns de nossos cursos
                </Title>

                <div className={styles.contain_card_courses}>
                  <Courses_main
                    icon={"/icons/student_personal_icon.svg"}
                    title={"Informática Profissional"}
                    text={
                      "Aprenda informática na prática e prepare-se para os desafios profissionais"
                    }
                  />
                  <Courses_main
                    icon={"/icons/robot_icon.svg"}
                    title={"Robótica"}
                    text={
                      "Desenvolva a criatividade e o raciocínio lógico criando soluções com robótica na prática."
                    }
                  />
                  <Courses_main
                    icon={"/icons/language_icon.svg"}
                    title={"Inglês Profissional"}
                    text={
                      "Desenvolva a comunicação em inglês voltada para o ambiente de trabalho e oportunidades no mercado global."
                    }
                  />
                </div>
              </>
            )}
            <button
              onClick={() => {
                setOnCourses((prev) => !prev);
              }}
              className={styles.media_button_section}
            >
              <img
                data-show={onCourses}
                className={styles.media_button_icon}
                src="/icons/arrow_icon.svg"
              />
            </button>
          </div>
        </Section>
        <Section id={styles.pillars_section} data_type={1}>
          <Title
            id={styles.title_pillars_section}
            class={styles.title_pillars_section}
          >
            Pilares do Ensino Profissional
          </Title>
          <div className={styles.content_pillars_section}>
            <div className={styles.contain_pillars}>
              <div className={styles.pillars} id={styles.pillar_1}>
                <img
                  className={styles.pillars_icons}
                  src="/icons/academic_icon.svg"
                  alt="Ícone de Estudante"
                />
              </div>
              <div className={styles.pillars} id={styles.pillar_2}>
                <img
                  className={styles.pillars_icons}
                  src="/icons/courses_alternative_icon.svg"
                  alt="Ícone de Estudante"
                />
              </div>
              <div className={styles.pillars} id={styles.pillar_3}>
                <img
                  className={styles.pillars_icons}
                  src="/icons/star_light_icon.svg"
                  alt="Ícone de Estudante"
                />
              </div>
              <div className={styles.pillars} id={styles.pillar_4}>
                <img
                  className={styles.pillars_icons}
                  src="/icons/student_icon.svg"
                  alt="Ícone de Estudante"
                />
              </div>
            </div>
            <div className={styles.contain_pillars_text}>
              <div className={styles.pillars_text}>
                <Title id={styles.title}>Formação a mercado</Title>
                <p className={styles.text}>
                  Foco na prática, professores com experiência de mercado e
                  cursos alinhados às exigências reais das empresas.
                </p>
              </div>
            </div>
          </div>
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
        <Section id={styles.section_form} data_type={1}>
          <Title
            id={styles.section_form_title}
            class={styles.section_form_title}
          >
            Deixe nosso time ajudar você a dar o próximo passo !
          </Title>
          <div className={styles.content_section_form}>
            <form className={styles.form}>
              <Input
                id="name"
                type={1}
                label="Nome e Sobrenome"
                placeholder="Digite seu nome para contato"
              />
              <Input
                id="phone"
                type={1}
                label="Telefone Whatsapp"
                placeholder="Digite seu telefone celular"
              />
              <Input
                id="description"
                type={4}
                data-type={4}
                label="Observações"
                placeholder="Detalhes, considerações, horários, etc..."
              />
            </form>
            <div className={styles.contain_form_image}>
              <img
                src="/medias/Orion_formulário_imagem_alternativo.png"
                alt="Imagem da Orion no Formulário"
              />
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
