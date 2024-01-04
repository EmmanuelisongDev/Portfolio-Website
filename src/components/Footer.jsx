export default function Footer() {
  return (
    <footer
      id="contact"
      className=" scroll-smooth border-t pt-40   px-[10%] mt-40"
    >
      <h1 className=" font-black  text-5xl  lg:text-9xl ">
        LET'S <br />
        CONNECT
      </h1>

      <button className="py-4 px-6 hover:animate-pulse hover:bg-white hover:text-black rounded-full my-10 border  ">
        <a href="mailto:emmisongdev@gmail.com">CONTACT ME</a>
      </button>

      <div
        className="flex border-t
       gap-3 py-5 text-xs md:text-lg  "
      >
        <button>
          <a target="_blank" href="https://github.com/EmmanuelisongDev">
            GITHUB
          </a>
        </button>
        <button>
          <a target="_blank" href="http://x.com/emmisongdev">
            X(TWITTER)
          </a>
        </button>
        <button>
          <a
            target="_blank"
            href="http://www.linkedin.com/in/emmanuel-isong-086b19208"
          >
            LINKEDIN
          </a>
        </button>
      </div>
    </footer>
  );
}
