import FeturedBadge from "./twoSpanTrophy";

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
      <div className="container flex grid grid-rows-2 grid-cols-3">
        {/* Row One */}
        <div className="col-span-2 bg-dark-green rounded-2xl ml-16">
          <FeturedBadge />
        </div>
        <div className="bg-dark-green rounded-2xl ml-16">Block 2</div>
        {/* Row two */}
        <div className="bg-green-500">Block 3</div>
        <div className="bg-orange-500">Block 4</div>
        <div className="bg-purple-500">Block 5</div>
      </div>
    </>
  );
}
export default Trouphy;
