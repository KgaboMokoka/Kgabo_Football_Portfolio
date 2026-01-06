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
      <div className="container flex grid grid-rows-2 grid-cols-3 gap-16">
        {/* Row One */}
        <div className="col-span-2 bg-dark-green rounded-2xl ml-16">
          <FeaturedProject />
        </div>
        <div className="bg-dark-green rounded-2xl mr-16">
          <OtherProjects />
        </div>
        {/* Row two */}
        <div className="bg-dark-green rounded-2xl ml-16 mr-16 mt-4">
          <OtherProjects />
        </div>
        <div className="bg-dark-green rounded-2xl mr-16 mt-4">
          <OtherProjects />
        </div>
        <div className="bg-dark-green rounded-2xl mr-16 mt-4">
          <OtherProjects />
        </div>
      </div>
    </>
  );
}
export default Trouphy;
