import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

export default function Ball() {
  useGSAP(() => {
    gsap.set(".ball", { xPercent: -50, yPercent: -50 });
    let targets = gsap.utils.toArray(".ball");
    window.addEventListener("mousemove", (e) => {
      gsap.to(targets, {
        duration: 0.5,
        x: e.clientX,
        y: e.clientY,
        ease: "power1.out",
        overwrite: "auto",
        stagger: 0.02,
      });
    });
  });
  return (
    <div>
      <div className="ball -z-20 bg-[#ff0000] h-6 w-6 fixed top-0 left-0 rounded-full"></div>
    </div>
  );
}
