function TechnicalSkill() {
  return (
    <>
      <div className="container mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        <div className="skillHeading flex flex-col justify-center items-center">
          <p className="text-light-green font-archivo-black text-sm py-2">
            PLAYER ATTRIBUTES
          </p>
          <h1 className="font-bebas text-5xl md:text-6xl lg:text-7xl">
            <span className="text-text">TECHNICAL </span>
            <span className="text-gold">SKILLS</span>
          </h1>
          <p className="text-faded font-archivo text-center py-2 mb-10">
            Like a versatile defender, I bring a complete package of technical
            abilities to every match.
          </p>
        </div>
        <div className="skillsGrid grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Frontend */}
          <div className="frontend bg-dark-green p-6 rounded-md border border-light-green">
            <div className="headings flex gap-4 items-center mb-4">
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
            {[
              { label: "HTML & CSS", value: "98%" },
              { label: "JavaScript", value: "60%" },
              { label: "React", value: "70%" },
              { label: "Tailwind CSS", value: "84%" },
              { label: "Git & GitHub", value: "80%" },
            ].map((skill) => (
              <div
                key={skill.label}
                className="skillPoint flex flex-col gap-1 mb-3"
              >
                <div className="flex justify-between items-end">
                  <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                    {skill.label}
                  </p>
                  <span className="font-archivo-black text-light-green text-sm">
                    {skill.value}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                    style={{ width: skill.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Backend */}
          <div className="backend bg-dark-green p-6 rounded-md border border-light-green">
            <div className="headings flex gap-4 items-center mb-4">
              <div className="rounded-xl bg-dark-green border border-light-green p-2">
                <svg
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#27BA5D"
                    d="M15,17a1,1,0,1,0,1,1A1,1,0,0,0,15,17ZM9,17H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9,0a1,1,0,1,0,1,1A1,1,0,0,0,18,17Zm-3-6a1,1,0,1,0,1,1A1,1,0,0,0,15,11ZM9,11H6a1,1,0,0,0,0,2H9a1,1,0,0,0,0-2Zm9-6a1,1,0,1,0,1,1A1,1,0,0,0,18,5Zm0,6a1,1,0,1,0,1,1A1,1,0,0,0,18,11Zm4-6a3,3,0,0,0-3-3H5A3,3,0,0,0,2,5V7a3,3,0,0,0,.78,2A3,3,0,0,0,2,11v2a3,3,0,0,0,.78,2A3,3,0,0,0,2,17v2a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V17a3,3,0,0,0-.78-2A3,3,0,0,0,22,13V11a3,3,0,0,0-.78-2A3,3,0,0,0,22,7ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V17a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Zm0-6a1,1,0,0,1-1,1H5A1,1,0,0,1,4,7V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM15,5a1,1,0,1,0,1,1A1,1,0,0,0,15,5ZM9,5H6A1,1,0,0,0,6,7H9A1,1,0,0,0,9,5Z"
                  />
                </svg>
              </div>
              <h3 className="font-archivo-black">BACKEND</h3>
            </div>
            {[
              { label: "Python", value: "80%" },
              { label: "REST APIs", value: "55%" },
              { label: "SQLite", value: "88%" },
              { label: "Relational DB Fundamentals", value: "78%" },
            ].map((skill) => (
              <div
                key={skill.label}
                className="skillPoint flex flex-col gap-1 mb-3"
              >
                <div className="flex justify-between items-end">
                  <p className="text-text text-xs tracking-widest uppercase font-archivo-black">
                    {skill.label}
                  </p>
                  <span className="font-archivo-black text-light-green text-sm">
                    {skill.value}
                  </span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
                    style={{ width: skill.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnicalSkill;
