import v1 from '@/shared/assets/images/video-1.webp'
import v2 from '@/shared/assets/images/video-2.webp'
import v3 from '@/shared/assets/images/video-3.webp'
import v4 from '@/shared/assets/images/video-4.webp'
import main from '@/shared/assets/images/video-main.webp'
import { DEMO_VIDEO_URL } from '@/shared/config'
import type { Video } from './types'

export const MAIN_VIDEO: Video = {
  id: 'main',
  title: 'Название видео инструкции',
  preview: main,
  url: DEMO_VIDEO_URL,
  date: '28.05.2020',
}

export const VIDEOS: Video[] = [v1, v2, v3, v4].map((preview, i) => ({
  id: String(i + 1),
  title: 'Burn Calories Quicker in 30 Min.',
  preview,
  url: DEMO_VIDEO_URL,
  date: '05.03.2020',
}))
