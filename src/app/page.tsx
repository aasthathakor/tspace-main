import Content from "@/components/Content";
import Content2 from "@/components/Content2";
import Content3 from "@/components/Content3";
import Footer from "@/components/Footer";
import Security from "@/components/Security";
import Image from "next/image";

export default function Home() {
  return (
    <main className="space-y-[50px]" >
      <Security />
      <Content />
      <Content2 />
      <Content3 />
      <Footer />

    </main>
  );
}
