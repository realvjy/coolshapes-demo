import Editor from "@/components/editor";
import { getRandomShape } from "coolshapes-react";

export default function Home() {
  return <Editor initialShape={getRandomShape({ onlyId: true })} />;
}
