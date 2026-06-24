import { Courses } from "@/types/courses";

export async function getCourses(): Promise<Courses[]> {
  const response = await fetch("/api/courses");

  if (!response.ok) {
    throw new Error("Erro ao buscar cursos");
  }

  const data = await response.json();

  console.log(data);

  return data;
}
