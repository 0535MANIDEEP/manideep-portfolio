// ============================================================
// TESTIMONIALS PAGE — Swiper Carousel
// ============================================================

import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import { Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/portfolioData';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? '#FFC107' : 'none'}
          style={{ color: i < rating ? '#FFC107' : 'var(--color-text-subtle)' }}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div
      className="card card-pad-lg h-full flex flex-col"
      style={{ minHeight: '320px' }}
    >
      {/* Quote Icon */}
      <div className="mb-5">
        <Quote size={32} style={{ color: 'var(--color-primary)', opacity: 0.4 }} />
      </div>

      {/* Content */}
      <p
        className="text-base leading-relaxed flex-1 mb-6"
        style={{ color: 'var(--color-text-muted)', fontStyle: 'italic' }}
      >
        "{t.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        <img
          src={t.avatar}
          alt={t.name}
          className="w-12 h-12 rounded-full object-cover"
          style={{ border: '2px solid var(--color-primary)' }}
        />
        <div className="flex-1">
          <p className="font-semibold text-sm" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-text)' }}>
            {t.name}
          </p>
          <p className="text-xs" style={{ color: 'var(--color-text-muted)' }}>
            {t.role} · {t.company}
          </p>
        </div>
        <StarRating rating={t.rating} />
      </div>
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <>
      <Helmet>
        <title>Testimonials — Manideep Daram</title>
        <meta name="description" content="What colleagues and collaborators say about working with Manideep Daram." />
      </Helmet>

      <section className="section" aria-label="Testimonials">
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 md:mb-12 text-center"
          >
            <p className="section-label justify-center">Social Proof</p>
            <h1 className="mb-4 md:mb-6">
              What People <span className="gradient-text">Say</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
              Trusted by clients, mentors, and teammates across diverse projects.
            </p>
          </motion.div>

          {/* Swiper Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-10 md:mb-12"
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="pb-12"
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t.id}>
                  <TestimonialCard t={t} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { value: '100%', label: 'Client Satisfaction' },
              { value: '10+', label: 'Projects Delivered' },
              { value: '5★', label: 'Average Rating' },
              { value: '0', label: 'Revisions Requested' },
            ].map(({ value, label }, i) => (
              <motion.div
                key={label}
                className="card card-pad text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-3xl font-bold mb-1" style={{ fontFamily: 'var(--font-number)', color: 'var(--color-primary)' }}>
                  {value}
                </p>
                <p className="text-sm" style={{ color: 'var(--color-text-muted)' }}>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
