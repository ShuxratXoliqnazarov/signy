import { useState } from 'react'
import { PlayButton } from '@/shared/ui/play-button'
import { VideoModal } from '@/shared/ui/video-modal'
import type { Video } from '../model/types'

/** Карточка видео: превью с кнопкой Play (по клику — модалка с плеером), название и дата. */
export const VideoCard = ({ video }: { video: Video }) => {
  const [open, setOpen] = useState(false)
  return (
    <article>
      <div className="relative overflow-hidden rounded-card">
        <img
          src={video.preview}
          alt={video.title}
          loading="lazy"
          className="aspect-[575/340] w-full object-cover"
        />
        <PlayButton size="md" onClick={() => setOpen(true)} />
      </div>
      <h3 className="mt-3 text-xl font-medium md:text-2xl">{video.title}</h3>
      <p className="text-sm">{video.date}</p>
      <VideoModal open={open} onClose={() => setOpen(false)} src={video.url} />
    </article>
  )
}
