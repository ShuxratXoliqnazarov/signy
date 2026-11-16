export type FaqQuestion = {
  id: string
  question: string
  answer: string
}

export type FaqGroup = {
  id: string
  title: string
  /** «Ответов на вопросы N» */
  total: number
  questions: FaqQuestion[]
}
