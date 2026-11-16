import { CONTACTS } from '@/shared/config'
import { cn } from '@/shared/lib'

/** Карта Google с меткой офиса (без API-ключа, обычный embed). */
export const ContactsMap = ({ className }: { className?: string }) => (
  <div className={cn('overflow-hidden rounded-card bg-sky', className)}>
    <iframe
      title="Офис Signy на карте"
      src={`https://maps.google.com/maps?q=${encodeURIComponent(CONTACTS.address)}&z=14&output=embed`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      className="aspect-[605/249] min-h-[200px] w-full border-0 grayscale-[30%]"
    />
  </div>
)
