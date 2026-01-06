import Navbar from "./components/navbar";
import Available from "./components/available";
import HeroInfo from "./components/heroInfo";
import About from "./components/about";
import Trouphy from "./components/trouphy";
import Test from "./components/testFile";
import Contact from "./components/contact";

{
  /* <div className="relative h-full w-full bg-bg-main"><div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div></div> */
}
{
  /* <div className="absolute inset-0 -z-10 h-full w-full bg-bg-main bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>; */
}

export default function Home() {
  return (
    <div className="cursor-default scroll-smooth">
      <section className="Hero mb-4">
        <div className="absolute inset-0 -z-10 h-full w-full bg-bg-main bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <Navbar />
        <Available />
        <HeroInfo />
      </section>
      <section className="#about my-4">
        <About />
      </section>
      <section className="skills my-4"></section>
      <section className="projects my-4">
        <Trouphy />
      </section>
      <section className="contact my-4">
        <Contact />
      </section>

      <section className="testSection hidden">
        <Test />
      </section>
    </div>
  );
}
