import { Link } from 'react-router'
import illustrationMobile from '@/shared/assets/images/not-found-mobile.webp'
import illustration from '@/shared/assets/images/not-found.webp'
import { ROUTES } from '@/shared/config'
import { buttonClass } from '@/shared/ui/button'

/** Страница «404» (фреймы 404 / mobile_404): город, НЛО с лучом и «404», текст и «НА ГЛАВНУЮ». */
export const NotFoundPage = () => (
  <section className="bg-[#3c5b89] text-center text-white">
    <picture>
      <source media="(min-width: 768px)" srcSet={illustration} />
      <img
        src={illustrationMobile}
        alt="НЛО забирает страницу: ошибка 404"
        className="w-full bg-white object-cover md:aspect-[1440/540]"
      />
    </picture>
    <div className="px-5 pt-2 pb-10 md:pt-4 md:pb-12 xl:pb-[30px]">
      <h1 className="sr-only">Страница не найдена</h1>
      <p className="mx-auto max-w-[540px] text-base md:text-2xl md:leading-[31px]">
        Мы честно старались найти, но этой страницы по всей видимости не существует.
      </p>
      <Link
        to={ROUTES.HOME}
        className={buttonClass({ variant: 'outline-white', className: 'mt-6 w-[178px] px-0' })}
      >
        На главную
      </Link>
    </div>
  </section>
)
