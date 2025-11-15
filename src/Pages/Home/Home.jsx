import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-image.png';

import ramishImg from "../../assets/ramish.jpeg";
import mumuImg from "../../assets/mumu.png";
import saifaImg from "../../assets/saifa.jpeg";
import tasminImg from "../../assets/tasmin.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* NAVBAR */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600 tracking-tight">
            AURORA<span className="text-gray-700">HR</span>
          </div>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-indigo-600">Home</a>

            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
            <a href="#testimonials" className="hover:text-indigo-600">Ratings</a>
            <Link to="/login" className="hover:text-indigo-600">Login</Link>
            <Link to="/signup" className="hover:text-indigo-600">Sign Up</Link>
         
          </nav>
        </div>
      </header>

      {/* HERO */}
<section className="bg-gradient-to-br from-indigo-50 to-white py-20">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* Left: Text Content */}
    <div>
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
        Empower your team with smarter HR tools
      </h1>
      <p className="text-gray-600 text-lg mb-8">
        AURORA helps you manage employees, departments, assets, and recruitment — all in one place.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/signup" className="px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:opacity-90">
          Get Started
        </Link>
        <a href="#features" className="px-6 py-3 border border-gray-300 rounded-md font-medium hover:bg-gray-100">
          View Features
        </a>
      </div>
    </div>

   <div className="hidden md:block">
  <img
  src={heroImage}
  alt="Interface preview"
  className="w-full max-w-md mx-auto md:mx-0 mix-blend-multiply bg-transparent"
/>
</div>
  </div>
</section>
{/* FEATURES SLIDER */}
<section id="features" className="py-24 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-16">
      What You Can Do with AURORA
    </h2>

    <Swiper
      modules={[Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      pagination={{
        clickable: true,
        el: '.custom-swiper-pagination',
      }}
      grabCursor={true}
    >
      {[
        ['Employee Management', 'Track employee records, roles, and performance.'],
        ['Department Structuring', 'Create and manage departments with assigned leads.'],
        ['Asset Tracking', 'Assign and monitor company assets with ease.'],
        ['Recruitment Tools', 'Post jobs, manage applicants, and schedule interviews.'],
        ['Leave Management', 'Approve requests and track balances in real-time.'],
        ['Reports & Exports', 'Generate CSV/PDF reports with role-based access.'],
      ].map(([title, desc]) => (
        <SwiperSlide key={title}>
          <div className="p-8 bg-blue-100 rounded-xl shadow-lg hover:shadow-xl transition duration-300 h-full text-center">
            <h3 className="text-2xl font-extrabold text-indigo-900 mb-4">{title}</h3>
            <p className="text-lg text-gray-700 leading-relaxed">{desc}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

    {/* Pagination dots outside the card */}
    <div className="custom-swiper-pagination mt-6 flex justify-center" />
  </div>
</section>
      {/* ABOUT SECTION */}
<section id="about" className="py-20 bg-white">
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-6">About AURORA</h2>

    {/* Mission Statement */}
    <p className="text-indigo-600 text-xl font-semibold mb-4">
      Our mission: Simplify HR for every team, everywhere.
    </p>

    {/* Original About Text — untouched */}
    <p className="text-gray-600 text-lg leading-relaxed">
      AURORA is designed to simplify HR operations for modern teams. Whether you're a startup or a growing company, our platform helps you manage your workforce with clarity, efficiency, and confidence. From onboarding to performance tracking, we’ve got you covered.
    </p>
  </div>

  {/* Divider */}
  <div className="my-12 flex justify-center">
    <div className="w-24 h-1 bg-indigo-200 rounded-full" />
  </div>

  {/* TEAM SECTION */}
<div className="max-w-6xl mx-auto px-6 text-center py-16">
  <h3 className="text-3xl font-bold text-gray-800 mb-12">Meet Our Team</h3>

  {/* Supervisor */}
  <div className="mb-16 flex justify-center">
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

    {/* Member 1 */}
    <div className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
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

    {/* Member 2 */}
    <div className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
     <img
  src={mumuImg}
  alt="Mumu"
  className="w-28 h-28 mx-auto rounded-full object-cover object-center scale-110"
/>
      <h4 className="text-lg font-semibold text-indigo-700">Israt Anjuman Mumu</h4>
      <p className="text-sm text-gray-600">CSE 030 07879</p>
    </div>

    {/* Member 3 */}
    <div className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
     
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

  {/* CORE VALUES */}
  <div className="max-w-6xl mx-auto px-6 mt-16">
    <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h3>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left text-gray-700">
      <li>💡 Simplicity in every interaction</li>
      <li>🤝 Empathy for teams and users</li>
      <li>🚀 Relentless pursuit of improvement</li>
      <li>🔒 Trust through transparency</li>
      <li>📈 Data-driven decisions</li>
      <li>🌍 Building for global impact</li>
    </ul>
  </div>

  {/* COMPANY TIMELINE */}
  <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Journey</h3>
    <div className="space-y-4 text-gray-600">
      <p><strong>2023:</strong> AURORA was founded with a vision to simplify HR.</p>
      <p><strong>2024:</strong> Launched our MVP with 5 core modules.</p>
      <p><strong>2025:</strong> Trusted by 500+ teams across 12 countries.</p>
    </div>
  </div>

  {/* HOW WE WORK */}
  <div className="max-w-4xl mx-auto px-6 mt-16 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">How We Work</h3>
    <p className="text-gray-600 leading-relaxed">
      We believe in fast feedback, clean design, and building features that solve real-world problems.
      Our team collaborates across time zones, iterates quickly, and always puts the user first.
    </p>
  </div>

  {/* CUSTOMER IMPACT STATS */}
  <div className="max-w-6xl mx-auto px-6 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
    <div>
      <h4 className="text-3xl font-bold text-indigo-600">500+</h4>
      <p className="text-gray-600">Teams Empowered</p>
    </div>
    <div>
      <h4 className="text-3xl font-bold text-indigo-600">12</h4>
      <p className="text-gray-600">Countries Served</p>
    </div>
    <div>
      <h4 className="text-3xl font-bold text-indigo-600">99.9%</h4>
      <p className="text-gray-600">Uptime Guarantee</p>
    </div>
  </div>

  {/* CTA */}
  <div className="text-center mt-16">
    <Link to="/signup" className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md font-semibold hover:opacity-90">
      Join the AURORA journey
    </Link>
  </div>
</section>
{/* TESTIMONIALS */}
<section id="testimonials" className="py-24 bg-indigo-50">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">
      What People Think About Us
    </h2>

    {/* Testimonial Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
      
      {/* Card 1 */}
      <div className="bg-white rounded-xl shadow-md px-6 py-6 flex flex-col font-serif">
        <p className="text-lg text-gray-800 italic flex-1">
          AURORA makes employee management incredibly smooth. The UI is intuitive
          and the export feature is a lifesaver!
        </p>

        <div className="mt-4 text-yellow-500 text-lg">★★★★★</div>

        <h4 className="text-xl font-semibold text-indigo-800 mt-4 text-right italic">
          ~ Sadia Rahman
        </h4>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl shadow-md px-6 py-6 flex flex-col font-serif">
        <p className="text-lg text-gray-800 italic flex-1">
          Very helpful for HR tasks. I’d love to see more analytics features in future updates.
        </p>

        <div className="mt-4 text-yellow-500 text-lg">★★★★☆</div>

        <h4 className="text-xl font-semibold text-indigo-800 mt-4 text-right italic">
          ~ Tanvir Alam
        </h4>
      </div>

    </div>

    {/* Review Form */}
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center font-serif">
        Leave a Review
      </h3>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();

          // Clear fields
          e.target.reset();

          // Show thank you message
          document.getElementById("thank-you").classList.remove("hidden");

          // Hide after 3 seconds
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



{/* FAQ SECTION */}
<section id="faq" className="py-24 bg-gray-50">
  <div className="max-w-5xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center mb-14 text-gray-900">Frequently Asked Questions</h2>

    <div className="space-y-6">
      <div className="collapse collapse-arrow bg-indigo-100 rounded-xl shadow-md transition-all duration-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-semibold text-indigo-800 px-6 py-5">
          Is AURORA free to use?
        </div>
        <div className="collapse-content bg-white text-base text-gray-800 px-6 pb-6 rounded-b-xl">
          Yes! AURORA offers a free tier that gives you access to all essential features without any upfront cost. You can onboard your team, manage employee data, and explore the platform’s capabilities at no charge. It’s a great way to evaluate the system before upgrading to premium plans for advanced analytics and integrations.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-indigo-100 rounded-xl shadow-md transition-all duration-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-semibold text-indigo-800 px-6 py-5">
          Do I need technical skills to use it?
        </div>
        <div className="collapse-content bg-white text-base text-gray-800 px-6 pb-6 rounded-b-xl">
          Not at all. AURORA is designed with simplicity in mind, tailored for HR professionals and team managers. The interface is intuitive, with guided workflows and helpful prompts, so you can manage employee records, performance, and feedback without writing a single line of code.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-indigo-100 rounded-xl shadow-md transition-all duration-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-semibold text-indigo-800 px-6 py-5">
          Can I export employee data?
        </div>
        <div className="collapse-content bg-white text-base text-gray-800 px-6 pb-6 rounded-b-xl">
          Yes, exporting employee data is quick and flexible. You can generate reports in CSV or PDF format, allowing you to share insights with stakeholders, archive records, or integrate with other systems. The export feature supports filters and custom fields to tailor the output to your needs.
        </div>
      </div>

      <div className="collapse collapse-arrow bg-indigo-100 rounded-xl shadow-md transition-all duration-300">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-semibold text-indigo-800 px-6 py-5">
          Is my data secure?
        </div>
        <div className="collapse-content bg-white text-base text-gray-800 px-6 pb-6 rounded-b-xl">
          Absolutely. AURORA uses enterprise-grade security protocols to safeguard your information. All data is encrypted both in transit and at rest, and access is controlled through role-based permissions. Regular audits and compliance with data protection standards ensure your organization’s privacy is always a top priority.
        </div>
      </div>
    </div>
  </div>
</section>
      {/* CTA */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold">Ready to streamline your HR?</h3>
            <p className="text-sm mt-1">Start your free account and set up your first department in minutes.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/signup" className="px-5 py-2 bg-white text-indigo-600 rounded-md font-semibold hover:bg-gray-100">
              Create Account
            </Link>
            <Link to="/login" className="px-5 py-2 border border-white rounded-md font-medium hover:bg-white hover:text-indigo-600">
              Sign In
            </Link>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-20 bg-indigo-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-indigo-700">Contact Us</h2>
          <p className="mb-4 text-gray-600">Have questions or need support? Reach out to us anytime.</p>
          <p className="mb-2 text-gray-700 font-medium">📧 support@aurorahr.com</p>
          <p className="mb-2 text-gray-700 font-medium"> 📞 +880 1828 237764</p>
           <p className="mb-2 text-gray-700 font-medium">📍PCIU,South Khulshi,Chattogram</p>

          
        </div>
      </section>
{/*Location*/}
<section id="location" className="text-center py-16 bg-white">
  <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Us</h2>
  <p className="text-gray-700 mb-6">
    We're located at Port City International University, Chattogram.
  </p>
  <a
    href="https://www.google.com/maps/place/Port+City+International+University"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
  >
    View Exact Location
  </a>
</section>
      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 text-sm pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-white font-semibold mb-4">For Admins</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">Add Employee</a></li>
              <li><a href="#" className="hover:text-white">Manage Departments</a></li>
              <li><a href="#" className="hover:text-white">Asset Control</a></li>
              <li><a href="#" className="hover:text-white">Recruitment Panel</a></li>
              <li><a href="#" className="hover:text-white">Leave Approval</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">For Employees</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">View Profile</a></li>
              <li><a href="#" className="hover:text-white">Apply for Leave</a></li>
              <li><a href="#" className="hover:text-white">Check Assets</a></li>
              <li><a href="#" className="hover:text-white">Job Listings</a></li>
              <li><a href="#" className="hover:text-white">Download Reports</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">About AURORA</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
              <p className="mb-2">support@aurorahr.com</p>
               <p className="mb-2"> +880 1828 237764</p>
                <p className="mb-2">PCIU,South Khulshi,Chattogram</p>
             
            </div>
            <div className="mt-6 text-xs text-gray-500">
              © 2025 AURORA HR. All rights reserved.
            </div>
          </div>
        </div>

        {/* Last Updated */}
        <div className="text-center text-xs text-gray-500 mt-8">
          Last Updated: November 07, 2025
        </div>
      </footer>
    </div>
  );
};

export default Home;