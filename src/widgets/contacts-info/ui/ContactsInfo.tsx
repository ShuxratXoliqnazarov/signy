import { CONTACTS, toTelHref } from '@/shared/config'
import { MailIcon, PhoneIcon, PinIcon } from '@/shared/ui/icons'

/** Короткий текст и список контактов с синими иконками (телефоны, e-mail, адрес). */
export const ContactsInfo = () => (
  <div>
    <p className="max-w-[480px] text-base md:text-lg md:leading-[27px]">
      Мы всегда рады ответить на ваши вопросы и развивать эффективное сотрудничество по всем
      вопросам, связанным с электронным документооборотом.
    </p>
    <ul className="mt-5 space-y-3 text-base md:text-lg">
      <li className="flex gap-5">
        <PhoneIcon className="mt-0.5 size-6 shrink-0 text-primary" />
        <span className="flex flex-col gap-2">
          {CONTACTS.phones.map((p) => (
            <a key={p} href={toTelHref(p)} className="transition-colors hover:text-primary">
              {p}
            </a>
          ))}
        </span>
      </li>
      <li className="flex gap-5">
        <MailIcon className="mt-0.5 size-6 shrink-0 text-primary" />
        <a
          href={`mailto:${CONTACTS.email}`}
          className="break-all transition-colors hover:text-primary"
        >
          {CONTACTS.email}
        </a>
      </li>
      <li className="flex gap-5">
        <PinIcon className="mt-0.5 size-6 shrink-0 text-primary" />
        <address className="not-italic">{CONTACTS.address}</address>
      </li>
    </ul>
  </div>
)
