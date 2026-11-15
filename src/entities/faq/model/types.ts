export type FaqQuestion = {
  id: string
  question: string
  answer: string
  list?: string[]
}

export type FaqGroup = {
  id: string
  title: string
  questions: FaqQuestion[]
}
