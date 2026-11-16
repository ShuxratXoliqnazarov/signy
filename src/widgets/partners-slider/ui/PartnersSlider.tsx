import { Grid, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/grid'
import { PARTNERS } from '@/entities/partner'
import { Container } from '@/shared/ui/container'
import { SectionTitle } from '@/shared/ui/section-title'

// В макете 4 логотипа и 3 точки — повторяем список, чтобы было что листать
const SLIDES = [...PARTNERS, ...PARTNERS, ...PARTNERS]

/** «Друзья Signy» — слайдер логотипов: десктоп/планшет по 4, мобильная 2×2. */
export const PartnersSlider = () => (
  <section className="bg-white py-10 md:py-14 xl:pt-[70px] xl:pb-[60px]">
    <Container>
      <SectionTitle>Друзья Signy</SectionTitle>
      <Swiper
        modules={[Pagination, Grid]}
        slidesPerView={2}
        slidesPerGroup={2}
        grid={{ rows: 2, fill: 'row' }}
        spaceBetween={16}
        breakpoints={{
          768: { slidesPerView: 4, slidesPerGroup: 4, grid: { rows: 1 }, spaceBetween: 24 },
        }}
        pagination={{ clickable: true, el: '.partners-dots' }}
        className="mx-auto mt-6 max-w-[1060px] md:mt-8 xl:mt-10"
      >
        {SLIDES.map((p, i) => (
          <SwiperSlide key={`${p.id}-${i}`}>
            <div className="flex h-[70px] items-center justify-center md:h-[110px] xl:h-[130px]">
              <img
                src={p.logo}
                alt={p.name}
                loading="lazy"
                className="max-h-full max-w-full object-contain grayscale-0 transition-transform hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="partners-dots signy-dots mt-6 xl:mt-4" />
    </Container>
  </section>
)
