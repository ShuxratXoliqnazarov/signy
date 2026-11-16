import { useState } from 'react'
import { MAIN_VIDEO, VIDEOS, VideoCard } from '@/entities/video'
import { PlayButton } from '@/shared/ui/play-button'
import { VideoModal } from '@/shared/ui/video-modal'

/** Видеоинструкции: крупное видео во всю ширину + сетка 2×2 (на мобильной — в столбец). */
export const VideosGrid = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <h2 className="mt-5 text-xl font-medium md:mt-7 md:text-[34px] xl:mt-8 xl:text-[40px] xl:leading-tight">
        {MAIN_VIDEO.title}
      </h2>
      <p className="mt-1 text-sm">{MAIN_VIDEO.date}</p>
      <div className="relative mt-3 overflow-hidden rounded-card">
        <img
          src={MAIN_VIDEO.preview}
          alt={MAIN_VIDEO.title}
          className="aspect-[1230/590] w-full object-cover"
        />
        <PlayButton onClick={() => setOpen(true)} />
      </div>
      <VideoModal open={open} onClose={() => setOpen(false)} src={MAIN_VIDEO.url} />

      <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-x-[43px] xl:mt-12 xl:gap-x-[81px] xl:gap-y-[54px]">
        {VIDEOS.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </>
  )
}
