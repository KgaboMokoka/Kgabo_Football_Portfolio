import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <section className="Hero">
        <Navbar />
      </section>
      <section className="about"></section>
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
