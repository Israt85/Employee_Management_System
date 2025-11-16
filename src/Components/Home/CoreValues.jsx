import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CoreValues = () => {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  // Add each <li> to itemsRef
  const addToRefs = (el) => {
    if (el && !itemsRef.current.includes(el)) {
      itemsRef.current.push(el);
    }
  };

  useEffect(() => {
    gsap.set(itemsRef.current, { x: -50, opacity: 0 });

    gsap.to(itemsRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // animate when container enters viewport
      },
    });
  }, []);

  return (
    <div ref={containerRef} className="max-w-6xl mx-auto px-6 mt-16">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left text-gray-700">
        <li ref={addToRefs}>💡 Simplicity in every interaction</li>
        <li ref={addToRefs}>🤝 Empathy for teams and users</li>
        <li ref={addToRefs}>🚀 Relentless pursuit of improvement</li>
        <li ref={addToRefs}>🔒 Trust through transparency</li>
        <li ref={addToRefs}>📈 Data-driven decisions</li>
        <li ref={addToRefs}>🌍 Building for global impact</li>
      </ul>
    </div>
  );
};

export default CoreValues;
