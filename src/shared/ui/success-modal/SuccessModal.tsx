import envelope from '@/shared/assets/images/envelope.png'
import { Modal } from '../modal'

type SuccessModalProps = {
  open: boolean
  onClose: () => void
  title: string
  text: string
}

/** Состояние «Готово» после отправки формы (p-up_demo_done / done): текст + конверт. */
export const SuccessModal = ({ open, onClose, title, text }: SuccessModalProps) => (
  <Modal open={open} onClose={onClose} title={title}>
    <SuccessContent text={text} />
  </Modal>
)

export const SuccessContent = ({ text }: { text: string }) => (
  <>
    <p className="mx-auto mt-3 max-w-80 text-base whitespace-pre-line">{text}</p>
    <img src={envelope} alt="" className="mx-auto mt-8 w-40 md:w-56" />
  </>
)
