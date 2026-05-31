// #OBS: Verificar o que essa linha está importando
import type { Metadata } from "next";

// Importando fontes do projeto
import { Poppins, Nunito } from "next/font/google";

// Importando Componentes
import { Header } from "@/components/shared/header/Header";

// Folha de estilo global do projeto
import "./globals.css";

// Incorporando os objetos de fonte e definindo suas variáveis
const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

// Definindo os Metadados do projeto
export const metadata: Metadata = {
  title: "Instituto Profissional Orion",
  description: "Instituição de Ensino Profissional Orion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={`${nunito.variable} ${poppins.variable}`}>
      <body>
        <Header src_image_logo="/Orion_logo_text.png"/>
        {children}
      </body>
    </html>
  );
}
