import type { SVGProps } from 'react'

/**
 * Набор иконок сайта. Все используют currentColor — цвет задаётся классом text-*.
 * Пример: <ChevronIcon className="size-3 text-primary" />
 */
type IconProps = SVGProps<SVGSVGElement>

const base = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  'aria-hidden': true,
} as const

export const ChevronIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 12 8" {...props}>
    <path d="M1 1.5 6 6.5l5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
)

export const BurgerIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const CloseIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path d="M4 4l16 16M20 4 4 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export const ArrowUpIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path
      d="M12 20V4m0 0-6 6m6-6 6 6"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export const PlayIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 28" {...props}>
    <path d="M24 14 0 27.856V.144L24 14Z" fill="currentColor" />
  </svg>
)

export const PhoneIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path
      d="M20.6 15.6c-1.2 0-2.4-.2-3.5-.6-.4-.1-.8 0-1.1.3l-2.2 2.2a15.1 15.1 0 0 1-6.6-6.6l2.2-2.2c.3-.3.4-.7.3-1.1-.4-1.1-.6-2.3-.6-3.5 0-.6-.5-1.1-1.1-1.1H4.1C3.5 3 3 3.5 3 4.1 3 14 11 22 20.9 22c.6 0 1.1-.5 1.1-1.1v-3.9c0-.6-.5-1.1-1.1-1.1Z"
      fill="currentColor"
    />
  </svg>
)

export const MailIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path
      d="M20 4H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
      fill="currentColor"
    />
  </svg>
)

export const PinIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path
      d="M12 2a7 7 0 0 0-7 7c0 5.3 7 13 7 13s7-7.7 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
      fill="currentColor"
    />
  </svg>
)

export const TwitterIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path
      d="M23 4.6c-.8.4-1.7.6-2.6.7a4.5 4.5 0 0 0 2-2.5c-.9.5-1.9.9-2.9 1.1a4.5 4.5 0 0 0-7.7 4.1A12.8 12.8 0 0 1 2.5 3.3a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6v.1c0 2.2 1.5 4 3.6 4.4a4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 18.3a12.8 12.8 0 0 0 6.9 2c8.3 0 12.8-6.9 12.8-12.8v-.6c.9-.6 1.6-1.4 2.3-2.3Z"
      fill="currentColor"
    />
  </svg>
)

export const LinkedinIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path
      d="M5.4 7.6a2.4 2.4 0 1 0 0-4.8 2.4 2.4 0 0 0 0 4.8ZM3.3 9.3h4.2V22H3.3V9.3Zm6.8 0h4v1.8c.6-1 1.9-2.1 4-2.1 4.2 0 5 2.8 5 6.4V22h-4.2v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1v6h-4.2V9.3Z"
      fill="currentColor"
    />
  </svg>
)

export const GoogleIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path
      d="M21.8 10.2H12v3.9h5.6c-.5 2.6-2.7 4.1-5.6 4.1a6.2 6.2 0 1 1 4-10.9l2.9-2.9A10.2 10.2 0 1 0 12 22.2c5.9 0 10-4.1 10-10 0-.7 0-1.3-.2-2Z"
      fill="currentColor"
    />
  </svg>
)

export const FacebookIcon = (props: IconProps) => (
  <svg {...base} viewBox="0 0 24 24" {...props}>
    <path
      d="M13.5 22v-8.2h2.8l.4-3.2h-3.2V8.5c0-.9.3-1.6 1.6-1.6h1.7V4.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.3v3.2h2.8V22h3.4Z"
      fill="currentColor"
    />
  </svg>
)
