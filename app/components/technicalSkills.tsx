{
  /* <div className="skillPoint flex flex-col gap-1">
          <div className="flex justify-between items-end">
            <p className="text-text/60 text-xs tracking-widest uppercase">
              HTML & CSS
            </p>
            <span className="font-archivo-black text-light-green text-sm">
              95%
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
              style={{ width: "95%" }}
            ></div>
          </div>
        </div> */
}

function TechnicalSkill() {
  return (
    <>
      <div>
        <div className="skillHeading flex flex-col justify-center items-center">
          <p className="text-light-green font-archivo-black text-sm py-2">
            PLAYER ATTRIBUTES
          </p>
          <h1 className="font-bebas text-7xl">
            <span className="text-text">TECHNICAL </span>
            <span className="text-gold">SKILLS</span>
          </h1>
          <p className="text-faded font-archivo py-2 mb-10">
            Like a versitile defender, I bring a complete package of technical
            abilities to every match.
          </p>
        </div>
        <div className="skillsGrid grid grid-cols-2 gap-10 m-16">
          {/* Frontend */}
          <div className="frontend bg-dark-green p-6 rounded-md border border-light-green">
            <div className="headings flex gap-6 items-center">
              <div className="rounded-xl bg-dark-green border border-light-green p-2">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-7v2h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-2H4a2 2 0 0 1-2-2V5zm18 11V5H4v11h16z"
                    fill="#27BA5D"
                  />
                </svg>
              </div>
              <h3 className="font-archivo-black">FRONTEND</h3>
            </div>
            {/* Progress Bar 1*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  HTML&CSS
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  98%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "98%" }}
                ></div>
              </div>
            </div>
            {/* Progress Bar 2*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  JavaScript
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  60%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "60%" }}
                ></div>
              </div>
            </div>
            {/* Progress Bar 3*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  REACT
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  70%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            {/* Progress Bar 4*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  TAILWIND CSS
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  84%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "84%" }}
                ></div>
              </div>
            </div>
            {/* Progress Bar 5*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  GIT & GITHUB
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  80%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
          </div>
          {/* Backend */}
          <div className="frontend bg-dark-green p-6 rounded-md border border-light-green">
            <div className="headings flex gap-6 items-center">
              <div className="rounded-xl bg-dark-green border border-light-green p-2">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                >
                  <path
                    fill="#27BA5D"
                    d="M15,17a1,1,0,1,0,1,1A1,1,0,0,0,15,17ZM9,17H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9,0a1,1,0,1,0,1,1A1,1,0,0,0,18,17Zm-3-6a1,1,0,1,0,1,1A1,1,0,0,0,15,11ZM9,11H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9-6a1,1,0,1,0,1,1A1,1,0,0,0,18,5Zm0,6a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm4-6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V7a3,3,0,0,0,.78,2A3,3,0,0,0,2,11v2a3,3,0,0,0,.78,2A3,3,0,0,0,2,17v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V17a3,3,0,0,0-.78-2A3,3,0,0,0,22,13V11a3,3,0,0,0-.78-2A3,3,0,0,0,22,7ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5A1,1,0,0,1,4,7V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM15,5a1,1,0,1,0,1,1A1,1,0,0,0,15,5ZM9,5H6A1,1,0,0,0,6,7H9A1,1,0,0,0,9,5Z"
                  />
                </svg>
              </div>
              <h3 className="font-archivo-black">BACKEND</h3>
            </div>
            {/* Progress Bar 1*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  PYTHON
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  80%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            {/* Progress Bar 2*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  REST API&apos;s
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  55%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
            {/* Progress Bar 3*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  SQLITE
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  88%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "88%" }}
                ></div>
              </div>
            </div>
            {/* Progress Bar 4*/}
            <div className="skillPoint flex flex-col gap-1">
              <div className="flex justify-between items-end">
                <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                  Relational Database Fundamentals
                </p>
                <span className="font-archivo-black text-light-green text-sm">
                  78%
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                  style={{ width: "78%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnicalSkill;
