import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import heroImage from "../../assets/hero-image.png";

const Hero = () => {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.set([textRef.current, imgRef.current], { opacity: 0 });

    const tl = gsap.timeline();

    tl.fromTo(
      textRef.current,
      { x: -40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    ).fromTo(
      imgRef.current,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.7"
    );
  }, []);

  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white  py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div ref={textRef}>
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
            Empower your team with smarter HR tools
          </h1>

          <p className="text-gray-600 text-lg mb-8">
            AURORA helps you manage employees, departments, assets, recruitment,
            and attendance — all from a single dashboard.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/signup"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:opacity-90"
            >
              Get Started
            </Link>
            <a
              href="#features"
              className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-100"
            >
              View Features
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden md:flex justify-center" ref={imgRef}>
          <img
            src={heroImage}
            alt="Dashboard preview"
            className="w-full max-w-md drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
