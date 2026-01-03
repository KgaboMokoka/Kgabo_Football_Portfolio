import Navbar from "./components/navbar";
import Available from "./components/available";
import HeroInfo from "./components/heroInfo";
import About from "./components/about";

{
  /* <div className="relative h-full w-full bg-bg-main"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div> */
}

export default function Home() {
  return (
    <div className="cursor-default scroll-smooth">
      <section className="Hero ">
        <div className="absolute inset-0 -z-10 h-full w-full bg-bg-main bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Navbar />
        <Available />
        <HeroInfo />
      </section>
      <section className="about">
        <About />
      </section>
      <section className="skills"></section>
      <section className="projects"></section>
      <section className="contact"></section>

      <section className="textSection hidden">
        <h1 className="font-bebas text-gold text-5xl">Heading Font</h1>
        <h2 className="font-archivo-black text-textColour text-3xl">
          Subtitle Font
        </h2>
        <p className="font-archivo">Paragraph Font</p>
        <p className="font-archivo-black text-[1rem]">Statistics Font</p>
      </section>
    </div>
  );
}
