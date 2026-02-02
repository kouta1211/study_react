import { Metadata } from "next";
import Headline from "@/components/Headline";

export const metadata: Metadata = {
  title: "About",
  description: "About Pageです",
}

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Headline title="About" />
    </div>
  );
}
