import React, { useEffect, useRef } from 'react'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Features = () => {


  return (
    <div>
        <section id="features" className="py-24 bg-gray-50">
  <div className="max-w-4xl mx-auto px-6">
    <h2  className="text-4xl font-extrabold text-center text-gray-900 mb-16">
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
    </div>
  )
}
