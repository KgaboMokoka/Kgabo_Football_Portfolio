import FUT from "./futCard";
import Image from "next/image";
import Arrow from "./arrow";
function HeroInfo() {
  return (
    <>
      <div className="HeroContainer flex border-2 w-auto h-auto  justify-between my-4">
        <div className="HeroInformation flex-col  w-100 h-auto m-16">
          <div className="softwareEngTxt flex-col w-70 h-auto font-bebas">
            <h1>
              {/* there must be a new line between the Software Engineer text */}
              <span className="font-bebas text-text text-7xl">Software </span>
              <span className="font-bebas text-gold text-6xl">Engineer</span>
            </h1>
          </div>
          <div className="smallAbout w-70 h-auto font-archivo">
            <p>
              Building champions league-level applications with precision,
              teamwork, and relentless dedication to clean code.
            </p>
          </div>
          <div className="CTABtns font-archivo my-7">
            <button className="border border-light-green bg-light-green rounded-4xl w-auto mx-1 py-2 px-5 hover:bg-dark-green">
              VIEW TROPHY CABINET
            </button>
            <button className="border border-light-green rounded-4xl w-auto mx-1 py-2 px-11 hover:bg-light-green">
              SIGN ME
            </button>
          </div>
          <div className="socialBtn flex w-10 h-10">
            <a href="https://github.com/KgaboMokoka" className="mx-5">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/kgabo-mokoka-ba20512bb/"
              className="mx-5"
            >
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="mailto:kgabomokoka30@email.com" className="mx-5">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="HeroArrow absolute left-1/2 bottom-8 -translate-x-1/2 ">
          <Arrow />
        </div>
        <div className="HeroFUTCard m-16">
          <FUT />
        </div>
      </div>
    </>
  );
}

export default HeroInfo;
