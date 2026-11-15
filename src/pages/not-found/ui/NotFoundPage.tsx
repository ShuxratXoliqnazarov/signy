import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { Container } from '@/shared/ui/container'

/**
 * Страница «404».
 * TODO: иллюстрация с городом и НЛО по макету (desktop / tablet / mobile).
 */
export const NotFoundPage = () => (
  <Container className="py-20 text-center">
    <p className="text-8xl font-extrabold text-primary">404</p>
    <h1 className="mt-4 text-2xl font-bold text-dark">Страница не найдена</h1>
    <Link
      to={ROUTES.HOME}
      className="mt-8 inline-flex h-11 items-center rounded-btn border border-primary px-6 font-semibold text-primary hover:bg-primary hover:text-white"
    >
      На главную
    </Link>
  </Container>
)
