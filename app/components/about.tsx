function About() {
  return (
    <>
      <div className="container  flex flex-col">
        <div className="aboutHeading flex flex-col justify-center items-center">
          <p className="text-light-green font-archivo-black text-sm py-2">
            SCOUTING REPORT
          </p>
          <h1 className="font-bebas text-7xl mb-10">
            <span className="text-text">ABOUT </span>
            <span className="text-gold">ME</span>
          </h1>
        </div>
        <div className="aboutInformationContainer flex justify-between mx-16">
          <div className="aboutLeft flex-col">
            <div className="abouttext w-158 font-archivo mb-16">
              <p>
                Like a seasoned football player reading the game, I analyses
                complex problems and deliver elegant solutions. With a couple
                months experience in the development league, I've honed my
                skills across the full stack. My playing style? Clean,
                maintainable code that stands the test of time. I believe in
                building applications that not only work but inspire, just like
                a perfectly executed play that brings fans to their feet.
                Whether it's architecting complex systems or crafting
                pixel-perfect interfaces, i bring the same passion and
                dedication that makes champions.
              </p>
            </div>
            {/* Bagdes */}
            <div className="flex items-center justify-center">
              {/* Badge 1 */}
              <div className="aboutBadges mr-5 flex">
                <div className="badges bg-dark-green rounded-2xl w-50 h-25 p-5 flex flex-col items-center justify-center">
                  <div className="font-archivo-black text-5xl text-light-green">
                    1+
                  </div>
                  <div className="font-archivo text-faded">YEARS EXP</div>
                </div>
              </div>
              {/* Badge 2 */}
              <div className="aboutBadges mr-5">
                <div className="badges bg-dark-green rounded-2xl w-50 h-25 p-5 flex flex-col items-center justify-center">
                  <div className="font-archivo-black text-5xl text-light-green">
                    5+
                  </div>
                  <div className="font-archivo text-faded">PROJECTS</div>
                </div>
              </div>
              {/* Badge 3 */}
              <div className="aboutBadges">
                <div className="badges bg-dark-green rounded-2xl w-50 h-25 p-5 flex flex-col items-center justify-center">
                  <div className="font-archivo-black text-5xl text-light-green">
                    100%
                  </div>
                  <div className="font-archivo text-faded">PASSION</div>
                </div>
              </div>
            </div>
          </div>
          <div className="aboutRight grid grid-cols-2 grid-rows-2 gap-8 p-5 ">
            {/* badge one */}
            <div className="bg-dark-green flex flex-col items-center justify-center w-75 h-60 p-5 rounded-xl font-archivo-black">
              <div className="bg-light-green rounded-xl p-3 mb-3">
                <svg
                  className="w-6 h-6 text-dark-green"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zm0 448c106 0 192-86 192-192S362 64 256 64 64 150 64 256s86 192 192 192zm0-304c61.9 0 112 50.1 112 112s-50.1 112-112 112-112-50.1-112-112 50.1-112 112-112zm0 160c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48z" />
                </svg>
              </div>
              <h1 className="font-archivo-black mb-2">GOAL-ORIENTED</h1>
              <p className="text-faded font-archivo text-center text-sm">
                Focused on delivering results that matter, always aiming for the
                back of the net.
              </p>
            </div>
            {/* badge two */}
            <div className="bg-dark-green flex flex-col items-center justify-center w-75 h-60 p-5 rounded-xl font-archivo-black">
              <div className="bg-light-green rounded-2xl p-3 mb-3">
                <svg
                  className="w-6 h-6 text-dark-green"
                  fill="currentColor"
                  viewBox="0 0 640 512"
                >
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
              </div>
              <h1 className="font-archivo-black mb-2">TEAM PLAYER</h1>
              <p className="text-faded font-archivo text-center text-sm">
                Thrive in team based environments, understanding that great
                software is a team sport.
              </p>
            </div>
            {/* badge three */}
            <div className="bg-dark-green flex flex-col items-center justify-center w-75 h-60 p-5 rounded-xl font-archivo-black">
              <div className="bg-light-green rounded-2xl p-3 mb-3">
                <svg
                  className="w-6 h-6 text-dark-green"
                  fill="currentColor"
                  viewBox="0 0 448 512"
                >
                  <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z" />
                </svg>
              </div>
              <h1 className="font-archivo-black mb-2">QUICK LEARNER</h1>
              <p className="text-faded font-archivo text-center text-sm">
                Adapts to new technologies and challenges with the agility of a
                top-tier center back.
              </p>
            </div>
            {/* badge four*/}
            <div className="bg-dark-green flex flex-col items-center justify-center w-75 h-60 p-5 rounded-xl font-archivo-black">
              <div className="bg-light-green rounded-2xl p-3 mb-3">
                <svg
                  className="w-6 h-6 text-dark-green"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
                </svg>
              </div>
              <h1 className="font-archivo-black mb-2">QUALITY FOCUSED</h1>
              <p className="text-faded font-archivo text-center text-sm">
                committed to excellence in every line of code, never settling
                for less than the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
