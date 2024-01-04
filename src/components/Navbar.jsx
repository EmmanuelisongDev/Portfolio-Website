import NavContainer from "./NavContainer";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      <NavContainer>
        <nav className="flex items-center justify-between px-7  py-3 w-full">
          <div>
            <label className=" z-[70] mix-blend-darken font-black uppercase  ">
              Emmanuel Isong
            </label>
          </div>

          <div className="">
            <ul
              className={`  gap-1 hidden font-extrabold   z-50 md:flex  relative  text-xs `}
            >
              <li className="uppercase  cursor-pointer hover:line-through ">
                <HashLink to={"#projects"}> Project</HashLink>
              </li>

              <li className="uppercase  cursor-pointer hover:line-through ">
                <HashLink to={"#about-section"}> About </HashLink>
              </li>

              <li className="uppercase  cursor-pointer hover:line-through ">
                <HashLink to={"#contact"}> Contact</HashLink>
              </li>
            </ul>
          </div>
        </nav>
      </NavContainer>
    </>
  );
}
