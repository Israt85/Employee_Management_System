import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import tasminImg from '../../assets/tasmin.jpg'
import ramishImg from '../../assets/ramish.jpeg'
import mumuImg from '../../assets/mumu.png'
import saifaImg from '../../assets/saifa.jpeg'

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  const teamRefs = useRef([]);

  // Helper to add refs
  const addToRefs = (el) => {
    if (el && !teamRefs.current.includes(el)) {
      teamRefs.current.push(el);
    }
  };

  useEffect(() => {
    // Set initial state
    gsap.set(teamRefs.current, { y: 50, opacity: 0 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: teamRefs.current[0], // start when first card enters
        start: "top 80%",             // adjust to your liking
        toggleActions: "play none none none",
      },
    });

    // Animate all cards from bottom with stagger
    tl.to(teamRefs.current, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 text-center py-16">
      <h3 className="text-3xl font-bold text-gray-800 mb-12" ref={addToRefs}>
        Meet Our Team
      </h3>

      {/* Supervisor */}
      <div ref={addToRefs} className="mb-16 flex justify-center">
        <div className="bg-indigo-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition w-64">
          <img
            src={tasminImg}
            alt="Tasmin Akther"
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />
          <h4 className="text-lg font-semibold text-indigo-700">Tasmin Akther</h4>
          <p className="text-sm text-gray-600">Supervisor</p>
        </div>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div ref={addToRefs} className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src={ramishImg}
            alt="Ramish"
            className="w-28 h-28 mx-auto rounded-full object-cover mb-4"
          />
          <h4 className="text-lg font-semibold text-indigo-700">
            Ramish Jahra Binte Hossain
          </h4>
          <p className="text-sm text-gray-600">CSE 031 08171</p>
        </div>

        <div ref={addToRefs} className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src={mumuImg}
            alt="Mumu"
            className="w-28 h-28 mx-auto rounded-full object-cover object-center scale-110"
          />
          <h4 className="text-lg font-semibold text-indigo-700">Israt Anjuman Mumu</h4>
          <p className="text-sm text-gray-600">CSE 030 07879</p>
        </div>

        <div ref={addToRefs} className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
          <img
            src={saifaImg}
            alt="Saifa"
            className="w-28 h-28 mx-auto rounded-full object-cover object-center scale-110"
          />
          <h4 className="text-lg font-semibold text-indigo-700">Saifa Binte Aziz</h4>
          <p className="text-sm text-gray-600">CSE 031 08179</p>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
