import { useState } from 'react'
import preview from '@/shared/assets/images/video-preview.webp'
import { PlayButton } from '@/shared/ui/play-button'
import { Section } from '@/shared/ui/section'
import { SectionTitle } from '@/shared/ui/section-title'
import { VideoModal } from '@/shared/ui/video-modal'

/** «Познакомимся в живую?» — крупное превью видео, по Play открывается плеер в модалке. */
export const VideoSection = () => {
  const [open, setOpen] = useState(false)

  return (
    <Section className="xl:pt-[55px] xl:pb-[63px]">
      <SectionTitle>Познакомимся в живую?</SectionTitle>
      <div className="relative mx-auto mt-6 max-w-[734px] overflow-hidden rounded-card md:mt-8 xl:mt-9">
        <img
          src={preview}
          alt="Видео о сервисе Signy"
          loading="lazy"
          className="aspect-[734/451] w-full object-cover"
        />
        <PlayButton onClick={() => setOpen(true)} />
      </div>
      <VideoModal open={open} onClose={() => setOpen(false)} />
    </Section>
  )
}
