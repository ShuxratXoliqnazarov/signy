import { ContactForm } from '@/features/contact-form'
import { Breadcrumbs } from '@/shared/ui/breadcrumbs'
import { Container } from '@/shared/ui/container'
import { PageTitle } from '@/shared/ui/page-title'
import { ContactsInfo } from '@/widgets/contacts-info'
import { ContactsMap } from '@/widgets/contacts-map'

/**
 * Страница «Контакты» (фрейм contacts). Без блока подписки.
 * Десктоп: слева текст, контакты и форма, справа карта. Мобильная: карта между контактами и формой.
 */
export const ContactsPage = () => (
  <Container className="pt-1 pb-12 xl:pt-6 xl:pb-12">
    <Breadcrumbs items={[{ label: 'Контакты' }]} />
    <PageTitle>Наши контакты</PageTitle>
    <div className="mt-4 grid gap-6 md:mt-6 lg:grid-cols-[1fr_605px] lg:gap-x-12 xl:gap-x-[130px]">
      <div className="space-y-6 lg:row-span-2">
        <ContactsInfo />
        <ContactsMap className="lg:hidden" />
        <h2 className="pt-2 font-serif text-2xl font-medium md:text-[34px] xl:text-[40px]">
          ...или напишите нам:
        </h2>
        <ContactForm />
      </div>
      <ContactsMap className="hidden lg:block" />
    </div>
  </Container>
)
