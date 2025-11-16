import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Set initial state
    gsap.set([textRef.current, buttonsRef.current], { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%", // animation starts when text enters viewport
      },
    });

    // Animate text from left
    tl.fromTo(
      textRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
      // Animate buttons from bottom
      .fromTo(
        buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5" // overlap slightly
      );
  }, []);

  return (
    <section className="py-16 bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div ref={textRef}>
          <h3 className="text-2xl font-bold">Ready to streamline your HR?</h3>
          <p className="text-sm mt-1">Start your free account and set up your first department in minutes.</p>
        </div>
        <div ref={buttonsRef} className="flex gap-4">
          <Link
            to="/signup"
            className="px-5 py-2 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100"
          >
            Create Account
          </Link>
          <Link
            to="/login"
            className="px-5 py-2 border border-white rounded-md font-medium hover:bg-white hover:text-indigo-600"
          >
            Sign In
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
