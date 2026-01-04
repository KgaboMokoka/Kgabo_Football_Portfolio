{
  // Add this to the headersection
  /* <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div> */
}

function FeturedBadge() {
  return (
    <>
      <div className="container p-8 flex-col flex-wrap">
        {/* add the grid pattern here */}
        <div className="header flex justify-center items-center gap-6 h-40">
          <div className="flex border border-light-green rounded-full bg-light-green w-10 h-10 justify-center items-center">
            <svg
              fill="#FFFF"
              width="1.5rem"
              height="1.5rem"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18,2 C18.5850401,2 19.0451307,2.5000262 18.9965458,3.08304548 L18.92,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,9 C22,11.199047 20.225464,12.9836289 18.0302497,12.999888 C17.5482557,14.7806707 16.4913312,16.3691169 15,17.5131587 L14.999,20 L19,20 C19.5522847,20 20,20.4477153 20,21 C20,21.5522847 19.5522847,22 19,22 L5,22 C4.44771525,22 4,21.5522847 4,21 C4,20.4477153 4.44771525,20 5,20 L8.999,20 L9,17.5139642 L8.76695219,17.3292835 C7.40306555,16.2089058 6.427449,14.6929147 5.96902606,12.9998579 C3.8421462,12.9831628 2.11125814,11.3082147 2.00515466,9.20484778 L2,9 L2,5 C2,4.48716416 2.38604019,4.06449284 2.88337887,4.00672773 L3,4 L5.079,4 L5.00345424,3.08304548 C4.9548693,2.5000262 5.41495985,2 6,2 L18,2 Z M16.9132005,4 L7.08679955,4 L7.69712102,11.3238577 C7.86095654,13.2898839 8.91319738,15.0736145 10.5547002,16.1679497 C10.8328989,16.3534155 11,16.6656468 11,17 L11,20 L13,20 L13,17 C13,16.6723659 13.1604941,16.3655128 13.4296026,16.1786311 L13.647449,16.0275679 C15.1752739,14.9229732 16.1461099,13.2050865 16.302879,11.3238577 L16.9132005,4 Z M5.246,6 L4,6 L4,9 C4,9.98905667 4.71793998,10.8104295 5.6611081,10.9714066 L5.246,6 Z M20,9 L20,6 L18.753,6 L18.3388919,10.9714066 C19.28206,10.8104295 20,9.98905667 20,9 Z"
              />
            </svg>
          </div>
          <div className="featured flex border border-gold bg-gold rounded-xl justify-center items-center p-2 h-6 font-archivo text-black gap-2">
            <svg
              fill="#000000"
              width="1rem"
              height="1rem"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M18,2 C18.5850401,2 19.0451307,2.5000262 18.9965458,3.08304548 L18.92,4 L21,4 C21.5522847,4 22,4.44771525 22,5 L22,9 C22,11.199047 20.225464,12.9836289 18.0302497,12.999888 C17.5482557,14.7806707 16.4913312,16.3691169 15,17.5131587 L14.999,20 L19,20 C19.5522847,20 20,20.4477153 20,21 C20,21.5522847 19.5522847,22 19,22 L5,22 C4.44771525,22 4,21.5522847 4,21 C4,20.4477153 4.44771525,20 5,20 L8.999,20 L9,17.5139642 L8.76695219,17.3292835 C7.40306555,16.2089058 6.427449,14.6929147 5.96902606,12.9998579 C3.8421462,12.9831628 2.11125814,11.3082147 2.00515466,9.20484778 L2,9 L2,5 C2,4.48716416 2.38604019,4.06449284 2.88337887,4.00672773 L3,4 L5.079,4 L5.00345424,3.08304548 C4.9548693,2.5000262 5.41495985,2 6,2 L18,2 Z M16.9132005,4 L7.08679955,4 L7.69712102,11.3238577 C7.86095654,13.2898839 8.91319738,15.0736145 10.5547002,16.1679497 C10.8328989,16.3534155 11,16.6656468 11,17 L11,20 L13,20 L13,17 C13,16.6723659 13.1604941,16.3655128 13.4296026,16.1786311 L13.647449,16.0275679 C15.1752739,14.9229732 16.1461099,13.2050865 16.302879,11.3238577 L16.9132005,4 Z M5.246,6 L4,6 L4,9 C4,9.98905667 4.71793998,10.8104295 5.6611081,10.9714066 L5.246,6 Z M20,9 L20,6 L18.753,6 L18.3388919,10.9714066 C19.28206,10.8104295 20,9.98905667 20,9 Z"
              />
            </svg>
            FEATURED
          </div>
        </div>
        <div className="content mb-4">
          <h1 className="font-bebas text-3xl">E-COMMERCE PLATFORM</h1>
          <p className="font-archivo text-faded">
            A full-stack e-commerce solution with real-time inventory, payment
            processing, and analytics dashboard.
          </p>
        </div>
        <div className="teckStack flex gap-2 mb-6">
          <div className="bg-faded p-2 rounded-xl">Next.js</div>
          <div className="bg-faded p-2 rounded-xl">TypeScript</div>
          <div className="bg-faded p-2 rounded-xl">Strip</div>
          <div className="bg-faded p-2 rounded-xl">PostgreSQL</div>
        </div>
        <div className="liveBtn flex mb-4 gap-2">
          {/* GitHub */}
          <a
            href="https://github.com/your-repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex justify-center items-center gap-2 border border-light-green rounded-xl bg-dark-green text-light-green p-2 transition-all hover:bg-light-green/10">
              <svg
                fill="#27BA5D"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24" /* Added for stable scaling */
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z" />
              </svg>
              <span className="font-archivo font-bold">CODE</span>
            </button>
          </a>
          {/* New Tab */}
          <a href="" target="_blank" rel="noopener noreferrer">
            <button className="flex justify-center items-center gap-2 border border-light-green rounded-xl bg-dark-green text-light-green p-2 transition-all hover:bg-light-green/10">
              <svg
                fill="#27BA5D"
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Shopicon">
                  <polygon points="40,38 8,38 8,10 20,10 20,6 4,6 4,42 44,42 44,30 40,30" />
                  <polygon points="26,6 26,10 37.172,10 23.172,24 26,26.828 40,12.828 40,24 44,24 44,6" />
                </g>
              </svg>
              <span className="font-archivo font-bold">LIVE</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default FeturedBadge;
