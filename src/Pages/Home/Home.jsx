import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/hero-image.png';

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
            <a href="#features" className="hover:text-indigo-600">Features</a>
            <a href="#about" className="hover:text-indigo-600">About</a>
            <a href="#faq" className="hover:text-indigo-600">FAQ</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
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
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h3 className="text-2xl font-bold text-gray-800 mb-8">Meet Our Team</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
        <h4 className="text-lg font-semibold text-indigo-700">Ramish Jahra Binte Hossain</h4>
        <p className="text-sm text-gray-600">CSE 031 08171</p>
      </div>
      <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
        <h4 className="text-lg font-semibold text-indigo-700">Israt Anjuman Mumu</h4>
        <p className="text-sm text-gray-600">CSE 030 07879</p>
      </div>
      <div className="bg-indigo-50 p-6 rounded-lg shadow-sm">
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
<section id="testimonials" className="py-20 bg-white">
  <div className="max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">What People Are Saying</h2>
    <div className="grid md:grid-cols-2 gap-8">
      <blockquote className="bg-gray-100 p-6 rounded-lg shadow text-left">
        <p className="text-gray-700 italic">“AURORA has completely streamlined our HR process. It’s intuitive, fast, and reliable.”</p>
        <footer className="mt-4 text-sm text-gray-500">— Sarah M., HR Manager at NovaTech</footer>
      </blockquote>
      <blockquote className="bg-gray-100 p-6 rounded-lg shadow text-left">
        <p className="text-gray-700 italic">“We onboarded 20+ employees in a week thanks to AURORA. The dashboard is a game changer.”</p>
        <footer className="mt-4 text-sm text-gray-500">— Arif H., Operations Lead at SoftEdge</footer>
      </blockquote>
    </div>
  </div>
</section>
{/* FAQ SECTION */}
<section id="faq" className="py-20 bg-indigo-50">
  <div className="max-w-4xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold text-indigo-700">Is AURORA free to use?</h4>
        <p className="text-gray-700">Yes! You can start with a free account and explore all core features without any cost.</p>
      </div>
      <div>
        <h4 className="font-semibold text-indigo-700">Do I need technical skills to use it?</h4>
        <p className="text-gray-700">Not at all. AURORA is built for HR teams and managers — no coding required.</p>
      </div>
      <div>
        <h4 className="font-semibold text-indigo-700">Can I export employee data?</h4>
        <p className="text-gray-700">Yes, you can export reports in CSV or PDF format with just a few clicks.</p>
      </div>
      <div>
        <h4 className="font-semibold text-indigo-700">Is my data secure?</h4>
        <p className="text-gray-700">Absolutely. We use industry-standard encryption and role-based access to protect your data.</p>
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