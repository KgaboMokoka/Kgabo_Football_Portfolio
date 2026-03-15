{
  /* <div className="contactLeft">
            <div className="emailBadge flex gap-2">
              <div className="bg-dark-green rounded-xl p-2 h-full">
                <svg
                  fill="#27BA5D"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M19,4 C20.6568542,4 22,5.34314575 22,7 L22,17 C22,18.6568542 20.6568542,20 19,20 L5,20 C3.34314575,20 2,18.6568542 2,17 L2,7 C2,5.34314575 3.34314575,4 5,4 L19,4 Z M20,7.328 L12.6585046,13.7525767 C12.3128975,14.054983 11.8110564,14.0801835 11.4394103,13.8281783 L11.3414954,13.7525767 L4,7.329 L4,17 C4,17.5522847 4.44771525,18 5,18 L19,18 C19.5522847,18 20,17.5522847 20,17 L20,7.328 Z M18.48,6 L5.518,6 L12,11.6712318 L18.48,6 Z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-bebas text-2xl">EMAIL</h3>
                <p className="font-archivo">kgabomokoka30@gmail.com</p>
              </div>
            </div>
          </div> */
}

function Contact() {
  return (
    <>
      <div className="mx-16">
        <div className="contactHeading flex flex-col justify-center items-center">
          <p className="text-light-green font-archivo-black text-sm py-2">
            TRANSFER WINDOW OPEN
          </p>
          <h1 className="font-bebas text-7xl">
            <span className="text-text">LET&apos;S </span>
            <span className="text-gold">CONNECT</span>
          </h1>
          <p className="text-faded font-archivo py-2 mb-10">
            Ready to make a move? Whether you&apos;re a club looking for talent
            or just want to chat football and code, I&apos;m all ears
          </p>
        </div>
        <div className="contactSection">
          <div className="grid grid-cols-2 gap-6">
            {/* Col 1 */}
            <div className="leftGrid grid grid-rows-4 gap-4">
              {/* Email Badge */}
              <div className="emailBadge flex gap-2 h-15">
                <div className="bg-dark-green rounded-xl p-4">
                  <svg
                    fill="#27BA5D"
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M19,4 C20.6568542,4 22,5.34314575 22,7 L22,17 C22,18.6568542 20.6568542,20 19,20 L5,20 C3.34314575,20 2,18.6568542 2,17 L2,7 C2,5.34314575 3.34314575,4 5,4 L19,4 Z M20,7.328 L12.6585046,13.7525767 C12.3128975,14.054983 11.8110564,14.0801835 11.4394103,13.8281783 L11.3414954,13.7525767 L4,7.329 L4,17 C4,17.5522847 4.44771525,18 5,18 L19,18 C19.5522847,18 20,17.5522847 20,17 L20,7.328 Z M18.48,6 L5.518,6 L12,11.6712318 L18.48,6 Z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bebas text-2xl">EMAIL</h3>
                  <p className="font-archivo">kgabomokoka30@gmail.com</p>
                </div>
              </div>
              {/* Location Badge */}
              <div className="emailBadge flex gap-2 h-15">
                <div className="bg-dark-green rounded-xl p-4">
                  <svg
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 11.5 7.3 11.8.2.1.5.2.7.2.2 0 .5-.1.7-.2.3-.3 7.3-6.4 7.3-11.8 0-4.4-3.6-8-8-8zm0 17.7c-2.1-2-6-6.3-6-9.7 0-3.3 2.7-6 6-6s6 2.7 6 6-3.9 7.7-6 9.7zM12 6c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                      fill="#27BA5D"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bebas text-2xl">LOCATION</h3>
                  <p className="font-archivo">Die Hoewes, Centurion, Gauteng</p>
                </div>
              </div>
              {/* Phone Badge */}
              <div className="emailBadge flex gap-2 h-15">
                <div className="bg-dark-green rounded-xl p-4">
                  <svg
                    width="1.5rem"
                    height="1.5rem"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21,15v3.93a2,2,0,0,1-2.29,2A18,18,0,0,1,3.14,5.29,2,2,0,0,1,5.13,3H9a1,1,0,0,1,1,.89,10.74,10.74,0,0,0,1,3.78,1,1,0,0,1-.42,1.26l-.86.49a1,1,0,0,0-.33,1.46,14.08,14.08,0,0,0,3.69,3.69,1,1,0,0,0,1.46-.33l.49-.86A1,1,0,0,1,16.33,13a10.74,10.74,0,0,0,3.78,1A1,1,0,0,1,21,15Z"
                      style={{
                        fill: "none",
                        stroke: "#27BA5D", // Updated to light green
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                      }}
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bebas text-2xl">RESPONSE TIME</h3>
                  <p className="font-archivo">Usually within 24 hours</p>
                </div>
              </div>
              {/* Quote Badge */}
              <div className="quoteBadge border border-light-green bg-dark-green p-4 rounded-xl">
                <p className="font-archivo ">
                  &quot;The difference between a successful person and others is
                  not a lack of strength, not a lack of knowledge, but rather a
                  lack of will.&quot;
                </p>
                <p className="font-archivo-black text-light-green">
                  — VINCENT LOMBARDI
                </p>
              </div>
            </div>
            {/* Col 2 */}
            <form
              className="contactForm w-full m-x-md space-y-4 rounded bg-dark-green p-6"
              // onSubmit={(e) => e.preventDefault()}
              // HERE  IS THE EMAIL SECTION YOU NEED TO FIX !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            >
              {/* Name */}
              <div>
                <label
                  htmlFor=""
                  className="mb-1 block text-sm font-archivo-black text-faded"
                >
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full resize-none rounded-md bg-light-green px-4 py-2 text-white placeholder-dark-green focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Email */}
              <div>
                <label
                  htmlFor=""
                  className="mb-1 block text-sm font-archivo-black text-faded"
                >
                  EMAIL
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full resize-none rounded-md bg-light-green px-4 py-2 text-white placeholder-dark-green focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              {/* Message */}
              <div>
                <label
                  htmlFor=""
                  className="mb-1 block text-sm font-archivo-black text-faded"
                >
                  MESSAGE
                </label>
                <textarea
                  name=""
                  id=""
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full rounded-md bg-light-green px-4 py-2 placeholder-dark-green transition "
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-light-green py-2 font-archivo-black transition hover:bg-green-500"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
