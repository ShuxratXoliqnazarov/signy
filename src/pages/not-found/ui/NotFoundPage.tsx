import { Link } from 'react-router'
import { ROUTES } from '@/shared/config'
import { Container } from '@/shared/ui/container'

/**
 * Страница «404».
 * TODO: иллюстрация с городом и НЛО по макету (фреймы 404 / tablet / mobile_404).
 */
export const NotFoundPage = () => (
  <Container className="py-20 text-center">
    <p className="font-serif text-8xl font-semibold text-primary">404</p>
    <h1 className="mt-4 font-serif text-2xl font-medium">Страница не найдена</h1>
    <Link
      to={ROUTES.HOME}
      className="mt-8 inline-flex h-10 items-center rounded-full border border-primary px-8 caps text-primary transition-colors hover:bg-primary hover:text-white"
    >
      На главную
    </Link>
  </Container>
)
