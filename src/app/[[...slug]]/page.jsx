import data from "@/app/data";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const { slug = [] } = params;
  const uri = "/" + slug.join("/");
  const page = data.find((page) => page.uri === uri);

  if (!page) {
    notFound();
  }

  return <h1>{page.title}</h1>;
}
