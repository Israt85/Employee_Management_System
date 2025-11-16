import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const cardRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.set(cardRefs.current, { opacity: 0, y: 50 }); // start below with opacity 0

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: cardRefs.current[0],
        start: "top 80%", // start when first card enters viewport
      },
    });

    cardRefs.current.forEach((el, index) => {
      tl.fromTo(
        el,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        index * 0.2 // stagger effect
      );
    });
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-indigo-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">
          What People Think About Us
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div ref={addToRefs} className="bg-white rounded-xl shadow-md px-6 py-6 flex flex-col font-serif">
            <p className="text-lg text-gray-800 italic flex-1">
              AURORA makes employee management incredibly smooth. The UI is intuitive
              and the export feature is a lifesaver!
            </p>
            <div className="mt-4 text-yellow-500 text-lg">★★★★★</div>
            <h4 className="text-xl font-semibold text-indigo-800 mt-4 text-right italic">
              ~ Sadia Rahman
            </h4>
          </div>

          <div ref={addToRefs} className="bg-white rounded-xl shadow-md px-6 py-6 flex flex-col font-serif">
            <p className="text-lg text-gray-800 italic flex-1">
              Very helpful for HR tasks. I’d love to see more analytics features in future updates.
            </p>
            <div className="mt-4 text-yellow-500 text-lg">★★★★☆</div>
            <h4 className="text-xl font-semibold text-indigo-800 mt-4 text-right italic">
              ~ Tanvir Alam
            </h4>
          </div>
        </div>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-serif">
            Leave a Review
          </h3>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              e.target.reset();
              document.getElementById("thank-you").classList.remove("hidden");
              setTimeout(() => {
                document.getElementById("thank-you").classList.add("hidden");
              }, 3000);
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-serif"
            />

            <textarea
              placeholder="Your Review"
              rows="4"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 font-serif italic"
            ></textarea>

            <div className="rating flex space-x-1">
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating" className="mask mask-star-2 bg-orange-400" />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Submit Review
            </button>
          </form>

          <div
            id="thank-you"
            className="hidden mt-6 text-green-600 font-medium text-center font-serif"
          >
            Thank you, your ratings and reviews have been submitted.
          </div>
          </div>
      </div>
    </section>
  );
};

export default Testimonials;
