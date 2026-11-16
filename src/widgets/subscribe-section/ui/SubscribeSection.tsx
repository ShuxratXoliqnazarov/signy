import { useState } from 'react'
import { SubscribeForm } from '@/features/subscribe'
import { Section, type SectionBg } from '@/shared/ui/section'
import { SectionTitle } from '@/shared/ui/section-title'

type SubscribeSectionProps = {
  /** На главной фон белый, на внутренних страницах — мятный (по макету) */
  bg?: Extract<SectionBg, 'white' | 'mint'>
}

/** «Подпишись на наши новости!» → после отправки «Отлично!» (Frame 33 / Frame 37). */
export const SubscribeSection = ({ bg = 'mint' }: SubscribeSectionProps) => {
  const [email, setEmail] = useState<string | null>(null)

  return (
    <Section bg={bg} className="text-center xl:py-[60px]" aria-live="polite">
      {email ? (
        <div className="py-4 md:py-6">
          <SectionTitle>Отлично!</SectionTitle>
          <p className="mx-auto mt-6 max-w-[470px] text-base leading-8">
            На адрес <b className="font-medium">{email}</b> теперь будут приходить самые важные
            новости
          </p>
        </div>
      ) : (
        <>
          <SectionTitle className="mx-auto max-w-64 md:max-w-none">
            Подпишись на наши новости!
          </SectionTitle>
          <p className="mx-auto mt-4 max-w-64 text-base md:mt-7 md:max-w-none md:text-lg">
            Введи свой электронный адрес и будь в курсе всех обновлений
          </p>
          <SubscribeForm onSuccess={setEmail} />
        </>
      )}
    </Section>
  )
}
