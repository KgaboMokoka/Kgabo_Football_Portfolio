import FeaturedProject from "./favoriteProject";
import OtherProjects from "./otherProjects";

function Trouphy() {
  return (
    <>
      <div className="aboutHeading flex flex-col justify-center items-center">
        <p className="text-light-green font-archivo-black text-sm py-2">
          MATCH HIGHLIGHTS
        </p>
        <h1 className="font-bebas text-7xl">
          <span className="text-text">TROPHY </span>
          <span className="text-gold">CABINET</span>
        </h1>
        <p className="text-faded font-archivo py-2 mb-10">
          A collection of my greatest hits - projects that showcase creativity,
          technical skills, and champions mentality
        </p>
      </div>
      <div className="container grid grid-rows-2 grid-cols-3 gap-16">
        {/* Row One */}
        <div className="col-span-2 bg-dark-green rounded-2xl ml-16">
          <FeaturedProject />
        </div>
        <div className="bg-dark-green rounded-2xl mr-16">
          <OtherProjects
            title="Project Title"
            description="Project description goes here"
            techStack={["React", "TypeScript", "Tailwind"]}
            live="https://example.com"
            github="https://github.com/username/repo"
          />
        </div>
        {/* Row two */}
        <div className="bg-dark-green rounded-2xl ml-16 mr-16 mt-4">
          <OtherProjects
            title="Somnium Records"
            description="A quick landing page / Promo page for a record label to be able to send out marketing information to listners and any other news the label wants to send out"
            techStack={["HTML", "Tailwind", "Vercel", "Brevo"]}
            live="https://somnium-two.vercel.app/"
            github="https://github.com/KgaboMokoka/Somnium_Records_landing_page"
          />
        </div>
        <div className="bg-dark-green rounded-2xl mr-16 mt-4">
          <OtherProjects
            title="Another Project"
            description="Description of another project"
            techStack={["Next.js", "CSS"]}
            live="https://example.com"
            github="https://github.com/username/repo"
          />
        </div>
        <div className="bg-dark-green rounded-2xl mr-16 mt-4">
          <OtherProjects
            title="Third Project"
            description="Description of third project"
            techStack={["JavaScript", "Node.js"]}
            live="https://example.com"
            github="https://github.com/username/repo"
          />
        </div>
      </div>
    </>
  );
}

export default Trouphy;
