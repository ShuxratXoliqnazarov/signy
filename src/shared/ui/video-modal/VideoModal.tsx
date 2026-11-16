import { DEMO_VIDEO_URL } from '@/shared/config'
import { Modal } from '../modal'

type VideoModalProps = {
  open: boolean
  onClose: () => void
  src?: string
}

/** Модалка с встроенным видео (YouTube). Открывается по клику на Play. */
export const VideoModal = ({ open, onClose, src = DEMO_VIDEO_URL }: VideoModalProps) => (
  <Modal
    open={open}
    onClose={onClose}
    title="Видео"
    className="max-w-4xl bg-dark p-0 pt-14 md:px-0"
  >
    <div className="aspect-video w-full">
      {open && (
        <iframe
          src={`${src}?autoplay=1`}
          title="Видео"
          className="size-full"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  </Modal>
)
