import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { ContactsInfo } from '@/widgets/contacts-info'
import { ContactsMap } from '@/widgets/contacts-map'

/** Страница «Контакты». Без блока подписки. */
export const ContactsPage = () => (
  <Container className="py-10">
    <Breadcrumbs items={[{ label: 'Контакты' }]} />
    <PageTitle>Наши контакты</PageTitle>
    <div className="grid gap-8 lg:grid-cols-2">
      <ContactsInfo />
      <ContactsMap />
    </div>
  </Container>
)
