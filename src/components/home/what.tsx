const What = () => {
  return (
    <section className="min-h-screen relative overflow-x-hidden">
      <h2 className="flex items-center text-xl isolate container-custom-xs">
        <span className="bg-white pr-2">WHAT WE CAN DO FOR YOU</span>
        <span className="bg-gray-300 h-[2px] absolute inline-block w-screen -z-10" />
      </h2>
      <div className="services-wrapper container-custom-xs mt-28">
        <div className="services flex gap-16">
          <article className="flex flex-col gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 96 96"
              width={48}
              height={48}
              className="mb-4"
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 0H96V96H0z" />
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path
                  strokeLinecap="round"
                  stroke="#000"
                  strokeWidth={4}
                  d="M30.644-25.709A39.837 39.837 0 0140 0c0 22.091-17.909 40-40 40S-40 22.091-40 0s17.909-40 40-40c0 0 0 0 0 0 12.302 0 23.307 5.554 30.644 14.291"
                  fill="none"
                  transform="translate(4 4) translate(44 44)"
                  display="block"
                />
                <path
                  strokeLinecap="round"
                  stroke="#000"
                  strokeWidth={4}
                  d="M22.984-19.282A29.879 29.879 0 0130 0c0 16.569-13.431 30-30 30-16.569 0-30-13.431-30-30 0-16.569 13.431-30 30-30 0 0 0 0 0 0 9.227 0 17.481 4.165 22.984 10.718"
                  fill="none"
                  transform="translate(7 21) translate(34 34)"
                  display="block"
                />
                <path
                  strokeLinecap="round"
                  stroke="#000"
                  strokeWidth={4}
                  d="M13.79-11.569A17.923 17.923 0 0118 0c0 9.941-8.059 18-18 18S-18 9.941-18 0s8.059-18 18-18c0 0 0 0 0 0a17.96 17.96 0 0113.79 6.431"
                  fill="none"
                  transform="translate(11.2 42.2) translate(22 22)"
                  display="block"
                />
              </g>
            </svg>

            <h3 className="text-2xl">Web App Development</h3>
            <p className="font-extralight">
              Our custom web development services include both front-end and
              back-end development. Whether it is enhancing an existing app or
              architecting an enterprise app, our developers are up for the
              challenge.
            </p>
          </article>
          <article className="flex flex-col gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 144 144"
              width={48}
              height={48}
              className="mb-4"
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 0H144V144H0z" />
                </clipPath>
              </defs>
              <g clipPath="url(#a)">
                <path
                  stroke="#000"
                  strokeWidth={6}
                  d="M41.039-52.713C21.94-66.015-.5-67.5-.5-67.5s0 0 0 0V1S43 .5 67.5.5c0-27.022-12.314-43.359-26.461-53.213"
                  fill="none"
                  transform="translate(72 72)"
                  display="block"
                />
                <path
                  strokeLinecap="round"
                  stroke="#000"
                  strokeWidth={6}
                  d="M62.074 24.574C52.278 49.269 28.164 66.75 0 66.75c-36.84 0-66.75-29.91-66.75-66.75 0-28.164 17.481-52.278 42.176-62.074"
                  fill="none"
                  transform="matrix(1.02256 0 0 1.02222 72.125 71.5) translate(-.25 .75)"
                  display="block"
                />
              </g>
            </svg>
            <h3 className="text-2xl">Mobile App Development</h3>
            <p className="font-extralight">
              We have expertise in creating multi-platform mobile app solutions
              for both Android and iOS devices. Using PhoneGap, Xamarin, and
              React Native, we offer custom mobile app that runs smoothly on
              multiple platforms.
            </p>
          </article>
          <article className="flex flex-col gap-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 72 72"
              width={48}
              height={48}
              className="mb-4"
            >
              <defs>
                <clipPath id="a">
                  <path d="M0 0H72V72H0z" />
                </clipPath>
              </defs>
              <g display="block" clipPath="url(#a)">
                <path
                  strokeLinecap="square"
                  strokeMiterlimit={10}
                  stroke="#000"
                  strokeWidth={2}
                  d="M41.43 33.43v17.39H11V20.39h21.74"
                  fill="none"
                  transform="rotate(.005) scale(1.3333) scale(.75)"
                />
                <path
                  strokeLinecap="square"
                  strokeMiterlimit={10}
                  stroke="#000"
                  strokeWidth={2}
                  d="M26.22 33.43L43.61 3 61 33.43H26.22zM41.43 33.44c9.57 0 17.4 7.82 17.4 17.39 0 9.56-7.83 17.39-17.4 17.39-9.56 0-17.39-7.83-17.39-17.39"
                  fill="none"
                  transform="rotate(.005) scale(1.3333) scale(.75)"
                />
              </g>
            </svg>
            <h3 className="text-2xl">Digital Marketing</h3>
            <p className="font-extralight">
              The digital marketing services that we provide have their own set
              of charms. By taking our digital marketing services, our clients
              will be able to increase visibility and engage with their
              customers at the online platform.
            </p>
          </article>
        </div>
        <button className="relative group mt-16 w-fit py-3 px-6 bg-black text-white font-semibold before:w-full before:h-full before:scale-x-0 before:transition-transform before:duration-300 before:origin-left before:bg-green-500 hover:gap-4 hover:text-black hover:before:scale-x-100 isolate before:absolute before:top-0 before:left-0 before:z-0">
          <span className="relative z-10 flex items-center gap-2">
            Explore all services
            <svg
              className="group-hover:translate-x-2 transition-all duration-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              height="16"
              width="16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default What;
