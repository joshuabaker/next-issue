import data from "@/app/data";
import { notFound } from "next/navigation";

export default function Page({ params }) {
  const { path = [] } = params;
  const uri = "/" + path.join("/");
  const page = data.find((page) => page.uri === uri);

  if (!page) {
    notFound();
  }

  return <h1>{page.title}</h1>;
}
