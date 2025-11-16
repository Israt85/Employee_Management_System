
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

import ramishImg from "../../assets/ramish.jpeg";
import mumuImg from "../../assets/mumu.png";
import saifaImg from "../../assets/saifa.jpeg";
import tasminImg from "../../assets/tasmin.jpg";
import Navbar from '../Shared/Navbar';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from '../../Components/Home/Hero';
import { Features } from '../../Components/Home/Features';
import { useEffect, useRef } from 'react';
import TeamSection from '../../Components/Home/Team';
import Testimonials from '../../Components/Home/Testimonials';
import CTASection from '../../Components/Home/CTASection';
import CoreValues from '../../Components/Home/CoreValues';

gsap.registerPlugin(ScrollTrigger);





const Home = () => {
  

  
  return (
    <div className="min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* NAVBAR */}
     <Navbar></Navbar>

      {/* HERO */}
      <Hero></Hero>



{/* FEATURES SLIDER */}
<Features></Features>
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
 <TeamSection></TeamSection>
  {/* CORE VALUES */}
 <CoreValues></CoreValues>

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
<Testimonials></Testimonials>



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
    <CTASection></CTASection>

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
<section>
  <div className="w-full flex justify-center items-center py-10">
  <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl border border-gray-200">
    <h2 className="text-3xl font-bold mb-6 text-indigo-700">
      Our Live Location
    </h2>

    <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-md">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.859450386859!2d91.80745137537814!3d22.358935240767362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd97f972c9cbf%3A0x8fe976105b47e2f0!2sPort%20City%20International%20University!5e0!3m2!1sen!2sbd!4v1763114353247!5m2!1sen!2sbd"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full h-full border-0"
      ></iframe>
    </div>
  </div>
</div>

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