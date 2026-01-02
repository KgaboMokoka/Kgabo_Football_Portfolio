function FUT() {
  return (
    <div className="container border border-light-green/30 bg-bg-main rounded-2xl w-84 h-auto overflow-hidden shadow-2xl shadow-light-green">
      <div className="positionInfo relative flex flex-col font-bebas bg-light-green h-40 p-3 overflow-hidden">
        <div className="z-10 self-start border-2 border-light-green bg-dark-green rounded-xl px-4 py-1 text-2xl text-light-green">
          DEFENDER
        </div>

        <div className="absolute -right-4 -bottom-8 text-dark-green text-[11rem] leading-none opacity-80 font-archivo-black pointer-events-none">
          4
        </div>
      </div>
      <div className="cardInfo font-bebas px-4 pt-4 text-4xl text-text tracking-wide uppercase">
        Kgabo Mokoka
      </div>

      <div className="skillPointsSection font-archivo p-4 space-y-4">
        {/* actual section for the skills */}
        {/* Skill One */}
        <div className="skillPoint flex flex-col gap-1">
          <div className="flex justify-between items-end">
            <p className="text-text/60 text-xs tracking-widest uppercase">
              HTML & CSS
            </p>
            <span className="font-archivo-black text-light-green text-sm">
              90%
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>

        {/* Skill Two */}
        <div className="skillPoint flex flex-col gap-1">
          <div className="flex justify-between items-end">
            <p className="text-text/60 text-xs tracking-widest uppercase">
              React
            </p>
            <span className="font-archivo-black text-light-green text-sm">
              75%
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-light-green shadow-[0_0_10px_#27BA5D]"
              style={{ width: "75%" }}
            ></div>
          </div>
        </div>
        {/* Skill Three */}
        <div className="skillPoint flex flex-col gap-1">
          <div className="flex justify-between items-end">
            <p className="text-text/60 text-xs tracking-widest uppercase">
              Python
            </p>
            <span className="font-archivo-black text-light-green text-sm">
              80%
            </span>
          </div>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-light-green shadow-[0_0_10px_#27BA5D] transition-all duration-1000"
              style={{ width: "90%" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FUT;
