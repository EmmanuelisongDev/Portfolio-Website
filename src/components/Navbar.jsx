import NavContainer from "./NavContainer";
import { Link as SmoothLink } from "react-scroll";
import { Link } from "react-router-dom";
export default function Navbar({ handleToTop }) {
  return (
    <>
      <NavContainer>
        <nav className="flex items-center justify-between p-10 pb-5 mix-blend-difference  bg-white  w-full  text-[#0505af]">
          <div>
            <Link onClick={handleToTop} to="/">
              <label className=" cursor-pointer z-[70] hover:underline text-sm md:text-lg   font-black uppercase  ">
                Emmanuel Isong
              </label>
            </Link>
          </div>

          <div className="">
            <ul
              className={`  gap-1 hidden font-medium   z-50 md:flex  relative  text-sm md:text-lg `}
            >
              <li className="uppercase  cursor-pointer hover:underline ">
                <Link onClick={handleToTop} to={"/"}>
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="uppercase  cursor-pointer hover:underline ">
                <Link onClick={handleToTop} to={"/about"}>
                  {" "}
                  About{" "}
                </Link>
              </li>

              <li className="uppercase  cursor-pointer hover:underline ">
                <SmoothLink smooth={true} to="contact">
                  {" "}
                  Contact
                </SmoothLink>
              </li>
            </ul>
          </div>
        </nav>
      </NavContainer>
    </>
  );
}
