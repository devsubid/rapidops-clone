const Who = () => {
  return (
    <section className="container-custom-xs min-h-screen grid gap-14 place-content-center">
      <h3 className="text-4xl font-thin tracking-wide leading-relaxed">
        We’re a software and services company that builds and transforms
        businesses using advanced technology, data, and AI.
      </h3>
      <p className="font-thin leading-relaxed">
        We enable some of the most demanding organizations to enrich customer
        experiences, optimize efficiencies, launch new platforms, and monetize
        data opportunities. We offer fully-managed and end-to-end technology,
        tools, talent, and tactics as a single platform to deliver on
        mission-critical technology initiatives. We’re known for our speed,
        quality, and unbeatable ROI.
      </p>
      <button className="relative group w-fit py-3 px-6 bg-black text-white font-semibold before:w-full before:h-full before:scale-x-0 before:transition-transform before:duration-300 before:origin-left before:bg-green-500 hover:gap-4 hover:text-black hover:before:scale-x-100 isolate before:absolute before:top-0 before:left-0 before:z-0">
        <span className="relative z-10 flex items-center gap-2">
          Who we are
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
    </section>
  );
};

export default Who;
