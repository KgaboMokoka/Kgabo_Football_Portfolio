import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="Hero"></section>
      <section className="About"></section>
      <section className="Skills"></section>
      <section className="Projects"></section>
      <section className="Contact"></section>

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
