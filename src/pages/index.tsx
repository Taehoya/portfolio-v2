import Head from "next/head";
import Image from "next/image";
import Contact from "src/components/Contact";
import Experience from "src/components/Experience";
import Project from "src/components/Project";
import Intro from "src/components/Intro";
import Sidebar from "src/components/Sidebar/Sidebar";

// interface HomeProps {
//   expereince: IExp;
// }

export default function Home() {
  return (
    <>
      <Sidebar />
      <Intro />
    </>
  );
}
