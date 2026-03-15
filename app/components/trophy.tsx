import FeaturedProject from "./favoriteProject";
import OtherProjects from "./otherProjects";

function Trophy() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {/* Heading */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-light-green font-archivo-black text-sm py-2">
            MATCH HIGHLIGHTS
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl">
            <span className="text-text">TROPHY </span>
            <span className="text-gold">CABINET</span>
          </h1>
          <p className="text-faded font-archivo text-center py-2 mb-10">
            A collection of my greatest hits - projects that showcase
            creativity, technical skills, and champions mentality
          </p>
        </div>

        {/* Row One - Featured + one other */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="col-span-1 lg:col-span-2 bg-dark-green rounded-2xl">
            <FeaturedProject />
          </div>
          <div className="bg-dark-green rounded-2xl">
            <OtherProjects
              title="Project Title"
              description="Project description goes here"
              techStack={["React", "TypeScript", "Tailwind"]}
              live="https://example.com"
              github="https://github.com/username/repo"
            />
          </div>
        </div>

        {/* Row Two - three cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-dark-green rounded-2xl">
            <OtherProjects
              title="Somnium Records"
              description="A quick landing page / Promo page for a record label to be able to send out marketing information to listeners and any other news the label wants to send out"
              techStack={["HTML", "Tailwind", "Vercel", "Brevo"]}
              live="https://somnium-two.vercel.app/"
              github="https://github.com/KgaboMokoka/Somnium_Records_landing_page"
            />
          </div>
          <div className="bg-dark-green rounded-2xl">
            <OtherProjects
              title="Another Project"
              description="Description of another project"
              techStack={["Next.js", "CSS"]}
              live="https://example.com"
              github="https://github.com/username/repo"
            />
          </div>
          <div className="bg-dark-green rounded-2xl">
            <OtherProjects
              title="Third Project"
              description="Description of third project"
              techStack={["JavaScript", "Node.js"]}
              live="https://example.com"
              github="https://github.com/username/repo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Trophy;
