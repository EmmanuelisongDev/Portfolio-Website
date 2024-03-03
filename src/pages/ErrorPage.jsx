import { Link } from "react-router-dom";
export default function ErrorPage() {
  return (
    <>
      <main className=" h-screen  scroll-smooth  align-middle w-full relative ">
        <span className="absolute bottom-0 right-0 "></span>
        <header className="text-center pt-60 px-[10%] bottom-[30%] ">
          <p className=" uppercase mt-14 text-lg md:text-3xl  w-full  ">
            Oops!
          </p>
          <h1 className=" mix-blend-difference font-header z-20 text-4xl text-center font-black md:text-7xl lg:text-9xl  ">
            404 - PAGE NOT FOUND
          </h1>
          <Link  to="/">
            <button className="mt-4 border border-[#0505af] text-[#0505af] rounded-full px-4 py-3 transition ease-out duration-300 delay-100 hover:bg-[#0505af] hover:text-white text-lg font-black my-10">
              Go to Home Page
            </button>
          </Link>
        </header>
      </main>
    </>
  );
}
