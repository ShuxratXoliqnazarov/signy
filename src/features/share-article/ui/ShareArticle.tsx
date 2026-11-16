import { FacebookIcon, GoogleIcon, LinkedinIcon, TwitterIcon } from '@/shared/ui/icons'

type ShareArticleProps = {
  title: string
}

/** Блок «Поделится:» с иконками соцсетей — открывает окно шеринга текущей страницы. */
export const ShareArticle = ({ title }: ShareArticleProps) => {
  const url = typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''
  const text = encodeURIComponent(title)

  const links = [
    {
      name: 'Twitter',
      Icon: TwitterIcon,
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
    },
    {
      name: 'LinkedIn',
      Icon: LinkedinIcon,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    },
    {
      name: 'Google',
      Icon: GoogleIcon,
      href: `https://mail.google.com/mail/?view=cm&su=${text}&body=${url}`,
    },
    {
      name: 'Facebook',
      Icon: FacebookIcon,
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
    },
  ]

  return (
    <div className="text-center">
      <p className="font-serif text-2xl font-medium">Поделится:</p>
      <ul className="mt-6 flex items-center justify-center gap-10">
        {links.map(({ name, Icon, href }) => (
          <li key={name}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Поделиться в ${name}`}
              className="block text-primary transition-transform hover:scale-115 hover:text-primary-dark"
            >
              <Icon className="size-9" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
